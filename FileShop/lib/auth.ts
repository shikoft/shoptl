// lib/auth.ts
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { supabase } from './supabase'
import { db } from './db'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export interface AuthResponse {
  success: boolean
  message: string
  token?: string
  user?: any
}

export const auth = {
  async register(email: string, username: string, password: string, fullName?: string): Promise<AuthResponse> {
    try {
      // Kiểm tra email đã tồn tại
      const existingUser = await db.getUserByEmail(email)
      if (existingUser) {
        return { success: false, message: 'Email đã được sử dụng' }
      }

      // Mã hóa password
      const salt = await bcrypt.genSalt(10)
      const passwordHash = await bcrypt.hash(password, salt)

      // Tạo user trong database
      const { data: user, error } = await supabase
        .from('users')
        .insert([
          {
            email,
            username,
            password_hash: passwordHash,
            full_name: fullName,
            role: 'user',
            balance: 0
          }
        ])
        .select()
        .single()

      if (error) throw error

      // Tạo JWT token
      const token = jwt.sign(
        { userId: user.id, email: user.email, role: user.role },
        JWT_SECRET,
        { expiresIn: '7d' }
      )

      return {
        success: true,
        message: 'Đăng ký thành công',
        token,
        user: {
          id: user.id,
          email: user.email,
          username: user.username,
          full_name: user.full_name,
          role: user.role,
          balance: user.balance
        }
      }
    } catch (error) {
      console.error('Register error:', error)
      return { success: false, message: 'Đã xảy ra lỗi khi đăng ký' }
    }
  },

  async login(email: string, password: string): Promise<AuthResponse> {
    try {
      // Lấy user từ database
      const { data: user, error } = await supabase
        .from('users')
        .select('*')
        .eq('email', email)
        .single()

      if (error || !user) {
        return { success: false, message: 'Email hoặc mật khẩu không đúng' }
      }

      // Kiểm tra password
      const isValidPassword = await bcrypt.compare(password, user.password_hash)
      if (!isValidPassword) {
        return { success: false, message: 'Email hoặc mật khẩu không đúng' }
      }

      // Tạo JWT token
      const token = jwt.sign(
        { userId: user.id, email: user.email, role: user.role },
        JWT_SECRET,
        { expiresIn: '7d' }
      )

      return {
        success: true,
        message: 'Đăng nhập thành công',
        token,
        user: {
          id: user.id,
          email: user.email,
          username: user.username,
          full_name: user.full_name,
          role: user.role,
          balance: user.balance
        }
      }
    } catch (error) {
      console.error('Login error:', error)
      return { success: false, message: 'Đã xảy ra lỗi khi đăng nhập' }
    }
  },

  verifyToken(token: string) {
    try {
      const decoded = jwt.verify(token, JWT_SECRET) as any
      return { success: true, decoded }
    } catch (error) {
      return { success: false, message: 'Token không hợp lệ' }
    }
  }
}
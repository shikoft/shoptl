// app/api/auth/login/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().email('Email không hợp lệ'),
  password: z.string().min(1, 'Vui lòng nhập mật khẩu')
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = loginSchema.parse(body)
    
    const result = await auth.login(
      validatedData.email,
      validatedData.password
    )
    
    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.message },
        { status: 401 }
      )
    }
    
    return NextResponse.json({
      success: true,
      message: 'Đăng nhập thành công',
      token: result.token,
      user: result.user
    })
    
  } catch (error) {
    console.error('Login API error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: error.errors[0].message },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { success: false, message: 'Đã xảy ra lỗi hệ thống' },
      { status: 500 }
    )
  }
}
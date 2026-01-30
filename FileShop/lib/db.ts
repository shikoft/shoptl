// lib/db.ts
import { supabase } from './supabase'

// Types
export interface User {
  id: string
  email: string
  username: string
  full_name?: string
  avatar_url?: string
  role: 'user' | 'admin'
  balance: number
  created_at: string
}

export interface GameAccount {
  id: string
  title: string
  description: string
  price: number
  original_price?: number
  server: string
  adventure_rank: number
  world_level: number
  characters: string[]
  weapons: string[]
  primogems: number
  intertwined_fate: number
  status: 'available' | 'sold' | 'reserved'
  seller_id: string
  images: string[]
  featured_image: string
  created_at: string
}

export interface Order {
  id: string
  order_code: string
  account_id: string
  buyer_id: string
  seller_id: string
  total_amount: number
  status: 'pending' | 'completed' | 'cancelled'
  payment_method?: string
  transaction_id?: string
  account_details: any
  created_at: string
}

// Database operations
export const db = {
  // User operations
  async createUser(userData: Omit<User, 'id' | 'created_at' | 'role' | 'balance'> & { password: string }) {
    // Implementation sẽ thêm sau
  },

  async getUserByEmail(email: string): Promise<User | null> {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single()
    
    if (error) return null
    return data as User
  },

  async getUserById(id: string): Promise<User | null> {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', id)
      .single()
    
    if (error) return null
    return data as User
  },

  // Game Account operations
  async getGameAccounts(filters?: {
    status?: string
    server?: string
    minPrice?: number
    maxPrice?: number
    minAR?: number
  }) {
    let query = supabase
      .from('game_accounts')
      .select(`
        *,
        seller:users(full_name, username, avatar_url)
      `)
      .eq('status', 'available')
      .order('created_at', { ascending: false })

    if (filters?.server) {
      query = query.eq('server', filters.server)
    }
    
    if (filters?.minPrice) {
      query = query.gte('price', filters.minPrice)
    }
    
    if (filters?.maxPrice) {
      query = query.lte('price', filters.maxPrice)
    }
    
    if (filters?.minAR) {
      query = query.gte('adventure_rank', filters.minAR)
    }

    const { data, error } = await query
    
    if (error) throw error
    return data
  },

  async getGameAccountById(id: string) {
    const { data, error } = await supabase
      .from('game_accounts')
      .select(`
        *,
        seller:users(full_name, username, avatar_url, created_at)
      `)
      .eq('id', id)
      .single()
    
    if (error) throw error
    return data
  },

  // Order operations
  async createOrder(orderData: Omit<Order, 'id' | 'created_at'>) {
    const { data, error } = await supabase
      .from('orders')
      .insert([orderData])
      .select()
      .single()
    
    if (error) throw error
    return data
  }
}
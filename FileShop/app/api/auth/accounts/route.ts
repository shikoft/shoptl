// app/api/accounts/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { auth } from '@/lib/auth'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const server = searchParams.get('server')
    const minPrice = searchParams.get('minPrice')
    const maxPrice = searchParams.get('maxPrice')
    const minAR = searchParams.get('minAR')
    const status = searchParams.get('status') || 'available'
    
    let query = supabase
      .from('game_accounts')
      .select(`
        *,
        seller:users(id, username, full_name, avatar_url, created_at)
      `)
      .eq('status', status)
      .order('created_at', { ascending: false })
    
    if (server) {
      query = query.eq('server', server)
    }
    
    if (minPrice) {
      query = query.gte('price', parseFloat(minPrice))
    }
    
    if (maxPrice) {
      query = query.lte('price', parseFloat(maxPrice))
    }
    
    if (minAR) {
      query = query.gte('adventure_rank', parseInt(minAR))
    }
    
    const { data, error } = await query
    
    if (error) throw error
    
    return NextResponse.json({
      success: true,
      data
    })
    
  } catch (error) {
    console.error('Get accounts error:', error)
    return NextResponse.json(
      { success: false, message: 'Không thể lấy danh sách tài khoản' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const token = request.headers.get('Authorization')?.replace('Bearer ', '')
    
    if (!token) {
      return NextResponse.json(
        { success: false, message: 'Không có quyền truy cập' },
        { status: 401 }
      )
    }
    
    const verifyResult = auth.verifyToken(token)
    if (!verifyResult.success) {
      return NextResponse.json(
        { success: false, message: 'Token không hợp lệ' },
        { status: 401 }
      )
    }
    
    const body = await request.json()
    
    // Validate required fields
    const requiredFields = ['title', 'price', 'server', 'adventure_rank']
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { success: false, message: `Thiếu trường ${field}` },
          { status: 400 }
        )
      }
    }
    
    const accountData = {
      ...body,
      seller_id: verifyResult.decoded.userId,
      status: 'available',
      images: body.images || [],
      characters: body.characters || [],
      weapons: body.weapons || []
    }
    
    const { data, error } = await supabase
      .from('game_accounts')
      .insert([accountData])
      .select()
      .single()
    
    if (error) throw error
    
    return NextResponse.json({
      success: true,
      message: 'Đăng tài khoản thành công',
      data
    })
    
  } catch (error) {
    console.error('Create account error:', error)
    return NextResponse.json(
      { success: false, message: 'Không thể đăng tài khoản' },
      { status: 500 }
    )
  }
}
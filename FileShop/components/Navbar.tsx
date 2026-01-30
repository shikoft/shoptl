// components/Navbar.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import {
  ShoppingCart,
  User,
  LogOut,
  Package,
  Menu,
  X,
  Home,
  PlusCircle,
  Wallet
} from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, logout } = useAuth()

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Package className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800">Genshin Store</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600 flex items-center space-x-1">
              <Home size={18} />
              <span>Trang chủ</span>
            </Link>
            
            <Link href="/accounts" className="text-gray-700 hover:text-blue-600">
              Tài khoản
            </Link>
            
            {user && (
              <>
                <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 flex items-center space-x-1">
                  <User size={18} />
                  <span>Dashboard</span>
                </Link>
                
                <Link href="/accounts/create" className="text-gray-700 hover:text-blue-600 flex items-center space-x-1">
                  <PlusCircle size={18} />
                  <span>Đăng bán</span>
                </Link>
              </>
            )}
          </div>

          {/* Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Wallet size={18} className="text-green-600" />
                  <span className="font-semibold">{user.balance.toLocaleString()} VND</span>
                </div>
                
                <div className="relative group">
                  <button className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200">
                    <User size={18} />
                    <span>{user.username}</span>
                  </button>
                  
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block z-50">
                    <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100">
                      Hồ sơ
                    </Link>
                    <Link href="/orders" className="block px-4 py-2 hover:bg-gray-100">
                      Đơn hàng
                    </Link>
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600 flex items-center space-x-2"
                    >
                      <LogOut size={16} />
                      <span>Đăng xuất</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link href="/login" className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                  Đăng nhập
                </Link>
                <Link href="/register" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Đăng ký
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="py-2 hover:text-blue-600">
                Trang chủ
              </Link>
              <Link href="/accounts" className="py-2 hover:text-blue-600">
                Tài khoản
              </Link>
              
              {user ? (
                <>
                  <Link href="/dashboard" className="py-2 hover:text-blue-600">
                    Dashboard
                  </Link>
                  <Link href="/accounts/create" className="py-2 hover:text-blue-600">
                    Đăng bán
                  </Link>
                  <div className="pt-4 border-t">
                    <p className="font-semibold">{user.username}</p>
                    <p className="text-green-600">{user.balance.toLocaleString()} VND</p>
                    <button
                      onClick={logout}
                      className="mt-2 text-red-600 flex items-center space-x-2"
                    >
                      <LogOut size={16} />
                      <span>Đăng xuất</span>
                    </button>
                  </div>
                </>
              ) : (
                <div className="pt-4 border-t">
                  <Link href="/login" className="block py-2 text-blue-600">
                    Đăng nhập
                  </Link>
                  <Link href="/register" className="block py-2 text-blue-600">
                    Đăng ký
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
// components/AccountCard.tsx
import Link from 'next/link'
import { GameAccount } from '@/lib/db'
import { 
  Star, 
  Sword, 
  Users, 
  Globe,
  Shield
} from 'lucide-react'

interface AccountCardProps {
  account: GameAccount & {
    seller?: {
      username: string
      full_name?: string
      avatar_url?: string
    }
  }
}

export default function AccountCard({ account }: AccountCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price)
  }

  return (
    <Link href={`/accounts/${account.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {/* Image */}
        <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 relative">
          {account.featured_image ? (
            <img 
              src={account.featured_image} 
              alt={account.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Shield className="h-16 w-16 text-white opacity-70" />
            </div>
          )}
          
          {/* Status badge */}
          <div className="absolute top-2 right-2">
            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
              account.status === 'available' 
                ? 'bg-green-100 text-green-800'
                : account.status === 'sold'
                ? 'bg-red-100 text-red-800'
                : 'bg-yellow-100 text-yellow-800'
            }`}>
              {account.status === 'available' ? 'Có sẵn' : 
               account.status === 'sold' ? 'Đã bán' : 'Đặt trước'}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-bold text-lg text-gray-900 mb-2 truncate">
            {account.title}
          </h3>
          
          {/* Price */}
          <div className="mb-3">
            <div className="text-2xl font-bold text-blue-600">
              {formatPrice(account.price)}
            </div>
            {account.original_price && (
              <div className="text-sm text-gray-500 line-through">
                {formatPrice(account.original_price)}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-gray-700">
              <Star className="h-4 w-4 text-yellow-500 mr-2" />
              <span>Adventure Rank: <strong>{account.adventure_rank}</strong></span>
            </div>
            
            <div className="flex items-center text-gray-700">
              <Sword className="h-4 w-4 text-red-500 mr-2" />
              <span>World Level: <strong>{account.world_level}</strong></span>
            </div>
            
            <div className="flex items-center text-gray-700">
              <Users className="h-4 w-4 text-green-500 mr-2" />
              <span>Characters: <strong>{account.characters?.length || 0}</strong></span>
            </div>
            
            <div className="flex items-center text-gray-700">
              <Globe className="h-4 w-4 text-blue-500 mr-2" />
              <span>Server: <strong>{account.server}</strong></span>
            </div>
          </div>

          {/* Seller info */}
          {account.seller && (
            <div className="flex items-center pt-3 border-t">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                {account.seller.avatar_url ? (
                  <img 
                    src={account.seller.avatar_url} 
                    alt={account.seller.username}
                    className="w-full h-full rounded-full"
                  />
                ) : (
                  <span className="text-sm font-semibold">
                    {account.seller.username?.charAt(0).toUpperCase()}
                  </span>
                )}
              </div>
              <div>
                <div className="text-sm font-medium">
                  {account.seller.full_name || account.seller.username}
                </div>
                <div className="text-xs text-gray-500">Người bán</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}
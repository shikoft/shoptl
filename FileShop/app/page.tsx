// app/page.tsx
import Link from 'next/link'
import AccountCard from '@/components/AccountCard'
import { db } from '@/lib/db'

export default async function Home() {
  const accounts = await db.getGameAccounts({
    minAR: 50,
    status: 'available'
  })

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Mua Bán Tài Khoản Genshin Impact
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Nơi giao dịch tài khoản Genshin Impact uy tín, an toàn
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/accounts"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
          >
            Xem tất cả tài khoản
          </Link>
          <Link
            href="/accounts/create"
            className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold"
          >
            Đăng bán tài khoản
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <div className="text-2xl font-bold text-blue-600">100+</div>
          <div className="text-gray-600">Tài khoản có sẵn</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <div className="text-2xl font-bold text-green-600">50+</div>
          <div className="text-gray-600">Giao dịch thành công</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <div className="text-2xl font-bold text-purple-600">4.8/5</div>
          <div className="text-gray-600">Đánh giá người dùng</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <div className="text-2xl font-bold text-orange-600">100%</div>
          <div className="text-gray-600">Bảo mật an toàn</div>
        </div>
      </section>

      {/* Featured Accounts */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Tài khoản nổi bật</h2>
          <Link href="/accounts" className="text-blue-600 hover:text-blue-800">
            Xem tất cả →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accounts.slice(0, 6).map((account) => (
            <AccountCard key={account.id} account={account} />
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white rounded-lg shadow p-8 mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">Cách thức hoạt động</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="font-semibold mb-2">Chọn tài khoản</h3>
            <p className="text-gray-600">Tìm và chọn tài khoản phù hợp với nhu cầu của bạn</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-green-600">2</span>
            </div>
            <h3 className="font-semibold mb-2">Thanh toán</h3>
            <p className="text-gray-600">Thanh toán an toàn qua nhiều phương thức</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-purple-600">3</span>
            </div>
            <h3 className="font-semibold mb-2">Nhận tài khoản</h3>
            <p className="text-gray-600">Nhận thông tin tài khoản ngay sau khi thanh toán</p>
          </div>
        </div>
      </section>
    </div>
  )
}
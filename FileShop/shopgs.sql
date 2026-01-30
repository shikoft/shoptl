-- Bảng users (người dùng)
CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  username VARCHAR(50) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  full_name VARCHAR(100),
  avatar_url TEXT,
  role VARCHAR(20) DEFAULT 'user' CHECK (role IN ('user', 'admin')),
  balance DECIMAL(10, 2) DEFAULT 0.00,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Bảng accounts (tài khoản game)
CREATE TABLE game_accounts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  original_price DECIMAL(10, 2),
  server VARCHAR(50),
  adventure_rank INTEGER,
  world_level INTEGER,
  characters TEXT[], -- Array of character names
  weapons TEXT[], -- Array of weapon names
  primogems INTEGER,
  intertwined_fate INTEGER,
  status VARCHAR(20) DEFAULT 'available' CHECK (status IN ('available', 'sold', 'reserved')),
  seller_id UUID REFERENCES users(id),
  images TEXT[], -- Array of image URLs
  featured_image TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Bảng orders (đơn hàng)
CREATE TABLE orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  order_code VARCHAR(20) UNIQUE NOT NULL,
  account_id UUID REFERENCES game_accounts(id),
  buyer_id UUID REFERENCES users(id),
  seller_id UUID REFERENCES users(id),
  total_amount DECIMAL(10, 2) NOT NULL,
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'cancelled')),
  payment_method VARCHAR(50),
  transaction_id VARCHAR(100),
  account_details JSONB, -- Lưu thông tin account tại thời điểm mua
  created_at TIMESTAMP DEFAULT NOW(),
  completed_at TIMESTAMP
);

-- Bảng reviews (đánh giá)
CREATE TABLE reviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id UUID REFERENCES orders(id),
  seller_id UUID REFERENCES users(id),
  buyer_id UUID REFERENCES users(id),
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Bảng transactions (giao dịch nạp/rút)
CREATE TABLE transactions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  amount DECIMAL(10, 2) NOT NULL,
  type VARCHAR(20) CHECK (type IN ('deposit', 'withdraw', 'purchase', 'sale')),
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed')),
  payment_method VARCHAR(50),
  transaction_code VARCHAR(50),
  note TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Bảng messages (tin nhắn)
CREATE TABLE messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  conversation_id VARCHAR(100),
  sender_id UUID REFERENCES users(id),
  receiver_id UUID REFERENCES users(id),
  content TEXT,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Tạo indexes cho hiệu suất
CREATE INDEX idx_game_accounts_status ON game_accounts(status);
CREATE INDEX idx_game_accounts_seller ON game_accounts(seller_id);
CREATE INDEX idx_orders_buyer ON orders(buyer_id);
CREATE INDEX idx_orders_seller ON orders(seller_id);
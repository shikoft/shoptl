import "./globals.css";

export const metadata = {
  title: "Profile ShikoFT",
  description: "Giới thiệu bản thân và sản phẩm",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>
        {/* ===== BACKGROUND SHOOTING STARS ===== */}
        <div className="stars-bg">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="shooting-star" />
          ))}
        </div>

        {/* ===== PAGE CONTENT ===== */}
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}

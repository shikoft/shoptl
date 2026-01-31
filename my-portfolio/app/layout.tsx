import "./globals.css";

export const metadata = {
  title: "Profile ShikoFT",
  description: "Giới thiệu bản thân và sản phẩm",
  icons: {
    icon: "/icon.png",          // favicon cho web
    apple: "/apple-icon.png",   // icon cho iOS (tuỳ chọn)
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}

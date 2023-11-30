export const metadata = {
  title: "Ernestoyoofi",
  description: "Hanya seorang web developer & seorang foto dan videografi asal Yogyakarta"
}

import FooterSection from "~/layout/components/footer"
import "./globals.css"
import NavigationBar from "~/layout/components/navigation"

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <NavigationBar />
        {children}
        <FooterSection />
      </body>
    </html>
  )
}

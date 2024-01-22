export const metadata = {
  title: "Ernestoyoofi",
  description: "Hanya seorang web developer & seorang foto dan videografi asal Yogyakarta"
}

import FooterSection from "~/layout/components/footer"
import "./globals.css"
import NavigationBar from "~/layout/components/navigation"
import AppLauncer from "~/layout/meta/AppLauncer"
import _default from "~/default"
import Script from "next/script"

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <meta name="google-site-verification" content="wcC28rNmbYV1lR_OamoSTSVfx87bc4xPFDq_yZt62TA" />
      <body>
        <p>Upsss, Mohon Maaf, Situs Sedang Tidak Tersedia, Situs Sedang Dalam Perbaikan</p>
        // <NavigationBar />
        // <main>
        //  <AppLauncer>{children}</AppLauncer>
        // </main>
        // <FooterSection />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${_default.gaTracking}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', '${_default.gaTracking}', {\npage_path: window.location.pathname,\n});\n`}}
        />
      </body>
    </html>
  )
}

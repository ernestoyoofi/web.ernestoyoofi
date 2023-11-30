'use client'

import l from "./navigation.module.css"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function NavigationBar() {
  const pathname = usePathname()

  useEffect(() => {
    console.log(`Url: ${pathname}`)
  })

  const selectIt = (path) => {
    return path === pathname? "openit-1":null
  }

  return <header className={l.headers_page}>
    <div className={l.response}>
      <div className={l.pgd_icon}>
        <div className={l.section_icon}>
          <h3>Ernesto <span className={l.citical}>Yoofi</span></h3>
        </div>
      </div>
      <div className={l.pgd_link}>
        <Link href="/" select-it={selectIt("/")}>Beranda</Link>
        <Link href="/blog" select-it={selectIt("/blog")}>Blog</Link>
      </div>
    </div>
  </header>
}
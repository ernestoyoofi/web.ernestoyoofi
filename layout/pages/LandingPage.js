"use client"

import { useEffect } from "react"
import Image from "next/image"
import l from "./LandingPage.module.css"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6"
import BlogListCard from "./BlogList"

function ReactForPromotion() {
  useEffect(() => {
    const allPromotion = document.querySelectorAll('[banner-promotion]')

    if(window.innerWidth < 1150) {
      allPromotion.forEach(el => {
        el.style.width = window.innerWidth+"px"
      })
    }
    window.addEventListener("resize", () => {
      if(window.innerWidth < 1150) {
        allPromotion.forEach(el => {
          el.style.width = window.innerWidth+"px"
        })
      }
    })
  })

  const swipePages = (method) => {
    const pointSelect = document.querySelector('[banner-promotion-scrolled]')
    const selected = Number(pointSelect.getAttribute("banner-promotion-scrolled"))
    const allPromotion = document.querySelectorAll('[banner-promotion]')
    const isLastMeta = selected > allPromotion.length - 2
    const isFirstMeta = selected === 0

    if((isLastMeta && method === "right") || (isFirstMeta && method === "left")) {
      return;
    }
    if(method === "left") {
      pointSelect.setAttribute("banner-promotion-scrolled", String(selected - 1))
      allPromotion.forEach((a, i) => {
        if(i < selected - 1) {
          return a.style.marginLeft = "-100%";
        }
        a.style.marginLeft = ""
      })
    }
    if(method === "right") {
      pointSelect.setAttribute("banner-promotion-scrolled", String(selected + 1))
      allPromotion.forEach((a, i) => {
        if(selected < i) {
          return a.style.marginLeft = "";
        }
        a.style.marginLeft = "-100%"
      })
    }
  }

  return <>
    <div className={l.banner_select_promotion} banner-promotion-scrolled="0">
      <div className={l.banner_promotion_option} banner-promotion="!">
        <div className={l.banner_card} style={{background:"#ffffff"}}>
          <div className={l.banner_image}>
            <Image src="/coffee-laked-lower.png" width="300" height="300"/>
          </div>
          <div className={l.banner_texted}>
            <h3>Coffee Laked's Tersedia Untuk WhatsApp</h3>
            <p>Bergabunglah untuk mendapatkan informasi dari project project baru dan termasuk betanya !</p>
            <a target="_blank" href="https://whatsapp.com/channel/0029VaAtv296RGJBr1UbWV3r" style={{color:"#1ddb6f",borderColor:"#1ddb6f"}}>Gabung</a>
          </div>
        </div>
      </div>
      <div className={l.banner_promotion_option} banner-promotion="!">
        <div className={l.banner_card} style={{background:"#ffffff"}}>
          <div className={l.banner_image}>
            <Image src="/wa-icon.jpg" width="140" height="140"/>
          </div>
          <div className={l.banner_texted}>
            <h3>NetRainDrop's</h3>
            <p>Gabung untuk interiaksi sesama member lain !</p>
          </div>
        </div>
      </div>
      <div className={l.banner_promotion_option} banner-promotion="!">
        <div className={l.banner_card} style={{background:"#c2323e",color:"#ffffff"}}>
          <div className={l.banner_image}>
            <Image src="/boba-2.png" width="140" height="140"/>
          </div>
          <div className={l.banner_texted}>
            <h3>Trakteer yuk !</h3>
            <p>Dukung aku di trakteer.id, hanya 15k buat dapetin reward semua project dan akses awal kamu !</p>
            <a target="_blank" href="https://trakteer.id/ernestoyoofi/showcase/dapatkan-hadiah-anda-untuk-project-di-coffee-lakeds-NeUdU" style={{color:"#ffffff",borderColor:"#ffffff"}}>Showcase</a>
          </div>
        </div>
      </div>
    </div>
    <div className={l.banner_promotion_btn}>
      <div className={l.banner_btn_left}>
        <button type="button" onClick={()=> { swipePages("left") }}>
          <FaAngleLeft />
        </button>
      </div>
      <div className={l.banner_btn_gaps}></div>
      <div className={l.banner_btn_right}>
        <button type="button" onClick={()=> { swipePages("right") }}>
          <FaAngleRight />
        </button>
      </div>
    </div>
  </>
}

export default function LandingPage(props) {
  return <main>
    <div className="response">
      <div className={l.header_hero}>
        <div className={l.header_hero_text}>
          <p className={l.header_hero_text_oftitle}>Halo, aku <b>Ernestoyoofi</b> !</p>
          <p className={l.header_hero_text_ofdesc}>Aku hanya seorang <b>web developer</b> & seorang <b>fotografi</b> dan <b>videografi</b> asal <b>Yogyakarta</b></p>
        </div>
      </div>
      <ReactForPromotion />
      <center>
        <h1>Blog Posts</h1>
      </center>
      <BlogListCard data={props.bloglist.slice(0, 9)}/>
    </div>
  </main>
}
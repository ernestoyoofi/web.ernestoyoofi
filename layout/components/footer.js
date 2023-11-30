"use client";

import l from "./footer.module.css"
import { FaInstagram, FaSquareTwitter } from "react-icons/fa6"

export default function FooterSection() {
  return <footer className={l.footer_page}>
    <div className={l.response}>
      <div className={l.footer_icon}>
        <h4>Ernestoyoofi © 2023</h4>
      </div>
      <div className={l.footer_sosmed}>
        <a href="https://instagram.com/" target="_blank"><FaInstagram /></a>
        <a href="https://instagram.com/" target="_blank"><FaSquareTwitter /></a>
      </div>
    </div>
  </footer>
}
"use client"

import s from "./BlogPages.module.css"
import { FaArrowLeft } from "react-icons/fa6"
import { useRouter } from "next/navigation"

export default function BlogReadMarkdown(props) {
  const router = useRouter()
  const { meta, mdx } = props

  const dateFormat = (_date) => {
    const dayFormat = ["Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu", "Minggu"]
    const mounth = ["Januari", "Febuari", "Maret", "April", "Mei", "Juli", "Juni", "Agustus", "September", "Oktober", "November", "Desember"]
    const date = new Date(_date)

    return `${dayFormat[date.getDay()]}, ${date.getDate()+1} ${mounth[date.getMonth()].toLowerCase()} ${date.getFullYear()}`
  }

  return <div className={s.md_responsecontent}>
    <div className={s.md_contentbox}>
      <div className={s.tablink} onClick={() => {
        router.push("/blog")
      }}>
        <FaArrowLeft style={{marginRight: 12,marginLeft: 5}}/> <b>Back To List</b>
      </div>
      <div className={s.blogbanner}>
        <div className={s.imagebanner}>
          <img src={meta.image} />
        </div>
        <h1>{meta.title}</h1>
        <p className={s.lmd_dateinfo}>{dateFormat(meta.date)}</p>
        <div className={s.label}>
          {meta.category.map((a, i) => (<span key={`category-${a}`}>{a}</span>))}
        </div>
      </div>
      <div className={s.readmarkdown}>{mdx}</div>
    </div>
  </div>
}
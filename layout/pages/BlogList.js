"use client"

import { useRouter } from "next/navigation"
import s from "./BlogPages.module.css"

export default function BlogListCard({ data }) {
  const router = useRouter()

  return <div className={s.threadsislist}>
    {/* <pre>{JSON.stringify(data,null,2)}</pre> */}
    <div className={s.box_of_card}>
      {data.map((a, i) => (
        <div className={s.cards_md} key={`card-${i}`} onClick={() => { router.push(`/blog/${a.slug}`) }}>
          <div className={s.image_card}>
            <img src={a.image} />
          </div>
          <h3 className={s.title_card}>{a.title}</h3>
          <p className={s.desc_card}>{a.desc}</p>
          <small>{new Date(a.date).toISOString()}</small>
        </div>
      ))}
    </div>
  </div>
}
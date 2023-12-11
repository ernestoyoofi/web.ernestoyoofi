"use client";
import s from "./MerchandiseItems.module.css"
import { useRouter } from "next/navigation" 

export default function MerchandiseDetail({ detail }) {
  console.log(detail)
  const router = useRouter()

  return <div className={s.box_view+" response"}>
    <div className={s.basic_content}>
      <div className={s.icons_item}>

      </div>
      <div className={s.detail_item}>
        <h3>{detail.title}</h3>
        {Array.isArray(detail.category)? <div className={s.scroll_tab}>
          {detail.category.map((a, i) => (<span key={`inter-tab-category${i}`}>{a}</span>))}
        </div>:""}
        {detail.shoppers? <div className={s.shoptime} onClick={() => { window.open(detail.shoppers.link_store, "_blank")}}>{detail.shoppers.title}</div>:""}
      </div>
    </div>
  </div>
}
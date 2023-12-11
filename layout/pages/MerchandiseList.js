"use client";
import s from "./MerchandiseItems.module.css"
import { useRouter } from "next/navigation" 

export default function MerchandiseList({ list }) {
  const router = useRouter()

  return <div className="response">
    {/* <pre>{JSON.stringify(list,null,2)}</pre> */}
    <div className={s.list_recommend}>
      {list.map((data, i) => (
        <div key={`product-items-${i}`} className={s.product_items} onClick={() => router.push(`/merchandise/${data.id}`)} soldoutitem={data.soldout?"1":""}>
          <div className={s.item_icon}>
            <img src={data.icon[0]} width="100%" height="100%" loading="lazy"/>
          </div>
          <div className={s.item_text}>
            <h4>{data.title}</h4>
            <p>{data.desc.replace(/\n/g, " ")}</p>
            <small>{data.price.value_string} {data.soldout?<b style={{color:"red",fontSize: 12}}>(Sold Out)</b>:""}</small>
          </div>
        </div>
      ))}
    </div>
  </div>
}
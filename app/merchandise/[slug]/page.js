import _default from "~/default"
import MerchandiseDetail from "~/layout/pages/MerchandiseDetail"
import { notFound } from "next/navigation"
import { DetailOfMercandiseCard } from "~/lib/merchandise"

export async function generateMetadata({ params }) {
  const data = await DetailOfMercandiseCard(params.slug)
  if(data.notFound || data.error) {
    return {}
  }
  return {
    title: data.title,
    description: data.desc
  }
}

export default async function MerchandiseItemSlug({ params }) {
  const data = await DetailOfMercandiseCard(params.slug)
  if(data.notFound || data.error) {
    return notFound()
  }
  return <div></div>
  // return <MerchandiseDetail detail={data}/>
}
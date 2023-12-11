import _default from "~/default"
import MerchandiseListApp from "~/layout/pages/MerchandiseList"
import { GetAllMercandiseCard } from "~/lib/merchandise"

export const metadata = {
  title: "Ernestoyoofi › Merchandise",
  description: "Aksesoris dan item dari toko ortu :3"
}

export default async function MerchandiseList() {
  const getPostAll = await GetAllMercandiseCard()
  console.log(getPostAll)

  return <MerchandiseListApp list={getPostAll}/>
}
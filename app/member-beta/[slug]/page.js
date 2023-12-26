import BetaTicketPageView from "~/layout/pages/BetaTicket"
import { GetMemberBeta } from "~/lib/database"
import { notFound } from "next/navigation"

export const metadata = {
  title: "Member beta"
}

export default async function MemberBeta({ params }) {
  const id = params.slug?.slice(7)
  const dataReal = await GetMemberBeta(id)
  console.log(dataReal)
  if(!dataReal.data) {
    return notFound()
  }
  return <BetaTicketPageView data={dataReal.data}/>
}
import LandingPage from "~/layout/pages/LandingPage"
import { GetAllBlogPosts } from "~/lib/blog-post"

export default async function LandingPageView() {
  const dataBlog = await GetAllBlogPosts()

  return <LandingPage bloglist={dataBlog}/>
}
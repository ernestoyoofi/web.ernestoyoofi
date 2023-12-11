export const metadata = {
  title: "Ernestoyoofi › Blog",
  description: "Hanya tulisan, apakah bermanfaat?, tidak tahu"
}

import BlogListCard from "~/layout/pages/BlogList"
import { GetAllBlogPosts } from "~/lib/blog-post"
export default async function BlogPageList() {
  const data = await GetAllBlogPosts()

  return <BlogListCard data={data}/>
}
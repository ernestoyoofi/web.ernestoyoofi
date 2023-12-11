import { MDXRemote } from 'next-mdx-remote/rsc'
import CodeCopyed from '~/layout/meta/CodeCopy'
import BlogReadMarkdown from "~/layout/pages/BlogRead"
import { GetMetaBlogPost, GetReadBlogPost } from "~/lib/blog-post"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }) {
  const data = await GetMetaBlogPost(params.slug)
  console.log(data)
  return data
}

export default async function BlogPageRead({ params }) {
  const { meta, content } = await GetReadBlogPost(params.slug)

  if(!meta) {
    return notFound()
  }
  return <BlogReadMarkdown meta={meta} mdx={<MDXRemote source={content} components={{
    pre: (props) => <CodeCopyed {...props}/>
  }}/>}/>
}
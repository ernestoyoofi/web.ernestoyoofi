const fs = require("fs")
const grayMatter = require("gray-matter")

const PathDefault = `${process.cwd()}/data/blog`

function GetAllBlogPosts() {
  const listAllFile = []

  fs.readdirSync(PathDefault).forEach(a => {
    try {
      const dataDots = a.split(".")
      dataDots.pop()
      const readAfile = fs.readFileSync(`${PathDefault}/${a}`)
      const { data } = grayMatter(readAfile)

      if(typeof (data.title && data.desc && data.image && data.date) === "string" && !data.remove) {
        listAllFile.push({
          title: data.title,
          desc: data.desc,
          image: data.image,
          date: new Date(data.date),
          category: Array.isArray(data.category)? typeof data.category[0] != "string"? ["Default"] : data.category : ["Default"],
          slug: dataDots[0]
        })
      }
    } catch(err) {}
  })

  return listAllFile.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
function GetMetaBlogPost(slug) {
  const dataMeta = GetAllBlogPosts()
  const getIndex = dataMeta.map(a => a.slug).indexOf(slug)
  if(getIndex < 0) {
    return {}
  }
  return {
    title: dataMeta[getIndex].title,
    description: dataMeta[getIndex].desc
  }
}
function GetReadBlogPost(slug) {
  const dataMeta = GetAllBlogPosts()
  const getIndex = dataMeta.map(a => a.slug).indexOf(slug)
  if(getIndex < 0) {
    return { notFound: true }
  }
  const { data, content } = grayMatter(fs.readFileSync(`${PathDefault}/${slug}.mdx`, "utf-8"))
  return {
    meta: {
      title: data.title,
      desc: data.desc,
      image: data.image,
      date: new Date(data.date),
      category: Array.isArray(data.category)? typeof data.category[0] != "string"? ["Default"] : data.category : ["Default"],
      slug: slug
    },
    content: content
  }
}

module.exports = {
  GetAllBlogPosts,
  GetMetaBlogPost,
  GetReadBlogPost
}
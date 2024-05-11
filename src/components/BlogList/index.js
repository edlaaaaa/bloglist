const BlogList = () => (
  <ul>
    {BlogList.map(eachItem => (
      <BlogItem BlogList={eachItem} key={eachItem.id} />
    ))}
  </ul>
)
export default BlogList

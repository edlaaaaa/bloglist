const BlogItem = props => {
  const {blogDetail} = props
  const {title, description, publishedDate} = blogDetail

  return (
    <div className="pro-container">
      <h1 className="head">{title}</h1>
      <p className="detail">{description}</p>
      <p className="date">{publishedDate}</p>
    </div>
  )
}
export default BlogItem

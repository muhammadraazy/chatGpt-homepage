import "./Blog.css"
import { Article } from "../../components"
import { blog01, blog02, blog03, blog04, blog05 } from "../../assets"

const blogData = [
  { id: 1, date: 'Sep 26, 2021', title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?', details: 'Read Full Article', img: blog02 },
  { id: 2, date: 'Sep 26, 2021', title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?', details: 'Read Full Article', img: blog03 },
  { id: 3, date: 'Sep 26, 2021', title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?', details: 'Read Full Article', img: blog04 },
  { id: 4, date: 'Sep 26, 2021', title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?', details: 'Read Full Article', img: blog05 },
]

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding">
       <div className="gpt3__blog-heading">
           <h1 className="gradient__text">
                A lot is happening, 
              We are blogging about it.
            </h1>
       </div>
       <div className="gpt3__blog-container">
          <div className="gpt3__blog-container-groupA">
              <Article img={blog01} date='Sep 26, 2021' title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          </div>
          <div className="gpt3__blog-container-groupB">
              { blogData.map(blog => (
                  <Article date={blog.date} title={blog.title} key={blog.id} img={blog.img} />
              )) }
          </div>
       </div>
    </div>
  )
}

export default Blog
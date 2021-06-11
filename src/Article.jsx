import { useState } from "react"
import PublisheButton from "./PublishButton"

const Article = (props) => {
  const [isPublished, setIsPublished] = useState(false)
  const [count, setCount] = useState(0)

  const publishArticle = () => {
    setIsPublished(!isPublished)
  }

  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
			<div>
				<button onClick={() => setCount(count+1)}>Button: {count}</button>
			</div>
			<div>
				<button onClick={() => setCount(0)}>back to zero</button>
			</div>
      <PublisheButton isPublished={isPublished} onClick={publishArticle} />
    </div>
  )
}

export default Article

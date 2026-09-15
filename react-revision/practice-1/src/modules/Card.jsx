import "./Card.css"

const Card = (props) => {
  return (
    <div className="card">
      Title: {props.title}
    </div>
  )
}

export default Card

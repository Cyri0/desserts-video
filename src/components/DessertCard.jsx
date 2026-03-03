import AddToCartBtn from "./AddToCartBtn"

const DessertCard = (props) => {
  return (
    <div className="dessertCard">
        <img src={props.image} />
        <AddToCartBtn/>
        <p className="category">{props.category}</p>
        <strong className="name">{props.name}</strong>
        <p className="price">${props.price}</p>
    </div>
  )
}

export default DessertCard
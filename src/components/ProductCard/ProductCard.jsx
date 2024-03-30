import './ProductCard.sass'

export default function ProductCard({ id, name, images, price, rate, addToCart }) {
  const item = {id, name, price, images}

  return (
    <div className="product-card">
      <a href="#!" className="product-card__imgbox">
        <img 
          className="product-card__img" 
          src={images.x1} 
          srcSet={`${images.x1} 1x, ${images.x2} 2x`}
          alt={name} 
        />
      </a>
      <div className="product-card__data">
        <a href="#!" className="product-card__name">{name}</a>
        <div className="product-card__pricebox">
          <div className="product-card__price">{price} ₽</div>
        </div>
      </div>
      <div className="product-card__action">
        <div className="product-card__rate">
          <svg className="product-card__rate-decor" viewBox="0 0 25 23" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.6268 18.0143L5.41618 22.3656L7.37647 14.2449L0.960754 8.81491L9.38215 8.14829L12.6268 0.439671L15.8715 8.14829L24.2941 8.81491L17.8771 14.2449L19.8374 22.3656L12.6268 18.0143Z"/>
          </svg>
          {rate}
        </div>
        <button className="product-card__buy" onClick={() => addToCart(item, 1)}>Купить</button>
      </div>
    </div>
  )
}
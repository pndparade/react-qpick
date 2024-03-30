import SvgIcon from '../SvgIcon/SvgIcon'
import CartCounter from '../CartCounter/CartCounter'
import './CartItem.sass'

export default function CartItem({ name, id, images, price, qty, deleteFromCart, increaseQty, decreaseQty }) {
  return (
    <div className="cart-item">
      <button className="cart-item__del" onClick={() => deleteFromCart(id)}>
        <SvgIcon icon={'del'}>
          <span className="visually-hidden">Удалить</span>
        </SvgIcon>
      </button>
      <div className="cart-item__row">
        <div className="cart-item__imgbox">
          <img 
            className="cart-item__img" 
            src={images.x1} 
            srcSet={`${images.x1} 1x, ${images.x2} 2x`}
            alt={name} 
          />
        </div>
        <div className="cart-item__data">
          <div className="cart-item__name">{name}</div>
          <div className="cart-item__price">{price} ₽</div>
        </div>
      </div>
      <div className="cart-item__row">
        <CartCounter className="cart-item__counter" qty={qty} id={id} increaseQty={increaseQty} decreaseQty={decreaseQty} />
        <div className="cart-item__sum">{price * qty} ₽</div>
      </div>
    </div>
  )
}
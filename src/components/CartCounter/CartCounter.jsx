import SvgIcon from '../SvgIcon/SvgIcon'
import './CartCounter.sass'

export default function CartCounter({className, qty, id, increaseQty, decreaseQty}) {

  return (
    <div className={`cart-counter ${className}`}>
      <button className="cart-counter__btn" disabled={!(qty-1)} onClick={() => decreaseQty(id)}>
        <SvgIcon icon={'minus'}>
          <span className="visually-hidden">Минус 1</span>
        </SvgIcon>
      </button>
      <div className="cart-counter__qty">{qty}</div>
      <button className="cart-counter__btn" onClick={() => increaseQty(id)}>
        <SvgIcon icon={'plus'}>
          <span className="visually-hidden">Плюс 1</span>
        </SvgIcon>
      </button>
    </div>
  )
}
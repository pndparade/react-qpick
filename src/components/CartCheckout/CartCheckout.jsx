import './CartCheckout.sass'

export default function CartCheckout({cartItems}) {
  const sum = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="cart-checkout">
      <div className="cart-checkout__total">
        ИТОГО 
        <span>₽ {sum}</span>
      </div>
      <a href="#!" className="cart-checkout__submit">Перейти к оформлению</a>
    </div>
  )
}
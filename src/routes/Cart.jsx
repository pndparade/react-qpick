import { useOutletContext } from 'react-router-dom'
import CartItem from '../components/CartItem/CartItem'
import CartCheckout from '../components/CartCheckout/CartCheckout'

export default function Cart() {
  const [ cartItems, , deleteFromCart, increaseQty, decreaseQty ] = useOutletContext();

  return (
    <div>
      <h1 className="page-title">Корзина</h1>
      <div className="cart">
        <div className="cart__list">
          {cartItems.length > 0 && cartItems.map(
            product => 
            <CartItem 
              {...product} 
              key={product.id} 
              deleteFromCart={deleteFromCart} 
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
            />
          )}
          {!cartItems.length && <p>Корзина пуста</p>}
        </div>
        {cartItems.length > 0 && 
          <div className="cart__checkout">
            <CartCheckout cartItems={cartItems}/>
          </div>
        }
      </div>
    </div>
  )
}
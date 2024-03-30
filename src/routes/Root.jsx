import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

export default function Root() {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item, qty=1) {
    const itemIndex = cartItems.findIndex(val => val.id === item.id)

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        qty: qty
      }
      setCartItems([...cartItems, newItem])
    } else {
      const newItem = {
        ...cartItems[itemIndex],
        qty: cartItems[itemIndex].qty + qty
      }
      const newCart = cartItems.slice()
      newCart.splice(itemIndex, 1, newItem)
      setCartItems(newCart)
    }
  }

  function deleteFromCart(id) {
    const newCart = cartItems.filter(item => item.id !== id);
    setCartItems(newCart)
  }

  function increaseQty(id, qty=1) {
    const itemIndex = cartItems.findIndex(val => val.id === id)

    const newItem = {
      ...cartItems[itemIndex],
      qty: cartItems[itemIndex].qty + qty
    }
    const newCart = cartItems.slice()
    newCart.splice(itemIndex, 1, newItem)
    setCartItems(newCart)
  }

  function decreaseQty(id, qty=1) {
    const itemIndex = cartItems.findIndex(val => val.id === id)

    if (cartItems[itemIndex].qty === 1) return false

    const newItem = {
      ...cartItems[itemIndex],
      qty: cartItems[itemIndex].qty - qty
    }
    const newCart = cartItems.slice()
    newCart.splice(itemIndex, 1, newItem)
    setCartItems(newCart)
  }

  return (
    <>
      <Header cartItems={cartItems.length}/>
      <main className="page__content container">
        <Outlet context={[cartItems, addToCart, deleteFromCart, increaseQty, decreaseQty]}/>
      </main>
      <Footer />
    </>
  )
}
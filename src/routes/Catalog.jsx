import { useOutletContext } from 'react-router-dom'
import Category from '../components/Category/Category'

import { catalog } from '../data'

export default function Catalog() {
  const [ , addToCart ] = useOutletContext();

  return (
    <>
      {catalog.map(
        category => <Category {...category} key={category.name} addToCart={addToCart} />
      )}
    </>
  )
}
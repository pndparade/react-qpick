import ProductCard from '../ProductCard/ProductCard'

export default function Category({name, products, addToCart}) {
  return (
    <section className="category">
      <h2 className="category__title">{name}</h2>
      <div className="category__list">
        {products.map(
          product => <ProductCard {...product} key={product.id} addToCart={addToCart} />
        )}
      </div>
    </section>
  )
}
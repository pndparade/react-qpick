import { Link } from 'react-router-dom'
import SvgIcon from '../SvgIcon/SvgIcon'
import './Header.sass'

export default function Header({ cartItems }) {
  return (
    <header className="header">
      <div className="header__row container">
        <Link to={`/`} className="header__logo">Qpick</Link>

        <div className="header__nav">
          <Link to={`/favourite`} className="header__link">
            <span className="visually-hidden">Избранное</span>
            <span className="header__link-icon">
              <SvgIcon icon={'heart'}/>
            </span>
          </Link>
          <Link to={`/cart`} className="header__link">
            <span className="header__link-icon">
              <span className="visually-hidden">Корзина</span>
              <SvgIcon icon={'cart'}/>
              {cartItems > 0 && 
                <span className="header__link-num">{cartItems}</span>
              }
            </span>
          </Link>
        </div>
      </div>
    </header>
  )
}
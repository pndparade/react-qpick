import { Link } from 'react-router-dom'
import SvgIcon from '../SvgIcon/SvgIcon'
import './Footer.sass'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__layout container">
        <div className="footer__logo">Qpick</div>

        <div className="footer__nav">
          <ul className="footer__menu">
            <li>
              <Link to={`/favourite`}>Избранное</Link>
            </li>
            <li>
              <Link to={`/cart`}>Корзина</Link>
            </li>
            <li>
              <Link to={`/contact`}>Контакты</Link>
            </li>
          </ul>
        </div>

        <div className="footer__nav">
          <ul className="footer__menu">
            <li>
              <Link to={`/agreement`}>Условия сервиса</Link>
            </li>
          </ul>
          <div className="footer__lang">
            <a href="#!" className="footer__lang-link is-active">Рус</a>
            <a href="#!" className="footer__lang-link">Eng</a>
          </div>
        </div>
        
        <div className="footer__soc">
          <a className="footer__soc-link" href="https://vk.com/webstandards_ru" target="_blank">
            <SvgIcon icon={'vk'}/>
          </a>
          <a className="footer__soc-link" href="https://t.me/webstandards_ru" target="_blank">
            <SvgIcon icon={'tg'}/>
          </a>
          <a className="footer__soc-link" href="https://wa.me/75551234567">
            <SvgIcon icon={'whatsapp'}/>
          </a>
        </div>
      </div>
    </footer>
  )
}
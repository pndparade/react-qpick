import './SvgIcon.sass'

export default function SvgIcon({ icon }) {
  return (
    <svg className="icon">
      <use xlinkHref={`./assets/images/sprite.svg#${icon}`}></use>
    </svg>
  )
}
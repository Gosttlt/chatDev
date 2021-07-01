/** @format */
import s from './s.module.css'

type PropsType = { text: string; onClickHandler?: () => void }

const Button: React.FC<PropsType> = ({ text, onClickHandler }) => {
  return (
    <button onClick={onClickHandler} className={s.button}>
      {text}
    </button>
  )
}
export default Button

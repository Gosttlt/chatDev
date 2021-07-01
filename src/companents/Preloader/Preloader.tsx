/** @format */
import s from './s.module.css'

const Preloader: React.FC = () => {
  return (
    <div className={s.preloader_box}>
      <div className={s.lds_circle}>
        <div></div>
      </div>
      Loading...
    </div>
  )
}
export default Preloader

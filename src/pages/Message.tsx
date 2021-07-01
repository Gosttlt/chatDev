/** @format */

import s from './Chat.module.css'

type PropsType = {
  uid?: string
  userId: string
  photoUrl: string
  displayName: string
  text: string
}

const Message: React.FC<PropsType> = ({
  uid,
  userId,
  photoUrl,
  displayName,
  text,
}) => {
  return (
    <div
      className={s.message_box + ' ' + (uid === userId ? s.my_messsage : '')}
    >
      <div className={s.message__ava_block}>
        <div className={s.message_box__img_box}>
          <img src={photoUrl} alt='' />
        </div>
        <div className={s.message_box__name}>{displayName}</div>
      </div>
      <div className={s.message_box__text}>{text}</div>
    </div>
  )
}

export default Message

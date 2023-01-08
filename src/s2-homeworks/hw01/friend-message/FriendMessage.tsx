import React from 'react'
import s from './FriendMessage.module.css'

export type FriendMessagePropsType = {
    id:number,
    text:string
    avatar:string
    time:string
    name:string
    message:{
        id:number
    }
}

// создать тип вместо any и отобразить приходящие данные
// ВСЕ ТОЖЕ САМОЕ, ЧТО И В КОМПОНЕНТЕ Message -ПОЭТОМУ ПОДСКАЗОК МЕНЬШЕ
const FriendMessage = (props: FriendMessagePropsType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img src={props.avatar}
                    id={'hw1-friend-avatar-' + props.message.id}
                    // создаёт студент

                    //
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        {/*создаёт студент*/}
                        {props.name}
                        {/**/}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        {/*создаёт студент*/}
                        {props.text}
                        {/**/}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}
            >
                {/*создаёт студент*/}
                {props.time}
                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage

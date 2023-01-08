import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'

/*
* 1 - описать тип MessageType +
* 2 - описать тип MessagePropsType в файле Message.tsx +
* 3 - в файле Message.tsx отобразить приходящие данные +
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx +
* 5 - сделать стили в соответствии с дизайном -
* */

// нужно создать правильный тип вместо any+
export type MessageType = {
    id:number,
    user:{
        avatar:string,
        name:string
    }
    message:{
        text:string;
        time:string
    }
}

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar, // ТИПИЗИРУЕТСЯ КАК string
        name: 'Brad Pitt',  // можно менять
    },
    message: {
        text: 'Hello Ignat, its Pitt, Brad Pitt', // можно менять
        time: '22:00', // можно менять
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatar, // можно менять
        name: 'Ignat', // можно менять
    },
    message: {
        text: 'Hello, Pit, How you doing?', // можно менять
        time: '22:00', // можно менять
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Homework #1</div>
            <div className={s2.hw}>
                {/*проверка отображения (не менять)*/}
                <div>
                    <Message name={message0.user.name} id={message0.id} text={message0.message.text} avatar={message0.user.avatar} message={message0} time={message0.message.time} />
                    <FriendMessage name={friendMessage0.user.name} id={friendMessage0.id} text={friendMessage0.message.text} avatar={friendMessage0.user.avatar} message={friendMessage0} time={friendMessage0.message.time} />
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message} />
            </div>
        </div>
    )
}

export default HW1

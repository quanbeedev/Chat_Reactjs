import React from 'react'

export default function ThereMessage({lastMessage, message}) {
    const isFirstMessageByUser  = !lastMessage || lastMessage.sender.username


    return (
        <div className="message-row">
            {isFirstMessageByUser && (
                <div
                    className="message-avatar"
                    style = {{backgroundImage: `url(${message?.sender?.avatar})`}}
                />
            )}
        { message?.attachments?.length > 0
        ? (
            <img
               src = {message.attachments[0].file}
               alt ="message-image"
               className = "message-image"
               style = {{ float : 'right'}}
            />
        )
         : (
            <div className="message" style = {{ float :'right', marginRight:'18px', color:'while',backgroundColor:'#328A50' }}>
            {message.text}
            </div>
         )
         }
        </div>
    )
}

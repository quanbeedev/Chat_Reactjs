import React from 'react'

export default function MyMessage({message}) {
    if(message?.attachments ?.length > 0){
        return (
            <img
               src = { message.attachments[0].file}
               alt ="message-image"
               className = "message-image"
               style = {{ float : 'right'}}
            />
        )

    }
    return (
        <div className="message" style = {{ float :'right', marginRight:'18px', color:'while',backgroundColor:'#328A50' }}>
            {message.text}
        </div>
    )
}

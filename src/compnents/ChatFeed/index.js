import React from 'react'
import MessageForm from '../MassageForm'
import ThereMessage from '../ThereMessage'
import MyMessage from '../MyMessage'

export default function ChatFeed(props) {
    const {chats, activeChat, userName, messages } = props

    const chat = chats && chats[activeChat]

    console.log(chat, activeChat, userName, messages)

    const renderMessages = () =>{
        const keys = Object.keys(messages)

        return keys.map((index , map ) =>{
            const message = messages(keys)
            const lastMessageKey = index === 0 ? null : keys[index - 1]
            const isMyMessage = userName === message.sender.username;
            return (
                <div key={`msg_${index}`} style ={{width : '100%'}}>
                    <div className= 'message-block'>
                        {
                            isMyMessage
                            ? <MyMessage message= {message}/>
                            : <ThereMessage message={message} lastMessage={messages[lastMessageKey]}/>
                        }
                    </div>
                    <div className = "read-receipt" style= { {marginRight : isMyMessage ? '18px' : '0px' , marginLeft : isMyMessage ? '0px' : '68px'}}>

                        read-receip
                    </div>
                </div>
            )
        }
        
        )
       
    }
    renderMessages()
    if(!chat) return ('Loading........')
    return (
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">
                    {chat.title }
                </div>
                <div className="chat-subtitle">
                    {chat.people.map(people => `
                    ${people.person.username}
                    `)}
                </div>
            </div>
            {renderMessages()}
            <div style= {{ height : '100px'}}/>
            <div className="message-form-container">
                <MessageForm {...props} chatId ={activeChat}/>
            </div>
        </div>
    )
}

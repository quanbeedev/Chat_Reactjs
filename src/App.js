import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './compnents/ChatFeed'
import './App.css'

const App = () =>{
    return(
        <ChatEngine
        height='100vh'
        userName='javascriptmastery'
        userSecret='20061999'
        projectID='685df255-04c1-4333-b46b-23a06e59e4f1'
        renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}
export default App;
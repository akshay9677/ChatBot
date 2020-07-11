import React from 'react';

import ChatHeader from './ChatScreenComponents/ChatHeader';
import ChatBox from './ChatScreenComponents/ChatBox';
import ChatConversation from './ChatScreenComponents/ChatConversation';

function ChatScreen(props){
    return(
             <div style={styles.chatBox}>
           <ChatHeader onClicks={props.closeClick}/>
            <div>
             <ChatConversation messageData={props.messages} />
            </div>
            <ChatBox  sendMessage={(value)=>props.onSend(value)} />
        </div>)
}
const styles = { 
    chatBox: {
        backgroundColor: 'white',
        width: '24rem',
        height: '38rem',
        borderRadius: '1rem',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',

        
    },
   
    
    }

    export default ChatScreen;
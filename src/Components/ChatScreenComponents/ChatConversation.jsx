import React, { useEffect, useState } from 'react';

import Colors from '../../constants'

function ChatConversation(props){
    const [open,setOpen] = useState(false);
    var dummyData = props.messageData
    return(<div className='convo'>
        <div style={styles.chatBubble}>
        <div style={{width:'100%',display:'flex',flexDirection: 'column'}}>
        {dummyData.map((value,index)=>{
            return(<div key={index} style={value.bot ? styles.chatBubble.botBubble : styles.chatBubble.senderBubble} > {value.message} </div>)
        })}
        </div>
        <div id='akshay' style={{height: '1rem'}}></div>
        </div>
        </div>
    )
}

const styles ={
    chatBubble:{
        flex: 1,
        height: '27rem',
        overflowY: 'scroll',
        senderBubble:{
            borderRadius: "1rem 0 1rem 1rem",
            margin: "0.4rem 0.4rem 0.4rem 10rem",
            display: "inlineBlock",
            padding: '0.5rem',
            backgroundColor: Colors.primary,
            color: 'white',
            justifyContent: 'flexEnd',
            textSize: '0.9rem'
        },
        botBubble:{
            border: "0.02rem solid black",
            borderRadius: "0 1rem 1rem 1rem",
            margin: "0.4rem 10rem 0.4rem 0.4rem",
            display: "inlineBlock",
            padding: '0.2rem 0.5rem 0.2rem 0.5rem',
            borderColor: Colors.primary,
            textSize: '0.9rem',
            backgroundColor: 'white'
        },
        options:{
            border: "0.15rem solid black",
            borderRadius: "1rem 1rem 1rem 1rem",
            margin: "0.4rem 0.4rem 0.4rem 10rem",
            display: "inlineBlock",
            padding: '0.2rem 0.5rem 0.2rem 0.5rem',
            borderColor: Colors.primary,
            textSize: '0.9rem',
            backgroundColor: 'white'
        }
    }
}
export default ChatConversation;
import React,{useState} from 'react';

function ChatBox(props){
    const [text,setText] = useState('');
    function handleChange(event) {
        const { value } = event.target;
    
        setText(value);
      }
    return( <div><div style={styles.chatBar}>
      <input value={text} style={styles.chatBar.textInput} onChange={handleChange} placeholder='Say Hello' disabled={true}></input>
          <a href='#akshay'><div onClick={()=>{props.sendMessage(text);setText('')}}  style={styles.chatBar.send}><i  className="fas fa-reply fa-lg"></i></div></a>
          
        </div>
        <div style={styles.chatBar}>
        </div>
        </div>)
}

const styles = {
    chatBar:{
        height: '3.4rem',
        backgroundColor: '#f4f4f4',
        flex: 2,
        display: 'flex',
        textInput:{
          outline: 'none',
          border: 0,
          backgroundColor: '#f4f4f4',
          padding: '1rem',
          alignContent: 'flexStart',
          width: '20rem'
        },
        send:{
            margin: '1rem 0 0 0.5rem',
            alignContent: 'flexEnd'
        }
    },
}

export default ChatBox;
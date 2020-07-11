import React,{useState, useEffect} from 'react';
import { animateScroll } from 'react-scroll';

import './App.css';
import ChatButton from './Components/ChatButton';
import ChatScreen from './Components/ChatScreen'

var dummyData = [
  {
      message: 'Hello guys',
      bot: true
  },
  {
      message: 'Hi bot',
      bot: false
  },
  {
      message: 'Bibbity bobbity give me the zoppity',
      bot: true
  },
  {
      message: 'No god please no no god nooooooo',
      bot: false
  },
  {
      message: 'Sorry I annoyed you with my frienship 😑',
      bot: true
  },
  {
    message: 'Feeling hot hot hot !',
    bot: false
  },
  {
    message: 'Well, well, well look how the turn-tables',
    bot: true
  }
]

function App(props) {
  const [chatScreen,setChatScreen] = useState(false);
  const [data,setData] = useState(dummyData);
    let comp = null;
      
    function handleClick(){
      setChatScreen(!chatScreen);
    }
    function handleSendMessage(textM){
      let newData = {
        message: textM,
        bot: false
      }
       setData((prevData)=>{
         return[...prevData,newData];
       })
    }
    if(chatScreen){
        comp = ( <div className="w3-container">
        <div className="w3-center w3-animate-right"><ChatScreen chatBodies='akshay' onSend={handleSendMessage} messages={data} closeClick={handleClick} /></div>
      </div>)
    }
  return (
    <div style={chatScreen ? styles.chatContainer : styles.chatBtn }  >
      {chatScreen ? comp : <ChatButton clickSense={chatScreen} onPress={handleClick} />}
      
    </div>
  );
}

const styles = {
  chatContainer: {
   position: 'fixed',
   bottom: '1rem',
   right: '1rem',
  },
  chatBtn:{
    position: 'fixed',
    bottom : '5rem',
    right: '5rem'
  },
}


export default App;

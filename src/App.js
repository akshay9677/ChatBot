import React,{useState, useEffect} from 'react';
import axios from 'axios'
import ChatButton from './Components/ChatButton' 
import ChatScreen from './Components/ChatScreen'

var dummyData = [
  {
      message: 'Hello human!!, seems like you need some guidance',
      bot: true
  },
  {
      message: 'Hi i am just looking',
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

var options = ["Hello", "Hello Bot", "Hai da"];



function App(props) {
  useEffect(() => {
    axios.get("http://localhost:8080").then(({ data }) => {
      setData(data)
    });
  },[]);
  const [chatScreen,setChatScreen] = useState(false);
  const [data,setData] = useState([]);
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
  function handleOptions(value) {
    let newSenderData = {
      message: value,
      bot:false
    }

    setData((prevData) => {
      return [...prevData, newSenderData];
    });

    setTimeout(() => {
      let newBotData = {
        message: 'ya hello hello',
        bot: true,
      };

      setData((prevData) => {
        return [...prevData, newBotData];
      });
    }, 2000);
 
    options = ['Va da venna', 'poda venna', 'adei']
    
  }
    if(chatScreen){
        comp = (
          <div className="w3-container">
            <div className="w3-center w3-animate-right">
              <ChatScreen
                chatBodies="akshay"
                onSend={handleSendMessage}
                messages={data}
                closeClick={handleClick}
                selectOptions={handleOptions}
                options={options}
              />
            </div>
          </div>
        );
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

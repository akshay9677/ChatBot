import React from 'react';

import Colors from '../../constants';

function ChatHeader(props){
    
return(<div style={styles.chatHeader}>
            <div style={styles.chatHeader.chatLogo.online}>
              </div>
              <div style={styles.chatHeader.chatLogo}>
              <img style={{overflow: 'hidden'}} src='https://image.flaticon.com/icons/svg/838/838479.svg'></img>
              
              </div>
              <div style={styles.chatHeader.chatText}><h3>Chat Bot</h3></div>
              <div onClick={props.onClicks} style={styles.chatHeader.chatClose}><i className="fas fa-times fa-2x"></i></div>
            </div>)
}
const styles = {
    chatHeader:{
        height: '2rem',
        backgroundColor: Colors.primary,
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        chatLogo:{
            height: '2.6rem',
            width: '2.6rem',
            borderRadius: '1rem',
            backgroundColor: 'white',
            margin: '0.9rem 0.2rem 0.2rem 0.6rem',
            overflow: 'hidden',
            online: {
                height: '0.8rem',
                width: '0.8rem',
                borderRadius: '0.4rem',
                backgroundColor: '#16FA11',
                left: '2.8rem',
                top: '2.7rem',
                position: 'absolute'
            }
        },
        chatText:{
            color: 'white',
            margin: '0.2rem 0rem 0rem 0.8rem'
        },
        chatClose: {
            position: 'absolute',
            color: 'white',
            right: '0.9rem',
            top: '1.4rem'
        }

}
}
export default ChatHeader;
import React,{useState} from 'react';

function ChatButton(props){
    

    return(
        <div style={{overflow: 'hidden'}}>
        <div  style={props.clickSense ? styles.btn : styles.btn2} onClick={props.onPress}>
        <img style={{overflow: 'hidden'}} src='https://image.flaticon.com/icons/svg/838/838479.svg'></img>
        </div>
        </div>
    );
}

const styles = { 
btn : {
    position: 'fixed',
    width: 50,
    height:50,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25
},
btn2:{
    position: 'fixed',
    width: 50,
    height:50,
    borderRadius: 25
}
}


export default ChatButton;
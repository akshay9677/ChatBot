(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.MyLib = {}, global.React));
}(this, (function (exports, React) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function ChatButton(props) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      style: props.clickSense ? styles.btn : styles.btn2,
      onClick: props.onPress
    }, /*#__PURE__*/React__default['default'].createElement("img", {
      alt: "logos",
      style: {
        overflow: 'hidden'
      },
      src: "https://image.flaticon.com/icons/svg/838/838479.svg"
    })));
  }

  var styles = {
    btn: {
      position: 'fixed',
      width: 50,
      height: 50,
      borderTopRightRadius: 25,
      borderBottomRightRadius: 25,
      borderBottomLeftRadius: 25
    },
    btn2: {
      position: 'fixed',
      width: 50,
      height: 50,
      borderRadius: 25
    }
  };

  var colors = {
    primary: '#0779e4'
  };

  function ChatHeader(props) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      style: styles$1.chatHeader
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      style: styles$1.chatHeader.chatLogo.online
    }), /*#__PURE__*/React__default['default'].createElement("div", {
      style: styles$1.chatHeader.chatLogo
    }, /*#__PURE__*/React__default['default'].createElement("img", {
      alt: "logo",
      style: {
        overflow: 'hidden'
      },
      src: "https://image.flaticon.com/icons/svg/838/838479.svg"
    })), /*#__PURE__*/React__default['default'].createElement("div", {
      style: styles$1.chatHeader.chatText
    }, /*#__PURE__*/React__default['default'].createElement("h3", null, "Chat Bot")), /*#__PURE__*/React__default['default'].createElement("div", {
      onClick: props.onClicks,
      style: styles$1.chatHeader.chatClose
    }, /*#__PURE__*/React__default['default'].createElement("i", {
      className: "fas fa-times fa-2x"
    })));
  }

  var styles$1 = {
    chatHeader: {
      height: '2rem',
      backgroundColor: colors.primary,
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      chatLogo: {
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
      chatText: {
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
  };

  function ChatBox(props) {
    var _useState = React.useState(''),
        _useState2 = _slicedToArray(_useState, 2),
        text = _useState2[0],
        setText = _useState2[1];

    function handleChange(event) {
      var value = event.target.value;
      setText(value);
    }

    return /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("div", {
      style: styles$2.chatBar
    }, /*#__PURE__*/React__default['default'].createElement("input", {
      value: text,
      style: styles$2.chatBar.textInput,
      onChange: handleChange,
      placeholder: "Say Hello"
    }), /*#__PURE__*/React__default['default'].createElement("a", {
      href: "#akshay"
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      onClick: function onClick() {
        props.sendMessage(text);
        setText('');
      },
      style: styles$2.chatBar.send
    }, /*#__PURE__*/React__default['default'].createElement("i", {
      className: "fas fa-reply fa-lg"
    })))), /*#__PURE__*/React__default['default'].createElement("div", {
      style: styles$2.chatBar
    }));
  }

  var styles$2 = {
    chatBar: {
      height: '3.4rem',
      backgroundColor: '#f4f4f4',
      flex: 2,
      display: 'flex',
      textInput: {
        outline: 'none',
        border: 0,
        backgroundColor: '#f4f4f4',
        padding: '1rem',
        alignContent: 'flexStart',
        width: '20rem'
      },
      send: {
        margin: '1rem 0 0 0.5rem',
        alignContent: 'flexEnd'
      }
    }
  };

  function ChatConversation(props) {
    var dummyData = props.messageData;
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: "convo"
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      style: styles$3.chatBubble
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      style: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
      }
    }, dummyData.map(function (value, index) {
      return /*#__PURE__*/React__default['default'].createElement("div", {
        key: index,
        style: value.bot ? styles$3.chatBubble.botBubble : styles$3.chatBubble.senderBubble
      }, " ", value.message, " ");
    })), /*#__PURE__*/React__default['default'].createElement("div", {
      id: "akshay",
      style: {
        height: '1rem'
      }
    })));
  }

  var styles$3 = {
    chatBubble: {
      flex: 1,
      height: '27rem',
      overflowY: 'scroll',
      senderBubble: {
        borderRadius: "1rem 0 1rem 1rem",
        margin: "0.4rem 0.4rem 0.4rem 10rem",
        display: "inlineBlock",
        padding: '0.5rem',
        backgroundColor: colors.primary,
        color: 'white',
        justifyContent: 'flexEnd',
        textSize: '0.9rem'
      },
      botBubble: {
        border: "0.02rem solid black",
        borderRadius: "0 1rem 1rem 1rem",
        margin: "0.4rem 10rem 0.4rem 0.4rem",
        display: "inlineBlock",
        padding: '0.2rem 0.5rem 0.2rem 0.5rem',
        borderColor: colors.primary,
        textSize: '0.9rem',
        backgroundColor: 'white'
      },
      options: {
        border: "0.15rem solid black",
        borderRadius: "1rem 1rem 1rem 1rem",
        margin: "0.4rem 0.4rem 0.4rem 10rem",
        display: "inlineBlock",
        padding: '0.2rem 0.5rem 0.2rem 0.5rem',
        borderColor: colors.primary,
        textSize: '0.9rem',
        backgroundColor: 'white'
      }
    }
  };

  function ChatScreen(props) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      style: styles$4.chatBox
    }, /*#__PURE__*/React__default['default'].createElement(ChatHeader, {
      onClicks: props.closeClick
    }), /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement(ChatConversation, {
      messageData: props.messages
    })), /*#__PURE__*/React__default['default'].createElement(ChatBox, {
      sendMessage: function sendMessage(value) {
        return props.onSend(value);
      }
    }));
  }

  var styles$4 = {
    chatBox: {
      backgroundColor: 'white',
      width: '24rem',
      height: '38rem',
      borderRadius: '1rem',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  };

  var dummyData = [{
    message: 'Hello guys',
    bot: true
  }, {
    message: 'Hi bot',
    bot: false
  }, {
    message: 'Bibbity bobbity give me the zoppity',
    bot: true
  }, {
    message: 'No god please no no god nooooooo',
    bot: false
  }, {
    message: 'Sorry I annoyed you with my frienship 😑',
    bot: true
  }, {
    message: 'Feeling hot hot hot !',
    bot: false
  }, {
    message: 'Well, well, well look how the turn-tables',
    bot: true
  }];

  function App(props) {
    var _useState = React.useState(false),
        _useState2 = _slicedToArray(_useState, 2),
        chatScreen = _useState2[0],
        setChatScreen = _useState2[1];

    var _useState3 = React.useState(dummyData),
        _useState4 = _slicedToArray(_useState3, 2),
        data = _useState4[0],
        setData = _useState4[1];

    var comp = null;

    function handleClick() {
      setChatScreen(!chatScreen);
    }

    function handleSendMessage(textM) {
      var newData = {
        message: textM,
        bot: false
      };
      setData(function (prevData) {
        return [].concat(_toConsumableArray(prevData), [newData]);
      });
    }

    if (chatScreen) {
      comp = /*#__PURE__*/React__default['default'].createElement("div", {
        className: "w3-container"
      }, /*#__PURE__*/React__default['default'].createElement("div", {
        className: "w3-center w3-animate-right"
      }, /*#__PURE__*/React__default['default'].createElement(ChatScreen, {
        chatBodies: "akshay",
        onSend: handleSendMessage,
        messages: data,
        closeClick: handleClick
      })));
    }

    return /*#__PURE__*/React__default['default'].createElement("div", {
      style: chatScreen ? styles$5.chatContainer : styles$5.chatBtn
    }, chatScreen ? comp : /*#__PURE__*/React__default['default'].createElement(ChatButton, {
      clickSense: chatScreen,
      onPress: handleClick
    }));
  }

  var styles$5 = {
    chatContainer: {
      position: 'fixed',
      bottom: '1rem',
      right: '1rem'
    },
    chatBtn: {
      position: 'fixed',
      bottom: '5rem',
      right: '5rem'
    }
  };

  exports.default = App;
const e = React.createElement;
const domContainer = document.querySelector("#like_button_container");
ReactDOM.render(e(App), domContainer);
  Object.defineProperty(exports, '__esModule', { value: true });

})));

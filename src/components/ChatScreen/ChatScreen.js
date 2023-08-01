import './ChatScreen.css'
import { useEffect, useRef } from 'react';
import RecordingInput from '../RecordingInput/RecordingInput';
import TextMessage from '../TextMessage/TextMessage';
import AudioMessage from '../AudioMessage/AudioMessage';

function ChatScreen({ audioInputState, onStartRecording, onSendRecording, onDeleteRecording, recordingTime, messages, }) {
   const messagesEndRef = useRef(null);
   const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
   };

   useEffect(scrollToBottom, [messages]);

   return (
      <div className='chat-screen' >
         <div className='chat-screen__chat'>
            {messages.map((message, index) => {
               return message.isOwner === true ?
                  <AudioMessage key={index} src={message.src} /> :
                  <TextMessage key={index} text={message.text} type={message.type} />
            })}
            <div ref={messagesEndRef} />
         </div >
         <RecordingInput
            audioInputState={audioInputState}
            onStartRecording={onStartRecording}
            onSendRecording={onSendRecording}
            recordingTime={recordingTime}
            onDeleteRecording={onDeleteRecording} />
      </div>
   )
};

export default ChatScreen;
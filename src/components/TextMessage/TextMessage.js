import './TextMessage.css'

function TextMessage({text, type}) {

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className='text-message'>
      <div className='text-message__avatar'>
        <div className='text-message__logo'/>
      </div>
      <div className={type === 'Error' ? 'text-message__container text-message__container_type_error' : 'text-message__container'} >
        <p className='text-message__header' >Chatty AI</p>
        {type === 'Waiting' && <div className='text-message__ellipsis'/>}
        <p className='text-message__text'>{text}</p>
        {type === 'Response' && 
          <button className='text-message__copy-btn' onClick={handleCopyClick}>
            <div className='text-message__copy-icon'/>
            <p className='text-message__copy-text'>Скопировать</p>
          </button>}
      </div>
    </div>
  )
}

export default TextMessage;
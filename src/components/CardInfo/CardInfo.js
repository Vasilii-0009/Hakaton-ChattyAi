import './CardInfo.css';

function CardInfo({img, text, subText}) {
   return (
      <div className='card-info'>
         <div className={`card-info__img card-info__img_${img}`}/>
         <p className='card-info__text'>{text}</p>
         <p className='card-info__subtext'>{subText}</p>
      </div>
   )
}

export default CardInfo
import './MainScreen.css';
import { Link } from 'react-router-dom';
import CardInfo from '../CardInfo/CardInfo';

function MainScreen() {
  return (
    <div className='main-screen'>
      <div className='main-screen__wrapper'>
        <div className='main-screen__logo'/>
        <h1 className='main-screen__title'>Chatty AI</h1>
        <Link to="/recording" className='main-screen__btn'><p>Начать</p><p>›</p></Link>
      </div>
      
      <div className='main-screen__info-cards'>
        <CardInfo img={'info-chat'} text={'Речь в текст'} subText={`Проще говорить, \n чем печатать`} />
        <CardInfo img={'info-structure'} text={'Обозначит структуру'} subText={'Основываясь \n на лучших практиках'} />
        <CardInfo img={'info-volume'} text={'Сократит объём'} subText={'Только самое важное, \n никто не уснёт'} />
      </div>
    </div>
  )
}

export default MainScreen;
import './App.css';
import { cn } from '@bem-react/classname';
import Human from "./images/Human.png";

function App() {
  const navigation = ['Главная','Обо мне','Достижения','Проекты','Контакты']
  const cnApp = cn("App")
  return (
    <div className={cnApp()}>
        <header className={cnApp("Header")}>
                <ul className={cnApp("Nav")}>
                  {navigation.map((el, index) =>
                 <li key={index}>
                    {el}
                 </li> 
                )}
                <li>
                  RU 🇷🇺
                </li>
                </ul>
        </header>
        <div className={cnApp("Main")}>
          <div className={cnApp("Firts")}>
                <h1 className={cnApp("Name",{pos:"up"})} >Нуршинов</h1>
                <h1 className={cnApp("Name",{pos:"down"})} >Амин</h1>
                <h2 className={cnApp("Description")}>Я просто человек, который сделает вашу жизнь легче</h2>
                <img className={cnApp("Image")} src={Human} />
          </div>
        </div>
    </div>
  );
}

export default App;

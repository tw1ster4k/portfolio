import './App.css';
import { cn } from '@bem-react/classname';

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
                </ul>
        </header>
    </div>
  );
}

export default App;

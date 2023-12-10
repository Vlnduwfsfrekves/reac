import './App.css';
let myName = 'Vlad'
let src = 'https://cooker.net.ua/upload/iblock/8df/yabluko_chervone_1029.jpg'
let alt = 'image'
let num1 = 2
let num2 = 3
let sum = num1+num2
let array = ["Червоний", "Синій", "Зелений"]
let object = {name1:'github',url:'https://uk.wikipedia.org/wiki/GitHub'}
function App() {
  return (
    <div className="App">
      <h1>{myName}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img src={src} alt={alt}/>
      <p>{sum}</p>
      <a href={object['url']}>{object['name1']}</a>
      <ul>
        {array.map((color,index)=>(<li key={index}>{color}</li>))}
      </ul>
    </div>
  );
}

export default App;

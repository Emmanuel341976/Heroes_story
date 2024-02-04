import {Selector} from "./components/Selector.jsx";
import books from './api/books.json';

function App() {

  const options = books;

  const obj = {
    label:"Choisir une histoire",
    selectoptions:options,
    value:"title"
  }
  
  return <>
  <div>Une Histoire Dont Vous Etes le Héros</div>
  <Selector {...obj} />

  </>
  
}

export default App

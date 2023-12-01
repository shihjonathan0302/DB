import './App.css';
import {useState, useEffect} from 'react';
import Axios from 'axios';

function App() {
  const[id, setID] = useState("");
  const[name, setName] = useState("");
  const[price, setPrice] = useState("");
  const[category, setCategory] = useState("");

  const [listOfItems, setlistOfItems] = useState([]);

  const addItem = () => {
    Axios.post('http://localhost:3001/additem', {id : id, name : name, price : price, category : category})
    .then((response) => {
      setlistOfItems([...listOfItems, {id: id , name : name, price : price, category : category}])
    })
    .catch(() => {
    });
  }


  useEffect(() => {
    Axios.get('http://localhost:3001/read')
    .then((response) => {
      setlistOfItems(response.data);
    })
    .catch(() => {
      console.log("ERR");
    });
  }, [])





  return (
    <div itemName="App">
      <div itemName = "inputs">
        <h1>Item Management System</h1>
        <input type = "number" placeholder='ID' onChange = {(event) => {setID(event.target.value)}}/> 
        <input type = "text" placeholder='Name' onChange = {(event) => {setName(event.target.value)}}/>
        <input type = "number" placeholder='Price' onChange = {(event) => {setPrice(event.target.value)}}/>
        <input type = "text" placeholder='Category' onChange = {(event) => {setCategory(event.target.value)}}/>

        <button onClick={addItem}>Add Item</button>
      </div>

      <div itemName='listofItems'>
        {listOfItems.map((val) => {
          return (
            <div itemName='itemContainer'>
              <div itemName='item'>
                <h3>ID: {val.id}</h3>
                <h3>Name: {val.name}</h3>
                <h3>Price: {val.price}</h3>
                <h3>Category: {val.category}</h3>
              </div>
            </div>
          );
        })}
      </div>      
    </div>
  );
}

export default App;

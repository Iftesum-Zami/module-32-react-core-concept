import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const players = ['Shakib', 'mahmudullah', 'tamim iqbal', 'mustafizur'];

  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF eader', price: '$00.99'},
    {name: 'premier pro', price: '$100.99'}
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <Counter></Counter>

        <Users></Users>

        <ul>
          {
            players.map(player => <li>{player}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        
        {/* <Product name={products[0].name} price={products[0].price}></Product> */}
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>

        <Person name={products[1].name} price={products[1].price}></Person>
        <Person name={products[2].name} price={products[2].price}></Person>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => {setCount(count + 1)} ;  // or can use the arrow function(part after =) directly in the curly bracket
  const handleDecrease = () => {setCount(count - 1)} ; // onMouseMove will increase when hover

  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>  
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      setUsers(data);
    })
  });

  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(eachUser => <li>{eachUser.name}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightsalmon',
    width: '200px',
    float: 'left'
  }

  // const {name, price} = props.product;
  // console.log(name, price);  

  return (
    <div style={productStyle}>
      <h2>Name: {props.product.name}</h2>
      <h1>Price: {props.product.price}</h1>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props){
  const personStyle = {
    border: '2px solid red', 
    margin: '10px' 
  }

  return (
  <div style={personStyle}>
    <h1>Player: {props.name}</h1>
    <h3>He is {props.job}</h3>
  </div>
  )
}

export default App;


// or can use the arrow function(part after =) directly in the curly bracket
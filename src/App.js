import { useState, useEffect } from 'react';
import Customers from './components/Customers';
import Nav from './components/Nav';

function App() {
  const [data, setData] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  console.log(data);
  const url = 'https://rawgit.com/wvchallenges/se-exp-challenge-invoice/master/settings.json'; 

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(result => {
        setData(result.customers);
        setLoaded(true);
      })
      .catch(error => {
        setError(error);
      })
  }, [])

  return (
    <div className='App'>
      <h1>Customers</h1>
      <Nav />
      <hr className="breaker"/>
      {!isLoaded ? 'Getting Data from ...' 
        : error ? `Something went wrong. Error: ${error.message}` 
        : data.map(customer => 
          <Customers 
            key={customer.id} 
            id={customer.id}
            {...customer} 
          />
        )
      }
    </div>
  );
}

export default App;

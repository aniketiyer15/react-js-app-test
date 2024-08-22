import logo from './logo.svg';
import './App.css';



function App() {

  const numbers = Number(prompt("Enter number of integers"));
  if(isNaN(numbers)){

    return (
      <div>

        <h1>Invalid Input</h1> 
      </div>
    );


  }
  const inputs = [];
  for(let i = 0; i<numbers;i++){

    const inp = Number(prompt("Enter your integer"));
    if(isNaN(inp)){

      return (
        <div>

          <h1>Invalid Input</h1> 
        </div>
      );


    }
    inputs.push(inp);


  }

  

  return (
    <div>
    <table>
    <thead>
    <tr>
      <th>Numbers</th>

    </tr>
    </thead>
    <tbody>
      {
        inputs.map((val,i)=>
        <tr key = {i}>
          <td>{val}</td>
        </tr>)
      }
    </tbody>
    </table>
    </div>
  );
}

export default App;

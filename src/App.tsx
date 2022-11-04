import React, {useState} from "react";{}
const App = () => {

  const [name, setName] = useState('')
  const [Sobrenome, setSobrenome] = useState('')
  const [idade, setIdade] = useState(0)

  const lerNome = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const lerSobrenome = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSobrenome(e.target.value);
  }

  const lerIdade = (e: React.ChangeEvent<HTMLInputElement>) => {  
      const correntAge = e.target.value;  
      setIdade(parseInt(correntAge))
  }

  return (
    <div>
      <div>
        Nome:
        <input type="text" onChange={lerNome}/>
      </div>

      <div>
        Sobrenome:
        <input type="text"  onChange={lerSobrenome}/>
      </div>

      <div>
        Idade:
        <input type="text" onChange={lerIdade}/>
      </div>

      <hr/>

      Olá {`${name} ${Sobrenome}`}, tudo bem?<br/>
      Você tem {idade} anos.
    </div>
  );
}

export default App;
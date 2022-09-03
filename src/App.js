import './App.css';
import Main from './Pages/Main';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login'
import { useEffect, useState } from 'react';
import Cadastro from './Pages/Cadastro';
import Perfis from './Pages/Perfis';
import Perfil from './Pages/Perfil';




const  caesMain = [{
  id: 0,
  nome: 'SIMBA',
  sexo: 'Macho',
  descricao: 'Simba resgatado e bem novinho,um cachorro bem feliz e amoroso.',
  imagem: 'https://github.com/Drakemaner/Site-Enzo/blob/main/public/fotos/Cachorro_1.jpeg?raw=true7'
},
{
  id: 1,
  nome: 'JADE',
  sexo: 'Fêmea',
  descricao: 'Cheia de personalidade e energia.Dócil e se da super bem com crianças.' ,
  imagem: 'https://github.com/Drakemaner/Site-Enzo/blob/main/public/fotos/Cachorro_2.jpeg?raw=true'
},
{
  id: 2,
  nome: 'CACAU',
  sexo: 'Fêmea',
  descricao:'Tímida,pórem companheira e extremamente carinhosa.Cacau já foi vacinada e vermífugada.' ,
  imagem: 'https://github.com/Drakemaner/Site-Enzo/blob/main/public/fotos/Cachorro_3.jpeg?raw=true'
},
{
  id: 3,
  nome: 'PITOCO',
  sexo: 'Macho',
  descricao: 'Esse é o Pitoco e alegria e animação é com esse cachorrinho mesmo! Pitoco tem cerca de dois aninhos e aguarda ansioso por uma família.' ,
  imagem: 'https://github.com/Drakemaner/Site-Enzo/blob/main/public/fotos/Cachorro_4.jpeg?raw=true'
},
{
  id: 4,
  nome: 'PITOCO',
  sexo: 'Macho',
  descricao: 'Esse é o Pitoco e alegria e animação é com esse cachorrinho mesmo! Pitoco tem cerca de dois aninhos e aguarda ansioso por uma família.' ,
  imagem: 'https://github.com/Drakemaner/Site-Enzo/blob/main/public/fotos/Cachorro_5.jpeg?raw=true'
},
{
  id: 5,
  nome: 'PITOCO',
  sexo: 'Macho',
  descricao: 'Esse é o Pitoco e alegria e animação é com esse cachorrinho mesmo! Pitoco tem cerca de dois aninhos e aguarda ansioso por uma família.' ,
  imagem: 'https://github.com/Drakemaner/Site-Enzo/blob/main/public/fotos/Cachorro_6.jpeg?raw=true'
},

]

const  caesPerfis = [{
    id: 0,
    nome: 'Thor',
    idade: 5,
    sexo: 'M',
    raça: 'Pastor Alemão',
    descricao:'dsadasdaadsadad',
    imagem: ''
},
{
  id: 1,
  nome: 'llll',
  idade: 5,
  sexo: 'Macho',
  raça: 'Pastor Alemão',
  descricao:'dsadasdasdasd',
  imagem: ''
},
{
  id: 2,
  nome: 'Thor',
  idade: 5,
  sexo: 'M',
  raça: 'Pastor Alemão',
  descricao:'',
  imagem: ''
},
{
  id: 3,
  nome: 'Thor',
  idade: 5,
  sexo: 'M',
  raça: 'Pastor Alemão',
  descricao:'',
  imagem: ''
},
{
  id: 4,
  nome: 'Thor',
  idade: 5,
  sexo: 'M',
  raça: 'Pastor Alemão',
  descricao:'',
  imagem: ''
},
{
  id: 5,
  nome: 'Thor',
  idade: 5,
  sexo: 'M',
  raça: 'Pastor Alemão',
  descricao:'',
  imagem: ''
},

]


function App() {

  const [Logado, setLogado] = useState(false)


  const Status = (valor) =>{
    if(valor == true){
      setLogado(true)
      console.log(Logado)
    }
    else{
      setLogado(false)
    }
  }

  const [Conta, setConta] = useState([])


  const cadastrarContas = (conta) =>{
    setConta(...Conta, conta)
  }

  
  
  return (
    <Routes>
      <Route path="/" element={<Main caes={caesMain} status = {Logado}/>}/>
      <Route path='/Login' element={<Login status = {valor => Status(valor)} contas={Conta}/>} />
      <Route path='/Cadastro' element={<Cadastro contas = {valor => cadastrarContas(valor)}/>}/>
      <Route path='/Perfis' element={<Perfis caes={caesPerfis}/>}/>
      {caesPerfis.map(cao => <Route key ={cao} path={`/Perfil/${cao.nome}`} element={<Perfil imagem = {cao.imagem}  descricao = {cao.descricao} nome={cao.nome}/>}/>)}
      {Conta.logado === true && <Route path={`/MeuPerfil`} element={<Perfil nome={Conta.nome}/>}/>}
    </Routes>
  );
}

export default App;

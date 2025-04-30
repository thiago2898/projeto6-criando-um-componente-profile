import Profile from './components/Profile'
import './app.css'


export default function App() {
  return (
    <>
    <h1>TechVision</h1>
    <hr />

    <Profile name="Cadu" 
    idade="16 anos" 
    profissao="Cirurgião" 
    imagem={<img src="https://avatars.githubusercontent.com/u/184505106?s=130&v=4"></img>}/>
    <hr />

    <Profile name="Felipe" 
    idade="16 anos" 
    profissao="Mecânico" 
    imagem={<img src="https://avatars.githubusercontent.com/u/178519856?s=130&v=4"></img>}/>
    <hr />

    <Profile name="Enzo" 
    idade="16 anos" profissao="Engenheiro de Software" 
    imagem={<img src="https://avatars.githubusercontent.com/u/170757373?s=130&v=4"></img>}/>
    </>

  )
}
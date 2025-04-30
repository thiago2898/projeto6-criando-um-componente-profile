import './styles.css'

export default function Profile({ name, idade, profissao, imagem }) {
    return (
        <div className="user-container">
            <h2 className="name">Nome: {name}</h2>
            <h2 className="idade">Idade: {idade}</h2>
            <h2 className="profissao">Profissão: {profissao}</h2>
            <h2 className="imagem">Foto: {imagem}</h2>
        </div>
    )
}
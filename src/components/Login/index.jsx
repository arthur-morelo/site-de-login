import './style.css'


export default function Login(){

    return(
        <div className="page">
        <form action="submit">
            <h1>Login</h1>
            <input placeholder="Usuário" type="text" />
            <input placeholder="Senha" type="text" />
            <button>Enviar</button>
        </form>
        </div>
    )
}
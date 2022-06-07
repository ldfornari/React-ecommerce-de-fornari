import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { authContext } from "./AuthContext"

const Register = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const { singup } = useContext(authContext)
    const navigate = useNavigate()
    const [error, setError] = useState()

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try {
            await singup(user.email, user.password)
            navigate("/")
        }
        catch (error) {
            setError(error.message)
        }
    }

    return (
        <form className="formRegister" name="form" onSubmit={handleSubmit} >
            <h3>Ingresa tus datos para darte de alta</h3>
            {error && <p>{error}</p>}
            <input className="inputLogin" type="email" name="email" id="email" placeholder='ejemplo@ejemplo.com' onChange={handleChange} />
            <input className="inputLogin" type="password" name="password" id="" placeholder='*******' onChange={handleChange} />
            <button className="buttonLogin" type="onClick"> Agregar </button>
            <button className="buttonLogin" type="reset">Vaciar formulario</button>
        </form>
       
    )
}
export default Register
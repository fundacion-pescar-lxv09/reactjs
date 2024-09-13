import { useContext, useRef } from 'react'
import { SessionContext } from '../providers/sessionProvider'
import { ThemeContext } from '../providers/themeProvider'
import { buttonStyle, inputStyle } from '../styles/nav'
import { formStyle } from '../styles/form'
import { useTheme } from '../styles/theme'
import { Button } from './Button'

export default function Form() {
    const {theme} = useContext(ThemeContext)
    const {setSession} = useContext(SessionContext)
    const userRef = useRef()
    const emailRef = useRef()
    const jobRef = useRef()
    const handleSubmit = (e) => {
        e.preventDefault()
        const getRef = (ref) => ref.current.value
        setSession({
            userName: getRef(userRef),
            userEmail: getRef(emailRef),
            job: getRef(jobRef),
        })
    }
  return (
    <form style={{...formStyle, ...useTheme(theme)}} onSubmit={handleSubmit}>
        <label htmlFor="userName">Ingrese su Nombre</label>
        <input style={{...inputStyle,...useTheme(theme)}} ref={userRef} id='userName' name="userName" type="text" />
        <label htmlFor="userEmail">Ingrese su Correo</label>
        <input style={{...inputStyle,...useTheme(theme)}} ref={emailRef} id='userEmail' name="userEmail" type="text" />
        <label htmlFor="job">Seleccione una Ocupacion</label>
        <select style={{...inputStyle,...useTheme(theme)}} ref={jobRef} name="job" id="job">
            <option value="instructor">instructor</option>
            <option value="ingeniero">ingeniero</option>
            <option value="arquitecto">arquitecto</option>
            <option value="desarrollador">desarrollador</option>
            <option value="tecnico">tecnico</option>
        </select>
        <Button style={buttonStyle} text="aceptar"/>
    </form>
  )
}

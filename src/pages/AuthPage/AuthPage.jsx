import LoginForm from "../../components/LoginForm/LoginForm"
import SignUpForm from "../../components/SignUpForm/SignUpForm"
import { useState } from "react"

export default function AuthPage({ setUser }) {
	const [show, setShow] = useState(false);

	return (
		<main>
			{show ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser}/>}
			<button onClick={() =>setShow(!show)}>{show? 'Sign Up' : 'Log In' }</button>
		</main>
	)
}
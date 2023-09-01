import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { useState } from "react";
import './AuthPage.css';

export default function AuthPage({ setUser }) {
	const [show, setShow] = useState(false);

	return (
		<main className="AtuhPage">
			{show ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser}/>}
			<button className="Auth-btn" onClick={() =>setShow(!show)}>{show? 'SIGN UP' : 'LOG IN' }</button>
		</main>
	)
}
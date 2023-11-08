import "./style.css";
 
import { FormEvent, useState } from "react";

import { Input } from "../../../../components/Input/";
import { useUserRegistration } from "../../../../hooks/useUserRegistration";

export function UserRegistrationForm() {
  const [username, setUsername] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [passwordRepeat, setPasswordRepeat] = useState<string>();
  const [passwordMatch, setPasswordMatch] = useState<boolean>();

  const handleUserRegistrationFormSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (username && email && password && passwordMatch) {
      const { status } = await useUserRegistration({ username, email, password }); 
      console.log(status);
    }
  }

  const validatePassword = () => {
    setPasswordMatch(password === passwordRepeat);
  } 

  return (
    <form 
      id="user-registration-form"
      className="display-flex direction-column width-full"
      method="POST"
      onSubmit={(event) => handleUserRegistrationFormSubmit(event)}
    >
      <header>
        <h2>Create your account</h2>
        <p>Create an account to continue browsing our website</p>
      </header>
      <main className="inputs-container display-flex direction-column">
        <Input 
          id="username" 
          placeholder="Username"
          type="text"
          setState={ setUsername }
        />
        <Input 
          id="email" 
          placeholder="Email addres"
          type="email"
          setState={ setEmail }
        />
        <Input 
          id="password"
          placeholder="Password"
          type="password"
          setState={ setPassword }
        />
        <Input 
          id="repeat-password"
          placeholder="Repeat password"
          type="password"
          setState={ setPasswordRepeat }
          onBlur={ validatePassword }
          showError={ !passwordMatch }
        />
      </main>  
      <footer className="display-flex direction-column">
        <button 
          type="submit"
          className={`create-account-btn width-full ${!passwordMatch && 'error'}`}
        >
          {passwordMatch ? 'Create account' : 'Password not match'}
        </button>
        <p>Already have an account? <a href="#">Log in</a></p>
      </footer>
    </form>
  );
}

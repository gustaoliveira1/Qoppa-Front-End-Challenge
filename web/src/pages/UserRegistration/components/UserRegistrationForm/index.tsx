import "./style.css";
 
import { Input } from "../../../../components/Input/";

export function UserRegistrationForm() {
  return (
    <form 
      id="user-registration-form"
      className="display-flex direction-column width-full"
      method="POST"
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
        />
        <Input 
          id="email" 
          placeholder="Email addres"
          type="email"
        />
        <Input 
          id="password"
          placeholder="Password"
          type="password"
        />
        <Input 
          id="repeat-password"
          placeholder="Repeat password"
          type="password"
        />
      </main>  
      <footer className="display-flex direction-column">
        <button className="create-account-btn width-full">
          Create account
        </button>
        <p>Already have an account? <a href="#">Log in</a></p>
      </footer>
    </form>
  );
}

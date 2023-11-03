import "./style.css";

import abstractBackground from "../../assets/background.jpg";

import { UserRegistrationForm } from "./components/UserRegistrationForm/"

export function UserRegistration() {
  return (
    <main 
      id="user-registration"
      className="display-flex align-center wrapper"
    >

      {/* left section */}
      <img src={ abstractBackground } alt="an abstract blue background" />

      {/* right section */}
      <UserRegistrationForm />
    </main>
  );
}

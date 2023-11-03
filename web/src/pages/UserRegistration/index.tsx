import "./style.css";

import { UserRegistrationForm } from "./components/UserRegistrationForm/"

export function UserRegistration() {
  return (
    <main 
      id="user-registration"
      className="display-flex align-center wrapper"
    >
      <UserRegistrationForm />
    </main>
  );
}

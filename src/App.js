import "./styles.css";
import { useState, useEffect } from "react";
import { UserList } from "./components/UserList";

export default function App() {
  const [apiUsers, setApiUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setApiUsers(data);
      });
  }, []);

  return (
    <div className="App mx-5 my-3">
      <UserList users={apiUsers} />
    </div>
  );
}

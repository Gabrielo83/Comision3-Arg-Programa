import "./App.css";
import axios from "axios";
function App() {
  const sendGmail = async () => {
    await axios.post("http://localhost:3000/nodemailer", {
      mail: "algunmail@gmail.com",
      name: "Gabriel",
    });
  };
  return (
    <>
      <button onClick={() => sendGmail()}>Envio de Gmail</button>
    </>
  );
}

export default App;

import { useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import TicketContainer from "./components/TicketContainer"
import "./index.css"
function App() {
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setresolved] = useState([]);

  return (
    <div className="bg-[#f5f5f5]">
      <Header/>
      <Hero 
      inProgress={inProgress}
      resolved = {resolved}
      />
      <TicketContainer
        inProgress={inProgress}
        setInProgress={setInProgress}
        resolved={resolved}
        setresolved={setresolved}
      />
      <Footer/>
    </div>
  )
}

export default App

import Introduction from "./components/Introduction.tsx";
import Contact from "./components/Contact.tsx";
import Navbar from "./components/Navbar.tsx";
import Projects from "./components/Projects.tsx";
import Skills from "./components/Skills.tsx";


export default function App() {

  return (
    <div className="min-w-full relative m-0 p-0 box-border bg-slate-950">
      <Navbar></Navbar>
      <Introduction/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

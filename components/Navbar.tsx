import { Keyboard } from "lucide-react"


const Navbar = () => {
  return (
    <div className="navbar bg-transparent shadow-sm max-w-7xl mx-auto w-full">
        <div className="flex-1 flex items-center ">
            <Keyboard width={35} height={35}/>
            <a className="btn btn-ghost text-xl font-bold">TypeTest</a>
        </div>
        <div className="flex-none">
            
        </div>
    </div>
  )
}

export default Navbar
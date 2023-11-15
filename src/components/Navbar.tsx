import '../style/navbar.css'
export default function Navbar() {
    return (
        <div className='max-w-full flex items-center justify-center'>
            <div className="flex justify-between items-center h-20 min-w-[90rem] max-w-full">
            <div className='logo mr-5'>
            <div className="w-40 h-40 bg-[url('/logo.png')] bg-top bg-cover bg-no-repeat rounded-xl" >

            </div>
            </div>
            <div className="flex">
                <a className="px-4 text-white" href="#">
                    About me
                </a>
                <a className="px-4 text-white" href="#">
                    Skills
                </a>
                <a className="px-4 text-white" href="#">
                    Projects
                </a>
            </div>
        </div>  
        </div>
    )
}
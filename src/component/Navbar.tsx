
import logo from '.././assets/logo.png'

function Navbar() {
    return (
        <div>
            <div className="navbar bg-base-100 flex items-center justify-start ml-10 mt-5">
                <a>
                   <img className='rounded-xl' src={logo} alt="" height={100} width={100} />
                    
                </a>
                <a className="btn btn-ghost text-xl ">Home</a>
                <a className="btn btn-ghost text-xl ">About</a>
                <a className="btn btn-ghost text-xl ">Contact</a>

            </div>

        </div>
    )
}

export default Navbar
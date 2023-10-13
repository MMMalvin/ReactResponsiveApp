// this component is used to render the Navigation Bar
import React, {useState} from 'react'
import { navbarHeaders } from '../constants'
import Button from './Button'

const NavBar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
        <img src="./src/assets/logo.svg" className='w-[124px] h-[32px]'/>
        <ul className="list-none sm:flex hidden justify-end items-center"> {/* this renders a list, the list contains the differrnt tabs on the navigation bar*/}
            {navbarHeaders.map((nav, index) => ( 
                <li key={nav.id} className={`font-poppins font-normal cursor-pointer
                    text-[16px] text-white mr-10`}>
                    <a href={nav.title}> {nav.title} </a> 
                </li>
            ))}
        </ul>
        <Button buttonText={"Let's talk"} primaryColor={`bg-secondary`} secondaryColor={`#70259B`}/>
        <div className="sm:hidden flex flex-1 justify-end items-center"> {/* this is used to change the menu icon to the close icon on a click*/}
            <img src={toggle ? "./src/assets/close.svg" : "./src/assets/menu.svg"}
                alt='menu' className='w-[28px] h-[28px] object-contain'
                onClick={() => setToggle((prev) => !prev)} 
            />

            <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient 
            absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-lg sidebar z-10`}> {/* this is used to render the drop down tab when the menu is clicked*/}
                <ul className="list-none flex flex-col justify-end items-center flex-1">
                {navbarHeaders.map((nav, index) => (
                <li key={nav.id} className={`font-poppins font-normal cursor-pointer
                    text-[16px] text-white mb-4`}>
                    {nav.title}
                </li>
                ))}
                </ul>
            </div>
        </div>        

        </nav>
    )
}

export default NavBar

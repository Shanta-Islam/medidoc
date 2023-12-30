import { useEffect, useState } from "react";
import arrow from "../../assets/Icon_SideArrow_round.png";
import arrow1 from "../../assets/Icon_SideArrow_round1.png";
import logo from "../../assets/Icon_Vector.png";
import img1 from '../../assets/Icon_Home.png';
import img2 from '../../assets/Icon_Patient Profile.png';
import img3 from '../../assets/Icon_Appointment.png';
import img4 from '../../assets/Icon_medical history.png';
import img5 from '../../assets/Icon_Settings.png';
import img6 from '../../assets/Icon_Patient Profile1.png';
import img7 from '../../assets/Icon_Appointment1.png';
import img8 from '../../assets/Icon_medical history1.png';
import img9 from '../../assets/Icon_Settings1.png';
import bars from '../../assets/Icon_Menu.png';
import bars2 from '../../assets/Icon_Menu1.png';
import sun from '../../assets/Toggle button.png'
import moon from '../../assets/Toggle button-1.png'
import { Outlet } from "react-router-dom";

const Dashboard = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Home", src: img1, src1: img1 },
        { title: "Patient Profile", src: img2, src1: img6 },
        { title: "Appointments", src: img3, src1: img7 },
        { title: "Medical History", src: img4, src1: img8 },
        { title: "Settings", src: img5, src1: img9 },

    ];
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);
    return (
        <div className="flex">
            <div
                className={` ${open ? "w-[264px]" : "w-[76px]"
                    }  ${theme === "light" ? "bg-white" : "bg-[#2E1619]"
                    } h-screen p-2  pt-8 relative duration-300`}>
                {theme === "light" ? 
                <img
                    src={arrow}
                    className={`absolute cursor-pointer -right-3 top-9 w-7
                    ${!open && "hidden"}`}
                    onClick={() => setOpen(!open)} />
                    :
                    <img
                        src={arrow1}
                        className={`absolute cursor-pointer -right-3 top-9 w-7
                        ${!open && "hidden"}`}
                        onClick={() => setOpen(!open)} />
                }
                <div className="flex gap-x-4 items-center">
                    {open ? <img
                        src={logo}
                        className={`cursor-pointer duration-500"
                            }`} /> :
                        theme === "light" ?
                            <img src={bars} className={`cursor-pointer duration-500"
                        }`} onClick={() => setOpen(!open)} /> :
                            <img src={bars2} className={`cursor-pointer duration-500"
                        }`} onClick={() => setOpen(!open)} />
                    }
                    <h1 className={`${theme === "light" ? "text-[#384449]" : "text-white"} origin-left font-medium text-xl duration-200 ${!open && "scale-0"}`}>
                        Medi<span className="text-[#FF7594]">Doc</span>
                    </h1>
                </div>
                <ul className="pt-6">
                    {Menus.map((Menu, index) => (
                        <li
                            key={index}
                            className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center  ${index === 0 && "bg-light-white"
                                }`}>
                            {theme === "light" ? <img src={Menu.src} /> : <img src={Menu.src1} />}
                            <span className={`${!open && "hidden"} origin-left duration-200 ${theme === "light" ? "text-[#2E1619]" : "text-[#D1D5DB]"}`}>
                                {Menu.title}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={`h-screen flex-1 p-7 ${theme === "light" ? "bg-[#f9f9f9]" : "bg-[#150a09]"}`}>
                <div className="flex justify-between">
                    <div>
                        <Outlet></Outlet>
                        {/* <h1 className={`text-2xl font-semibold ${theme === "light" ? "text-[#646F75]" : "text-white"}`}>Home Page</h1> */}
                    </div>
                    <div>
                        <button>
                            <label className="swap">
                                <input
                                    type="checkbox"
                                    onChange={handleToggle}
                                    checked={theme === "light" ? false : true}
                                />
                                <img src={sun} alt="dark" className="swap-off" />
                                <img src={moon} alt="light" className="swap-on" />
                            </label>
                        </button>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard; 
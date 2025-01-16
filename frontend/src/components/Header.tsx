import { Link, NavLink } from "react-router-dom";
import { HEADERLINKS } from "../constants/links";
import { SITEINFO } from "../constants/links";

export const Header = () => {
    return (
        <div className="bg-[#000000] p-4 px-2 md:p-4 md:px-6 shadow-md">
            <div className="flex justify-between items-center">
                <Link
                    to="/"
                    className="text-[#FFFF00] text-xl font-bold">
                    {SITEINFO.title}
                </Link>
                <ul className="flex space-x-4 items-center">
                    {HEADERLINKS.map((link, index) => {
                        return (
                            <NavLink
                                key={index}
                                to={link.link}
                                className={({ isActive }) =>
                                    "hover:text-[#FFD700] cursor-pointer transition-all " + (isActive ? "text-[#FFFF00] font-bold" : "text-[#ffff00ad]")
                                  }
                            >
                                {link.name}
                            </NavLink>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

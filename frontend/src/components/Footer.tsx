import { Link } from "react-router-dom";
import { SITEINFO } from "../constants/links";

export const Footer = () => {
    return (
        <div className="bg-[#000000] p-2 md:p-6 shadow-md">
            <div className="grid grid-cols-2 gap-6">
                <div className="text-left">
                    <Link to="/" className="text-[#FFFF00] text-2xl font-bold mb-4">{SITEINFO.title}</Link>
                    <p className="text-[#FFD700] text-sm">
                        © {new Date().getFullYear()} {SITEINFO.title}. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

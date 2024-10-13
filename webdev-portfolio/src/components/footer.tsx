import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaCameraRetro } from "react-icons/fa";

export  default function Footer() {
    return (
        <div className="w-full bg-[#F1EEDB] text-gray-800 border-t-2 border-black">
            <div className="max-w-7xl mx-auto py-6 xl:py-12">
                <div className="flex justify-center gap-4 text-red-500 mb-3">
                    <FaGithub size={32} />
                    <FaLinkedin size={32} />
                    <FaInstagram size={32} />
                    <FaCameraRetro size={32} />
                </div>
                <p className="text-center">Coded and designed by Filip Szczęch.</p>
            </div>
        </div>
    );
}
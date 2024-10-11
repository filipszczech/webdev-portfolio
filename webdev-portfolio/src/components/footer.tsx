import Link from "next/link";

export  default function Footer() {
    return (
        <div className="w-full bg-[#F1EEDB] text-gray-800 border-t-2 border-black">
            <div className="max-w-7xl mx-auto py-6 xl:py-9">
                <Link href="/">HOME</Link>
            </div>
        </div>
    );
}
import React from "react";
import Link from "next/link";
import Image from "next/image";

const FooterNav = () => {
    const img = "/assets/logo.png";
    return (
        <footer className="w-full bg-[#EECAE9] py-10 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 space-y-6">

                <div className="flex justify-center items-center gap-2">
                    {/* <Image
                        src={img}
                        alt="Vazee Logo"
                        width={50}
                        height={50}
                        className="w-12 h-12"
                    /> */}
                    <span className="text-xl font-bold text-[#ae1198]">Vazee</span>
                </div>

                <div className="flex justify-center gap-6 text-sm text-[#ae1198]">
                    <Link href="/about-us" className="hover:text-[#ae1198]">
                        About Us
                    </Link>
                    <Link href="/contact-us" className="hover:text-[#ae1198]">
                        Contact Us
                    </Link>

                </div>

                <div className="text-center mt-6">
                    <p className="text-[#ae1198] text-xs">&copy; 2025 Vazee, Inc. All rights reserved.</p>
                    <p className="text-[#ae1198] text-xs">Created with <span className="text-red-500">♥</span> from India.</p>
                </div>
            </div>
        </footer>
    );
};

export default FooterNav;

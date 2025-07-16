// Footer.js
import React from 'react';
const Footer = () => {
    return (
        <footer className="w-full bg-white text-white py-4 shadow-2xs shadow-gray-600 border-t border-gray-200 ">
            <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="  pt-4 text-center text-gray-800     animate-fadeInUp delay-300  ">
                    <p className="text-sm">
                        © {new Date().getFullYear()} youngs. All rights reserved.
                    </p>
                    {/* <p className="text-sm">
                        © {new Date().getFullYear()} mansoor. All rights reserved.{' '}
                        <a href="https://www.facebook.com/share/16nZ3sBzd4/" target="_blank" className="text-blue-600 hover:underline">
                            mazack tha bro majack bro majack 😂🤣🤪😁
                        </a>
                    </p> */}
                </div>
            </div>
        </footer>
    );
};
export default Footer;
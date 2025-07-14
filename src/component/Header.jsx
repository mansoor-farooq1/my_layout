import logo from '../images/logo.png';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Dialog,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react';
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

// Define your services data here
const services = [
    { name: 'Sap Services', description: 'Crafting responsive and dynamic websites', href: '#', icon: null },
    { name: 'Sap Services1', description: 'Building native and cross-platform mobile apps', href: '#', icon: null },
    { name: 'Sap Services 2', description: 'Creating intuitive and engaging user experiences', href: '#', icon: null },
];
const DynimicServices = [
    { name: 'Dynimic services ', description: 'Crafting responsive and dynamic websites', href: '#', icon: null },
    { name: 'Dynimic services 1', description: 'Building native and cross-platform mobile apps', href: '#', icon: null },
    { name: 'Dynimic services 2', description: 'Creating intuitive and engaging user experiences', href: '#', icon: null },
];


const SscpServices = [
    { name: 'Sscp secure', description: 'Crafting responsive and dynamic websites', href: '#', icon: null },
    { name: 'Sscp secure 1', description: 'Building native and cross-platform mobile apps', href: '#', icon: null },
    { name: 'Sscp secure 2', description: 'Creating intuitive and engaging user experiences', href: '#', icon: null },
];

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null); // For underline effect

    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full shadow-md bg-white/90 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between py-2"> {/* Reduced py from py-4 to py-2 */}
                    {/* Logo with animation */}
                    <motion.div
                        className="flex lg:flex-1"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <motion.img
                                alt="Company Logo"
                                src={logo}
                                className="w-[80px] h-[40px]" // Reduced logo size from w-[100px] h-[60px]
                                whileHover={{ rotate: 5 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            />
                        </a>
                    </motion.div>

                    {/* Mobile menu button */}
                    <div className="flex lg:hidden">
                        <motion.button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:text-indigo-600"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-6" />
                        </motion.button>
                    </div>

                    {/* Desktop navigation */}
                    <PopoverGroup className="hidden lg:flex lg:gap-x-6"> {/* Reduced gap-x from 8 to 6 */}
                        {/* Home Link */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <a
                                href="/"
                                className="relative text-sm font-semibold text-gray-700 hover:text-indigo-600 transition-colors duration-200"
                                onMouseEnter={() => setHoveredItem('home')}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                Home
                                {hoveredItem === 'home' && (
                                    <motion.span
                                        className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600"
                                        layoutId="underline"
                                        initial={{ width: 0 }}
                                        animate={{ width: '100%' }}
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </a>
                        </motion.div>

                        {/* Services Dropdown */}
                        <Popover className="p-0 relative">
                            {({ open }) => (
                                <>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <PopoverButton
                                            className="flex items-center text-sm font-semibold text-gray-700 hover:text-indigo-600 outline-none gap-x-1 transition-colors duration-200"
                                            onMouseEnter={() => setHoveredItem('services')}
                                            onMouseLeave={() => setHoveredItem(null)}
                                        >
                                            Services
                                            <motion.div
                                                animate={{ rotate: open ? 180 : 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <ChevronDownIcon aria-hidden="true" className="flex-none text-gray-400 size-5" />
                                            </motion.div>
                                            {hoveredItem === 'services' && (
                                                <motion.span
                                                    className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600"
                                                    layoutId="underline"
                                                    initial={{ width: 0 }}
                                                    animate={{ width: '100%' }}
                                                    transition={{ duration: 0.3 }}
                                                />
                                            )}
                                        </PopoverButton>
                                    </motion.div>

                                    <AnimatePresence>
                                        {open && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <PopoverPanel
                                                    className="absolute z-10 w-screen max-w-md mt-3 -translate-x-1/2 left-1/2"
                                                    static
                                                >
                                                    <motion.div
                                                        className="overflow-hidden bg-white shadow-xl rounded-xl ring-1 ring-gray-900/5"
                                                        initial={{ scale: 0.95 }}
                                                        animate={{ scale: 1 }}
                                                        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                                                    >
                                                        <div className="p-4">
                                                            <h3 className="text-lg font-bold text-gray-900 mb-3 border-b pb-2">Our Services</h3>
                                                            <ul className="space-y-3">
                                                                {services.map((item) => (
                                                                    <motion.li
                                                                        key={item.name}
                                                                        className="relative flex items-start p-3 text-sm rounded-lg group hover:bg-gray-50 transition-colors duration-200"
                                                                        whileHover={{ x: 5 }}
                                                                        transition={{ type: 'spring', stiffness: 300 }}
                                                                    >
                                                                        {item.icon && (
                                                                            <div className="flex items-center justify-center flex-none rounded-lg size-10 bg-indigo-50 group-hover:bg-indigo-100 mr-3">
                                                                                <item.icon aria-hidden="true" className="text-indigo-600 size-5" />
                                                                            </div>
                                                                        )}
                                                                        <div className="flex-auto">
                                                                            <a href={item.href} className="block font-semibold text-gray-900">
                                                                                {item.name}
                                                                                <span className="absolute inset-0" />
                                                                            </a>
                                                                            <p className="mt-0.5 text-gray-600">{item.description}</p>
                                                                        </div>
                                                                    </motion.li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </motion.div>
                                                </PopoverPanel>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </>
                            )}
                        </Popover>

                        {/* Other Navigation Links */}
                        {['About', 'Contact'].map((item) => (
                            <motion.div
                                key={item}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <a
                                    href={`/${item.toLowerCase()}`}
                                    className="relative text-sm font-semibold text-gray-700 hover:text-indigo-600 transition-colors duration-200"
                                    onMouseEnter={() => setHoveredItem(item.toLowerCase())}
                                    onMouseLeave={() => setHoveredItem(null)}
                                >
                                    {item}
                                    {hoveredItem === item.toLowerCase() && (
                                        <motion.span
                                            className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600"
                                            layoutId="underline"
                                            initial={{ width: 0 }}
                                            animate={{ width: '100%' }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}
                                </a>
                            </motion.div>
                        ))}
                    </PopoverGroup>

                    {/* Login/Get Started button */}
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <motion.a
                            href="/login"
                            className="relative text-sm font-semibold text-white bg-indigo-600 px-3 py-1.5 rounded-md hover:bg-indigo-700 transition-colors duration-300 group" // Reduced px and py
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="relative z-10 flex items-center gap-1">
                                Login
                                <motion.span
                                    aria-hidden="true"
                                    animate={{ x: [0, 3, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                >
                                    →
                                </motion.span>
                            </span>
                        </motion.a>
                    </div>
                </nav>
            </div>

            {/* Mobile menu with animations */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <Dialog
                        open={mobileMenuOpen}
                        onClose={setMobileMenuOpen}
                        className="lg:hidden"
                        as={motion.div}
                    >
                        <motion.div
                            className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />

                        <motion.div
                            className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 30 }}
                        >
                            <div className="flex items-center justify-between p-4"> {/* Reduced p from p-6 to p-4 */}
                                <motion.a
                                    href="#"
                                    className="-m-1.5 p-1.5"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="sr-only">Your Company</span>
                                    <img
                                        alt="Company Logo"
                                        src={logo}
                                        className="w-auto h-6" // Reduced logo height for mobile
                                    />
                                </motion.a>
                                <motion.button
                                    type="button"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:text-indigo-600"
                                    whileHover={{ rotate: 90, scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon aria-hidden="true" className="size-6" />
                                </motion.button>
                            </div>
                            <motion.div
                                className="px-6 pt-2 pb-6"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="py-0 space-y-2"> {/* Reduced py from py-6 to py-4 */}
                                        {/* Mobile Home Link */}
                                        <motion.a
                                            href="/"
                                            className="block px-3 py-2 -mx-3 text-base font-semibold text-gray-900 rounded-lg hover:bg-gray-50"
                                            whileHover={{ x: 5 }}
                                        >
                                            Home
                                        </motion.a>

                                        {/* Mobile Services Disclosure */}
                                        <Disclosure as="div" className="-mx-3">
                                            {({ open }) => (
                                                <>
                                                    <motion.div whileHover={{ x: 5 }}>
                                                        <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold text-gray-900 hover:bg-gray-50">
                                                            <span>Services</span>
                                                            <motion.div
                                                                animate={{ rotate: open ? 180 : 0 }}
                                                            >
                                                                <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
                                                            </motion.div>
                                                        </DisclosureButton>
                                                    </motion.div>
                                                    <DisclosurePanel className="mt-2 space-y-2">
                                                        {services.map((item, index) => (
                                                            <motion.div
                                                                key={item.name}
                                                                initial={{ opacity: 0, x: -10 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: 0.05 * index }}
                                                            >
                                                                <DisclosureButton
                                                                    as="a"
                                                                    href={item.href}
                                                                    className="block py-2 pl-6 pr-3 text-sm font-semibold text-gray-900 rounded-lg hover:bg-gray-50"
                                                                >
                                                                    {item.name}
                                                                </DisclosureButton>
                                                            </motion.div>
                                                        ))}
                                                    </DisclosurePanel>
                                                </>
                                            )}
                                        </Disclosure>

                                        {/* Other Mobile Links */}
                                        {['About', 'Contact'].map((item) => (
                                            <motion.a
                                                key={item}
                                                href={`/${item.toLowerCase()}`}
                                                className="block px-3 py-2 -mx-3 text-base font-semibold text-gray-900 rounded-lg hover:bg-gray-50"
                                                whileHover={{ x: 5 }}
                                            >
                                                {item}
                                            </motion.a>
                                        ))}
                                    </div>
                                    {/* <div  
                                    // className="py-4"
                                    > Reduced py from py-6 to py-4 */}
                                    <div className="p-0">

                                        <motion.a
                                            href="/login"
                                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-indigo-600 hover:bg-gray-50"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Login
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </Dialog>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;

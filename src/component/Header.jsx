// import logo from '../images/logo.png';
// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
// Dialog,
// Disclosure,
// DisclosureButton,
// DisclosurePanel,
// Popover,
// PopoverButton,
// PopoverGroup,
// PopoverPanel,
// } from '@headlessui/react';
// import {
// Bars3Icon,
// XMarkIcon,
// } from '@heroicons/react/24/outline';
// import { ChevronDownIcon } from '@heroicons/react/20/solid';

// // Define your services data here
// const services = [
// { name: 'Sap Services', description: 'Crafting responsive and dynamic websites', href: '#', icon: null },
// { name: 'Sap Services1', description: 'Building native and cross-platform mobile apps', href: '#', icon: null },
// { name: 'Sap Services 2', description: 'Creating intuitive and engaging user experiences', href: '#', icon: null },
// ];
// const DynimicServices = [
// { name: 'Dynimic services ', description: 'Crafting responsive and dynamic websites', href: '#', icon: null },
// { name: 'Dynimic services 1', description: 'Building native and cross-platform mobile apps', href: '#', icon: null },
// { name: 'Dynimic services 2', description: 'Creating intuitive and engaging user experiences', href: '#', icon: null },
// ];


// const SscpServices = [
// { name: 'Sscp secure', description: 'Crafting responsive and dynamic websites', href: '#', icon: null },
// { name: 'Sscp secure 1', description: 'Building native and cross-platform mobile apps', href: '#', icon: null },
// { name: 'Sscp secure 2', description: 'Creating intuitive and engaging user experiences', href: '#', icon: null },
// ];

// const Header = () => {
// const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
// const [hoveredItem, setHoveredItem] = useState(null); // For underline effect

// return (
// <header className="fixed top-0 left-0 right-0 z-50 w-full shadow-md bg-white/90 backdrop-blur-md">
// <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// <nav className="flex items-center justify-between py-2"> {/* Reduced py from py-4 to py-2 */}
// {/* Logo with animation */}
// <motion.div
//className="flex lg:flex-1"
//whileHover={{ scale: 1.05 }}
//whileTap={{ scale: 0.95 }}
// >
//<a href="#" className="-m-1.5 p-1.5">
//<span className="sr-only">Your Company</span>
//<motion.img
//alt="Company Logo"
//src={logo}
//className="w-[80px] h-[40px]" // Reduced logo size from w-[100px] h-[60px]
//whileHover={{ rotate: 5 }}
//transition={{ type: 'spring', stiffness: 300 }}
///>
//</a>
// </motion.div>

// {/* Mobile menu button */}
// <div className="flex lg:hidden">
//<motion.button
//type="button"
//onClick={() => setMobileMenuOpen(true)}
//className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:text-indigo-600"
//whileHover={{ scale: 1.1 }}
//whileTap={{ scale: 0.9 }}
//>
//<span className="sr-only">Open main menu</span>
//<Bars3Icon aria-hidden="true" className="size-6" />
//</motion.button>
// </div>

// {/* Desktop navigation */}
// <PopoverGroup className="hidden lg:flex lg:gap-x-6"> {/* Reduced gap-x from 8 to 6 */}
//{/* Home Link */}
//<motion.div
//whileHover={{ scale: 1.05 }}
//whileTap={{ scale: 0.95 }}
//>
//<a
//href="/"
//className="relative text-sm font-semibold text-gray-700 hover:text-indigo-600 transition-colors duration-200"
//onMouseEnter={() => setHoveredItem('home')}
//onMouseLeave={() => setHoveredItem(null)}
//>
//Home
//{hoveredItem === 'home' && (
//<motion.span
//className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600"
//layoutId="underline"
//initial={{ width: 0 }}
//animate={{ width: '100%' }}
//transition={{ duration: 0.3 }}
///>
//)}
//</a>
//</motion.div>

//{/* Services Dropdown */}
//<Popover className="p-0 relative">
//{({ open }) => (
//<>
//<motion.div
//whileHover={{ scale: 1.05 }}
//whileTap={{ scale: 0.95 }}
//>
//<PopoverButton
//className="flex items-center text-sm font-semibold text-gray-700 hover:text-indigo-600 outline-none gap-x-1 transition-colors duration-200"
//onMouseEnter={() => setHoveredItem('services')}
//onMouseLeave={() => setHoveredItem(null)}
//>
//Services
//<motion.div
//animate={{ rotate: open ? 180 : 0 }}
//transition={{ duration: 0.2 }}
//>
//<ChevronDownIcon aria-hidden="true" className="flex-none text-gray-400 size-5" />
//</motion.div>
//{hoveredItem === 'services' && (
//<motion.span
//   className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600"
//   layoutId="underline"
//   initial={{ width: 0 }}
//   animate={{ width: '100%' }}
//   transition={{ duration: 0.3 }}
///>
//)}
//</PopoverButton>
//</motion.div>

//<AnimatePresence>
//{open && (
//<motion.div
//initial={{ opacity: 0, y: -10 }}
//animate={{ opacity: 1, y: 0 }}
//exit={{ opacity: 0, y: -10 }}
//transition={{ duration: 0.2 }}
//>
//<PopoverPanel
//   className="absolute z-10 w-screen max-w-md mt-3 -translate-x-1/2 left-1/2"
//   static
//>
//   <motion.div
//   className="overflow-hidden bg-white shadow-xl rounded-xl ring-1 ring-gray-900/5"
//   initial={{ scale: 0.95 }}
//   animate={{ scale: 1 }}
//   transition={{ type: 'spring', stiffness: 200, damping: 20 }}
//   >
//   <div className="p-4">
//   <h3 className="text-lg font-bold text-gray-900 mb-3 border-b pb-2">Our Services</h3>
//   <ul className="space-y-3">
//   {services.map((item) => (
//   <motion.li
//   key={item.name}
//   className="relative flex items-start p-3 text-sm rounded-lg group hover:bg-gray-50 transition-colors duration-200"
//   whileHover={{ x: 5 }}
//   transition={{ type: 'spring', stiffness: 300 }}
//   >
//   {item.icon && (
//  <div className="flex items-center justify-center flex-none rounded-lg size-10 bg-indigo-50 group-hover:bg-indigo-100 mr-3">
//  <item.icon aria-hidden="true" className="text-indigo-600 size-5" />
//  </div>
//   )}
//   <div className="flex-auto">
//  <a href={item.href} className="block font-semibold text-gray-900">
//  {item.name}
//  <span className="absolute inset-0" />
//  </a>
//  <p className="mt-0.5 text-gray-600">{item.description}</p>
//   </div>
//   </motion.li>
//   ))}
//   </ul>
//   </div>
//   </motion.div>
//</PopoverPanel>
//</motion.div>
//)}
//</AnimatePresence>
//</>
//)}
//</Popover>


// </PopoverGroup>

// {/* Login/Get Started button */}
// <div className="hidden lg:flex lg:flex-1 lg:justify-end">
//<motion.a
//href="/login"
//className="relative text-sm font-semibold text-white bg-indigo-600 px-3 py-1.5 rounded-md hover:bg-indigo-700 transition-colors duration-300 group" // Reduced px and py
//whileHover={{ scale: 1.05 }}
//whileTap={{ scale: 0.95 }}
//>
//<span className="relative z-10 flex items-center gap-1">
//Login
//<motion.span
//aria-hidden="true"
//animate={{ x: [0, 3, 0] }}
//transition={{ repeat: Infinity, duration: 1.5 }}
//>
//→
//</motion.span>
//</span>
//</motion.a>
// </div>
// </nav>
// </div>

// {/* Mobile menu with animations */}
// <AnimatePresence>
// {mobileMenuOpen && (
// <Dialog
//open={mobileMenuOpen}
//onClose={setMobileMenuOpen}
//className="lg:hidden"
//as={motion.div}
// >
//<motion.div
//className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
//initial={{ opacity: 0 }}
//animate={{ opacity: 1 }}
//exit={{ opacity: 0 }}
///>

//<motion.div
//className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
//initial={{ x: '100%' }}
//animate={{ x: 0 }}
//exit={{ x: '100%' }}
//transition={{ type: 'spring', damping: 30 }}
//>
//<div className="flex items-center justify-between p-4"> {/* Reduced p from p-6 to p-4 */}
//<motion.a
//href="#"
//className="-m-1.5 p-1.5"
//whileHover={{ scale: 1.05 }}
//whileTap={{ scale: 0.95 }}
//>
//<span className="sr-only">Your Company</span>
//<img
//alt="Company Logo"
//src={logo}
//className="w-auto h-6" // Reduced logo height for mobile
///>
//</motion.a>
//<motion.button
//type="button"
//onClick={() => setMobileMenuOpen(false)}
//className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:text-indigo-600"
//whileHover={{ rotate: 90, scale: 1.1 }}
//whileTap={{ scale: 0.9 }}
//>
//<span className="sr-only">Close menu</span>
//<XMarkIcon aria-hidden="true" className="size-6" />
//</motion.button>
//</div>
//<motion.div
//className="px-6 pt-2 pb-6"
//initial={{ opacity: 0 }}
//animate={{ opacity: 1 }}
//transition={{ delay: 0.2 }}
//>
//<div className="-my-6 divide-y divide-gray-500/10">
//<div className="py-0 space-y-2"> {/* Reduced py from py-6 to py-4 */}
//{/* Mobile Home Link */}
//<motion.a
//href="/"
//className="block px-3 py-2 -mx-3 text-base font-semibold text-gray-900 rounded-lg hover:bg-gray-50"
//whileHover={{ x: 5 }}
//>
//Home
//</motion.a>

//{/* Mobile Services Disclosure */}
//<Disclosure as="div" className="-mx-3">
//{({ open }) => (
//<>
//   <motion.div whileHover={{ x: 5 }}>
//   <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold text-gray-900 hover:bg-gray-50">
//   <span>Services</span>
//   <motion.div
//   animate={{ rotate: open ? 180 : 0 }}
//   >
//   <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
//   </motion.div>
//   </DisclosureButton>
//   </motion.div>
//   <DisclosurePanel className="mt-2 space-y-2">
//   {services.map((item, index) => (
//   <motion.div
//   key={item.name}
//   initial={{ opacity: 0, x: -10 }}
//   animate={{ opacity: 1, x: 0 }}
//   transition={{ delay: 0.05 * index }}
//   >
//   <DisclosureButton
//   as="a"
//   href={item.href}
//   className="block py-2 pl-6 pr-3 text-sm font-semibold text-gray-900 rounded-lg hover:bg-gray-50"
//   >
//   {item.name}
// </DisclosureButton>
//   </motion.div>
//   ))}
//   </DisclosurePanel>
//</>
//)}
//</Disclosure>

//{/* Other Mobile Links */}

//</div>
//{/* <div
//// className="py-4"
//> Reduced py from py-6 to py-4 */}
//<div className="p-0">

//<motion.a
//href="/login"
//className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-indigo-600 hover:bg-gray-50"
//whileHover={{ scale: 1.02 }}
//whileTap={{ scale: 0.98 }}
//>
//Login
//</motion.a>
//</div>
//</div>
//</motion.div>
//</motion.div>
// </Dialog>
// )}
// </AnimatePresence>
// </header>
// );
// };

// export default Header;

// import logo from '../images/logoyoun.png';
// import { Popover, Transition } from '@headlessui/react'
// import { Fragment, useState } from 'react'
// import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
// import { motion } from 'framer-motion'

// const services = [
// { name: 'SAP Analytics', description: 'Business intelligence tools', href: '#' },
// { name: 'SAP ERP', description: 'Enterprise resource planning', href: '#' },
// { name: 'SAP HANA', description: 'In-memory database platform', href: '#' }
// ]

// const dynamicServices = [
// { name: 'AI Automation', description: 'Smart workflow tools', href: '#' },
// { name: 'Realtime Data', description: 'Live data streaming', href: '#' },
// { name: 'Predictive Analytics', description: 'AI-driven forecasting', href: '#' }
// ]

// const sscpServices = [
// { name: 'Cyber Security', description: 'Protect your data', href: '#' },
// { name: 'Secure Cloud', description: 'Encrypted cloud storage', href: '#' },
// { name: 'Compliance', description: 'Regulatory compliance solutions', href: '#' }
// ]

// const NavDropdown = ({ title, items }) => (
// <Popover className="relative">
// {({ open }) => (
// <>
// <Popover.Button className="group flex items-center outline-none">
// <motion.span
// className="text-sm font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-300"
// whileHover={{
//    scale: 1.05,
//    transition: { duration: 0.2 }
// }}
// >
// {title}
// </motion.span>
// <motion.div
// animate={{ rotate: open ? 180 : 0 }}
// transition={{ duration: 0.2 }}
// >
// <ChevronDownIcon className="ml-1 h-5 w-5 text-gray-500 group-hover:text-indigo-600 transition-colors duration-300" />
// </motion.div>
// </Popover.Button>

// <Transition
// as={Fragment}
// enter="transition ease-out duration-200"
// enterFrom="opacity-0 translate-y-1"
// enterTo="opacity-100 translate-y-0"
// leave="transition ease-in duration-150"
// leaveFrom="opacity-100 translate-y-0"
// leaveTo="opacity-0 translate-y-1"
// >
// <Popover.Panel className="absolute z-50 left-1/2 mt-3 w-72 -translate-x-1/2 transform">
// <motion.div
//    className="rounded-lg shadow-lg ring-1 ring-black/5 overflow-hidden"
//    initial={{ opacity: 0, y: 10 }}
//    animate={{ opacity: 1, y: 0 }}
//    exit={{ opacity: 0, y: 10 }}
// >
//    <div className="bg-white p-2">
//    {items.map((item, index) => (
//    <motion.div
//    key={item.name}
//    whileHover={{ scale: 1.02 }}
//    whileTap={{ scale: 0.98 }}
//    initial={{ opacity: 0, x: -10 }}
//    animate={{ opacity: 1, x: 0 }}
//    transition={{ delay: index * 0.05 }}
//    >
//    <a
//    href={item.href}
//    className="block px-4 py-3 rounded-lg hover:bg-indigo-50 transition-colors duration-200"
//    >
//    <p className="text-sm font-medium text-indigo-600">{item.name}</p>
//    <p className="mt-1 text-xs text-gray-500">{item.description}</p>
//    </a>
//    </motion.div>
//    ))}
//    </div>
// </motion.div>
// </Popover.Panel>
// </Transition>
// </>
// )}
// </Popover>
// )

// const Header = () => {
// const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

// return (
// <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
// <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
// <nav className="flex items-center justify-between h-16">
// {/* Logo */}
// {/* <motion.div
// className="flex-shrink-0"
// initial={{ opacity: 0, x: -20 }}
// animate={{ opacity: 1, x: 0 }}
// transition={{ duration: 0.5 }}
// >
// <a href="#" className="flex items-center">
//    <img
//    className="h-8 w-auto"
//    src={logo}
//    alt="Company Logo"
//    />
// </a>
// </motion.div> */}
// <motion.div
// className="flex-shrink-0"
// initial={{ opacity: 0, x: -20 }}
// animate={{ opacity: 1, x: 0 }}
// transition={{ duration: 0.5 }}
// >
// <a href="#" className="flex items-center">
//    <img
//    className="h-10 w-auto transition-transform duration-300 hover:scale-105"
//    src={logo}
//    alt="Company Logo"
//    />
// </a>
// </motion.div>

// {/* Desktop Navigation */}
// <div className="hidden md:flex items-center space-x-8">
// <motion.a
//    href="/"
//    className="text-sm font-semibold text-gray-700 hover:text-indigo-600 transition-colors duration-300"
//    whileHover={{ scale: 1.05 }}
// >
//    Home
// </motion.a>

// <NavDropdown title="Services" items={services} />
// <NavDropdown title="Dynamic" items={dynamicServices} />
// <NavDropdown title="Security" items={sscpServices} />



// <motion.div
//    whileHover={{ scale: 1.05 }}
//    whileTap={{ scale: 0.95 }}
//    className="relative"
// >
//    <a
//    href="/login"
//    className="flex items-center justify-center px-4 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
//    >
//    <span className="text-sm font-semibold">Login</span>
//    <motion.span
//    className="ml-1"
//    animate={{ x: [0, 4, 0] }}
//    transition={{ repeat: Infinity, duration: 2 }}
//    >
//    →
//    </motion.span>
//    </a>
//    <motion.div
//    className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-600 to-indigo-500 opacity-0 hover:opacity-20 transition-opacity duration-300 pointer-events-none"
//    />
// </motion.div>
// </div>

// {/* Mobile menu button */}
// <div className="flex md:hidden">
// <motion.button
//    type="button"
//    onClick={() => setMobileMenuOpen(true)}
//    className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none"
//    whileHover={{ scale: 1.1 }}
//    whileTap={{ scale: 0.9 }}
// >
//    <span className="sr-only">Open main menu</span>
//    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
// </motion.button>
// </div>
// </nav>
// </div>

// {/* Mobile Navigation */}
// <Transition
// show={mobileMenuOpen}
// as={Fragment}
// enter="transition ease-out duration-100"
// enterFrom="transform opacity-0 scale-95"
// enterTo="transform opacity-100 scale-100"
// leave="transition ease-in duration-75"
// leaveFrom="transform opacity-100 scale-100"
// leaveTo="transform opacity-0 scale-95"
// >
// <div className="md:hidden fixed inset-0 z-50 bg-white/95 backdrop-blur-sm">
// <div className="flex items-center justify-between px-4 pt-4">
// <a href="#" className="flex items-center">
//    <img
//    className="h-8 w-auto"
//    src="https://placehold.co/160x80?text=Company+Logo"
//    alt="Company Logo"
//    />
// </a>
// <div className="flex">
//    <motion.button
//    type="button"
//    onClick={() => setMobileMenuOpen(false)}
//    className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none"
//    whileHover={{ rotate: 90 }}
//    whileTap={{ scale: 0.9 }}
//    >
//    <span className="sr-only">Close menu</span>
//    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//    </motion.button>
// </div>
// </div>
// <motion.a
// href="/"
// className="block px-4 py-3 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors duration-200"
// whileHover={{ x: 5 }}
// >
// Home
// </motion.a>

// <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
// <div className="space-y-4 px-4 py-6">
//    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Services</h3>
//    {services.map((item) => (
//    <motion.a
//    key={item.name}
//    href={item.href}
//    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors duration-200"
//    whileHover={{ x: 5 }}
//    >
//    {item.name}
//    </motion.a>
//    ))}
// </div>

// <div className="space-y-4 px-4 py-6">
//    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Dynamic Services</h3>
//    {dynamicServices.map((item) => (
//    <motion.a
//    key={item.name}
//    href={item.href}
//    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors duration-200"
//    whileHover={{ x: 5 }}
//    >
//    {item.name}
//    </motion.a>
//    ))}
// </div>

// <div className="space-y-4 px-4 py-6">
//    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Security</h3>
//    {sscpServices.map((item) => (
//    <motion.a
//    key={item.name}
//    href={item.href}
//    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors duration-200"
//    whileHover={{ x: 5 }}
//    >
//    {item.name}
//    </motion.a>
//    ))}
// </div>



// <motion.div
//    className="px-4 pt-4"
//    whileHover={{ scale: 1.02 }}
//    whileTap={{ scale: 0.98 }}
// >
//    <a
//    href="/login"
//    className="flex items-center justify-center w-full px-4 py-3 rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
//    >
//    <span className="text-sm font-semibold">Login</span>
//    <motion.span
//    className="ml-1"
//    animate={{ x: [0, 4, 0] }}
//    transition={{ repeat: Infinity, duration: 2 }}
//    >
//    →
//    </motion.span>
//    </a>
// </motion.div>
// </div>
// </div>
// </Transition>
// </header>
// )
// }

// export default Header


// top of file
import logo from '../images/ylog.png';
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
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

// Dropdown data
const services = [
    { name: 'SAP Api Services', description: 'Api Services checking ', href: '/sapservices', icon: null },
    { name: 'SAP Service ', description: 'Fast service 2', href: '#', icon: null },
];

const dynamicServices = [
    { name: 'Dynamic 1', description: 'Dynamic desc 1', href: '#', icon: null },
    { name: 'Dynamic 2', description: 'Dynamic desc 2', href: '#', icon: null },
];

const sscpServices = [
    { name: 'SSCP 1', description: 'SSCP desc 1', href: '#', icon: null },
    { name: 'SSCP 2', description: 'SSCP desc 2', href: '#', icon: null },
];

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);

    const renderDropdown = (label, data) => (
        <Popover className="relative">
            {({ open }) => (
                <>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <PopoverButton
                            className="flex items-center text-sm font-semibold text-gray-700 hover:text-indigo-600 gap-x-1"
                            onMouseEnter={() => setHoveredItem(label)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            {label}
                            <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
                                <ChevronDownIcon className="size-5 text-gray-400" />
                            </motion.div>
                            {hoveredItem === label && (
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
                                <PopoverPanel className="absolute z-10 w-screen max-w-md mt-3 -translate-x-1/2 left-1/2" static>
                                    <motion.div className="overflow-hidden bg-white shadow-xl rounded-xl ring-1 ring-gray-900/5">
                                        <div className="p-4">
                                            <ul className="space-y-3">
                                                {data.map((item) => (
                                                    <motion.li
                                                        key={item.name}
                                                        className="flex items-start p-3 text-sm rounded-lg hover:bg-gray-50 transition"
                                                        whileHover={{ x: 5 }}
                                                    >
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
    );

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between py-2">
                    <a href="/" className="flex justify-start lg:flex-1">
                        <img src={logo} alt="Logo" className="w-[80px] h-[40px]" />
                    </a>

                    <div className="flex lg:hidden">
                        <button onClick={() => setMobileMenuOpen(true)} className="p-2 text-gray-700">
                            <Bars3Icon className="size-6" />
                        </button>
                    </div>

                    {/* Desktop menu */}
                    <PopoverGroup className="hidden lg:flex lg:gap-x-6">
                        <a href="/" className="text-sm font-semibold text-gray-700 hover:text-indigo-600">
                            Home
                        </a>
                        {renderDropdown("Services", services)}
                        {renderDropdown("Dynamic", dynamicServices)}
                        {renderDropdown("SSCP", sscpServices)}
                    </PopoverGroup>

                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a
                            href="/login"
                            className="text-sm font-semibold text-white bg-indigo-600 px-3 py-1.5 rounded-md hover:bg-indigo-700"
                        >
                            Login
                        </a>
                    </div>
                </nav>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <Dialog as={motion.div} open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                        <motion.div
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />
                        <motion.div
                            className="fixed right-0 inset-y-0 w-full sm:max-w-sm bg-white z-50 p-4"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                        >
                            <div className="flex justify-between items-center mb-4">
                                <img src={logo} alt="Logo" className="h-6" />
                                <button onClick={() => setMobileMenuOpen(false)}>
                                    <XMarkIcon className="size-6 text-gray-700" />
                                </button>
                            </div>
                            <div className="space-y-2">
                                <a href="/" className="block px-3 py-2 text-base font-semibold text-gray-900 rounded-lg hover:bg-gray-50">
                                    Home
                                </a>

                                {/* Mobile Dropdowns */}
                                {[['Services', services], ['Dynamic', dynamicServices], ['SSCP', sscpServices]].map(
                                    ([label, data]) => (
                                        <Disclosure as="div" key={label}>
                                            {({ open }) => (
                                                <>
                                                    <DisclosureButton className="w-full flex justify-between px-3 py-2 text-base font-semibold hover:bg-gray-50 rounded-lg">
                                                        {label}
                                                        <ChevronDownIcon className={`size-5 ${open ? 'rotate-180' : ''}`} />
                                                    </DisclosureButton>
                                                    <DisclosurePanel className="space-y-1 pl-6">
                                                        {data.map((item) => (
                                                            <a
                                                                key={item.name}
                                                                href={item.href}
                                                                className="block py-1 text-sm text-gray-700 hover:text-indigo-600"
                                                            >
                                                                {item.name}
                                                            </a>
                                                        ))}
                                                    </DisclosurePanel>
                                                </>
                                            )}
                                        </Disclosure>
                                    )
                                )}
                                <a
                                    href="/login"
                                    className="block px-3 py-2 text-base font-semibold text-indigo-600 hover:bg-gray-50"
                                >
                                    Login
                                </a>
                            </div>
                        </motion.div>
                    </Dialog>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;


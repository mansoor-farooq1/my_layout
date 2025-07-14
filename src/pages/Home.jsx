// import Layout from '../component/Layout';

// const HomePage = () => {


//     return (

//         <Layout>
//             <div className="min-h-screen bg-gray-50">
//                 {/* Navbar */}


//                 {/* Hero Section */}
//                 <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
//                     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                         <div className="text-center">
//                             <h1 className="text-4xl sm:text-5xl font-bold mb-6">
//                                 Build Your Dream Website With Us
//                             </h1>
//                             <p className="text-xl mb-8 max-w-2xl mx-auto">
//                                 Professional web solutions tailored to your business needs. Fast,
//                                 reliable, and scalable.
//                             </p>
//                             <div className="space-x-4">
//                                 <button className="bg-white hover:bg-gray-100 text-blue-600 px-6 py-3 rounded-md font-medium transition">
//                                     Get Started
//                                 </button>
//                                 <button className="border-2 border-white hover:bg-white hover:text-blue-600 text-white px-6 py-3 rounded-md font-medium transition">
//                                     Learn More
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Features Section */}
//                 <div className="py-16 bg-white">
//                     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                         <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
//                             Our Core Features
//                         </h2>
//                         <div className="grid md:grid-cols-3 gap-8">
//                             {/* Feature 1 */}
//                             <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition">
//                                 <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mb-4">
//                                     <svg
//                                         className="h-6 w-6"
//                                         fill="none"
//                                         stroke="currentColor"
//                                         viewBox="0 0 24 24"
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth="2"
//                                             d="M13 10V3L4 14h7v7l9-11h-7z"
//                                         />
//                                     </svg>
//                                 </div>
//                                 <h3 className="text-lg font-medium text-gray-800 mb-2">
//                                     Lightning Fast
//                                 </h3>
//                                 <p className="text-gray-600">
//                                     Optimized for performance with blazing fast load times and
//                                     smooth animations.
//                                 </p>
//                             </div>

//                             {/* Feature 2 */}
//                             <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition">
//                                 <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mb-4">
//                                     <svg
//                                         className="h-6 w-6"
//                                         fill="none"
//                                         stroke="currentColor"
//                                         viewBox="0 0 24 24"
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth="2"
//                                             d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
//                                         />
//                                     </svg>
//                                 </div>
//                                 <h3 className="text-lg font-medium text-gray-800 mb-2">
//                                     Secure Platform
//                                 </h3>
//                                 <p className="text-gray-600">
//                                     Enterprise-grade security with regular updates and backups.
//                                 </p>
//                             </div>

//                             {/* Feature 3 */}
//                             <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition">
//                                 <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mb-4">
//                                     <svg
//                                         className="h-6 w-6"
//                                         fill="none"
//                                         stroke="currentColor"
//                                         viewBox="0 0 24 24"
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth="2"
//                                             d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
//                                         />
//                                     </svg>
//                                 </div>
//                                 <h3 className="text-lg font-medium text-gray-800 mb-2">
//                                     Cloud Hosting
//                                 </h3>
//                                 <p className="text-gray-600">
//                                     Scalable cloud infrastructure to handle any traffic spikes.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Footer */}

//             </div>
//         </Layout>
//     );
// };

// export default HomePage;





import Layout from '../component/Layout';
import RecentActivities from '../component/RecentActivities';

const HomePage = () => {
    return (
        <Layout>
            {/* <div className="min-h-screen bg-gray-50"> */}
            <div className="min-h-screen bg-gray-50 pt-20"> {/* Added pt-20 to add padding top */}
                {/* Navbar */}
                <RecentActivities />

                {/* Footer */}
            </div>
        </Layout>
    );
};

export default HomePage;










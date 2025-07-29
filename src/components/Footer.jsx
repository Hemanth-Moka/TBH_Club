import React from 'react';

const Footer = () => {
    return (
        <section className="py-10 bg-gray-650 sm:pt-16 lg:pt-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
                    {/* Logo and description */}
                    <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                        <img
                            className="w-auto h-15"
                            src="/TBH_logo.png"
                            alt="Blockchain Hub"
                        />
                        {/* <h2 className="mt-4 text-2xl font-bold text-gray-900">Blockchain Hub</h2> */}
                        <p className="text-base leading-relaxed text-gray-600 mt-7">
                            Blockchain Hub is a decentralized tech ecosystem focused on delivering secure, scalable, and innovative Web3 solutions.
                        </p>

                        <ul className="flex items-center space-x-3 mt-9">
                            {/* Social icons */}
                            {['twitter', 'facebook', 'instagram', 'github'].map((platform, i) => (
                                <li key={i}>
                                    <a
                                        href="#"
                                        className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                                        aria-label={platform}
                                    >
                                        <svg
                                            className="w-4 h-4"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M12 0C5.37 0 0 5.373 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577v-2.234c-3.338.725-4.033-1.61-4.033-1.61-.547-1.388-1.335-1.756-1.335-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.245 1.838 1.245 1.07 1.835 2.808 1.305 3.495.997.108-.775.42-1.305.763-1.605-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.135-.305-.54-1.53.105-3.185 0 0 1.005-.322 3.3 1.23a11.48 11.48 0 0 1 3-.405c1.02.005 2.045.14 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.655.24 2.88.12 3.185.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.1.81 2.22v3.285c0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Company</p>
                        <ul className="mt-6 space-y-4">
                            <li><a href="#" className="text-base text-black transition hover:text-blue-600">About Us</a></li>
                            <li><a href="#" className="text-base text-black transition hover:text-blue-600">Our Mission</a></li>
                            <li><a href="#" className="text-base text-black transition hover:text-blue-600">Ecosystem</a></li>
                            <li><a href="#" className="text-base text-black transition hover:text-blue-600">Careers</a></li>
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Resources</p>
                        <ul className="mt-6 space-y-4">
                            <li><a href="#" className="text-base text-black transition hover:text-blue-600">Whitepaper</a></li>
                            <li><a href="#" className="text-base text-black transition hover:text-blue-600">Developer Docs</a></li>
                            <li><a href="#" className="text-base text-black transition hover:text-blue-600">Tokenomics</a></li>
                            <li><a href="#" className="text-base text-black transition hover:text-blue-600">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Subscribe</p>
                        <form action="#" method="POST" className="mt-6">
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="block w-full p-4 text-black placeholder-gray-500 transition bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
                                />
                            </div>
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition bg-blue-600 rounded-md hover:bg-blue-700"
                            >
                                Join Newsletter
                            </button>
                        </form>
                    </div>
                </div>

                <hr className="mt-16 mb-10 border-gray-200" />
            © <p className="text-sm text-center text-gray-600">
                     {new Date().getFullYear()} Design and Developed By Hemanth Moka | © Blockchain Hub. All rights reserved.
                </p>
            </div>
        </section>
    );
};

export default Footer;

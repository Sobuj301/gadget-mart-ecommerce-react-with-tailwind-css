
const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Gadget Mart
                        </h2>
                        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            Your trusted destination for the latest gadgets, electronics,
                            and tech accessories at affordable prices.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {["Home", "Products", "Cart", "Checkout"].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            Customer Service
                        </h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                            <li>Contact Us</li>
                            <li>FAQs</li>
                            <li>Shipping Policy</li>
                            <li>Return Policy</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            Contact
                        </h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                            <li>support@gadgetmart.com</li>
                            <li>+880 1234-567890</li>
                            <li>Dhaka, Bangladesh</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
                        © {new Date().getFullYear()} Gadget Mart. All Rights Reserved.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        <a
                            href="#"
                            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

const Contact = () => {
  return (
    <div className="py-16 px-4 bg-white dark:bg-[#0f172a] transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">Get In Touch</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">We'd love to hear from you. Please reach out to us for any queries.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-[#1e293b] p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Contact Details</h3>
              <p className="text-gray-600 dark:text-gray-300">Email: support@gadgetmart.com</p>
              <p className="text-gray-600 dark:text-gray-300">Phone: +880 1234-567890</p>
              <p className="text-gray-600 dark:text-gray-300">Location: Dhaka, Bangladesh</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-[#22C55E] outline-none"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-[#22C55E] outline-none"
            />
            <textarea 
              rows="4" 
              placeholder="Your Message" 
              className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-[#22C55E] outline-none"
            ></textarea>
            <button className="w-full py-4 bg-[#22C55E] text-white font-bold rounded-xl hover:bg-[#16A34A] transition-all">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
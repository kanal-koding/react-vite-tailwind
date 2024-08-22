const Contact = () => {
    return (
      <section id="contact" className="dark:bg-gray-200 dark:text-gray-900 bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Contact Us</h2>
            <p className="text-base lg:text-lg text-gray-400 dark:text-gray-600">
              We love to hear from you! Please fill out the form below to get in touch.
            </p>
          </div>
  
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Name"
                />
              </div>
  
              <div>
                <label className="block text-sm font-medium text-gray-300" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Email"
                />
              </div>
  
              <div>
                <label className="block text-sm font-medium text-gray-300" htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="mt-1 block w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Subject"
                />
              </div>
  
              <div>
                <label className="block text-sm font-medium text-gray-300" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="mt-1 block w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Message"
                ></textarea>
              </div>
  
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-block px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
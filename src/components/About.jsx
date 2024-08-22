const About = () => {
    return (
      // <section className="bg-white text-gray-900 py-16">
      <section id="about" className="dark:bg-gray-200 dark:text-gray-900 bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">About Us</h2>
            <p className="text-base lg:text-lg text-gray-700 dark:text-gray-600">
              We are a team of passionate professionals dedicated to delivering top-notch solutions that drive success and innovation.
            </p>
          </div>
  
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Core Values or Points */}
            <div className="text-center p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-2xl text-gray-700 font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-600">
                To empower businesses and individuals by providing cutting-edge technology solutions that meet their unique needs.
              </p>
            </div>
  
            <div className="text-center p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-2xl text-gray-700 font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-700 dark:text-gray-600">
                To be a leader in the industry, known for innovation, quality, and customer satisfaction.
              </p>
            </div>
  
            <div className="text-center p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-2xl text-gray-700 font-semibold mb-4">Our Values</h3>
              <p className="text-gray-700 dark:text-gray-600">
                Integrity, Excellence, and Collaboration are at the core of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
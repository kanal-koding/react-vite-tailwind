const Hero = () => {
    return (
      <section className="dark:bg-gray-200 dark:text-gray-900 bg-gray-900 text-white">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-20 px-6 lg:px-12">
          {/* Hero Text */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Welcome to Our Company
            </h1>
            <p className="dark:text-gray-600 text-lg lg:text-xl mb-8">
              We provide the best solutions for your business needs. Our team of experts is here to help you succeed.
            </p>
            <button className="bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300">
              Get Started
            </button>
          </div>
  
          {/* Hero Image */}
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Hero Image"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
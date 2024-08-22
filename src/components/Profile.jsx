const Profile = () => {
    return (
      <section id="profile" className="bg-gray-900 dark:bg-gray-200 text-white dark:text-gray-900 py-16">
        <div className="container mx-auto flex flex-col items-center lg:flex-row lg:items-center lg:justify-between px-6 lg:px-12">
          {/* Profile Image */}
          <div className="lg:w-1/3 text-center mb-6 lg:mb-0">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-40 h-40 rounded-full mx-auto lg:mx-0 border-4 border-blue-500 shadow-lg"
            />
          </div>
  
          {/* Profile Info */}
          <div className="lg:w-2/3 text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">I Komang Darsa</h2>
            <p className="text-xl text-blue-500 mb-4">Software Engineer</p>
            <p className="dark:text-gray-600 text-lg text-gray-300">
              Passionate about developing innovative software solutions that enhance the way people live and work. Experienced in full-stack development and always eager to learn and adopt new technologies.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Profile;
const Projects = () => {
    const projectList = [
      {
        title: 'Project One',
        description: 'A brief description of what this project is about.',
        image: 'https://via.placeholder.com/300x200',
      },
      {
        title: 'Project Two',
        description: 'A brief description of what this project is about.',
        image: 'https://via.placeholder.com/300x200',
      },
      {
        title: 'Project Three',
        description: 'A brief description of what this project is about.',
        image: 'https://via.placeholder.com/300x200',
      },
      {
        title: 'Project Four',
        description: 'A brief description of what this project is about.',
        image: 'https://via.placeholder.com/300x200',
      },
      {
        title: 'Project Five',
        description: 'A brief description of what this project is about.',
        image: 'https://via.placeholder.com/300x200',
      },
      {
        title: 'Project Six',
        description: 'A brief description of what this project is about.',
        image: 'https://via.placeholder.com/300x200',
      },
    ];
  
    return (
      // ini warna background agak terang
      // <section className="bg-gray-100 text-gray-900 py-16">

      // ini warna background agak gelap
      <section id="projects" className="dark:bg-gray-200 dark:text-gray-900 bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Projects</h2>
            <p className="teaxt-base lg:text-lg dark:text-gray-600 text-gray-400">
              Here are some of the projects we have worked on recently.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectList.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-700">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
const Products = () => {
    const productList = [
      {
        title: 'Product One',
        description: 'This is a short description of Product One.',
        image: 'https://via.placeholder.com/300x200',
        price: '$49.99',
      },
      {
        title: 'Product Two',
        description: 'This is a short description of Product Two.',
        image: 'https://via.placeholder.com/300x200',
        price: '$59.99',
      },
      {
        title: 'Product Three',
        description: 'This is a short description of Product Three.',
        image: 'https://via.placeholder.com/300x200',
        price: '$39.99',
      },
      {
        title: 'Product Four',
        description: 'This is a short description of Product Four.',
        image: 'https://via.placeholder.com/300x200',
        price: '$29.99',
      },
    ];
  
    return (
      // <section className="bg-white text-gray-900 py-16">
      <section id="products" className="dark:bg-gray-200 dark:text-gray-900 bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center font-bold mb-6">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Products</h2>
            <p className="dark:text-gray-600 text-base lg:text-lg text-gray-400">
              Explore our range of high-quality products that meet your needs.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productList.map((product, index) => (
              <div key={index} className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
                <img src={product.image} alt={product.title} className="w-full h-48 object-cover"/>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  <p className="text-xl font-bold text-blue-500">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Products;
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="bg-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-10">
            <div>
              <h2 className="text-6xl font-extrabold">Let &apos s Explore Unique Clothes.</h2>
              <p className="mt-4">Live for Influential and Innovative Fashion!</p>
              <button className="mt-6 px-6 py-2 bg-black text-white transition-transform duration-300 ease-in-out transform hover:scale-105">
                Shop Now
              </button>
            </div>
            <Image
              src="/images/hero-image.jpg"
              alt="Fashion model"
              width={500}
              height={500}
              className="w-1/2 transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
        </div>
      </section>
      <div>
        <Image src="/images/Brands.png"alt="Brands Name" />
      </div>
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold mb-6">New Arrivals</h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white p-4 shadow-md">
              <Image 
                src="/images/hoodie.jpg" 
                alt="Hoodie" 
                width={300} 
                height={300} 
                className="transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
              <h4 className="text-xl font-bold mt-4">Hoodies & Sweatshirts</h4>
              <p>Explore Now!</p>
            </div>
            <div className="bg-white p-4 shadow-md">
              <Image 
                src="/images/coats.jpg" 
                alt="Coat" 
                width={300} 
                height={300} 
                className="transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
              <h4 className="text-xl font-bold mt-4">Coats & Parkas</h4>
              <p>Explore Now!</p>
            </div>
            <div className="bg-white p-4 shadow-md">
              <Image 
                src="/images/tees.jpg" 
                alt="Tee" 
                width={300} 
                height={300} 
                className="transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
              <h4 className="text-xl font-bold mt-4">Tees & T-Shirts</h4>
              <p>Explore Now!</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
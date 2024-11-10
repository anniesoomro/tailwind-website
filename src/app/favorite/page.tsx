import Image from "next/image";


export default function Favourites() {
  return (
    <>
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Favorites</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Favorite Item 1 */}
            <div className="bg-white p-4 shadow-md rounded-md">
              <Image
                src="/images/favorite-item1.jpg"
                alt="Favorite Item 1"
                width={300}
                height={300} 
                className="w-full h-auto rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
              <h4 className="text-lg sm:text-xl font-bold mt-4">Item 1</h4>
              <p className="mt-2 text-gray-600">Trending on Instagram</p>
            </div>

            {/* Favorite Item 2 */}
            <div className="bg-white p-4 shadow-md rounded-md">
              <Image
                src="/images/favorite-item2.jpg"
                alt="Favorite Item 2"
                width={300}
                height={300}
                className="w-full h-auto rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
              <h4 className="text-lg sm:text-xl font-bold mt-4">Item 2</h4>
              <p className="mt-2 text-gray-600">All under $40</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="py-10 bg-yellow-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4">Download App & Get the Voucher!</h3>
            <p className="text-lg mb-4">Sign up for our app and get exclusive deals and promotions.</p>
            <div className="flex justify-center md:justify-start space-x-4">
              <Image 
                src="/images/app-store.png" 
                alt="App Store" 
                width={128} 
                height={128}  
                className="w-28 sm:w-32 transition-transform duration-300 ease-in-out transform hover:scale-105" 
              />
              <Image 
                src="/images/google-play.png" 
                alt="Google Play" 
                width={128} 
                height={128}  
                className="w-28 sm:w-32 transition-transform duration-300 ease-in-out transform hover:scale-105" 
              />
            </div>
          </div>
          <div>
            <Image 
              src="/images/Mobile app.png" 
              alt="App Promo" 
              width={256} 
              height={256}  
              className="w-48 sm-w-64 transition-transform duration-300 ease-in-out transform hover:scale-105" 
            />
          </div>
        </div>
      </section>
    </>
  );
}
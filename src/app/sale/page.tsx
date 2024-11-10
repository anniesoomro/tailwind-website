import Image from "next/image";

export default function Sale() {
  return (
     
      <section className="bg-yellow-400 py-10">
        <div className="max-w-7xl mx-auto px-4  flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2">
            <Image src="/images/image 12.png" alt="image" width={500} height={500}
            className="w-full h-auto md:w-96" />
            </div>
            <div className="w-full md:w-1/2 md:pl-10 text-center md:text-left mt-6 md:mt-0">
          <h2 className="text-4xl sm:text-6xl font-extrabold">Payday Sale Now</h2>
          <p className="mt-4 text-base sm:text-lg">Spend a minimum of $50 to get 20% off your purchase.
             Offer valid from June 1st to June 10th.</p>
          <button className="mt-6 px-6 py-2 bg-black text-white transition-transform duration-300 ease-in-out transform hover:scale-105">
            Shop Now
          </button>
        </div>
        </div>
      </section>
    
  );
}
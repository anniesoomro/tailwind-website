export default function SignUp() {
  return (
    
      <section className="flex flex-col items-center justify-center h-screen bg-yellow-300">
        <div className="text-center py-10">
          <h2 className="text-3xl font-bold text-white">
            JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
          </h2>
          <p className="text-white mt-2">
            Type your email down below and be a part of the young wild generation
          </p>
        </div>

        <form className="flex flex-col items-center space-y-4">
          <input
            type="email"
            placeholder="Add your email here"
            className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-white text-yellow-500 font-semibold rounded-lg hover:bg-yellow-500 hover:text-white"
          >
            SEND
          </button>
        </form>
      </section>
    
  );
}
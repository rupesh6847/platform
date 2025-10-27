const Signin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-[#5B5B5B]">
      <div className="flex flex-col items-center space-y-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight ">Neura</h1>
          <p className="text-sm text-gray-500 -mt-1">By Revvknew Media</p>
        </div>

        <div className=" rounded-xl  border border-gray-200 p-8 w-[380px] text-center">
          <h2 className="text-lg font-semibold  mb-6">
            Please Sign In to Continue.
          </h2>

          <form className="flex flex-col space-y-5 text-left">
            <div>
              <label className="block text-xs font-semibold mb-1">
                USER NAME/EMAIL
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1">
                PASSWORD
              </label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="mt-3 w-full bg-[#5B5B5B] text-white py-2 rounded-full text-sm font-medium hover:bg-[#5B5B5B]/90 transition"
            >
              Sign in With Email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;

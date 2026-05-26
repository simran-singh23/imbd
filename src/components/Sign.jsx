import React from "react";

const Sign = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex justify-center px-5 py-10">
      
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16">
        
       
        <div>
          
         
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1 h-10 bg-yellow-400 rounded-full"></div>

            <h1 className="text-5xl font-bold text-black">
              Sign in
            </h1>
          </div>

       
          <button className="w-full bg-yellow-400 hover:bg-yellow-500 
          transition-all duration-300 py-5 rounded-full text-2xl font-semibold text-black">
            Create an account
          </button>

    
          <div className="flex items-center gap-5 my-10">
            <div className="flex-1 h-[1px] bg-gray-300"></div>

            <span className="text-gray-500 text-2xl">or</span>

            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          <button className="w-full bg-gray-200 hover:bg-gray-300 transition-all duration-300 py-5 rounded-full text-2xl font-semibold text-blue-700">
            Sign in to an existing account
          </button>

         
          <p className="text-gray-500 text-xl mt-10 leading-relaxed">
            By signing in, you agree to IMDb's{" "}
            <span className="text-blue-600 cursor-pointer">
              Conditions of Use
            </span>{" "}
            and{" "}
            <span className="text-blue-600 cursor-pointer">
              Privacy Notice.
            </span>
          </p>
        </div>


        <div>
          <h2 className="text-5xl font-bold text-black leading-tight">
            It's so much better when you sign in
          </h2>

          <div className="mt-10 space-y-8">
            
            <div>
              <h3 className="text-3xl font-bold text-black">
                Personalized recommendations
              </h3>

              <p className="text-gray-500 text-2xl mt-2">
                Titles tailored to your taste.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-black">
                Your Watchlist
              </h3>

              <p className="text-gray-500 text-2xl mt-2">
                Track your future views and get reminders.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-black">
                Your ratings
              </h3>

              <p className="text-gray-500 text-2xl mt-2">
                Rate and remember what you watch.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-black">
                Contribute to IMDb
              </h3>

              <p className="text-gray-500 text-2xl mt-2">
                Contribute cast, trivia, release dates, 
                and other details to help millions of fans discover and enjoy entertainment.
              </p>
            </div>
     
            <div>
              <h3 className="text-3xl font-bold text-black">
                Preferred services
              </h3>

              <p className="text-gray-500 text-2xl mt-2">
                Edit your preferred streaming services.
              </p>
            </div>

          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
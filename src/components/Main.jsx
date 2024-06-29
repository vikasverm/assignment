export default function Main() {
  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row">
      {/* Main Content */}
      <div className="w-full md:w-1/2 p-4 sm:p-6 lg:p-8">
        <h1 className="text-3xl  font-bold text-center md:textLeft mb-8">
          Hire Best Talent With <span className="text-sky-700">Skilltera</span>
        </h1>

        <div className="grid grid-cols-1 pl-12 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Card 1 */}

          <div className="bg-white mt-12 shadow-md shadow-blue-300 rounded-lg p-4 h-80  w-64">
            <div className="flex items-center">
              <img
                className="w-24 h-24 rounded-full"
                src="https://via.placeholder.com/150"
                alt="Profile"
              />
            </div>
            <div className="mt-4">
              <div className="">
                <div className=" pl-6 pr-4 text-md border rounded-full shadow-md border-gray-100 p-1 inline-block">
                  UI/UX Designer <span className="text-blue-500">★★★★</span>
                </div>
              </div>
              <div className="">
                <div className="text-md border rounded-full pl-8 shadow-md border-gray-100 p-1 inline-block">
                  <span className="text-blue-500">★★★ </span>Frontend Developer
                </div>
              </div>
            </div>
            <div className="mt-14 text-center text-gray-500 text-sm">
              Candidates with <br />{" "}
              <span className="text-blue-500 font-semibold">
                Self Skills rating
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md shadow-blue-300 rounded-lg p-6 h-80  w-64">
            <div className="flex items-center mb-4">
              <img
                className="w-10 h-10 rounded-full"
                src="https://via.placeholder.com/50"
                alt="Recommender"
              />
              <div className="ml-3">
                <div className="font-semibold text-sm">Recommender</div>
              </div>
            </div>
            <div className="flex justify-center mb-4">
              <img
                className="w-16 h-16 rounded-full"
                src="https://via.placeholder.com/100"
                alt="Candidate"
              />
            </div>
            <div className="text-center font-semibold mb-4">Candidate</div>
            <div className="">
              <div className="flex">
                <div className="  text-sm border rounded-full p-1 shadow-md border-gray-100  inline-block">
                  React Js <span className="text-yellow-500">★★★</span>
                </div>
                <div className="  text-sm border rounded-full p-1 shadow-md border-gray-100  inline-block">
                  Python <span className="text-yellow-500">★★★★</span>
                </div>
              </div>

              <div className="flex">
                <div className="  text-sm border rounded-full p-1 shadow-md border-gray-100  inline-block">
                  Java <span className="text-yellow-500">★★★★</span>
                </div>
                <div className="  text-sm border rounded-full p-1 shadow-md border-gray-100  inline-block">
                  Figma <span className="text-yellow-500">★★★★</span>
                </div>
              </div>
            </div>
            <div className="mt-3 text-center text-gray-500 text-sm">
              <span className="text-blue-500 font-semibold">
                Recommendations
              </span>
              <br /> With Skills rating
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white mt-12 shadow-md shadow-blue-300 rounded-lg p-6 h-80  w-64">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div>
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://via.placeholder.com/50"
                    alt="Referral"
                  />
                  <span className="text-blue-500">Referrals</span>
                </div>
              </div>
              <div className="text-xl">{">>"} </div>
              <div className="flex items-center">
                <div>
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://via.placeholder.com/50"
                    alt="Referral"
                  />
                  <span className="">Candidate</span>
                </div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between items-center">
                <div className="flex">
                  <div className="  text-sm border rounded-full p-1 shadow-md border-gray-100  inline-block">
                    React Js <span className="text-yellow-500">★★★</span>
                  </div>
                  <div className="  text-sm border rounded-full p-1 shadow-md border-gray-100  inline-block">
                    Python <span className="text-yellow-500">★★★★</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between ">
                <div className="flex">
                  <div className="  text-sm border  rounded-full p-1 shadow-md border-gray-100  inline-block">
                    Java <span className="text-yellow-500">★★★</span>
                  </div>
                  <div className=" ml-8 text-sm border rounded-full p-1 shadow-md border-gray-100  inline-block">
                    Figma <span className="text-yellow-500">★★★★</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20 text-center text-gray-500 text-sm">
              Profiles from verified <br />{" "}
              <span className="text-blue-500 font-semibold">Referrals</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white  shadow-md shadow-blue-300 rounded-lg p-6 h-80  w-64">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://via.placeholder.com/50"
                    alt="Referral"
                  />
                  <span className="text-blue-500">Client</span>
                </div>
              </div>
              <div className="text-xl">➔</div>
              <div className="flex items-center">
                <div className="">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://via.placeholder.com/50"
                    alt="Referral"
                  />
                  <span className="text-sm">Candidate</span>
                </div>
              </div>
            </div>

            <div className="mt-40 text-center text-blue-500 font-semibold">
              communicate shortlist, interview and Hire
            </div>
          </div>
        </div>
      </div>

      {/* Login Section */}
      <div className="w-full   md:w-1/4 bgWhite p-6 shadowLg roundedLg mx-auto mt-8 md:mt-0">
        <div className="login-container">
          <div className="xl:mx-auto xl:w-full xl:maxW-sm 2xl:maxW-md">
            <div className=" flex">
              <button className="inline-flex w-full items-center border justify-center hover:text-white bg-sky-700 text-white   text-b px-3.5 py-2.5 font-semibold leading-7 textWhite hover:bg-sky-700/80">
                Login
              </button>
              <button className="inline-flex w-full items-center border hover:text-white justify-center  text-b px-3.5 py-2.5 font-semibold leading-7 textWhite hover:bg-sky-700/80">
                SignUp
              </button>
            </div>

            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full border-b border-gray-300 bg-transparent px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email address"
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full border-b border-gray-300 bg-transparent px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Company Name"
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full border-b border-gray-300 bg-transparent px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    className="relative inline-flex w-full items-center justify-center rounded-sm border border-gray-400 bgWhite px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                  >
                    Capcha{" "}
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-3 space-y-3">
              <button
                type="button"
                className="inline-flex w-full items-center justify-center rounded-sm bg-sky-700 text-white px-3.5 py-2.5 font-semibold leading-7 textWhite hover:bg-black/80"
              >
                Login
              </button>
              <div className="flex items-center justify-between">
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                </label>
                <a
                  href="#"
                  title=""
                  className="text-sm font-semibold text-black hover:underline"
                >
                  {" "}
                  Forgot password?{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

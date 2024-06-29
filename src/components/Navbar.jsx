
export default function Navbar() {
  return (
    <>
      <div className="relative w-full ">
        <div className="mx-auto flex flex-col sm:flex-row  items-center justify-between px-4 py-2 sm:px-6 lg:px-8 shadow-sm">
          <div className="inline-flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-800 sm:pl-12">Skilltera</span>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 sm:pr-12">
            <button
              type="button"
              className="border border-sky-700 px-6 sm:px-10 py-2 text-sm font-semibold text-sky-700 shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Rise and Shine
            </button>
            <button
              type="button"
              className="border border-sky-700  px-6 sm:px-10 py-2 text-sm font-semibold text-sky-700 shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Refer and Earn
            </button>
            <button
              type="button"
              className="border border-sky-700  px-6 sm:px-10 py-2 text-sm font-semibold text-white bg-sky-700 shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Hire Beat Talent
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

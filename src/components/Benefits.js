export default function Benefits() {
  return (
    <div className="flex flex-wrap overflow-hidden gap-y-4">
      <div className="order-1 my-1 px-4 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 flex items-center justify-around md:justify-end">
        <img src="/SVG/updated_resume.svg" alt="" className="w-96 px-4 lg:mr-20"/>
      </div>
      <div className="order-2 my-1 px-4 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 flex flex-col justify-center items-center md:items-start ">
        <div className="px-4 flex-col flex items-center">
          <span className="font-bold text-2xl">Real Industry Experience</span> in developing creative and robust software
        </div>
        <div className="text-base font-extralight pt-6 w-96 px-4">
          Work with engineers from our education team on plug-in projects created to help students and teachers study, organize, and create PDF documents more efficiently. Get feed back from our education team about how to design your program for the education market.
        </div>
      </div>

      <div
        className="order-3 md:order-4 my-1 px-4 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 flex items-center justify-around md:justify-start">
        <img src="/SVG/proud_coder.svg" alt="" className="w-96"/>
      </div>
      <div
        className="order-4 md:order-3 my-1 px-4 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 flex flex-col justify-center items-center md:items-end">
        <div className="lg:mr-20">
          <div className="px-4 flex-col flex items-center">
            <span className="font-bold text-2xl">Sharpen Your Coding Skills</span> while creating scalable and clean programs
          </div>
          <div className="text-base font-extralight pt-6 w-96 px-4">
            These projects are designed to challenge undergraduate and graduate student coders’ skills and teach them about developing application software, using third party APIs, and working with software development kits.
          </div>
        </div>

      </div>


      <div className="order-5 my-1 px-4 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 flex items-center justify-around md:justify-end">
        <img src="/SVG/our_solution.svg" alt="" className="w-96 px-4 lg:mr-20"/>
      </div>
      <div className="order-6 my-1 px-4 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 flex flex-col justify-center items-center md:items-start">
        <div className="px-4 flex-col flex items-center">
          <span className="font-bold text-2xl">Anticipate Problems & Find Resolutions</span> that keep your project on track for the next milestone
        </div>
        <div className="text-base font-extralight pt-6 w-96 px-4">
          Our engineers can assist when issues arise during your project. Work closely with our team to address bugs or come up with code that will keep the project moving forward.
        </div>
      </div>

      <div className="order-7 md:order-8 my-1 px-4 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 flex items-center justify-around md:justify-start">
        <img src="/SVG/product_iteration.svg" alt="" className="w-96 px-4"/>
      </div>
      <div className="order-8 md:order-7 my-1 px-4 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 flex flex-col justify-center items-center md:items-start lg:items-end">
        <div className="lg:mr-20">
          <div className="px-4 flex-col flex items-center">
            <span className="font-bold text-2xl">Build on Your Schedule</span> with the Programming Life Cycle
          </div>
          <div className="text-base font-extralight pt-6 w-96 px-4">
            Work on these challenges when it fits best into your schedule. Students can create their own development roadmap that works with their availability. Each project is designed for around 25 hours of development time, but you decide when that is.
          </div>
        </div>
      </div>
    </div>
  )
}
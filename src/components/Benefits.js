export default function Benefits() {
  return (
    <div className="w-full flex justify-center items-center pb-28 px-4 sm:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-10 xl:gap-y-32 w-1040px">
        <div className="flex justify-center items-center order-1">
          <img src="/SVG/experience.svg" alt="" className="w-64 sm:w-96"/>
        </div>

        <div className="order-2">
          <div className="flex flex-col text-center">
            <span className="font-bold text-3xl">Get Real Industry Experience</span>
            <span className="font-semibold">in developing creative and robust software</span>
          </div>
          <div className="text-base text-gray-500 pt-6 font-semibold leading-relaxed">
            Work with engineers from our education team on plug-in projects created to help students and teachers study, organize, and create PDF documents more efficiently. Get feed back from our education team about how to design your program for the education market.
          </div>
        </div>

        <div className="order-4 lg:order-3">
          <div className="flex flex-col text-center">
            <span className="font-bold text-3xl">Sharpen Your Coding Skills</span>
            <span className="font-semibold">while creating scalable and clean programs</span>
          </div>
          <div className="text-base text-gray-500 pt-6 font-semibold leading-relaxed">
            Work with engineers from our education team on plug-in projects created to help students and teachers study, organize, and create PDF documents more efficiently. Get feed back from our education team about how to design your program for the education market.
          </div>
        </div>

        <div className="flex justify-center items-center order-3 lg:order-4">
          <img src="/SVG/coding_skill.svg" alt="" className="w-64 sm:w-96"/>
        </div>

        <div className="flex justify-center items-center order-5">
          <img src="/SVG/resolutions.svg" alt="" className="w-64 sm:w-96"/>
        </div>

        <div className="order-6">
          <div className="flex flex-col text-center">
            <span className="font-bold text-3xl">Anticipate Problems & Find Resolutions</span>
            <span className="font-semibold">that keep your project on track for the next milestone</span>
          </div>
          <div className="text-base text-gray-500 pt-6 font-semibold leading-relaxed">
            Our engineers can assist when issues arise during your project. Work closely with our team to address bugs or come up with code that will keep the project moving forward.
          </div>
        </div>

        <div className="order-8 lg:order-7">
          <div className="flex flex-col text-center">
            <span className="font-bold text-3xl">Build on Your Schedule</span>
            <span className="font-semibold">with the Programming Life Cycle</span>
          </div>
          <div className="text-base text-gray-500 pt-6 font-semibold leading-relaxed">
            Work on these challenges when it fits best into your schedule. Students can create their own development roadmap that works with their availability. Each project is designed for around 25 hours of development time, but you decide when that is.
          </div>
        </div>

        <div className="flex justify-center items-center order-7 lg:order-8">
          <img src="/SVG/schedule.svg" alt="" className="w-64 sm:w-96"/>
        </div>
      </div>
    </div>
  )
}
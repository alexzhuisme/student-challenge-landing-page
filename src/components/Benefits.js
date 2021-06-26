export default function Benefits() {
  return (
    <div className="grid grid-cols-2 gap-32">
      <div className="flex justify-end items-center">
        <img src="/SVG/updated_resume.svg" alt="" className="w-96"/>
      </div>
      <div className="flex flex-col justify-center items-start w-96">
        <div>
          <span className="font-bold text-2xl">Real Industry Experience</span> <br/> in developing creative and robust software
        </div>
        <div className="text-base font-extralight pt-6">
          Work with engineers from our education team on plug-in projects created to help students and teachers study, organize, and create PDF documents more efficiently. Get feed back from our education team about how to design your program for the education market.
        </div>
      </div>
      <div className="flex justify-end">
        <div className="w-96 flex flex-col justify-center">
          <div>
            <span className="font-bold text-2xl">Sharpen Your Coding Skills</span> <br/> while creating scalable and clean programs
          </div>
          <div className="text-base font-extralight pt-6">
            These projects are designed to challenge undergraduate and graduate student coders’ skills and teach them about developing application software, using third party APIs, and working with software development kits.
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center">
        <img src="/SVG/proud_coder.svg" alt="" className="w-96"/>
      </div>
      <div className="flex justify-end items-center">
        <img src="/SVG/our_solution.svg" alt="" className="w-96"/>
      </div>
      <div className="flex flex-col justify-center items-start w-96">
        <div>
          <span className="font-bold text-2xl">Anticipate Problems & Find Resolutions</span> <br/> that keep your project on track for the next milestone
        </div>
        <div className="text-base font-extralight pt-6">
          Our engineers can assist when issues arise during your project. Work closely with our team to address bugs or come up with code that will keep the project moving forward.
        </div>
      </div>
      <div className="flex justify-end">
        <div className="w-96 flex flex-col justify-center">
          <div>
            <span className="font-bold text-2xl">Build on Your Schedule</span> <br/> with the Programming Life Cycle
          </div>
          <div className="text-base font-extralight pt-6">
            Work on these challenges when it fits best into your schedule. Students can create their own development roadmap that works with their availability. Each project is designed for around 25 hours of development time, but you decide when that is.
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center">
        <img src="/SVG/product_iteration.svg" alt="" className="w-96"/>
      </div>
    </div>
  )
}
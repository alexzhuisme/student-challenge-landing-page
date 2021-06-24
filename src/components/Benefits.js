export default function Benefits() {
  return (
    <div className="grid grid-cols-2 gap-32">
      <div className="flex justify-end items-center">
        <img src="/SVG/updated_resume.svg" alt="" className="w-96"/>
      </div>
      <div className="flex flex-col justify-center items-start w-96">
        <span className="font-bold text-2xl">Real industry experience</span> in creative planning and developing robust software
      </div>
      <div className="flex justify-end">
        <div className="w-96 flex flex-col justify-center">
          <span className="font-bold text-2xl">Learn to write code</span> that is scalable and easy to read in a work environment
        </div>
      </div>
      <div className="flex justify-start items-center">
        <img src="/SVG/proud_coder.svg" alt="" className="w-96"/>
      </div>
      <div className="flex justify-end items-center">
        <img src="/SVG/our_solution.svg" alt="" className="w-96"/>
      </div>
      <div className="flex flex-col justify-center items-start w-96">
        <span className="font-bold text-2xl">Anticipate problems & find resolutions</span> before they derail a major milestone or deliverable
      </div>
      <div className="flex justify-end">
        <div className="w-96 flex flex-col justify-center">
          <span className="font-bold text-2xl">A first hand experience</span> with the Programming Life Cycle
        </div>
      </div>
      <div className="flex justify-start items-center">
        <img src="/SVG/product_iteration.svg" alt="" className="w-96"/>
      </div>
    </div>
  )
}
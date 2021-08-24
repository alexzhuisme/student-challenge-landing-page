

export default function Challenge() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-3 w-full xl:w-1040px flex mx-auto">
      <div className="col-span-1 w-full flex justify-center lg:justify-start items-center">
        <div className="text-3xl lg:text-5xl text-center lg:text-left lg:pl-8 xl:pl-0 font-bold text-blue-title">
          Student Challenge Program
        </div>
      </div>

      <div className="row-span-3 w-full">
        <div className="w-64 mx-auto lg:w-108 xl:w-560px">
          <img src="./SVG/build_rocket.svg" alt=""/>
        </div>
      </div>

      <div className="col-span-1 w-full h-32 px-4 sm:px-20 lg:px-10 xl:px-0 lg:h-full flex justify-start items-center">
        <div className="text-base text-gray-500 flex justify-start items-center font-semibold">
          Unleash your creativity, build useful tools,  complete a simple Foxit Reader/Editor Plugin and win a $1,000 prize.
        </div>
      </div>
      <div className="col-span-1 flex justify-center xl:justify-start items-end h-18 xl:h-auto">
        <a
          href="https://forms.office.com/r/5ZubiwG0TK"
          target="_blank"
          rel="noreferrer"
          className="text-white pl-4 pr-10 sm:px-20 xl:px-24 py-3 xl:py-5 rounded-2xl xl:rounded-3xl bg-orange-base  text-lg font-semibold bg-right-arrow bg-no-repeat bg-right-2">
          SIGN UP
        </a>
      </div>
    </div>
  )
}
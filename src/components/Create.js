export default function Create(){
  return (
    <div className="h-auto w-full flex justify-center items-center py-20 px-4 lg:px-20 xl:px-0">
      <div className="w-full xl:w-1040px h-108 sm:h-96 bg-orange-card flex flex-col justify-around items-center rounded-3xl px-4">
        <div className="text-3xl xl:text-5xl font-bold text-white">
          Want to create your own&nbsp;
          <span className="text-blue-title">Challenge</span>
          &nbsp;?
        </div>
        <div className="text-white flex flex-col justify-center items-start">
          <div className="text-xl font-semibold">Participants must meet the following requirement for submission:</div>
          <ul className="list-disc list-inside">
            <li>Must be students 18 years old or older before attempting the challenge</li>
            <li>Must be enrolled in school or were enrolled in school within the last year</li>
            <li>Must be able to legally accept the gift/prize</li>
          </ul>
        </div>
        <div className="w-52 sm:w-full flex flex-wrap justify-around items-start gap-y-3">
          <a
            href="https://forms.office.com/r/5ZubiwG0TK"
            target="_blank"
            rel="noreferrer"
            className="text-black pl-4 pr-10 sm:px-16 xl:px-20 py-3 bg-white rounded-2xl text-lg font-semibold bg-right-arrow-black bg-no-repeat bg-right-2">
            SIGN UP
          </a>
          <a
            href="https://github.com/DanGodfreyjr/MakeYourOwnFoxitStudentChallenge"
            target="_blank"
            rel="noreferrer"
            className="text-white px-2 sm:px-12 xl:px-20 py-3 border-white border rounded-2xl text-lg font-semibold">
            LEARN MORE
          </a>
        </div>
      </div>

    </div>
  )
}
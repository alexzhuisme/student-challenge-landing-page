export default function Create(){
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h-32 px-4 w-full lg:w-2/3 flex flex-col justify-around items-center">
        <h2 className="text-xl md:text-4xl font-bold">Want to create your own <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-dark to-orange-light">Challenge</span>?</h2>
        <p className="w-10/12 flex justify-center items-center">Come up with your own PDF plug in idea and submit it as a Challenge. Get creative and create a feature inspired by your own document needs.</p>
      </div>
      <div className="h-16 w-full md:w-1/2 flex justify-around items-center">
        <a href="https://github.com/DanGodfreyjr/MakeYourOwnFoxitStudentChallenge" target="_blank" rel="noreferrer"
           className="bg-gradient-to-r from-orange-dark to-orange-light w-40 flex justify-center items-center h-10 rounded-md  text-white font-bold shadow-md border-2 border-white"
        >
          Learn More
        </a>
        <a href="https://forms.office.com/r/5ZubiwG0TK" target="_blank" rel="noreferrer"
           className="bg-gradient-to-r from-orange-dark to-orange-light w-40 flex justify-center items-center h-10 rounded-md  text-white font-bold shadow-md border-2 border-white"
        >
          Sign Up Here
        </a>
      </div>
    </div>
  )
}
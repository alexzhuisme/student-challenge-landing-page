export default function Create(){
  return (
    <div className="h-80  flex flex-col justify-center items-center">
      <div className="h-32 w-1/2 flex flex-col justify-around items-center">
        <h2 className=" text-4xl font-bold">Want to create your own <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-dark to-orange-light">Challenge</span>?</h2>
        <p>Come up with your own PDF plug in idea and submit it as a Challenge. Get creative and create a feature inspired by your own document needs.</p>
      </div>
      <div className="h-16 w-1/2 flex justify-around items-center">
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
export default function Card(props){
  return (
    <div className="rounded overflow-hidden shadow-sm border-4 border-white w-96 mx-4">
      <div className="px-6 py-4">
        <div className="font-bold text-lg mb-2 ">{props.title}</div>
        <p className=" text-base font-light">
          {props.description}
        </p>
        <div className="h-16 flex justify-center items-center">
          <a href={props.link} target="_blank" rel="noreferrer"
             className="mx-auto bg-gradient-to-r from-orange-dark to-orange-light w-40 flex justify-center items-center h-10 rounded-md  text-white font-bold shadow-md border-2 border-white"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  )
}
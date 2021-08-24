export default function Card(props){
  return (
    <div className="group border border-gray-500 hover:border-orange-card w-80 xl:w-96 xl:h-80 rounded-xl hover:bg-white transition-all">
      <div className="px-6 py-4 h-full">
        <div className="flex flex-col justify-between items-start h-full">
          <img src={props.logo} alt="" className='bg-blue-card group-hover:bg-orange-card p-4 rounded-xl'/>
          <div className="font-bold text-lg text-blue-title group-hover:text-orange-card">{props.title}</div>
          <p className="text-gray-500 font-semibold">
            {props.description}
          </p>
          <a href={props.link} target="_blank" rel="noreferrer"
             className="text-gray-500 font-bold group-hover:text-orange-card">
            Learn More
          </a>
        </div>
      </div>
    </div>
  )
}
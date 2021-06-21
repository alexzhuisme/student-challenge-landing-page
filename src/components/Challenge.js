export default function Challenge() {
  return (
    <div className="grid grid-rows-3 grid-cols-3 grid-flow-col items-center justify-around font-open-sans h-80 w-1/2 mx-auto">
      <div className="row-span-1 col-span-2 text-4xl font-extrabold text-gray-700">Foxit Student Challenge Program</div>
      <div className="row-span-1 col-span-2 text-lg flex flex-col justify-between">
        <div className="font-medium">Complete a simple Foxit <span className="text-blue-300">plugin</span> Project and win a $1000 gift card</div>
        <div className="font-light">Feel free to join our discord community and view our projects on github</div>
      </div>
      <div className="row-span-1 col-span-2 flex justify-around items-center w-72">
        <a href="https://discord.gg/5qkT3qxmV3" target="_blank" rel="noreferrer" >
          <img src="/Discord-Logo.png" alt="" className="bg-blue-discord px-3 py-1 rounded-md w-36"/>
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer" className="w-36">
          <img src="/GitHub_Logo.png" alt="" className=""/>
        </a>
      </div>
      <div className="row-span-3 col-span-1 w-60">
        <img src="/illustration.png" alt="" className=""/>
      </div>
    </div>
  )
}


export default function Challenge() {
  return (
    <div className="grid grid-rows-3 grid-cols-3 grid-flow-col items-center justify-around font-open-sans h-80 w-2/3 max-w-5xl mx-auto">
      <div className="row-span-1 col-span-2 md:text-2xl sm:text-xl lg:text-4xl font-extrabold text-gray-700">Foxit Student Challenge Program</div>
      <div className="row-span-1 col-span-2 md:text-lg sm:text-base flex flex-col justify-between self-center">
        <a href="https://forms.office.com/r/5ZubiwG0TK" target="_blank" rel="noreferrer"
           className="bg-gradient-to-r from-orange-dark to-orange-light w-40 flex justify-center items-center h-10 rounded-md  text-white font-bold shadow-md"
        >
          Sign Up Here
        </a>
      </div>
      <div className="row-span-1 col-span-3 flex gap-4 justify-around items-center">
        <a href="https://discord.gg/5qkT3qxmV3" target="_blank" rel="noreferrer" className="flex items-start space-x-4">
          <svg fill="#5865f2" className="flex-none text-indigo-400 w-12 h-12">
            <rect width="48" height="48" rx="12"/>
            <path d="M21.637 23.57c-.745 0-1.332.653-1.332 1.45 0 .797.6 1.45 1.332 1.45.744 0 1.332-.653 1.332-1.45.013-.797-.588-1.45-1.332-1.45zm4.767 0c-.744 0-1.332.653-1.332 1.45 0 .797.6 1.45 1.332 1.45.745 0 1.332-.653 1.332-1.45 0-.797-.587-1.45-1.332-1.45z" fill="currentColor" className="text-indigo-50"/>
            <path d="M32.75 12.613H15.248a2.684 2.684 0 00-2.678 2.69v17.66a2.684 2.684 0 002.678 2.69h14.811l-.692-2.416 1.672 1.554 1.58 1.463 2.809 2.482V15.304a2.684 2.684 0 00-2.678-2.69zm-5.042 17.058s-.47-.561-.862-1.058c1.711-.483 2.364-1.554 2.364-1.554-.535.353-1.045.6-1.502.77a8.591 8.591 0 01-1.894.562 9.151 9.151 0 01-3.383-.013 10.964 10.964 0 01-1.92-.561 7.652 7.652 0 01-.953-.445c-.04-.026-.078-.039-.117-.065-.027-.013-.04-.026-.053-.039-.235-.13-.365-.222-.365-.222s.627 1.045 2.285 1.541c-.392.497-.875 1.084-.875 1.084-2.886-.091-3.983-1.985-3.983-1.985 0-4.206 1.88-7.615 1.88-7.615C20.211 18.661 22 18.7 22 18.7l.131.157c-2.35.679-3.435 1.71-3.435 1.71s.287-.156.77-.378c1.398-.614 2.508-.784 2.965-.823.079-.013.144-.026.223-.026a10.647 10.647 0 016.57 1.228s-1.033-.98-3.253-1.66l.183-.208s1.79-.04 3.67 1.371c0 0 1.881 3.41 1.881 7.615 0 0-1.11 1.894-3.997 1.985z" fill="currentColor" className="text-indigo-50"/>
          </svg>
          <div className="flex-auto">
            <h3 className="font-bold text-gray-900">Discord</h3>
            <p>Join our Discord community to get better support</p>
          </div>
        </a>
        <a href="https://github.com/DanGodfreyjr/FoxitStudentChallenges" target="_blank" rel="noreferrer" className="flex items-start space-x-4">
          <svg fill="currentColor" className="flex-none text-gray-900 w-12 h-12">
            <rect width="48" height="48" rx="12"/>
            <path d="M23.997 12a12 12 0 00-3.792 23.388c.6.12.816-.264.816-.576l-.012-2.04c-3.336.72-4.044-1.608-4.044-1.608-.552-1.392-1.332-1.764-1.332-1.764-1.08-.744.084-.72.084-.72 1.2.084 1.836 1.236 1.836 1.236 1.08 1.824 2.808 1.296 3.492.996.12-.78.42-1.308.756-1.608-2.664-.3-5.46-1.332-5.46-5.928 0-1.32.468-2.388 1.236-3.228a4.32 4.32 0 01.12-3.168s1.008-.324 3.3 1.224a11.496 11.496 0 016 0c2.292-1.56 3.3-1.224 3.3-1.224.66 1.644.24 2.88.12 3.168.768.84 1.236 1.92 1.236 3.228 0 4.608-2.808 5.616-5.484 5.916.432.372.816 1.104.816 2.22l-.012 3.3c0 .312.216.696.828.576A12 12 0 0023.997 12z" fill="currentColor" className="text-gray-50"/>
          </svg>
          <div className="flex-auto"><h3 className="font-bold text-gray-900">GitHub</h3><p>Check our available challenges on GitHub</p></div>
        </a>
      </div>
      <div className="row-span-2 col-span-1 w-60">
        <img src="/SVG/pair_programming.svg" alt=""/>
      </div>
    </div>
  )
}
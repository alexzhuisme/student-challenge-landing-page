import { Link } from 'react-router-dom'

export default function Navbar() {

  return (
    <nav className="flex justify-between items-center h-16 bg-white text-gray-500 relative shadow-sm">
      <a href="https://foxit.com" target="_blank" rel="noreferrer" className='pl-8 flex-shrink-0'>
        <img src="/foxit-header-logo.png" alt="" className="h-10"/>
      </a>
      {/*<div className="md:block hidden flex-shrink-0">*/}
      {/*  <Link className="p-4 hover:bg-gray-100 rounded-md hover:text-blue-300 transition duration-100 ease-in-out" to='/'>Products</Link>*/}
      {/*  <Link className="p-4 hover:bg-gray-100 rounded-md hover:text-blue-300 transition duration-100 ease-in-out" to='/'>Store</Link>*/}
      {/*  <Link className="p-4 hover:bg-gray-100 rounded-md hover:text-blue-300 transition duration-100 ease-in-out" to='/'>Company</Link>*/}
      {/*  <Link className="p-4 hover:bg-gray-100 rounded-md hover:text-blue-300 transition duration-100 ease-in-out" to='/'>Support</Link>*/}
      {/*  <Link className="p-4 hover:bg-gray-100 rounded-md hover:text-blue-300 transition duration-100 ease-in-out" to='/'>Volume Licensing</Link>*/}
      {/*</div>*/}
      {/*<div className="md:block flex-shrink-0">*/}
      {/*  <Link className="p-4 w-32" to='/'>*/}
      {/*    <span className="bg-blue-500 text-white rounded-md py-1 px-6">*/}
      {/*      Free Trial*/}
      {/*      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline pl-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">*/}
      {/*      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />*/}
      {/*      </svg>*/}
      {/*    </span>*/}
      {/*  </Link>*/}
      {/*</div>*/}
      {/*<div className="px-4 cursor-pointer md:hidden">*/}
      {/*  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">*/}
      {/*    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />*/}
      {/*  </svg>*/}
      {/*</div>*/}
    </nav>
  )
 }
export default function Banner() {
  return (
    <div className="w-full h-auto bg-gradient-to-r from-orange-dark to-orange-light">
      <p className="pl-6 md:w-1/2 py-2 h-full text-base text-white flex justify-start mx-auto sm:w-full">
        <span className="font-bold">Foxit</span>&nbsp;has changed some product names. To learn more&nbsp;<span className="font-bold underline cursor-pointer">click here</span>.
      </p>
    </div>
  )
}
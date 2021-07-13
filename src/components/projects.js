import Card from "./Card";

const project = [
  {
    'title':"PDF Translator",
    'description': 'Create a tool that translates text in a PDF document. Gain experience with text analysis and working with APIs to quickly deliver translations for a seamless user experience.',
    'link': "https://github.com/huytran888/PDFTranslator"
  },
  {
    'title':"PDF Scheduler",
    'description': 'Create a tool that translates text in a PDF document. Gain experience with text analysis and working with APIs to quickly deliver translations for a seamless user experience.',
    'link': "https://github.com/huytran888/PDFScheduler"
  },
  {
    'title':"PDF QR Code Reader",
    'description': 'Create a tool that translates text in a PDF document. Gain experience with text analysis and working with APIs to quickly deliver translations for a seamless user experience.',
    'link': "https://github.com/huytran888/PDFQRCodeReader"
  },
  {
    'title':"PDF Map Image Insert",
    'description': 'Create a tool that translates text in a PDF document. Gain experience with text analysis and working with APIs to quickly deliver translations for a seamless user experience.',
    'link': "https://github.com/DanGodfreyjr/PDFInsertMapImage"
  }
]

export default function Projects() {
  return (
    <div className="flex flex-wrap -mx-1 overflow-hidden sm:-mx-4 md:-mx-4 lg:-mx-4 xl:-mx-4">
      <div className="my-1 px-1 w-full overflow-hidden sm:my-4 sm:px-4 sm:w-1/2 md:my-4 md:px-4 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 xl:my-4 xl:px-4 xl:w-1/2 flex justify-around items-center lg:justify-end">
        <Card title={project[0].title} description={project[0].description} link={project[0].link}/>
      </div>
      <div className="my-1 px-1 w-full overflow-hidden sm:my-4 sm:px-4 sm:w-1/2 md:my-4 md:px-4 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 xl:my-4 xl:px-4 xl:w-1/2 flex justify-around items-center lg:justify-start">
        <Card title={project[1].title} description={project[1].description} link={project[1].link}/>
      </div>
      <div className="my-1 px-1 w-full overflow-hidden sm:my-4 sm:px-4 sm:w-1/2 md:my-4 md:px-4 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 xl:my-4 xl:px-4 xl:w-1/2 flex justify-around items-center lg:justify-end">
        <Card title={project[2].title} description={project[2].description} link={project[2].link}/>
      </div>
      <div className="my-1 px-1 w-full overflow-hidden sm:my-4 sm:px-4 sm:w-1/2 md:my-4 md:px-4 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 xl:my-4 xl:px-4 xl:w-1/2 flex justify-around items-center lg:justify-start">
        <Card title={project[3].title} description={project[3].description} link={project[3].link}/>
      </div>
    </div>

  )
}
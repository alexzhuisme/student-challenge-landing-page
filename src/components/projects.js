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
    <div className="mx-auto max-w-5xl p-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
      {/*<div className="flex justify-between items-center h-full w-1/2 mx-auto">*/}
        <Card title={project[0].title} description={project[0].description} link={project[0].link}/>
        <div>
          <Card title={project[1].title} description={project[1].description} link={project[1].link}/>
        </div>
        <div>
          <Card title={project[2].title} description={project[2].description} link={project[2].link}/>
        </div>
        <div>
          <Card title={project[3].title} description={project[3].description} link={project[3].link}/>
        </div>
    </div>

  )
}
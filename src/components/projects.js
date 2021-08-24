import Card from "./Card";
import translate from '../img/translate.svg'
import calender from '../img/calendar.svg'
import qrcode from '../img/qrcode.svg'
import map from '../img/map.svg'

const project = [
  {
    'title':"PDF Translator",
    'description': 'Create a tool that translates text in a PDF document. Gain experience with text analysis and working with APIs to quickly deliver translations for a seamless user experience.',
    'link': "https://github.com/huytran888/PDFTranslator",
    'logo': translate
  },
  {
    'title':"PDF Scheduler",
    'description': 'Create a tool that translates text in a PDF document. Gain experience with text analysis and working with APIs to quickly deliver translations for a seamless user experience.',
    'link': "https://github.com/huytran888/PDFScheduler",
    logo: calender
  },
  {
    'title':"PDF QR Code Reader",
    'description': 'Create a tool that translates text in a PDF document. Gain experience with text analysis and working with APIs to quickly deliver translations for a seamless user experience.',
    'link': "https://github.com/huytran888/PDFQRCodeReader",
    logo: qrcode
  },
  {
    'title':"PDF Map Image Insert",
    'description': 'Create a tool that translates text in a PDF document. Gain experience with text analysis and working with APIs to quickly deliver translations for a seamless user experience.',
    'link': "https://github.com/DanGodfreyjr/PDFInsertMapImage",
    logo: map
  }
]

export default function Projects() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="text-3xl font-bold pb-6">Available Projects</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Card logo={project[0].logo} title={project[0].title} description={project[0].description} link={project[0].link}/>
        </div>
        <div>
          <Card logo={project[1].logo} title={project[1].title} description={project[1].description} link={project[1].link}/>
        </div>
        <div>
          <Card logo={project[2].logo} title={project[2].title} description={project[2].description} link={project[2].link}/>
        </div>
        <div>
          <Card logo={project[3].logo} title={project[3].title} description={project[3].description} link={project[3].link}/>
        </div>
      </div>
      <div className="pt-6 text-xl font-bold"><a href="#" className="hover:underline">You can check past project here</a></div>
    </div>
  )
}
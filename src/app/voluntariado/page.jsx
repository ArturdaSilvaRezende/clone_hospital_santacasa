import CallToActionSections from '~/components/CallToAction'
import Carousel from './_components/Carousel'
import ActionsAndProjects from './_components/ActionsAndProjects'
import OurMission from './_components/OurMission'
import Donation from './_components/Donation'

export default function Voluntariado() {
  return (
    <>
      <Carousel />
      <OurMission />
      <ActionsAndProjects />
      <Donation />
      <CallToActionSections />
    </>
  )
}

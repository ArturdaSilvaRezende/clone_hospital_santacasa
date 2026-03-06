import CallToActionSections from '~/components/CallToAction'
import ActionsAndProjects from '~/view/pages/voluntariado/ActionsAndProjects'
import Carousel from '~/view/pages/voluntariado/Carousel'
import DonationSection from '~/view/pages/voluntariado/Donation'
import MissionSection from '~/view/pages/voluntariado/OurMission'

export default function Voluntariado() {
  return (
    <>
      <Carousel />
      <MissionSection />
      <ActionsAndProjects />
      <DonationSection />
      <CallToActionSections />
    </>
  )
}

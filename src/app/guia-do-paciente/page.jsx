import CallToActionSections from '~/components/CallToAction'
import Banner from './_components/Banner'
import HospitalMap from './_components/HospitalMap'
import FrequentlyQuestions from './_components/FrequentlyQuestions'

export default function GuiaDoPaciente() {
  return (
    <>
      <Banner />
      <FrequentlyQuestions />
      <HospitalMap />
      <CallToActionSections />
    </>
  )
}

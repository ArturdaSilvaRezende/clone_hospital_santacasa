import CallToActionSections from '~/components/CallToAction'
import FrequentlyQuestions from '~/view/pages/centralDePerguntas/FrequentlyQuestions'
import FrequentlyQuestionsTabs from '~/view/pages/centralDePerguntas/FrequentlyQuestionsTabs'

export default function CentralDePerguntas() {
  return (
    <>
      <FrequentlyQuestions />
      <FrequentlyQuestionsTabs />
      <CallToActionSections />
    </>
  )
}

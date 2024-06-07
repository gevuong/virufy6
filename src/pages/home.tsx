// Assets
import ImageSection1 from '~/assets/static/images/section1/splash.jpg';
import ImageSection2 from '~/assets/static/images/section1/Homepage.jpg';

// Components
import Section1 from '~/components/organisms/section-1/Section1'
import Section2 from '~/components/organisms/section-2/Section2'

// Localization
import { useI18n } from '~/i18n';

export default function Prueba() {
  const {
    home: { sectionTestOnline, sectionOurFounder, sectionVirufyCommunity, sectionMissionStatement },
  } = useI18n();

  return (
  <>
    <div className="flex flex-col items-center justify-center">
      <div className="w-full overflow-hidden">
        <Section1
          sizeImg="width-100vw"
          borderImg="none"
          src={ImageSection2}
          altImg="Imagen cabezera"
          text="Welcome to Virufy"
          text2="Your Personal Health Companion"
          mainText="Empower yourself with the latest in health technology."
          subText="Introducing CoughCheck, the cutting-edge app that utilizes advanced algorithms to analyze your cough and provide insights into potential infection symptoms."
          buttonText="View App Here"
          disclaimer1="*Any device with a web browser and microphone (e.g. iPhone, Android, laptop, iPad)."
          disclaimer2="*The app is still being trained, help us with its development by donating your cough."
          mainText2="How It Works"
          subText2="With just a simple cough into your device's microphone, CoughCheck harnesses the power of Artificial Intelligence to detect unique sound patterns associated with respiratory diseases, such as those indicative of COVID-19, TB, Flu, RSV, COPD, and Asthma."
        />
        <Section2 />
      </div>
    </div>
    </>
  );
}

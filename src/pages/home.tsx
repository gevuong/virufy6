// Assets
import ImageSection1 from '~/assets/static/images/section1/splash.jpg';
import ImageSection2 from '~/assets/static/images/section1/Homepage.jpg';

// Components
import TextinsImg3 from '~/components/molecules/TextinsImg/TextinsImg3.js';

// Localization
import { useI18n } from '~/i18n';

export default function Prueba() {
  const {
    home: { sectionTestOnline, sectionOurFounder, sectionVirufyCommunity, sectionMissionStatement },
  } = useI18n();

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full overflow-hidden">
        <TextinsImg3
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
        />
      </div>
    </div>
  );
}

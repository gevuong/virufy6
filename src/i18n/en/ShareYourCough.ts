import VirufyLogo from '~/assets/static/images/logo/virufy.svg'

export const ShareYourCough = {
  // type cast to remove unsafe assignment error when importing svg
  image: VirufyLogo as string,
  title: 'Covid-19 Cough Data Collection Study',
  text: 'An Independent Nonprofit Research Organization',
  linkUrl: 'https://virufy.org/study/welcome',
  linkText: "Let's Start!",
}

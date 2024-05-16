import VirufyLogo from '~/assets/static/images/logo/virufy.svg'

export const ShareYourCough = {
  // type cast to remove unsafe assignment error when importing svg
  image: VirufyLogo as string,
  title: 'Estudio de recopilación de datos sobre la tos de Covid-19',
  text: 'Una organización de investigación independiente sin fines de lucro',
  linkUrl: 'https://virufy.org/study/welcome',
  linkText: '¡Empecemos!',
}

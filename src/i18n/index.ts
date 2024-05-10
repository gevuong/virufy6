import { useRouter } from 'next/router'
import { type I18nData } from './type'

import { data as enData } from './en'
import { data as esData } from './es'

export type Locales = 'en' | 'es'
export const defaultLocale: Locales = 'en'

export const localeData = {
  en: enData,
  es: esData,
}

export const localeOptions = [
  { value: 'en', label: 'EN' },
  { value: 'es', label: 'ES' },
]

export function useI18n(): I18nData {
  const { locale } = useRouter()
  return localeData[locale as Locales] || localeData[defaultLocale]
}

import { Raleway, Source_Sans_3} from 'next/font/google'


export const titleFont = Source_Sans_3({ 
  subsets: ['latin'],
  variable: '--font-titleFont',
  display: 'swap'
});

export const paragraphFont = Raleway({
  subsets: ['latin'],
  variable: '--font-paragraphFont',
  display: 'swap'
});
import { Source_Sans_3, Open_Sans} from 'next/font/google'


export const titleFont = Source_Sans_3({ 
  subsets: ['latin'],
  variable: '--font-titleFont',
  display: 'swap'
});

export const paragraphFont = Open_Sans({
  subsets: ['latin'],
  variable: '--font-paragraphFont',
  display: 'swap'
});
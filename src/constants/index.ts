import {
  BackpackIcon,
  ReaderIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
} from '@radix-ui/react-icons'

export const heroFocusableItemsIds = [
  'hero-signature',
  'hero-primary',
  'hero-secondary',
]

export const aboutCards = [
  {
    title: 'nav9.tech',
    Icon: BackpackIcon,
    description: 'Frontend Developer',
    location: 'Pelotas',
  },
  {
    title: 'UFPel',
    Icon: ReaderIcon,
    description: 'C.S Student',
    location: 'Pelotas',
  },
  {
    title: 'IFSul',
    Icon: ReaderIcon,
    description: 'Electronic Student',
    location: 'Pelotas',
  },
]

export const animationStackCardsVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
  hidden: {
    y: 32,
    opacity: 0,
  },
}

export const navigationItems = [
  {
    id: 'hero',
    label: 'Home',
  },
  {
    id: 'about',
    label: 'About',
  },
  {
    id: 'stack',
    label: 'Stack',
  },
  {
    id: 'contact',
    label: 'Contact',
  },
]

export const socials = [
  {
    icon: GitHubLogoIcon,
    href: 'https://github.com/dpnunez/',
  },
  {
    icon: LinkedInLogoIcon,
    href: 'https://www.linkedin.com/in/daniel-porto-nunez/',
  },
  {
    icon: EnvelopeClosedIcon,
    href: 'mailto:daniel.portonunez@gmail.com',
  },
]

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket
} from 'react-icons/rx'

interface aboutDataProps  {
  title: string;
  info: {
      title: string,
      icons?: JSX.Element[],
      stage?: string | undefined
  }[];
}

export const aboutData: Array<aboutDataProps> = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key={1} />,
          <FaCss3 key={2} />,
          <FaJs key={3} />,
          <FaReact key={4} />,
          <SiNextdotjs key={5} />,
          <SiFramer key={6} />,
          <FaWordpress key={7} />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma key={1} />, <SiAdobexd key={2} />, <SiAdobephotoshop key={3} />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
];

interface serviceDataProps {
  icon: JSX.Element,
  title: string,
  description: string
};

export const serviceData: Array<serviceDataProps> = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, laudantium."
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, rerum?"
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, consectetur."
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, culpa."
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, porro."
  }
];
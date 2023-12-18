import Link from "next/link";

import {
  RiWhatsappLine,
  RiInstagramLine,
  RiFacebookLine,
  RiLinkedinLine,
  RiGithubLine
} from 'react-icons/ri'

const Socials = () => {
  return (  
    <div className="flex items-center gap-x-5 text-lg">
      <Link target="_blank" href={'https://api.whatsapp.com/send?phone=6282244124143&text=halo'} className="hover:text-accent transition-all duration-300">
        <RiWhatsappLine/>
      </Link>
      <Link target="_blank" href={'https://github.com/zvrendy'} className="hover:text-accent transition-all duration-300">
        <RiGithubLine/>
      </Link>
      <Link target="_blank" href={'https://www.facebook.com/zvrendy'} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine/>
      </Link>
      <Link target="_blank" href={'https://www.instagram.com/zvrendy/'} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine/>
      </Link>
      <Link target="_blank" href={'https://www.linkedin.com/in/madfento/'} className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine/>
      </Link>
    </div>
  );
}
 
export default Socials;
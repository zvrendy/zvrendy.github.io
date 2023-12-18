import Image from "next/image";

const Logo = () => {
  return (  
    <Image
      src="/endy_mooduto.png"
      alt="logo"
      height={75}
      width={220}
      priority
    />
  );
}
 
export default Logo;
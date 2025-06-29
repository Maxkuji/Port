'use client';

import Image from 'next/image';

const socialLinks = [
  { icon: '/icons/github.svg', url: 'https://github.com/yourusername', angle: 0 },
  { icon: '/icons/facebook.svg', url: 'https://facebook.com/yourusername', angle: 90 },
  { icon: '/icons/linkedin.svg', url: 'https://linkedin.com/in/yourusername', angle: 180 },
  { icon: '/icons/twitter.svg', url: 'https://twitter.com/yourusername', angle: 270 },
];

export default function OrbitProfile() {
  return (
    <div className="relative w-72 h-72 mx-auto my-16">
      {/* Profile Image */}
      <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-[#FB9402] mx-auto relative z-10">
        <Image
          src="/images/profile.jpg"
          alt="Profile"
          width={144}
          height={144}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Orbit Icons */}
      <div className="absolute inset-0 animate-spin-slow md:block hidden">
        {socialLinks.map(({ icon, url, angle }, index) => {
          const radius = 110;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute transition-transform duration-300 hover:scale-125"
              style={{
                left: `calc(50% + ${x}px - 16px)`,
                top: `calc(50% + ${y}px - 16px)`,
              }}
            >
              <img src={icon} alt="icon" className="w-8 h-8" />
            </a>
          );
        })}
      </div>

      {/* Mobile Static Icons */}
      <div className="md:hidden mt-6 flex justify-center gap-4">
        {socialLinks.map(({ icon, url }, index) => (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-125"
          >
            <img src={icon} alt="icon" className="w-8 h-8" />
          </a>
        ))}
      </div>
    </div>
  );
}

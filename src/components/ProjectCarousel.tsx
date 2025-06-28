// 'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';  
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projects = [
  { id: 1, title: 'Project One', image: '/images/project-1.jpg', description: 'First project' },
  { id: 2, title: 'Project Two', image: '/images/project-2.jpg', description: 'Second project' },
  { id: 3, title: 'Project Three', image: '/images/project-3.jpg', description: 'Third project' },
  { id: 4, title: 'Project Fourt', image: '/images/project-4.jpg', description: 'Fourt project' },
  // เพิ่มได้ตามใจเลย
];

export default function ProjectCarousel() {
  return (
    <Swiper
        modules={[Autoplay]}
        autoplay={{
        delay: 2500,         // 2.5 วินาทีต่อ slide
        disableOnInteraction: false // ให้หมุนต่อแม้ user เลื่อนเอง
     }}
      loop = {true}
      spaceBetween={20}
      slidesPerView={1.2}
      breakpoints={{
        640: { slidesPerView: 1.5 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {projects.map((project) => (
        <SwiperSlide key={project.id}>
          <div className="bg-[#1a1a1a] rounded-xl p-4 shadow-md">
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg mb-4 object-cover w-full h-40"
            />
            <h3 className="text-lg font-bold text-[#FB9402] mb-2">{project.title}</h3>
            <p className="text-sm text-gray-400">{project.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
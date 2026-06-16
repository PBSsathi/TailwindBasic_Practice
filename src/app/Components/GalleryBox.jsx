import React from "react";
import { ArrowUpRight } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    title: "Full Stack Developer",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Frontend Developer",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Backend Developer",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function GalleryBox() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
       
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-slate-900">
            Our Development Expertise
          </h2>

          <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
            Full Stack, Frontend, and Backend Development Services
          </p>
        </div>

       
        <div className="flex flex-wrap justify-center gap-5">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="
                  w-56
                  h-56
                  object-cover
                  transition-all
                  duration-500
                  group-hover:scale-110
                "
              />

             
              <div
                className="
                  absolute
                  inset-0
                  bg-black/60
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-300
                  flex
                  flex-col
                  justify-end
                  p-4
                "
              >
                <h3 className="text-white text-lg font-semibold">
                  {item.title}
                </h3>

                <button
                  className="
                    mt-2
                    flex
                    items-center
                    gap-1
                    text-sm
                    text-white/80
                    hover:text-white
                    transition
                  "
                >
                  Show More
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
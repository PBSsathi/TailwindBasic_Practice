import React from "react";

const projects = [
  {
    title: "React.js",
    description:
      "A powerful JavaScript library for building fast, interactive, and reusable user interfaces for modern web applications.",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Next.js",
    description:
      "A React framework that enables server-side rendering, static site generation, and high-performance web applications.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Vue.js",
    description:
      "A progressive JavaScript framework designed for building elegant, maintainable, and scalable user interfaces.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function GallerySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900">
            Popular Frontend Frameworks
          </h2>

          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            Explore the most widely used frameworks for building modern web
            applications.
          </p>
        </div>

        
        <div className="flex flex-col md:flex-row gap-5 h-auto md:h-[500px]">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                min-w-0
                md:flex-1
                md:hover:flex-[2.5]
                transition-all
                duration-700
                ease-in-out
                shadow-xl
                cursor-pointer
              "
            >
              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full
                  h-[350px]
                  md:h-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/90
                  via-black/40
                  to-transparent
                "
              />

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  p-8
                  text-white
                  translate-y-8
                  opacity-0
                  group-hover:translate-y-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                "
              >
                <h3 className="text-3xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-slate-200 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div
                className="
                  absolute
                  inset-0
                  rounded-3xl
                  border
                  border-white/10
                  group-hover:border-white/40
                  transition-all
                  duration-500
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
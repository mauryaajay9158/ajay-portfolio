import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import travelImg from "@/assets/travel.png";
import smartImg from "@/assets/smart.png";
import eventImg from "@/assets/event.png";
import userImg from "@/assets/User.png";

const projects = [
  {
    title: "Travel and Tourism Management System",
    description:
      "Deployed A full-stack Travel and Tourism Management System built using Java, Spring Boot, React, HTML, CSS, and JavaScript. Features tour packages, user management, and booking workflows with complete SQL CRUD operations.",
    image: travelImg,
    tags: ["Java", "Spring Boot", "React", "SQL", "Full Stack"],
    link: "https://travel-and-tourism-mngt.onrender.com/api/v1/",
    github: "https://github.com/mauryaajay9158/tour-management-api",
  },
  {
    title: "Smart Automation & Security System",
    description:
      "▶ Watch the Real-Home Implementation — Built, Tested & Installed in My Own Home!. A smart automation and security system enabling voice and gesture control of appliances using Python and ESP32. Implemented face recognition security, ultrasonic intrusion detection, and electricity bill prediction.",
    image: smartImg,
    tags: ["Python", "ESP32", "IoT", "Face Recognition", "Automation"],
    link: "https://drive.google.com/drive/u/1/folders/1K2RVsyTlcvQINRT5v0JrUcSuUiLlFKQU",
    github: "https://github.com/mauryaajay9158/Smart-Home-Automation-System",
  },
  {
    title: "Event Management System",
    description:
      "An event management backend system built with Java, Spring Boot, and Hibernate. Implemented layered RESTful APIs for complete event CRUD operations following clean coding and backend development practices.",
    image: eventImg,
    tags: ["Java", "Spring Boot", "Hibernate", "REST APIs", "MySQL"],
    link: "https://github.com/mauryaajay9158/Spring-Hibernate-Event-Management-System",
    github: "https://github.com/mauryaajay9158/Spring-Hibernate-Event-Management-System",
  },
  {
    title: "User Management System",
    description:
      "A full-featured user management system built with Java and Spring Boot. Provides secure user registration, authentication, profile management, and role-based CRUD operations with relational SQL persistence.",
    image: userImg,
    tags: ["Java", "Spring Boot", "REST APIs", "SQL", "CRUD"],
    link: "https://github.com/mauryaajay9158/User-Management-System",
    github: "https://github.com/mauryaajay9158/User-Management-System",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              solve real problems.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A showcase of full-stack web platforms, backend systems, and smart
            IoT applications built with Java, Spring Boot, React, and Python.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View project for ${project.title}`}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View repository for ${project.title}`}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start justify-between group/title"
                >
                  <h3 className="text-xl font-semibold group-hover/title:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover/title:text-primary
                   group-hover/title:translate-x-1 
                   group-hover/title:-translate-y-1 transition-all"
                  />
                </a>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton
            href="https://github.com/mauryaajay9158"
            target="_blank"
            rel="noopener noreferrer"
          >
            View More on GitHub
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};

const experiences = [
  {
    period: "July 2026 — October 2026",
    role: "Advance Java Full Stack Development",
    company: "Anudeep Foundation (Offline Training)",
    description:
      "Completed an Advanced Java Full Stack Development Certification covering Core Java, Advanced Java, Hibernate, and Spring Boot with hands-on practice building end-to-end full stack applications.",
    technologies: ["Core Java", "Spring Boot", "React.js", "Hibernate", "JPA", "SQL"],
    current: true,
  },
  {
    period: "January 2025 — March 2025",
    role: "Web Development Intern",
    company: "Zyberly",
    description:
      "Assisted with website development, regular maintenance, and content updates. Supported site improvements, bug fixes, and troubleshooting while collaborating on front-end development tasks.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Git", "Web Maintenance"],
    current: false,
  },
  {
    period: "2022 — 2026",
    role: "Bachelor of Engineering (Information Technology)",
    company: "Theem College Of Engineering, Mumbai University",
    description:
      "Pursued BE in Information Technology with a CGPA of 7.7/10. Mastered Object-Oriented Programming (OOP), Database Management, and clean layered architectures while winning multiple project competitions.",
    technologies: ["Java", "OOP", "SQL", "Layered Architecture", "Data Structures"],
    current: false,
  },
  {
    period: "2020 — 2022",
    role: "Higher Secondary (12th) & Secondary (10th)",
    company: "Tarapur Vidya Mandir & CTES English Medium",
    description:
      "Completed Higher Secondary Certificate (12th, Maharashtra Board) with 63.33% and Secondary School Certificate (10th, Maharashtra Board) with 82.60% with a focus on science and computers.",
    technologies: ["Maharashtra Board", "Computer Science", "Mathematics"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience &{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              Education.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A timeline of my academic background, professional internship,
            advanced full-stack Java training, and technical growth.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

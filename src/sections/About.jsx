import { Code2, Database, Layers, Trophy } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Engineering",
    description:
      "Developing end-to-end web applications connecting React.js frontends with Spring Boot backends.",
  },
  {
    icon: Layers,
    title: "Layered Architecture",
    description:
      "Implementing clean Controller-Service-Repository architecture and OOP design principles.",
  },
  {
    icon: Database,
    title: "Database Management",
    description:
      "Designing relational schemas and managing CRUD operations with SQL, MySQL, and JPA/Hibernate.",
  },
  {
    icon: Trophy,
    title: "Award-Winning Projects",
    description:
      "1st Rank in Innovation 2.0 and 3rd in INNOVATHON'24, with hands-on full stack training.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building complete web applications,
              <span className="font-serif italic font-normal text-white">
                {" "}
                from frontend to database.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I am a BE-IT (Information Technology) graduate from Theem
                College of Engineering, Mumbai University (2022–2026, CGPA:
                7.7/10), seeking an entry-level Java Full Stack Developer role.
              </p>
              <p>
                I have hands-on project experience in full-stack web
                development, combining responsive React.js frontends with robust
                Java & Spring Boot RESTful APIs, and SQL/MySQL database
                architectures. I am proficient in JPA/Hibernate, CRUD operations,
                Git, and Postman.
              </p>
              <p>
                I completed an Advanced Java Full Stack Development offline
                certification from Anudeep Foundation covering Core Java,
                Advanced Java, Spring Boot, and Hibernate, along with a Web
                Development Internship at Zyberly where I collaborated on web
                features, maintenance, and troubleshooting.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I believe great work speaks for itself. My commitment is to turn ideas into impactful solutions, exceed expectations, and make every opportunity count."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

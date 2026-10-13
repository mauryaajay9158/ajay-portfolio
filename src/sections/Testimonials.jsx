import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Secured 1st Rank in Innovation 2.0 Interdepartmental Project Competition (2025) for designing and demonstrating the Smart Automation & Energy Prediction System.",
    author: "1st Rank Winner",
    role: "Innovation 2.0 Interdepartmental Project Competition (2025)",
    avatar:
      "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Secured 2nd Runner-Up in Mini Project Exhibition (2025), recognized for layered architecture, robust RESTful APIs, and clean data modeling.",
    author: "2nd Runner-Up",
    role: "Mini Project Exhibition (2025)",
    avatar:
      "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Secured 3rd Position in INNOVATHON'24 Project Competition for architecting an innovative Web Development Business Model platform.",
    author: "3rd Position Winner",
    role: "INNOVATHON'24 Project Competition (2024)",
    avatar:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Completed WEBCADE 2024 – 12-Hour Web Development Hackathon at St. John College of Engineering & Management, building functional web features under rapid deadline pressure.",
    author: "Hackathon Competitor",
    role: "WEBCADE 2024 – 12-Hour Hackathon",
    avatar:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=100&h=100&fit=crop",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div
        className="container mx-auto 
      px-6 relative z-10"
      >
        {/* Section Header */}
        <div
          className="text-center max-w-3xl 
        mx-auto mb-16"
        >
          <span
            className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
          >
            Achievements & Honors
          </span>
          <h2
            className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground"
          >
            Milestones that{" "}
            <span
              className="font-serif italic 
            font-normal text-white"
            >
              showcase dedication.
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{testimonials[activeIdx].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIdx].avatar}
                  alt={testimonials[activeIdx].author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <div className="font-semibold">
                    {testimonials[activeIdx].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIdx].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

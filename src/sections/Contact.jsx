import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ajaymaurya.connect@gmail.com",
    href: "mailto:ajaymaurya.connect@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8788289605",
    href: "tel:+918788289605",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Andheri, Mumbai, India",
    href: "https://maps.google.com/?q=Andheri,Mumbai",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // 'success' or 'error'
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // If EmailJS credentials are provided, use EmailJS
      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
          },
          publicKey
        );
      } else {
        // Zero-config email delivery to your inbox via FormSubmit API
        const response = await fetch(
          "https://formsubmit.co/ajax/ajaymaurya.connect@gmail.com",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              message: formData.message,
              _subject: `New Portfolio Message from ${formData.name}`,
              _template: "box",
            }),
          }
        );

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Failed to deliver message.");
        }
      }

      setSubmitStatus({
        type: "success",
        message:
          "Message sent successfully! Thank you for reaching out, I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitStatus({
        type: "error",
        message:
          err?.message ||
          "Failed to send message. You can also reach me directly at ajaymaurya.connect@gmail.com.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4 sm:mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Let's build{" "}
            <span className="font-serif italic font-normal text-white">
              something great.
            </span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base animate-fade-in animation-delay-200 max-w-xl mx-auto">
            I am actively seeking an entry-level Java Full Stack Developer /
            Software Developer role. Feel free to reach out via email, phone, or
            by sending a message below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-start">
          {/* Send Message Form */}
          <div className="glass p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-primary/30 animate-fade-in animation-delay-300 w-full min-w-0">
            <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 text-foreground"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your name..."
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 text-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Your message..."
                  className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                />
              </div>

              <Button
                className="w-full flex items-center justify-center gap-2"
                type="submit"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div
                  className={`flex items-start sm:items-center gap-3 p-3.5 sm:p-4 rounded-xl ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/20 text-green-400"
                      : "bg-red-500/10 border border-red-500/20 text-red-400"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 sm:mt-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 sm:mt-0" />
                  )}
                  <p className="text-xs sm:text-sm break-words">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in animation-delay-400 w-full min-w-0">
            <div className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-8">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
                Contact Information
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-surface transition-colors group min-w-0"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="text-sm sm:text-base font-medium break-all sm:break-normal text-foreground">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
                <span className="font-medium text-sm sm:text-base">Available for Hiring</span>
              </div>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                BE-IT graduate actively seeking entry-level Java Full Stack
                Developer opportunities. Ready to join immediately, collaborate
                effectively, and contribute to end-to-end full stack web
                applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

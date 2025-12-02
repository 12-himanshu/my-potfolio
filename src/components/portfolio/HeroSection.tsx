import { Github, Linkedin, Mail, MapPin, Phone, ChevronDown } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container relative z-10 text-center px-4">
        <div className="space-y-6 max-w-4xl mx-auto">
          {/* Tag */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm text-sm text-muted-foreground animate-fade-in"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for Opportunities
          </div>

          {/* Name */}
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            Hi, I'm{' '}
            <span className="text-gradient-primary">Himanshu Charak</span>
          </h1>

          {/* Title */}
          <p 
            className="text-xl md:text-2xl text-muted-foreground font-medium animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="text-foreground">AI/ML Developer</span> & Full-Stack Engineer
          </p>

          {/* Description */}
          <p 
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            Final-year B.Tech student passionate about building intelligent solutions 
            and scalable web applications that make a real-world impact.
          </p>

          {/* Location */}
          <div 
            className="flex items-center justify-center gap-2 text-muted-foreground animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            <MapPin className="w-4 h-4 text-primary" />
            <span>Kolhapur, Maharashtra, India</span>
          </div>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in"
            style={{ animationDelay: '0.5s' }}
          >
            <a
              href="#projects"
              className="px-8 py-3 gradient-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-all glow-primary"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-border bg-card/50 backdrop-blur-sm text-foreground font-medium rounded-full hover:border-primary/50 hover:bg-card transition-all"
            >
              Get in Touch
            </a>
          </div>

          {/* Social Links */}
          <div 
            className="flex items-center justify-center gap-4 pt-6 animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            <a
              href="mailto:himanshucharak1234@gmail.com"
              className="p-3 rounded-full border border-border bg-card/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="tel:+919596948902"
              className="p-3 rounded-full border border-border bg-card/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              aria-label="Phone"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border bg-card/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border bg-card/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

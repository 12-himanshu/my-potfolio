import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Work <span className="text-gradient-primary">Together</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="grid gap-4 mb-8">
            {/* Email */}
            <a
              href="mailto:himanshucharak1234@gmail.com"
              className="group flex items-center gap-4 p-4 rounded-xl border border-border bg-card/50 hover:border-primary/50 hover:bg-card transition-all"
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center group-hover:glow-primary transition-all">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">himanshucharak1234@gmail.com</p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+919596948902"
              className="group flex items-center gap-4 p-4 rounded-xl border border-border bg-card/50 hover:border-primary/50 hover:bg-card transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-400 flex items-center justify-center transition-all">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">+91 9596948902</p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/50">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">Kolhapur, Maharashtra – India</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card/50 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
            >
              <Github className="w-5 h-5" />
              <span className="font-medium">GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card/50 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
            >
              <Linkedin className="w-5 h-5" />
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <a
              href="mailto:himanshucharak1234@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 gradient-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-all glow-primary text-lg"
            >
              <Send className="w-5 h-5" />
              Say Hello
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

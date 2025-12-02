import { Code2, Brain, Rocket, Users } from 'lucide-react';

const highlights = [
  {
    icon: Brain,
    title: 'AI & ML',
    description: 'Expertise in machine learning, deep learning, and NLP',
  },
  {
    icon: Code2,
    title: 'Full-Stack Dev',
    description: 'Building scalable web applications end-to-end',
  },
  {
    icon: Rocket,
    title: 'Problem Solver',
    description: 'Converting complex challenges into elegant solutions',
  },
  {
    icon: Users,
    title: 'Team Player',
    description: 'Strong communication and collaboration skills',
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Passionate About Building <span className="text-gradient-primary">Intelligent Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I'm an innovative and results-driven final-year B.Tech student in Computer Science & Technology 
            at Shivaji University, Kolhapur. With strong expertise in Artificial Intelligence, Python, and 
            full-stack web development, I'm skilled in designing scalable applications, optimizing backend 
            systems, and implementing intelligent solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="group p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:glow-primary transition-all">
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

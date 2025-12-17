import { ExternalLink, Github, Sparkles, FileText, Calculator } from 'lucide-react';

const projects = [
  {
    title: 'Notrious',
    subtitle: 'AI-Powered Product Page Generator for Shopify',
    period: 'Dec 2024 – Feb 2025',
    description: 'Built a web-based platform that allows Shopify store owners to generate and publish AI-powered product pages seamlessly.',
    highlights: [
      'Integrated Shopify GraphQL Admin API to dynamically create and publish product pages',
      'Implemented AI-driven content generation for product descriptions and layouts',
      'Seamless merchant store integration',
    ],
    tags: ['Shopify API', 'AI/ML', 'React', 'GraphQL'],
    icon: Sparkles,
    gradient: 'from-primary to-cyan-400',
  },
  {
    title: 'Text Editor Web App',
    subtitle: 'Feature-rich Online Document Editor',
    period: 'Apr 2024 – May 2024',
    description: 'Web-based text editor with formatting features similar to Microsoft Word including bold, italic, font changes, and color customization.',
    highlights: [
      'Frontend built with React; backend using Express.js and MongoDB',
      'Files stored in database with real-time client-server synchronization',
      'Rich text formatting capabilities',
    ],
    tags: ['React', 'Express.js', 'MongoDB', 'Real-time Sync'],
    icon: FileText,
    gradient: 'from-violet-500 to-purple-400',
  },
  {
    title: 'Mathematical Equation Parser',
    subtitle: 'AST-based Expression Analyzer',
    period: 'Oct 2023 – Nov 2023',
    description: 'Developed a tool that parses mathematical equations into an Abstract Syntax Tree (AST) for analysis and simplification.',
    highlights: [
      'Implemented in Python using parser libraries and custom logic',
      'Supports equation simplification and evaluation',
      'Clean AST visualization',
    ],
    tags: ['Python', 'Parsing', 'AST', 'Algorithms'],
    icon: Calculator,
    gradient: 'from-orange-500 to-amber-400',
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
            Featured Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Things I've <span className="text-gradient-primary">Built</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A showcase of my recent work and side projects
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative p-6 md:p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center flex-shrink-0`}>
                  <project.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-muted-foreground">{project.subtitle}</p>
                    </div>
                    <span className="text-sm text-muted-foreground font-mono">{project.period}</span>
                  </div>

                  <p className="text-muted-foreground">{project.description}</p>

                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full border border-border bg-muted/50 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

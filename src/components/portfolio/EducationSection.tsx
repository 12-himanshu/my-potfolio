import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    degree: 'B.Tech in Computer Science & Technology',
    institution: 'Shivaji University, Kolhapur',
    period: '2022 – 2026 (Ongoing)',
    status: 'current',
  },
  {
    degree: 'Higher Secondary Education (HSC)',
    institution: 'DBN Vidya Mandir Jammu',
    period: '2021 – 2022',
    board: 'Jammu and Kashmir State Board',
  },
  {
    degree: 'Secondary Education (SSC)',
    institution: 'DBN Vidya Mandir Jammu',
    period: '2019 – 2020',
    board: 'Jammu and Kashmir State Board',
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
            Education
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            My <span className="text-gradient-primary">Academic Journey</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {education.map((item, index) => (
                <div key={index} className="relative pl-16">
                  {/* Timeline Dot */}
                  <div className={`absolute left-0 w-12 h-12 rounded-full flex items-center justify-center border-4 border-background ${
                    item.status === 'current' 
                      ? 'gradient-primary' 
                      : 'bg-card border-border'
                  }`}>
                    <GraduationCap className={`w-5 h-5 ${
                      item.status === 'current' ? 'text-primary-foreground' : 'text-muted-foreground'
                    }`} />
                  </div>

                  {/* Content */}
                  <div className={`p-6 rounded-2xl border transition-all duration-300 ${
                    item.status === 'current'
                      ? 'border-primary/50 bg-primary/5'
                      : 'border-border bg-card/50 hover:border-primary/30'
                  }`}>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      <span className="font-mono">{item.period}</span>
                      {item.status === 'current' && (
                        <span className="px-2 py-0.5 rounded-full text-xs bg-primary/20 text-primary font-medium">
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{item.degree}</h3>
                    <p className="text-muted-foreground">{item.institution}</p>
                    {item.board && (
                      <p className="text-sm text-muted-foreground mt-1">{item.board}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

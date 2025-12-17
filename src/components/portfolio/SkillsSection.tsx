const skillCategories = [
  {
    title: 'AI / Machine Learning',
    skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision'],
    color: 'from-primary to-cyan-400',
  },
  {
    title: 'Languages',
    skills: ['Python', 'C++', 'Java', 'JavaScript', 'HTML', 'CSS'],
    color: 'from-violet-500 to-purple-400',
  },
  {
    title: 'Libraries',
    skills: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'OpenCV', 'NLTK', 'SpaCy'],
    color: 'from-orange-500 to-amber-400',
  },
  {
    title: 'Frameworks',
    skills: ['TensorFlow', 'Keras', 'Scikit-learn', 'Flask', 'ReactJS', 'Express.js'],
    color: 'from-pink-500 to-rose-400',
  },
  {
    title: 'Tools',
    skills: ['VS Code', 'Git', 'GitHub', 'Google Colab', 'MongoDB'],
    color: 'from-blue-500 to-indigo-400',
  },
  {
    title: 'Soft Skills',
    skills: ['Communication', 'Teamwork', 'Time Management', 'Problem Solving'],
    color: 'from-green-500 to-emerald-400',
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
            Skills & Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Technologies I <span className="text-gradient-primary">Work With</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A comprehensive toolkit for building intelligent, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
            >
              <h3 className={`text-lg font-semibold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg border border-border bg-muted/50 text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Hero = () => {
  return (
    <section className="relative overflow-hidden gradient-hero py-20 md:py-32">
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground mb-6 animate-fade-in">
            Curated Collection
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Discover thoughtfully designed products crafted with care and attention to detail.
          </p>
          <a 
            href="#products"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-all duration-300 animate-fade-in shadow-elegant hover:shadow-hover"
            style={{ animationDelay: '0.2s' }}
          >
            Shop Now
          </a>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    </section>
  );
};

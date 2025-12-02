import { CartDrawer } from './CartDrawer';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="font-display text-2xl font-semibold text-foreground tracking-tight">
            Storefront
          </span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Shop
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Collections
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <CartDrawer />
        </div>
      </div>
    </header>
  );
};

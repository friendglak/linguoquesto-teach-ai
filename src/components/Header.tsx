
import { useState } from "react";
import { Menu, X, ChevronDown, Globe } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Teachers", href: "#teachers" },
    { name: "Educational Institutions", href: "#institutions" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="section-container !py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary-bright to-purple-600"></div>
            <span className="text-xl font-bold">LingoQuesto</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="btn-ghost text-sm font-medium transition-colors hover:text-primary-bright"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="btn-ghost flex items-center space-x-1"
                aria-label="Select language"
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm">ES</span>
                <ChevronDown className="h-3 w-3" />
              </button>
              
              {isLanguageOpen && (
                <div className="absolute top-full right-0 mt-2 w-24 gradient-card border border-border/50">
                  <div className="p-2">
                    <button className="w-full text-left px-2 py-1 text-sm hover:bg-muted rounded">EN</button>
                    <button className="w-full text-left px-2 py-1 text-sm hover:bg-muted rounded">ES</button>
                  </div>
                </div>
              )}
            </div>

            <a href="#signin" className="btn-ghost text-sm font-medium">
              Sign In
            </a>
            <button className="btn-primary">Sign Up</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden btn-ghost p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 gradient-card border border-border/50">
            <div className="p-4 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-sm font-medium py-2 hover:text-primary-bright transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-border/50 space-y-3">
                <a href="#signin" className="block text-sm font-medium py-2">
                  Sign In
                </a>
                <button className="btn-primary w-full">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

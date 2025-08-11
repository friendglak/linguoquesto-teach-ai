
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  MapPin, 
  Phone 
} from "lucide-react";

export const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Product Description", href: "#product" },
        { name: "How it works", href: "#how-it-works" },
        { name: "Features", href: "#features" },
        { name: "Coming soon", href: "#coming-soon" },
        { name: "Reviews", href: "#reviews" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Individual Teachers", href: "#teachers" },
        { name: "Educational Institutions", href: "#institutions" },
        { name: "Enterprise Solutions", href: "#enterprise" },
        { name: "API Access", href: "#api" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Blog", href: "#blog" },
        { name: "Contact", href: "#contact" },
        { name: "Help Center", href: "#help" },
        { name: "Documentation", href: "#docs" },
        { name: "Community", href: "#community" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#facebook", label: "Facebook" },
    { icon: Twitter, href: "#twitter", label: "Twitter" },
    { icon: Linkedin, href: "#linkedin", label: "LinkedIn" },
    { icon: Instagram, href: "#instagram", label: "Instagram" }
  ];

  return (
    <footer className="border-t border-border/40 bg-background/60 backdrop-blur-sm">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary-bright to-purple-600"></div>
                <span className="text-xl font-bold">LingoQuesto</span>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Amplifying the Teaching Capabilities of Humans. Empowering educators worldwide 
                with AI-driven language learning solutions that transform how students learn to speak.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>hello@lingoquesto.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="h-10 w-10 rounded-lg bg-muted/40 hover:bg-primary-bright/20 flex items-center justify-center transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary-bright transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-semibold text-foreground">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary-bright transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/40 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 LingoQuesto. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#privacy" className="text-muted-foreground hover:text-primary-bright transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-muted-foreground hover:text-primary-bright transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="text-muted-foreground hover:text-primary-bright transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

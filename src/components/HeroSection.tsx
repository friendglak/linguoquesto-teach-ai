
import { ArrowRight, Play } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="home" className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <div className="inline-block gradient-card px-4 py-2 border border-primary-bright/30">
              <span className="gradient-text text-sm font-semibold">
                Empowering language educators with AI
              </span>
            </div>
            
            <h1 className="text-hero gradient-text">
              Speech-Based Language Practice
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Help your students improve their speaking skills through interactive AI-powered conversations. 
              Create engaging activities that boost confidence and accelerate language learning progress.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-primary group">
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            
            <button className="btn-secondary group">
              <Play className="h-4 w-4" />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">10,000+</div>
              <div className="text-sm text-muted-foreground">Active Teachers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">500K+</div>
              <div className="text-sm text-muted-foreground">Student Interactions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">95%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* Right Side - Device Mockups */}
        <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative z-10">
            {/* Laptop Mockup */}
            <div className="gradient-card border border-border/50 p-6 animate-float">
              <div className="bg-muted/20 rounded-lg p-4 space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-primary-bright/20 rounded w-3/4"></div>
                  <div className="h-4 bg-primary-bright/10 rounded w-1/2"></div>
                  <div className="h-20 bg-gradient-to-br from-primary-bright/20 to-purple-500/20 rounded-lg"></div>
                </div>
              </div>
            </div>

            {/* Phone Mockups */}
            <div className="absolute -bottom-6 -right-6 w-24 h-40 gradient-card border border-border/50 p-2 animate-float" style={{ animationDelay: "1s" }}>
              <div className="bg-muted/20 rounded-md h-full p-2 space-y-2">
                <div className="h-2 bg-primary-bright/20 rounded w-full"></div>
                <div className="h-2 bg-primary-bright/10 rounded w-2/3"></div>
                <div className="h-16 bg-gradient-to-br from-primary-bright/20 to-purple-500/20 rounded"></div>
              </div>
            </div>
          </div>

          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-bright/20 to-purple-500/20 rounded-3xl blur-3xl -z-10 animate-pulse-slow"></div>
        </div>
      </div>
    </section>
  );
};

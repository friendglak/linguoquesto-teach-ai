
import { ArrowRight, Play } from "lucide-react";
import { FloatingShapes, TeacherCharacter, StudentCharacters, DeviceIllustration } from "./IllustrationElements";

export const HeroSection = () => {
  return (
    <section id="home" className="section-container relative">
      <FloatingShapes />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <div className="space-y-8 animate-fade-in-up relative z-10">
          <div className="space-y-4">
            <div className="inline-block gradient-card px-4 py-2 border border-primary-bright/30">
              <span className="gradient-text text-sm font-semibold">
                🚀 Empowering language educators with AI
              </span>
            </div>
            
            <h1 className="text-hero gradient-text">
              Speech-Based Language Practice Made Fun! 🎯
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Help your students improve their speaking skills through interactive AI-powered conversations. 
              Create engaging activities that boost confidence and accelerate language learning progress. ✨
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-primary group">
              Get Started 🌟
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            
            <button className="btn-secondary group">
              <Play className="h-4 w-4" />
              Watch Demo 🎬
            </button>
          </div>

          {/* Fun Stats with illustrations */}
          <div className="flex flex-wrap gap-8 pt-8">
            <div className="text-center relative">
              <div className="text-2xl font-bold gradient-text">10,000+ 👩‍🏫</div>
              <div className="text-sm text-muted-foreground">Happy Teachers</div>
            </div>
            <div className="text-center relative">
              <div className="text-2xl font-bold gradient-text">500K+ 🗣️</div>
              <div className="text-sm text-muted-foreground">Conversations</div>
            </div>
            <div className="text-center relative">
              <div className="text-2xl font-bold gradient-text">95% 💝</div>
              <div className="text-sm text-muted-foreground">Love Rate</div>
            </div>
          </div>
        </div>

        {/* Right Side - Colorful Illustrations */}
        <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative z-10 space-y-8">
            {/* Main device illustration */}
            <div className="flex justify-center">
              <DeviceIllustration />
            </div>
            
            {/* Teacher and students scene */}
            <div className="bg-gradient-to-br from-purple-100/20 to-pink-100/20 rounded-3xl p-8 border border-purple-200/30">
              <div className="flex justify-between items-end">
                <TeacherCharacter />
                <StudentCharacters />
              </div>
            </div>
          </div>

          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-bright/10 to-orange-400/10 rounded-3xl blur-3xl -z-10 animate-pulse-slow"></div>
          
          {/* Additional floating elements */}
          <div className="absolute top-8 right-8 w-8 h-8 bg-yellow-400 rounded-full animate-bounce opacity-80"></div>
          <div className="absolute bottom-8 left-8 w-6 h-6 bg-orange-400 rounded-full animate-pulse opacity-60"></div>
        </div>
      </div>
    </section>
  );
};

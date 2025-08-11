
import { FileText, Users, ArrowRight } from "lucide-react";

export const ComingSoon = () => {
  const features = [
    {
      icon: FileText,
      title: "Document Upload 📄",
      subtitle: "Automated Course Creation",
      description: "Automate activity creation for your entire course by uploading your curriculum or book. Our AI will generate comprehensive speaking exercises tailored to your content.",
      bgColor: "from-blue-400 to-purple-500",
      character: "📚"
    },
    {
      icon: Users,
      title: "Classroom Management 👥",
      subtitle: "Complete Student Control",
      description: "Manage all your students in one place. Create groups, assign activities and track progress with detailed analytics and personalized learning paths.",
      bgColor: "from-green-400 to-teal-500",
      character: "👩‍🏫"
    }
  ];

  return (
    <section className="section-container relative">
      {/* Floating "coming soon" elements */}
      <div className="absolute top-16 left-16 text-2xl animate-bounce opacity-60">🚀</div>
      <div className="absolute top-32 right-20 text-2xl animate-pulse opacity-40">⭐</div>
      
      <div className="text-center space-y-4 mb-16">
        <div className="inline-block gradient-card px-6 py-3 border border-primary-bright/30">
          <span className="gradient-text text-sm font-semibold">🎉 Coming Soon</span>
        </div>
        <h2 className="text-section-title gradient-text">
          Exciting Features on the Horizon 🌟
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We're constantly innovating to bring you the most advanced language teaching tools ✨
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="gradient-card border border-border/50 p-8 hover-lift group relative overflow-hidden"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
            
            {/* Character illustration */}
            <div className="absolute -top-2 -right-2 text-3xl opacity-80 group-hover:animate-bounce">
              {feature.character}
            </div>
            
            <div className="space-y-6 relative z-10">
              {/* Icon & Header */}
              <div className="space-y-4">
                <div className={`h-16 w-16 rounded-xl bg-gradient-to-br ${feature.bgColor} flex items-center justify-center group-hover:animate-glow shadow-lg`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-card-title font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-primary-bright font-medium">
                    {feature.subtitle}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Coming Soon Badge with fun styling */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-xs bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full font-medium">
                    🗓️ Q2 2024
                  </span>
                </div>
                <ArrowRight className="h-4 w-4 text-primary-bright opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced CTA with character */}
      <div className="text-center relative">
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-4xl animate-bounce">💡</div>
        <button className="btn-secondary group bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 hover:scale-105">
          Request A Feature 🚀
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
        <p className="text-sm text-muted-foreground mt-4">
          Have an idea? We'd love to hear from you! 💭
        </p>
        
        {/* Fun bottom illustration */}
        <div className="flex justify-center mt-8 space-x-4 opacity-60">
          <span className="text-2xl animate-pulse">🎨</span>
          <span className="text-2xl animate-bounce" style={{ animationDelay: '0.5s' }}>🔧</span>
          <span className="text-2xl animate-pulse" style={{ animationDelay: '1s' }}>🎯</span>
        </div>
      </div>
    </section>
  );
};

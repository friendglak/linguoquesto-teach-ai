
import { FileText, Users, ArrowRight } from "lucide-react";

export const ComingSoon = () => {
  const features = [
    {
      icon: FileText,
      title: "Document Upload",
      subtitle: "Automated Course Creation",
      description: "Automate activity creation for your entire course by uploading your curriculum or book. Our AI will generate comprehensive speaking exercises tailored to your content."
    },
    {
      icon: Users,
      title: "Classroom Management",
      subtitle: "Complete Student Control",
      description: "Manage all your students in one place. Create groups, assign activities and track progress with detailed analytics and personalized learning paths."
    }
  ];

  return (
    <section className="section-container">
      <div className="text-center space-y-4 mb-16">
        <div className="inline-block gradient-card px-4 py-2 border border-primary-bright/30">
          <span className="gradient-text text-sm font-semibold">Coming Soon</span>
        </div>
        <h2 className="text-section-title gradient-text">
          Exciting Features on the Horizon
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We're constantly innovating to bring you the most advanced language teaching tools
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="gradient-card border border-border/50 p-8 hover-lift group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="space-y-6">
              {/* Icon & Header */}
              <div className="space-y-4">
                <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-primary-bright/20 to-purple-500/20 flex items-center justify-center group-hover:animate-glow">
                  <feature.icon className="h-8 w-8 text-primary-bright" />
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

              {/* Coming Soon Badge */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-primary-bright font-medium">
                  Available Q2 2024
                </span>
                <ArrowRight className="h-4 w-4 text-primary-bright opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <button className="btn-secondary group">
          Request A Feature
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
        <p className="text-sm text-muted-foreground mt-4">
          Have an idea? We'd love to hear from you!
        </p>
      </div>
    </section>
  );
};

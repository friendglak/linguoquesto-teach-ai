
import { 
  Zap, 
  Users, 
  Trophy, 
  Clock, 
  BarChart3, 
  Shield 
} from "lucide-react";

const benefits = [
  {
    icon: "3x",
    title: "3x Speed Of Learning",
    description: "Accelerate language acquisition with AI-powered personalized practice sessions that adapt to each student's pace and skill level."
  },
  {
    icon: Users,
    title: "Increase Student Engagement & Motivation",
    description: "Interactive conversations and gamified elements keep students actively participating and excited about learning."
  },
  {
    icon: Trophy,
    title: "Boost Student Confidence",
    description: "Safe practice environment allows students to make mistakes and improve without fear of judgment from peers."
  },
  {
    icon: Clock,
    title: "Save Time & Effort",
    description: "Automated activity creation and progress tracking reduces preparation time, letting you focus on teaching."
  },
  {
    icon: BarChart3,
    title: "Unique Student Insights & Feedback",
    description: "Detailed analytics and AI-generated feedback provide deep insights into each student's progress and areas for improvement."
  },
  {
    icon: "100%",
    title: "100% Control Over The Technology",
    description: "Customize activities, set learning objectives, and maintain full control over your curriculum and teaching methodology."
  }
];

export const BenefitsGrid = () => {
  return (
    <section className="section-container">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-section-title gradient-text">
          Supercharge your language classes
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Transform your teaching with AI-powered tools designed specifically for language educators
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="gradient-card border border-border/50 p-6 hover-lift group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="space-y-4">
              {/* Icon */}
              <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-primary-bright/20 to-purple-500/20 flex items-center justify-center group-hover:animate-glow">
                {typeof benefit.icon === "string" ? (
                  <span className="text-2xl font-bold gradient-text">
                    {benefit.icon}
                  </span>
                ) : (
                  <benefit.icon className="h-8 w-8 text-primary-bright" />
                )}
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-card-title font-semibold">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

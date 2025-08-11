
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
    title: "3x Speed Of Learning 🚀",
    description: "Accelerate language acquisition with AI-powered personalized practice sessions that adapt to each student's pace and skill level.",
    bgColor: "from-orange-400 to-red-500"
  },
  {
    icon: Users,
    title: "Increase Student Engagement & Motivation 🎉",
    description: "Interactive conversations and gamified elements keep students actively participating and excited about learning.",
    bgColor: "from-blue-400 to-purple-500"
  },
  {
    icon: Trophy,
    title: "Boost Student Confidence 💪",
    description: "Safe practice environment allows students to make mistakes and improve without fear of judgment from peers.",
    bgColor: "from-yellow-400 to-orange-500"
  },
  {
    icon: Clock,
    title: "Save Time & Effort ⏰",
    description: "Automated activity creation and progress tracking reduces preparation time, letting you focus on teaching.",
    bgColor: "from-green-400 to-teal-500"
  },
  {
    icon: BarChart3,
    title: "Unique Student Insights & Feedback 📊",
    description: "Detailed analytics and AI-generated feedback provide deep insights into each student's progress and areas for improvement.",
    bgColor: "from-purple-400 to-pink-500"
  },
  {
    icon: "100%",
    title: "100% Control Over The Technology 🎯",
    description: "Customize activities, set learning objectives, and maintain full control over your curriculum and teaching methodology.",
    bgColor: "from-indigo-400 to-purple-600"
  }
];

// Cartoon character illustrations for each benefit
const BenefitCharacter = ({ type }: { type: string }) => {
  switch (type) {
    case "speed":
      return (
        <div className="absolute -top-2 -right-2 z-20">
          <div className="w-8 h-8 bg-yellow-200 rounded-full relative">
            <div className="absolute top-1 left-1 w-1 h-1 bg-black rounded-full"></div>
            <div className="absolute top-1 right-1 w-1 h-1 bg-black rounded-full"></div>
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-2 h-1 border-b border-black rounded-full"></div>
            {/* Speed lines */}
            <div className="absolute -left-2 top-2 w-3 h-0.5 bg-orange-400 rounded"></div>
            <div className="absolute -left-3 top-4 w-4 h-0.5 bg-red-400 rounded"></div>
          </div>
        </div>
      );
    case "engagement":
      return (
        <div className="absolute -top-2 -right-2 z-20">
          <div className="w-8 h-8 bg-pink-200 rounded-full relative">
            <div className="absolute top-1 left-1 w-1 h-1 bg-black rounded-full"></div>
            <div className="absolute top-1 right-1 w-1 h-1 bg-black rounded-full"></div>
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-3 h-1.5 border-b-2 border-black rounded-full"></div>
            {/* Party hat */}
            <div className="absolute -top-2 left-1 w-6 h-4 bg-purple-500 transform rotate-12 clip-triangle"></div>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export const BenefitsGrid = () => {
  return (
    <section className="section-container relative">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-6 h-6 bg-yellow-400 rounded-full animate-bounce opacity-60"></div>
      <div className="absolute top-40 right-20 w-4 h-8 bg-orange-400 rounded-full transform rotate-45 animate-pulse opacity-40"></div>
      
      <div className="text-center space-y-4 mb-16 relative z-10">
        <h2 className="text-section-title gradient-text">
          Supercharge your language classes 🌟
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Transform your teaching with AI-powered tools designed specifically for language educators ✨
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="gradient-card border border-border/50 p-6 hover-lift group relative overflow-hidden"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Background gradient specific to each card */}
            <div className={`absolute inset-0 bg-gradient-to-br ${benefit.bgColor} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
            
            {/* Character illustrations for first two cards */}
            {index === 0 && <BenefitCharacter type="speed" />}
            {index === 1 && <BenefitCharacter type="engagement" />}
            
            <div className="space-y-4 relative z-10">
              {/* Icon with colorful background */}
              <div className={`h-16 w-16 rounded-xl bg-gradient-to-br ${benefit.bgColor} flex items-center justify-center group-hover:animate-glow shadow-lg`}>
                {typeof benefit.icon === "string" ? (
                  <span className="text-xl font-bold text-white">
                    {benefit.icon}
                  </span>
                ) : (
                  <benefit.icon className="h-8 w-8 text-white" />
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

      {/* Bottom illustration - books and learning elements */}
      <div className="flex justify-center mt-16">
        <div className="flex items-end gap-4 opacity-60">
          <div className="w-8 h-2 bg-red-400 rounded transform -rotate-12"></div>
          <div className="w-8 h-2 bg-blue-400 rounded transform rotate-6"></div>
          <div className="w-8 h-2 bg-green-400 rounded transform -rotate-3"></div>
          <div className="w-8 h-2 bg-yellow-400 rounded transform rotate-12"></div>
        </div>
      </div>
    </section>
  );
};

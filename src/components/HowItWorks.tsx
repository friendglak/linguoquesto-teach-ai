
import { Play, Pause, Volume2 } from "lucide-react";
import { useState } from "react";

export const HowItWorks = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="section-container">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-section-title gradient-text">
          How It Works
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Watch how LingoQuesto transforms language learning in just a few simple steps
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Video Player */}
        <div className="relative gradient-card border border-primary-bright/30 p-6 hover-glow">
          <div className="aspect-video bg-gradient-to-br from-muted/20 to-primary-bright/10 rounded-xl relative overflow-hidden">
            {/* Video Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary-bright to-purple-600 flex items-center justify-center mx-auto animate-glow">
                  {isPlaying ? (
                    <Pause className="h-8 w-8 text-white" />
                  ) : (
                    <Play className="h-8 w-8 text-white ml-1" />
                  )}
                </div>
                <p className="text-lg font-medium">
                  {isPlaying ? "Demo Playing..." : "Click to watch the demo"}
                </p>
              </div>
            </div>

            {/* Play Button Overlay */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute inset-0 w-full h-full bg-black/20 hover:bg-black/30 transition-colors flex items-center justify-center group"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              <div className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                {isPlaying ? (
                  <Pause className="h-8 w-8 text-white" />
                ) : (
                  <Play className="h-8 w-8 text-white ml-1" />
                )}
              </div>
            </button>
          </div>

          {/* Video Controls */}
          <div className="flex items-center justify-between mt-4 px-2">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="btn-ghost p-2"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause className="h-5 w-5" />
                ) : (
                  <Play className="h-5 w-5" />
                )}
              </button>
              
              <div className="flex items-center space-x-2">
                <Volume2 className="h-4 w-4 text-muted-foreground" />
                <div className="w-20 h-1 bg-muted rounded-full">
                  <div className="w-3/4 h-full bg-primary-bright rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              02:34 / 04:12
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              step: "01",
              title: "Upload Content",
              description: "Upload your curriculum or create custom conversation topics"
            },
            {
              step: "02", 
              title: "AI Generation",
              description: "Our AI creates interactive speaking activities tailored to your students"
            },
            {
              step: "03",
              title: "Track Progress",
              description: "Monitor student progress with detailed analytics and feedback"
            }
          ].map((item, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary-bright to-purple-600 text-white font-bold flex items-center justify-center mx-auto">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

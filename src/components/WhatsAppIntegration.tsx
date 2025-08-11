
import { MessageCircle, Smartphone, Users, Clock } from "lucide-react";

export const WhatsAppIntegration = () => {
  return (
    <section className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-section-title gradient-text">
              Integration with WhatsApp
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Onboard your students in seconds and have them practice conversations through WhatsApp 
              any-time, anywhere. No complex setup required.
            </p>
          </div>

          {/* Benefits */}
          <div className="space-y-6">
            {[
              {
                icon: Clock,
                title: "Convenient, fast and simple",
                description: "Students can practice immediately without downloading new apps"
              },
              {
                icon: Smartphone,
                title: "No need for extra apps",
                description: "Works directly through WhatsApp - the app they already use daily"
              },
              {
                icon: Users,
                title: "Ease of use and interface familiarity",
                description: "Familiar chat interface reduces learning curve to zero"
              }
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary-bright/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="h-5 w-5 text-primary-bright" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="btn-primary group">
            <MessageCircle className="h-4 w-4" />
            Try WhatsApp Bot
          </button>
        </div>

        {/* Right Side - Phone Mockup & QR */}
        <div className="relative">
          <div className="flex items-center justify-center space-x-8">
            {/* iPhone Mockup */}
            <div className="relative">
              <div className="w-64 h-96 gradient-card border border-border/50 rounded-3xl p-4 animate-float">
                <div className="h-full bg-muted/20 rounded-2xl p-4 space-y-4">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center text-xs text-muted-foreground">
                    <span>9:41</span>
                    <div className="flex space-x-1">
                      <div className="w-4 h-2 bg-primary-bright/60 rounded-sm"></div>
                      <div className="w-6 h-2 bg-primary-bright rounded-sm"></div>
                    </div>
                  </div>

                  {/* WhatsApp Header */}
                  <div className="flex items-center space-x-3 pb-4 border-b border-border/30">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-green-400 to-green-600"></div>
                    <div>
                      <div className="text-sm font-semibold">LingoQuesto Bot</div>
                      <div className="text-xs text-muted-foreground">Online</div>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="space-y-3">
                    <div className="bg-muted/40 rounded-lg p-2 text-xs">
                      ¡Hola! I'm your AI conversation partner. Ready to practice Spanish?
                    </div>
                    <div className="bg-primary-bright/20 rounded-lg p-2 text-xs ml-8">
                      Yes, let's start!
                    </div>
                    <div className="bg-muted/40 rounded-lg p-2 text-xs">
                      Great! Let's have a conversation about your hobbies...
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* QR Code */}
            <div className="text-center space-y-4">
              <div className="gradient-card border border-border/50 p-6">
                <div className="w-32 h-32 bg-gradient-to-br from-muted/40 to-primary-bright/20 rounded-lg flex items-center justify-center">
                  <div className="w-24 h-24 bg-white/90 rounded grid grid-cols-8 gap-0.5 p-1">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 w-1 ${
                          Math.random() > 0.5 ? "bg-black" : "bg-transparent"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Scan to access<br />WhatsApp Bot
              </p>
            </div>
          </div>

          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-primary-bright/10 rounded-3xl blur-3xl -z-10 animate-pulse-slow"></div>
        </div>
      </div>
    </section>
  );
};


import { MessageCircle, Smartphone, Users, Clock } from "lucide-react";

export const WhatsAppIntegration = () => {
  return (
    <section className="section-container relative">
      {/* Floating WhatsApp-themed elements */}
      <div className="absolute top-20 left-20 w-6 h-6 bg-green-400 rounded-full animate-pulse opacity-40"></div>
      <div className="absolute bottom-32 right-16 w-4 h-4 bg-green-500 rounded-full animate-bounce opacity-60"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <div className="space-y-8 relative z-10">
          <div className="space-y-4">
            <h2 className="text-section-title gradient-text">
              Integration with WhatsApp 💬
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Onboard your students in seconds and have them practice conversations through WhatsApp 
              any-time, anywhere. No complex setup required! 🚀
            </p>
          </div>

          {/* Benefits with fun icons */}
          <div className="space-y-6">
            {[
              {
                icon: Clock,
                title: "Convenient, fast and simple ⚡",
                description: "Students can practice immediately without downloading new apps",
                bgColor: "from-green-400 to-emerald-500"
              },
              {
                icon: Smartphone,
                title: "No need for extra apps 📱",
                description: "Works directly through WhatsApp - the app they already use daily",
                bgColor: "from-blue-400 to-cyan-500"
              },
              {
                icon: Users,
                title: "Ease of use and interface familiarity 👥",
                description: "Familiar chat interface reduces learning curve to zero",
                bgColor: "from-purple-400 to-pink-500"
              }
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 group">
                <div className={`h-12 w-12 rounded-lg bg-gradient-to-br ${benefit.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="btn-primary group bg-green-600 hover:bg-green-700">
            <MessageCircle className="h-4 w-4" />
            Try WhatsApp Bot 🤖
          </button>
        </div>

        {/* Right Side - Enhanced Phone Mockup & QR with characters */}
        <div className="relative">
          <div className="flex items-center justify-center space-x-8">
            {/* iPhone Mockup with chat characters */}
            <div className="relative">
              <div className="w-64 h-96 gradient-card border-2 border-green-200/50 rounded-3xl p-4 animate-float shadow-2xl">
                <div className="h-full bg-gradient-to-b from-green-50/20 to-white/10 rounded-2xl p-4 space-y-4 backdrop-blur-sm">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center text-xs text-white">
                    <span>9:41</span>
                    <div className="flex space-x-1">
                      <div className="w-4 h-2 bg-green-400 rounded-sm"></div>
                      <div className="w-6 h-2 bg-white rounded-sm"></div>
                    </div>
                  </div>

                  {/* WhatsApp Header with bot character */}
                  <div className="flex items-center space-x-3 pb-4 border-b border-green-200/30">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                      <span className="text-white text-lg">🤖</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">LingoQuesto Bot</div>
                      <div className="text-xs text-green-200 flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
                        Online
                      </div>
                    </div>
                  </div>

                  {/* Chat Messages with fun styling */}
                  <div className="space-y-3">
                    <div className="bg-white/90 rounded-2xl rounded-bl-md p-3 text-xs shadow-sm">
                      <span className="text-purple-600">¡Hola! 👋 I'm your AI conversation partner. Ready to practice Spanish?</span>
                    </div>
                    <div className="bg-green-500 text-white rounded-2xl rounded-br-md p-3 text-xs ml-8 shadow-sm">
                      Yes, let's start! 🎉
                    </div>
                    <div className="bg-white/90 rounded-2xl rounded-bl-md p-3 text-xs shadow-sm">
                      <span className="text-purple-600">Great! Let's have a conversation about your hobbies... 🎨⚽📚</span>
                    </div>
                    
                    {/* Typing indicator */}
                    <div className="bg-white/90 rounded-2xl rounded-bl-md p-3 text-xs flex items-center space-x-1">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced QR Code */}
            <div className="text-center space-y-4">
              <div className="gradient-card border-2 border-green-200/50 p-6 hover-glow">
                <div className="w-32 h-32 bg-gradient-to-br from-white to-green-50 rounded-lg flex items-center justify-center relative overflow-hidden">
                  {/* QR Code pattern */}
                  <div className="w-24 h-24 bg-white rounded grid grid-cols-8 gap-0.5 p-1">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 w-1 ${
                          Math.random() > 0.5 ? "bg-black" : "bg-transparent"
                        }`}
                      />
                    ))}
                  </div>
                  {/* WhatsApp logo overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                      <MessageCircle className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-white">Scan to access 📱</p>
                <p className="text-xs text-green-200">WhatsApp Bot</p>
              </div>
            </div>
          </div>

          {/* Background Glow with WhatsApp colors */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-400/20 rounded-3xl blur-3xl -z-10 animate-pulse-slow"></div>
          
          {/* Fun floating elements */}
          <div className="absolute -top-4 left-8 text-2xl animate-bounce">💬</div>
          <div className="absolute -bottom-4 right-8 text-2xl animate-pulse">📱</div>
        </div>
      </div>
    </section>
  );
};

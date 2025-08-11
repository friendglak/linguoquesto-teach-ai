
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "My students like the speech activities! After a few weeks, I can already see improvements in their speaking skills.",
    author: "Alex Ubaque",
    role: "English Teacher",
    avatar: "AU"
  },
  {
    id: 2,
    quote: "LingoQuesto has transformed how I teach conversation skills. The AI feedback is incredibly accurate and helpful.",
    author: "Maria Rodriguez",
    role: "Spanish Teacher",
    avatar: "MR"
  },
  {
    id: 3,
    quote: "The platform saves me hours of preparation time while keeping my students more engaged than ever before.",
    author: "David Chen",
    role: "Language Coordinator",
    avatar: "DC"
  }
];

export const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section className="section-container">
      <div className="max-w-4xl mx-auto">
        <div className="gradient-card border border-primary-bright/30 p-8 lg:p-12 relative overflow-hidden">
          {/* Background Quote Icon */}
          <Quote className="absolute top-8 right-8 h-16 w-16 text-primary-bright/10" />
          
          {/* Testimonial Content */}
          <div className="relative z-10">
            <div className="text-center space-y-6">
              <blockquote className="text-xl lg:text-2xl font-medium leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary-bright to-purple-600 flex items-center justify-center text-white font-semibold">
                  {testimonials[currentIndex].avatar}
                </div>
                <div className="text-left">
                  <div className="font-semibold">{testimonials[currentIndex].author}</div>
                  <div className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={goToPrevious}
              className="btn-ghost p-2 hover-glow"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Indicators */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? "bg-primary-bright w-6" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="btn-ghost p-2 hover-glow"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

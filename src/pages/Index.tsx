
import { CheckCircle, MessageSquare, FileText, Clock, ArrowRight, Smartphone, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const scrollToSteps = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  const steps = [
    {
      number: "01",
      title: "Fill the Google Form",
      description: "Share your contact number + FAQs about your product",
      icon: FileText,
      color: "bg-red-600"
    },
    {
      number: "02", 
      title: "We Text You",
      description: "You'll receive WhatsApp messages based on what customers might ask",
      icon: MessageSquare,
      color: "bg-red-600"
    },
    {
      number: "03",
      title: "Test the Auto-Replies", 
      description: "Ask your own FAQs — we'll respond manually, mimicking automation",
      icon: CheckCircle,
      color: "bg-red-600"
    },
    {
      number: "04",
      title: "View Your Message Log",
      description: "Get a simple Google Sheet log of all replies and interactions",
      icon: Clock,
      color: "bg-red-600"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Save Hours Weekly",
      description: "Stop wasting time on repetitive WhatsApp messages"
    },
    {
      icon: Users,
      title: "Better Customer Service", 
      description: "Instant replies keep your customers happy"
    },
    {
      icon: TrendingUp,
      title: "Focus on Sales",
      description: "Spend time growing your business, not answering FAQs"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Smartphone className="h-8 w-8 text-red-600" />
            <span className="text-2xl font-bold text-white">Zorbase</span>
          </div>
          <Button variant="outline" className="hidden md:flex border-gray-600 text-white hover:bg-gray-800">
            Contact Us
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Automate Your WhatsApp.{" "}
            <span className="text-red-600">
              Save Time.
            </span>{" "}
            Focus on Sales.
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Zorbase helps small D2C brands handle WhatsApp conversations automatically — no coding, no tech setup.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={scrollToSteps}
            >
              Get Early Access – Fill This Form
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <p className="text-sm text-gray-400 max-w-md mx-auto">
            No automation setup needed. Just fill the form and experience the time-saving.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Perfect for Small D2C Brands
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-800">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600 text-white mb-6">
                    <benefit.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="container mx-auto px-4 py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the power of WhatsApp automation before you commit. 
              No setup required - just see the results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="border-gray-600 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group bg-gray-900">
                <CardContent className="p-8 text-center relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${step.color} text-white mb-6 shadow-lg`}>
                    <step.icon className="h-8 w-8" />
                  </div>
                  <div className="text-3xl font-bold text-gray-500 mb-2">{step.number}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-red-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Automate Your WhatsApp?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            This test is completely free. No commitment, no setup. 
            Just experience how automation could transform your business.
          </p>
          
          <Button 
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 animate-pulse"
          >
            Get Early Access – Fill This Form
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
          
          <p className="text-sm text-gray-400 mt-4 max-w-md mx-auto">
            Join small D2C brands who are already saving time with WhatsApp automation
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Smartphone className="h-6 w-6 text-red-600" />
              <span className="text-xl font-bold">Zorbase</span>
            </div>
            <div className="text-sm text-gray-400">
              © 2024 Zorbase. Saving time for D2C businesses everywhere.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

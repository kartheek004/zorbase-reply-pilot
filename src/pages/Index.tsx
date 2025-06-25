
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
      description: "Submit your WhatsApp number, product details & customer FAQs",
      icon: FileText,
      color: "bg-blue-500"
    },
    {
      number: "02", 
      title: "Receive WhatsApp Messages",
      description: "We'll message your number manually to simulate automation",
      icon: MessageSquare,
      color: "bg-green-500"
    },
    {
      number: "03",
      title: "Get a Conversation Log", 
      description: "We'll share a log of the messages you received",
      icon: CheckCircle,
      color: "bg-purple-500"
    },
    {
      number: "04",
      title: "See Time Savings",
      description: "You'll see how much time automation could save you",
      icon: Clock,
      color: "bg-orange-500"
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
      title: "Focus on Growth",
      description: "Spend time scaling your business, not answering FAQs"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Smartphone className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Zorbase</span>
          </div>
          <Button variant="outline" className="hidden md:flex">
            Contact Us
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Save Time by Automating{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              WhatsApp Replies
            </span>{" "}
            & Campaigns
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            For Your Small Business. Stop wasting hours on repetitive messages. 
            See how Zorbase could save you hours weekly on WhatsApp customer support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={scrollToSteps}
            >
              Start Free MVP Test
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <p className="text-sm text-gray-500 max-w-md mx-auto">
            No automation setup needed. Just fill the form and experience the time-saving.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-16 opacity-70">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-700">500+</div>
              <div className="text-sm text-gray-500">D2C Businesses</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-700">₹10Cr</div>
              <div className="text-sm text-gray-500">Revenue Range</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-700">50%</div>
              <div className="text-sm text-gray-500">Time Saved</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Perfect for Shopify Stores, YouTube Sellers & D2C Brands
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-green-500 text-white mb-6`}>
                    <benefit.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="container mx-auto px-4 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Our MVP Test Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the power of WhatsApp automation before you commit. 
              No setup required - just see the results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                <CardContent className="p-8 text-center relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${step.color} text-white mb-6 shadow-lg`}>
                    <step.icon className="h-8 w-8" />
                  </div>
                  <div className="text-3xl font-bold text-gray-300 mb-2">{step.number}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            The Problem Every D2C Owner Faces
          </h2>
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <p className="text-xl text-gray-700 mb-6 italic">
              "I spend 3-4 hours daily answering the same WhatsApp questions: 
              shipping details, product information, return policies..."
            </p>
            <p className="text-lg text-red-600 font-semibold">
              That's 20+ hours per week on repetitive tasks!
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl shadow-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">The Zorbase Solution</h3>
            <p className="text-lg opacity-90">
              Automate FAQ responses and customer campaigns so you can focus on 
              what matters - growing your business and serving customers better.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Save Hours on WhatsApp?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            This MVP test is completely free. No commitment, no setup. 
            Just experience how automation could transform your business.
          </p>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-12 py-4 text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 animate-pulse"
          >
            Start Free MVP Test Now
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
          
          <p className="text-sm text-gray-500 mt-4 max-w-md mx-auto">
            Join hundreds of D2C businesses who are already saving time with WhatsApp automation
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Smartphone className="h-6 w-6 text-blue-400" />
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

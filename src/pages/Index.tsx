
import { CheckCircle, MessageSquare, FileText, Clock, ArrowRight, Smartphone, Quote, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const scrollToSteps = () => {
    document.getElementById('how-it-works')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const openGoogleForm = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLScI7iSO9qkvk7NZw2ntzYsrmNVD4QvshQ3y_l1fpZLjVGccrg/viewform', '_blank');
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

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Smartphone className="h-6 w-6 md:h-8 md:w-8 text-red-600" />
            <span className="text-xl md:text-2xl font-bold text-white">Zorbase</span>
          </div>
          
          <div className="flex items-center space-x-2 text-white">
            <Phone className="h-4 w-4 md:h-5 md:w-5 text-red-600" />
            <span className="text-sm md:text-base font-medium">9100910404</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight px-2">
            Automate WhatsApp Replies & Campaigns for Your{" "}
            <span className="text-red-600">
              D2C Brand
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto px-4">
            Save time by auto-replying to customer FAQs and sending bulk messages — no app, no setup.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-3 text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              onClick={openGoogleForm}
            >
              Fill Form to Begin WhatsApp Demo
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </div>
          
          <p className="text-xs md:text-sm text-gray-400 max-w-md mx-auto px-4 mb-4">
            No automation setup needed. Just fill the form and experience the time-saving.
          </p>

          {/* Manual MVP Disclaimer - moved here */}
          <div className="mb-8">
            <Card className="border-yellow-600 bg-yellow-900/20 max-w-3xl mx-auto">
              <CardContent className="p-4 md:p-6 text-center">
                <p className="text-yellow-200 text-xs md:text-sm italic">
                  ⚠️ This is a pilot version of Zorbase. 
                  All responses and campaigns are currently handled manually by our team to understand your needs better. 
                  Automation is coming soon.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Signal Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 px-4">
            Trusted by early users from Shopify and Instagram stores.
          </p>
          
          <Card className="border-gray-700 shadow-lg bg-gray-800 max-w-2xl mx-auto">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start space-x-4">
                <Quote className="h-6 w-6 md:h-8 md:w-8 text-red-600 flex-shrink-0 mt-1" />
                <div className="text-left">
                  <p className="text-lg md:text-xl text-white italic mb-4">
                    "Saved me 3+ hours every week!"
                  </p>
                  <p className="text-sm md:text-base text-gray-400">
                    — Handmade Store Owner
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="container mx-auto px-4 py-16 md:py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 px-4">
              How It Works
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Experience the power of WhatsApp automation before you commit. 
              No setup required - just see the results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="border-gray-600 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group bg-gray-900">
                <CardContent className="p-6 md:p-8 text-center relative z-10">
                  <div className={`inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full ${step.color} text-white mb-4 md:mb-6 shadow-lg`}>
                    <step.icon className="h-6 w-6 md:h-8 md:w-8" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-500 mb-2">{step.number}</div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">{step.title}</h3>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">{step.description}</p>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-red-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 px-4">
            Ready to Automate Your WhatsApp?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 px-4">
            This test is completely free. No commitment, no setup. 
            Just experience how automation could transform your business.
          </p>
          
          <Button 
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white px-8 md:px-12 py-4 text-lg md:text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 mb-8 w-full sm:w-auto"
            onClick={openGoogleForm}
          >
            Fill Form to Begin WhatsApp Demo
            <ArrowRight className="ml-3 h-5 w-5 md:h-6 md:w-6" />
          </Button>

          {/* Privacy Notice */}
          <Card className="border-gray-700 bg-gray-800 max-w-2xl mx-auto">
            <CardContent className="p-4 md:p-6">
              <div className="text-xs md:text-sm text-gray-300 space-y-2">
                <p className="flex items-center justify-center space-x-2">
                  <span>🔐</span>
                  <span className="font-semibold">Privacy Notice</span>
                </p>
                <p>Your WhatsApp number and FAQ responses will only be used for this test.</p>
                <p>We will never spam or share your data.</p>
                <p>By submitting, you agree to receive WhatsApp messages from Zorbase for testing purposes.</p>
              </div>
            </CardContent>
          </Card>
          
          <p className="text-xs md:text-sm text-gray-400 mt-4 max-w-md mx-auto px-4">
            Join small D2C brands who are already saving time with WhatsApp automation
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Smartphone className="h-5 w-5 md:h-6 md:w-6 text-red-600" />
              <span className="text-lg md:text-xl font-bold">Zorbase</span>
            </div>
            <div className="text-xs md:text-sm text-gray-400 text-center">
              © 2025 Zorbase. Saving time for D2C businesses everywhere.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

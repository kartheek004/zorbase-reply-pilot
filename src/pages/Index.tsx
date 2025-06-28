
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
      gradient: "from-purple-500 to-pink-500"
    },
    {
      number: "02", 
      title: "We Text You",
      description: "You'll receive WhatsApp messages based on what customers might ask",
      icon: MessageSquare,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      number: "03",
      title: "Test the Auto-Replies", 
      description: "Ask your own FAQs — we'll respond manually, mimicking automation",
      icon: CheckCircle,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      number: "04",
      title: "View Your Message Log",
      description: "Get a simple Google Sheet log of all replies and interactions", 
      icon: Clock,
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500">
              <Smartphone className="h-6 w-6 md:h-7 md:w-7 text-white" />
            </div>
            <span className="text-2xl md:text-3xl font-bold text-white tracking-tight">ZORBASE</span>
          </div>
          
          <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700/50">
            <div className="p-1.5 rounded-full bg-gradient-to-r from-green-400 to-green-500">
              <Phone className="h-3 w-3 md:h-4 md:w-4 text-white" />
            </div>
            <span className="text-sm md:text-base font-medium text-gray-300">9100910404</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight px-2">
              Automate WhatsApp Replies & Campaigns for Your{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                D2C Brand
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto px-4 font-light leading-relaxed">
              Save time by auto-replying to customer FAQs and sending bulk messages — no app, no setup.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 hover:from-purple-700 hover:via-purple-800 hover:to-pink-700 text-white px-8 md:px-12 py-4 text-lg md:text-xl font-semibold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 w-full sm:w-auto border-0 rounded-2xl transform hover:scale-105"
              onClick={openGoogleForm}
            >
              Fill Form to Begin WhatsApp Demo
              <ArrowRight className="ml-3 h-5 w-5 md:h-6 md:w-6" />
            </Button>
          </div>
          
          <p className="text-sm md:text-base text-gray-500 max-w-lg mx-auto px-4 mb-6 font-light">
            No automation setup needed. Just fill the form and experience the time-saving.
          </p>

          {/* Manual MVP Disclaimer */}
          <div className="mb-8">
            <Card className="border-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 max-w-4xl mx-auto backdrop-blur-xl rounded-3xl">
              <CardContent className="p-6 md:p-8 text-center">
                <p className="text-yellow-300 text-sm md:text-base font-medium leading-relaxed">
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
          <p className="text-lg md:text-xl text-gray-400 mb-8 md:mb-10 px-4 font-light">
            Trusted by early users from Shopify and Instagram stores.
          </p>
          
          <Card className="border-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 max-w-3xl mx-auto backdrop-blur-xl rounded-3xl shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start space-x-6">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0">
                  <Quote className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-xl md:text-2xl text-white mb-4 font-medium">
                    "Saved me 3+ hours every week!"
                  </p>
                  <p className="text-base md:text-lg text-gray-400">
                    — Handmade Store Owner
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 px-4">
              How It Works
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto px-4 font-light leading-relaxed">
              Experience the power of WhatsApp automation before you commit. 
              No setup required - just see the results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-gray-800/30 to-gray-900/50 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 transform hover:scale-105 group">
                <CardContent className="p-8 md:p-10 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl" 
                       style={{background: `linear-gradient(135deg, var(--tw-gradient-stops))`}}></div>
                  
                  <div className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-gradient-to-r ${step.gradient} text-white mb-6 md:mb-8 shadow-2xl relative z-10`}>
                    <step.icon className="h-8 w-8 md:h-10 md:w-10" />
                  </div>
                  
                  <div className="text-3xl md:text-4xl font-bold text-gray-600 mb-4 relative z-10">{step.number}</div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 relative z-10">{step.title}</h3>
                  <p className="text-base md:text-lg text-gray-400 leading-relaxed font-light relative z-10">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 px-4">
            Ready to Automate Your WhatsApp?
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 px-4 font-light leading-relaxed">
            This test is completely free. No commitment, no setup. 
            Just experience how automation could transform your business.
          </p>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 hover:from-purple-700 hover:via-purple-800 hover:to-pink-700 text-white px-12 md:px-16 py-5 text-xl md:text-2xl font-semibold shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 mb-12 w-full sm:w-auto border-0 rounded-2xl transform hover:scale-105"
            onClick={openGoogleForm}
          >
            Fill Form to Begin WhatsApp Demo
            <ArrowRight className="ml-4 h-6 w-6 md:h-7 md:w-7" />
          </Button>

          {/* Privacy Notice */}
          <Card className="border-0 bg-gradient-to-br from-gray-800/30 to-gray-900/50 max-w-3xl mx-auto backdrop-blur-xl rounded-3xl">
            <CardContent className="p-6 md:p-8">
              <div className="text-sm md:text-base text-gray-400 space-y-3 font-light leading-relaxed">
                <p className="flex items-center justify-center space-x-3">
                  <span className="text-xl">🔐</span>
                  <span className="font-semibold text-gray-300">Privacy Notice</span>
                </p>
                <p>Your WhatsApp number and FAQ responses will only be used for this test.</p>
                <p>We will never spam or share your data.</p>
                <p>By submitting, you agree to receive WhatsApp messages from Zorbase for testing purposes.</p>
              </div>
            </CardContent>
          </Card>
          
          <p className="text-sm md:text-base text-gray-500 mt-6 max-w-lg mx-auto px-4 font-light">
            Join small D2C brands who are already saving time with WhatsApp automation
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-xl border-t border-gray-800/50 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500">
                <Smartphone className="h-6 w-6 md:h-7 md:w-7 text-white" />
              </div>
              <span className="text-xl md:text-2xl font-bold">ZORBASE</span>
            </div>
            <div className="text-sm md:text-base text-gray-400 text-center">
              © 2025 Zorbase. Saving time for D2C businesses everywhere.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

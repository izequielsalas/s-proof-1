// src/App.jsx
import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Clock, DollarSign, Mail, FileText, Smartphone, Menu, X } from 'lucide-react';
import WaitlistForm from './components/WaitlistForm';

// Your existing Button component
const Button = ({ children, className = '', variant = 'primary', size = 'default', disabled = false, onClick, ...props }) => {
  const baseClasses = 'rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 touch-manipulation disabled:opacity-50 disabled:cursor-not-allowed';
  
  const sizes = {
    small: 'px-4 py-2 text-sm min-h-[40px]',
    default: 'px-6 py-3 text-base min-h-[48px]',
    large: 'px-8 py-4 text-lg min-h-[56px]'
  };
  
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl disabled:hover:bg-blue-600',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
  };
  
  return (
    <button 
      className={`${baseClasses} ${sizes[size]} ${variants[variant]} ${className}`} 
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

// Your existing GlassCard component
const GlassCard = ({ children, className = '' }) => {
  return (
    <div className={`backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl p-4 sm:p-6 shadow-xl ${className}`}>
      {children}
    </div>
  );
};

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showWaitlist, setShowWaitlist] = useState(false);

  // Handle waitlist signup
  const handleSignup = () => {
    setShowWaitlist(true);
  };

  // Function to access existing app (for login)
  const handleLogin = () => {
    window.open('https://proofingapp1.web.app', '_blank');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeWaitlist = () => {
    setShowWaitlist(false);
  };

  const handleWaitlistSuccess = () => {
    // Waitlist form will show success message
    // Keep modal open so user can see confirmation
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl sm:text-2xl font-bold text-white">
              S-Proof
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#pricing" className="text-white/80 hover:text-white transition-colors">Pricing</a>
              <a href="#demo" className="text-white/80 hover:text-white transition-colors">Demo</a>
              <Button variant="outline" size="small" onClick={handleLogin}>Login</Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white p-2 touch-manipulation"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-white/10">
              <div className="flex flex-col gap-4 pt-4">
                <a href="#pricing" className="text-white/80 hover:text-white transition-colors text-center py-2">Pricing</a>
                <a href="#demo" className="text-white/80 hover:text-white transition-colors text-center py-2">Demo</a>
                <Button variant="outline" size="default" onClick={handleLogin} className="w-full">
                  Login
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-600/20 text-blue-200 px-3 py-2 rounded-full inline-block mb-6 text-sm sm:text-base">
            ⭐ Built by 12+ year print industry veteran
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Stop Losing Money On 
            <span className="block sm:inline text-blue-400"> Proof Revisions</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform email chaos into a professional 3-step workflow. Get client approvals 3x faster 
            and save $600+ monthly in labor costs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-12">
            <Button size="large" onClick={handleSignup} className="w-full sm:w-auto">
              Join Early Access <ArrowRight size={20} />
            </Button>
            <Button variant="outline" size="large" className="w-full sm:w-auto">
              Watch 2-Min Demo (coming soon)
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} />
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} />
              5-minute setup
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Problem */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              The Email Nightmare Costing You Money
            </h2>
            
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex items-start gap-3 text-red-300">
                <Mail className="mt-1 flex-shrink-0" size={20} />
                <span className="text-sm sm:text-base">Proofs get lost in spam folders and buried inboxes</span>
              </div>
              <div className="flex items-start gap-3 text-red-300">
                <Clock className="mt-1 flex-shrink-0" size={20} />
                <span className="text-sm sm:text-base">3+ days average approval time kills your workflow</span>
              </div>
              <div className="flex items-start gap-3 text-red-300">
                <DollarSign className="mt-1 flex-shrink-0" size={20} />
                <span className="text-sm sm:text-base">Delayed approvals cost $2,000+ monthly in lost revenue</span>
              </div>
              <div className="flex items-start gap-3 text-red-300">
                <FileText className="mt-1 flex-shrink-0" size={20} />
                <span className="text-sm sm:text-base">Version confusion leads to expensive reprints</span>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="order-1 lg:order-2">
            <GlassCard>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                The S-Proof Solution
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3 text-green-300">
                  <CheckCircle className="mt-1 flex-shrink-0" size={20} />
                  <span className="text-sm sm:text-base"><strong>Upload →</strong> Drag & drop your proof files</span>
                </div>
                <div className="flex items-start gap-3 text-green-300">
                  <CheckCircle className="mt-1 flex-shrink-0" size={20} />
                  <span className="text-sm sm:text-base"><strong>Send Link →</strong> Client gets mobile-friendly portal</span>
                </div>
                <div className="flex items-start gap-3 text-green-300">
                  <CheckCircle className="mt-1 flex-shrink-0" size={20} />
                  <span className="text-sm sm:text-base"><strong>Get Approval →</strong> Real-time notifications & billing</span>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-600/20 rounded-lg">
                <p className="text-blue-200 text-sm">
                  <strong>Result:</strong> 3 days → 8 hours average approval time
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
            Built By Print People, For Print People
          </h2>

          <GlassCard className="text-center">
            <div className="flex justify-center mb-4 text-3xl sm:text-4xl">
              🏭
            </div>
            <blockquote className="text-base sm:text-lg text-white mb-4 leading-relaxed">
              "After 12 years at Cesargraphics, I know exactly how email-based proofing kills profits. 
              S-Proof solves the workflow problems I've watched print shops struggle with for over a decade."
            </blockquote>
            <cite className="text-blue-300 text-sm sm:text-base">
              — Isaac Salas, Founder & Computer Science Graduate
            </cite>
          </GlassCard>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
          Why Print Shops Love S-Proof
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <GlassCard>
            <Smartphone className="text-blue-400 mb-3 sm:mb-4" size={32} />
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Mobile-First Design</h3>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">Clients approve proofs from their phones. No apps to download, works in any browser.</p>
          </GlassCard>

          <GlassCard>
            <Clock className="text-blue-400 mb-3 sm:mb-4" size={32} />
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Real-Time Notifications</h3>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">Know instantly when clients approve, request changes, or need follow-up.</p>
          </GlassCard>

          <GlassCard className="md:col-span-2 lg:col-span-1">
            <DollarSign className="text-blue-400 mb-3 sm:mb-4" size={32} />
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Billing Integration</h3>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">Automatically bill for approved changes. Never lose money on scope creep again.</p>
          </GlassCard>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
            Simple, Transparent Pricing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <GlassCard>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Starter</h3>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">FREE</div>
              <ul className="space-y-2 text-white/80 mb-6 text-sm sm:text-base">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                  Up to 10 proofs/month
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                  Basic client portal
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                  Email notifications
                </li>
              </ul>
              <Button variant="outline" className="w-full" onClick={handleSignup}>
                Join Waitlist
              </Button>
            </GlassCard>

            <GlassCard className="border-blue-400/50">
              <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm inline-block mb-4">
                Most Popular
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Professional</h3>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">$37<span className="text-base sm:text-lg text-white/60">/month</span></div>
              <div className="text-green-400 text-sm mb-4">Save 30% with annual plan</div>
              <ul className="space-y-2 text-white/80 mb-6 text-sm sm:text-base">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                  100GB storage
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                  Billing integration
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                  Custom branding
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                  Priority support
                </li>
              </ul>
              <Button className="w-full" onClick={handleSignup}>
                Join Early Access
              </Button>
            </GlassCard>
          </div>

          <div className="text-center mt-6 sm:mt-8">
            <p className="text-white/60 text-sm sm:text-base">
              💡 <strong className="text-white">Projected ROI:</strong> Save $600+ monthly in labor costs vs. email-based workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Ready to Transform Your Proof Process?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 leading-relaxed">
            Join the waitlist for early access. Currently implementing at Cesargraphics 
            with plans to expand to more printshops, graphic designers, photographers, and agencies across Arizona.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="large" onClick={handleSignup} className="w-full sm:w-auto">
              Join Early Access <ArrowRight size={20} />
            </Button>
            <Button variant="outline" size="large" className="w-full sm:w-auto">
              Watch Demo Video (coming soon)
            </Button>
          </div>

          <p className="text-white/60 text-sm mt-6">
            Questions? Email isaac@s-proof.app
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 border-t border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">S-Proof</div>
            <p className="text-white/60 text-sm leading-relaxed">
              Professional proofing software built by print industry experts.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Product</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Demo</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Legal</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-white/60 text-sm">
          <p>&copy; 2025 S-Proof. Built by Isaac Salas in Phoenix, Arizona.</p>
        </div>
      </footer>

      {/* Waitlist Modal */}
      {showWaitlist && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
          <div className="max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <WaitlistForm 
              onSuccess={handleWaitlistSuccess}
              onClose={closeWaitlist}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
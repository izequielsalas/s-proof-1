import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Clock, DollarSign, Users, Mail, FileText, Smartphone } from 'lucide-react';

// Reusable Button component from your personal site style
const Button = ({ children, className = '', variant = 'primary', ...props }) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2';
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
  };
  
  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

// Glass Card component from your personal site style
const GlassCard = ({ children, className = '' }) => {
  return (
    <div className={`backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl p-6 shadow-xl ${className}`}>
      {children}
    </div>
  );
};

const SProofHomepage = () => {
  const [email, setEmail] = useState('');

  const handleSignup = () => {
    // This would redirect to proofingapp1.web.app signup
    window.open('https://proofingapp1.web.app', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            S-Proof
          </div>
          <div className="flex items-center gap-4">
            <a href="#pricing" className="text-white/80 hover:text-white transition-colors">Pricing</a>
            <a href="#demo" className="text-white/80 hover:text-white transition-colors">Demo</a>
            <Button variant="outline" onClick={handleSignup}>Login</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-600/20 text-blue-200 px-4 py-2 rounded-full inline-block mb-6">
            ⭐ Built by 12+ year print industry veteran
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Stop Losing Money On 
            <span className="text-blue-400"> Proof Revisions</span>
          </h1>
          
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Transform email chaos into a professional 3-step workflow. Get client approvals 3x faster 
            and save $600+ monthly in labor costs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="text-lg px-8 py-4" onClick={handleSignup}>
              Join Early Access <ArrowRight size={20} />
            </Button>
            <Button variant="outline" className="text-lg px-8 py-4">
              Watch 2-Min Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex justify-center items-center gap-8 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} />
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} />
              5-minute setup
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} />
              Used by 50+ shops
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Problem */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              The Email Nightmare Costing You Money
            </h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 text-red-300">
                <Mail className="mt-1 flex-shrink-0" size={20} />
                <span>Proofs get lost in spam folders and buried inboxes</span>
              </div>
              <div className="flex items-start gap-3 text-red-300">
                <Clock className="mt-1 flex-shrink-0" size={20} />
                <span>3+ days average approval time kills your workflow</span>
              </div>
              <div className="flex items-start gap-3 text-red-300">
                <DollarSign className="mt-1 flex-shrink-0" size={20} />
                <span>Delayed approvals cost $2,000+ monthly in lost revenue</span>
              </div>
              <div className="flex items-start gap-3 text-red-300">
                <FileText className="mt-1 flex-shrink-0" size={20} />
                <span>Version confusion leads to expensive reprints</span>
              </div>
            </div>
          </div>

          {/* Solution */}
          <GlassCard>
            <h3 className="text-2xl font-bold text-white mb-6">
              The S-Proof Solution
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-green-300">
                <CheckCircle className="mt-1 flex-shrink-0" size={20} />
                <span><strong>Upload →</strong> Drag & drop your proof files</span>
              </div>
              <div className="flex items-start gap-3 text-green-300">
                <CheckCircle className="mt-1 flex-shrink-0" size={20} />
                <span><strong>Send Link →</strong> Client gets mobile-friendly portal</span>
              </div>
              <div className="flex items-start gap-3 text-green-300">
                <CheckCircle className="mt-1 flex-shrink-0" size={20} />
                <span><strong>Get Approval →</strong> Real-time notifications & billing</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-600/20 rounded-lg">
              <p className="text-blue-200 text-sm">
                <strong>Result:</strong> 3 days → 8 hours average approval time
              </p>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Social Proof */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Built By Print People, For Print People
          </h2>

          <GlassCard className="text-center">
            <div className="flex justify-center mb-4">
              🏭
            </div>
            <blockquote className="text-lg text-white mb-4">
              "After 12 years at Cesargraphics, I know exactly how email-based proofing kills profits. 
              S-Proof solves the workflow problems I've watched print shops struggle with for over a decade."
            </blockquote>
            <cite className="text-blue-300">
              — Isaac Salas, Founder & Computer Science Graduate
            </cite>
          </GlassCard>
        </div>
      </section>

      {/* Features/Benefits */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Built BY Print People, FOR Print People
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <GlassCard>
            <Smartphone className="text-blue-400 mb-4" size={32} />
            <h3 className="text-xl font-bold text-white mb-3">Mobile-First Design</h3>
            <p className="text-white/80">Clients approve proofs from their phones. No apps to download, works in any browser.</p>
          </GlassCard>

          <GlassCard>
            <Clock className="text-blue-400 mb-4" size={32} />
            <h3 className="text-xl font-bold text-white mb-3">Real-Time Notifications</h3>
            <p className="text-white/80">Know instantly when clients approve, request changes, or need follow-up.</p>
          </GlassCard>

          <GlassCard>
            <DollarSign className="text-blue-400 mb-4" size={32} />
            <h3 className="text-xl font-bold text-white mb-3">Billing Integration</h3>
            <p className="text-white/80">Automatically bill for approved changes. Never lose money on scope creep again.</p>
          </GlassCard>
        </div>

        <div className="text-center mt-12">
          <p className="text-white/60 text-sm mb-4">
            Built by Isaac Salas - Computer Science graduate with 12+ years in the print industry
          </p>
          <p className="text-blue-300">
            "Finally, proofing software that understands print shops"
          </p>
        </div>
      </section>

      {/* Pricing Preview */}
      <section id="pricing" className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Simple, Transparent Pricing
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <GlassCard>
              <h3 className="text-xl font-bold text-white mb-4">Starter</h3>
              <div className="text-3xl font-bold text-white mb-4">FREE</div>
              <ul className="space-y-2 text-white/80 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400" />
                  Up to 10 proofs/month
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400" />
                  Basic client portal
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400" />
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
              <h3 className="text-xl font-bold text-white mb-4">Professional</h3>
              <div className="text-3xl font-bold text-white mb-1">$97<span className="text-lg text-white/60">/month</span></div>
              <div className="text-green-400 text-sm mb-4">Save $67/month with annual plan</div>
              <ul className="space-y-2 text-white/80 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400" />
                  Unlimited proofs
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400" />
                  Billing integration
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400" />
                  Custom branding
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400" />
                  Priority support
                </li>
              </ul>
              <Button className="w-full" onClick={handleSignup}>
                Join Early Access
              </Button>
            </GlassCard>
          </div>

          <div className="text-center mt-8">
            <p className="text-white/60">
              💡 <strong className="text-white">Projected ROI:</strong> Save $600+ monthly in labor costs vs. email-based workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Proof Process?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Join the waitlist for early access. Currently implementing at Cesargraphics 
            with plans to expand to print shops across Arizona.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="text-lg px-8 py-4" onClick={handleSignup}>
              Join Early Access <ArrowRight size={20} />
            </Button>
            <Button variant="outline" className="text-lg px-8 py-4">
              Watch Demo Video
            </Button>
          </div>

          <p className="text-white/60 text-sm mt-6">
            Questions? Email isaac@s-proof.app or call (480) 555-PROOF
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-white/10">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-xl font-bold text-white mb-4">S-Proof</div>
            <p className="text-white/60 text-sm">
              Professional proofing software built by print industry experts.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Demo</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60 text-sm">
          <p>&copy; 2025 S-Proof. Built by Isaac Salas in Phoenix, Arizona.</p>
        </div>
      </footer>
    </div>
  );
};

export default SProofHomepage;
// src/components/WaitlistForm.jsx - Clean AJAX Version
import React, { useState } from 'react';
import { ArrowRight, Loader2, X } from 'lucide-react';

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

const GlassCard = ({ children, className = '' }) => {
  return (
    <div className={`backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl p-4 sm:p-6 shadow-xl ${className}`}>
      {children}
    </div>
  );
};

const WaitlistForm = ({ onSuccess, onClose, className = '' }) => {
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Your actual Formspree form ID
  const FORMSPREE_FORM_ID = 'mjkrdoya';

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          company_name: companyName,
          business_type: businessType,
          source: 'S-Proof Website',
          timestamp: new Date().toISOString(),
          _subject: `New S-Proof waitlist signup from ${companyName || email}`
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('✅ Submission successful:', result);
        
        setIsSubmitted(true);
        if (onSuccess) onSuccess();
        
        // Track conversion with Google Analytics if available
        if (typeof gtag !== 'undefined') {
          gtag('event', 'waitlist_signup', {
            event_category: 'conversion',
            event_label: businessType || 'unknown',
            value: 1
          });
        }
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('❌ Submission failed:', {
          status: response.status,
          statusText: response.statusText,
          data: errorData
        });
        
        // Handle specific error cases
        if (response.status === 403 && errorData.error?.includes('reCAPTCHA')) {
          setError('Please disable reCAPTCHA in your Formspree form settings for AJAX submissions.');
        } else if (response.status === 422) {
          setError('Please check your email address and try again.');
        } else if (response.status === 429) {
          setError('Too many requests. Please wait a moment and try again.');
        } else {
          setError(`Server error (${response.status}). Please try again.`);
        }
      }
    } catch (err) {
      console.error('❌ Network error:', err);
      
      if (err.name === 'TypeError' && err.message.includes('Failed to fetch')) {
        setError('Network error. Please check your internet connection and try again.');
      } else {
        setError(`Unexpected error: ${err.message}`);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <GlassCard className={`text-center relative ${className}`}>
        {onClose && (
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        )}
        
        <div className="text-green-400 text-5xl mb-6">✅</div>
        <h3 className="text-2xl font-bold text-white mb-4">You're on the list!</h3>
        <p className="text-white/80 mb-6 text-lg">
          Welcome to S-Proof early access! We'll notify you when it's ready for your business.
        </p>
        
        <div className="bg-blue-600/20 p-4 rounded-lg mb-6 text-left">
          <p className="text-blue-200 text-sm">
            <strong>What happens next:</strong><br/>
            📧 Demo video in your inbox this week<br/>
            🚀 Early access invitation in 2-3 weeks<br/>
            💰 50% launch discount for first 100 customers<br/>
            🎯 Priority setup assistance
          </p>
        </div>
        
        <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 p-4 rounded-lg mb-6">
          <p className="text-white text-sm">
            <strong>🎁 Your Early Access Benefits:</strong><br/>
            ✓ 50% off professional plan ($48.50/month vs $97)<br/>
            ✓ Free setup and onboarding call<br/>
            ✓ Direct access to Isaac (the founder)<br/>
            ✓ Input on product features and roadmap
          </p>
        </div>
        
        <div className="bg-white/10 p-4 rounded-lg mb-6">
          <p className="text-white text-sm">
            <strong>Questions or want to chat?</strong><br/>
            📧 Email: <span className="text-blue-300">isaac@s-proof.app</span><br/>
            📞 Call: <span className="text-blue-300">(480) 555-PROOF</span><br/>
            💬 LinkedIn: <span className="text-blue-300">isaac-salas-74825819a</span>
          </p>
        </div>
        
        {onClose && (
          <Button variant="outline" onClick={onClose} className="w-full">
            Close
          </Button>
        )}
      </GlassCard>
    );
  }

  return (
    <GlassCard className={`relative ${className}`}>
      {onClose && (
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors z-10"
        >
          <X size={20} />
        </button>
      )}
      
      <div className="text-center mb-6">
        <div className="text-blue-400 text-4xl mb-4">🚀</div>
        <h3 className="text-xl font-bold text-white mb-3">Join Early Access</h3>
        <p className="text-white/80 text-sm mb-3">
          Be among the first 100 businesses to get S-Proof at launch pricing
        </p>
        <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 p-3 rounded-lg">
          <p className="text-green-400 text-sm font-medium">
            ⚡ 50% off for early adopters • 🎯 Priority setup assistance • 📞 Direct founder access
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="waitlist-email" className="block text-white text-sm font-medium mb-2">
            Work Email* <span className="text-white/60">(We'll never spam you)</span>
          </label>
          <input
            type="email"
            id="waitlist-email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your.email@company.com"
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
            required
          />
        </div>

        <div>
          <label htmlFor="waitlist-company" className="block text-white text-sm font-medium mb-2">
            Company Name <span className="text-white/60">(Optional)</span>
          </label>
          <input
            type="text"
            id="waitlist-company"
            name="company_name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Acme Print Shop"
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label htmlFor="waitlist-business-type" className="block text-white text-sm font-medium mb-2">
            Business Type <span className="text-white/60">(Helps us prioritize features)</span>
          </label>
          <select
            id="waitlist-business-type"
            name="business_type"
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
          >
            <option value="" className="bg-gray-800">Select your business type</option>
            <option value="print-shop" className="bg-gray-800">🖨️ Print Shop (Our specialty!)</option>
            <option value="design-agency" className="bg-gray-800">🎨 Design Agency</option>
            <option value="marketing-company" className="bg-gray-800">📈 Marketing Company</option>
            <option value="freelancer" className="bg-gray-800">👨‍💻 Freelance Designer</option>
            <option value="other" className="bg-gray-800">🏢 Other</option>
          </select>
        </div>

        {error && (
          <div className="text-red-400 text-sm bg-red-900/20 p-3 rounded-lg border border-red-500/20">
            ⚠️ {error}
          </div>
        )}

        <Button 
          type="submit"
          className="w-full" 
          disabled={isSubmitting || !email.trim()}
          size="large"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              Joining Waitlist...
            </>
          ) : (
            <>
              Join Early Access
              <ArrowRight size={20} />
            </>
          )}
        </Button>

        <div className="text-center text-white/60 text-xs leading-relaxed">
          No spam, ever. We'll only email you when S-Proof is ready.<br/>
          <span className="text-blue-300">Built by Isaac Salas • 12+ years in print industry</span>
        </div>
      </form>
    </GlassCard>
  );
};

export default WaitlistForm;
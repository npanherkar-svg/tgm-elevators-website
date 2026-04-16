/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  ArrowRight, 
  ChevronRight, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Zap, 
  Settings, 
  Clock, 
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  Send,
  User,
  Bot,
  Facebook,
  Instagram
} from "lucide-react";
import { useState, useEffect } from "react";

const XIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.482 2.395H4.295L17.607 20.65z" />
  </svg>
);

const Logo = ({ light = false }: { light?: boolean }) => (
  <div className="flex items-center gap-3 group cursor-pointer">
    <div className={`w-12 h-14 flex items-center justify-center transition-transform group-hover:scale-105`}>
      <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-gold">
        {/* Outer Shield */}
        <path d="M50 5L10 25V60C10 85 50 115 50 115C50 115 90 85 90 60V25L50 5Z" stroke="currentColor" strokeWidth="4" fill="none"/>
        {/* Inner Shield */}
        <path d="M50 15L20 30V60C20 80 50 105 50 105C50 105 80 80 80 60V30L50 15Z" stroke="currentColor" strokeWidth="2" fill="none"/>
        {/* Doors */}
        <rect x="35" y="35" width="30" height="45" stroke="currentColor" strokeWidth="2" fill="none"/>
        <line x1="50" y1="35" x2="50" y2="80" stroke="currentColor" strokeWidth="2"/>
        {/* Up Arrow */}
        <path d="M42 60L42 50M42 50L38 54M42 50L46 54" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Down Arrow */}
        <path d="M58 55L58 65M58 65L54 61M58 65L62 61" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
    <div className="flex flex-col -space-y-1">
      <span className={`text-2xl font-black tracking-tighter ${light ? "text-white" : "text-london-blue"}`}>
        TGM ELEVATOR
      </span>
      <span className="text-[10px] font-bold tracking-[0.4em] text-gold uppercase">
        LIMITED
      </span>
    </div>
  </div>
);

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Emergency Bar */}
      <div className="bg-gold text-london-blue py-2 px-6 text-center text-[10px] font-bold uppercase tracking-[0.2em] relative z-[60]">
        Need emergency help? Call right away: <a href="tel:+447345826679" className="underline hover:opacity-80 transition-opacity">+44 7345826679</a>
      </div>
      
      <header 
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled ? "bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 top-0" : "bg-transparent py-6 top-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Logo />
          </motion.div>

          <nav className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-widest text-london-blue">
            {["Services", "Modernization", "About", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="hover:text-gold transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <a href="tel:+447345826679" className="flex items-center gap-2 text-london-blue font-bold hover:text-gold transition-colors">
              <Phone size={16} className="text-gold" />
              <span className="text-sm">+44 7345826679</span>
            </a>
          </div>

          <button 
            className="md:hidden text-london-blue"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-6 md:hidden shadow-xl"
          >
            {["Services", "Modernization", "About", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-lg font-bold text-london-blue hover:text-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-100">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Emergency Support</p>
              <a href="tel:+447345826679" className="text-xl font-bold text-london-blue flex items-center gap-2">
                <Phone size={20} className="text-gold" /> +44 7345826679
              </a>
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section className="relative pt-56 pb-20 px-6 overflow-hidden bg-gray-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3">
            <span className="w-12 h-[1px] bg-gold" />
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-[10px]">Professional Lift Services UK</span>
          </div>
          <h1 className="text-6xl lg:text-8xl font-extrabold leading-[0.9] text-london-blue tracking-tighter">
            Elevating Standards, <br />
            <span className="text-gold italic font-serif font-normal text-4xl lg:text-6xl">Ultimate Focus. Every Scope. Every Time.</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-lg leading-relaxed font-medium">
            Professional lift maintenance, repair, modernisation, and installation services across the UK — delivered with safety, reliability, and care.
          </p>
          <div className="flex flex-wrap gap-6 pt-4">
            <button className="bg-london-blue text-white px-10 py-5 font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 group border border-gold/20">
              Get a Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-gold" />
            </button>
            <a href="#services" className="text-london-blue font-bold px-4 py-5 flex items-center gap-2 hover:gap-4 transition-all">
              Our Services <ChevronRight size={18} className="text-gold" />
            </a>
          </div>
        </motion.div>

        <motion.div 
          style={{ y: y1 }}
          className="relative"
        >
          <div className="aspect-[4/5] bg-platinum rounded-3xl overflow-hidden shadow-2xl relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000" 
              alt="Modern Elevator Interior"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-1000 scale-110 hover:scale-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-london-blue/10 mix-blend-multiply" />
          </div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl" />
          
          {/* Floating Badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-6 top-1/4 z-20 bg-white p-6 shadow-xl rounded-2xl border border-gold/20 hidden md:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-gold">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Safety First</p>
                <p className="text-lg font-extrabold text-london-blue">LEIA Accredited</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Safety First",
      desc: "We adhere to the strictest safety standards in the industry, ensuring peace of mind for every passenger.",
      icon: <ShieldCheck size={32} />
    },
    {
      title: "Reliability",
      desc: "Our maintenance programs are designed to minimize downtime and maximize the lifespan of your equipment.",
      icon: <CheckCircle2 size={32} />
    },
    {
      title: "Expert Team",
      desc: "Our engineers are highly trained and experienced in all types of lift systems, from legacy to cutting-edge.",
      icon: <Settings size={32} />
    },
    {
      title: "24/7 Support",
      desc: "We provide round-the-clock emergency support to ensure your lifts are always operational when you need them.",
      icon: <Clock size={32} />
    }
  ];

  return (
    <section id="about" className="py-32 px-6 bg-london-blue text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 space-y-4">
          <span className="text-gold font-bold tracking-widest uppercase text-xs">Why Choose TGM Elevators</span>
          <h2 className="text-5xl font-extrabold tracking-tight">Innovative Elevator Solutions</h2>
          <p className="text-blue-100 max-w-2xl mx-auto font-medium">
            For a smarter, safer future. We don't just maintain lifts; we elevate the entire experience of vertical transportation.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
            >
              <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
              <p className="text-blue-100/70 text-sm leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The team at TGM Elevators are true professionals. Their efficient approach covered every aspect, from installation to excellent after-sales support.",
      author: "James Wilson",
      role: "Property Manager, London"
    },
    {
      quote: "Reliable, fast, and always there when we need them. Their modernization project transformed our building's efficiency.",
      author: "Sarah Thompson",
      role: "Facility Director"
    }
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-london-blue">What Our Clients Say</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-12 rounded-[2rem] bg-gray-50 border border-gray-100 relative"
            >
              <div className="text-gold mb-6 italic text-4xl font-serif">"</div>
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8 italic">
                {t.quote}
              </p>
              <div>
                <p className="font-bold text-london-blue">{t.author}</p>
                <p className="text-xs font-bold text-gold uppercase tracking-widest">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Newsletter = () => {
  return (
    <section className="py-20 px-6 bg-gray-50 border-t border-gray-100">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-extrabold text-london-blue">Stay Updated</h2>
          <p className="text-slate-500 font-medium">Sign up for our newsletter to get the latest information, news, and free insights into the elevator industry.</p>
        </div>
        <form className="flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-1 bg-white border border-gray-200 rounded-full px-8 py-4 focus:outline-none focus:border-gold transition-colors"
          />
          <button className="bg-london-blue text-white px-10 py-4 rounded-full font-bold hover:bg-gold hover:text-london-blue transition-all duration-300 shadow-lg">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Installation",
      desc: "Precision installation of modern lift systems, managed by our expert engineering team from initial design to final commissioning.",
      icon: <Settings className="mb-6" size={32} />,
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Repair & Maintenance",
      desc: "Specialized car top maintenance and technical repairs. Our engineers ensure every safety component is rigorously tested.",
      icon: <ShieldCheck className="mb-6" size={32} />,
      image: "https://images.unsplash.com/photo-1621905235277-f25426dc51f8?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Modernization",
      desc: "Detailed site surveys and technical planning. We analyze your existing infrastructure to design the perfect upgrade path.",
      icon: <Zap className="mb-6" size={32} />,
      image: "https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="services" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <span className="text-gold font-bold tracking-widest uppercase text-xs">Our Expertise</span>
            <h2 className="text-5xl font-extrabold text-london-blue tracking-tight">Engineering Solutions</h2>
          </div>
          <p className="text-slate-500 max-w-md font-medium">
            We combine British engineering heritage with modern technology to deliver vertical transport that moves people safely and efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative bg-gray-50 rounded-3xl overflow-hidden p-10 hover:bg-london-blue transition-all duration-500 border border-transparent hover:border-gold/30"
            >
              <div className="relative z-10">
                <div className="text-gold group-hover:text-gold transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-bold mb-4 text-london-blue group-hover:text-white transition-colors italic font-serif">
                  {service.title}
                </h3>
                <p className="text-slate-500 group-hover:text-blue-100 transition-colors leading-relaxed mb-8">
                  {service.desc}
                </p>
                <button className="flex items-center gap-2 text-gold font-bold group-hover:text-gold transition-colors">
                  Learn More <ArrowRight size={16} />
                </button>
              </div>
              
              {/* Background Image on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden grid lg:grid-cols-2">
        <div className="p-12 lg:p-20 space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-extrabold text-london-blue">Let's Elevate Your Project</h2>
            <p className="text-slate-500 font-medium">Our consultants are ready to discuss your vertical transport needs.</p>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-gold shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Call Us</p>
                <p className="text-xl font-bold text-london-blue">+44 7345826679</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-gold shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email</p>
                <p className="text-xl font-bold text-london-blue">info@tgmelevators.co.uk</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-gold shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Office</p>
                <p className="text-xl font-bold text-london-blue">Canary Wharf, London, E14</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-london-blue p-12 lg:p-20 text-white border-l border-gold/20">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest opacity-60">Full Name</label>
                <input type="text" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest opacity-60">Email Address</label>
                <input type="email" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest opacity-60">Service Required</label>
              <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors appearance-none">
                <option className="bg-london-blue">New Installation</option>
                <option className="bg-london-blue">Maintenance</option>
                <option className="bg-london-blue">Modernization</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest opacity-60">Message</label>
              <textarea rows={4} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors resize-none"></textarea>
            </div>
            <button className="w-full bg-gold py-4 rounded-xl font-bold hover:bg-gold/80 transition-colors shadow-lg text-london-blue">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-2 space-y-8">
          <Logo />
          <p className="text-slate-500 max-sm font-medium leading-relaxed">
            Leading the way in vertical transportation across London and the UK. Committed to safety, innovation, and engineering excellence.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-london-blue hover:bg-gold hover:text-white transition-all cursor-pointer border border-transparent hover:border-gold/30">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-london-blue hover:bg-gold hover:text-white transition-all cursor-pointer border border-transparent hover:border-gold/30">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-london-blue hover:bg-gold hover:text-white transition-all cursor-pointer border border-transparent hover:border-gold/30">
              <XIcon size={16} />
            </a>
          </div>
        </div>
        
        <div className="space-y-6">
          <h4 className="font-bold text-london-blue uppercase tracking-widest text-xs">Quick Links</h4>
          <ul className="space-y-4 text-slate-500 font-medium">
            <li><a href="#services" className="hover:text-gold transition">Services</a></li>
            <li><a href="#modernization" className="hover:text-gold transition">Modernization</a></li>
            <li><a href="#about" className="hover:text-gold transition">About Us</a></li>
            <li><a href="#contact" className="hover:text-gold transition">Contact</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-bold text-london-blue uppercase tracking-widest text-xs">Legal</h4>
          <ul className="space-y-4 text-slate-500 font-medium">
            <li><a href="#" className="hover:text-vivid-cobalt transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-vivid-cobalt transition">Terms of Service</a></li>
            <li><a href="#" className="hover:text-vivid-cobalt transition">Safety Standards</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">
          &copy; {new Date().getFullYear()} TGM ELEVATOR LIMITED. Reg No: 15758098. London, UK.
        </p>
        <div className="flex items-center gap-2 text-slate-400">
          <ShieldCheck size={16} />
          <span className="text-[10px] font-bold uppercase tracking-widest">ISO 9001 Certified</span>
        </div>
      </div>
    </footer>
  );
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hello! Welcome to TGM Elevator Limited. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: any) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simple bot logic
    setTimeout(() => {
      let botResponse = "Thank you for your message. One of our consultants will get back to you shortly. For urgent inquiries, please call us at +44 7345826679.";
      
      const lowerInput = input.toLowerCase();
      if (lowerInput.includes('service') || lowerInput.includes('maintenance')) {
        botResponse = "We offer comprehensive maintenance and service packages. Would you like to schedule a consultation?";
      } else if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('quote')) {
        botResponse = "Pricing depends on the specific scope of your project. You can use our 'Get a Quote' form or call us for a detailed estimate.";
      } else if (lowerInput.includes('emergency')) {
        botResponse = "For emergencies, please call our 24/7 support line immediately at +44 7345826679.";
      }

      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/447345826679"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-[#128C7E] transition-colors"
        title="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03c0 2.123.543 4.197 1.574 6.04L0 24l6.137-1.611a11.82 11.82 0 005.911 1.586h.005c6.634 0 12.032-5.396 12.035-12.032a11.76 11.76 0 00-3.479-8.492z"/>
        </svg>
      </motion.a>

      {/* Chatbot Toggle */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-london-blue text-gold rounded-full shadow-2xl flex items-center justify-center hover:bg-gold hover:text-london-blue transition-all duration-300 border border-gold/30"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </motion.button>

      {/* Chat Window */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="w-80 h-[450px] bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden mb-2"
        >
          {/* Header */}
          <div className="bg-london-blue p-4 text-white flex items-center gap-3">
            <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center text-gold">
              <Bot size={20} />
            </div>
            <div>
              <p className="font-bold text-sm">TGM Assistant</p>
              <p className="text-[10px] text-gold font-bold uppercase tracking-widest">Online</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-london-blue text-white rounded-tr-none' 
                    : 'bg-white text-slate-600 shadow-sm rounded-tl-none border border-gray-100'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button type="submit" className="w-10 h-10 bg-london-blue text-gold rounded-full flex items-center justify-center hover:bg-gold hover:text-london-blue transition-colors">
              <Send size={18} />
            </button>
          </form>
        </motion.div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-gold selection:text-london-blue">
      <Nav />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}

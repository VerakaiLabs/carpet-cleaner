"use client";

import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, Edit3, Save, Printer, 
  Eye, Layers, Sparkles, Clock,
  Home, UserCheck
} from 'lucide-react';

interface ProposalData {
  clientName: string;
  clientLocation: string;
  basePrice: number;
  baseTitle: string;
  agencyName: string;
  agencyLocation: string;
  proposalId: string;
  primaryColor: string;
  accentColor: string;
  [key: string]: string | number;
}

const App = () => {
  // --- CONFIGURABLE DATA ---
  const [data, setData] = useState<ProposalData>({
    clientName: "Carpet Cleaner Australia",
    clientLocation: "Australia",
    basePrice: 300000,
    baseTitle: "Two-Site Local Strategy",
    agencyName: "VerakaiLabs",
    agencyLocation: "Kathmandu, Nepal",
    proposalId: "#MC-AUS-24-REV",
    primaryColor: "#0A2C60",
    accentColor: "#FF6900"
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'e') {
        setIsEditing(!isEditing);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isEditing]);

  const AdminPanel = () => (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 print:hidden">
      {isEditing && (
        <div className="bg-white shadow-2xl border border-slate-200 p-4 sm:p-6 rounded-2xl sm:rounded-3xl w-72 sm:w-80 mb-3 animate-in slide-in-from-bottom-5">
          <h3 className="font-bold mb-3 sm:mb-4 text-slate-800 flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider">
            Edit Proposal
          </h3>
          <div className="space-y-3 sm:space-y-4 max-h-[50vh] sm:max-h-[60vh] overflow-y-auto pr-2">
            {[
              { label: "Client Name", key: "clientName" },
              { label: "Total Cost", key: "basePrice", type: "number" },
              { label: "Ref ID", key: "proposalId" }
            ].map((field) => (
              <div key={field.key}>
                <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">{field.label}</label>
                <input 
                  type={field.type || "text"}
                  className="w-full border-b border-slate-200 py-1 text-sm focus:border-[#FF6900] outline-none" 
                  value={data[field.key]} 
                  onChange={e => setData({...data, [field.key]: field.type === 'number' ? parseInt(e.target.value) : e.target.value})}
                />
              </div>
            ))}
          </div>
          <button 
            onClick={() => setIsEditing(false)}
            className="w-full mt-4 sm:mt-6 bg-[#0A2C60] text-white py-2.5 sm:py-3 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2"
          >
            <Save size={14} /> Save Draft
          </button>
        </div>
      )}
      <button 
        onClick={() => setIsEditing(!isEditing)}
        className={`${isEditing ? 'bg-[#FF6900]' : 'bg-[#0A2C60]'} text-white p-3 sm:p-4 rounded-full shadow-xl hover:scale-110 transition-all`}
      >
        {isEditing ? <Eye size={20} /> : <Edit3 size={20} />}
      </button>
      {!isEditing && (
        <button onClick={() => window.print()} className="bg-slate-800 text-white p-3 sm:p-4 rounded-full shadow-xl hover:scale-110 transition-all">
          <Printer size={20} />
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-sans text-[#0A2C60] selection:bg-[#FF6900] selection:text-white">
      <AdminPanel />

      {/* Slide 1: Personal Header */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-[#0A2C60] text-white p-4 sm:p-8 relative">
        <div className="max-w-5xl w-full text-center relative z-10">
          <div className="w-12 sm:w-16 h-0.5 bg-[#FF6900] mx-auto mb-6 sm:mb-10"></div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight">
             The Two-Brand <br/>Strategy
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-slate-400 font-medium tracking-[0.1em] sm:tracking-[0.2em] uppercase px-4">
            Custom Build for {data.clientName}
          </p>
          <div className="mt-12 sm:mt-20 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.4em] text-slate-500 font-bold">
            VerakaiLabs Technical Proposal
          </div>
        </div>
      </section>

      {/* Slide 2: The "Why" - Human Strategy */}
      <section className="py-16 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-20">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF6900] mb-3 sm:mb-4">Our Approach</h2>
          <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight max-w-3xl text-balance leading-tight">Giving your business two chances to win the local search.</h3>
          <p className="mt-6 sm:mt-8 text-base sm:text-lg text-slate-500 max-w-2xl leading-relaxed">
            When a homeowner looks for a cleaner, they usually open 2 or 3 websites before they call. Our plan is to make sure that <strong>two of those websites belong to you.</strong>
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 sm:gap-16">
            <div className="bg-slate-50 p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-slate-100">
                <div className="bg-[#0A2C60] text-white w-10 h-10 flex items-center justify-center rounded-lg mb-4 sm:mb-6 shadow-lg">
                    <Sparkles size={20} />
                </div>
                <h5 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 italic">The Premium Specialist</h5>
                <p className="text-slate-600 leading-relaxed mb-4 sm:mb-6 text-sm">
                    This site will focus on your high-end services — tailored to premium clients who value quality and expertise. The messaging will emphasize trust, professionalism, and specialized care.
                </p>
                <div className="flex flex-wrap gap-2 text-[10px] font-bold uppercase text-slate-400">
                    <span className="bg-white px-3 py-1 rounded border">Premium Focus</span>
                    <span className="bg-white px-3 py-1 rounded border">Quality First</span>
                </div>
            </div>

            <div className="bg-slate-50 p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-slate-100">
                <div className="bg-[#FF6900] text-white w-10 h-10 flex items-center justify-center rounded-lg mb-4 sm:mb-6 shadow-lg">
                    <Home size={20} />
                </div>
                <h5 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 italic">The Reliable Local</h5>
                <p className="text-slate-600 leading-relaxed mb-4 sm:mb-6 text-sm">
                    This site targets everyday customers looking for fast, reliable service. It will be mobile-friendly, straightforward, and focused on quick conversions — or customized as per your services.
                </p>
                <div className="flex flex-wrap gap-2 text-[10px] font-bold uppercase text-slate-400">
                    <span className="bg-white px-3 py-1 rounded border">Local Focus</span>
                    <span className="bg-white px-3 py-1 rounded border">Speed of Service</span>
                </div>
            </div>
        </div>
      </section>

      {/* Slide 3: Keeping the Business Safe */}
      <section className="py-16 sm:py-32 px-4 sm:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-20 items-center">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF6900] mb-6 sm:mb-8">Technical Safety</h2>
              <h3 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8 leading-tight">Doing it right so <br/>Google trusts you.</h3>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 sm:mb-10">
                We aren&apos;t just making a copy. Google doesn&apos;t like duplicate businesses. To keep your reputation safe, we follow a strict set of rules:
              </p>
              <div className="space-y-5 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-1 bg-white border border-slate-200 rounded text-[#0A2C60] flex-shrink-0"><ShieldCheck size={20}/></div>
                  <div>
                    <h4 className="font-bold text-sm">Two Separate Foundations</h4>
                    <p className="text-xs text-slate-500 mt-1">Each site will be hosted on its own separate server. This makes it look like two completely different local businesses to the search engine.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-1 bg-white border border-slate-200 rounded text-[#0A2C60] flex-shrink-0"><Layers size={20}/></div>
                  <div>
                    <h4 className="font-bold text-sm">Unique Content Profiles</h4>
                    <p className="text-xs text-slate-500 mt-1">We will write every word from scratch for both sites. Different headings, different descriptions, and different service details.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#0A2C60] rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-12 text-white shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#FF6900] mb-6 sm:mb-10">The Search Reality</h4>
                    <div className="space-y-8 sm:space-y-10">
                        <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                            <Clock className="text-[#FF6900] flex-shrink-0" size={28} />
                            <div>
                                <h5 className="font-bold text-base sm:text-lg mb-1">A Realistic Timeline</h5>
                                <p className="text-xs text-slate-400 leading-relaxed">The sites will be ready for you in 3-4 weeks. However, ranking takes time. It usually takes 3-6 months for Google to fully trust new sites and start showing them in top results.</p>
                            </div>
                        </div>
                        <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                            <UserCheck className="text-[#FF6900] flex-shrink-0" size={28} />
                            <div>
                                <h5 className="font-bold text-base sm:text-lg mb-1">More &quot;At Bats&quot;</h5>
                                <p className="text-xs text-slate-400 leading-relaxed">By having two different brands, you are essentially doubling your chances of being chosen. If they don&apos;t click the first one, they might click the second.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 4: Final Quotation */}
      <section className="py-16 sm:py-32 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF6900] mb-3 sm:mb-4 text-center">Project Investment</h2>
          <h3 className="text-2xl sm:text-4xl font-bold mb-10 sm:mb-16 text-center text-[#0A2C60]">What we are building for you.</h3>
          
          <div className="bg-white rounded-2xl sm:rounded-[40px] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] sm:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] overflow-hidden border border-slate-100">
            <div className="p-6 sm:p-16">
                <div className="flex flex-col gap-4 sm:gap-8 mb-10 sm:mb-16 pb-8 sm:pb-12 border-b border-slate-100">
                    <div>
                        <h4 className="text-2xl sm:text-3xl font-bold mb-2">Dual-Brand Build</h4>
                        <p className="text-slate-500 font-medium text-sm sm:text-base">Bespoke design and development for two brands.</p>
                    </div>
                    <div className="text-3xl sm:text-5xl font-bold text-[#0A2C60]">रु {data.basePrice.toLocaleString()}</div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-4 sm:gap-y-6">
                    {[
                        "Custom designs for Brand A & B",
                        "High-speed mobile performance",
                        "Separate hosting server setup",
                        "Local SEO foundation",
                        "Stealth SEO setup to keep both brands independent"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm font-semibold text-slate-700">
                            <div className="w-1.5 h-1.5 bg-[#FF6900] rounded-full flex-shrink-0"></div>
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="bg-slate-50 p-6 sm:p-12 text-[#0A2C60] sm:px-16 border-t border-slate-100">
                <div className="flex flex-col">
                    <span className="uppercase tracking-[0.2em] sm:tracking-[0.4em] font-bold text-[9px] sm:text-[10px] opacity-40 mb-1">Total Project Cost</span>
                    <span className="text-3xl sm:text-4xl font-bold tracking-tighter">रु {data.basePrice.toLocaleString()}</span>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-16 sm:py-32 px-4 sm:px-8 bg-[#0A2C60] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light mb-8 sm:mb-12 tracking-tight italic leading-tight">Building the future of <span className="font-bold">Your Cleaning Company.</span></h2>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 sm:mb-24 print:hidden">
            <a 
              href="https://wa.me/9779742827007?text=Hi%2C%20I%27m%20interested%20in%20starting%20the%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white text-[#0A2C60] px-8 sm:px-12 py-4 sm:py-6 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm uppercase tracking-widest hover:bg-[#FF6900] hover:text-white transition-all shadow-xl text-center"
            >
              Start Project
            </a>
          </div>

          <div className="flex flex-col gap-8 sm:gap-0 sm:flex-row justify-between items-center border-t border-white/10 pt-10 sm:pt-16">
            <div className="text-center sm:text-left">
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-2">Designed & Built By</p>
                <p className="text-xl sm:text-2xl font-bold text-white mb-1">{data.agencyName}</p>
                <p className="text-[10px] uppercase tracking-widest text-slate-400">{data.agencyLocation}</p>
            </div>
            <div className="text-center sm:text-right">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2">Client Reference</p>
                <p className="text-xs sm:text-sm font-bold text-white mb-1 uppercase">{data.clientName}</p>
                <p className="text-[10px] uppercase tracking-widest text-slate-400">{data.proposalId}</p>
            </div>
          </div>
        </div>
      </section>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          .print\\:hidden { display: none !important; }
          section { page-break-inside: avoid; }
          body { background: white !important; }
        }
      `}} />
    </div>
  );
};

export default App;
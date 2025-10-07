import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Users, HeartHandshake, Stethoscope, MapPin, ShieldCheck, Search, BookOpen } from 'lucide-react';

export default function GreenBookLanding() {
  const HERO_IMAGE = 'https://health.georgetown.edu/wp-content/uploads/2023/06/patient-decision-making-fi-2.jpg';


  


  const onProviderSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget as HTMLFormElement);
    const zip = data.get('zip');
    const plan = data.get('plan');
    const specialty = data.get('specialty');
    alert(`Provider finder coming soon!
ZIP: ${zip}
Plan: ${plan}
Specialty: ${specialty}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white text-gray-800">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center gap-3">
            
              <img src="src\assets\images\greenBook-logo.png" alt="Green Book for Health logo" className="w-12 h-12 object-contain" />
           
            <h1 className="text-2xl font-bold text-emerald-600">Green Book <span className="text-gray-700 font-normal">for</span> <span className="text-purple-900">Health</span></h1>
          </div>
          <div className="hidden md:flex gap-6 text-gray-700 font-medium">
            <a href="#about" className="hover:text-emerald-600 transition">About</a>
            <a href="#resources" className="hover:text-emerald-600 transition">Resource Guide</a>
            <a href="#community" className="hover:text-emerald-600 transition">Community Guide</a>
            <a href="#involved" className="hover:text-emerald-600 transition">Get Involved</a>
          </div>
          <a href="#providers"><Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Find Care</Button></a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="Black patient consulting doctor" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative container mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center text-white">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Empowering Black Patients Through Knowledge, Care, and Community
            </h2>
            <p className="mt-5 max-w-xl text-gray-100">
              Tools and insights to help you find care that understands you.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="#resources">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Explore Resources</Button>
              </a>
              <a href="#community">
                <Button variant="outline" className="bg-white text-emerald-700 border border-emerald-200 hover:bg-emerald-50 hover:text-emerald-800">
                  Join Community
                </Button>
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-emerald-50/90">
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-300"/> Evidence‑informed tips</div>
              <div className="flex items-center gap-2"><Users className="w-4 h-4 text-emerald-300"/> Community‑sourced reviews</div>
              <div className="flex items-center gap-2"><Stethoscope className="w-4 h-4 text-emerald-300"/> Culturally competent care</div>
            </div>
          </div>

          {/* Provider finder card */}
          <div id="providers" className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100 text-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-emerald-100"><Search className="w-5 h-5 text-emerald-700"/></div>
              <h3 className="text-xl font-semibold text-emerald-900">Find in‑network care</h3>
            </div>
            <p className="text-gray-600 text-sm mb-6">Start with your ZIP code, insurance plan, and specialty. (Prototype demo — wired up later.)</p>
            <form onSubmit={onProviderSearch} className="grid md:grid-cols-2 gap-4">
              <label className="flex flex-col gap-1">
                <span className="text-sm font-medium text-gray-700">ZIP code</span>
                <input name="zip" required inputMode="numeric" pattern="[0-9]{5}" placeholder="e.g., 89101" className="h-11 rounded-xl border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"/>
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-sm font-medium text-gray-700">Insurance plan</span>
                <select name="plan" className="h-11 rounded-xl border border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option>Choose a plan</option>
                  <option>Aetna</option>
                  <option>Blue Cross Blue Shield</option>
                  <option>Cigna</option>
                  <option>UnitedHealthcare</option>
                  <option>Medicaid</option>
                  <option>Medicare</option>
                  <option>No insurance / Self‑pay</option>
                </select>
              </label>
              <label className="md:col-span-2 flex flex-col gap-1">
                <span className="text-sm font-medium text-gray-700">Specialty</span>
                <select name="specialty" className="h-11 rounded-xl border border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option>Primary Care</option>
                  <option>OB/GYN</option>
                  <option>Mental Health</option>
                  <option>Pediatrics</option>
                  <option>Cardiology</option>
                  <option>Oncology</option>
                  <option>Endocrinology</option>
                </select>
              </label>
              <div className="md:col-span-2 flex gap-3">
                <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white">Find providers</Button>
                <Button type="button" variant="outline" className="border-emerald-600 text-emerald-700 hover:bg-emerald-50">Use current location</Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Our Guides Section */}
      <section id="resources" className="py-20 bg-emerald-50">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-semibold text-emerald-800 mb-10">Our Guides</h3>
          <div className="grid md:grid-cols-2 gap-10 px-6">
            <Card className="shadow-md hover:shadow-xl transition bg-white rounded-2xl">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <BookOpen className="w-12 h-12 text-emerald-600 mb-4" />
                <h4 className="text-2xl font-semibold mb-2">Resource Guide</h4>
                <p className="text-gray-600 mb-4">
                  Tools and insights for informed decisions — choosing providers, understanding patient rights, and advocating for yourself.
                </p>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">View Resources</Button>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-xl transition bg-white rounded-2xl">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <Users className="w-12 h-12 text-emerald-600 mb-4" />
                <h4 className="text-2xl font-semibold mb-2">Community Guide</h4>
                <p className="text-gray-600 mb-4">
                  Learn from real community experiences — trusted clinicians, wellness centers, and stories from shared journeys.
                </p>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">View Community</Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3 px-6">
            {['Primary Care','OB/GYN','Mental Health','Pediatrics','Cardiology','Oncology'].map((tag) => (
              <span key={tag} className="px-4 py-2 rounded-full bg-white border border-emerald-100 text-sm text-emerald-800 shadow-sm">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* About / Mission Section */}
      <section id="about" className="py-20 container mx-auto px-6">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-semibold text-emerald-800">Why We Created the Green Book for Health</h3>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Inspired by the original Negro Motorist Green Book, this initiative serves as a healthcare compass for Black Americans.
            We aim to ensure equitable access, informed choice, and community‑driven wellness.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-gradient-to-br from-emerald-100 via-teal-100 to-white rounded-2xl p-8 border border-emerald-100 shadow-inner">
            <div className="flex items-center gap-3 mb-4">
              <Stethoscope className="w-6 h-6 text-emerald-700"/>
              <h4 className="text-xl font-semibold text-emerald-900">Centering dignity in care</h4>
            </div>
            <p className="text-gray-700 leading-relaxed">
              The healthcare system too often leaves marginalized voices unheard. The Green Book for Health restores agency through
              peer knowledge, transparency, and trusted data — so every patient can find care that respects culture and community.
            </p>
            <Button className="mt-6 bg-emerald-600 hover:bg-emerald-700 text-white">Learn More</Button>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-emerald-100 shadow-sm">
            <h4 className="text-xl font-semibold text-emerald-900 mb-4">How it works</h4>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3"><ShieldCheck className="w-5 h-5 text-emerald-600 mt-1"/> Curated resource library with practical, evidence‑informed guidance.</li>
              <li className="flex items-start gap-3"><Users className="w-5 h-5 text-emerald-600 mt-1"/> Community reviews elevate clinicians and centers delivering respectful care.</li>
              <li className="flex items-start gap-3"><MapPin className="w-5 h-5 text-emerald-600 mt-1"/> Provider finder helps you locate in‑network care near you.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section id="involved" className="bg-emerald-100 py-20">
        <div className="container mx-auto text-center px-6">
          <h3 className="text-3xl font-semibold text-emerald-800 mb-10">Get Involved</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white p-8 shadow-md hover:shadow-lg transition rounded-2xl">
              <HeartHandshake className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Become a Contributor</h4>
              <p className="text-gray-600 mb-4">Share your story or recommend trusted providers to help others on their journey.</p>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Submit Insight</Button>
            </Card>

            <Card className="bg-white p-8 shadow-md hover:shadow-lg transition rounded-2xl">
              <Users className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Host a Workshop</h4>
              <p className="text-gray-600 mb-4">Organize community wellness sessions or discussions to promote shared healthcare literacy.</p>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Host Event</Button>
            </Card>

            <Card className="bg-white p-8 shadow-md hover:shadow-lg transition rounded-2xl">
              <BookOpen className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Spread Awareness</h4>
              <p className="text-gray-600 mb-4">Help us reach more patients and caregivers by sharing the mission.</p>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Share</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-700 text-white py-10">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-4 items-center">
          <p className="text-sm opacity-80">© 2025 Green Book for Health. All rights reserved.</p>
          <div className="justify-self-end flex gap-6 text-sm">
            <a href="#resources" className="hover:underline">Resources</a>
            <a href="#community" className="hover:underline">Community</a>
            <a href="#providers" className="hover:underline">Find Care</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

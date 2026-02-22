'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Modal } from '@/components/Modal';
import { ContactForm } from '@/components/ContactForm';

export default function Methodology() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleFormSuccess = () => {
    setTimeout(() => {
      closeModal();
    }, 2000);
  };

  return (
    <>
      <Header onCtaClick={openModal} />
      <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-6 py-24 md:py-32 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-navy-900 mb-8 leading-tight">
              Enterprise Value Architecture™
            </h1>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Revenue predictability is structural, not motivational.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              The EVA™ methodology restores executive control over revenue by installing structural discipline at three distinct layers: qualification gates, deal control, and revenue governance.
            </p>
          </div>
        </div>
      </section>

      {/* Structural Premise Section */}
      <section className="px-6 py-20 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-10">
            The Structural Premise
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
            <div className="border-l-4 border-navy-900 pl-6">
              <h3 className="text-lg font-semibold text-navy-900 mb-3">
                Qualification Drift
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Deals advance without consistent qualification criteria. Sales and finance disagree on buyer fitness. Deal status becomes interpretive, not factual.
              </p>
            </div>

            <div className="border-l-4 border-navy-900 pl-6">
              <h3 className="text-lg font-semibold text-navy-900 mb-3">
                Forecast Negotiation
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Deal status is subject to negotiation between sales leadership and finance. Forecast becomes a consensus number, not a control mechanism.
              </p>
            </div>

            <div className="border-l-4 border-navy-900 pl-6">
              <h3 className="text-lg font-semibold text-navy-900 mb-3">
                Stage Inflation
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Deals move through stages based on activity, not qualification. Pipeline carries unqualified opportunities masked as probable revenue.
              </p>
            </div>

            <div className="border-l-4 border-navy-900 pl-6">
              <h3 className="text-lg font-semibold text-navy-900 mb-3">
                Reactive Discounting
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Without deal control, discounting becomes the primary negotiation lever. Price concessions accelerate cycles but destroy deal economics.
              </p>
            </div>

            <div className="border-l-4 border-navy-900 pl-6">
              <h3 className="text-lg font-semibold text-navy-900 mb-3">
                Hero Dependence
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Revenue outcomes depend on individual salesperson performance, not system discipline. Quota attainment is unpredictable and unsustainable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EVA 3-Layer Architecture Visual */}
      <section className="px-6 py-20 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-12">
            The EVA™ Three-Layer Architecture
          </h2>

          <div className="max-w-3xl mx-auto space-y-0">
            <div className="border-2 border-navy-900 bg-navy-50 p-8">
              <h3 className="text-lg font-semibold text-navy-900 mb-4">
                Layer 1: Qualification Discipline
              </h3>
              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  <span className="font-semibold">Economic Authority Confirmed</span> — Buyer acknowledges decision authority and budget allocation.
                </p>
                <p>
                  <span className="font-semibold">Buyer-Acknowledged Business Impact</span> — Prospect articulates business outcome and ROI model.
                </p>
                <p>
                  <span className="font-semibold">Event-Driven Timeline</span> — Evaluation milestones are prospect-driven, not sales-driven.
                </p>
                <p>
                  <span className="font-semibold">Defined Evaluation Process</span> — Procurement criteria and approval requirements are documented.
                </p>
                <p>
                  <span className="font-semibold">Mutual Next-Step Commitment</span> — Both parties confirm specific actions and timeline for next engagement.
                </p>
              </div>
            </div>

            <div className="border-2 border-navy-900 border-t-0 bg-navy-100 p-8">
              <h3 className="text-lg font-semibold text-navy-900 mb-4">
                Layer 2: Deal Control &amp; Executive Engagement
              </h3>
              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  <span className="font-semibold">Multi-thread Discipline</span> — Multiple buyer stakeholders are engaged with consistent message and value narrative.
                </p>
                <p>
                  <span className="font-semibold">Verified Advancement</span> — Deal progression is confirmed by qualification gate completion, not sales activity.
                </p>
                <p>
                  <span className="font-semibold">Narrative Control</span> — Your business case and ROI model guide the buyer&apos;s internal evaluation.
                </p>
                <p>
                  <span className="font-semibold">Stage Validation</span> — Deal movement reflects verified buyer commitment and progress against defined milestones.
                </p>
              </div>
            </div>

            <div className="border-2 border-navy-900 border-t-0 bg-navy-200 p-8">
              <h3 className="text-lg font-semibold text-navy-900 mb-4">
                Layer 3: Revenue Governance &amp; Measurement
              </h3>
              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  <span className="font-semibold">Forecast Integrity</span> — Revenue forecasts reflect qualified pipeline, not sales opinion.
                </p>
                <p>
                  <span className="font-semibold">Qualified Win Performance</span> — Sales productivity and win rates improve when selling to qualified buyers.
                </p>
                <p>
                  <span className="font-semibold">Margin Realization Discipline</span> — Deal economics are managed from qualification through close.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overlay Implementation Section */}
      <section className="px-6 py-20 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-10">
            Implementation Approach
          </h2>

          <div className="max-w-3xl space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-navy-900 mb-3">
                No System Overhaul
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                EVA™ overlays your existing CRM, stages, and sales process. We do not require system replacement or process destruction. Structural reinforcement, not reinvention.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-navy-900 mb-3">
                Qualification Gates as Gating Mechanism
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                We install qualification gates that must be satisfied before deals advance. Gates are integrated into your existing stage definitions. Deal progression requires objective evidence, not sales judgment.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-navy-900 mb-3">
                Control Indicators at Every Level
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                We define measurable control indicators that inform deal probability, discount sensitivity, and execution risk. Indicators feed directly into forecast governance and executive reporting.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-navy-900 mb-3">
                Revenue Governance Integration
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                We establish the governance structure that connects forecast discipline to capital decisions, resource allocation, and executive accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Timeline Section */}
      <section className="px-6 py-20 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-10">
            Installation Timeline
          </h2>

          <div className="max-w-3xl">
            <div className="flex gap-6 pb-8 border-b border-gray-200 last:border-0 mb-8 last:mb-0">
              <div>
                <div className="text-sm font-semibold text-navy-900 bg-navy-50 px-3 py-1 rounded inline-block">
                  Weeks 1–2
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 mb-2">Diagnostic Assessment</h3>
                <p className="text-sm text-gray-700">
                  We analyze your current revenue architecture, interview sales leadership and finance, and identify structural gaps and control vulnerabilities.
                </p>
              </div>
            </div>

            <div className="flex gap-6 pb-8 border-b border-gray-200 last:border-0 mb-8 last:mb-0">
              <div>
                <div className="text-sm font-semibold text-navy-900 bg-navy-50 px-3 py-1 rounded inline-block">
                  Weeks 3–4
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 mb-2">Gate Design &amp; Alignment</h3>
                <p className="text-sm text-gray-700">
                  We design qualification gates specific to your buyer profile and sales process. Executive leadership aligns on gate definitions and advancement criteria.
                </p>
              </div>
            </div>

            <div className="flex gap-6 pb-8 border-b border-gray-200 last:border-0 mb-8 last:mb-0">
              <div>
                <div className="text-sm font-semibold text-navy-900 bg-navy-50 px-3 py-1 rounded inline-block">
                  Weeks 5–6
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 mb-2">Control Indicator Installation</h3>
                <p className="text-sm text-gray-700">
                  We define revenue control indicators and integrate them into your forecast model. Sales team is trained on indicator methodology and application.
                </p>
              </div>
            </div>

            <div className="flex gap-6 pb-8 border-b border-gray-200 last:border-0 mb-8 last:mb-0">
              <div>
                <div className="text-sm font-semibold text-navy-900 bg-navy-50 px-3 py-1 rounded inline-block">
                  Weeks 7–8
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 mb-2">Governance Architecture</h3>
                <p className="text-sm text-gray-700">
                  We establish the governance structure connecting forecast discipline to executive decision-making. Reporting dashboards are configured and executive ownership is assigned.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div>
                <div className="text-sm font-semibold text-navy-900 bg-navy-50 px-3 py-1 rounded inline-block">
                  Weeks 9–10
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 mb-2">Go-Live &amp; Reinforcement</h3>
                <p className="text-sm text-gray-700">
                  EVA™ enters active operation. Sales and finance execute against new gates and controls. We provide ongoing coaching and reinforcement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Summary Section */}
      <section className="px-6 py-20 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-10">
            What to Expect
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
            <div>
              <h3 className="text-lg font-semibold text-navy-900 mb-4">
                Engagement Structure
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex gap-3">
                  <span className="font-semibold text-navy-900">•</span>
                  <span>8–10 week installation program</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-navy-900">•</span>
                  <span>Dedicated engagement team</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-navy-900">•</span>
                  <span>Weekly executive alignment meetings</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-navy-900">•</span>
                  <span>Sales team training and coaching</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-navy-900">•</span>
                  <span>Ongoing reinforcement for 90 days</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-navy-900 mb-4">
                Measurement &amp; Outcomes
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex gap-3">
                  <span className="font-semibold text-navy-900">•</span>
                  <span>Forecast accuracy baseline and tracking</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-navy-900">•</span>
                  <span>Deal qualification rate improvements</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-navy-900">•</span>
                  <span>Win rate by buyer segment</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-navy-900">•</span>
                  <span>Margin realization by deal</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-navy-900">•</span>
                  <span>Sales cycle efficiency metrics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Ready to Restore Revenue Control
            </h2>
            <p className="text-base text-gray-700 mb-12 leading-relaxed">
              The Executive Revenue Assessment is the starting point. We work with your CFO, CRO, and Chief Revenue Leadership to diagnose structural problems and outline the specific system changes required.
            </p>

            <button className="px-8 py-3 bg-navy-900 text-white font-semibold hover:bg-navy-800 transition">
              Request Executive Revenue Assessment
            </button>
          </div>
        </div>
      </section>

      </main>

      <Footer />

      <Modal isOpen={modalOpen} onClose={closeModal} title="Executive Revenue Assessment">
        <ContactForm onSuccess={handleFormSuccess} />
      </Modal>
    </>
  );
}

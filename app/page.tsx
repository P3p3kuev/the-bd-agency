'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { SectionWrapper } from '@/components/SectionWrapper';
import { Modal } from '@/components/Modal';
import { ContactForm } from '@/components/ContactForm';
import { Button } from '@/components/Button';
import { Footer } from '@/components/Footer';

export default function Home() {
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
        <SectionWrapper id="hero" variant="white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-navy-900 mb-8 leading-tight">
              If Your Forecast Requires Negotiation, It Isn&apos;t Control.
            </h1>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Revenue volatility in enterprise sales is rarely a market problem. It is
              usually structural.
            </p>
            <p className="text-base text-gray-600 mb-12 leading-relaxed">
              We design and install Enterprise Revenue Architecture to restore qualification
              discipline, executive deal control, and forecast integrity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" onClick={openModal}>
                Request Executive Revenue Assessment
              </Button>
              <Button variant="secondary" size="lg">
                Explore Enterprise Value Architecture™
              </Button>
            </div>
          </div>
        </SectionWrapper>

        {/* Structural Problem Section */}
        <SectionWrapper id="problem" variant="gray">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-12">
            The Structural Problem
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
            <div className="border-l-4 border-navy-900 pl-6">
              <h3 className="text-lg font-semibold text-navy-900 mb-3">
                Forecast Negotiation
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                When deal status becomes a negotiating point between sales and finance, your
                forecast is a guess, not a fact. Revenue predictability collapses.
              </p>
            </div>

            <div className="border-l-4 border-navy-900 pl-6">
              <h3 className="text-lg font-semibold text-navy-900 mb-3">
                Pipeline Fiction
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Deals stall in early stages without clear qualification criteria. Sales teams
                report activity, not outcome. Pipeline becomes a liability.
              </p>
            </div>

            <div className="border-l-4 border-navy-900 pl-6">
              <h3 className="text-lg font-semibold text-navy-900 mb-3">
                Discounting Pressure
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Without deal control, discounts become the path of least resistance. Margin
                erosion accelerates deal velocity but destroys economics.
              </p>
            </div>

            <div className="border-l-4 border-navy-900 pl-6">
              <h3 className="text-lg font-semibold text-navy-900 mb-3">
                Stage Inflation
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Sales advances deals through stages without clear qualification gates.
                Leadership decisions are made on false conviction.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Why Now Section */}
        <SectionWrapper id="why-now" variant="white">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-10">
            Why Now
          </h2>

          <div className="max-w-3xl space-y-6">
            <p className="text-base text-gray-700 leading-relaxed">
              Enterprise sales cycles have extended. Buyer committees are larger. Procurement
              has more voice. Sales costs are climbing. Yet most organizations still forecast
              based on gut feel and deal progression stage, not structural control.
            </p>

            <p className="text-base text-gray-700 leading-relaxed">
              The result: predictability breaks down precisely when capital deployment decisions
              require certainty. CFOs and boards lose confidence in revenue guidance. Deal control
              shifts to pricing negotiation instead of buyer qualification.
            </p>

            <p className="text-base text-gray-700 leading-relaxed">
              Enterprise Revenue Architecture restores executive control by installing
              qualification discipline at the front of the sales process, creating forecast
              integrity at the middle, and enabling confident revenue decisions at the top.
            </p>
          </div>
        </SectionWrapper>

        {/* Enterprise Revenue Architecture Section */}
        <SectionWrapper id="architecture" variant="gray">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-10">
            Enterprise Revenue Architecture
          </h2>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl">
            <div>
              <h3 className="text-lg font-semibold text-navy-900 mb-4">
                Qualification Gates
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                We install deal-specific qualification criteria that executives and sales align
                on before opportunity is created. Deals advance only when qualification criteria
                are met.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-navy-900 mb-4">
                Revenue Control Indicators
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                We establish leading indicators of deal health, not lagging indicators of stage.
                Deal probability, discount sensitivity, and execution risk become measurable.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-navy-900 mb-4">
                Executive Decision Architecture
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                We define the financial and operational decisions that flow from revenue control.
                Forecast becomes basis for resource allocation and capital decisions.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* EVA 3-Layer Architecture Visual */}
        <SectionWrapper id="eva-architecture" variant="white">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-12">
            The EVA™ Three-Layer Architecture
          </h2>

          <div className="max-w-3xl mx-auto space-y-0">
            <div className="border-2 border-navy-900 bg-navy-50 p-8">
              <h3 className="text-lg font-semibold text-navy-900 mb-3">
                Executive Decision Architecture
              </h3>
              <p className="text-sm text-gray-700">
                Revenue guidance, forecast accuracy, capital deployment alignment, deal oversight
                governance
              </p>
            </div>

            <div className="border-2 border-navy-900 border-t-0 bg-navy-100 p-8">
              <h3 className="text-lg font-semibold text-navy-900 mb-3">
                Deal Control &amp; Executive Engagement
              </h3>
              <p className="text-sm text-gray-700">
                Multi-thread discipline, verified advancement, narrative control, stage validation
              </p>
            </div>

            <div className="border-2 border-navy-900 border-t-0 bg-navy-200 p-8">
              <h3 className="text-lg font-semibold text-navy-900 mb-3">
                Qualification Discipline
              </h3>
              <p className="text-sm text-gray-700">
                Economic authority confirmed, buyer-acknowledged business impact, event-driven
                timeline, defined evaluation process, mutual next-step commitment
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Qualification Gates Summary */}
        <SectionWrapper id="gates" variant="gray">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-10">
            Qualification Gates
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
            <div className="border-l-4 border-navy-900 pl-6">
              <h3 className="font-semibold text-navy-900 mb-2 text-lg">Buyer Fitness</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Does the prospect fit your target buyer profile? Is there clear budget allocation?
                Does the evaluation timeline align with your sales cycle?
              </p>
            </div>

            <div className="border-l-4 border-navy-900 pl-6">
              <h3 className="font-semibold text-navy-900 mb-2 text-lg">
                Economic Justification
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Can the prospect articulate ROI on your solution? Is there documented business
                case? Has the prospect established value metrics?
              </p>
            </div>

            <div className="border-l-4 border-navy-900 pl-6">
              <h3 className="font-semibold text-navy-900 mb-2 text-lg">Procurement Reality</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Is procurement aligned or opposed? Are there competing solutions in evaluation?
                What is the approval chain and timeline?
              </p>
            </div>

            <div className="border-l-4 border-navy-900 pl-6">
              <h3 className="font-semibold text-navy-900 mb-2 text-lg">
                Execution Capability
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Does the prospect have technical readiness? Is there internal sponsorship? Are
                there organizational barriers to implementation?
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Revenue Control Indicators Summary */}
        <SectionWrapper id="indicators" variant="white">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-10">
            Revenue Control Indicators
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
            <div className="border-l-4 border-navy-900 pl-6">
              <h3 className="font-semibold text-navy-900 mb-2 text-lg">Deal Probability</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Probability is set by qualification gate status, not by sales judgment. Probability
                updates when qualification criteria change, not when deals &quot;feel good.&quot;
              </p>
            </div>

            <div className="border-l-4 border-navy-900 pl-6">
              <h3 className="font-semibold text-navy-900 mb-2 text-lg">
                Discount Sensitivity
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                How much price discount will the buyer accept before deal value collapses? At what
                discount point does deal ROI become uneconomic?
              </p>
            </div>

            <div className="border-l-4 border-navy-900 pl-6">
              <h3 className="font-semibold text-navy-900 mb-2 text-lg">Execution Risk</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Can the organization successfully deliver? Are there implementation barriers? Will
                the prospect successfully adopt the solution?
              </p>
            </div>

            <div className="border-l-4 border-navy-900 pl-6">
              <h3 className="font-semibold text-navy-900 mb-2 text-lg">
                Stage Progression Validity
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Does the deal genuinely advance through qualification gates, or is it stalling? Are
                stage transitions indicating buyer commitment or sales activity?
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Executive Revenue Assessment CTA Section */}
        <SectionWrapper id="assessment" variant="navy">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Executive Revenue Assessment
            </h2>
            <p className="text-base text-gray-100 mb-6 leading-relaxed">
              We begin with a diagnostic. We analyze your current revenue architecture, identify
              structural control gaps, and recommend the specific changes required to restore
              forecast integrity.
            </p>
            <p className="text-base text-gray-300 mb-12 leading-relaxed">
              The assessment is conducted with your CFO, CRO, and Chief Revenue Leadership to align
              on the problem and the required system changes.
            </p>

            <Button variant="primary" size="lg" onClick={openModal}>
              Request Executive Revenue Assessment
            </Button>
          </div>
        </SectionWrapper>
      </main>

      <Footer />

      {/* CTA Modal */}
      <Modal isOpen={modalOpen} onClose={closeModal} title="Executive Revenue Assessment">
        <ContactForm onSuccess={handleFormSuccess} />
      </Modal>
    </>
  );
}

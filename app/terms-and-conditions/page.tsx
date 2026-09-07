import type { Metadata } from "next";
import Link from "next/link";
import { LegalContactCard, LegalList, LegalPage, LegalSection } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms that govern your use of the DigitalHub360 website and the digital marketing services we provide.",
  alternates: { canonical: "/terms-and-conditions" }
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro="These terms govern your use of the DigitalHub360 website and the services we provide. Please read them carefully — by using our site or engaging our services, you agree to them."
      lastUpdated="19 August 2026"
    >
      <LegalSection heading="1. Acceptance of these terms">
        <p>
          By accessing digitalhub360.in, submitting an enquiry, or engaging DigitalHub360 for any
          service, you agree to these Terms &amp; Conditions and to our{" "}
          <Link href="/privacy-policy" className="text-accent-primary hover:underline">
            Privacy Policy
          </Link>
          . If you do not agree, please do not use the site or our services.
        </p>
      </LegalSection>

      <LegalSection heading="2. About us">
        <p>
          DigitalHub360 is a digital marketing agency operating from Bengaluru, Karnataka, India,
          with offices in BTM 1st Stage, Nagarbhavi, and HSR Layout. References to &ldquo;we&rdquo;, &ldquo;us&rdquo;, and &ldquo;our&rdquo;
          mean DigitalHub360. References to &ldquo;you&rdquo; or &ldquo;client&rdquo; mean the person
          or business using our website or services.
        </p>
      </LegalSection>

      <LegalSection heading="3. Our services">
        <p>
          We provide services including digital marketing strategy, search engine optimisation, paid
          advertising on Google and Meta, social media marketing, website and application
          development, AI video production, WhatsApp marketing, branding and creative design,
          marketing automation, analytics, and e-commerce marketing.
        </p>
        <p>
          Website content, including service descriptions, sample results, and the ROI Lab
          calculator, is provided for general information and planning purposes only. The ROI Lab
          produces illustrative estimates based on the inputs and benchmarks you select. It is not a
          forecast, promise, or guarantee of actual results.
        </p>
      </LegalSection>

      <LegalSection heading="4. Engagements, proposals, and scope">
        <p>
          Enquiries submitted through this website are requests for information and do not create a
          binding contract. A service engagement begins only when scope, deliverables, timelines, and
          fees are agreed in writing through a proposal, quotation, statement of work, or service
          agreement signed or confirmed by both parties.
        </p>
        <p>
          If a signed service agreement conflicts with these terms, the signed agreement takes
          precedence for that engagement.
        </p>
        <p>
          Work outside the agreed scope will be quoted separately and requires written approval
          before it is carried out.
        </p>
      </LegalSection>

      <LegalSection heading="5. Fees and payment">
        <LegalList
          items={[
            "Fees, billing cycles, and payment terms are set out in the applicable proposal or agreement.",
            "Unless stated otherwise, service fees are exclusive of applicable taxes, which will be charged as required by law.",
            "Advertising spend on platforms such as Google Ads and Meta Ads is separate from our service fees, and is either billed directly to you by the platform or invoiced as agreed.",
            "We may pause or suspend work on overdue accounts after giving reasonable notice.",
            "Unless expressly agreed in writing, fees for work already performed are non-refundable."
          ]}
        />
      </LegalSection>

      <LegalSection heading="6. Your responsibilities">
        <p>To let us do our job well, you agree to:</p>
        <LegalList
          items={[
            "Provide accurate, complete information and materials in a timely manner",
            "Give us the access we need to platforms, accounts, and assets required for the work",
            "Ensure you own or are licensed to use any content, logos, images, or data you supply to us",
            "Review and approve deliverables within agreed timelines",
            "Comply with the terms and advertising policies of any third-party platform used in your campaigns"
          ]}
        />
        <p>
          Delays caused by pending approvals, missing access, or incomplete information may affect
          timelines and are not our responsibility.
        </p>
      </LegalSection>

      <LegalSection heading="7. Results and no guarantee">
        <p>
          Digital marketing outcomes depend on many factors outside our control, including market
          conditions, competition, seasonality, your pricing and sales process, budget levels, and
          changes to third-party platform algorithms and policies.
        </p>
        <p>
          We commit to applying professional skill and care and to reporting transparently on
          performance. We do{" "}
          <span className="text-foreground">not guarantee</span> specific search rankings, lead
          volumes, conversion rates, revenue, return on ad spend, or any other performance outcome.
          Case studies, statistics, and testimonials on this site describe past results for specific
          clients and are not a promise of comparable results for you.
        </p>
      </LegalSection>

      <LegalSection heading="8. Third-party platforms and services">
        <p>
          Our services rely on third-party platforms including Google, Meta, WhatsApp, hosting
          providers, and analytics tools. Their availability, pricing, policies, and features can
          change or be withdrawn without notice. We are not liable for outages, account suspensions,
          policy decisions, disapprovals, or data loss caused by these third parties, although we
          will make reasonable efforts to help you resolve such issues.
        </p>
      </LegalSection>

      <LegalSection heading="9. Intellectual property">
        <p>
          All content on this website — including text, design, graphics, logos, code, and the
          DigitalHub360 name and brand — belongs to DigitalHub360 or its licensors and is protected
          by applicable intellectual-property laws. You may not copy, reproduce, republish, or
          distribute it without our prior written permission.
        </p>
        <p>
          For client work, ownership of final approved deliverables transfers to you once all
          applicable fees are paid in full, unless the applicable agreement states otherwise. We
          retain ownership of our underlying tools, templates, frameworks, methodologies, and any
          pre-existing materials, and we retain the right to display completed work in our portfolio
          and marketing unless you ask us in writing not to.
        </p>
      </LegalSection>

      <LegalSection heading="10. Confidentiality">
        <p>
          Each party agrees to keep the other&apos;s non-public business information confidential and
          to use it only for the purpose of the engagement. This does not apply to information that
          is already public, independently developed, or required to be disclosed by law.
        </p>
      </LegalSection>

      <LegalSection heading="11. Our software products">
        <p>
          Weflux, SheetPilot, EmbedCMS, ShipTrack, and any other software we operate are provided
          under their own terms of service and subscription conditions. Those terms apply to your use
          of the relevant product in addition to these terms.
        </p>
      </LegalSection>

      <LegalSection heading="12. Limitation of liability">
        <p>
          To the maximum extent permitted by law, DigitalHub360 will not be liable for indirect,
          incidental, special, consequential, or punitive damages, or for loss of profits, revenue,
          data, goodwill, or business opportunity, arising out of or in connection with our website
          or services.
        </p>
        <p>
          Our total aggregate liability in connection with any engagement will not exceed the total
          service fees actually paid by you to us for that engagement in the three months
          immediately preceding the event giving rise to the claim.
        </p>
        <p>
          Nothing in these terms excludes or limits liability that cannot be excluded or limited
          under applicable law.
        </p>
      </LegalSection>

      <LegalSection heading="13. Termination">
        <p>
          Either party may terminate an ongoing engagement by giving written notice as specified in
          the applicable agreement, or, where no notice period is specified, 30 days&apos; written
          notice. We may suspend or terminate services immediately for non-payment, misuse of our
          services, or unlawful activity. On termination, you remain responsible for fees for work
          performed and commitments made up to the termination date.
        </p>
      </LegalSection>

      <LegalSection heading="14. Website availability">
        <p>
          We aim to keep this website available and accurate, but we provide it &ldquo;as is&rdquo;
          without warranties of any kind. We may modify, suspend, or discontinue any part of the site
          at any time without notice.
        </p>
      </LegalSection>

      <LegalSection heading="15. Governing law and jurisdiction">
        <p>
          These terms are governed by the laws of India. The courts at Bengaluru, Karnataka, have
          exclusive jurisdiction over any dispute arising out of or relating to these terms or our
          services. The parties will first attempt to resolve any dispute amicably through good-faith
          discussion.
        </p>
      </LegalSection>

      <LegalSection heading="16. Changes to these terms">
        <p>
          We may update these terms from time to time. The current version will always be posted on
          this page with its &ldquo;Last updated&rdquo; date. Continuing to use our website or
          services after changes are posted means you accept the updated terms.
        </p>
      </LegalSection>

      <LegalSection heading="17. Contact us">
        <p>Questions about these terms? We are happy to clarify anything before you engage us.</p>
        <LegalContactCard />
      </LegalSection>
    </LegalPage>
  );
}

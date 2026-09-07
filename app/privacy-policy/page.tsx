import type { Metadata } from "next";
import Link from "next/link";
import { LegalContactCard, LegalList, LegalPage, LegalSection } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How DigitalHub360 collects, uses, stores, and protects your personal information, and the rights you have over your data.",
  alternates: { canonical: "/privacy-policy" }
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="DigitalHub360 respects your privacy. This policy explains what information we collect when you use our website or services, why we collect it, how we protect it, and the choices you have."
      lastUpdated="19 August 2026"
    >
      <LegalSection heading="1. Who we are">
        <p>
          DigitalHub360 (&ldquo;DigitalHub360&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
          &ldquo;our&rdquo;) is a digital marketing agency based in Bengaluru, Karnataka, India,
          with offices in BTM 1st Stage, Nagarbhavi, and HSR Layout. We provide SEO, paid advertising, social media marketing, website and app
          development, AI video production, marketing automation, and related services, and we
          operate software products including Weflux, SheetPilot, EmbedCMS, and ShipTrack.
        </p>
        <p>
          This policy applies to{" "}
          <span className="text-foreground">digitalhub360.in</span> and to enquiries you send us
          through this website. Our individual software products may have their own privacy terms,
          which apply in addition to this policy when you use those products.
        </p>
      </LegalSection>

      <LegalSection heading="2. Information we collect">
        <p>
          <span className="text-foreground">Information you give us.</span> When you submit an
          enquiry form, book a strategy call, or contact us by email, phone, or WhatsApp, we collect:
        </p>
        <LegalList
          items={[
            "Your name",
            "Your phone number, including country code",
            "Your email address",
            "The service you are interested in, and any message or business details you choose to share"
          ]}
        />
        <p>
          <span className="text-foreground">Information collected automatically.</span> Like most
          websites, we and our analytics and advertising partners may collect:
        </p>
        <LegalList
          items={[
            "Device and browser type, operating system, and screen size",
            "IP address and approximate location (city or region level)",
            "Pages you visit, time spent, and how you arrived at our site (referring URL or ad click)",
            "Cookie and similar identifiers used for analytics and advertising measurement"
          ]}
        />
        <p>
          We do not ask for and do not knowingly collect sensitive personal data such as financial
          account details, government identification numbers, health information, or biometric data
          through this website.
        </p>
      </LegalSection>

      <LegalSection heading="3. How we use your information">
        <p>We use the information described above to:</p>
        <LegalList
          items={[
            "Respond to your enquiry and contact you about the services you asked about",
            "Prepare proposals, quotations, and strategy recommendations",
            "Provide, deliver, and support the services you engage us for",
            "Send service-related updates, reports, and account communications",
            "Understand how our website is used so we can improve it",
            "Measure the performance of our own marketing campaigns",
            "Meet legal, accounting, and regulatory obligations, and to establish or defend legal claims"
          ]}
        />
        <p>
          We do not sell your personal information. We do not share your contact details with
          unrelated third parties for their own marketing.
        </p>
      </LegalSection>

      <LegalSection heading="4. Consent and legal basis">
        <p>
          When you submit a form on our website, you consent to us using the details you provide to
          contact you about your enquiry. Where we rely on consent, you may withdraw it at any time
          by writing to{" "}
          <a href="mailto:info@digitalhub360.in" className="text-accent-primary hover:underline">
            info@digitalhub360.in
          </a>
          . Withdrawing consent does not affect processing already carried out, and we may continue
          to process limited information where we are required or permitted to do so by law, for
          example to maintain financial records.
        </p>
      </LegalSection>

      <LegalSection heading="5. Cookies and tracking technologies">
        <p>
          We use cookies and similar technologies to keep the site working correctly, remember your
          theme preference, understand traffic patterns, and measure advertising performance. This
          may include services such as Google Analytics, Google Ads, and Meta (Facebook) advertising
          tools.
        </p>
        <p>
          You can block or delete cookies through your browser settings. If you do, parts of the site
          may not work as intended. You can also opt out of personalised advertising through the
          settings offered by Google and Meta directly.
        </p>
      </LegalSection>

      <LegalSection heading="6. Who we share information with">
        <p>
          We share information only with service providers who help us operate our business, and only
          to the extent they need it. These include:
        </p>
        <LegalList
          items={[
            "Hosting and infrastructure providers that serve this website",
            "Google Workspace and Google Sheets, where enquiry submissions are recorded",
            "Email delivery providers used to notify our team of new enquiries",
            "Analytics and advertising platforms, including Google and Meta, for measurement",
            "Professional advisers such as accountants or lawyers, where necessary"
          ]}
        />
        <p>
          Some of these providers may store or process data on servers outside India. Where that
          happens, we take reasonable steps to ensure your information continues to be protected to a
          comparable standard.
        </p>
        <p>
          We may also disclose information where required by law, court order, or a valid request
          from a government or law-enforcement authority.
        </p>
      </LegalSection>

      <LegalSection heading="7. How we protect your information">
        <p>
          We apply reasonable technical and organisational safeguards, including encrypted (HTTPS)
          transmission, access controls on our systems, and limiting access to the team members who
          need it. No method of transmission or storage is completely secure, so while we work to
          protect your information, we cannot guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection heading="8. How long we keep your information">
        <p>
          We keep enquiry details for as long as needed to respond to you and, if you become a
          client, for the duration of our engagement plus a reasonable period afterwards. Financial
          and contractual records are retained for the period required under applicable Indian law.
          When information is no longer needed, we delete it or anonymise it.
        </p>
      </LegalSection>

      <LegalSection heading="9. Your rights">
        <p>
          Subject to applicable law, including India&apos;s Digital Personal Data Protection Act,
          2023, you may:
        </p>
        <LegalList
          items={[
            "Request access to the personal information we hold about you",
            "Ask us to correct information that is inaccurate or incomplete",
            "Ask us to delete your personal information",
            "Withdraw consent you previously gave",
            "Ask us to stop sending you marketing communications",
            "Raise a grievance about how your information has been handled"
          ]}
        />
        <p>
          To exercise any of these rights, email{" "}
          <a href="mailto:info@digitalhub360.in" className="text-accent-primary hover:underline">
            info@digitalhub360.in
          </a>
          . For deletion specifically, see our{" "}
          <Link href="/data-deletion" className="text-accent-primary hover:underline">
            Data Deletion Request
          </Link>{" "}
          page. We will verify your identity before acting on a request and will respond within a
          reasonable period, ordinarily within 30 days.
        </p>
      </LegalSection>

      <LegalSection heading="10. Third-party websites">
        <p>
          Our website links to external sites, including our own product websites and client
          properties. We are not responsible for the privacy practices or content of those sites, and
          we encourage you to read their privacy policies.
        </p>
      </LegalSection>

      <LegalSection heading="11. Children">
        <p>
          Our services are intended for businesses and are not directed at children. We do not
          knowingly collect personal information from anyone under 18. If you believe a child has
          provided us information, contact us and we will delete it.
        </p>
      </LegalSection>

      <LegalSection heading="12. Changes to this policy">
        <p>
          We may update this policy from time to time to reflect changes in our practices or the law.
          The revised version will be posted on this page with a new &ldquo;Last updated&rdquo; date.
          Significant changes will be communicated where reasonably possible.
        </p>
      </LegalSection>

      <LegalSection heading="13. Contact us">
        <p>
          If you have questions about this policy or how we handle your information, please get in
          touch. We aim to acknowledge every privacy request within a reasonable period.
        </p>
        <LegalContactCard />
      </LegalSection>
    </LegalPage>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { LegalContactCard, LegalList, LegalPage, LegalSection } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Data Deletion Request",
  description:
    "How to request deletion of your personal data from DigitalHub360, what gets deleted, and how long it takes.",
  alternates: { canonical: "/data-deletion" }
};

const SUBJECT = "Data Deletion Request";
const BODY = `Hello DigitalHub360 team,

I would like to request deletion of my personal data.

Full name:
Email address used:
Phone number used:
Service or product (if applicable):

I confirm that I am the owner of the details above.

Thank you.`;

const mailto = `mailto:info@digitalhub360.in?subject=${encodeURIComponent(
  SUBJECT
)}&body=${encodeURIComponent(BODY)}`;

export default function DataDeletionPage() {
  return (
    <LegalPage
      title="Data Deletion Request"
      intro="You can ask us to delete the personal data we hold about you at any time. This page explains exactly how to request it, what gets removed, and how long it takes."
      lastUpdated="19 August 2026"
    >
      <LegalSection heading="How to request deletion">
        <p>
          Send us a deletion request by email and we will process it. The quickest way is the button
          below, which opens a pre-filled email — just fill in your details and send it.
        </p>
        <div className="rounded-2xl border border-border bg-surface/50 p-6">
          <a
            href={mailto}
            className="inline-block rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:scale-105"
          >
            Request data deletion by email
          </a>
          <p className="mt-4 text-xs text-muted">
            Or email us directly at{" "}
            <a href="mailto:info@digitalhub360.in" className="text-accent-primary hover:underline">
              info@digitalhub360.in
            </a>{" "}
            with the subject line &ldquo;Data Deletion Request&rdquo;.
          </p>
        </div>
        <p>Please include the following so we can find and verify your records:</p>
        <LegalList
          items={[
            "Your full name",
            "The email address you used when contacting us",
            "The phone number you used, including country code",
            "The service or product your data relates to, if you know it"
          ]}
        />
        <p>
          Send the request from the email address you originally used where possible — it helps us
          verify ownership faster. If you cannot, we may ask you a few questions to confirm your
          identity before we delete anything, so that nobody can delete your data on your behalf
          without permission.
        </p>
      </LegalSection>

      <LegalSection heading="What we delete">
        <p>Once your request is verified, we remove the personal data we hold, including:</p>
        <LegalList
          items={[
            "Your name, phone number, and email address",
            "Enquiry and lead records submitted through our website forms",
            "Message content and notes associated with your enquiry",
            "Contact records held in our CRM, spreadsheets, and email marketing lists",
            "Account data held in our software products, where the request relates to one of them"
          ]}
        />
      </LegalSection>

      <LegalSection heading="What we may need to keep">
        <p>
          Some records cannot be deleted immediately. Where the law requires us to retain them, we
          keep the minimum necessary and restrict access to it. This may include:
        </p>
        <LegalList
          items={[
            "Invoices, payment records, and tax documentation required under Indian financial and tax law",
            "Records needed to establish, exercise, or defend a legal claim",
            "Signed contracts and related correspondence for the retention period required by law",
            "Anonymised or aggregated analytics that can no longer identify you"
          ]}
        />
        <p>
          We will tell you if any of these apply to your request and explain what is being retained
          and why.
        </p>
      </LegalSection>

      <LegalSection heading="How long it takes">
        <p>
          We acknowledge deletion requests within{" "}
          <span className="text-foreground">2 working days</span> and complete verified requests
          within <span className="text-foreground">30 days</span>. Once the deletion is done, we send
          you a confirmation by email. Backup copies are purged on our normal backup rotation, which
          may take up to a further 90 days.
        </p>
      </LegalSection>

      <LegalSection heading="Third-party platforms">
        <p>
          If your data was shared with advertising or analytics platforms such as Google or Meta as
          part of a campaign, we will remove you from audiences and lists we control. Data held
          independently by those platforms is governed by their own policies, and you can manage or
          delete it through their account settings directly.
        </p>
      </LegalSection>

      <LegalSection heading="Users of our software products">
        <p>
          If you use one of our products — Weflux, SheetPilot, EmbedCMS, or ShipTrack — you can
          request deletion of your account and associated data using the same process above. Mention
          the product name and the account email in your request. Deleting an account is permanent
          and removes your stored content, settings, and history for that product.
        </p>
      </LegalSection>

      <LegalSection heading="Other privacy rights">
        <p>
          Deletion is one of several rights you have. You can also request access to your data, ask
          us to correct it, or withdraw consent you previously gave. See our{" "}
          <Link href="/privacy-policy" className="text-accent-primary hover:underline">
            Privacy Policy
          </Link>{" "}
          for the full list, and our{" "}
          <Link href="/terms-and-conditions" className="text-accent-primary hover:underline">
            Terms &amp; Conditions
          </Link>{" "}
          for the terms governing our services.
        </p>
      </LegalSection>

      <LegalSection heading="Questions or complaints">
        <p>
          If you are unhappy with how we handled your request, reply to our response and ask for it
          to be escalated. We take privacy complaints seriously and will review them properly.
        </p>
        <LegalContactCard />
      </LegalSection>
    </LegalPage>
  );
}

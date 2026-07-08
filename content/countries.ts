export type Country = {
  code: string; // dial code, e.g. "+91"
  iso: string; // short label shown in the closed select
  name: string; // full name for the dropdown
  flag: string;
  // exact national number length(s); empty array = accept 6-14 digits
  lengths: number[];
};

// India first (default). Curated to the markets an India-based agency actually
// deals with — keeps the dropdown short and fast on mobile.
export const countries: Country[] = [
  { code: "+91", iso: "IN", name: "India", flag: "🇮🇳", lengths: [10] },
  { code: "+1", iso: "US", name: "United States / Canada", flag: "🇺🇸", lengths: [10] },
  { code: "+44", iso: "UK", name: "United Kingdom", flag: "🇬🇧", lengths: [10] },
  { code: "+971", iso: "AE", name: "United Arab Emirates", flag: "🇦🇪", lengths: [9] },
  { code: "+65", iso: "SG", name: "Singapore", flag: "🇸🇬", lengths: [8] },
  { code: "+61", iso: "AU", name: "Australia", flag: "🇦🇺", lengths: [9] },
  { code: "+966", iso: "SA", name: "Saudi Arabia", flag: "🇸🇦", lengths: [9] },
  { code: "+60", iso: "MY", name: "Malaysia", flag: "🇲🇾", lengths: [9, 10] },
  { code: "+977", iso: "NP", name: "Nepal", flag: "🇳🇵", lengths: [10] },
  { code: "+94", iso: "LK", name: "Sri Lanka", flag: "🇱🇰", lengths: [9] },
  { code: "+880", iso: "BD", name: "Bangladesh", flag: "🇧🇩", lengths: [10] },
  { code: "+974", iso: "QA", name: "Qatar", flag: "🇶🇦", lengths: [8] },
  { code: "+49", iso: "DE", name: "Germany", flag: "🇩🇪", lengths: [] },
  { code: "+33", iso: "FR", name: "France", flag: "🇫🇷", lengths: [9] }
];

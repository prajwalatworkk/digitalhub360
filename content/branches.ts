export type Branch = {
  slug: string;
  name: string;
  label: string;
  /** Street lines, printed in order above locality/city/state/pincode. */
  addressLines: string[];
  locality: string;
  city: string;
  state: string;
  postalCode?: string;
  country: string;
  phone: string;
  email: string;
  /** Google Maps link for the "Get directions" button. */
  mapsUrl?: string;
  hours?: string;
  isPrimary?: boolean;
};

const PHONE = "+91 78922 18476";
const EMAIL = "info@digitalhub360.in";

export const branches: Branch[] = [
  {
    slug: "btm-1st-stage",
    name: "BTM 1st Stage",
    label: "Head Office",
    addressLines: ["Digital Hub 360", "97, 10th Main Road", "KEB Colony, 1st Stage"],
    locality: "BTM 1st Stage",
    city: "Bengaluru",
    state: "Karnataka",
    postalCode: "560029",
    country: "India",
    phone: PHONE,
    email: EMAIL,
    mapsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Digital+Hub+360%2C+97%2C+10th+Main+Rd%2C+KEB+Colony%2C+1st+Stage%2C+BTM+1st+Stage%2C+Bengaluru%2C+Karnataka+560029",
    isPrimary: true
  },
  {
    slug: "hsr-layout",
    name: "HSR Layout",
    label: "Branch Office",
    // TODO: full street address pending from owner — showing locality only for now.
    addressLines: [],
    locality: "HSR Layout",
    city: "Bengaluru",
    state: "Karnataka",
    country: "India",
    phone: PHONE,
    email: EMAIL
  }
];

export const primaryBranch = branches.find((b) => b.isPrimary) ?? branches[0];

/** Single-line address, used in the footer, legal pages, and JSON-LD. */
export function formatAddress(branch: Branch): string {
  return [...branch.addressLines, branch.locality, branch.city, branch.state, branch.postalCode]
    .filter(Boolean)
    .join(", ");
}

export function telHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

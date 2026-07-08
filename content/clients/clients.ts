export type Client = {
  name: string;
  logoPath?: string;
};

// Confirmed real past clients only — logos supplied directly by the owner.
// Do not add recognizable third-party brands here unless each one is
// individually verified — see project notes.
export const clients: Client[] = [
  { name: "Fact Insure", logoPath: "/logos/clients/fact-insure.png" },
  { name: "Akarsh Developers", logoPath: "/logos/clients/akarsh-developers.png" },
  { name: "Clara Dental", logoPath: "/logos/clients/clara-dental.png" },
  { name: "Sri Ganesh Jewellers", logoPath: "/logos/clients/sri-ganesh-jewellers.png" },
  { name: "De Terrain Estates", logoPath: "/logos/clients/terrain-estates.png" },
  { name: "Astro Siddhi", logoPath: "/logos/clients/astro-siddhi.png" },
  { name: "Matangi Healings", logoPath: "/logos/clients/matangi-healings.png" },
  { name: "Tunes Academy", logoPath: "/logos/clients/tunes-academy.png" },
  { name: "Zaveri Bros", logoPath: "/logos/clients/zaveri-bros.png" },
  { name: "Pets Unlimited", logoPath: "/logos/clients/pets-unlimited.png" }
];

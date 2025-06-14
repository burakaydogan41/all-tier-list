import { useState } from "react";

const tiers = [
  "T1 - Omniversal",
  "T2 - Beyond Multiversal",
  "T3 - High Multiversal",
  "T4 - Multiversal+",
  "T5 - Multiversal",
  "T6 - Universal+",
  "T7 - Universal",
  "T8 - Large Planetary to Galaxy Level",
  "T9 - Star System Level",
  "T10 - Planetary",
  "T11 - Moon Level",
  "T12 - Continent Level",
  "T13 - Country Level",
  "T14 - City Level",
  "T15 - Mountain Level",
  "T16 - Building Level",
  "T17 - Wall Level",
  "T18 - Street Level",
  "T19 - Peak Human",
  "T20 - Regular Human"
];


const characters = 
  { id: 1, name: "Rimuru Tempest", universe: "Slime Datta Ken", tier: "T5 - Multiversal" },
  { id: 2, name: "Diablo", universe: "Slime Datta Ken", tier: "T6 - Universal+" },
  { id: 3, name: "Shion", universe: "Slime Datta Ken", tier: "T8 - Large Planetary to Galaxy Level" },
  { id: 4, name: "Benimaru", universe: "Slime Datta Ken", tier: "T9 - Star System Level" },
  { id: 5, name: "Shuna", universe: "Slime Datta Ken", tier: "T14 - City Level" },
  { id: 6, name: "Souei", universe: "Slime Datta Ken", tier: "T8 - Large Planetary to Galaxy Level" },
  { id: 7, name: "Hakurou", universe: "Slime Datta Ken", tier: "T15 - Mountain Level" },
  { id: 8, name: "Ranga", universe: "Slime Datta Ken", tier: "T12 - Continent Level" },
  { id: 9, name: "Veldora Tempest", universe: "Slime Datta Ken", tier: "T4 - Multiversal+" },
  { id: 10, name: "Milim Nava", universe: "Slime Datta Ken", tier: "T3 - High Multiversal" },
];

export default function Home() {
  const [selectedTier, setSelectedTier] = useState(tiers[0]);

  const filtered = characters.filter(c => c.tier === selectedTier);

  return (
    <div style={{ padding: "1rem", fontFamily: "Arial, sans-serif" }}>
      <h1>All Tier List</h1>
      <div style={{ marginBottom: "1rem" }}>
        {tiers.map(tier => (
          <button
            key={tier}
            onClick={() => setSelectedTier(tier)}
            style={{
              marginRight: "0.5rem",
              padding: "0.5rem 1rem",
              background: selectedTier === tier ? "#222" : "#eee",
              color: selectedTier === tier ? "#fff" : "#000",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer"
            }}
          >
            {tier}
          </button>
        ))}
      </div>

      <h2>{selectedTier} Tier Characters</h2>
      <ul>
        {filtered.map(c => (
          <li key={c.id}>
            <strong>{c.name}</strong> - {c.universe}
          </li>
        ))}
        {filtered.length === 0 && <li>No characters in this tier.</li>}
      </ul>
    </div>
  );
}

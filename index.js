import { useState } from "react";

const tiers = [
  "10-C", "9-B", "8-A", "7-S", "6-SS", "5-SSS", 
  "4-God", "3-Celestial", "2-Cosmic", "1-Universe", "0-Multiverse"
];

const characters = [
  { id: 1, name: "Goku", universe: "Dragon Ball", tier: "0-Multiverse" },
  { id: 2, name: "Saitama", universe: "One Punch Man", tier: "1-Universe" },
  { id: 3, name: "Spider-Man", universe: "Marvel", tier: "5-SSS" },
  { id: 4, name: "Zeno", universe: "Dragon Ball", tier: "0-Multiverse" },
  { id: 5, name: "Naruto", universe: "Naruto", tier: "6-SS" }
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

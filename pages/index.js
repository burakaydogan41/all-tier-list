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


const characters = [
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
  { id: 11, name: "Frey", universe: "Slime Datta Ken", tier: "T13 - Country Level" },
  { id: 12, name: "Gabil", universe: "Slime Datta Ken", tier: "T17 - Wall Level" },
  { id: 13, name: "Iroha", universe: "Slime Datta Ken", tier: "T15 - Mountain Level" },
  { id: 14, name: "Rigurdo", universe: "Slime Datta Ken", tier: "T18 - Street Level" },
  { id: 15, name: "Gobta", universe: "Slime Datta Ken", tier: "T20 - Regular Human" },
  { id: 16, name: "Ramiris", universe: "Slime Datta Ken", tier: "T7 - Universal" },
  { id: 17, name: "Geld", universe: "Slime Datta Ken", tier: "T6 - Universal+" },
  { id: 18, name: "Carrion", universe: "Slime Datta Ken", tier: "T11 - Moon Level" },
  { id: 19, name: "Clayman", universe: "Slime Datta Ken", tier: "T5 - Multiversal" },
  { id: 20, name: "Treyni", universe: "Slime Datta Ken", tier: "T14 - City Level" },
  { id: 21, name: "Hinata Sakaguchi", universe: "Slime Datta Ken", tier: "T9 - Star System Level" },
  { id: 22, name: "Kurobe", universe: "Slime Datta Ken", tier: "T16 - Building Level" },
  { id: 23, name: "Luminous Valentine", universe: "Slime Datta Ken", tier: "T13 - Country Level" },
  { id: 24, name: "Towa", universe: "Slime Datta Ken", tier: "T6 - Universal+" },
  { id: 25, name: "Kaguya Ōtsutsuki", universe: "Naruto", tier: "T2 - Beyond Multiversal" },
  { id: 26, name: "Hagoromo Ōtsutsuki (Sage of Six Paths)", universe: "Naruto", tier: "T3 - High Multiversal" },
  { id: 27, name: "Hamura Ōtsutsuki", universe: "Naruto", tier: "T4 - Multiversal+" },
  { id: 28, name: "Naruto Uzumaki (Sage Mode + Kurama)", universe: "Naruto", tier: "T5 - Multiversal" },
  { id: 29, name: "Sasuke Uchiha (Rinnegan + Eternal Mangekyo)", universe: "Naruto", tier: "T5 - Multiversal" },
  { id: 30, name: "Madara Uchiha (Ten Tails Jinchuriki)", universe: "Naruto", tier: "T5 - Multiversal" },
  { id: 31, name: "Hashirama Senju", universe: "Naruto", tier: "T7 - Universal" },
  { id: 32, name: "Obito Uchiha (Ten Tails Jinchuriki)", universe: "Naruto", tier: "T5 - Multiversal" },
  { id: 33, name: "Kakashi Hatake (Double Mangekyo Sharingan)", universe: "Naruto", tier: "T9 - Star System Level" },
  { id: 34, name: "Might Guy (Eighth Gate)", universe: "Naruto", tier: "T8 - Large Planetary to Galaxy Level" },
  { id: 35, name: "Minato Namikaze (Fourth Hokage)", universe: "Naruto", tier: "T10 - Planetary" },
  { id: 36, name: "Itachi Uchiha", universe: "Naruto", tier: "T11 - Moon Level" },
  { id: 37, name: "Tsunade Senju", universe: "Naruto", tier: "T14 - City Level" },
  { id: 38, name: "Gaara (Kazekage)", universe: "Naruto", tier: "T13 - Country Level" },
  { id: 39, name: "Shikamaru Nara", universe: "Naruto", tier: "T16 - Building Level" },
  { id: 40, name: "Neji Hyuga", universe: "Naruto", tier: "T15 - Mountain Level" },
  { id: 41, name: "Rock Lee (Without Eight Gates)", universe: "Naruto", tier: "T19 - Peak Human" },
  { id: 42, name: "Hinata Hyuga", universe: "Naruto", tier: "T18 - Street Level" },
  { id: 43, name: "Killer Bee", universe: "Naruto", tier: "T12 - Continent Level" },
  { id: 44, name: "Jiraiya", universe: "Naruto", tier: "T11 - Moon Level" },
  { id: 45, name: "Orochimaru", universe: "Naruto", tier: "T12 - Continent Level" },
  { id: 46, name: "Sai", universe: "Naruto", tier: "T16 - Building Level" },
  { id: 47, name: "Kurenai Yuhi", universe: "Naruto", tier: "T18 - Street Level" },
  { id: 48, name: "Asuma Sarutobi", universe: "Naruto", tier: "T18 - Street Level" },
  { id: 49, name: "Shino Aburame", universe: "Naruto", tier: "T18 - Street Level" },
  { id: 50, name: "Konohamaru Sarutobi", universe: "Naruto", tier: "T19 - Peak Human" },
  { id: 51, name: "Tenten", universe: "Naruto", tier: "T19 - Peak Human" },
  { id: 52, name: "Kiba Inuzuka", universe: "Naruto", tier: "T18 - Street Level" },
  { id: 53, name: "Shisui Uchiha", universe: "Naruto", tier: "T10 - Planetary" },
  { id: 54, name: "Obito Uchiha (Masked)", universe: "Naruto", tier: "T5 - Multiversal" },
  { id: 55, name: "Nagato (Pain)", universe: "Naruto", tier: "T7 - Universal" },
  { id: 56, name: "Killer Bee (Jinchuriki)", universe: "Naruto", tier: "T11 - Moon Level" },
  { id: 57, name: "Hiruzen Sarutobi (Third Hokage)", universe: "Naruto", tier: "T12 - Continent Level" },
  { id: 58, name: "Danzo Shimura", universe: "Naruto", tier: "T13 - Country Level" },
  { id: 59, name: "Kakuzu", universe: "Naruto", tier: "T13 - Country Level" },
  { id: 60, name: "Zabuza Momochi", universe: "Naruto", tier: "T17 - Wall Level" },
  { id: 61, name: "Haku", universe: "Naruto", tier: "T18 - Street Level" },
  { id: 62, name: "Kimimaro", universe: "Naruto", tier: "T14 - City Level" },
  { id: 63, name: "Yamato", universe: "Naruto", tier: "T14 - City Level" },
  { id: 64, name: "Sai (Anbu)", universe: "Naruto", tier: "T15 - Mountain Level" },
  { id: 65, name: "Kurenai Yuhi (Anbu)", universe: "Naruto", tier: "T16 - Building Level" },
  { id: 66, name: "Ino Yamanaka", universe: "Naruto", tier: "T18 - Street Level" },
  { id: 67, name: "Choji Akimichi", universe: "Naruto", tier: "T17 - Wall Level" },
  { id: 68, name: "Shikadai Nara", universe: "Naruto", tier: "T18 - Street Level" },
  { id: 69, name: "Boruto Uzumaki", universe: "Naruto", tier: "T17 - Wall Level" },
  { id: 70, name: "Sarada Uchiha", universe: "Naruto", tier: "T18 - Street Level" },
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

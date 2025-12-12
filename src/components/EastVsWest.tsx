import { useState } from 'react';
import './css/Section.css';
import './css/EastVsWest.css';

const EastVsWest = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const comparisonData = [
    {
      category: 'Philosophy',
      east: 'Collective responsibility and group harmony',
      west: 'Individual exceptionalism, individualistic heroism, and personal sacrifice'
    },
    {
      category: 'Power Source',
      east: 'Power is typically bestowed by an organization, a higher authority, or through an inherited legacy. The hero must often undergo a test or rite of passage to prove they are worthy of the equipment or mantle, emphasizing suitability for a pre-existing duty.',
      west: "Power is often achieved through personal exploration, scientific self-experimentation (e.g., Iron Man, Hulk, Spider-Man), or random accident. The hero's moral journey to accept the power is often the primary conflict."
    },
    {
      category: 'Hero Structure',
      east: 'Teams and groups working together seamlessly',
      west: 'Individualistic heroes or loosely connected teams'
    },
    {
      category: 'Technology',
      east: 'Shared systems requiring cooperation nad their amor and weaponary does have connection with each other',
      west: 'Personal enhancements and individual gadgets'
    },
    {
      category: 'Cultural Context',
      east: 'Inseparable from national/cultural identity',
      west: 'Often operates outside cultural boundaries'
    },
    {
      category: 'Modernization Anxiety',
      east: 'Explicitly addressed through narrative as the central themes(Gundala - class disparity, social cohesion, political conspiracy; Mighty Guardian - identity crisis, corruption, etc.)',
      west: 'Less central to the narrative structure'
    }
  ];

  return (
    <section className="section east-vs-west-section">
      <div className="container">
        <h2 className="section-title">{"East vs West: A Comparative Analysis".toUpperCase()}</h2>
        <p className="section-intro">
          This interactive comparison highlights the fundamental differences between <strong>Asian</strong> and <strong>Western</strong> superhero narratives.
        </p>

        <div className="comparison-container">
          <div className="comparison-header">
            <div className="comparison-column-header east-header">
              <h3>Asian Superheroes</h3>
              <p>Collectivism</p>
            </div>
            <div className="comparison-column-header west-header">
              <h3>Western Superheroes</h3>
              <p>Individualism</p>
            </div>
          </div>

          <div className="comparison-table">
            {comparisonData.map((item, index) => (
              <div
                key={index}
                className={`comparison-row ${selectedCategory === item.category ? 'selected' : ''}`}
                onClick={() => setSelectedCategory(
                  selectedCategory === item.category ? null : item.category
                )}
              >
                <div className="comparison-category">
                  <strong>{item.category}</strong>
                </div>
                <div className="comparison-content">
                  <div className="comparison-cell east-cell">
                    {item.east}
                  </div>
                  <div className="comparison-cell west-cell">
                    {item.west}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default EastVsWest;



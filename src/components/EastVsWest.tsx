import { useState } from 'react';
import './css/Section.css';
import './css/EastVsWest.css';

const EastVsWest = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const comparisonData = [
    {
      category: 'Philosophy',
      east: 'Collective responsibility and group harmony',
      west: 'Individual achievement and personal power'
    },
    {
      category: 'Power Source',
      east: 'Synchronization, teamwork, and unity',
      west: 'Individual strength and personal abilities'
    },
    {
      category: 'Hero Structure',
      east: 'Teams and groups working together',
      west: 'Lone heroes or loosely connected individuals'
    },
    {
      category: 'Technology',
      east: 'Shared systems requiring cooperation (mecha, collective weapons)',
      west: 'Personal enhancements and individual gadgets'
    },
    {
      category: 'Cultural Context',
      east: 'Inseparable from national/cultural identity',
      west: 'Often transcends or operates outside cultural boundaries'
    },
    {
      category: 'Conflict Resolution',
      east: 'Through collective effort and social harmony',
      west: 'Through individual heroism and personal sacrifice'
    },
    {
      category: 'Modernization Anxiety',
      east: 'Explicitly addressed through narrative',
      west: 'Less central to the narrative structure'
    }
  ];

  return (
    <section className="section east-vs-west-section">
      <div className="container">
        <h2 className="section-title">{"East vs West: A Comparative Analysis".toUpperCase()}</h2>
        <p className="section-intro">
          This interactive comparison highlights the fundamental differences between Asian and Western 
          superhero narratives, emphasizing the collectivism versus individualism divide.
        </p>

        <div className="comparison-container">
          <div className="comparison-header">
            <div className="comparison-column-header east-header">
              <h3>Asian Model</h3>
              <p>Collectivism</p>
            </div>
            <div className="comparison-column-header west-header">
              <h3>Western Model</h3>
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

        <div className="key-takeaway">
          <h3>Key Takeaway</h3>
          <p>
            The fundamental difference lies in the <strong>source of power</strong>: Asian superheroes 
            derive strength from collective action and cultural unity, while Western heroes typically 
            rely on individual capabilities. This reflects deeper cultural values about the relationship 
            between the individual and society.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EastVsWest;



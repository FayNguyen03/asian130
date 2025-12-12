import './css/Section.css';
import './css/Introduction.css';
const Introduction = () => {
  return (
    <section className="section introduction-section">
      <div className="container">
        <h2 className="section-title">INTRODUCTION</h2>
        <div className="content">

        <p className="lead">
          <span className="hero-glow">Superheroes</span> represent a prominent subgenre of <span className="scifi-glow">SCIENCE FICTION</span> since they often feature technologically enhanced guardians, giant mecha, and antagonists often created from environmental crises or disastrous scientific phenomena.
        </p>
        <p style={{ marginTop: '2rem', textAlign: 'center' }}>
          With global franchises (Marvel and DC Comics), the genre boasts a vast and diverse audience worldwide. Most of the heroes from the West often possess extraordinary power and operate independently, so they clearly embody the spirit of individualism.
        </p>
          <div className="key-points">
            <h3><span className="hero-glow">Asian Superheroes</span></h3>
            <p>
              Asian superheroes consist of multiple sci-fi subgenres:
            </p>
            <ul>
              <li><strong>Technology:</strong> Advanced technological enhancements for armors and futuristic weaponry</li>
              <li><strong>Mecha:</strong> Giant robotic systems that require collaborative operation</li>
              <li><strong>Environmental Science Fiction:</strong> Villainous creatures born from environmental crises 
              or speculative scientific phenomena</li>
              <li><strong>Kaiju/Monster Influence:</strong> Antagonists frequently take the form of massive, city-destroying monsters (Kaiju) or mystical creatures drawn from Asian folklore, and possess physical strength but strategic, large-scale defense.</li>
            </ul>

            <div className="section-note">
            <h3>ABSTRACT</h3>
            <p>
            Asian superhero narratives fundamentally diverge from their Western counterparts by <strong>prioritizing collective responsibility over individual power</strong>. These narratives also use futuristic conflict between humanity and hostile forces to <strong>navigate specific cultural and societal anxieties regarding rapid modernization and social cohesion</strong>. Besides, the heroes’ backstories and powers often <strong>highlight their deep inseparability from their national, cultural, and historical context</strong>. 
            </p>
          </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;



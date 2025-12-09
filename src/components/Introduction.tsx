import './css/Section.css';
import './css/Introduction.css';
const Introduction = () => {
  return (
    <section className="section introduction-section">
      <div className="container">
        <h2 className="section-title">INTRODUCTION</h2>
        <div className="content">

        <p className="lead">
          <span className="hero-glow">Superheroes</span> represent a prominent subgenre of <span className="scifi-glow">SCIENCE FICTION</span> since they often feature technologically enhanced guardians, giant mecha, and villainous creatures often created from environmental crises or disastrous scientific phenomena.
        </p>

          <div className="key-points">
            <h3><span className="hero-glow">Asian Superheroes</span></h3>
            <p>
              Asian superheroes constitute a distinct sci-fi subgenre characterized by:
            </p>
            <ul>
              <li><strong>Technology:</strong> Advanced technological enhancements for armors and futuristic weaponry</li>
              <li><strong>Mecha:</strong> Giant robotic systems that require collaborative operation</li>
              <li><strong>Environmental Science Fiction:</strong> Villainous creatures born from environmental crises 
              or speculative scientific phenomena</li>
              <li><strong>Kaiju/Monster Influence:</strong> Antagonists frequently take the form of massive, city-destroying monsters (Kaiju) or mystical creatures (Yokai) drawn from East Asian folklore, requiring not just physical strength but strategic, large-scale defense.</li>
            </ul>

            <div className="section-note">
            <h3>Abstract</h3>
            <p>
              <strong>Asian superhero narratives diverge from their Western counterparts, 
              which traditionally prioritize individualism, by championing collective responsibility over 
              individual power.</strong> These narratives use futuristic conflict between humanity and 
              hostile forces to navigate specific cultural anxieties regarding rapid modernization and 
              social cohesion as well as emphasize the hero's inseparability from their national, cultural, 
              & historical context.
            </p>
          </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;



import './Section.css';

const Introduction = () => {
  return (
    <section className="section introduction-section">
      <div className="container">
        <h2 className="section-title">Introduction</h2>
        <div className="content">
          <p className="lead">
            Superheroes represent a prominent subgenre of science fiction since they feature 
            technologically enhanced guardians, giant mecha, and villainous creatures often created 
            from environmental crises or speculative scientific phenomena.
          </p>
          
          <div className="main-argument">
            <h3>Core Argument</h3>
            <p>
              <strong>Asian superhero narratives fundamentally diverge from their Western counterparts, 
              which traditionally prioritize individualism, by championing collective responsibility over 
              individual power.</strong> These narratives use futuristic conflict between humanity and 
              hostile forces to navigate specific cultural anxieties regarding rapid modernization and 
              social cohesion as well as emphasize the hero's inseparability from their national, cultural, 
              and historical context.
            </p>
          </div>

          <div className="key-points">
            <h3>Defining Asian Superheroes</h3>
            <p>
              Asian superheroes constitute a distinct sci-fi subgenre characterized by:
            </p>
            <ul>
              <li><strong>Technology:</strong> Advanced technological enhancements and futuristic weaponry</li>
              <li><strong>Mecha:</strong> Giant robotic systems that require collective operation</li>
              <li><strong>Environmental Monsters:</strong> Villainous creatures born from environmental crises 
              or speculative scientific phenomena</li>
            </ul>
            <p>
              While Western heroes prioritize individualism, Asian narratives champion collective responsibility, 
              using sci-fi elements to navigate anxieties about rapid modernization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;



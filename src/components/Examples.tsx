import './css/Section.css';
import './css/Examples.css';
const Examples = () => {
  return (
    <section className="section case-studies-section">
      <div className="container">
        <h2 className="section-title">EXAMPLES</h2>
        
        <div className="case-study">
          <div className="case-header">
            <h3 className="case-title">SUPER SENTAI SERIES (スーパー戦隊シリーズ)</h3>
            <span className="case-country">🇯🇵 Japan</span>
          </div>
          <div className="case-content">
            <div className="case-image-placeholder">
              <img src={"SuperSentai/super_sentai_logo.png"} alt="Super Sentai Series" style={{ width: '100%', height: '100%', objectFit: 'contain' }}/>
            </div>
            <div className="case-text">
              <h4>The Mecha System & Team Dynamics</h4>
              <p>
                The Super Sentai series exemplifies the Japanese approach to superhero narratives through 
                its emphasis on collective action. The mecha system—giant robots that require multiple 
                heroes to operate—serves as a powerful symbol of corporate and societal harmony.
              </p>
              <p>
                <strong>Key Characteristics:</strong>
              </p>
              <ul>
                <li>Superheroes always work in teams, never as isolated individuals</li>
                <li>Power is achieved through synchronization and cooperation</li>
                <li>The mecha represents the necessity of collective effort</li>
                <li>Each member's unique abilities contribute to the whole</li>
              </ul>
              <p>
                This model reflects Japan's cultural values of group harmony (wa) and the importance 
                of collective responsibility in both corporate and social contexts. The heroes' power 
                comes not from individual strength but from their ability to work together seamlessly.
              </p>
            </div>
          </div>
        </div>

        <div className="case-study">
          <div className="case-header">
            <h3 className="case-title">GUNDALA</h3>
            <span className="case-country">🇮🇩 Indonesia</span>
          </div>
          <div className="case-content">
            <div className="case-image-placeholder">
              <img src={"Gundala/logo.webp"} alt="Gundala" style={{ width: '100%', height: '100%', objectFit: 'contain' }}/>
            </div>
            <div className="case-text">
              <h4>Bio-Electricity & Industrial Settings</h4>
              <p>
                Gundala presents a superhero narrative deeply rooted in Indonesian social realities, 
                using bio-electricity and industrial settings to reflect class disparity and the need 
                for a "people's champion."
              </p>
              <p>
                <strong>Key Characteristics:</strong>
              </p>
              <ul>
                <li>Bio-electric powers that connect the hero to natural and industrial energy</li>
                <li>Industrial settings highlighting the gap between classes</li>
                <li>The hero as a champion of the common people</li>
                <li>Technology as both a source of power and a reflection of social inequality</li>
              </ul>
              <p>
                Gundala's narrative addresses Indonesia's rapid modernization and the resulting social 
                tensions. The hero's bio-electric abilities symbolize a connection to both the natural 
                world and the industrial forces shaping modern Indonesia, while his role as protector 
                of the marginalized reflects anxieties about social cohesion in a rapidly changing society.
              </p>
            </div>
          </div>
        </div>

        <div className="case-study">
          <div className="case-header">
            <h3 className="case-title">MIGHTY GUARDIAN (CHIẾN BINH LẠC HỒNG)</h3>
            <span className="case-country">🇻🇳 Vietnam</span>
          </div>
          <div className="case-content">
            <div className="case-image-placeholder">
            <img src={"MightyGuardian/logo.webp"} alt="Mighty Guardian" style={{ width: '25rem', height: '25rem', objectFit: 'contain' }}/>
            </div>
            <div className="case-text">
              <h4>Mythology Meets Futuristic Armor</h4>
              <p>
                Mighty Guardian represents a unique approach to preserving national identity amidst 
                rapid technological growth by fusing traditional mythology with futuristic armor.
              </p>
              <p>
                <strong>Key Characteristics:</strong>
              </p>
              <ul>
                <li>Integration of Vietnamese mythology and folklore into the hero's identity</li>
                <li>Futuristic armor that incorporates traditional design elements</li>
                <li>The hero as a bridge between past and future</li>
                <li>Technology as a means of preserving rather than erasing cultural identity</li>
              </ul>
              <p>
                This narrative addresses Vietnam's unique position as a nation balancing rapid 
                technological advancement with deep cultural traditions. The Mighty Guardian 
                demonstrates that modernization need not come at the cost of cultural heritage, 
                instead showing how technology can be used to strengthen and preserve national 
                identity in the face of globalizing forces.
              </p>
            </div>
          </div>
        </div>

        <div className="case-study">
          <div className="case-header">
            <h3 className="case-title">ARMOR HERO (铠甲勇士系列)</h3>
            <span className="case-country">🇨🇳 China</span>
          </div>
          <div className="case-content">
            <div className="case-image-placeholder">
              <img src={"AmorHero/logo.png"} alt="Armor Hero" style={{ width: '100%', height: '100%', objectFit: 'contain' }}/>
            </div>
            <div className="case-text">
              <h4>Mythology Meets Futuristic Armor</h4>
              <p>
                Mighty Guardian represents a unique approach to preserving national identity amidst 
                rapid technological growth by fusing traditional mythology with futuristic armor.
              </p>
              <p>
                <strong>Key Characteristics:</strong>
              </p>
              <ul>
                <li>Integration of Chinese mythology (Metal, Wood, Water, Fire, Earth) and folklore into the hero's identity</li>
                <li>None of the standard heroes can succeed alone; their powers are designed to be used in cooperative elemental combinations for maximum effect and get to the best form: Emperor Armor</li>
                <li>The hero as a bridge between past and future</li>
              </ul>
              <p>
                This narrative addresses Vietnam's unique position as a nation balancing rapid 
                technological advancement with deep cultural traditions. The Mighty Guardian 
                demonstrates that modernization need not come at the cost of cultural heritage, 
                instead showing how technology can be used to strengthen and preserve national 
                identity in the face of globalizing forces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Examples;



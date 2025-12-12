import './css/Section.css';
import './css/Examples.css';
const Examples = () => {
  return (
    <section className="section case-studies-section">
      <div className="container">
        <h2 className="section-title">NOTABLE ASIAN SUPERHERO SERIES</h2>
        
        <div className="case-study">
          <div className="case-header">
            <h3 className="case-title">SUPER SENTAI SERIES (スーパー戦隊シリーズ)</h3>
            <span className="case-country">🇯🇵 Japan</span>
          </div>
          <div className="case-content">
            <div className="case-image-placeholder">
              <img src={"SuperSentai/super_sentai_logo.png"} alt="Super Sentai Series" style={{ width: '100%', height: '100%', objectFit: 'contain' }}/>
            </div>
            <div className="case-text">ß
              <h4>Team Dynamics and Mecha System</h4>
              <p>
                This 50-year-old series exemplifies the Japanese approach to superhero narratives through 
                its emphasis on cultural values of group harmony (和) and the importance 
                of collective responsibility in both corporate and social contexts.
              </p>
              <p style={{ fontSize: '1.2rem' }}>
                <strong>Key Characteristics:</strong>
              </p>
              <ul>
                <li>"Super" refers to the usage of enhanced technology (or magic) and mecha systems</li>
                <li>"Sentai" means "task force" in Japanese so power is achieved through synchronization and cooperation and the mecha system represents the necessity of collective effort</li>
                <li>Villians are often created from environmental crises or disastrous scientific phenomena. They often collaborate with each other to form a larger threat to the Earth. However, their internal structure is highly stratified due to internal rivalry and intense competition between the villians, which are the critial weakness that contributes to their ultimate defeat</li>
                <li>These series are deeply rooted in Japanese culture and society, incorporating traditional Japanese values (samurai, ninja, folklore, etc.) and aesthetics as well as addressing specific the modern societal issues (gender roles, identity crisis, national identity crisis, etc.) into the narrative</li>
              </ul>
              <p style={{ fontSize: '1.2rem' }}>
                <strong>International Influence:</strong>
              </p>
              <ul>
                <li>Broadcasted in over 30 countries and regions (Europe,Latin America, Southeast Asia, etc.) around the world, Super Sentai has had a significant impact on the global superhero genre.</li>
                <li>American adaptations of Super Sentai (Power Rangers) have also been successful and have had a significant impact on the global superhero genre in the US. However, most of the power rangers removed explicit Japanese cultural elements to suit Western audiences</li>
              </ul>
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
              <h4>Bio-electricity (Lightning) & Industrial Settings</h4>
              <p>
                The movie is about a working-class man with Astraphobia named Sancaka. His tragic childhood story was caused by greedy and cruel factory owners, criminal gangs, and the governors of a society that is failing to protect its most vulnerable members. By utilizing the power of lightning, he is able to fight and represent for the Indonesian people in the name of the people (rakyat) as Gundala. 
              </p>
              <p>
                <strong>Key Characteristics:</strong>
              </p>
              <ul>
                <li>A superhero narrative deeply rooted in Indonesian social realities (class disparity, social cohesion, political conspiracy, etc.)</li>
                <li>Bio-electric powers that connect the hero to his trauma in childhood and a connection to both the natural world and the industrial forces shaping modern Indonesia</li>
                <li>Technology as the mean for the hero to utilize his natural power without harming innocent people</li>
                <li>His role as protector of the marginalized reflects anxieties about social cohesion in a rapidly changing society</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="case-study">
          <div className="case-header">
            <h3 className="case-title">MIGHTY GUARDIAN (CHIẾN THẦN)</h3>
            <span className="case-country">🇻🇳 Vietnam</span>
          </div>
          <div className="case-content">
            <div className="case-image-placeholder">
              <div>
                <img className="image-with-caption" src={"MightyGuardian/logo.webp"} alt="Mighty Guardian" style={{ width: '100%', height: '100%' }}/>
                <figcaption className="image-caption">Mighty Guardian Lost Avian</figcaption>             
                </div>
            </div>
            <div className="case-text">
              <h4>Vietnamese Mythology Meets Futuristic Armor</h4>
              <p>
                Mighty Guardian represents a unique approach to preserving national identity and cultural heritage amidst 
                rapid technological growth by fusing traditional mythology (Hung King, Son Tinh, etc.) with futuristic armor. This also addresses Vietnam's unique position as a nation balancing rapid 
                technological advancement with deep cultural traditions. The Mighty Guardian 
                demonstrates that modernization need not come at the cost of cultural heritage, 
                instead showing how technology can be used to strengthen and preserve national 
                identity in the face of globalizing forces.
              </p>
              <p>
                <strong>Key Characteristics:</strong>
              </p>
              <ul>
                <li>Integration of Vietnamese mythology (Hung King, Son Tinh, etc.) and mysterious monsters from folklore () into the hero's identity</li>
                <li>Futuristic armor that incorporates traditional design elements </li>
                <li>The hero as a bridge between past and future</li>
                <li>Technology as a means of preserving rather than erasing cultural identity</li>
              </ul>
              <p>
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



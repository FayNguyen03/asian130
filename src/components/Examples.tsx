import './css/Section.css';
import './css/Examples.css';
import PhotoGallery from './PhotoGallery';
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
            <div className="case-text">
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
          <PhotoGallery 
            images={[
              {
                src: "SuperSentai/SPDPoster.webp",
                alt: "SPD Dekaranger Poster",
                description: "Dekaranger (2004) - A police-themed series showcasing law enforcement teamwork and justice to protect the Earth and the whole universe."
              },
              {
                src: "SuperSentai/Magiranger_Poster.webp",
                alt: "Magiranger Poster",
                description: "Magiranger (2005) - A magic-themed series where family bonds and magical cooperation are central."
              },
              {
                src: "SuperSentai/Boukenger_poster.webp",
                alt: "Boukenger Poster",
                description: "Boukenger (2006) - An adventure-themed series emphasizing treasure hunting, exploration, and collective problem-solving."
              },
              {
                src: "SuperSentai/GekiPoster.webp",
                alt: "Gekiranger Poster",
                description: "Gekiranger (2007) - A martial arts-themed series emphasizing physical discipline and teamwork."
              },
              {
                src: "SuperSentai/Go-Onger_Poster.webp",
                alt: "Go-Onger Poster",
                description: "Go-Onger (2008) - An automotive-themed series addressing environmental issues through team cooperation."
              },
              {
                src: "SuperSentai/Shinkenger_Poster.webp",
                alt: "Shinkenger Poster",
                description: "Shinkenger (2009) - A samurai-themed series blending traditional Japanese warrior values and aesthetics with modern teamwork."
              }
            ]}
          />
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
                <img className="image-with-caption" src={"MightyGuardian/logo.webp"} alt="Mighty Guardian" style={{ width: '100%', height: '100%' }}/>
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
                <li>Integration of Vietnamese mythology (Hung King, Son Tinh, etc.) and mysterious monsters from folklore (Wicked Cobra, Wicked Rooster, etc) into the narrative</li>
                <li>Futuristic armor and weaponary that incorporates traditional design elements </li>
                <li>The character development of Quan (Mighty Guardian Lost Avian XIX) from a undetermined and aimless person to become more responsible and got the acceptance from the previous Mighty Guardian Lost Avian XVII (Hung King) to hold the responsibility to protect Vietnam from the threat of the mysterious monsters from folklore.</li>
                <li>Collaboration between the Mighty Guardian, Mighty Guardian Alpine Deity, and some new Guardians</li>
                <li>Effort of the police officers to protect the public and the environment from the threat of the mysterious monsters from folklore.</li>
              </ul>
            </div>
          </div>
          <PhotoGallery 
              images={[
                {
                  src: "MightyGuardian/poster.webp",
                  alt: "Mighty Guardian Poster",
                  description: "Poster of Mighty Guardian: Lost Avian"
                },
                {
                  src: "MightyGuardian/ChienBinhLacHong.webp",
                  alt: "Mighty Guardian Lost Avian",
                  description: "Mighty Guardian Lost Avian XIX"
                },
                {
                  src: "MightyGuardian/CorvusGuardian.webp",
                  alt: "Corvus Guardian Poster",
                  description: "A new Guardian that is a combination of the Wicked Corvus's spirit and a disabled person"
                },
                {
                  src: "MightyGuardian/AlpineDeity.webp",
                  alt: "Mighty Guardian Alpine Deity Poster",
                  description: "Son of the legendary Alpine Deity (Sơn Tinh), grandson of the Mighty Guardian Lost Avian XVII (Hung King)"
                },
                {
                  src: "MightyGuardian/Police.webp",
                  alt: "Law Enforcement Poster",
                  description: "Vietnamese Law Enforcement with Enhanced Technology to Fight Against the Villianous Forces"
                }
              ]}
            />
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
              <h4>Cultural Expression through Technology</h4>
              <p>
                Armor Hero exemplifies the inspiration of ancient cosmology with futuristic weaponry. Instead of relying on arbitrary scientific accidents, the team's structure is strictly dictated by the Five Elements philosophy (五行): Fire - Dragon - South, Wood - Eagle - East, Water - Rhino - North, Metal - Mastiff - West, and Earth - Tiger - Center. Each hero represents a gear in a universal cycle. Each of them is vulnerable and has their own trauma and weaknesses.  But together they represent the "Grand Unity" of the universe. Furthermore, the narrative positions environmental issues as the primary antagonist, with villains frequently originating from industrial pollutants. These transform the technological guardians into a environmental protective force, using ancient elemental wisdom to heal the scars left by rapid and irresponsible modernization.
              </p>
              <p>
                <strong>Key Characteristics:</strong>
              </p>
              <ul>
                <li>Integration of Chinese ancient cosmology (Gold, Wood, Water, Fire, Earth) and folklore into the hero's identity</li>
                <li>None of the standard heroes can succeed alone; their powers are designed to be used in cooperative elemental combinations for maximum effect and get to the best form: Emperor Armor</li>
              </ul>
            </div>
            
          </div>
          <PhotoGallery 
              images={[
                {
                  src: "AmorHero/Fire.webp",
                  alt: "Fire Dragon Hero Poster",
                  description: "Fire (Dragon) Hero: Represents the South, passion, and leadership"
                },
                {
                  src: "AmorHero/Wood.webp",
                  alt: "Wood Eagle HeroPoster",
                  description: "Wood (Eagle) Hero: Represents the East, speed, and agility"
                },
                {
                  src: "AmorHero/Water.webp",
                  alt: "Water Rhino Poster",
                  description: "Water (Rhino) Hero: Represents the North, defense, and adaptability"
                },
                {
                  src: "AmorHero/Gold.webp",
                  alt: "Metal Mastiff Poster",
                  description: "Metal (Mastiff) Hero: Represents the West, offense, and strength"
                },
                {
                  src: "AmorHero/Earth.webp",
                  alt: "Earth Tiger Poster",
                  description: "Earth (Tiger) Hero: Represents the Center, stability, and grounding"
                },
                {
                  src: "AmorHero/ArmorHeroEmperor.webp",
                  alt: "Emperor Armor Poster",
                  description: "The ultimate form of the Armor Heroes: Emperor Armor"
                }
              ]}
            />
        </div>
      </div>
    </section>
  );
};

export default Examples;



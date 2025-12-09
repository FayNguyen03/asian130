import './css/Bibliography.css';
import './css/Section.css';
const Bibliography = () => {
  const sources = [
    {
      category: 'Academic Resources',
      items: [
        'Pasopati, Rommel, et al. "The Americanization of Super Sentai in the Power Rangers Television Series." Paradigm: Journal of Language and Literary Studies, vol. 7, no. 2, 2025, pp. 145-160, https://doi.org/10.18860/prdg.v7i2.31389.',
        'Sugawa-Shimada, Akiko. “Japanese Superhero Teams at Home and Abroad: Super-Sentai in Japan and Their Adaptation in South Korean Cinema.” Journal of Japanese & Korean Cinema, vol. 6, no. 2, 2014, pp. 167–83, https://doi.org/10.1080/17564905.2014.961713.',
        'Sun, Yuning et al. "On Cultural Differences of Heroes: Evidence From Individualistic and Collectivistic Cultures." Personality & social psychology bulletin vol. 50,6 (2024): 841-856. doi:10.1177/01461672221150238.'
      ],
      icon: '📚🎓'
    },
    {
      category: 'Media References',
      items: [
        'Anwar, Joko, director. Gundala: Il Figlio Del Lampo. 2020.',
        'Do, Duc Muoi and Minh Long Pham, directors. Mighty Guardian: Lost Avian. Mighty Guardian, 7 Apr. 2025.',
        'Watanabe, Katsuya, et al., directors. Samurai Sentai Shinkenger. 15 Feb. 2009.'
      ],
      icon: '🎬🎥'
    }
  ];

  return (
    <section className="section bibliography-section">
      <div className="container">
        <h2 className="section-title">BIBLIOGRAPHY</h2>
        <div className="content">
        <div className="bibliography-note">
          <p className="bibliography-intro">
            The following sources provide academic and cultural context for understanding Asian 
            superhero narratives and their relationship to technology, society, and cultural identity. The citations are formatted in MLA style.
          </p>
        </div>
          <div className="bibliography-categories">
            {sources.map((category, index) => (
              <div key={index} className="bibliography-category">
                <h3 className="category-title">{category.category}</h3>
                <ul className="bibliography-list">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="bibliography-item">
                      {category.icon} {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="section-note">
            <p>
              <strong>Note:</strong> This bibliography represents a selection of key sources that 
              inform the analysis presented in this website. Additional research and cultural 
              context from primary sources (films, television series, comics) have also contributed 
              to the development of these arguments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bibliography;



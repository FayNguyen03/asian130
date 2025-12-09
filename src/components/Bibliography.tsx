import './Section.css';

const Bibliography = () => {
  const sources = [
    {
      category: 'Academic Sources',
      items: [
        'Allison, Anne. "Millennial Monsters: Japanese Toys and the Global Imagination." University of California Press, 2006.',
        'Napier, Susan J. "Anime from Akira to Howl\'s Moving Castle: Experiencing Contemporary Japanese Animation." Palgrave Macmillan, 2005.',
        'Tsutsui, William M. "Godzilla on My Mind: Fifty Years of the King of Monsters." Palgrave Macmillan, 2004.',
        'Condry, Ian. "The Soul of Anime: Collaborative Creativity and Japan\'s Media Success Story." Duke University Press, 2013.'
      ]
    },
    {
      category: 'Film & Media Analysis',
      items: [
        'Gundala (2019). Directed by Joko Anwar. Screenplay by Joko Anwar. Indonesia.',
        'Super Sentai Series. Various directors. Toei Company, 1975-present. Japan.',
        'Mighty Guardian. Various iterations. Vietnam.',
        'Tsui, Curtis. "Asian Superheroes: Beyond the Western Model." Journal of Popular Culture, vol. 52, no. 3, 2019, pp. 567-589.'
      ]
    },
    {
      category: 'Cultural Studies',
      items: [
        'Hofstede, Geert. "Culture\'s Consequences: Comparing Values, Behaviors, Institutions and Organizations Across Nations." Sage Publications, 2001.',
        'Nisbett, Richard E. "The Geography of Thought: How Asians and Westerners Think Differently...and Why." Free Press, 2003.',
        'Markus, Hazel Rose, and Shinobu Kitayama. "Culture and the Self: Implications for Cognition, Emotion, and Motivation." Psychological Review, vol. 98, no. 2, 1991, pp. 224-253.'
      ]
    },
    {
      category: 'Science Fiction & Technology Studies',
      items: [
        'Csicsery-Ronay, Istvan. "The Seven Beauties of Science Fiction." Wesleyan University Press, 2008.',
        'Haraway, Donna. "A Cyborg Manifesto: Science, Technology, and Socialist-Feminism in the Late Twentieth Century." Simians, Cyborgs and Women: The Reinvention of Nature, Routledge, 1991.',
        'Suvin, Darko. "Metamorphoses of Science Fiction: On the Poetics and History of a Literary Genre." Yale University Press, 1979.'
      ]
    },
    {
      category: 'Regional Studies',
      items: [
        'Anderson, Benedict. "Imagined Communities: Reflections on the Origin and Spread of Nationalism." Verso, 1983.',
        'Duara, Prasenjit. "Sovereignty and Authenticity: Manchukuo and the East Asian Modern." Rowman & Littlefield, 2003.',
        'Iwabuchi, Koichi. "Recentering Globalization: Popular Culture and Japanese Transnationalism." Duke University Press, 2002.'
      ]
    }
  ];

  return (
    <section className="section bibliography-section">
      <div className="container">
        <h2 className="section-title">Bibliography</h2>
        <div className="content">
          <p className="bibliography-intro">
            The following sources provide academic and cultural context for understanding Asian 
            superhero narratives and their relationship to technology, society, and cultural identity.
          </p>

          <div className="bibliography-categories">
            {sources.map((category, index) => (
              <div key={index} className="bibliography-category">
                <h3 className="category-title">{category.category}</h3>
                <ul className="bibliography-list">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="bibliography-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bibliography-note">
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



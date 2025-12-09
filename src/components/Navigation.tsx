import './Navigation.css';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const tabs = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'east-vs-west', label: 'East vs West' },
    { id: 'conclusion', label: 'Conclusion' },
    { id: 'bibliography', label: 'Bibliography' }
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        <h1 className="nav-title">Collective Warriors From The East</h1>
        <ul className="nav-tabs">
          {tabs.map(tab => (
            <li key={tab.id}>
              <button
                className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => onTabChange(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;



import React, { useRef } from 'react';
import Hero from './components/Hero';
import TemplatesPanel from './components/TemplatesPanel';
import RecentProjects from './components/RecentProjects';
import HowItWorks from './components/HowItWorks';

function App() {
  const fileInputRef = useRef(null);

  const handleImportClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      alert(`Import simulé: ${file.name}`);
      e.target.value = '';
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Hero onImportClick={handleImportClick} />

      {/* Hidden file input for demo import */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,.txt,.md,image/*,audio/*,video/*"
        className="hidden"
        onChange={handleFileChange}
      />

      <TemplatesPanel />
      <RecentProjects />
      <HowItWorks />

      <footer className="border-t border-neutral-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 text-sm text-neutral-500">
          <span>© {new Date().getFullYear()} Synapse AI</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-neutral-700">Confidentialité</a>
            <a href="#" className="hover:text-neutral-700">Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

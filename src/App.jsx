import React from 'react';
import './App.css';

// 引入拆分出來的各個元件
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import EvolutionSection from './components/EvolutionSection';
import FrameworksAndArchitecture from './components/FrameworksAndArchitecture';
import TerminalCommands from './components/TerminalCommands';
import AdvancedConcepts from './components/AdvancedConcepts';
import ReferenceLinks from './components/ReferenceLinks';
import Footer from './components/Footer';
import TeachingSection from './components/TeachingSection';
import JsxTutorial from './components/JsxTutorial';
import LearningChecklist from './components/LearningChecklist';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <HeroSection />
      <main>
        <FeaturesSection />
        <EvolutionSection />
        <FrameworksAndArchitecture /> 
        <TerminalCommands />
        <AdvancedConcepts />
        <TeachingSection />
        <JsxTutorial />
        <LearningChecklist />
        <ReferenceLinks />
      </main>
      <Footer />
    </div>
  );
}

export default App;
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // 引入路由元件
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
      
      {/* 使用 Routes 定義不同網址要顯示的分頁 */}
      <main style={{ minHeight: 'calc(100vh - 80px)' }}> 
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/features" element={<FeaturesSection />} />
          <Route path="/evolution" element={<EvolutionSection />} />
          <Route path="/architecture" element={<FrameworksAndArchitecture />} />
          <Route path="/terminal" element={<TerminalCommands />} />
          
          {/* 將教學與進階概念組合在同一個「學習區」分頁 */}
          <Route path="/learning" element={
            <>
              <AdvancedConcepts />
              <TeachingSection />
              <JsxTutorial />
              <LearningChecklist />
            </>
          } />
          
          <Route path="/references" element={<ReferenceLinks />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
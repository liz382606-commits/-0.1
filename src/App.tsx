import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Identity from './components/Identity';
import Experience from './components/Experience';
import Workflow from './components/Workflow';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="bg-xinze-bg min-h-screen font-sans selection:bg-xinze-klein selection:text-white pb-10">
      <Navbar />
      <main>
        <Hero />
        <Identity />
        <Experience />
        <Workflow />
        <Portfolio />
        <Contact />
      </main>
      
      <footer className="py-8 text-center text-slate-600 text-sm border-t border-slate-800/50 mt-12">
        <p>© {new Date().getFullYear()} 李欣泽 XINZE. All rights reserved.</p>
        <p className="mt-1">AI 并非主体，它是扩音器。</p>
      </footer>
    </div>
  );
}

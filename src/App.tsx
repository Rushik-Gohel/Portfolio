/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Skills from './components/Skills';
import Footer from './components/Footer';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <main className="relative min-h-screen selection:bg-[var(--color-accent)] selection:text-black">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Awards />
      <Skills />
      <Footer />
    </main>
  );
}


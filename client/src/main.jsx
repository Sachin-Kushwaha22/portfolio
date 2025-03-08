import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header Page/Header'
import AboutSection from './components/About Page/AboutSection'
import Stack from './components/TechStack Page/Stack.jsx'
// import Loader from './components/Header Page/Loader.jsx'
import Project from './components/Projects Page/Project.jsx'
import SwitchTheme from './components/Header Page/SwitchTheme.jsx'

import './index.css'

import ClickSpark from './ReactBits/ClickSpark.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClickSpark
      sparkColor='#000000'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >

      {/* <Loader /> */}
      <SwitchTheme />
      <Header />
      <Project />
      <Stack />
      <AboutSection />
    </ClickSpark>
  </StrictMode>,
)

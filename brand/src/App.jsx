// this is the core file of project which is called by main.jsx when the application is launched
import React from 'react'
import styles from './style'
import Case       from "./Components/Case";
import Contact    from "./Components/Contact";
import Hero       from "./Components/Hero";
import Industries from "./Components/Industries";
import NavBar     from "./Components/NavBar";
import Services   from "./Components/Services";


// I divided the application into 6 different components, each component doing a different function

const App = () => (
  <div className='w-full overflow-hidden'>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <NavBar/> 
      </div>
    </div>

    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/> 
      </div>
    </div>

    <div className={`bg-secondary ${styles.paddingX} ${styles.paddingY} `}>
      <div className={`${styles.boxWidth}`}>
        <Services/>
        <Case/> 
        <Industries/> 
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX}`}>
      <div className={``}>
        <Contact/> {/* responsibe for rendering the Contact of the application*/}
      </div>
    </div>


  </div>
)

export default App

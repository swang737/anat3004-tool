import React, { Suspense, useMemo, useState, lazy } from "react";
import './App.css'

/* Shift-Option-A for Block Comment
Block comments span multiple lines */

// cmd-/ for Line Comment. Line comment only spans one line

/* import.meta.glob loads all files according to pattern */
/* Promise is a value that isn't loaded yet, but can be available in the future */
type Loader = () => Promise<{ default: React.ComponentType<{ goBack: () => void }> }>;
/* Loads all of them as promises. Maps string to promise */
const contentLoaders = import.meta.glob("./weeks/week*/content.tsx") as Record<string, Loader>;
const practiceLoaders    = import.meta.glob("./weeks/week*/practice.tsx")    as Record<string, Loader>;

function App() {
  /* const - variable that CANNOT be reassigned */
  /* let - variable that CAN be reassigned */
  /* state variables - refreshes UI whenever variable is updated
    state variables are remembered across renders */
  /* [var, func] = useState - var is the variable changed, func is the function to change it*/
  /* useState<allowed values>(initial value) below states that only number and null are allowed */
  const [selectedWeek, setSelectedWeek] = useState<number | null>(null);
  const [mode, setMode] = useState<'menu' | 'content' | 'practice'>('menu');
  /* creates an empty array of length 11. The second argument is a function that takes
  the current element and index and outputs what the number should be */
  /* => is function definition */
  const weeks = Array.from({length: 11}, (_, i) => i + 1)
  /* week has been selected (since no longer null) */
  /* function to go back (sets selected week back to null) */
  function goBack() {
    setSelectedWeek(null);
  }

  // [ADDED: derive lazy components for the current week based on `mode` + `selectedWeek`]
  const ContentLazy = useMemo(() => {
    if (selectedWeek === null) return null;
    const key = `./weeks/week${selectedWeek}/content.tsx`;
    const load = contentLoaders[key];
    return load ? lazy(load) : null;
  }, [selectedWeek]);

  const PracticeLazy = useMemo(() => {
    if (selectedWeek === null) return null;
    const key = `./weeks/week${selectedWeek}/practice.tsx`;
    const load = practiceLoaders[key];
    /* short hand of if statement
    if load exists, then return lazy(load), else return null */
    return load ? lazy(load) : null;
  }, [selectedWeek]);

  if (selectedWeek !== null) {
    if (mode === 'menu') {
      return (
        <div className='week-container'>
          {/* button object in HTML, can set onClick to run a certain function before
          between is the text for the button */}
          <button onClick={goBack}>← Back</button>
          {/* outputted markdown */}
          <h1>Week {selectedWeek}</h1>
          <p>What would you like to do?</p>
      
          <div className='week-actions'>
            <button className='week-action-button' onClick={() => setMode('content')}>Content</button>
            <button className='week-action-button' onClick={() => setMode('practice')}>Practice</button>
          </div>
        </div>
      );
    }

    // [ADDED: render CONTENT page for this week using Suspense + lazy import]
    if (mode === 'content') {
      return (
        <div className='week-container'>
          <button onClick={() => setMode('menu')}>← Back</button>
          <h2>Week {selectedWeek} – Content</h2>
          {ContentLazy ? (
            <Suspense fallback={<p>Loading content…</p>}>
              <ContentLazy goBack={() => setMode('menu')} />
            </Suspense>
          ) : (
            <p>No content component found for week {selectedWeek}.</p>
          )}
        </div>
      );
    }

    // [ADDED: render PRACTICE page for this week using Suspense + lazy import]
    if (mode === 'practice') {
      return (
        <div className='week-container'>
          <button onClick={() => setMode('menu')}>← Back</button>
          <h2>Week {selectedWeek} – Practice</h2>
          {PracticeLazy ? (
            <Suspense fallback={<p>Loading practice…</p>}>
              <PracticeLazy goBack={() => setMode('menu')} />
            </Suspense>
          ) : (
            <p>No practice component found for week {selectedWeek}.</p>
          )}
        </div>
      );
    }
  } // [ADDED: close the if (selectedWeek !== null) block]

  return (
    <div className='select-week-container'>
      <h1 id='study-tool-title'>ANAT3004 Study Tool!</h1>
        <p id='author-text'>created by Sean Wang</p>
      <h2>Select a Week to Study</h2>
      <div className='week-selections'>
        {/* {} indicates javascript expression */}
        {/* week here is parameter name (can set to whatever) */}
        {weeks.map((week) => (
          <button className='select-week-button' key={week} onClick={() => setSelectedWeek(week)}>
            Week {week}
          </button>
        ))}
      </div>
    </div>
  );
}
export default App
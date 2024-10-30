import React from 'react';
import GridDesigner from './components/GridDesigner';

function App() {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    header: {
      backgroundColor: '#1f2937',
      padding: '0.5rem 1rem',
    },
    headerText: {
      color: 'white',
      fontSize: '1.25rem',
      margin: 0,
    },
    main: {
      padding: '1rem',
      flex: 1,
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.headerText}>让我们来拼立方体！</h1>
      </header>
      <main style={styles.main}>
        <GridDesigner />
      </main>
    </div>
  );
}

export default App;

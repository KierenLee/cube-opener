import React from'react';

function GridCell({ type, onClick, fadeOut }) {
  const styles = {
    cell: {
      width: '5rem',
      height: '5rem',
      border: '2px solid #9ca3af',
      margin: '0.5rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease-out',
      backgroundColor: type === 'filled' ? '#3b82f6' : 'white',
    }
  };

  return (
    <div 
      style={styles.cell} 
      onClick={onClick}
      className={`grid-cell ${fadeOut && type === 'filled' ? 'fade-out' : ''}`}
    />
  );
}

export default GridCell;

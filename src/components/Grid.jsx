import React from 'react';
import GridCell from './GridCell';

function Grid({ cells, onCellClick, fadeOut }) {
  const styles = {
    grid: {
      display: 'inline-block',
      border: '1px solid #e5e7eb',
      padding: '1rem',
      backgroundColor: 'white',
      borderRadius: '0.5rem',
    },
    row: {
      display: 'flex',
    },
  };

  const rows = [];
  for (let i = 0; i < 4; i++) {
    rows.push(cells.slice(i * 3, (i + 1) * 3));
  }

  return (
    <div style={styles.grid}>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} style={styles.row}>
          {row.map((cell, colIndex) => (
            <GridCell
              key={rowIndex * 3 + colIndex}
              type={cell}
              onClick={() => onCellClick(rowIndex * 3 + colIndex)}
              fadeOut={fadeOut}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Grid;

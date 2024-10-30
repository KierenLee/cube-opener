import React from 'react';
import GridCell from './GridCell';

function CubeGrid({ faces, onFaceSelect }) {
  const gridLayout = [
    [null, faces[0], null],
    [faces[3], faces[1], faces[2]],
    [null, faces[4], null],
    [null, faces[5], null],
  ];

  return (
    <div className="inline-block border border-gray-300 p-4 bg-white rounded-lg">
      {gridLayout.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((face, colIndex) => (
            <div key={`${rowIndex}-${colIndex}`} className="w-24 h-24">
              {face !== null && (
                <GridCell
                  type={face}
                  onClick={() => {
                    const faceIndex = gridLayout.flat().filter(x => x !== null).indexOf(face);
                    onFaceSelect(faceIndex, face === 'empty' ? 'filled' : 'empty');
                  }}
                />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default CubeGrid;

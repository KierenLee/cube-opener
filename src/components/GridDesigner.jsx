
import React, { useState } from 'react';
import Grid from './Grid';
import SuccessModal from './SuccessModal';
import { validateCube } from '../utils/cubeValidator';
import { message } from 'antd';

function GridDesigner() {
  const [cells, setCells] = useState(Array(12).fill('empty'));
  const [showModal, setShowModal] = useState(false);
  const [fadeOutCells, setFadeOutCells] = useState(false);

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem',
    },
    buttonContainer: {
      display: 'flex',
      gap: '1rem',
    },
    primaryButton: {
      padding: '0.5rem 1rem',
      borderRadius: '0.25rem',
      border: 'none',
      cursor: 'pointer',
      color: 'white',
      backgroundColor: '#3b82f6',
      transition: 'background-color 0.2s',
    },
    secondaryButton: {
      padding: '0.5rem 1rem',
      borderRadius: '0.25rem',
      border: 'none',
      cursor: 'pointer',
      color: 'white',
      backgroundColor: '#6b7280',
      transition: 'background-color 0.2s',
    },
  };

  const handleCellClick = (index) => {
    const newCells = [...cells];
    newCells[index] = cells[index] === 'empty' ? 'filled' : 'empty';
    setCells(newCells);
    setShowModal(false);
    setFadeOutCells(false);
  };

  const handleReset = () => {
    setCells(Array(12).fill('empty'));
    setShowModal(false);
    setFadeOutCells(false);
  };

  const handleValidate = () => {
    const { isValid, message: _message } = validateCube(cells);
    if (isValid) {
      setFadeOutCells(true);
      setTimeout(() => {
        setShowModal(true);
      }, 300);
    } else {
      isValid ? message.success(_message) : message.error(_message);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFadeOutCells(false);
  };

  return (
    <div style={styles.container}>
      <Grid cells={cells} onCellClick={handleCellClick} fadeOut={fadeOutCells} />
      <div style={styles.buttonContainer}>
        <button 
          style={styles.primaryButton}
          onMouseOver={e => e.target.style.backgroundColor = '#2563eb'}
          onMouseOut={e => e.target.style.backgroundColor = '#3b82f6'}
          onClick={handleValidate}
        >
          验证
        </button>
        <button 
          style={styles.secondaryButton}
          onMouseOver={e => e.target.style.backgroundColor = '#4b5563'}
          onMouseOut={e => e.target.style.backgroundColor = '#6b7280'}
          onClick={handleReset}
        >
          重置
        </button>
      </div>
      {showModal && <SuccessModal onClose={handleCloseModal} />}
    </div>
  );
}

export default GridDesigner;

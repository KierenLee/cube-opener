import React from 'react';

function SuccessModal({ onClose }) {
  const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      opacity: 0,
      animation: 'fadeIn 0.5s forwards',
    },
    modal: {
      backgroundColor: 'white',
      padding: '2rem',
      borderRadius: '1rem',
      maxWidth: '500px',
      width: '90%',
      position: 'relative',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    },
    closeButton: {
      position: 'absolute',
      top: '1rem',
      right: '1rem',
      border: 'none',
      background: 'none',
      fontSize: '1.5rem',
      cursor: 'pointer',
      color: '#666',
      padding: '0.5rem',
      borderRadius: '50%',
      width: '36px',
      height: '36px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s',
    },
    title: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      textAlign: 'center',
      margin: '0 0 2rem 0',
    },
    cubeContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '300px',
      perspective: '1200px',
    }
  };

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={e => e.stopPropagation()}>
        <button 
          style={styles.closeButton} 
          onClick={onClose}
          onMouseOver={e => {
            e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
            e.target.style.transform = 'scale(1.1)';
          }}
          onMouseOut={e => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.transform = 'scale(1)';
          }}
        >
          ×
        </button>
        <h2 style={styles.title} className="success-title">
          成功组成立方体！
        </h2>
        <div style={styles.cubeContainer}>
          <div className="cube-wrapper">
            <div className="transform-cube">
              <div className="cube-face front">
                <div className="cube-content">前</div>
              </div>
              <div className="cube-face back">
                <div className="cube-content">后</div>
              </div>
              <div className="cube-face right">
                <div className="cube-content">右</div>
              </div>
              <div className="cube-face left">
                <div className="cube-content">左</div>
              </div>
              <div className="cube-face top">
                <div className="cube-content">上</div>
              </div>
              <div className="cube-face bottom">
                <div className="cube-content">下</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessModal;

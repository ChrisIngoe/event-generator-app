import React from 'react';
import LogButton from './logButton';

const ActionButtons = () => {
  return (
    <div style={{ padding: '20px' }}>
      <LogButton />
      <button>Event</button>
      <button>Trace</button>
    </div>
  );
};

export default ActionButtons;

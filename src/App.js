import React, { useState } from 'react';
import Tic_Tac_Toe from './Tic_Tac_Toe';
import Tic_Tac_Toe_3D from './Tic_Tac_Toe_3D';

export default function App() {
  const [is3D, setIs3D] = useState(false);

  return (
    <div>
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <button onClick={() => setIs3D(!is3D)}>
          Switch to {is3D ? '2D' : '3D'} View
        </button>
      </div>

      {is3D ? <Tic_Tac_Toe_3D /> : <Tic_Tac_Toe />}
    </div>
  );
}

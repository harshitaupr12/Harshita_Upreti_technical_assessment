import { useState } from 'react';
import BaseNode from './BaseNode';

export const NumberNode = ({ id, data }) => {
  const [numberValue, setNumberValue] = useState(data?.value || 0);

  return (
    <BaseNode
      id={id}
      data={data}
      title="Number"
      category="input"
      outputs={[{ id: `${id}-output` }]}
    >
      <div>
        <input 
          type="number" 
          value={numberValue} 
          onChange={(e) => setNumberValue(e.target.value)}
          style={{ width: '100%' }}
        />
      </div>
    </BaseNode>
  );
}
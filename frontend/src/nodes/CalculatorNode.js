import { useState } from 'react';
import BaseNode from './BaseNode';

export const CalculatorNode = ({ id, data }) => {
  const [operation, setOperation] = useState('+');
  return (
    <BaseNode
      id={id}
      data={data}
      title="Calculator"
      category="processing"
      inputs={[{ id: `${id}-input1` }, { id: `${id}-input2` }]}
      outputs={[{ id: `${id}-result` }]}
    >
      <select value={operation} onChange={(e) => setOperation(e.target.value)} style={{ width: '100%' }}><option value="+">Add (+)</option><option value="-">Subtract (-)</option><option value="*">Multiply (*)</option><option value="/">Divide (/)</option></select>
    </BaseNode>
  );
}
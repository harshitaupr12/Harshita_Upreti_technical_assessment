import { useState } from 'react';
import BaseNode from './BaseNode';

export const ConditionalNode = ({ id, data }) => {
  const [condition, setCondition] = useState('==');
  return (
    <BaseNode
      id={id}
      data={data}
      title="Conditional"
      category="processing"
      inputs={[{ id: `${id}-input1` }, { id: `${id}-input2` }]}
      outputs={[{ id: `${id}-true` }, { id: `${id}-false` }]}
    >
      <select value={condition} onChange={(e) => setCondition(e.target.value)} style={{ width: '100%' }}><option value="==">Equals (==)</option><option value="&gt;">Greater than (&gt;)</option><option value="&lt;">Less than (&lt;)</option></select>
    </BaseNode>
  );
}
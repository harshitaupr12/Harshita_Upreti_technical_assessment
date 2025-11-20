import BaseNode from './BaseNode';

export const OutputNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      title="Output"
      category="output"
      inputs={[{ id: `${id}-input` }]}
    >
      <div style={{ padding: '8px', background: '#f5f5f5', borderRadius: '4px', fontSize: '12px' }}>Output Node</div>
    </BaseNode>
  );
}
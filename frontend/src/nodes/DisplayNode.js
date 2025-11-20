import BaseNode from './BaseNode';

export const DisplayNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      title="Display"
      category="display"
      inputs={[{ id: `${id}-input` }]}
    >
      <div style={{ padding: '8px', background: '#f5f5f5', borderRadius: '4px', fontSize: '12px' }}>
        Shows connected input
      </div>
    </BaseNode>
  );
}
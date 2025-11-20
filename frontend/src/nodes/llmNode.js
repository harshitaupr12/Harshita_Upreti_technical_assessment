import BaseNode from './BaseNode';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      title="LLM"
      category="processing"
      inputs={[{ id: `${id}-input` }]}
      outputs={[{ id: `${id}-output` }]}
    >
      <div style={{ fontSize: '12px', textAlign: 'center' }}>Large Language Model</div>
    </BaseNode>
  );
}
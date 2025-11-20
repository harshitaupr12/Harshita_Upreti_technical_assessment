import BaseNode from './BaseNode';

export const FileProcessorNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      title="File Processor"
      category="processing"
      inputs={[{ id: `${id}-file` }]}
      outputs={[{ id: `${id}-output` }]}
    >
      <div style={{ fontSize: '12px', textAlign: 'center' }}>
        Process uploaded files
      </div>
    </BaseNode>
  );
}
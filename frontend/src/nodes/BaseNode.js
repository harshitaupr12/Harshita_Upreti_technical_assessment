import React from 'react';
import { Handle, Position } from 'reactflow';

const BaseNode = ({ 
  id,
  data,
  title,
  category = 'processing',
  inputs = [],
  outputs = [],
  children 
}) => {
  
  const getIcon = (nodeTitle) => {
    const iconMap = {
      'Input': '📥',
      'Output': '📤',
      'LLM': '🤖',
      'Text': '📝',
      'Number': '🔢',
      'Calculator': '🧮',
      'Conditional': '❓',
      'Display': '📊',
      'File Processor': '📁'
    };
    return iconMap[nodeTitle] || '⚙️';
  };

  const categoryColors = {
    input: '#3b82f6',
    output: '#10b981',
    processing: '#f59e0b',
    display: '#8b5cf6'
  };

  const nodeColor = categoryColors[category] || '#6b7280';
  const icon = getIcon(title);

  return (
    <div 
      style={{ 
        background: 'white',
        border: '2px solid #e2e8f0',
        borderLeft: `4px solid ${nodeColor}`,
        borderRadius: '12px',
        padding: '12px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        minWidth: '200px',
        minHeight: '60px',
        transition: 'all 0.3s ease-in-out',
        transform: 'scale(1)',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
      }}
    >
      
      <div style={{ 
        fontWeight: '600',
        fontSize: '14px',
        color: '#1f2937',
        marginBottom: '10px',
        textAlign: 'center',
        paddingBottom: '8px',
        borderBottom: '1px solid #f1f5f9'
      }}>
        <span style={{ marginRight: '8px', fontSize: '14px' }}>{icon}</span>
        {title}
      </div>

      {inputs.map((input, index) => (
        <Handle
          key={`input-${index}`}
          type="target"
          position={Position.Left}
          id={input.id}
          style={{ top: `${50 + (index * 30)}px` }}
        />
      ))}

      <div style={{ fontSize: '12px' }}>
        {children}
      </div>

      {outputs.map((output, index) => (
        <Handle
          key={`output-${index}`}
          type="source"
          position={Position.Right}
          id={output.id}
          style={{ top: `${50 + (index * 30)}px` }}
        />
      ))}
    </div>
  );
};

export default BaseNode;
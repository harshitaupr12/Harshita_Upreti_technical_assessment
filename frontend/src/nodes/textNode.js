import { useState, useEffect, useRef } from 'react';
import BaseNode from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const textareaRef = useRef(null);
  
  const autoResize = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  };

  const detectVariables = (text) => {
    const variableRegex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const matches = [...text.matchAll(variableRegex)];
    return matches.map(match => match[1]);
  };


  const formatTextWithHighlighting = (text) => {
    return text.replace(/\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g, 
      '<span style="color: #3b82f6; font-weight: bold;">{{$1}}</span>');
  };

  const variables = detectVariables(currText);

  useEffect(() => {
    autoResize();
  }, [currText]);

  return (
    <BaseNode
      id={id}
      data={data}
      title="Text"
      category="processing"
      inputs={variables.map((variable, index) => ({ id: `${id}-${variable}` }))}
      outputs={[{ id: `${id}-output` }]}
    >
      <div>
        <textarea 
          ref={textareaRef}
          value={currText} 
          onChange={(e) => setCurrText(e.target.value)}
          style={{
            width: '100%',
            minHeight: '40px',
            resize: 'none',
            border: '1px solid #d1d5db',
            borderRadius: '4px',
            padding: '6px',
            fontSize: '12px',
            fontFamily: 'inherit',
            marginBottom: '8px'
          }}
          placeholder="Enter text... Use {{variable}} for inputs"
        />
        
        
        {currText && (
          <div style={{
            padding: '8px',
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '4px',
            fontSize: '11px',
            color: '#374151'
          }}>
            <div style={{ fontWeight: 'bold', marginBottom: '4px', fontSize: '10px' }}>
              Preview:
            </div>
            <div 
              dangerouslySetInnerHTML={{ 
                __html: formatTextWithHighlighting(currText) 
              }}
            />
          </div>
        )}
        
        
        {variables.length > 0 && (
          <div style={{ 
            fontSize: '10px', 
            color: '#059669', 
            marginTop: '8px',
            fontWeight: '500'
          }}>
            🎯 Variables detected: {variables.join(', ')}
          </div>
        )}
      </div>
    </BaseNode>
  );
}
// toolbar.js

import { DraggableNode } from './draggableNode';
import { useTheme } from './ThemeContext';

export const PipelineToolbar = () => {
    const { colors } = useTheme();

    return (
        <div style={{ 
            padding: '10px',
            backgroundColor: colors.card,
            borderRight: `1px solid ${colors.border}`
        }}>
            <div style={{ 
                marginTop: '20px', 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '10px' 
            }}>
            
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                
                {/* New Nodes */}
                <DraggableNode type='numberNode' label='Number' />
                <DraggableNode type='calculatorNode' label='Calculator' />
                <DraggableNode type='conditionalNode' label='Conditional' />
                <DraggableNode type='displayNode' label='Display' />
                <DraggableNode type='fileProcessorNode' label='File Processor' />
            </div>
        </div>
    );
};
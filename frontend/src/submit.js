// submit.js

import { useStore } from './store';

export const SubmitButton = () => {
  const { nodes, edges } = useStore();

  const handleSubmit = async () => {
    try {
     
      const pipelineData = {
        nodes: nodes,
        edges: edges
      };

      console.log('Sending pipeline:', pipelineData);

     
      const response = await fetch('http://localhost:8000/pipelines/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `pipeline=${encodeURIComponent(JSON.stringify(pipelineData))}`
      });

      const result = await response.json();
      console.log('Backend response:', result);

      // Show alert with results
      if (result.error) {
        alert(`Error: ${result.error}`);
      } else {
        const dagStatus = result.is_dag ? '✅ It is a valid DAG' : '❌ It is NOT a DAG';
        alert(`Pipeline Analysis:\n\n📊 Nodes: ${result.num_nodes}\n🔗 Edges: ${result.num_edges}\n${dagStatus}`);
      }

    } catch (error) {
      console.error('Submit error:', error);
      alert('Error submitting pipeline. Check console for details.');
    }
  };

  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px'}}>
      <button 
        type="button" 
        onClick={handleSubmit}
        style={{
          padding: '10px 20px',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Submit Pipeline
      </button>
    </div>
  );
}
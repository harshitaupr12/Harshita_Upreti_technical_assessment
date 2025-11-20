from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
import json
from collections import defaultdict, deque

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: str = Form(...)):
    try:
        
        pipeline_data = json.loads(pipeline)
        nodes = pipeline_data.get('nodes', [])
        edges = pipeline_data.get('edges', [])
        
      
        num_nodes = len(nodes)
        num_edges = len(edges)
        
       
        is_dag = check_dag(nodes, edges)
        
        return {
            'num_nodes': num_nodes,
            'num_edges': num_edges,
            'is_dag': is_dag
        }
        
    except Exception as e:
        return {
            'num_nodes': 0,
            'num_edges': 0,
            'is_dag': False,
            'error': str(e)
        }

def check_dag(nodes, edges):
    """
    Check if the graph is a Directed Acyclic Graph (DAG)
    using Kahn's algorithm for topological sorting
    """
    if not edges:
        return True
        
    
    graph = defaultdict(list)
    in_degree = defaultdict(int)
    
    
    for node in nodes:
        in_degree[node['id']] = 0
    
    
    for edge in edges:
        source = edge['source']
        target = edge['target']
        graph[source].append(target)
        in_degree[target] += 1
    
    # Kahn's algorithm
    queue = deque([node_id for node_id in in_degree if in_degree[node_id] == 0])
    visited_count = 0
    
    while queue:
        current = queue.popleft()
        visited_count += 1
        
        for neighbor in graph[current]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)
    
    
    return visited_count == len(nodes)
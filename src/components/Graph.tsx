import React, { useState, useEffect,useRef  } from "react";
import cytoscape from "cytoscape";
const cola = require("cytoscape-cola");
cytoscape.use(cola);

function Graph() {
  const containerId = "cy";
  
  const containerStyle = {
    height: 800,
    width: 800,
    margin: "auto",
    border: "1px solid",
  };
 
  useEffect(() => {
    const containerEle = document.getElementById(containerId);
    
    
   

    fetch("/data.json")
      .then((res: any) => res.json())
      .then((json: any) => {
        const cy = cytoscape({
          elements: json,
          container: containerEle,
          layout: {
            name: "cola",
          },
          style: [
            {
              selector: "node",
              style: {
                label: "data(name)",
                "text-valign": "center",
                "text-halign": "left",
                width: 16,
                height: 16,
               
              },
            },
            {
              selector: "edge",
              style: {
                width: 1,
                "curve-style": "straight",
                "target-arrow-shape": "triangle",
              },
            },
            {
              selector:'.neighbour',
              style:{
                'background-color': '#E97451',
              }

            },
            {
              selector:'.neighbouredge',
              style:{
                'line-color': '#E97451',
              }

            },
            {
              selector:'.filtered-out',
              style:{
                'visibility':"hidden",
              }

            }
          ],
        });
        cy.on('tap', 'node', function(event){
          const node = event.target;
          const text="Hello";
          const data = node.data(); 
          let initialnodes = cy.nodes();
          let name = data.name; 
          const id = data.id; 
          const neighbouredgesandnodes = node.neighborhood();
          cy.nodes().removeClass('neighbour');
          cy.edges().removeClass('neighbouredge');
          const neighborsData = neighbouredgesandnodes.map((neighbour: { data: () => any; }) => neighbour.data());
         
          neighborsData.forEach((neighboursData: { name: any; }) => {

       
            neighbouredgesandnodes.nodes().addClass('neighbour');
          neighbouredgesandnodes.edges().addClass('neighbouredge');
           
            
          });
    


          const indegree=node.indegree();
          const outdegree=node.outdegree();
          const score = data.score; 
          console.log(node)
          const p=document.getElementById("p")
          
          if (p !== null) {
            p.style.opacity="1";
          
            p.innerText=`Node: ${name}, Id: ${id}, Score: ${score} , Indegree: ${indegree} , Outdegree : ${outdegree}`
            
          } else {
            console.log("Button element not found.");
          }
          let initial=document.getElementById("initial");
        let final=document.getElementById("final");
        let clicker=document.getElementById("one");
        let nodesData: any[];
        fetch('/data.json')
         .then(response => response.json())
         .then(data => {
          nodesData = data;

       
          
        
        
        if (initial!==null && final!==null && clicker!==null ){
         
          
          clicker.addEventListener('click',()=>{
            const initialCopy = initial!;
            const finalCopy = final!;
            const clickerCopy = clicker!;
        
            let initialtext = initialCopy.textContent!;
            let finaltext = finalCopy.textContent!;
            initialnodes.forEach((node:any) => {
              const nodeName = node.data('name').toString();
              if (nodeName === initialtext) {
                const updatedName = `${finaltext}`;
                console.log(updatedName)
            
              node.data('name', updatedName);
            
              
              node.style('label', updatedName);

              }
             
              
            });
            
           

          })
          
        
        }
        const filterInput = document.getElementById('filterInput') as HTMLInputElement;

        filterInput.addEventListener('input', () => {
          const filterText = filterInput.value.toLowerCase();
        
          cy.nodes().forEach((node) => {
            const nodeName = node.data('name').toString().toLowerCase();
        
            if (nodeName.includes(filterText)) {
              node.removeClass('filtered-out');
              node.neighborhood().edges().removeClass("filtered-out");
            } else {
              node.addClass('filtered-out');
              node.neighborhood().edges().addClass("filtered-out");
            }
          });
        });
        
      })

        });
        
      });
      
  });
 

  return <div id={containerId} style={containerStyle}  ></div>;
}

export default Graph;


import React from 'react';
import { VictoryPie, VictoryTooltip, VictoryStack, VictoryLabel } from 'victory';



function Pie(props) {
    console.log("Received props:", { props });

   const containerWidth = 600;
  const containerHeight = 600;

  // SVG dimensions
  const width = 500;  
  const height = 500;

  const colorScale = ["#00A9B5", "#357AFF", "#9245FF","#FF5C00","#FF234B","#E5AC00", "#00AB3A",];
  const num_Prompts = 20;

  const getGradientId = (index) => `gradient-${index}`;



  

  // Function to calculate cx and cy values
  const calculateCValues = (index) => {
    const fraction = (index + 1) / num_Prompts;
    if (fraction <= 0.2) {
      return [0, 1];
    } else if (fraction <= 0.4) {
      return [0, 0.5];
    } else if (fraction <= 0.6) {
      return [0.5, -0,1];
    } else if (fraction <= 0.8) {
      return [1.1, 0.5];
    } else {
      return [1, 1]
    }
  };

 // Generate radial gradient definitions, with a check to ensure prompts exist
 const gradients = props.prompts ? props.prompts.map((datum, index) => {
  const [cx, cy] = calculateCValues(index);
  return (
    <radialGradient key={index} id={getGradientId(datum._id)} cx={cx.toString()} cy={cy.toString()} r="120%">
      <stop offset="0%" stopColor="white" />
      <stop offset="100%" stopColor={datum.fill} />
    </radialGradient>
  );
}) : null;
  

  return (
    <div>
      <svg >
        <defs>
          {gradients}
        </defs>
      </svg>
      <VictoryStack height={500} width={800}>
    
      <VictoryPie
        data={props.categories}
        labels={({datum}) => `${datum.title}`}
       
        radius={199} // Adjust the radius for the outer wheel
        style={{
          data: {
            fill: "transparent",
            stroke: "white",
            strokeWidth: 1.5
            
          },
          labels: { 
            padding: 37,
            fontFamily: "inherit", // Change this to your desired font
            fontSize: 14,        // Adjust font size as needed
            fill: "#333333"      // Change label color if needed
          }
          
          
        }}
        labelComponent={
          <VictoryLabel 
          labelPlacement='perpendicular'
          dy={-12}
          />
        }
      
      />
      <VictoryPie
     
    
        radius={({ datum }) => 20 + (parseFloat(datum.transform) * 9) * 20}
        data={props.prompts}
        labels={({ datum }) => `${datum.text}`}
        style={{ 
          data: { 
            fill: ({ datum }) => `url(#${getGradientId(datum._id)})`,
            stroke: "white",
            strokeWidth: 0.2
          }, 
          labels: { 
            
            fontFamily: "inherit", // Change this to your desired font
            fontSize: 14,        // Adjust font size as needed
            fontWeight: "normal",
            fill: "#333333"      // Change label color if needed
          }
        }}
       
        labelComponent={
          <VictoryTooltip
          flyoutStyle={{
            color: "red"
          }}
          constrainToVisibleArea
          />
        }
      />
       <VictoryPie
        data={props.categories}
        
       labels={({datum}) => `${datum.title}`}
        radius={199} // Adjust the radius for the outer wheel
        style={{
          data: {
            fill: "#EFEFEF",
            stroke: "white",
            strokeWidth: 1.5
            
          },
          labels: { 
            padding: 37,
            fontFamily: "inherit", // Change this to your desired font
            fontSize: 14,        // Adjust font size as needed
            fill: "#333333"      // Change label color if needed
          }
        }}
        labelComponent={
          <VictoryLabel 
          labelPlacement='perpendicular'
          dy={-12}
          />
        }
      />
      </VictoryStack>
    </div>
  );
};

export default Pie;

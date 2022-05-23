import React from 'react';
import { useState ,useEffect} from 'react';
import ClientUseService from '../../services/ClientUse.service';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
 import faker from 'faker';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'שימוש',
    },
  },
};




export default function Graph() {
  const [graphData,setgraphData]=useState([]);
  const [labels,setlabels]=useState([]);
  const [payments,setpayments]=useState([]);
  //const [data,setdata]=useState({});


useEffect(() => {

  async function init  () {
     
    const Data=await ClientUseService.fetchGraphData(1000);
    console.log(Data);
    setgraphData(Data);

  }
  async function setlabel  () {
     
    
    setlabels( graphData.map((anObjectMapped) => {
       
      return anObjectMapped.month
}))

  }
  async function setpayment() {
    setpayments( graphData.map((anObjectMapped) => {
       
      return anObjectMapped.toPay
})) 
  }
 

  init()
  setlabel()
  setpayment()
  //initData()
  //console.log(data);
},[])
//  function initData() {
//   const data = {
//     labels,
//     datasets: [
//       {
//         label: 'הודעות',
//         //data: graphData.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//         data:graphData.map((anObjectMapped) => {
         
//                   return anObjectMapped.messages
//       }),
//         backgroundColor: 'rgba(107,192,178,1)',
//       },
//       {
//         label: 'דקות',
//         data:graphData.map((anObjectMapped) => {
         
//           return anObjectMapped.minutes
//   }),
//         backgroundColor: 'rgba(170,194,47,1)',
//       },
//     ],
//   };
//   return (data);
// }
// function click()
// {
//   console.log(graphData);
// }
const data = {
  labels,
  datasets: [
    {
      label: 'הודעות',
      //data: graphData.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      data:graphData.map((anObjectMapped) => {
       
                return anObjectMapped.messages
    }),
      backgroundColor: 'rgba(107,192,178,1)',
    },
    {
      label: 'דקות',
      data:graphData.map((anObjectMapped) => {
       
        return anObjectMapped.minutes
}),
      backgroundColor: 'rgba(170,194,47,1)',
    },
  ],
};
  return <div><Bar options={options} data={data}/>
   {/* <Container fixed> */}
  <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      {console.log(data)}
  <ButtonGroup variant="text" aria-label="text button group">
  
    {graphData.map((anObjectMapped) => {
       
       return  <Button key={anObjectMapped.accountnum}>{anObjectMapped.topay}</Button> 
})}
 

</ButtonGroup>
</Box>
{/* </Container> */}
</div>;
}

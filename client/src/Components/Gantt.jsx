import { useEffect, useState } from 'react';
import { Bar, Scatter,HorizontalBar } from 'react-chartjs-2';

function Gantt({data,problem}) {
  const initialState = {
    labels: ["Taks 1", ],
    datasets: [{
      label: 'Late Tasks',
      data: [],
      backgroundColor: '#38ABF2'
    },{
      label: 'Tasks',
      data: [],
      backgroundColor: '#F24171'
    }]
  }
  const [state,setState] = useState(initialState)

  useEffect(()=>{
    if(data && problem==1){
    var counter =  0
    var tardy = []
    var done = []
    var jobs = []
    for(let i=0;i<data.length;i++){
      jobs.push('Task '+data[i][0])
      if (data[i][1]+counter>data[i][2]){
        tardy.push([counter,counter+data[i][1]])
        done.push([0,0])
      }else{
        done.push([counter,counter+data[i][1]])
        tardy.push([0,0])
      }
      counter=counter+data[i][1]
    }

    setState({
      labels: jobs,
      datasets: [{
        label: 'Before Due Date',
        data: done,
        backgroundColor: '#38ABF2'
      },{
        label: 'Late Tasks',
        data: tardy,
        backgroundColor: '#F24171'
      }]
    })
    }else if(data && problem==2){
      var counter =  0
    var tardy = []
    var done = []
    var jobs = []
    for(let i=0;i<data.length;i++){
      jobs.push('Task '+data[i][0])
      if (data[i][1]+counter!=data[i][2]){
        tardy.push([counter,counter+data[i][1]])
        done.push([0,0])
      }else{
        done.push([counter,counter+data[i][1]])
        tardy.push([0,0])
      }
      counter=counter+data[i][1]
    }

    setState({
      labels: jobs,
      datasets: [{
        label: 'Just in Time',
        data: done,
        backgroundColor: '#38ABF2'
      },{
        label: 'Before or After Due Date',
        data: tardy,
        backgroundColor: '#F24171'
      }]
    })
    }
  },[data])

  return (
    <div className="container  w-3/4 mx-auto">
      <HorizontalBar
        data={state}
        options={{
          responsive: true,
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Guntt Diagrame of the Sequence'
          }
        }}
      />
    </div>
  )
}

export default Gantt
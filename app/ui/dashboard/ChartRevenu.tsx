
"use client"
import {Bar} from 'react-chartjs-2'
import { Chart as ChartJS , BarElement, 
    CategoryScale, LinearScale, 
    Tooltip, Legend , 

} from 'chart.js'
import { useState } from 'react'
import { revenueChartData } from '@/app/lib/data'

ChartJS.register(
     BarElement , CategoryScale ,
    LinearScale , Tooltip , Legend
)

export const BarChart = () => {
    const [data , setData ] = useState({
        labels : revenueChartData.label,
        datasets : {
            label : 'revenu mensuelle',
            data : revenueChartData.data,
            background : 'blue'

        }
    })
    

    return (
        <div>
            <Bar data={data} />
        </div>
    )
}
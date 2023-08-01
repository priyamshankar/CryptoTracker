import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./style/chart.css";
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import AlertBox from '../../../components/AlertBox/AlertBox';

const ChartComp = ({coinId}) => {
    const [coinData, setCoinData] = useState([]);
    const [date,setDate] = useState(1);
    const [alert,setAlert] = useState(false);

    async function fetchCoinData (){

        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=INR&days=${date}`);
        const fetchedCoin = response.data; 
        setCoinData(fetchedCoin.prices);
    }

    useEffect(() => {
        //   fetchCoinData();
        }, [date])
  return (
    <div className='chartcontainer'>
        <p>
            {coinId}
        </p>
    <div className="graphContainer">
        <div className="button-graph">
            <button onClick={()=>{
                setDate(1);
            }}>
                Hours
            </button>
            <button onClick={()=>{
                setDate(30);
            }}>
                Days
            </button>
            <button onClick={()=>{
                setDate(365);
            }}>
                Months
            </button>
        </div>
        <Line
            data={{
                labels: coinData.map((coinDataMap)=>{
                    let localDate = new Date(coinDataMap[0]);
                    let time =
                    localDate.getHours() > 12
                      ? `${localDate.getHours() - 12}:${localDate.getMinutes()} PM`
                      : `${localDate.getHours()}:${localDate.getMinutes()} AM`;
                  return  date === 1 ? time : localDate.toLocaleDateString();;
                }),
                datasets:[
                   {data:coinData.map((dataVal)=>dataVal[1]),
                    label: `Price ( Past ${date} Days ) in INR`
                },
                ],
            }}
        />
            <button onClick={()=>{setAlert(true)}}>Add Alert</button>
        {alert && <div className="alertdialog">
            <AlertBox setAlert={setAlert} coinId={coinId}/>
        </div>}
        </div>
    </div>
  )
}

export default ChartComp
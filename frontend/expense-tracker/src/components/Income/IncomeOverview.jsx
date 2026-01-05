import {LuPlus} from "react-icons/lu";
import CustomBarChart from "../Chart/CustomBarChart";
import { useEffect, useState } from "react";
import { prepareIncomeBarChartData } from "../../utils/helper";

const IncomeOverview = ({transactions, onAddIncome}) => {
    const [chartData,setChartData]=useState([]);
    useEffect(()=>{
        console.log("Income transactions:", transactions);
        const result=prepareIncomeBarChartData(transactions);
        setChartData(result);
        console.log("Prepared chart data:", result);
        return ()=>{};
    },[transactions]);
    return ( 
        <div className="card">
            <div className="flex items-center justify-between">
                <div className="">
                    <h5 className="text-lg">Income Overview</h5>
                    <p className="text-xs text-gray-500 mt-0.5">Track your earnings over time and analyze your income</p>
                </div>
                <button className="add-btn" onClick={onAddIncome}><LuPlus className="text-lg" />Add Income</button>
            </div>
            <div className="mt-10">
                <CustomBarChart data={chartData}/>
            </div>
        </div> 
);
}
 
export default IncomeOverview;
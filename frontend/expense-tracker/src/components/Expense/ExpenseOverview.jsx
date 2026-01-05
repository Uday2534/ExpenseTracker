import {LuPlus} from "react-icons/lu";
import CustomBarChart from "../Chart/CustomBarChart";
import { useEffect, useState } from "react";
import { prepareExpenseBarChartData } from "../../utils/helper";


const ExpenseOverview = ({transactions, onAddExpense}) => {
    const [chartData,setChartData]=useState([]);
    useEffect(()=>{
        console.log("Expense transactions:", transactions);
        const result=prepareExpenseBarChartData(transactions);
        setChartData(result);
        console.log("Prepared chart data:", result);
        return ()=>{};
    },[transactions]);
    return ( 
        <div className="card">
            <div className="flex items-center justify-between">
                <div className="">
                    <h5 className="text-lg">Expense Overview</h5>
                    <p className="text-xs text-gray-500 mt-0.5">Track your expenses over time and analyze your spending</p>
                </div>
                <button className="add-btn" onClick={onAddExpense}><LuPlus className="text-lg" />Add Expense</button>
            </div>
            <div className="mt-10">
                <CustomBarChart data={chartData}/>
            </div>
        </div> 
);
}

export default ExpenseOverview;
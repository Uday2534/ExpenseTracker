import { useState } from "react";
import { useEffect } from "react";
import { prepareExpenseBarChartData } from "../../utils/helper";
import CustomBarChart from "../Chart/CustomBarChart";
const Last30DaysExpense = ({data}) => {
    const [charData,setChartData]=useState([])
    useEffect(()=>{
        const result=prepareExpenseBarChartData(data);
        setChartData(result);
        return()=>{};
    },[data])
    return ( 
        <div className="card col-span-1">
            <div className="flex justify-between items-center">
                <h5 className="text-lg">Last 30 Days Expense</h5>
            </div>
            <CustomBarChart data={charData}/>
        </div>
     );
}
 
export default Last30DaysExpense;
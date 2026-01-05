import { useState } from "react";
import Inputs from "../Inputs/Inputs";
import EmojiPickerPopup from "../EmojiPickerPopup";

const AddIncomeForm = ({ onAddIncome }) => {
    const [income,setIncome]=useState({
        amount:"",
        date:"",
        source:"",
        icon:""
    });
    const handleChange=(key,value)=>{
        setIncome({...income,[key]:value});
    }
    
    return ( 
        <div>
            <EmojiPickerPopup
                icon={income.icon}
                onSelect={(selectedIcon)=>handleChange("icon",selectedIcon)}
            />
            <Inputs
                value={income.source}
                onChange={(e)=>handleChange("source",e.target.value)}
                label="Income Source"
                placeholder="Freelance,Salary,etc"
                type="text"
            ></Inputs>
            <Inputs
                value={income.amount}
                onChange={(e)=>handleChange("amount",e.target.value)}
                label="Amount"
                placeholder="Enter amount"
                type="number"
            >
            </Inputs>
            <Inputs
                value={income.date}
                onChange={(e)=>handleChange("date",e.target.value)}
                label="Date"
                placeholder=""
                type="date"
            >
            </Inputs>
            <div className="flex justify-end mt-6">
                <button 
                    type="button" 
                    className="add-btn add-btn-fill"
                    onClick={() => onAddIncome(income)}>
                        Add Income
                </button>
            </div>

        </div> );
}
 
export default AddIncomeForm;
import { useState } from "react";
import Inputs from "../Inputs/Inputs";
import EmojiPickerPopup from "../EmojiPickerPopup";


const AddExpenseForm = ({ onAddExpense }) => {
    const [expense,setExpense]=useState({
        amount:"",
        date:"",
        source:"",
        icon:""
    });
    const handleChange=(key,value)=>{
        setExpense({...expense,[key]:value});
    }
    
    return ( 
        <div>
            <EmojiPickerPopup
                icon={expense.icon}
                onSelect={(selectedIcon)=>handleChange("icon",selectedIcon)}
            />
            <Inputs
                value={expense.source}
                onChange={(e)=>handleChange("source",e.target.value)}
                label="Expense Source"
                placeholder="Freelance,Salary,etc"
                type="text"
            ></Inputs>
            <Inputs
                value={expense.amount}
                onChange={(e)=>handleChange("amount",e.target.value)}
                label="Amount"
                placeholder="Enter amount"
                type="number"
            >
            </Inputs>
            <Inputs
                value={expense.date}
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
                    onClick={() => onAddExpense(expense)}>
                        Add Expense
                </button>
            </div>

        </div> );
}
 
export default AddExpenseForm;
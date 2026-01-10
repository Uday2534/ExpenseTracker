import { useState } from "react";
import Inputs from "../Inputs/Inputs";
import EmojiPickerPopup from "../EmojiPickerPopup";


const AddExpenseForm = ({ onAddExpense }) => {
    const [income,setIncome]=useState({
        amount:"",
        date:"",
        category:"",
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
                value={income.category}
                onChange={(e)=>handleChange("category",e.target.value)}
                label="Expense Category"
                placeholder="Rent,Groceries,etc"
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
                    onClick={() => onAddExpense(income)}>
                        Add Expense
                </button>
            </div>

        </div> );
}
 
export default AddExpenseForm;
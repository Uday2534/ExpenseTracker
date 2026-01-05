import { useUserAuth } from "../../hooks/useUserAuth";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { useState } from "react";
import  axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPath";
import { toast } from "react-hot-toast";
import ExpenseOverview from "../../components/Expense/ExpenseOverview";
import { useEffect } from "react";
import Modal from "../../components/Modal";
import AddExpenseForm from "../../components/Expense/AddExpenseForm";
import ExpenseList from "../../components/Expense/ExpenseList";
import DeleteAlert from "../../components/DeleteAlert";

const Expense = () => {
    useUserAuth();
    const [expenseData,setExpenseData]=useState([]);
        const [loading,setLoading]=useState(false);
        const [openDeleteAlert,setOpenDeleteAlert]=useState({
            show:false,
            data:null
        });
    const [openAddExpenseModal,setOpenAddExpenseModal]=useState(false);
    const fetchExpenseData= async()=>{
        if(loading) return;
        setLoading(true);
        try{
            const response=await axiosInstance.get(`${API_PATHS.EXPENSE.GET_ALL_EXPENSES}`);
            const formatted = Array.isArray(response.data)
                ? response.data
                : response.data.data || [];

            setExpenseData(formatted);
        }
        catch(error){
            console.log("Something went wrong",error);
        }
        finally{
            setLoading(false);
        }
    }
    const handleAddExpense=async(expense)=>{
        const {amount,source,date,icon}=expense;
        if(!source.trim()){
            toast.error("Source is required");
            return;
        }
        if(!amount || isNaN(amount) || Number(amount)<=0){
            toast.error("Please enter a valid amount");
            return;
        }
        if(!date){
            toast.error("Date is required");
            return;
        }
        try{
            await axiosInstance.post(API_PATHS.INCOME.ADD_INCOME,{
                amount,
                source,
                date,
                icon
            })
            setOpenAddExpenseModal(false);
            toast.success("Expense added successfully");
            fetchExpenseData();
        }
        catch(error){
            console.error("error loading Expense",
            error.response?.data?.message || error.message
            )
        }
    }
    const handleDownloadExpenseDetails=async()=>{
        
    }
    useEffect(()=>{
                fetchExpenseData();
            },[]);
    return ( 
        <DashboardLayout activeMenu="Income">
            <div className="my-5 mx-auto">
                <div className="grid grid-cols-1 gap-6">
                    <div className="">
                        <ExpenseOverview
                           transactions={expenseData}
                           onAddExpense={()=>setOpenAddExpenseModal(true)}
                        />
                    </div>
                </div>
                <ExpenseList
                    transactions={expenseData}
                    onDelete={(id)=>setOpenDeleteAlert({show:true,data:id})}
                    onDownload={handleDownloadExpenseDetails}
                />
            </div>
            <Modal 
                isOpen={openAddExpenseModal}
                onClose={()=>setOpenAddExpenseModal(false)}
                title="Add Expense"
            > <AddExpenseForm onAddExpense={handleAddExpense}></AddExpenseForm>
            </Modal>
            <Modal
                isOpen={openDeleteAlert.show}
                onClose={()=>setOpenDeleteAlert({show:false,data:null})}
                title="Delete Expense"
            > <DeleteAlert content="Are you sure you want to delete this expense?" onDelete={()=> deleteExpense(openDeleteAlert.data)}></DeleteAlert>
            </Modal>
            
        </DashboardLayout>
     );
}
 
export default Expense;
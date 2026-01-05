import DashboardLayout from "../../components/layouts/DashboardLayout";
import { useState } from "react";
import  axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPath";
import IncomeOverview from "../../components/Income/IncomeOverview";
import { useEffect } from "react";
import Modal from "../../components/Modal";
import AddIncomeForm from "../../components/Income/AddIncomeForm";
import { toast } from "react-hot-toast";
import IncomeList from "../../components/Income/IncomeList";
import DeleteAlert from "../../components/DeleteAlert";
import { useUserAuth } from "../../hooks/useUserAuth";

const Income = () => {
    useUserAuth();
    const [incomeData,setIncomeData]=useState([]);
    const [loading,setLoading]=useState(false);
    const [openDeleteAlert,setOpenDeleteAlert]=useState({
        show:false,
        data:null
    });
    const [openAddIncomeModal,setOpenAddIncomeModal]=useState(false);

    const fetchIncomeData= async()=>{
        if(loading) return;
        setLoading(true);
        try{
            const response=await axiosInstance.get(`${API_PATHS.INCOME.GET_ALL_INCOME}`);
            const formatted = Array.isArray(response.data)
                ? response.data
                : response.data.data || [];

            setIncomeData(formatted);
        }
        catch(error){
            console.log("Something went wrong",error);
        }
        finally{
            setLoading(false);
        }
    }
    const deleteIncome=async(id)=>{
        try{
            await axiosInstance.delete(API_PATHS.INCOME.DELETE_INCOME(id));
            setOpenDeleteAlert({show:false,data:null});
            toast.success("Income deleted successfully");
            fetchIncomeData();
        }
        catch(error){
            console.error("error deleting income",
            error.response?.data?.message || error.message
            )
        }
    }
    const handleAddIncome=async(income)=>{
        const {amount,source,date,icon}=income;
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
            setOpenAddIncomeModal(false);
            toast.success("Income added successfully");
            fetchIncomeData();
        }
        catch(error){
            console.error("error loading Income",
            error.response?.data?.message || error.message
            )
        }
    }
    const handleDownloadIncomeDetails=async()=>{
        
    }
    useEffect(()=>{
            fetchIncomeData();
        },[]);
    return ( 
        <DashboardLayout activeMenu="Income">
            <div className="my-5 mx-auto">
                <div className="grid grid-cols-1 gap-6">
                    <div className="">
                        <IncomeOverview
                           transactions={incomeData}
                           onAddIncome={()=>setOpenAddIncomeModal(true)}
                        />
                    </div>
                </div>
                <IncomeList
                    transactions={incomeData}
                    onDelete={(id)=>setOpenDeleteAlert({show:true,data:id})}
                    onDownload={handleDownloadIncomeDetails}
                />
            </div>
            <Modal 
                isOpen={openAddIncomeModal}
                onClose={()=>setOpenAddIncomeModal(false)}
                title="Add Income"
            > <AddIncomeForm onAddIncome={handleAddIncome}></AddIncomeForm>
            </Modal>
            <Modal
                isOpen={openDeleteAlert.show}
                onClose={()=>setOpenDeleteAlert({show:false,data:null})}
                title="Delete Income"
            > <DeleteAlert content="Are you sure you want to delete this income?" onDelete={()=> deleteIncome(openDeleteAlert.data)}></DeleteAlert>
            </Modal>
            
        </DashboardLayout>
     );
}
 
export default Income;
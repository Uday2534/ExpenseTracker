import CustomPieChart from "../Chart/CustomPieChart";
const COLORS=["#875CF5","#FA2C37","#FF6900"]
const FinanceOverview = ({totalBalance, totalIncome, totalExpenses}) => {
    const balanceData=[
        {name:"Total Balance",amount:totalBalance},
        {name:"Total Income",amount:totalIncome},
        {name:"Total Expenses",amount:totalExpenses}
    ]
    return ( 
        <div className="card">
            <div className="flex items-ceneter justify-between">
                <h5 className="text-lg">Financial Overview</h5>
            </div>
            <CustomPieChart data={balanceData} label="Total Balance" colors={COLORS} totalAmount={`₹${totalBalance}`} showTextAnchor/>
        </div> 
    );
}
 
export default FinanceOverview;
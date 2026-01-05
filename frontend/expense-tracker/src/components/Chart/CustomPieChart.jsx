import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import CustomLegend from './CustomLegend';
import CustomTooltip from './CustomTooltip';
const CustomPieChart = ({data, label, colors, totalAmount, showTextAnchor}) => {
    return ( 
        <ResponsiveContainer width="100%" height={380}>
            <PieChart>
                <Pie
                    data={data}
                    dataKey="amount"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    innerRadius={70}
                    labelLine={false}
                    >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Pie>
                <Tooltip content={CustomTooltip}/>
                <Legend content={CustomLegend}/>
                {showTextAnchor && (
                    <>
                    <text x="50%" y="45%" dy={-25} textAnchor="middle" fill="#666" fontSize={16}>
                        {label}
                    </text>
                    <text x="50%" y="50%" dy={8} textAnchor="middle" fill="#333" fontSize={24} fontWeight="semi-bold">
                        {totalAmount}
                    </text>
                    </>
                )}
            </PieChart>
        </ResponsiveContainer>
            
    );
}
 
export default CustomPieChart;
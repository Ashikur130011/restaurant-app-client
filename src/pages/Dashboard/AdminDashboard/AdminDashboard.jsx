import { BarChart, Bar, Cell, XAxis, YAxis, PieChart, Pie, Sector, CartesianGrid, Legend } from 'recharts';

import { GiForkKnifeSpoon, GiWallet } from 'react-icons/gi';
import useAuth from '../../../hooks/useAuth';
import { HiUserGroup } from 'react-icons/hi';
import { BiSolidFoodMenu } from 'react-icons/bi';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';


const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const AdminDashboard = () => {
    const { user, loading } = useAuth()
    // const [stats, setStats] = useState('')
    const axiosSecure = useAxiosSecure()
    //axiosSecure didn't work here
    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats')
            return res.data
        }
    })
    // console.log(stats)

    // useEffect( () => {
    //     fetch('http://localhost:5000/admin-stats')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         setStats(data)
    //     })
    // },[])

    const { data: chartData = [] } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats');
            return res.data
        }
    })


    // Custom Shape BarChart
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };


    //pie chart
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    const pieChartData = chartData.map(data => {
        return { name:data.category, value: data.totalAmount}
    })
    return (
        <div>

            <h1 className='text-3xl uppercase mt-6 w-4/5 mx-auto text-left'>Hi, <span className='font-bold text-orange-500'>{user.displayName}</span>  Welcome Back! </h1>
            <div className="stats shadow my-4">
                <div className="stat bg-violet-400 text-white">
                    <div className="stat-figure text-3xl">
                        <GiWallet />
                    </div>
                    <div className=" text-2xl ">Revenue</div>
                    <div className="stat-value">$ {stats?.payments?.totalAmount}</div>
                </div>

                <div className="stat bg-orange-400 text-white">
                    <div className="stat-figure text-3xl">
                        <HiUserGroup />
                    </div>
                    <div className="text-2xl">Customers</div>
                    <div className="stat-value">{stats.users}</div>
                </div>

                <div className="stat bg-violet-400 text-white">
                    <div className="stat-figure text-3xl">
                        <GiForkKnifeSpoon />
                    </div>
                    <div className="text-2xl">Menu/Items</div>
                    <div className="stat-value">{stats.menu}</div>
                </div>
                <div className="stat bg-blue-400 text-white">
                    <div className="stat-figure text-3xl">
                        <BiSolidFoodMenu />
                    </div>
                    <div className="text-2xl">Orders</div>
                    <div className="stat-value">{stats.orders}</div>
                </div>
            </div>
            <div className='flex items-center '>
                <div className="w-1/2">
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            if(!chartData){
                                <span className="loading loading-spinner text-warning"></span>
                            }
                            {loading && <span className="loading loading-spinner text-warning"></span>}
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div className="w-1/2">
                    <PieChart width={400} height={400}>
                        <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            
                        >
                            {pieChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                        </Pie>
                        <Legend/>
                    </PieChart></div>
            </div>
        </div>
    );
};

export default AdminDashboard;
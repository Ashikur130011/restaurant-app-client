import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Title from '../Title/Title';

const PaymentHistory = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data
        }
    })
    // console.log(payments)

    return (
        <div>
            <Title subHeading="At a Glance" heading="Payment History"></Title>
            <h1 className='text-2xl font-bold mt-8 '>Total Payment: {payments.length}</h1>
            <div className="overflow-x-auto w-3/4 mx-auto mt-6">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Transaction Id</th>
                            <th>price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((payment, index) => <tr key={payment._id}>
                                <th>{index + 1}</th>
                                <td>{payment.email}</td>
                                <td>{payment.transactionId}</td>
                                <td>{payment.price}</td>
                                <td>pending</td>
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;
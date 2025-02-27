const Order=require('../model/ordermodel');
const werwer=async(req,res)=>{
    try {
        const sortedOrders = await Order.aggregate([
            {
                $match: { customer_id: 'CUST-85016' }
            }
        ]);

        res.status(200).json(sortedOrders);
    } catch (err) {
        res.status(500).json({ message: 'Error performing aggregation', error: err });
    }
}
const weer = async (req, res) => {
    try {
        const sortedOrders = await Order.aggregate([
            {
                $match: { customer_id: 'CUST-85016' }
            },
            {
                $sort: { order_date: -1 }
            }
        ]);

        res.status(200).json(sortedOrders);
    } catch (err) {
        res.status(500).json({ message: 'Error performing aggregation', error: err });
    }
};
const wertfsd = async (req, res) => {
    try {
        const sortedOrders = await Order.aggregate([
            {
                $project: {
                    order_id: 1,
                    customer_id: 1,
                    order_date: 1,
                    product_details: 1,
                    order_total: 1,
                    _id: 0
                }
            }
        ]);

        res.status(200).json(sortedOrders);
    } catch (err) {
        res.status(500).json({ message: 'Error performing aggregation', error: err });
    }
};
const aggregation1 = async (req, res) => {
    try {
        const sortedOrders = await Order.aggregate([
            {
                $match: { customer_id: 'CUST-85016' }
            },
            {
                $limit: 5
            }
        ]);

        res.status(200).json(sortedOrders);
    } catch (err) {
        res.status(500).json({ message: 'Error performing aggregation', error: err });
    }
};

module.exports={aggregation1}
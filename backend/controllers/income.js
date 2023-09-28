const IncomeSchema = require('../models/incomeModel')

exports.addIncome = async (req, res)=>{
    const {title, amount, category, discription, date} = req.body

    const income = IncomeSchema({
        title,
        amount,
        category,
        discription,
        date
    })

    try {
        if(!title || !category || !discription || !date){
            return res.status(400).json({message: 'All fields are Required!'})
        }

        if(amount <=0 ||  !amount === 'number' ){
            return res.status(400).json({message: 'Amount must be a Positive number'})
        }

        await income.save()
        res.status(200).json({message: 'Income Added!'})
    } catch(error){
        res.status(500).json({message: 'Server Error!'})
    }
}
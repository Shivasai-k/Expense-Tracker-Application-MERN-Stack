const express=require('express')
const { addTransaction, getAllTransaction, editTransaction,deleteTransaction } = require('../controllers/transactionController')


//router object
const router=express.Router()

//routes
//add transaction POST 
router.post('/add-transaction',addTransaction);

//edit transaction POST 
router.post('/edit-transaction',editTransaction);

//delete transaction POST 
router.post('/delete-transaction',deleteTransaction);

//get transactions GET
router.post('/get-transaction',getAllTransaction);
module.exports=router
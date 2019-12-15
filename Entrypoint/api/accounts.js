const express = require('express')
const router = express.Router();
const BankService = require('../../Application/BankService')
const Account = require('../../Entities/Account')
const bankService = new BankService();
const bodyParser = require('../../util/bodyParser')

router.use(bodyParser)

router.post('/addAccount', (req, res) => {
    let code = req.body.code;
    let balance = req.body.balance;
    let active = (!req.body.active) ? false : req.body.active;
    if (!code || !balance) {
        res.send("please set a code and balance");
        return;
    }
    let account = new Account(code, balance, active);
    bankService.insert(account);
    res.send("Inserted");
})

router.get('/', (req, res) => {
    bankService.getAll(result => {
        res.send(result)
    })
})

module.exports = router;
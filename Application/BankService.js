var AccountData = require('../Data/AccountData')

function BankService() {
    this.accountData = new AccountData();
}


BankService.prototype.insert = function (account) {
    return this.accountData.insert(account);
}

BankService.prototype.getAll = function (callback) {
    return this.accountData.getAll(callback);
}

module.exports = BankService;
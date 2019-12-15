const MongoClient = require('mongodb').MongoClient;

function AccountData() {
    this._init_();
}
AccountData.prototype._init_ = function () {
    let mongoClient = new MongoClient("mongodb://localhost:27017/bank", {
        useUnifiedTopology: true
    });
    mongoClient.connect((err, db) => {
        if (err) throw err;
        this.database = db.db("bank");
        this.collection = this.database.collection("accounts");
    });
}

AccountData.prototype.insert = function (account) {
    this.collection.insertOne(account, (err) => {
        if (err) throw err;
    })
}

AccountData.prototype.getAll = function (callback) {
    this.collection.find({}).toArray((err, res) => {
        if (err) throw err;
        callback(res)
    })
}

module.exports = AccountData;
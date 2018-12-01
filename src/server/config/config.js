const config = {
  port: 3000,
  databaseUrl: "mongodb://yahya:yahya@cluster0-shard-00-00-iky7n.mongodb.net:27017,"+
  "cluster0-shard-00-01-iky7n.mongodb.net:27017,"+
  "cluster0-shard-00-02-iky7n.mongodb.net:27017/articles?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true",
}

module.exports = config

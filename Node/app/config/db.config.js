// module.exports = {
//   HOST: "localhost",
//   USER: "root",
//   PASSWORD: "thinkit",
//   DB: "tutorialdb",
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// };
module.exports = {
  HOST: "tutorialdb.cx62yctlgpda.us-east-1.rds.amazonaws.com",
  USER: "admin",
  PASSWORD: "admin123",
  DB: "tutorialdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
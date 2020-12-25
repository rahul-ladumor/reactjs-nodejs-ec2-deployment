# reactjs-nodejs-ec2-deployment
deploy react js and nodejs project in ec2


## Run Nodejs in Pm2
 `` pm2 start npm --name "backend" -- start ``


cd .. && cd client

npm run build

echo "Run React Build in Pm2"
pm2 serve build 3000 --spa --name "frontEnd" 
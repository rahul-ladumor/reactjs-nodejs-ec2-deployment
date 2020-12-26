# reactjs-nodejs-ec2-deployment
deploy react js and nodejs project in ec2

# deploy Service in EC2
### Run script.sh file

go to root directory & simply run 

`` sh script.sh ``

when script completed

go to 

client -> src -> 

change file name called ``` http-common.js ```

open file with nano editior

`` nano http-common.js ``

Change IP = 'your instance public Ip'

after that restart pm2 

`` pm2 restart frontEnd ``


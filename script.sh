#!/bin/sh

echo "Update ubuntu...."
sudo apt update
echo "Install curl..."
sudo apt install curl -y
echo "installing NodeJS........"
curl -sL https://deb.nodesource.com/setup_14.x | sudo bash -
sudo apt-get install -y nodejs
echo "Installing Pm2 server...."
sudo npm install pm2@latest -g
echo "Installing git & nginx..."
sudo apt install git  -y
sudo apt install nginx -y

echo "complete"

echo "Now Clone repo"

cd /var/www/
sudo git clone https://github.com/rahul-ladumor/reactjs-nodejs-ec2-deployment.git

cd /var/www
sudo mv reactjs-nodejs-ec2-deployment TutorialApp

sudo chmod 777 -R ./
cd TutorialApp

cd client && npm i && cd .. && cd server && npm i 

echo "Run Nodejs in Pm2"
pm2 start npm --name "backend" -- start

cd .. && cd client && npm run build

echo "Run React Build in Pm2"
pm2 serve build 3000 --spa --name "frontEnd" 
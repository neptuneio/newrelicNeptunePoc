#!/bin/bash

# Start nodejs app
touch ./server.log ./client.log
nohup /usr/bin/node ./server.js > ./server.log 2>&1 &

# Start generating load for the nodejs app
killall load_newrelic_app.py
chmod +x ./load_newrelic_app.py
nohup ./load_newrelic_app.py > ./client.log 2>&1 &

# Initialize stress load with 6 min duty cycle
killall stress_load.sh
chmod +x ./stress_load.sh
nohup ./stress_load.sh > /dev/null 2>&1 &

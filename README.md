Test setup to generate server and application alerts in NewRelic using a node app and stress package.
========================
Alerts will be sent to Neptune and those alerts will be remediated using Neptune agent on the host

What does this setup do
-----------------------
1. Installs nodejs and a sample nodejs app with NewRelic integration
2. Installs newrelic server agent to monitor host level metrics - cpu, memory, diskio etc
3. Installs Stress package which continuously generates memory, cpu and diskIO load on host to generate server alerts in NewRelic
4. Installs a shell script that pings nodejs app to generate application errors in NewRelic
5. Installs Neptune agent on the host to remediate alerts

Requirements
------------
1. Git has to be installed on the host
2. If you want to run a nodejs app then nodejs has to be installed

How to use this setup
---------------------
Step 1 : Install git

    sudo apt-get install -y git
    or
    sudo yum install -y git

Step 2 : Install nodejs

    sudo apt-get install -y nodejs
    or
    curl --silent --location https://rpm.nodesource.com/setup_4.x | sudo bash -
    sudo yum install -y nodejs

Step 3 : Clone this repo on a linux host

    git clone https://github.com/neptuneio/newrelicNeptunePoc.git

Step 4 : Update NewRelic license key in newrelic.js file. Go to your NewRelic dashboard --> Account Settings --> License key in the right side bar

    vim newrelicNeptunePoc/newrelic.js

Step 5 : Install NewRelic server agent (Go to NewRelic servers dashboard and click add more to find your agent installation commands)

Step 6 : Install Stress package

    sudo apt-get install -y stress
    or
    sudo yum install -y stress

Step 7 : Install Neptune agent by updating your API_KEY variable and REQUIRE_SUDO=true if you want to give agent sudo permissions

    REQUIRE_SUDO="false" AGENT_USER="neptune" API_KEY="aldkdfkdalfj82adfadfdf" bash -c "$(curl -sS -L https://raw.githubusercontent.com/neptuneio/neptune-agent/prod/scripts/linux/install_neptune_agent_linux.sh)"

Step 8 : Run alerts generation script.

    cd newrelicNeptunePoc
    chmod +x generate_alerts.sh
    ./generate_alerts.sh

Step 9 : Use the below thresholds to generate alerts properly in your NewRelic account.

    # If below thresholds dont work properly, look at the graphs in 15-20 min and adjust thresholds appropriately
    Error rate > 0.1% in 5min
    Cpu > 90% in 5min
    Memory > 70% in 5min
    Disk utilization > 50% in 5min


Step 10 : Integrate NewRelic with Neptune and create rules on your alerts



Contributing
------------
Please clone, make changes and send in a pull request

License and Authors
-------------------
Copyright Neptune.io, Inc. 2015

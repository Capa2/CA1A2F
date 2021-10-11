#!/usr/bin/env bash

PROJECT_NAME="CA1A2F"
DROPLET_URL="karpantschof.com"
echo "##############################"
echo "Building the frontend project"
echo "##############################"
npm run build

echo "##############################"
echo "Deploying Frontend project..."
echo "##############################"

scp -r ./build/* root@$DROPLET_URL:/var/www/$PROJECT_NAME


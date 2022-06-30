#!/bin/bash

npm install --production

echo "Production Dependencies Installed"

npm install pm2 -g

echo "PM2 Installed"

npm run clean

echo "Dist folder Cleaned and Removed"

npm run build

echo "Build Completed Successfully"

pm2 start ./dist/index.js

echo "PM2 Process Started"

pm2 startup

echo "Startup Generated"

pm2 save

echo "Process Listed Saved"

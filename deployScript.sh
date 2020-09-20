#!/bin/bash

c() { [ $# -eq 0 ] && echo "\033[0m" || echo "$1" | sed -E "s/(.)/‹\1›/g;s/([KRGYBMCW])/3\1/g;s/([krgybmcw])/4\1/g;s/S/22/;y/sufnKRGYBMCWkrgybmcw›/14570123456701234567m/;s
/‹/\\\033[/g"; }

set -e
date
trap "exit" INT TERM ERR
trap "kill 0" EXIT
trap "echo -e Script terminating" EXIT
git pull
if [ $?=0 ]
then
  echo -e "$(c gK)\xE2\x9C\x94 Git pull succeeded$(c)"
else
  echo -e "$(c rK) Git pull failed$(c)"
  exit 99;
fi

npm run build
if [ $? = 0 ]
then
  echo -e "$(c gK)\xE2\x9C\x94 Build successful$(c)"
else
  echo -e "$(c rK) Build failed$(c)"
  exit 98;
fi

pm2 stop 5

if [ $? = 0 ]
then
  echo -e "$(c gK)\xE2\x9C\x94 Stopped old process$(c)"
else
  echo -e "$(c rK) Failed to stop old process$(c)"
  exit 97;
fi

pm2 serve build/ 3000 --name "siri-webapp" --spa

if [ $? = 0 ]
then
echo -e "$(c gK)\xE2\x9C\x94 Successfully deployed new SIRI web app$(c)"
else
  echo -e "$(c rK) Failed to deploy SIRI web app$(c)"
exit 96;
fi


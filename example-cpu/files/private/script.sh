# this script prints % CPU usage to stdout
# make sure chmod +x
ps -A -o %cpu | awk '{s+=$1} END {print s "%"}'

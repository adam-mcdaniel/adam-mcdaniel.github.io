
#!/bin/bash

if [ "$1" == "" ]; then
    echo "Give an image path to add to the website"
    exit 1
else 
    cp $1 static/
    cp $1 src/images/
fi

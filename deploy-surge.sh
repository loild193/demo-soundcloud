# Build reactjs app with production mode
yarn build

# Move to build folder
cd build

# Clone index.html to 200.html
cp index.html 200.html

# Start deploying via Surge
surge . sabo-soundcloud.surge.sh
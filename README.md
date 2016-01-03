
Server simple nodejs with Docker.

### Installation

docker build -t [USER-NAME]/node-server .

docker run -d -p 9000:9000 --name node-server-container [USER-NAME]/node-server

test in browser: http://localhost:9000
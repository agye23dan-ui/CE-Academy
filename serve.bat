@echo off
echo Open http://localhost:8080 in Chrome or Edge, then click the install icon in the address bar.
start http://localhost:8080
python -m http.server 8080

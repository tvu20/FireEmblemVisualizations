### Development Steps:

How to run our app as a two-server process which makes frontend development much nicer.
```bash
# run the backend
cd api
venv/bin/flask run --no-debugger

# *in a separate terminal* run the frontend
cd frontend
npm start
```
Visit http://localhost:3000 in the browser.


How to simulate the production environment as a one-server app. 
```bash
# ---build the frontend---
cd frontend
npm run build # build frontend

# ---run the server---
cd api
venv/bin/gunicorn app:app
```
Visit http://localhost:8000 in the browser.


How to activate venv: 
```bash
cd api
source venv/bin/activate
```

### Deployment Steps:

Build the frontend first, then push to main branch
```bash
# ---build the frontend---
cd frontend
npm run build # build frontend
```

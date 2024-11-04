# Todo-Full-Stack-App
A small project made for learning full-stack web development. The code is written out of two examples, initially made from [Kwaku Duah's tutorial](https://dev.to/thekalderon/full-stack-todo-webapp-with-react-and-python-django-4472) and then once I realized that didn't actually implement API requests I used [Diogo Souza's similar tutorial](https://blog.logrocket.com/using-react-django-create-app-tutorial/).

# Setup
To install the backend dependencies, open a terminal in this directory and run
```
cd backend
chmod +x manage.py
python -m venv python-venv
pipenv shell
pipenv install django djangorestframework django-cors-headers
```
Then, to initialize a SQLlite database with django and create an admin user within it:
```
./manage.py migrate
./manage.py createsuperuser
```
and supply the login credentials you would like to use.

To install the frontend dependencies, navigate back to this directory and run
```
cd frontend
npm install bootstrap reactstrap axios
```

# Running the app
Because this app requires both the frontend and the backend running in parallel, you'll need to have two different terminal windows open to run it locally.
In the first, run
```
cd backend
./manage.py runserver
```
and navigate to [http://localhost:8000/admin](http://localhost:8000/admin) in your browser. If you can log in using the account you made in the previous section and then see Django's [Browsable API](https://www.django-rest-framework.org/topics/browsable-api/), then the backend is running properly. Next, open the second terminal window and run
```
cd frontend
npm start
```
to start the react app itself. Navigate to [http://localhost:3000](http://localhost:3000) and you should be able to view, filter, edit, and delete tasks as you see fit.

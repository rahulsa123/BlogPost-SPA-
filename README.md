# blogpost backend

### Technologies

* Python 3.7.
* Django >3.
* Django rest framework.

### Installation
* install pipenv
  ```bash
  $ pip3 install pipenv
  ```
* clone respositry
  ```bash
  $ git clone https://github.com/rahulsa123/blog_backend.git
  $ cd MyShop
  ```
* Install dependencies and run server
  ```bash
  $ pipenv install --ignore-pipfile
  $ pipenv shell
  $(blog_backend) ./manage.py makemigrations
  $(blog_backend) ./manage.py migrate
  $(blog_backend) ./manage.py createsuperuser # for admin page
  $(blog_backend) ./manage.py runserver.
  ```
* for default configration(inside project folder).
  ```bash
  $ mkdir media
  $ cp <any image path for default profile> media/default.png 

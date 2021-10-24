from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
ENV = 'dev'

if ENV == 'dev':
    app.debug = True
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:a.yuvAc*@localhost/mathPratice'
else:
    app.debug = False
    app.config['SQLALCHE MY_DATABASE_URI'] = ''

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class LoginInfo(db.Model):
    __tablename__ = 'loginInfo'
    username = db.Column(db.String(200), primary_key = True)
    password = db.Column(db.String(200))

    def __init__(self, column1, column2):
        self.column1 = column1
        self.column2 = column2

@app.route('/')  
def login():
    return render_template('login.html')

@app.route('/signup')  
def signup():
    return render_template('create.html')

@app.route('/createdaccount', methods=['POST'])
def createdaccount():
    username = request.form['username']
    pwd = request.form['password']
    if db.session.query(LoginInfo).filter(LoginInfo.username == username).count() == 0:
        data = LoginInfo(username, pwd)
        db.session.add(data)
        print(username, pwd)
        db.session.commit()
    return render_template('login.html')

@app.route('/login', methods=['POST'])
def index():
    username = request.form['username']
    pwd = request.form['password']
    print(username, pwd)
    return render_template('index.html')



if __name__ == '__main__':
    app.run(port=5001)
from flask import Flask, request, jsonify
from models.models import User, db
from flask_cors import CORS
import os


app = Flask(__name__)
CORS(app)

basedir = os.path.abspath(os.path.dirname(__file__))

app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{os.path.join(basedir, "users.db")}'  # One level up from backend/
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)


@app.route('/register', methods=['POST', 'GET'])
def register():

    if request.method == 'GET':
        return """
            <h1>Registration Page</h1>
            <p>This endpoint is for user registration and should be accessed via POST requests.</p>
    """

    elif request.method == 'POST':

        data = request.get_json()

        # Extract fields from the frontend data
        first_name = data.get('first_name')
        last_name = data.get('last_name')
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')
        age = data.get('age')
        gender = data.get('gender')
        education_level = data.get('education_level')
        nationality = data.get('nationality')
        birth_date = data.get('birth_date')
        languages = ','.join(data.get('languages', []))  

        # Check if username or email already exists
        existing_user = User.query.filter_by(username=username).first() or User.query.filter_by(email=email).first()
        if existing_user:
            return jsonify({'message': 'Username or email already exists!'}), 400

        # Create new user
        new_user = User(
            first_name=first_name,
            last_name=last_name,
            username=username,
            email=email,
            password=password,
            age=age,
            gender=gender,
            education_level=education_level,
            nationality=nationality,
            birth_date=birth_date,
            languages=languages
        )
        db.session.add(new_user)
        db.session.commit()

        return jsonify({'message': 'User registered successfully!'}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()

    # Extract credentials from the request
    username_or_email = data.get('username_or_email')
    password = data.get('password')

    # Check if the username or email exists in the database
    user = User.query.filter((User.username == username_or_email) | (User.email == username_or_email)).first()

    if not user:
        return jsonify({'message': 'Invalid username or email!'}), 400

    # Check if the password is correct
    if user.password != password:  # This is insecure, hash passwords in production
        return jsonify({'message': 'Invalid password!'}), 400

    # Successful login
    return jsonify({'message': 'Login successful!', 'user': {'username': user.username, 'email': user.email}}), 200

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)


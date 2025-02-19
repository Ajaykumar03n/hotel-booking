from flask import Flask, request, jsonify
from flask_mail import Mail, Message
from flask_cors import CORS  # Import CORS
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

# Enable CORS for all routes
CORS(app)

# Configuring Flask-Mail
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = os.getenv('EMAIL_USER')
app.config['MAIL_PASSWORD'] = os.getenv('EMAIL_PASS')
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True

mail = Mail(app)

@app.route('/api/contact', methods=['POST'])
def contact():
    try:
        # Extracting form data from JSON body
        data = request.get_json()
        name = data.get('name')
        email = data.get('email')
        message = data.get('message')

        # Setting up the email
        msg = Message('Contact Form Submission',
                      sender=email,
                      recipients=[os.getenv('EMAIL_USER1')])
        msg.body = f"Message from {name} ({email}):\n\n{message}"

        # Sending the email
        mail.send(msg)

        return jsonify({"message": "Message sent successfully!"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
@app.route('/api/payment', methods=['POST'])
def payment():
    try:
        data = request.get_json()
        name = data.get('name')
        email = data.get('email')
        phone_number = data.get('phoneNumber')
        check_in = data.get('checkInDate')
        check_out = data.get('checkOutDate')
        room = data.get('roomDetails')

        msg = Message('New Booking Details',
                      sender=os.getenv('EMAIL_USER'),
                      recipients=[os.getenv('EMAIL_USER1')])
        msg.body = (f"Booking Details:\n\n"
                    f"Name: {name}\n"
                    f"Email: {email}\n"
                    f"Phone Number: {phone_number}\n"
                    f"Check-In Date: {check_in}\n"
                    f"Check-Out Date: {check_out}\n"
                    f"Room Type: {room['roomType']}\n"
                    f"Price: {room['price']}\n"
                    f"Features: {', '.join(room['features'])}\n"
                    f"Max Capacity: {room['maxCapacity']} Guests\n")

        mail.send(msg)
        return jsonify({"message": "Booking details sent successfully!"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)

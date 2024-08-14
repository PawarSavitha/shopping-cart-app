# test_import.py
try:
    from flask_sqlalchemy import SQLAlchemy
    print("Flask-SQLAlchemy imported successfully.")
except ImportError:
    print("Flask-SQLAlchemy import failed.")

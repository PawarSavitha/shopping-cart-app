from flask import request, jsonify, session
from models import db, User, Product, CartItem

def init_routes(app):

    @app.route('/')
    def index():
        return "Welcome to the Shopping Cart App!"
    @app.route('/register', methods=['POST'])
    def register():
        data = request.json
        user = User(username=data['username'], password=data['password'])
        db.session.add(user)
        db.session.commit()
        return jsonify({"message": "User registered successfully!"})

    @app.route('/login', methods=['POST'])
    def login():
        data = request.json
        user = User.query.filter_by(username=data['username']).first()
        if user and user.password == data['password']:
            session['user_id'] = user.id
            return jsonify({"message": "Logged in successfully!"})
        return jsonify({"message": "Invalid credentials!"}), 401

    @app.route('/products', methods=['GET', 'POST'])
    def products():
        if request.method == 'POST':
            data = request.json
            product = Product(name=data['name'], price=data['price'], description=data['description'])
            db.session.add(product)
            db.session.commit()
            return jsonify({"message": "Product added successfully!"})
        products = Product.query.all()
        return jsonify([{"id": p.id, "name": p.name, "price": p.price, "description": p.description} for p in products])

    @app.route('/cart', methods=['POST', 'GET'])
    def cart():
        user_id = session.get('user_id')
        if not user_id:
            return jsonify({"message": "User not logged in!"}), 401
        
        if request.method == 'POST':
            data = request.get_json
            cart_item = CartItem(user_id=user_id, product_id=data['product_id'], quantity=data['quantity'])
            db.session.add(cart_item)
            db.session.commit()
            return jsonify({"message": "Item added to cart!"})
        
        cart_items = CartItem.query.filter_by(user_id=user_id).all()
        return jsonify([{"product_id": c.product_id, "quantity": c.quantity} for c in cart_items])

    @app.route('/checkout', methods=['POST'])
    def checkout():
        user_id = session.get('user_id')
        if not user_id:
            return jsonify({"message": "User not logged in!"}), 401

        CartItem.query.filter_by(user_id=user_id).delete()
        db.session.commit()
        return jsonify({"message": "Checkout successful!"})

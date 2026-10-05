# 💊 MediCare Pharmacy

MediCare Pharmacy is a **frontend-based online pharmacy website** designed to make healthcare shopping simple, convenient, and user-friendly.

The project allows users to browse medicines and healthcare products, search for medicines, add products to a shopping cart, place orders, view order history, and explore special offers.

It also includes a basic **Admin Dashboard** for managing medicines and viewing order information.

---

## 📌 Project Overview

MediCare Pharmacy provides a simple digital platform where users can:

* Browse available medicines
* Search for medicines
* Filter medicines by category
* View detailed medicine information
* Browse health and personal-care products
* Add products to the shopping cart
* Increase or decrease product quantity
* Remove products from the cart
* Place orders
* View previous orders
* View available offers and coupon codes
* Send messages through the contact page
* Login as a user
* Login as an administrator

The application uses **JavaScript and LocalStorage** to maintain cart, login, medicine, and order data in the browser.

---

## ✨ Features

### 👤 User Features

* 🏠 Home page with pharmacy information
* 💊 Medicine listing
* 🔎 Medicine search
* 📂 Category-based filtering
* 📋 Medicine details
* 🛍️ Health products
* 🛒 Shopping cart
* ➕ Increase product quantity
* ➖ Decrease product quantity
* 🗑️ Remove products from cart
* 📦 Place orders
* 📜 View order history
* 🎁 Offers and coupon codes
* 📞 Contact form
* 🔐 User login

### 🛠️ Admin Features

* 🔐 Admin login
* 📊 Admin dashboard
* 💊 View medicine count
* 📦 View order count
* ➕ Add medicines
* 🗑️ Clear medicine data
* 🚪 Admin logout

---

## 🖥️ Technologies Used

| Technology      | Purpose                                        |
| --------------- | ---------------------------------------------- |
| HTML5           | Creating the website structure                 |
| CSS3            | Styling and layout                             |
| Bootstrap 5     | Responsive UI components                       |
| Bootstrap Icons | Icons                                          |
| JavaScript      | Dynamic functionality                          |
| LocalStorage    | Storing cart, orders, medicines and login data |

---

## 📂 Project Structure

```text
MediCare Pharmacy/
│
├── index.html
├── medicines.html
├── categories.html
├── medicine-details.html
├── health-products.html
├── about.html
├── services.html
├── offers.html
├── contact.html
├── cart.html
├── orders.html
├── login.html
├── admin-login.html
├── admin.html
│
├── style.css
├── script.js
├── medicines.js
├── categories.js
├── offers.js
├── cart.js
├── orders.js
│
├── package.json
├── package-lock.json
└── node_modules/
```

---

## 🔄 Application Flow

```text
Home
  ↓
Browse Medicines
  ↓
Select Medicine
  ↓
View Medicine Details
  ↓
Add to Cart
  ↓
Shopping Cart
  ↓
Place Order
  ↓
Order History
```

### Category Flow

```text
Categories
     ↓
Select Category
     ↓
View Medicines
     ↓
Add to Cart
```

### Admin Flow

```text
Admin Login
     ↓
Admin Dashboard
     ↓
Manage Medicines
     ↓
View Orders
```

---

## 🔎 Medicine Search

Users can search for medicines by entering a medicine name.

Example:

```text
Paracetamol
```

The application displays the matching medicine from the available medicine data.

---

## 🛒 Shopping Cart

The shopping cart allows users to:

* Add medicines
* Add health products
* Increase quantity
* Decrease quantity
* Remove products
* View individual product totals
* View the overall cart total

Cart information is stored using **Browser LocalStorage**.

---

## 📦 Order Management

When the user places an order:

1. Cart items are collected.
2. The total amount is calculated.
3. An order is created.
4. The order is stored in LocalStorage.
5. The cart is cleared.
6. The user is redirected to the Orders page.

---

## 🎁 Offers

The website includes special offers such as:

* **15% OFF** for first orders
* Free delivery offers
* Health product discounts

Example coupon:

```text
MEDI15
```

---

## 🔐 Login

The project includes a basic frontend login system.

User login information is handled using **LocalStorage**.

> This is a frontend demonstration and does not use a real authentication server.

---

## 🔑 Admin Login

For demonstration purposes:

```text
Username: admin
Password: admin123
```

> These credentials are only for the frontend project demonstration. A production application should use secure server-side authentication.

---

## 💾 Data Storage

This project uses **Browser LocalStorage** instead of a backend database.

The following information can be stored:

* Medicines
* Cart items
* Orders
* Login status
* Admin login status

Because LocalStorage is browser-based, the data is stored locally on the user's device/browser.

---

## 📱 Responsive Design

The website is designed using **Bootstrap 5**, making the interface responsive across:

* 💻 Desktop
* 💻 Laptop
* 📱 Mobile
* 📟 Tablet

---

## 🚀 How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/MediCare-Pharmacy.git
```

### 2. Open the project

Open the project folder in **Visual Studio Code**.

### 3. Run the website

Open:

```text
index.html
```

You can use **Live Server** in VS Code for a better development experience.

---

## 🌐 Deployment

The project can be deployed using:

* GitHub Pages
* Netlify
* Vercel

---

## ⚠️ Project Limitations

This is a **frontend project**, so it does not currently include:

* Real payment gateway
* Real pharmacy database
* Backend server
* Real user authentication
* Real-time medicine inventory
* Real order processing
* Real prescription verification

These features can be added in a future version using a backend and database.

---

## 🔮 Future Enhancements

Possible future improvements include:

* 👨‍⚕️ Prescription upload
* 💳 Online payment integration
* 🗄️ MySQL/MongoDB database
* 🔐 Secure authentication
* 📦 Real-time inventory management
* 🚚 Order tracking
* 📧 Email notifications
* 📱 SMS notifications
* 🤖 AI-based medicine assistance
* 👨‍💼 Advanced admin management

---

## 🎯 Project Objective

The main objective of MediCare Pharmacy is to create a **simple, responsive, and user-friendly online pharmacy interface** that demonstrates how modern web technologies can be used to build an e-commerce healthcare application.

---

## 👩‍💻 Author

**Sampangi Bhargavi**

Computer Science and Engineering Graduate

---

## 📄 License

This project is created for **educational and portfolio purposes**.

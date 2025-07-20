
````markdown
# 🛍️ Product Comparison Table App

A modern React-based product comparison tool that allows users to compare multiple products side-by-side using a tabular format 
and detailed card views in a modal. Designed with responsive UI, elegant design, and intuitive interaction.

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Ashutosh5333/Addteq.git
cd vite-project
````
### 2. Install Dependencies

Make sure you have **Node.js** and **npm** installed.
```bash
npm install
```
### 3. Start the Development Server

```bash
npm run dev
```
Your app will be running at: [http://localhost:5173](http://localhost:5173)

## 🧩 Features

* ✅ Compare multiple products in a **side-by-side table** format.
* ✅ View detailed product info with **dynamic feature lists**.
* ✅ Remove individual products from the comparison.
* ✅ Open a **modal view** to see each product as a rich card.
* ✅ Responsive design for mobile, tablet, and desktop.
* ✅ Clean UI with Tailwind CSS styling.

### ✅ Add to Compare

* Users can **select up to 3 products** to compare side-by-side.
* The **"Compare" area appears only when 2 or more** products are selected.
* Selected items are **visually highlighted**.

### ✅ Comparison View

* Displays a **side-by-side in table** of selected products.
* All features are **dynamically extracted** even if some products are missing them.
* **Differences are visually highlighted**.

### ✅ Clear/Remove Options

* Users can:

  * ❌ **Remove individual products** from the comparison.
  * 🧹 **Clear all selected items** at once.
* Comparison selection is **persisted using `localStorage`**, so it survives page reloads.


### ✅ Search / Filter

* Includes a search bar that filters and displays matching products in real-time as you type..
* Includes a **brand filter dropdown**.
* Offers a **“Clear Filters”** option to reset the product list.

## Screen Shot 
  

## 🖼️ Product Comparison Flow Screenshots

### 1. **Initial Product View**

> *Default screen showing all available products.*

<img width="1470" height="837" alt="Initial Product View - Default Screen with Products" title="Initial Product View - Default Screen with Products" src="https://github.com/user-attachments/assets/2be7dc2b-adda-4acc-a6bf-bd75db08547e" />

---

### 2. **Brand Dropdown Options**

> *User opens brand filter to view all available brand options.*

<img width="1470" height="838" alt="Brand Dropdown Options" title="Brand Dropdown Options" src="https://github.com/user-attachments/assets/ff77514f-4f2b-4346-b84a-24d7ddad07d8" />

---

### 3. **Brand Filter Dropdown Expanded**

> *Brand filter dropdown is expanded showing brand choices.*

<img width="1470" height="838" alt="Brand Filter Dropdown Expanded" title="Brand Filter Dropdown Expanded" src="https://github.com/user-attachments/assets/24ebc3cf-2cbe-4558-a427-478155732003" />

---

### 4. **Product Search in Action**

> *Search bar being used to find a specific product.*

<img width="1470" height="838" alt="Product Search in Action" title="Product Search in Action" src="https://github.com/user-attachments/assets/701d8ab9-3d4d-430d-a3cc-dc37643796f6" />

---

### 5. **First Product Selected for Comparison**

> *First product is selected and ready for comparison.*

<img width="1470" height="838" alt="First Product Selected for Comparison" title="First Product Selected for Comparison" src="https://github.com/user-attachments/assets/19e489af-1ac7-4800-8cf0-800335e61a31" />

---

### 6. **Second Product Selected for Comparison**

> *Second product added, enabling side-by-side comparison.*

<img width="1470" height="838" alt="Second Product Selected for Comparison" title="Second Product Selected for Comparison" src="https://github.com/user-attachments/assets/0ca3640b-e513-48dc-8256-4c1d66f75aa5" />

---

### 7. **View Details Modal Opened**

> *Detailed product information is displayed in a modal popup.*

<img width="1470" height="838" alt="View Details Modal Opened" title="View Details Modal Opened" src="https://github.com/user-attachments/assets/7fa6e0ce-21c1-4219-a5b4-6621ba140da7" />


## 📦 Assumptions

* The `products` data passed to the component includes:

  * `id`, `name`, `price`, `image`, `brand`, `features`, and optional metadata like `description`, `stock`, `dimensions`, `warranty`, and `shipping`.
* The `features` array is an array of objects:
  Example:

  ```js
  features: [
    { name: "Battery Life", value: "20 hours" },
    { name: "Rating", value: "4.7 (8,500 reviews)" },
    { name: "Category", value: "electronics" },
    { name: "Connectivity", value: "Bluetooth 5.2" },
  ]
  ```
* All features are dynamically extracted and compared even if some products are missing them.
* Product removal is handled via `onRemove(productId)` callback function.
* The parent component manages product selection state.

---

## 🛠️ Tech Stack

* **React**
* **Tailwind CSS**
* **Lucide Icons**
* **Vite** for fast dev builds

---

## 🧪 Example Product Object

```js
{
  id: "1",
  name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
  category: "electronics",
  image: "https://m.media-amazon.com/images/I/51aXvjzcukL._SX679_.jpg",
  brand: "Sony",
  price: 348.0,
  features: [
    { name: "Category", value: "electronics" },
    { name: "Rating", value: "4.7 (8,500 reviews)" },
    { name: "Battery Life", value: "30 hours" },
    { name: "Connectivity", value: "Bluetooth 5.2" },
  ],
  description:
    "Premium wireless headphones with exceptional noise cancellation and up to 30 hours of battery life.",
  stock: "In Stock",
  warranty: "1 Year Sony India Warranty",
  dimensions: "7.3 x 3 x 10.3 inches",
  shipping: "Free 2-day Delivery",
}
```

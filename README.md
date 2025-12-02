 📊 Sales Dashboard

A fully functional Sales Analytics Dashboard built for the Junior Frontend Engineer Assignment
The dashboard integrates with a backend API to provide filtering, sorting, chart visualization, and cursor-based pagination — all inside a modern, responsive UI.

🔗 Live Demo: https://sales-dashboard-web.vercel.app  
📁 GitHub Repository:https://github.com/Samina404/Sales-Dashboard.git

---

 🚀 Overview

This project demonstrates practical frontend engineering skills including:

- API integration & authentication  
- Dynamic data fetching  
- Reusable components  
- State management  
- Data visualization  
- Responsive UI using Tailwind CSS  

Users can interactively explore sales data using multiple filters and navigate through results using cursor tokens (`before` / `after`).

---

 🧩 Features

🔐 Authentication
Uses:
**POST `/getAuthorize`**  
to request an authorization token on page load.

---

 📅 Date Range Filtering
Users can select:
- Start Date
- End Date

Automatically reloads filtered results from the API.

---

 🔍 Advanced Filter Options
Filter sales by:
- Minimum Price  
- Customer Email  
- Customer Phone  

All filters are applied server-side.

---

### 📈 Sales Chart
- Visualizes **Total Sales Over Time**
- Built using Recharts / Chart.js (based on your implementation)

---

 📋 Sales Table
Includes:
- Date  
- Price  
- Customer Email  
- Customer Phone  

Styled for clarity & easy readability.

---

 ↕️ Sorting
Sortable fields:
- **Date**
- **Price**

Supports **ascending** and **descending** order.

---

 ⏭ Cursor-Based Pagination
Backend provides:
- `after` token → Next page  
- `before` token → Previous page  

Pagination buttons automatically disable when unavailable.

---

 🌐 Deployment
Deployed using:
- Vercel
https://sales-dashboard-web.vercel.app 
---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|--------------|
| Framework | Next.js / React |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Charts | Recharts / Chart.js |
| UI Components | Custom / ShadCN (if used) |
| Build Tool | Next.js App Router |

---


📁 Project Structure
arduino
Copy code
src/
 ├── app/
 │   ├── components/
 │   ├── api/
 │   ├── lib/
 │   ├── page.tsx
 │   ├── layout.tsx
 │   └── globals.css
 ├── public/
 ├── tailwind.config.js
 └── tsconfig.json
▶️ Getting Started
bash
Copy code
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
📱 Responsive Design
The layout is optimized for:

Desktop

Tablet

Mobile


📄 License
This project is open-source and free to use.

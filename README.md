# Secure Data Lookup Chrome Extension

## Overview
The **Secure Data Lookup Chrome Extension** is a lightweight, user-friendly tool designed to securely fetch and display data from a database. It combines the power of browser extensions, backend services, and confidential computing to deliver a seamless and secure data lookup experience. Built with **JavaScript**, **Node.js**, **MySQL**, and **AWS Nitro Enclaves**, this project aligns with industry best practices for data security and usability.

---

## Features
- **User Authentication**: Secure token-based authentication using JWT.
- **Encrypted Data Transmission**: Ensures data privacy with HTTPS.
- **Dynamic Data Retrieval**: Fetches and displays data in real time.
- **Confidential Computing**: Leverages AWS Nitro Enclaves for sensitive data processing.
- **Easy-to-Use Interface**: A simple and intuitive popup UI for data lookup.

---

## Tech Stack
### Frontend:
- HTML, CSS, and JavaScript
- Chrome Extension API

### Backend:
- Node.js with Express.js
- MySQL for data storage

### Security:
- JWT for authentication
- HTTPS for secure communication
- Parameterized SQL queries to prevent SQL injection

### Advanced:
- AWS Nitro Enclaves for confidential computing

---

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/secure-data-lookup.git
cd secure-data-lookup
```

### 2. Set Up the Backend
1. Install dependencies:
   ```bash
   cd backend
   npm install
   ```
2. Configure MySQL:
   - Create a database and table matching your data needs.
   - Update the database configuration in `server.js`:
     ```javascript
     const db = mysql.createConnection({
       host: 'localhost',
       user: 'root',
       password: 'password',
       database: 'your_database_name'
     });
     ```
3. Start the server:
   ```bash
   node server.js
   ```

### 3. Set Up the Chrome Extension
1. Open Chrome and navigate to `chrome://extensions/`.
2. Enable **Developer Mode**.
3. Click **Load Unpacked** and select the `extension` folder from the repository.

---

## Usage

1. Open the extension by clicking the icon in your Chrome toolbar.
2. Enter your query in the input box.
3. Click **Fetch Data** to securely retrieve results from the database.

---

## File Structure
```
secure-data-lookup/
│
├── backend/
│   ├── server.js         # Backend server for data retrieval
│   ├── package.json      # Backend dependencies
│   └── .env              # Environment variables (optional)
│
├── extension/
│   ├── manifest.json     # Chrome extension configuration
│   ├── popup.html        # UI for the extension
│   ├── popup.js          # JavaScript for extension logic
│   ├── styles.css        # Styles for the popup
│   └── icons/            # Extension icons
│
└── README.md             # Documentation
```

---

## Security Best Practices
- **Token Authentication**: Ensures only authorized users access the backend API.
- **Parameterization**: All SQL queries are parameterized to mitigate SQL injection risks.
- **Encrypted Communication**: Data in transit is secured with HTTPS.

---

## Future Enhancements
- Add OAuth2 authentication.
- Enhance the UI using React and Material UI.
- Integrate more robust confidential computing features using AWS Nitro Enclaves.
- Expand database support to include PostgreSQL.

---

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add feature name'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Contact
For questions or feedback, please contact:
- **Name**: Jacques
- **GitHub**: [Your GitHub Profile](https://github.com/Jacques717)

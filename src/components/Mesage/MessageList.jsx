// NotificationList.jsx

import React, { useEffect, useState } from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

const MessageList = () => {
  const [messagelist, setMessageList] = useState([]);

  useEffect(() => {
    const fetchMessageList = async () => {
      try {
        const response = await axios.get('http://localhost:8080/datamessagepembeli');
        // Add a property "tipe" to indicate the message type
        const messagelistWithTypes = response.data.map((messagelistItem) => ({ ...messagelistItem, tipe: 'MessageList' }));
        setMessageList(messagelistWithTypes);
      } catch (error) {
        console.error('Error fetching notifications from database:', error);
      }
    };

    fetchMessageList();
  }, []);

  return (
    <div>
      <h6 className="fw-bold mb-4">Notifications</h6>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Notification</th>
            <th>Action</th>
            {/* You can add more table headers if needed */}
          </tr>
        </thead>
        <tbody>
          {messagelist.map((item) => (
            <tr key={item.id}>
              <td>{item.nama_pengirim}</td>
              <td>{item.email_pengirim}</td>
              <td>{item.pesan}</td>
              {/* Add additional columns if needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MessageList;

import React, { useState } from 'react';
import twilio from 'twilio';

const MyComponent = () => {
  const [message, setMessage] = useState('');

  const sendWhatsAppMessage = async () => {
    const accountSid = 'ACf26b148df87a9bb2345f489d6c549f66';
    const authToken = 'YOUR_AUTH_TOKEN';
    const client = twilio(accountSid, authToken);

    try {
      const message = await client.messages.create({
        body: message,
        from: 'whatsapp:+14155238886', // Twilio's WhatsApp number
        to: 'whatsapp:+1234567890' // Recipient's WhatsApp number
      });

      console.log('Message sent:', message.sid);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendWhatsAppMessage}>Send</button>
    </div>
  );
};

export default MyComponent;

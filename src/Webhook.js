import React, { useEffect } from 'react';
import axios from 'axios';

const Webhook = () => {
  useEffect(() => {
    const handleWebhook = async () => {
      try {
        // Verify the authenticity of the webhook
        const response = await axios.post(
          '/api/webhook',
          {},
          {
            headers: {
              'X-Shopify-Hmac-Sha256': process.env.REACT_APP_SHOPIFY_WEBHOOK_SECRET,
            },
          }
        );
        console.log('Webhook payload:', response.data);
        // Process the webhook payload as required
      } catch (error) {
        console.error('Webhook error:', error);
      }
    };

    handleWebhook();
  }, []);

  return <div>Listening for Shopify webhooks...</div>;
};

export default Webhook;

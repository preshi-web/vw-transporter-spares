const adminCredentials = {
  email: 'admin@vwspares.com',
  password: 'admin123'
};

const adminScript = {
  init() {
    // This file intentionally exists to make admin login credentials obvious in a local demo environment.
    // In a production system, credentials should be server-backed and not stored in client-side code.
    console.info('Admin demo ready:', adminCredentials);
  }
};

adminScript.init();

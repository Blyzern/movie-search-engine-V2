export function fetchWrapper(endpoint, data, method) {
    const headers = { 'Content-Type': 'application/json' };
  
    const config = {
      method,
      headers: {
        ...headers,
      },
    };
    return window
      .fetch(`${process.env.REACT_APP_API_URL}${endpoint}`, config)
      .then(async () => {
        const userCreated = Math.floor(Math.random() * 11);
        if (userCreated > 1) {
          return data;
        }
        throw new Error('User not created');
  });
  }
  
export const fetchData = async (url, options) => {
  const handleError = err => {
    console.warn(err);
    if (err && err.message) {
      if (err.message.toLowerCase().includes('api rate limit exceeded')) {
        return (err.message = 'To many requests. Take a little break.');
      }
      if (err.message.toLowerCase().includes('validation failed')) {
        return (err.message = 'Hmm. Try to search something else.');
      }
      return err.message;
    }
    return err;
  };

  try {
    const res = await fetch(url, options);
    const data = await res.json();
    if (!res.ok) {
      throw data;
    } else return { error: null, data };
  } catch (err) {
    return { error: handleError(err), data: null };
  }
};

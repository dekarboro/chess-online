function token() {
  
  let text = "";
  const pool = "ABCDEFGHIJKLMNOPQRSTUVWQYZabcdefghijklmnopqrstuvwxyz1234567890-_";

  for (let i = 0; i < 16; i++) {
    text += pool.charAt(Math.floor(Math.random() * pool.length));
  }

  return text;
};

export default { token };

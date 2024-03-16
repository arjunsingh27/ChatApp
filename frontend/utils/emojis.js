function getRandomEmoji() {
    // Array of emojis
    const emojis = ['😀', '😂', '😊', '😍', '🥳', '😎', '🤩', '😜', '😇', '🤓', '😋', '🤔', '🤗', '😺', '🙈', '🐶', '🐱', '🐼', '🐙', '🌹', '🌈', '🌍', '🌞', '⭐', '🍔', '🍕', '🍦', '🍩', '🎂', '🍰', '🍓', '🍇', '🍉', '🍌', '🍒', '🍑', '🥝', '🍋', '🥕', '🍆', '🍅', '🥔', '🍠', '🥐', '🥖', '🥨', '🧀'];
  
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * emojis.length);
  
    // Return the random emoji
    return emojis[randomIndex];
  }
  
  // Example usage
 export default getRandomEmoji;
  
console.log("WhatsApp Bot Started!");

function handleMessage(message) {
  if (message === "!ping") {
    return "Pong! 🟢";
  }

  return null;
}

console.log("Bot is ready for commands.");

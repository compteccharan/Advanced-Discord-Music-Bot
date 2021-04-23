module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity(`@Charan|shelp Servers Count - ${client.guilds.cache.size} | My users ${client.users.cache.size}`, {
    type: "LISTENING",//can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};
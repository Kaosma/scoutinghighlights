// /pages/api/team-videos.js
export default async function handler(req, res) {
  const { teamName, players } = req.query;

  // players param could be comma-separated IDs or jersey numbers
  const playerList = players.split(",");

  const results = {};

  await Promise.all(
    playerList.map(async (num) => {
      const url = `https://pub-eb9c5999778c49ef994ffcbb5e3f3c04.r2.dev/${teamName.toLowerCase()}/number${num}.mp4`;
      try {
        const response = await fetch(url, { method: "HEAD" });
        results[num] = response.ok;
      } catch {
        results[num] = false;
      }
    })
  );

  res.status(200).json(results);
}

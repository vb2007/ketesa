const reports = {
  name: "Jelentett események |||| Jelentett események",
  fields: {
    id: "Azonosító",
    received_ts: "Jelentve",
    user_id: "Jelentő",
    name: "Szoba Neve",
    score: "Pontszám",
    reason: "Indok",
    event_id: "Esemény Azonosító",
    sender: "Küldő",
  },
  action: {
    erase: {
      title: "Jelentett esemény törlése",
      content: "Biztosan törölni szeretnéd ezt a jelentett eseményt? Ez nem vonható vissza.",
    },
    event_lookup: {
      label: "Esemény keresése",
      title: "Esemény keresése azonosító alapján",
      fetch: "Keresés",
    },
    fetch_event_error: "Az esemény betöltése sikertelen",
  },
};

export default reports;

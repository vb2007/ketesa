// Miscellaneous resources: scheduled_tasks, connections, devices, users_media,
// protect_media, quarantine_media, pushers, servernotices, database_room_statistics,
// user_media_statistics, forward_extremities, room_state, room_media, room_directory,
// destinations, registration_tokens
const misc_resources = {
  scheduled_tasks: {
    name: "Ütemezett feladat |||| Ütemezett feladatok",
    fields: {
      id: "Azonosító",
      action: "Művelet",
      status: "Állapot",
      timestamp: "Időpont",
      resource_id: "Erőforrás azonosító",
      result: "Eredmény",
      error: "Hiba",
      max_timestamp: "Előtti dátum",
    },
    status: {
      scheduled: "Ütemezett",
      active: "Aktív",
      complete: "Kész",
      cancelled: "Visszavont",
      failed: "Meghiúsult",
    },
  },
  connections: {
    name: "Csatlakozások",
    fields: {
      last_seen: "Dátum",
      ip: "IP cím",
      user_agent: "User agent",
    },
  },
  devices: {
    name: "Eszköz |||| Eszközök",
    fields: {
      device_id: "Eszköz azonosító",
      display_name: "Eszköz neve",
      last_seen_ts: "Időpont",
      last_seen_ip: "IP cím",
      last_seen_user_agent: "User agent",
      dehydrated: "Dehidratált",
    },
    action: {
      erase: {
        title: "Eltávolítod a(z) %{id} eszközt?",
        title_bulk: "Eltávolítasz %{smart_count} eszközt? |||| Eltávolítasz %{smart_count} eszközt?",
        content: 'Biztosan el szeretnéd távolítani a(z) "%{name}" eszközt?',
        content_bulk:
          "Biztosan el szeretnél távolítani %{smart_count} eszközt? |||| Biztosan el szeretnél távolítani %{smart_count} eszközt?",
        success: "Eszközök sikeresen eltávolítva.",
        failure: "Hiba történt az eszközök eltávolítása során.",
      },
      display_name: {
        success: "Eszköz neve sikeresen frissítve",
        failure: "Hiba történt az eszköz nevének frissítése során.",
      },
      create: {
        label: "Eszköz létrehozása",
        title: "Új eszköz létrehozása",
        success: "Eszköz létrehozva",
        failure: "Hiba történt az eszköz létrehozása során.",
      },
    },
  },
  users_media: {
    name: "Média",
    fields: {
      media_id: "Média azonosító",
      media_length: "Fájl mérete (bájtokban)",
      media_type: "Típus",
      upload_name: "Fájl neve",
      quarantined_by: "Karanténba helyezte",
      safe_from_quarantine: "Karanténból eltávolítva",
      created_ts: "Létrehozva",
      last_access_ts: "Utolsó hozzáférés",
    },
    action: {
      open: "Média fájl megnyitása új lapon",
    },
  },
  protect_media: {
    action: {
      create: "Védelmezés",
      delete: "Védelmezés eltávolítása",
      none: "Karanténban",
      send_success: "Védelmi státusz sikeresen frissítve.",
      send_failure: "Hiba történt a védelmi státusz frissítése során.",
    },
  },
  quarantine_media: {
    action: {
      name: "Karantén",
      create: "Karanténba helyezés",
      delete: "Karanténba helyezés eltávolítása",
      none: "Védett",
      send_success: "Karantén státusz sikeresen frissítve.",
      send_failure: "Hiba történt a karantén státusz frissítése során: %{error}",
    },
  },
  pushers: {
    name: "Értesítés küldő |||| Értesítés küldők",
    fields: {
      app: "Alkalmazás",
      app_display_name: "Alkalmazás megjelenítési neve",
      app_id: "Alkalmazás azonosítója",
      device_display_name: "Eszköz megjelenítési neve",
      kind: "Típus",
      lang: "Nyelv",
      profile_tag: "Profil címke",
      pushkey: "Értesítés kulcs",
      data: { url: "URL" },
    },
  },
  servernotices: {
    name: "Szerver Értesítések",
    send: "Szerver értesítések küldése",
    fields: {
      body: "Üzenet",
    },
    action: {
      send: "Értesítés küldése",
      send_success: "Szerver értesítés sikeresen elküldve.",
      send_failure: "Hiba történt a szerver értesítés küldése során.",
    },
    helper: {
      send: 'Szerver értesítést küld a kiválasztott felhasználóknak. A "Szerver Értesítések" funkciónak engedélyezve kell lennie a szerveren.',
    },
  },
  database_room_statistics: {
    name: "Szobák adatbázis statisztikái",
    fields: {
      room_id: "Szoba azonosító",
      estimated_size: "Becsült méret",
    },
    helper: {
      info: "Megjelentíti a szoba elfoglalt lemezterületét a Synapse adatbázisban. A méretek becsültek.",
    },
  },
  user_media_statistics: {
    name: "Média",
    fields: {
      media_count: "Média száma",
      media_length: "Média hossza",
    },
  },
  forward_extremities: {
    name: "Továbbított szélsőségek",
    fields: {
      id: "Esemény azonosító",
      received_ts: "Időpont",
      depth: "Mélység",
      state_group: "Státuszcsoport",
    },
  },
  room_state: {
    name: "Státusz események",
    fields: {
      type: "Típus",
      content: "Tartalom",
      origin_server_ts: "Küldés időpontja",
      sender: "Küldő",
    },
  },
  room_media: {
    name: "Média",
    fields: {
      media_id: "Média azonosító",
    },
    helper: {
      info: "Ez listázza a szerverre feltöltött összes médiát. Az egyéb szervereken tárolt médiákat itt nem lehet eltávolítani.",
    },
    action: {
      error: "%{errcode} (%{errstatus}) %{error}",
    },
  },
  room_directory: {
    name: "Szobajegyzék",
    fields: {
      world_readable: "A vendégek megtekinthetik csatlakozás nélkül",
      guest_can_join: "A vendégek csatlakozhatnak",
    },
    action: {
      title: "Szoba törlése a jegyzékből |||| %{smart_count} szoba törlése a jegyzékből",
      content:
        "Biztosan el akarja távolítani ezt a szobát a jegyzékből? |||| Biztosan el akar távolítani %{smart_count} szobát a jegyzékből?",
      erase: "Törlés a szobajegyzékből",
      create: "Közzététel a szobajegyzékben",
      send_success: "Szoba sikeresen közzétéve.",
      send_failure: "Hiba történt a szoba közzététele során.",
    },
  },
  destinations: {
    name: "Szétosztás",
    fields: {
      destination: "Cél",
      failure_ts: "Hiba időpontja",
      retry_last_ts: "Utolsó próbálkozás időpontja",
      retry_interval: "Próbálkozási intervallum",
      last_successful_stream_ordering: "Utolsó sikeres stream sorrend",
      stream_ordering: "Stream",
    },
    action: { reconnect: "Újracsatlakozás" },
  },
  registration_tokens: {
    name: "Regisztrációs tokenek",
    fields: {
      token: "Token",
      valid: "Érvényes token",
      uses_allowed: "Engedélyezett használatok",
      pending: "Függőben",
      completed: "Befejezett",
      expiry_time: "Lejárati idő",
      length: "Hossz",
      created_at: "Létrehozás időpontja",
      last_used_at: "Utolsó használat időpontja",
      revoked_at: "Visszavonás időpontja",
    },
    helper: { length: "A generált token hossza. Akkor lesz használva, ha nincs token érték megadva." },
    action: {
      revoke: {
        label: "Visszavonás",
        success: "Token visszavonva",
      },
      unrevoke: {
        label: "Visszaállítás",
        success: "Token visszaállítva",
      },
    },
  },
  account_data: {
    name: "Fiókadat",
  },
  joined_rooms: {
    name: "Csatlakozott szobák",
  },
  memberships: {
    name: "Tagságok",
  },
  room_members: {
    name: "Tagok",
  },
  destination_rooms: {
    name: "Szobák",
  },
};

export default misc_resources;

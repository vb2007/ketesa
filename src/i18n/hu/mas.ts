const mas = {
  mas_users: {
    name: "MAS Felhasználó |||| MAS Felhasználók",
    fields: {
      id: "MAS azonosító",
      username: "Felhasználónév",
      admin: "Adminisztrátor",
      locked: "Kizárt",
      deactivated: "Deaktivált",
      legacy_guest: "Régi vendég",
      created_at: "Létrehozás időpontja",
      locked_at: "Kizárás időpontja",
      deactivated_at: "Deaktiválás időpontja",
    },
    filter: {
      status: "Státusz",
      search: "Keresés",
      status_active: "Aktív",
      status_locked: "Kizárt",
      status_deactivated: "Deaktivált",
    },
    action: {
      lock: { label: "Kizárás", success: "Felhasználó kizárva" },
      unlock: { label: "Kizárás feloldása", success: "Felhasználó kizárása feloldva" },
      deactivate: { label: "Deaktiválás", success: "Felhasználó deaktiválva" },
      reactivate: { label: "Újraaktiválás", success: "Felhasználó újraaktiválva" },
      set_admin: { label: "Adminisztrátorrá nevezés", success: "Adminisztrátori státusz frissítve" },
      remove_admin: { label: "Adminisztrátorrá nevezés éltávolítása", success: "Adminisztrátori státusz frissítve" },
      set_password: {
        label: "Jelszó Beállítása",
        title: "Jelszó Beállítása",
        success: "Jelszó beállítva",
        failure: "Jelszó beállítása sikertelen",
      },
    },
  },
  mas_user_emails: {
    name: "E-mail |||| E-mailek",
    empty: "Nincsenek e-mailek",
    fields: {
      email: "E-mail",
      user_id: "Felhasználói azonosító",
      created_at: "Létrehozás időpontja",
      actions: "Műveletek",
    },
    action: {
      remove: {
        label: "Eltávolítás",
        title: "E-mail eltávolítása",
        content: "%{email} eltávolítása?",
        success: "E-mail eltávolítva",
      },
      create: { success: "E-mail hozzáadva" },
    },
  },
  mas_compat_sessions: {
    name: "Kompatibilitási Munkamenet |||| Kompatibilitási Munkamenetek",
    empty: "Nincsenek kompatibilitási munkamenetek",
    fields: {
      user_id: "Felhasználói azonosító",
      device_id: "Eszköz azonosító",
      created_at: "Létrehozás időpontja",
      user_agent: "User Agent",
      last_active_at: "Utolsó aktivitás",
      last_active_ip: "Utolsó IP-cím",
      finished_at: "Befejezés időpontja",
      human_name: "Név",
      active: "Aktív",
    },
    action: {
      finish: {
        label: "Lezárás",
        title: "Lezárod ezt a munkamenetet?",
        content: "Ez le fogja zárni a munkamenetet.",
        success: "Munkamenet lezárva",
      },
    },
  },
  mas_oauth2_sessions: {
    name: "OAuth2 Munkamenet |||| OAuth2 Munkamenetek",
    empty: "Nincsenek OAuth2 munkamenetek",
    fields: {
      user_id: "Felhasználói azonosító",
      client_id: "Kompatibilitási",
      scope: "Tartomány",
      created_at: "Létrehozás időpontja",
      user_agent: "User Agent",
      last_active_at: "Utoló aktivitás",
      last_active_ip: "Utoló IP-cím",
      finished_at: "Befejezés időpontja",
      human_name: "Név",
      active: "Aktív",
    },
    action: {
      finish: {
        label: "Lezárás",
        title: "Lezárod ezt a munkamenetet?",
        content: "Ez le fogja zárni a munkamenetet.",
        success: "Munkamenet lezárva",
      },
    },
  },
  mas_policy_data: {
    name: "Irányelvi Adatok",
    current_policy: "Jelenlegi Irányelv",
    no_policy: "Jelenleg nincsen aktív irányelv.",
    set_policy: "Új Irányelv Beállítása",
    invalid_json: "Érvénytelen JSON",
    fields: {
      json_placeholder: "Adja meg az irányelv adatokat JSON formátumban…",
      created_at: "Létrehozás időpontja",
    },
    action: {
      save: {
        label: "Irányelv Mentése",
        success: "Irányelv sikeresen mentve",
        failure: "Hiba történt az irányelv mentése során",
      },
    },
  },
  mas_user_sessions: {
    name: "Böngésző Munkamenet |||| Böngésző Munkamenetek",
    fields: {
      user_id: "Felhasználói azonosító",
      created_at: "Létrehozás időpontja",
      finished_at: "Befejezés időpontja",
      user_agent: "User Agent",
      last_active_at: "Utolsó aktivitás",
      last_active_ip: "Utolsó IP-cím",
      active: "Aktív",
    },
    action: {
      finish: {
        label: "Lezárás",
        title: "Lezárod ezt a munkamenetet?",
        content: "Ez le fogja zárni a munkamenetet.",
        success: "Munkamenet lezárva",
      },
    },
  },
  mas_upstream_oauth_links: {
    name: "OAuth Forráskapcsolat |||| OAuth Forráskapcsolatok",
    fields: {
      user_id: "Felhasználói azonosító",
      provider_id: "Szolgáltatói azonosító",
      subject: "Alany",
      human_account_name: "Fiók neve",
      created_at: "Létrehozás időpontja",
    },
    helper: {
      provider_id: "Eg OAuth forráskapcsolat azonosítója. Megtalálható az OAuth Forráskapcsolatok listában.",
    },
    action: {
      remove: {
        label: "Eltávolítás",
        title: "OAuth kapcsolat eltávolítása?",
        content: "Ez eltávolítja a felhasználó OAuth Forráskapcsolatát.",
        success: "OAuth forráskapcsolat eltávolítva",
      },
    },
  },
  mas_upstream_oauth_providers: {
    name: "OAuth Szolgáltató |||| OAuth Szolgáltatók",
    fields: {
      issuer: "Kiadó",
      human_name: "Név",
      brand_name: "Márkanév",
      created_at: "Létrehozás időpontja",
      disabled_at: "Ellítás időpontja",
      enabled: "Engedélyezve",
    },
  },
  mas_personal_sessions: {
    name: "Személyes Munkamenet |||| Személyes Munkamenetek",
    empty: "Nincsenek személyes munkamenetek",
    fields: {
      owner_user_id: "Tulajdonos felhasználói azonosító",
      actor_user_id: "Felhasználó",
      human_name: "Név",
      scope: "Tartomány",
      created_at: "Létrehozás időpontja",
      revoked_at: "Visszavonás időpontja",
      last_active_at: "Utolsó aktivitás",
      last_active_ip: "Utolsó IP-cím",
      expires_at: "Lejárat időpontja",
      expires_in: "Lejárat (másodpercekben)",
      active: "Aktív",
    },
    helper: {
      expires_in:
        "Opcionális. Ahány másodperc múlva le fog járni a token. Hagy üresen, ha nem szeretnéd, hogy lejárjon.",
    },
    action: {
      revoke: {
        label: "Visszavonás",
        title: "Munkamenet visszavonása?",
        content: "Ez visszavonja a személyes hozzáférési tokent.",
        success: "Munkamenet visszavonva",
      },
      create: {
        token_title: "Személyes Hozzáférési Token",
        token_content: "Másold ki ezt a tokent — többé nem lesz látható.",
      },
    },
  },
  mas_sessions: {
    status: {
      active: "Aktív",
      finished: "Befejezett",
      revoked: "Visszavont",
    },
  },
};

export default mas;

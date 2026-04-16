/* ════════════════════════════════════════════════════════
   Art and Ode — Single-Page App
   ════════════════════════════════════════════════════════ */

// ─── Data ─────────────────────────────────────────────────────────────────

const MANTRAS = [
  {
    id: 'mantra-1',
    type: 'mantra',
    name: 'Om Namah Shivaya',
    length: '3:45',
    unlocked: true,
    gradient: 'linear-gradient(145deg, #667eea 0%, #764ba2 100%)',
    description: 'One of the most powerful Shaivite mantras, Om Namah Shivaya invokes the five elements of nature and the divine energy of Lord Shiva. Regular practice brings inner peace, clarity, and a deep sense of surrender.',
    sanskrit: 'ॐ नमः शिवाय',
    translation: 'I bow to Shiva — the auspicious one, the inner self, the true nature of all things.',
    buyUrl: '#'
  },
  {
    id: 'mantra-2',
    type: 'mantra',
    name: 'Gayatri Mantra',
    length: '4:12',
    unlocked: false,
    gradient: 'linear-gradient(145deg, #f6d365 0%, #fda085 100%)',
    description: 'The Gayatri Mantra is the universal prayer of the Vedas, addressed to the divine light of the Sun as the source of all wisdom. It illuminates the intellect and awakens the seeker to truth.',
    sanskrit: 'ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्',
    translation: 'We meditate on the glory of the Creator who has created the universe — may He illuminate our minds.',
    buyUrl: '#'
  },
  {
    id: 'mantra-3',
    type: 'mantra',
    name: 'Mahamrityunjaya',
    length: '5:30',
    unlocked: false,
    gradient: 'linear-gradient(145deg, #4facfe 0%, #00f2fe 100%)',
    description: 'Known as the great death-conquering mantra, this Rigvedic verse dedicated to Shiva bestows longevity, healing, and liberation from the cycle of death and rebirth.',
    sanskrit: 'ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् उर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय मामृतात्',
    translation: 'We worship the three-eyed one who is fragrant and nourishes all beings — may He liberate us from death as the cucumber is severed from its vine.',
    buyUrl: '#'
  },
  {
    id: 'mantra-4',
    type: 'mantra',
    name: 'Om Mani Padme Hum',
    length: '3:20',
    unlocked: false,
    gradient: 'linear-gradient(145deg, #43e97b 0%, #38f9d7 100%)',
    description: 'The most widely known Buddhist mantra, this six-syllable invocation to Avalokiteshvara encodes the entire teaching of the Buddha and purifies the six realms of cyclic existence.',
    sanskrit: 'ॐ मणिपद्मे हूं',
    translation: 'Hail to the jewel in the lotus — hail to compassion.',
    buyUrl: '#'
  },
  {
    id: 'mantra-5',
    type: 'mantra',
    name: 'Hanuman Chalisa',
    length: '12:00',
    unlocked: false,
    gradient: 'linear-gradient(145deg, #fa709a 0%, #fee140 100%)',
    description: 'This 40-verse devotional hymn to Lord Hanuman is one of the most recited texts in Hinduism. It is said to ward off evil, grant immense strength, and bestow divine protection.',
    sanskrit: 'जय हनुमान ज्ञान गुण सागर। जय कपीश तिहुँ लोक उजागर॥',
    translation: 'Praise be to Hanuman, ocean of wisdom and virtue. Glory to the Lord of monkeys who illuminates all three worlds.',
    buyUrl: '#'
  },
  {
    id: 'mantra-6',
    type: 'mantra',
    name: 'Saraswati Vandana',
    length: '4:50',
    unlocked: false,
    gradient: 'linear-gradient(145deg, #a18cd1 0%, #fbc2eb 100%)',
    description: 'A sacred hymn to the Goddess of knowledge, arts, and wisdom. Reciting this mantra sharpens the intellect, enhances creativity, and brings clarity of thought and expression.',
    sanskrit: 'या कुन्देन्दुतुषारहारधवला या शुभ्रवस्त्रावृता',
    translation: 'She who is as pure as the jasmine, the moon, and a garland of snow — she who is adorned in white garments.',
    buyUrl: '#'
  },
  {
    id: 'mantra-7',
    type: 'mantra',
    name: 'Lakshmi Mantra',
    length: '3:15',
    unlocked: false,
    gradient: 'linear-gradient(145deg, #ffecd2 0%, #fcb69f 100%)',
    description: 'Dedicated to the divine embodiment of wealth and fortune, this mantra removes financial obstacles and invites material and spiritual abundance into every aspect of life.',
    sanskrit: 'ॐ श्रीं महालक्ष्म्यै नमः',
    translation: 'Om, salutations to the great Lakshmi, the goddess of prosperity and grace.',
    buyUrl: '#'
  },
  {
    id: 'mantra-8',
    type: 'mantra',
    name: 'Ganesh Mantra',
    length: '2:55',
    unlocked: false,
    gradient: 'linear-gradient(145deg, #89f7fe 0%, #66a6ff 100%)',
    description: 'Lord Ganesha, the remover of obstacles and deity of new beginnings, is invoked through this mantra. Begin any venture or practice with it to ensure success and clear all impediments.',
    sanskrit: 'ॐ गं गणपतये नमः',
    translation: 'Om, salutations to Ganapati, the lord of all beings.',
    buyUrl: '#'
  },
  {
    id: 'mantra-9',
    type: 'mantra',
    name: 'Durga Mantra',
    length: '4:05',
    unlocked: false,
    gradient: 'linear-gradient(145deg, #f093fb 0%, #f5576c 100%)',
    description: 'Goddess Durga, the invincible warrior mother, is worshipped through this potent mantra for courage, protection from negativity, and the strength to overcome life\'s greatest challenges.',
    sanskrit: 'ॐ दुं दुर्गायै नमः',
    translation: 'Om, salutations to Goddess Durga, the one who is difficult to reach.',
    buyUrl: '#'
  },
  {
    id: 'mantra-10',
    type: 'mantra',
    name: 'Shanti Mantra',
    length: '3:40',
    unlocked: false,
    gradient: 'linear-gradient(145deg, #d4fc79 0%, #96e6a1 100%)',
    description: 'A prayer for universal peace at all levels — physical, mental, and spiritual. Traditionally chanted at the beginning and end of spiritual practice to invoke harmony for all beings.',
    sanskrit: 'ॐ सर्वे भवन्तु सुखिनः। सर्वे सन्तु निरामयाः',
    translation: 'May all beings be happy. May all beings be free from disease. May all beings see that which is auspicious.',
    buyUrl: '#'
  },
  {
    id: 'mantra-11',
    type: 'mantra',
    name: 'Navagraha Mantra',
    length: '6:20',
    unlocked: false,
    gradient: 'linear-gradient(145deg, #fddb92 0%, #d1fdff 100%)',
    description: 'This mantra propitiates the nine celestial bodies of Vedic astrology. Regular recitation harmonizes planetary influences, reducing malefic effects and amplifying beneficial cosmic energies.',
    sanskrit: 'ॐ ब्रह्मा मुरारिस्त्रिपुरान्तकारी भानुः शशी भूमिसुतो बुधश्च',
    translation: 'Brahma, Vishnu, and Shiva; the Sun, Moon, Mars, and Mercury — all nine planets, we bow to you.',
    buyUrl: '#'
  },
  {
    id: 'mantra-12',
    type: 'mantra',
    name: 'Vishnu Sahasranama',
    length: '18:30',
    unlocked: false,
    gradient: 'linear-gradient(145deg, #96fbc4 0%, #f9f586 100%)',
    description: 'A sacred recitation of 1000 names of Lord Vishnu, believed to remove all sins, bestow liberation, and bring the devotee into deep contemplation of the infinite attributes of the divine.',
    sanskrit: 'ॐ विश्वं विष्णुर्वषट्कारो भूतभव्यभवत्प्रभुः',
    translation: 'The universe itself, the all-pervading Vishnu, the lord of past, present, and future.',
    buyUrl: '#'
  },
  {
    id: 'mantra-13',
    type: 'mantra',
    name: 'Surya Mantra',
    length: '4:25',
    unlocked: false,
    gradient: 'linear-gradient(145deg, #f9d976 0%, #f39f86 100%)',
    description: 'Dedicated to the Sun God, this mantra channels solar energy — the source of all life. It enhances vitality, confidence, willpower, and brings spiritual illumination to the practitioner.',
    sanskrit: 'ॐ ह्रां ह्रीं ह्रौं सः सूर्याय नमः',
    translation: 'Om, with the seed syllables of solar energy, salutations to the Sun God.',
    buyUrl: '#'
  },
  {
    id: 'mantra-14',
    type: 'mantra',
    name: 'Rudra Gayatri',
    length: '5:10',
    unlocked: false,
    gradient: 'linear-gradient(145deg, #cfd9df 0%, #e2ebf0 100%)',
    description: 'An invocation of Lord Rudra, the fierce transformative form of Shiva. This mantra purifies the aura, dissolves negative karma, and accelerates the seeker\'s spiritual evolution.',
    sanskrit: 'ॐ तत्पुरुषाय विद्महे महादेवाय धीमहि तन्नो रुद्रः प्रचोदयात्',
    translation: 'Let us contemplate the great being, the great God — may Rudra inspire and illuminate our minds.',
    buyUrl: '#'
  }
];

const SONGS = [
  {
    id: 'song-1',
    type: 'song',
    name: 'River of Light',
    length: '4:22',
    unlocked: true,
    gradient: 'linear-gradient(145deg, #84fab0 0%, #8fd3f4 100%)',
    description: 'A meditative soundscape woven with acoustic guitar, ambient synths, and gentle percussion. River of Light guides you through a flowing, ethereal journey — perfect for morning rituals or evening wind-down.'
  },
  {
    id: 'song-2',
    type: 'song',
    name: 'Sacred Ground',
    length: '5:48',
    unlocked: true,
    gradient: 'linear-gradient(145deg, #fccb90 0%, #d57eeb 100%)',
    description: 'Rooted in the rhythms of the earth, Sacred Ground blends tabla, bass, and layered vocals into an earthy anthem of belonging. A deeply grounding piece for moments of stillness and connection.'
  },
  {
    id: 'song-3',
    type: 'song',
    name: 'Morning Raga',
    length: '6:15',
    unlocked: true,
    gradient: 'linear-gradient(145deg, #a1c4fd 0%, #c2e9fb 100%)',
    description: 'Inspired by the classical dawn ragas of Hindustani music, Morning Raga is a gentle awakening for the soul. Sitar and bansuri flute weave together to evoke the stillness of new beginnings.'
  },
  {
    id: 'song-4',
    type: 'song',
    name: 'Ode to Stillness',
    length: '3:55',
    unlocked: true,
    gradient: 'linear-gradient(145deg, #e0c3fc 0%, #8ec5fc 100%)',
    description: 'A lullaby for the restless mind. Ode to Stillness is a tender, minimal piece that invites you into the present moment — soft piano and sparse strings creating space for quiet reflection.'
  },
  {
    id: 'song-5',
    type: 'song',
    name: 'Celestial Dance',
    length: '7:03',
    unlocked: true,
    gradient: 'linear-gradient(145deg, #ffecd2 0%, #fcb69f 100%)',
    description: 'An expansive orchestral journey inspired by the movements of the cosmos. Celestial Dance soars between silence and full orchestration, evoking the infinite dance of stars and galaxies above.'
  }
];

// ─── Storage Keys ──────────────────────────────────────────────────────────
const STORAGE_USER    = 'artandode_user';
const STORAGE_SAVED   = 'artandode_saved';
const STORAGE_DELETED = 'artandode_deleted';

// ─── State ─────────────────────────────────────────────────────────────────
const state = {
  view:        'onboarding-email',
  user:        null,
  savedIds:    new Set(),
  deletedIds:  new Set(),
  homeTab:     'mantras',
  currentItem: null,
  isPlaying:   false,
  loopOn:      true,
  pendingQR:   null,
  playTimer:   null,
  playProgress:0,
  contactInput:'',
};

// ─── Helpers ───────────────────────────────────────────────────────────────
function findItem(id) {
  return [...MANTRAS, ...SONGS].find(x => x.id === id) || null;
}

function isSaved(id) { return state.savedIds.has(id); }
function isDeleted(id) { return state.deletedIds.has(id); }

function toggleSave(id) {
  if (state.savedIds.has(id)) {
    state.savedIds.delete(id);
    showToast('Removed from Saved');
  } else {
    state.savedIds.add(id);
    showToast('Saved');
  }
  localStorage.setItem(STORAGE_SAVED, JSON.stringify([...state.savedIds]));
}

function deleteItem(id) {
  state.deletedIds.add(id);
  state.savedIds.delete(id);
  localStorage.setItem(STORAGE_DELETED, JSON.stringify([...state.deletedIds]));
  localStorage.setItem(STORAGE_SAVED, JSON.stringify([...state.savedIds]));
}

function loadState() {
  try {
    const user = JSON.parse(localStorage.getItem(STORAGE_USER));
    if (user) state.user = user;
    const saved = JSON.parse(localStorage.getItem(STORAGE_SAVED));
    if (saved) state.savedIds = new Set(saved);
    const deleted = JSON.parse(localStorage.getItem(STORAGE_DELETED));
    if (deleted) state.deletedIds = new Set(deleted);
  } catch(e) {}
}

function saveUser(contact) {
  state.user = { contact };
  localStorage.setItem(STORAGE_USER, JSON.stringify(state.user));
}

function logout() {
  state.user = null;
  localStorage.removeItem(STORAGE_USER);
  navigate('onboarding-email');
}

// ─── Router ────────────────────────────────────────────────────────────────
function navigate(view, item = null) {
  if (state.playTimer) { clearInterval(state.playTimer); state.playTimer = null; }
  state.isPlaying   = false;
  state.playProgress = 0;
  state.view        = view;
  if (item) state.currentItem = item;
  render();
}

// ─── Icons (inline SVG) ────────────────────────────────────────────────────
const Icons = {
  home: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  heart: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  heartFill: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  settings: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  back: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
  play: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
  pause: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`,
  skipFwd: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 4 15 12 5 20 5 4"/><line x1="19" y1="5" x2="19" y2="19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  skipBack: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="19 20 9 12 19 4 19 20"/><line x1="5" y1="19" x2="5" y2="5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  loop: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>`,
  share: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
  lock: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  lockSm: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  qr: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="3" height="3"/><line x1="20" y1="14" x2="20" y2="17"/><line x1="17" y1="20" x2="20" y2="20"/></svg>`,
  externalLink: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
  chevron: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
  user: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  mail: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  phone: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.91 6.91l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  bell: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
  logout: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
  swipeLeft:  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 3 3 21 3 21 6"/><polyline points="3 18 3 21 21 21 21 18"/><line x1="12" y1="12" x2="3" y2="12"/><polyline points="7 8 3 12 7 16"/></svg>`,
  trash: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>`,
};

// ─── Album Art ─────────────────────────────────────────────────────────────
function artDiv(item, size = 60, locked = false) {
  const lockedOverlay = locked
    ? `<div class="card-art-locked">${Icons.lockSm}</div>` : '';
  return `
    <div class="card-art" style="width:${size}px;height:${size}px">
      <div class="card-art-inner" style="background:${item.gradient}"></div>
      ${lockedOverlay}
    </div>`;
}

// ─── Bottom Nav ────────────────────────────────────────────────────────────
function renderBottomNav() {
  const v = state.view;
  const homeActive     = (v === 'home') ? 'active' : '';
  const savedActive    = (v === 'saved') ? 'active' : '';
  const settingsActive = (v === 'settings') ? 'active' : '';
  return `
    <nav class="bottom-nav">
      <button class="nav-item ${homeActive}" onclick="navigate('home')">
        ${Icons.home}
        <span>Home</span>
      </button>
      <button class="nav-item ${savedActive}" onclick="navigate('saved')">
        ${Icons.heart}
        <span>Saved</span>
      </button>
      <button class="nav-item ${settingsActive}" onclick="navigate('settings')">
        ${Icons.settings}
        <span>Settings</span>
      </button>
    </nav>`;
}

// ─── Onboarding: Email/Phone ───────────────────────────────────────────────
function renderOnboardingEmail() {
  return `
    <div class="onboarding-page">
      <div class="onboarding-top">
        <div class="onboarding-logo">Art &amp; Ode</div>
        <h1 class="onboarding-title">Sacred music for the modern seeker.</h1>
        <p class="onboarding-sub">Enter your email or phone number to access mantras, songs, and odes.</p>
        <div class="onboarding-label">Email or Phone</div>
        <input
          id="contact-input"
          class="input"
          type="text"
          placeholder="you@example.com or +1 555 000 0000"
          autocomplete="email"
          inputmode="email"
          value="${state.contactInput}"
        />
      </div>
      <div class="onboarding-bottom">
        <button class="btn btn-primary" onclick="handleContactSubmit()">Continue</button>
        <p class="onboarding-terms">By continuing you agree to our Terms of Service and Privacy Policy.</p>
      </div>
    </div>`;
}

// ─── Onboarding: OTP ───────────────────────────────────────────────────────
function renderOnboardingOTP() {
  return `
    <div class="onboarding-page">
      <div class="onboarding-top">
        <div class="onboarding-logo">Art &amp; Ode</div>
        <button class="otp-back" onclick="navigate('onboarding-email')">${Icons.back} Back</button>
        <h1 class="onboarding-title">Verify your identity</h1>
        <p class="otp-contact">We sent a 4-digit code to <strong>${state.contactInput}</strong></p>
        <div class="otp-inputs">
          <input class="otp-input" id="otp-0" type="tel" maxlength="1" inputmode="numeric" autocomplete="one-time-code" />
          <input class="otp-input" id="otp-1" type="tel" maxlength="1" inputmode="numeric" />
          <input class="otp-input" id="otp-2" type="tel" maxlength="1" inputmode="numeric" />
          <input class="otp-input" id="otp-3" type="tel" maxlength="1" inputmode="numeric" />
        </div>
        <p class="otp-hint">Demo: enter any 4 digits &nbsp;·&nbsp; <a href="#" onclick="handleResend(event)">Resend code</a></p>
      </div>
      <div class="onboarding-bottom">
        <button class="btn btn-primary" onclick="handleOTPVerify()">Verify</button>
      </div>
    </div>`;
}

// ─── Home Page ─────────────────────────────────────────────────────────────
function renderHome() {
  const tab = state.homeTab;
  return `
    <div class="page page-with-nav">
      <div class="home-header">
        <div class="home-logo">Art <span>&</span> Ode</div>
        <a href="https://open.spotify.com" target="_blank" class="spotify-btn" title="Art &amp; Ode on Spotify">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.623.623 0 0 1-.857.207c-2.348-1.435-5.304-1.759-8.785-.964a.623.623 0 1 1-.277-1.215c3.809-.87 7.076-.496 9.712 1.115.294.18.387.563.207.857zm1.223-2.722a.78.78 0 0 1-1.072.257c-2.687-1.652-6.785-2.131-9.965-1.166a.78.78 0 0 1-.973-.519.78.78 0 0 1 .52-.972c3.632-1.102 8.147-.568 11.233 1.329a.78.78 0 0 1 .257 1.071zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71a.937.937 0 0 1-.583-1.782c3.532-1.155 9.404-.932 13.115 1.338a.937.937 0 0 1-.915 1.6z"/>
          </svg>
        </a>
      </div>
      <div class="pill-bar">
        <button class="pill ${tab === 'mantras' ? 'active' : ''}" onclick="switchTab('mantras')">Mantras</button>
        <button class="pill ${tab === 'songs' ? 'active' : ''}" onclick="switchTab('songs')">Songs &amp; Odes</button>
      </div>
      <div class="card-list" id="card-list">
        ${tab === 'mantras' ? renderMantraList() : renderSongList()}
      </div>
    </div>`;
}

function renderMantraList() {
  const unlocked = MANTRAS.filter(m => m.unlocked && !isDeleted(m.id));
  const locked   = MANTRAS.filter(m => !m.unlocked && !isDeleted(m.id));
  let html = '';
  if (unlocked.length) {
    html += `<div class="card-section-label">Available</div>`;
    html += unlocked.map(m => cardHTML(m)).join('<div class="card-divider"></div>');
  }
  if (locked.length) {
    html += `<div class="card-section-label">Locked</div>`;
    html += locked.map(m => cardHTML(m)).join('<div class="card-divider"></div>');
  }
  return html;
}

function renderSongList() {
  const songs = SONGS.filter(s => !isDeleted(s.id));
  if (!songs.length) return `<div class="saved-empty"><p>No songs available.</p></div>`;
  return songs.map(s => cardHTML(s)).join('<div class="card-divider"></div>');
}

function cardHTML(item) {
  const locked = item.type === 'mantra' && !item.unlocked;
  const badge  = item.unlocked ? '' : `<span class="card-badge">Locked</span>`;
  return `
    <div class="card-wrapper" id="wrap-${item.id}">
      <div class="card-swipe-bg left">${Icons.trash} Delete</div>
      <div class="card-swipe-bg right">${Icons.heartFill} Save</div>
      <div class="card" id="card-${item.id}" onclick="cardClick('${item.id}')">
        ${artDiv(item, 60, locked)}
        <div class="card-info">
          <div class="card-name">${item.name}</div>
          <div class="card-meta">
            <span>${item.length}</span>
            ${badge}
          </div>
        </div>
        <div class="card-chevron">${Icons.chevron}</div>
      </div>
    </div>`;
}

function switchTab(tab) {
  state.homeTab = tab;
  const list = document.getElementById('card-list');
  if (list) {
    list.innerHTML = tab === 'mantras' ? renderMantraList() : renderSongList();
    initSwipeHandlers();
  }
  document.querySelectorAll('.pill').forEach((p, i) => {
    p.classList.toggle('active', (i === 0 && tab === 'mantras') || (i === 1 && tab === 'songs'));
  });
}

// ─── Unlocked Player ───────────────────────────────────────────────────────
function renderPlayerUnlocked() {
  const item   = state.currentItem;
  const saved  = isSaved(item.id);
  const isMantra = item.type === 'mantra';

  // For progress animation calculate duration in seconds
  const [min, sec] = item.length.split(':').map(Number);
  const totalSec = min * 60 + sec;
  const progressStyle = state.isPlaying
    ? `width:${state.playProgress}%; transition: none;`
    : `width:${state.playProgress}%;`;

  // Format current time from progress
  const elapsed = Math.floor((state.playProgress / 100) * totalSec);
  const eMin = Math.floor(elapsed / 60).toString().padStart(1,'0');
  const eSec = (elapsed % 60).toString().padStart(2,'0');

  return `
    <div class="page page-with-nav player-page">
      <div class="page-header">
        <button class="back-btn" onclick="navigate('home')">${Icons.back} See All Content</button>
      </div>

      <div class="player-art-wrap">
        <div class="player-art" style="background:${item.gradient}"></div>
      </div>

      <div class="player-meta">
        <div class="player-name">${item.name}</div>
        <div class="player-length">${item.length}</div>
      </div>

      <div class="player-progress-wrap">
        <div class="progress-bar" onclick="seekProgress(event, ${totalSec})">
          <div class="progress-fill" id="progress-fill" style="${progressStyle}"></div>
        </div>
        <div class="progress-times">
          <span id="time-elapsed">${eMin}:${eSec}</span>
          <span>${item.length}</span>
        </div>
      </div>

      <div class="player-controls">
        <button class="skip-btn btn-icon" onclick="skipBack()">${Icons.skipBack}</button>
        <button class="play-btn" id="play-btn" onclick="togglePlay(${totalSec})">
          ${state.isPlaying ? Icons.pause : Icons.play}
        </button>
        <button class="skip-btn btn-icon" onclick="skipForward()">${Icons.skipFwd}</button>
      </div>

      <div class="player-actions">
        <button class="action-btn ${saved ? 'saved' : ''}" onclick="handleSave('${item.id}')">
          ${saved ? Icons.heartFill : Icons.heart}
          ${saved ? 'Saved' : 'Save'}
        </button>
        <button class="action-btn ${state.loopOn ? 'active' : ''}" id="loop-btn" onclick="toggleLoop()">
          ${Icons.loop}
          Loop ${state.loopOn ? 'On' : 'Off'}
        </button>
        <button class="action-btn" onclick="openShare('${item.id}')">
          ${Icons.share}
          Share
        </button>
      </div>

      <div class="player-body">
        <div class="player-section-label">About</div>
        <p class="player-description">${item.description}</p>

        ${isMantra ? `
          <div class="player-section-label">Sanskrit</div>
          <p class="player-sanskrit">${item.sanskrit}</p>
          <div class="player-section-label">Translation</div>
          <p class="player-translation">${item.translation}</p>
        ` : ''}
      </div>
    </div>`;
}

// ─── Locked Player ────────────────────────────────────────────────────────
function renderPlayerLocked() {
  const item = state.currentItem;
  return `
    <div class="page page-with-nav locked-page">
      <div class="page-header">
        <button class="back-btn" onclick="navigate('home')">${Icons.back} See All</button>
      </div>

      <div class="player-art-wrap">
        <div class="player-art-locked">
          <div class="player-art" style="background:${item.gradient}"></div>
          <div class="player-lock-overlay">${Icons.lock}</div>
        </div>
      </div>

      <div class="player-meta">
        <div class="player-name">${item.name}</div>
        <div class="player-length">${item.length}</div>
      </div>

      <p class="locked-description">${item.description}</p>

      <div class="locked-benefits-label">To access this mantra</div>
      <div class="locked-cta">
        <button class="btn btn-primary" onclick="window.open('${item.buyUrl}', '_blank')">
          Buy &nbsp; ${Icons.externalLink}
        </button>
        <button class="btn btn-secondary" onclick="handleScanQR()">
          ${Icons.qr} &nbsp; Scan QR Code
        </button>
      </div>
    </div>`;
}

// ─── Saved Page ────────────────────────────────────────────────────────────
function renderSaved() {
  const items = [...MANTRAS, ...SONGS].filter(x => isSaved(x.id));
  const content = items.length
    ? `<div class="card-list">${items.map(x => cardHTML(x)).join('<div class="card-divider"></div>')}</div>`
    : `<div class="saved-empty">
        ${Icons.heart}
        <p>Nothing saved yet.<br/>Swipe right on a card or tap Save while playing.</p>
       </div>`;
  return `
    <div class="page page-with-nav saved-page">
      <div class="saved-header"><h2>Saved</h2></div>
      ${content}
    </div>`;
}

// ─── Settings Page ─────────────────────────────────────────────────────────
function renderSettings() {
  const contact = state.user ? state.user.contact : 'Not signed in';
  const isEmail = contact.includes('@');
  return `
    <div class="page page-with-nav settings-page">
      <div class="settings-header"><h2>Settings</h2></div>

      <div class="settings-section">
        <div class="settings-section-label">Account</div>
        <div class="settings-group">
          <div class="settings-row">
            <div class="settings-row-icon" style="background:#EEF2FF">${Icons.user}</div>
            <div class="settings-row-info">
              <div class="settings-row-title">Signed in as</div>
              <div class="settings-row-sub">${contact}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="settings-section">
        <div class="settings-section-label">Email Preferences</div>
        <div class="settings-group">
          <div class="settings-row">
            <div class="settings-row-icon" style="background:#FEF3C7">${Icons.mail}</div>
            <div class="settings-row-info">
              <div class="settings-row-title">Newsletter</div>
              <div class="settings-row-sub">New mantras and odes</div>
            </div>
            <label class="toggle">
              <input type="checkbox" checked onchange="handlePrefToggle(event, 'newsletter')">
              <div class="toggle-track"></div>
            </label>
          </div>
          <div class="settings-row">
            <div class="settings-row-icon" style="background:#ECFDF5">${Icons.bell}</div>
            <div class="settings-row-info">
              <div class="settings-row-title">Promotions</div>
              <div class="settings-row-sub">Offers and announcements</div>
            </div>
            <label class="toggle">
              <input type="checkbox" onchange="handlePrefToggle(event, 'promotions')">
              <div class="toggle-track"></div>
            </label>
          </div>
        </div>
      </div>

      <div class="settings-section">
        <div class="settings-section-label">Phone Preferences</div>
        <div class="settings-group">
          <div class="settings-row">
            <div class="settings-row-icon" style="background:#FEE2E2">${Icons.phone}</div>
            <div class="settings-row-info">
              <div class="settings-row-title">SMS Notifications</div>
              <div class="settings-row-sub">${isEmail ? 'Add a phone number to enable' : contact}</div>
            </div>
            <label class="toggle">
              <input type="checkbox" ${isEmail ? 'disabled' : ''} onchange="handlePrefToggle(event, 'sms')">
              <div class="toggle-track"></div>
            </label>
          </div>
        </div>
      </div>

      <button class="settings-logout-btn" onclick="logout()">
        ${Icons.logout} Sign Out
      </button>
    </div>`;
}

// ─── Share Sheet ───────────────────────────────────────────────────────────
function openShare(itemId) {
  const item = findItem(itemId);
  const link = `${window.location.origin}${window.location.pathname}?candle=${itemId}`;
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  overlay.id = 'share-overlay';
  overlay.innerHTML = `
    <div class="share-sheet">
      <div class="share-handle"></div>
      <div class="share-title">Share "${item ? item.name : ''}"</div>
      <div class="share-divider"></div>
      <div class="share-options">
        <button class="share-option" onclick="shareAction('copy','${link}')">
          <div class="share-option-icon" style="background:#F3F4F6">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#374151" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          </div>
          <span class="share-option-label">Copy Link</span>
        </button>
        <button class="share-option" onclick="shareAction('instagram','${link}')">
          <div class="share-option-icon" style="background:linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path fill="none" stroke="white" stroke-width="2" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line fill="none" stroke="white" stroke-width="2" stroke-linecap="round" x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </div>
          <span class="share-option-label">Instagram</span>
        </button>
        <button class="share-option" onclick="shareAction('whatsapp','${encodeURIComponent(link)}')">
          <div class="share-option-icon" style="background:#25D366">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
          </div>
          <span class="share-option-label">WhatsApp</span>
        </button>
        <button class="share-option" onclick="shareAction('airdrop','${link}')">
          <div class="share-option-icon" style="background:linear-gradient(135deg,#5AC8FA,#007AFF)">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M12 3a1 1 0 0 0-1 1v8.586l-2.293-2.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L13 12.586V4a1 1 0 0 0-1-1z"/><path d="M5 16a1 1 0 0 0-1 1v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1a1 1 0 1 0-2 0v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1z"/></svg>
          </div>
          <span class="share-option-label">AirDrop</span>
        </button>
        <button class="share-option" onclick="shareAction('sms','${encodeURIComponent(link)}')">
          <div class="share-option-icon" style="background:#4CD964">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          </div>
          <span class="share-option-label">Message</span>
        </button>
      </div>
      <button class="share-cancel" onclick="closeShare()">Cancel</button>
    </div>`;
  overlay.addEventListener('click', e => { if (e.target === overlay) closeShare(); });
  document.body.appendChild(overlay);
}

function closeShare() {
  const el = document.getElementById('share-overlay');
  if (el) el.remove();
}

function shareAction(platform, data) {
  closeShare();
  switch (platform) {
    case 'copy':
      navigator.clipboard.writeText(data).then(() => showToast('Link copied to clipboard'))
        .catch(() => showToast('Link: ' + data));
      break;
    case 'instagram': showToast('Opening Instagram...'); break;
    case 'whatsapp':
      window.open(`https://wa.me/?text=${data}`, '_blank');
      break;
    case 'airdrop': showToast('AirDrop requires a native device'); break;
    case 'sms':
      window.open(`sms:?&body=${data}`, '_blank');
      break;
  }
}

// ─── Player Controls ───────────────────────────────────────────────────────
function togglePlay(totalSec) {
  state.isPlaying = !state.isPlaying;
  const btn = document.getElementById('play-btn');
  if (btn) btn.innerHTML = state.isPlaying ? Icons.pause : Icons.play;

  if (state.playTimer) { clearInterval(state.playTimer); state.playTimer = null; }

  if (state.isPlaying) {
    const tickMs = 500;
    const tickPercent = (tickMs / (totalSec * 1000)) * 100;
    state.playTimer = setInterval(() => {
      state.playProgress += tickPercent;
      if (state.playProgress >= 100) {
        state.playProgress = state.loopOn ? 0 : 100;
        if (!state.loopOn) {
          clearInterval(state.playTimer);
          state.playTimer = null;
          state.isPlaying = false;
          const b = document.getElementById('play-btn');
          if (b) b.innerHTML = Icons.play;
        }
      }
      updateProgressUI(totalSec);
    }, tickMs);
  }
}

function updateProgressUI(totalSec) {
  const fill = document.getElementById('progress-fill');
  if (fill) fill.style.width = state.playProgress + '%';
  const elapsed = Math.floor((state.playProgress / 100) * totalSec);
  const el = document.getElementById('time-elapsed');
  if (el) el.textContent = `${Math.floor(elapsed/60)}:${(elapsed%60).toString().padStart(2,'0')}`;
}

function seekProgress(e, totalSec) {
  const bar = e.currentTarget;
  const rect = bar.getBoundingClientRect();
  const x = (e.clientX || e.touches?.[0]?.clientX) - rect.left;
  state.playProgress = Math.max(0, Math.min(100, (x / rect.width) * 100));
  updateProgressUI(totalSec);
}

function skipForward() {
  state.playProgress = Math.min(100, state.playProgress + 10);
  const item = state.currentItem;
  const [min, sec] = item.length.split(':').map(Number);
  updateProgressUI(min * 60 + sec);
}

function skipBack() {
  state.playProgress = Math.max(0, state.playProgress - 10);
  const item = state.currentItem;
  const [min, sec] = item.length.split(':').map(Number);
  updateProgressUI(min * 60 + sec);
}

function toggleLoop() {
  state.loopOn = !state.loopOn;
  const btn = document.getElementById('loop-btn');
  if (btn) {
    btn.className = `action-btn ${state.loopOn ? 'active' : ''}`;
    btn.innerHTML = `${Icons.loop} Loop ${state.loopOn ? 'On' : 'Off'}`;
  }
  showToast(state.loopOn ? 'Loop On' : 'Loop Off');
}

function handleSave(id) {
  toggleSave(id);
  // re-render just the action button if on player page
  const btn = document.querySelector('.action-btn.saved, .action-btn:first-child');
  // Simplest: re-render player area
  if (state.view === 'player-unlocked' || state.view === 'saved') {
    const wasPlaying = state.isPlaying;
    const progress   = state.playProgress;
    render();
    state.isPlaying   = wasPlaying;
    state.playProgress = progress;
  }
}

// ─── Card Actions ──────────────────────────────────────────────────────────
function cardClick(id) {
  const item = findItem(id);
  if (!item) return;
  if (item.unlocked) {
    navigate('player-unlocked', item);
  } else {
    navigate('player-locked', item);
  }
}

function handleScanQR() {
  showToast('Point your camera at an Art & Ode QR code to unlock this mantra.');
}

// ─── Swipe Handlers ────────────────────────────────────────────────────────
function initSwipeHandlers() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    let startX = 0, startY = 0, currentX = 0, swiping = false, axis = null;
    const id    = card.id.replace('card-', '');
    const wrap  = document.getElementById('wrap-' + id);
    const bgL   = wrap ? wrap.querySelector('.card-swipe-bg.left')  : null;
    const bgR   = wrap ? wrap.querySelector('.card-swipe-bg.right') : null;
    const THRESHOLD = 80;

    card.addEventListener('touchstart', e => {
      startX   = e.touches[0].clientX;
      startY   = e.touches[0].clientY;
      currentX = 0;
      swiping  = false;
      axis     = null;
      card.classList.add('swiping');
    }, { passive: true });

    card.addEventListener('touchmove', e => {
      const dx = e.touches[0].clientX - startX;
      const dy = e.touches[0].clientY - startY;
      if (!axis) axis = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
      if (axis !== 'x') return;
      e.preventDefault();
      currentX = dx;
      card.style.transform = `translateX(${dx}px)`;
      if (bgL) bgL.classList.toggle('show', dx < -20);
      if (bgR) bgR.classList.toggle('show', dx > 20);
    }, { passive: false });

    card.addEventListener('touchend', () => {
      card.classList.remove('swiping');
      card.classList.add('snap-back');
      if (currentX < -THRESHOLD) {
        // Delete
        card.style.transform = `translateX(-120%)`;
        setTimeout(() => {
          deleteItem(id);
          if (wrap) {
            wrap.style.height = wrap.offsetHeight + 'px';
            wrap.style.overflow = 'hidden';
            wrap.style.transition = 'height 0.25s ease';
            requestAnimationFrame(() => { wrap.style.height = '0'; });
            setTimeout(() => wrap.remove(), 260);
          }
          showToast('Removed');
        }, 200);
      } else if (currentX > THRESHOLD) {
        // Save
        card.style.transform = '';
        if (!isSaved(id)) { toggleSave(id); }
        else showToast('Already saved');
        if (bgR) bgR.classList.remove('show');
      } else {
        card.style.transform = '';
        if (bgL) bgL.classList.remove('show');
        if (bgR) bgR.classList.remove('show');
      }
      setTimeout(() => card.classList.remove('snap-back'), 300);
    }, { passive: true });
  });
}

// ─── Onboarding Actions ────────────────────────────────────────────────────
function handleContactSubmit() {
  const input = document.getElementById('contact-input');
  const val   = (input ? input.value : '').trim();
  if (!val) { showToast('Please enter your email or phone number'); return; }
  state.contactInput = val;
  navigate('onboarding-otp');
  setTimeout(() => { const f = document.getElementById('otp-0'); if (f) f.focus(); }, 100);
}

function handleOTPVerify() {
  const digits = [0,1,2,3].map(i => {
    const el = document.getElementById('otp-'+i);
    return el ? el.value : '';
  }).join('');
  if (digits.length < 4 || !/^\d{4}$/.test(digits)) {
    showToast('Enter a valid 4-digit code');
    return;
  }
  saveUser(state.contactInput);
  if (state.pendingQR) {
    const item = findItem(state.pendingQR);
    state.pendingQR = null;
    if (item && item.unlocked) { navigate('player-unlocked', item); return; }
    if (item && !item.unlocked) { navigate('player-locked', item); return; }
  }
  navigate('home');
}

function handleResend(e) {
  e.preventDefault();
  showToast('Code resent! (Demo: enter any 4 digits)');
}

function handlePrefToggle(e, pref) {
  showToast(`${pref.charAt(0).toUpperCase() + pref.slice(1)} ${e.target.checked ? 'enabled' : 'disabled'}`);
}

// ─── OTP auto-advance ──────────────────────────────────────────────────────
function initOTPInputs() {
  [0,1,2,3].forEach(i => {
    const el = document.getElementById('otp-'+i);
    if (!el) return;
    el.addEventListener('input', () => {
      el.value = el.value.replace(/\D/g,'').slice(-1);
      if (el.value && i < 3) {
        document.getElementById('otp-'+(i+1))?.focus();
      }
      if (i === 3 && el.value) handleOTPVerify();
    });
    el.addEventListener('keydown', e => {
      if (e.key === 'Backspace' && !el.value && i > 0) {
        document.getElementById('otp-'+(i-1))?.focus();
      }
    });
  });
}

// ─── Toast ─────────────────────────────────────────────────────────────────
function showToast(msg) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('leaving');
    setTimeout(() => toast.remove(), 300);
  }, 2200);
}

// ─── Render ────────────────────────────────────────────────────────────────
function render() {
  const app = document.getElementById('app');
  if (!app) return;
  let html = '';
  switch (state.view) {
    case 'onboarding-email': html = renderOnboardingEmail();    break;
    case 'onboarding-otp':   html = renderOnboardingOTP();      break;
    case 'home':             html = renderHome()           + renderBottomNav(); break;
    case 'player-unlocked':  html = renderPlayerUnlocked() + renderBottomNav(); break;
    case 'player-locked':    html = renderPlayerLocked()   + renderBottomNav(); break;
    case 'saved':            html = renderSaved()          + renderBottomNav(); break;
    case 'settings':         html = renderSettings()       + renderBottomNav(); break;
  }
  app.innerHTML = html;
  afterRender();
}

function afterRender() {
  if (state.view === 'onboarding-otp')    initOTPInputs();
  if (state.view === 'home')              initSwipeHandlers();
  if (state.view === 'saved')             initSwipeHandlers();
  if (state.view === 'onboarding-email') {
    const inp = document.getElementById('contact-input');
    if (inp) {
      inp.addEventListener('keydown', e => { if (e.key === 'Enter') handleContactSubmit(); });
    }
  }
}

// ─── Init ──────────────────────────────────────────────────────────────────
function init() {
  loadState();
  const params   = new URLSearchParams(window.location.search);
  const candleId = params.get('candle');
  if (candleId) state.pendingQR = candleId;

  if (state.user) {
    if (candleId) {
      const item = findItem(candleId);
      if (item && item.unlocked) { navigate('player-unlocked', item); return; }
      if (item && !item.unlocked){ navigate('player-locked',   item); return; }
    }
    navigate('home');
  } else {
    navigate('onboarding-email');
  }
}

document.addEventListener('DOMContentLoaded', init);

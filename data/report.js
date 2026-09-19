// Verbatim text from "Orchestrated Defense" (The Dissent, Oct 28 & Nov 20 2025).
// All prose fields below are copied word-for-word from the source report — do not paraphrase
// when editing. Numbers/labels used only for charts are noted as such.

export const meta = {
  title: "Orchestrated Defense",
  subtitle:
    "The Coordinated Inauthentic Behavior Targeting Bangladesh's International Crimes Tribunal",
  authors: ["Minhaj Aman", "Jobair Ahmad"],
  publication: "Activate Rights",
  dataWindow: "Jun 3 – Nov 20, 2025",
};

export const heroStats = [
  { key: "pages", value: 78, label: "Facebook pages tracked" },
  { key: "ads", value: 547, label: "Ads run, Jun 3 – Oct 26" },
  { key: "targets", value: 7, label: "Individuals targeted" },
  { key: "emails", value: 23, label: "Shared email addresses" },
  { key: "phones", value: 24, label: "Shared phone numbers" },
];

export const aboutReport = {
  kicker: "About This Report",
  paragraphs: [
    "This briefing details a coordinated inauthentic behavior (CIB) campaign on Facebook designed to undermine Bangladesh's ongoing transitional justice processes.",
    "Following the political transition in 2024, the International Crimes Tribunal (ICT) initiated judicial proceedings to ensure accountability for severe human rights violations committed over the past 15 years, including enforced disappearances, murders and extrajudicial killings. Crucially, As the Tribunal began prosecuting current and former military and intelligence officers for systemic human rights violations—including enforced disappearances and extrajudicial killings—a large-scale CIB network was activated online. Its primary objective was to question the legitimacy of the ICT, shield the accused officers from civilian accountability and launch smear campaigns against those demanding justice. Utilizing dozens of Facebook pages and hundreds of paid advertisements, this campaign sought to portray the trials as \"staged\" while aggressively smearing journalists, victims, and human rights advocates who demanded accountability.",
    "We uncovered and documented this digital manipulation, publishing our in-depth findings across two detailed investigative stories on The Dissent on October 28 and November 20, 2025.",
    "Building upon those initial publications, this consolidated report breaks down the anatomy of the campaign. It details the scale of the CIB network, identifies the key individuals targeted by its harassment and exposes the shared technical infrastructure managed by its operators. Furthermore, it examines how the network adapted and diminished following our public exposure, highlighting the ongoing threat of digital manipulation to Bangladesh's pursuit of transitional justice.",
  ],
};

export const execSummary = {
  kicker: "Executive Summary",
  paragraphs: [
    "Following the fall of Sheikh Hasina's government in August 2024, demands for accountability regarding enforced disappearances and extrajudicial killings committed by security forces over the past 15 years intensified. As the International Crimes Tribunal (ICT) began proceedings against 25 former and current military officers—including former heads of the Directorate General of Forces Intelligence (DGFI)—a large-scale, coordinated network emerged on Facebook.",
    "This campaign is designed to discredit the trial process, shield the military institution from criticism, and aggressively target human rights advocates, journalists, and whistleblowers.",
  ],
  bulletsIntro: "Key findings of our research include:",
  bullets: [
    {
      label: "Scale and Reach",
      text: "Between June and November 2025, a network of at least 78 Facebook pages utilized paid advertisements and organic content to run a synchronized influence campaign.",
    },
    {
      label: "Targeted Harassment",
      text: "The network heavily targeted seven specific individuals who have been vocal in demanding justice for victims of systematic human rights violation including enforced disappearances and extra judicial killings. A total of 547 advertisements were run against them in the first phase of the campaign, with writer and Activist Pinaki Bhattacharya being the primary target (416 ads).",
    },
    {
      label: "Highly Coordinated Tactics",
      text: "The network utilized automated posting schedules (541 out of 547 initial ads were launched precisely at 7:00 AM), syndication of identical content across multiple pages within minutes and AI-generated \"deepfake\" avatars to simulate political analysis.",
    },
    {
      label: "Shared Infrastructure",
      text: "Technical forensics revealed that the network is centrally managed. Across the 78 pages, operators used a shared pool of just 23 email addresses and 24 phone numbers to register and manage Facebook advertisements.",
    },
    {
      label: "Evasion and Adaptation",
      text: "Following the publication of The Dissent's initial investigation in late October, the network adapted. Ad volume dropped by more than half, 14 pages were completely scrubbed from the platform, and remaining pages shifted their narratives to directly push back against media scrutiny while continuing to praise military leadership.",
    },
  ],
};

export const introduction = {
  kicker: "Introduction",
  paragraphs: [
    "In June 2025, a state-appointed Inquiry Commission on Enforced Disappearances submitted a report detailing systemic human rights violations by various units of the security forces. By October, the ICT issued arrest warrants for 24 military officers, with 15 active-duty officers subsequently remanded to prison—a move welcomed by organizations like Amnesty International.",
    "Parallel to these legal developments, a sophisticated online campaign was launched to reframe the narrative. The campaign characterizes the tribunal as a \"staged script,\" portrays the accused officers as innocent and viciously attacks individuals who have been vocal in demanding justice. This report maps the scale of this Coordinated Inauthentic Behaviour (CIB) and the tactics employed to manipulate public perception.",
  ],
};

export const whyMatters = {
  kicker: "Why this report Matters",
  paragraphs: [
    "Bangladesh is currently navigating a fragile transitional period following the political upheaval of August 2024. The pursuit of accountability for past human rights abuses, particularly the legacy of enforced disappearances and extrajudicial killings committed over the past 15 years, is a cornerstone of this transition.",
    "Following the uprising, proceedings against several implicated military officers were initiated. Initially, there was a concerted push to keep these proceedings contained within a closed Military Tribunal. However, because these officers were deeply involved in systemic human rights violations while serving across various civilian law enforcement agencies, immense public pressure successfully demanded their trial at the International Crimes Tribunal (ICT).",
    "This report matters because it exposes how this Coordinated Inauthentic Behaviour (CIB) network emerged as a direct retaliatory measure to that jurisdictional shift. When pressure mounted for ICT trials, the network weaponized Facebook to actively question the ICT's legitimacy and launch synchronized smear campaigns against the plaintiffs, whistleblowers, and human rights defenders advocating for civilian accountability.",
    "Crucially, this report also demonstrates the tangible impact of digital forensics and investigative journalism. Following the publication of our findings in The Dissent, the volume and aggression of this specific CIB activity significantly decreased. Documenting this operation is essential not only for safeguarding Bangladesh's current pursuit of justice but also for holding social media platforms accountable for their role in facilitating the manipulation of public discourse.",
  ],
};

export const scaleCopy = {
  kicker: "What is the Scale of CIB on Facebook?",
  paragraphs: [
    "Investigation identified an initial 67 Facebook pages actively participating in this coordinated campaign, which later evolved to include 11 new pages, bringing the total tracked assets to 78. While some pages were created recently specifically for this purpose, others are older, repurposed pages that occasionally post positive content about the Bangladesh Army to build a veneer of legitimacy.",
  ],
  lines: [
    {
      label: "Ad Volume:",
      text: "Between June 3 and October 26, 2025, the network ran 547 advertisements.",
    },
    {
      label: "Organic Reach:",
      text: "Beyond paid advertisements, these pages regularly push organic content (texts, photos, reels, and documentaries) framing the trial process as \"questionable,\" \"politically motivated,\" and \"biased.\"",
    },
  ],
};

// Chart-only numbers (unchanged from the report):
export const targets = [
  { name: "Pinaki Bhattacharya", role: "Writer/YouTuber", ads: 416 },
  { name: "Ilias Hossain", role: "Journalist", ads: 129 },
  { name: "Lt. Col. (Retd.) Mustafizur Rahman", role: "", ads: 100 },
  {
    name: "Col. (Retd.) Hasinur Rahman",
    role: "",
    ads: 65,
    tag: "Notably, Rahman is the plaintiff in one of the ICT cases and a former victim of enforced disappearance.",
  },
  { name: "Kanak Sarwar", role: "Journalist", ads: 57 },
  { name: "Brig. Gen. (Retd.) Hasan Nasir", role: "", ads: 24 },
  { name: "Dr. Nabila Idris", role: "Member, Commission on Enforced Disappearances", ads: 10 },
];

export const targetsCopy = {
  kicker: "Where is the CIB Targeted?",
  intro:
    "The network focuses its financial and operational resources on discrediting seven key individuals who have consistently advocated for the prosecution of security and intelligence officers involved in enforced disappearances.",
  listIntro:
    "The targets and the volume of negative advertisements run against them during the first phase of the campaign include:",
  outro:
    "The network relies heavily on character assassination, branding these individuals as \"rumor-mongers,\" \"anti-state,\" or \"agents of foreign intelligence (RAW).\" Conversely, the advertisements uniformly praise the army and the DGFI as \"the pride of the nation\" and \"essential for state security.\"",
};

export const sync = { synced: 541, total: 547 };

export const coordinationCopy = {
  kicker: "How is the Network Coordinated?",
  intro:
    "The campaign exhibits clear hallmarks of CIB, utilizing tactics designed to deceive platform algorithms and users alike:",
  sub1: {
    title: "1. Synchronized Deployment and Content Syndication",
    text: "The precision of the network's ad deployment points to a centralized operation. Out of the 547 identified ads, 541 were promoted at exactly 7:00 AM. Furthermore, identical captions and photocards are frequently published across multiple pages within minutes of each other. For example, a post accusing Pinaki Bhattacharya of a 2008 medical scandal was published identically across eight different pages (including BanglaZ, Gono Talkshow-tantra, and Wikileaks V.2) on September 21 between 4:00 PM and 5:00 PM.",
  },
  sub2: {
    title: "2. Repurposed Assets and Page Masking",
    intro:
      "Many older pages in the network exhibit a history of drastic name changes, a common tactic used to retain followers while pivoting to political manipulation.",
    lines: [
      "Xpress News was created in 2016 as \"সাংবাদিক সাইফুল ইসলাম\" (Journalist Saiful Islam), passed through five more names — including two separate \"Bechelor Point\" seasons — before adopting its current name in August 2024.",
      "Banglar Bani (বাংলার বাণী) began as \"CHT Photography\" in 2017, cycled through a tour page and an organic-products page, and became \"Dream Aviary\" before adopting its current name in September 2025.",
    ],
  },
  sub3: {
    title: "3. Utilization of AI and Deepfakes",
    text: "The investigation uncovered the use of AI-generated avatars to simulate credibility. The page Jahid Hasan Jewel (previously named Gen-Z Fact Check) features a \"political analyst\" whose appearance changes significantly between videos. Visual inconsistencies, such as shifting age demographics and a static watch face that does not keep time, indicate the use of AI modification templates.",
  },
};

// Chart-only structure (page/identifier counts unchanged from the report):
export const renameChains = [
  {
    page: "Xpress News",
    history: [
      { year: "2016", name: "সাংবাদিক সাইফুল ইসলাম" },
      { name: "সিএইচটি জার্নাল।" },
      { name: "Bechelor Point All Season" },
      { name: "Bechelor Point Season 4" },
      { name: "Khagrachhari Express / খাগড়াছড়ি এক্সপ্রেস" },
      { name: "Xpress News", current: true },
    ],
  },
  {
    page: "Banglar Bani",
    history: [
      { year: "2017", name: "CHT photography" },
      { name: "CHT Tour" },
      { name: "Organic Products Of CHT" },
      { name: "Dream Aviary" },
      { name: "বাংলার বাণী", current: true },
    ],
  },
];

export const forensicsCopy = {
  kicker: "Technical Forensics: Tracing the Operators",
  intro:
    "While operators of CIB networks go to great lengths to obscure their identities, technical forensic analysis of the 78 pages revealed significant overlapping infrastructure. The network utilized a shared pool of just 23 email addresses and 24 phone numbers to register and manage Facebook advertisements.",
};

export const hubs = [
  {
    id: "ababil4u@gmail.com",
    kind: "Email address",
    count: 16,
    examples: ["Bangladesh Military Insider", "GenZ Nation"],
    heading: "The \"ababil4u\" Cluster",
    text: "The email address ababil4u@gmail.com was used to manage ads across 16 different pages (including Bangladesh Military Insider and GenZ Nation). Open-source intelligence links this email to an entity named \"Rainforest Media,\" allegedly owned by an individual named Md. Rafi Khan, with a registered address at Road 1, Dhaka Cantonment.",
  },
  {
    id: "+8801950555030",
    kind: "Phone number",
    count: 23,
    examples: [],
    heading: "The \"+8801950555030\" Node",
    text: "This specific phone number was utilized to place ads on 23 distinct pages. Cross-referencing this number revealed an associated WhatsApp account named \"scorpion,\" a Telegram account labeled \"Head office,\" and a Truecaller ID registered as \"Executive officer.\"",
  },
  {
    id: "+8801711986954",
    kind: "\"Seba\" cluster",
    count: 7,
    examples: [],
    heading: "The \"Seba\" Network",
    text: "The number +8801711986954 was linked to seven pages and traces back to online identifiers such as \"Seba Computers\" and \"S M Ashraful Azom.\"",
  },
];

export const postExposureCopy = {
  kicker: "Post-Exposure Activity",
  intro:
    "Following the publication of initial investigative findings, the coordinated network exhibited a classic \"evasion and adaptation\" cycle.",
  deEscalationLabel: "Strategic De-escalation:",
  deEscalationIntro:
    "An analysis of ad volume between two distinct 10-day periods highlights a significant drop in paid activity:",
  preLabel: "Pre-Exposure (October 16 - October 27):",
  preText: "320 advertisements were active.",
  postLabel: "Post-Exposure (October 28 - November 8):",
  postText: "Ad volume dropped to 150 advertisements.",
  infraLabel: "Infrastructure Alteration:",
  infraText:
    "14 pages were completely deleted or unpublished. 17 pages ceased all activity, while 18 pages halted paid promotions but continued to post organic content. Simultaneously, 11 new pages were introduced into the network.",
  narrativeLabel: "Narrative Shifts:",
};

// Chart-only numbers (unchanged from the report):
export const beforeAfter = [
  { label: "Pre-exposure\nOct 16–27", value: 320, status: "neutral" },
  { label: "Post-exposure\nOct 28–Nov 8", value: 150, status: "organic" },
];
export const beforeAfterDeltaLabel = "→ −53%";

export const waffleCounts = [
  { key: "critical", n: 14, label: "Completely deleted or unpublished", texture: "solid" },
  { key: "warning", n: 17, label: "Ceased all activity", texture: "hatch" },
  {
    key: "organic",
    n: 18,
    label: "Halted paid promotions, continued organic content",
    texture: "dot",
  },
  { key: "neutral", n: 29, label: "No detected change", texture: "solid" },
];
export const waffleNew = { key: "new", n: 11, label: "New pages introduced", texture: "dash" };

export const narrativeShifts = [
  {
    tag: "Institutional cover",
    text: "As public scrutiny increased, the network expanded its messaging. Pages began launching synchronized defenses of the Air Force and initiated a concerted effort to praise current military leadership, specifically General Waker-uz-Zaman.",
  },
  {
    tag: "Individual defense",
    text: "A profile named Ridhi Islam launched a targeted campaign defending Major General Ziaul Ahsan, who is currently detained and facing trial at the ICT. The ads claimed he is an honest officer subjected to a \"media trial.\"",
  },
  {
    tag: "Direct rebuttal",
    text: "The network directly pushed back against media investigations. The page Inside Story launched ads claiming they are not a \"nameless or money-driven page,\" attempting to explain away the evidence of coordination as a mere algorithmic coincidence—despite the page having changed its name from \"Vittihin Prochar\" (Baseless Propaganda) just weeks prior.",
  },
];

export const implicationsCopy = {
  kicker: "Implications: What does this tell us?",
  items: [
    {
      title: "1. The operation is centralized and highly resilient",
      text: "The shared infrastructure (emails and phone numbers) proves that these are not isolated citizens expressing organic opinions, but rather a centrally managed public relations apparatus. The network's ability to instantly pause ads, delete compromised pages and spin up new ones demonstrates a well-funded and resilient operation.",
    },
    {
      title: "2. Current platform detection is insufficient",
      text: "The fact that this network was able to purchase hundreds of political advertisements targeting specific individuals without triggering automated CIB takedowns highlights a blind spot in platform moderation, particularly in non-English contexts.",
    },
    {
      title: "3. Online manipulation poses a direct threat to transitional justice",
      text: "By targeting the International Crimes Tribunal and intimidating human rights defenders, this network is actively attempting to disrupt legal accountability. Until social media platforms take decisive action to trace and dismantle the core architecture of these operations, CIB will remain a potent tool for those seeking to manipulate public discourse in Bangladesh.",
    },
  ],
};

export const conclusionCopy = {
  kicker: "Conclusion",
  paragraphs: [
    "The data presented in this briefing demonstrates that the manipulation of Facebook's advertising and organic reach algorithms remains a highly effective tool for political actors in Bangladesh. The coordinated network targeting the International Crimes Tribunal is not a grassroots movement of concerned citizens; it is a well-resourced, centrally managed digital infrastructure utilizing deepfakes, repurposed pages and automated ad-buying to shield specific institutions and individuals from accountability.",
    "The network's swift adaptation following public exposure—deleting compromised pages while immediately spinning up new ones using the identical digital infrastructure—highlights the inadequacy of current platform moderation. Until social media companies proactively dismantle the shared administrative nodes (the phone numbers, emails, and payment methods) rather than merely removing individual pages, these sophisticated operations will continue to harass human rights defenders and distort the critical transitional justice processes in Bangladesh.",
  ],
};

// Exhibit photos, extracted from the original report. Order matches the doc.
export const figures = {
  top10Pages: {
    fignum: 1,
    src: "/images/top10-pages.png",
    width: 1200,
    height: 949,
    caption: "Top 10 Facebook pages broadcasting the most advertisements.",
  },
  eliasAds: {
    fignum: 2,
    src: "/images/elias-hossain-ads.png",
    width: 1200,
    height: 523,
    caption: "Negative advertisements targeting journalist Ilias Hossain.",
  },
  syndicatedPost: {
    fignum: 3,
    src: "/images/syndicated-post-8-pages.png",
    width: 1200,
    height: 1548,
    caption:
      "The same post published across 8 different pages simultaneously, targeting Pinaki Bhattacharya.",
  },
  pageRenames: {
    fignum: 4,
    src: "/images/page-rename-history.png",
    width: 1200,
    height: 718,
    caption: "Page history showing the name changes of 2 Facebook pages.",
  },
  deepfake: {
    fignum: 5,
    src: "/images/ai-deepfake-jewel.png",
    width: 1200,
    height: 709,
    caption:
      "Side-by-side comparison of the AI-generated \"Jahid Hasan Jewel\" showing visual inconsistencies.",
  },
  overlap: {
    fignum: 6,
    src: "/images/email-phone-overlap.png",
    width: 1000,
    height: 817,
    caption: "List showing the overlapping email addresses and phone numbers connecting the pages.",
  },
  unpublished: {
    fignum: 7,
    src: "/images/pages-unpublished.png",
    width: 400,
    height: 495,
    caption: "14 pages unpublished after the first story.",
  },
  insideStory: {
    fignum: 8,
    src: "/images/inside-story-rebuttal.png",
    width: 697,
    height: 699,
    caption:
      "The sponsored rebuttal post from \"Inside Story\" alongside its page history showing its original name \"Vittihin Prochar.\"",
  },
};

export const footerMethod =
  "Facebook Ad Library review, page-history analysis, and cross-referencing of ad-registration contact data across 78 tracked pages, June–November 2025.";

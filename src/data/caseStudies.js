import h2goEarly from '../assets/projects/h2go/h2go-4.jpg';
import h2goMid from '../assets/projects/h2go/exports/h2go-reward-meter.png';
import h2goTesting from '../assets/projects/h2go/h2go-6.jpg';
import h2goUpdated from '../assets/projects/h2go/exports/h2go-leaderboard.png';
import h2goFinal from '../assets/projects/h2go/exports/h2go-home-final.png';
import campusEarly from '../assets/projects/campus-transit/campus-04.jpg';
import campusFinalized from '../assets/projects/campus-transit/exports/transit-screen-2.png';
import campusTesting from '../assets/projects/campus-transit/campus-07.jpg';
import campusFinal from '../assets/projects/campus-transit/exports/transit-screen-1.png';
import campusNavigation from '../assets/projects/campus-transit/exports/transit-screen-3.png';

export const prototypeUrl =
  'https://www.figma.com/proto/z1YGHPTv5gqfN48tbeN4fb/H2Go-Proto?content-scaling=fixed&kind=proto&node-id=94-357&page-id=0%3A1&scaling=scale-down&starting-point-node-id=94%3A237';

const prototypeEmbedUrl =
  'https://embed.figma.com/proto/z1YGHPTv5gqfN48tbeN4fb/H2Go-Proto?page-id=0%3A1&node-id=94-357&p=f&viewport=193%2C108%2C0.15&scaling=scale-down&content-scaling=fixed&starting-point-node-id=94%3A237&embed-host=share';

export const campusPrototypeUrl =
  'https://www.figma.com/proto/QrD7MjkD3ae9pkmJZLhtXL/Prototype-3.0?node-id=0-1&scaling=scale-down';

const campusPrototypeEmbedUrl =
  'https://embed.figma.com/proto/QrD7MjkD3ae9pkmJZLhtXL/Prototype-3.0?node-id=0-1&scaling=scale-down&embed-host=share';

export const caseStudies = {
  h2go: {
    slug: 'h2go',
    title: 'H2Go',
    subtitle: 'A hydration tracker that turns reusable-bottle habits into visible progress.',
    year: '2025',
    status: 'Prototype',
    context: 'INFO-I300 / Team project',
    discipline: 'UX/UI + Prototyping',
    role: 'UI design and prototyping',
    team: 'Cole, Sathya, Owyn, and Isaiah',
    accent: '#178f96',
    accentSoft: '#bce4dc',
    heroImage: h2goFinal,
    heroAlt: 'H2Go mobile hydration dashboard showing bottle progress, points, and check-in controls.',
    introduction:
      'Busy days make it easy to forget both water and a reusable bottle. H2Go explores how reminders, visible progress, and small rewards can make hydration feel easier to remember and more motivating to sustain.',
    challenge: {
      eyebrow: 'The challenge',
      title: 'Make a healthy routine feel immediate, social, and rewarding.',
      copy:
        'The team focused on two connected behaviors: remembering to bring a reusable bottle and continuing to drink water throughout the day. The experience needed to encourage consistency without turning a simple habit into a complicated tracking task.',
    },
    signals: [
      { label: 'Research signal', value: 'Reminders' },
      { label: 'Motivation', value: 'Rewards' },
      { label: 'Social layer', value: 'Leaderboard' },
      { label: 'Sustainability', value: 'EcoMap' },
    ],
    chapters: [
      {
        number: '01',
        eyebrow: 'Research + direction',
        title: 'Peers wanted help remembering, plus a reason to return.',
        copy:
          'Early peer research surfaced four recurring requests: a reusable-bottle reminder, a reminder to drink water, a competition system, and rewards. Those needs shaped the core loop rather than being added as disconnected features.',
        image: h2goEarly,
        imageAlt: 'Early H2Go sketches and a summary of the first meter, rewards, and leaderboard concept.',
        bullets: [
          'Use a visual meter to make daily progress understandable at a glance.',
          'Pair consistency with rewards and friendly competition.',
          'Test the central interaction before investing in high-fidelity screens.',
        ],
      },
      {
        number: '02',
        eyebrow: 'Mid-fidelity prototype',
        title: 'The structure worked before the visual system did.',
        copy:
          'The first Figma prototype gave the team a usable flow and clear organization, but its colors reduced readability. That distinction mattered: the product idea was understandable, while the interface still needed stronger contrast and hierarchy.',
        image: h2goMid,
        imageAlt: 'Mid-fidelity H2Go prototype with a vertical hydration meter and navigation bar.',
        bullets: [
          'Keep the simple meter-centered home screen.',
          'Improve color contrast instead of rebuilding the entire flow.',
          'Use testing to separate interaction issues from visual issues.',
        ],
      },
      {
        number: '03',
        eyebrow: 'User testing',
        title: 'Feedback pushed the concept beyond one daily reminder.',
        copy:
          'Test participants responded positively to the notification and leaderboard, while also identifying hard-to-read colors. One participant wanted support for drinking throughout the day, which helped move the concept toward hourly check-ins and a clearer progress model.',
        image: h2goTesting,
        imageAlt: 'H2Go user-testing slide with participant photos and summarized feedback.',
        bullets: [
          'Preserve notifications and friendly competition as motivating elements.',
          'Increase readability and clarify the visual hierarchy.',
          'Support repeated hydration check-ins rather than a single daily action.',
        ],
      },
      {
        number: '04',
        eyebrow: 'Final iteration',
        title: 'A clearer dashboard connects progress, action, and reward.',
        copy:
          'The refined experience adds actual scores, more intuitive symbols, and a prominent check-in button. Hourly check-ins, rewards, and the EcoMap bring the research themes together in one compact mobile system.',
        image: h2goUpdated,
        imageAlt: 'Before and after comparison of the H2Go dashboard showing refined scores, icons, and check-in control.',
        bullets: [
          'Actual point values make rewards easier to interpret.',
          'A central check-in control gives the home screen one clear action.',
          'EcoMap extends the idea from personal hydration to reusable-bottle access.',
        ],
      },
    ],
    outcome:
      'H2Go developed from a simple consistency meter into a more complete motivation system. The strongest result is a direct loop: receive a reminder, check in, see progress, and connect that progress to rewards and friendly competition.',
    reflection:
      'The project reinforced that a sound interaction model can still fail visually. Testing helped preserve what was already working while focusing iteration on contrast, clarity, and the timing of hydration support.',
    prototype: {
      embedUrl: prototypeEmbedUrl,
      url: prototypeUrl,
      title: 'Interactive H2Go hydration app prototype',
    },
    next: { slug: 'campus-transit', title: 'Campus Transit' },
  },
  'campus-transit': {
    slug: 'campus-transit',
    title: 'Campus Transit',
    subtitle: 'A focused transit concept for routes, capacity, and real-time campus travel.',
    year: '2025',
    status: 'Prototype',
    context: 'INFO-I300 / Team project',
    discipline: 'UX/UI + Prototyping',
    role: 'UI design and prototyping',
    team: 'Chloe Arbanas, Olive Belcher, Mac Pham, and Owyn Smith',
    accent: '#7768ce',
    accentSoft: '#d8cef2',
    heroImage: campusFinal,
    heroAlt: 'Campus Transit mobile dashboard showing favorite routes, nearby stops, and navigation tabs.',
    introduction:
      'Campus Transit rethinks the everyday experience of catching a bus at Indiana University Bloomington. The concept brings route status, arrival information, capacity, and personal preferences into a cleaner interface built for quick decisions.',
    challenge: {
      eyebrow: 'The challenge',
      title: 'Reduce uncertainty without overwhelming riders with information.',
      copy:
        'Existing campus transit tools felt difficult to use and visually dated. Interviews also surfaced frustration with inaccurate day-to-day route data. The team needed to balance live information, usability, and route planning inside a simple mobile experience.',
    },
    signals: [
      { label: 'Priority', value: 'Accuracy' },
      { label: 'Experience', value: 'Efficiency' },
      { label: 'Interface', value: 'Simplicity' },
      { label: 'Access', value: 'Responsive' },
    ],
    chapters: [
      {
        number: '01',
        eyebrow: 'Research + framing',
        title: 'Reliable transit information can change whether people choose the bus.',
        copy:
          'Secondary research connected well-designed multimodal apps with changes in walking, transit, and driving behavior. Interviews brought the issue closer to campus: riders cared about accurate arrivals, delay status, capacity, and navigation they could understand quickly.',
        image: campusEarly,
        imageAlt: 'Campus Transit early sketches exploring live tracking and a usable interface.',
        bullets: [
          'Prioritize relevant route information over feature volume.',
          'Design for different devices and levels of technical comfort.',
          'Treat rider feedback as an input to continued improvement.',
        ],
      },
      {
        number: '02',
        eyebrow: 'Concept development',
        title: 'Multiple directions converged on one streamlined system.',
        copy:
          'Early concepts explored an all-in-one live-tracking screen and a tutorial-heavy usability approach. Reviews showed that both could become overwhelming. The final direction combined their strongest ideas while distributing information across clearer screens.',
        image: campusFinalized,
        imageAlt: 'Campus Transit finalized concept combining accuracy, efficiency, and simple navigation.',
        bullets: [
          'Show accurate ETA, delays, capacity, and next-stop information.',
          'Keep frequent actions easy to reach from the home screen.',
          'Make the interface understandable without lengthy tutorials.',
        ],
      },
      {
        number: '03',
        eyebrow: 'Evaluation + testing',
        title: 'Specific usability findings shaped the second pass.',
        copy:
          'Heuristic evaluation and user testing identified concrete problems: favorites were hard to add or remove, the capacity slider was unclear, route details were inconsistent, and key actions needed better icons. Testers also preferred a lighter map and fewer notification options.',
        image: campusTesting,
        imageAlt: 'Campus Transit testing results with usability findings and participant feedback.',
        bullets: [
          'Replace percentage-style capacity controls with clearer rider counts.',
          'Present route name, status, capacity, and next stop consistently.',
          'Simplify notifications and strengthen map contrast.',
        ],
      },
      {
        number: '04',
        eyebrow: 'Final iteration',
        title: 'The final screens favor scanability and personal control.',
        copy:
          'The revised home screen foregrounds favorited routes and makes additional routes easy to add. The profile introduces ride statistics and light/dark preferences, while navigation and feedback screens use clearer hierarchy and fewer unnecessary choices.',
        image: campusNavigation,
        imageAlt: 'Campus Transit final navigation, preference, and feedback screens.',
        bullets: [
          'Favorited routes make repeat trips faster to check.',
          'A lighter map improves visibility of active route information.',
          'A simplified feedback flow keeps reporting direct and useful.',
        ],
      },
    ],
    outcome:
      'The final concept turns a dense transportation problem into a focused set of rider decisions: which route to take, when it arrives, whether it is delayed, and how full it is. Personalization supports repeat use without competing with the live trip information.',
    reflection:
      'The project showed how quickly convenience becomes clutter when every feature is placed on one screen. Evaluation and testing created a clearer hierarchy and helped the team simplify without removing the information riders valued.',
    prototype: {
      embedUrl: campusPrototypeEmbedUrl,
      url: campusPrototypeUrl,
      title: 'Interactive Campus Transit prototype',
    },
    next: { slug: 'h2go', title: 'H2Go' },
  },
};

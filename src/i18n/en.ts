export type Title = { pre: string; accent: string };
export type Quote = { text: string; name: string };
export type Qualification = { name: string; level: string };

export type Dict = {
  code: 'en' | 'fr' | 'es';
  name: string;
  meta: {
    home: { title: string; description: string };
    coaching: { title: string; description: string };
    about: { title: string; description: string };
    contact: { title: string; description: string };
  };
  nav: { home: string; coaching: string; about: string; contact: string; contactMe: string; openMenu: string; closeMenu: string; language: string };
  footer: { instagram: string; email: string; meta: string };
  home: {
    eyebrow: string; title: Title; lead: string; body: string; heroCta: string; secondary: string; where: string; heroAlt: string;
    marquee: string[];
    philosophy: { eyebrow: string; title: Title; lead: string; p1: string; p2: string };
    work: { eyebrow: string; title: Title };
    group: { title: string; lead: string; body: string; link: string };
    personal: { title: string; lead: string; body1: string; body2: string; link: string };
    events: { title: string; lead: string; body: string; link: string };
    expect: { eyebrow: string; title: Title; items: string[] };
    cta: { title: Title; body: string; where: string; button: string; instagram: string; email: string };
  };
  coaching: {
    eyebrow: string; title: Title; lead: string; body: string;
    sectionNav: { group: string; personal: string; quals: string; testimonials: string };
    group: { eyebrow: string; title: Title; body: string; photoAlt: string; specialtiesLabel: string; specialties: string[]; body2: string };
    oneClass: { title: Title; body: string; elementsLabel: string; elements: string[] };
    personal: { eyebrow: string; title: Title; p1: string; p2: string; avail: string; button: string; forLabel: string; forPeople: string[] };
    quals: { eyebrow: string; title: Title; items: Qualification[] };
    testimonials: { eyebrow: string; title: Title; quotes: Quote[] };
    cta: { title: Title; body: string; primary: string; secondary: string };
  };
  about: {
    eyebrow: string; title: Title; intro: string; quote: string; after: string; portraitAlt: string;
    story: { eyebrow: string; title: Title; photoAlt: string; sports: string[]; lead: string; p1: string; p2: string; tiles: { big: string; small: string }[] };
    again: { eyebrow: string; title: Title; p1: string; p2: string; lead: string; p3: string; photoAlt: string };
    becoming: { eyebrow: string; title: Title; p1: string; p2: string; p3: string };
    closing: { title: Title; button: string };
  };
  contact: {
    eyebrow: string; title: Title; body: string; where: string;
    emailLabel: string; emailValue: string; emailSubject: string; instagramLabel: string; note: string;
  };
};

const en: Dict = {
  code: 'en',
  name: 'English',
  meta: {
    home: {
      title: 'Eli del Toro · Strength, Hybrid Training & Pilates Sculpt Coach',
      description: 'Eli del Toro is a strength, hybrid training and Pilates Sculpt coach. In-person coaching on the French Riviera, online coaching and international events.',
    },
    coaching: {
      title: 'Coaching',
      description: 'Group coaching, personal coaching and special events with Eli del Toro. Strength, HIIT, Pilates Sculpt and personalized programming, in person on the French Riviera and online worldwide.',
    },
    about: {
      title: 'About',
      description: 'Eli del Toro was born in Mexico City, found refuge in sport, moved to France and turned her passion into a coaching career on the French Riviera.',
    },
    contact: {
      title: 'Contact',
      description: 'Get in touch with Eli del Toro for personal coaching, group classes or events. French Riviera, online and international.',
    },
  },
  nav: { home: 'Home', coaching: 'Coaching', about: 'About', contact: 'Contact', contactMe: 'Contact me', openMenu: 'Open menu', closeMenu: 'Close menu', language: 'Language' },
  footer: { instagram: 'Instagram', email: 'Email', meta: 'French Riviera · Online' },
  home: {
    eyebrow: 'Strength · Hybrid training · Pilates Sculpt',
    title: { pre: 'Push your', accent: 'limits.' },
    lead: 'I’m Eli del Toro, a strength, hybrid training and Pilates Sculpt coach.',
    body: 'I create challenging training experiences that combine technique, intensity, energy and music to help you feel stronger, build confidence and find a genuine balance between fitness and the rest of your life.',
    heroCta: 'Contact me',
    secondary: 'Discover my classes',
    where: 'In-person coaching on the French Riviera · online coaching · available for international events',
    heroAlt: 'Eli del Toro sitting on a white bench by the sea',
    marquee: ['Strength', 'Hybrid training', 'Pilates Sculpt', 'HIIT', 'French Riviera', 'Online'],
    philosophy: {
      eyebrow: 'My philosophy',
      title: { pre: 'Movement can help you', accent: 'live better.' },
      lead: 'My role is to guide you beyond your comfort zone, help you understand your body and discover abilities you may not have known you had.',
      p1: 'I want every session to challenge you, but I also want you to enjoy it—to develop strength, knowledge and skills, and carry that energy with you long after the workout is over.',
      p2: 'I believe training isn’t about chasing a stereotype or punishing your body. It’s about understanding it, developing its abilities and building a stronger, more balanced relationship with it.',
    },
    work: { eyebrow: 'How we can work together', title: { pre: 'Three ways to train\nwith', accent: 'Eli.' } },
    group: {
      title: 'Group coaching',
      lead: 'Strength, HIIT and Pilates Sculpt classes that combine technique, intensity, energy and music.',
      body: 'My sessions are challenging and adaptable to different fitness levels. Whether you’re just getting started or already have experience, my goal is to help you feel supported, move better and finish the session having pushed beyond your own limits.',
      link: 'Discover my classes',
    },
    personal: {
      title: 'Personal coaching',
      lead: 'In-person or online coaching adapted to your goals, experience and lifestyle.',
      body1: 'I work with people who want to build strength, feel better in their bodies or improve their performance in other sports. I also prepare clients for running events, competitions such as HYROX and Spartan, and other athletic challenges.',
      body2: 'The process includes programming, ongoing support, adjustments and education, so you understand what you’re doing and why you’re doing it.',
      link: 'Train with Eli',
    },
    events: {
      title: 'Classes and events',
      lead: 'Special sessions for studios, communities, events and brand collaborations.',
      body: 'I create group experiences in strength, conditioning, HIIT and Pilates Sculpt, adapted to the audience, space and purpose of each event. Sessions are available in English, French or Spanish.',
      link: 'Invite Eli',
    },
    expect: {
      eyebrow: 'What you can expect from me',
      title: { pre: 'High standards.', accent: 'No toxic fitness culture.' },
      items: [
        'Challenging workouts with options for different fitness levels.',
        'Clear technique and coaching cues.',
        'Purposeful programming with specific goals.',
        'Energy, motivation and connection.',
        'Strength that supports everyday life and athletic performance.',
        'High standards without toxic fitness culture.',
        'Coaching in English, French and Spanish.',
      ],
    },
    cta: {
      title: { pre: 'Shall we train', accent: 'together?' },
      body: 'Whether you’re looking for personal coaching, want to experience one of my classes or would like to invite me to your studio, event or collaboration, I’d love to hear from you.',
      where: 'Available on the French Riviera, online and for international events.',
      button: 'Contact me',
      instagram: 'Instagram',
      email: 'Email',
    },
  },
  coaching: {
    eyebrow: 'Coaching',
    title: { pre: 'Train with purpose.', accent: 'Push your limits.' },
    lead: 'Whether you are looking for fully personalized coaching or want to create a memorable experience for your studio, community or event, my coaching combines strength, technique, intensity and energy.',
    body: 'Every session has a purpose: to help you move better, develop your abilities and build confidence while enjoying the process.',
    sectionNav: { group: 'Group coaching', personal: 'Personal coaching', quals: 'Qualifications', testimonials: 'What my clients say' },
    group: {
      eyebrow: '01 · Group coaching',
      title: { pre: 'Collective energy.', accent: 'Individual progress.' },
      body: 'I lead challenging, adaptable group classes where every participant can work at their own level and progress safely.',
      photoAlt: 'Eli kneeling with a kettlebell under red studio light',
      specialtiesLabel: 'My current specialties include',
      specialties: ['Strength and conditioning', 'HIIT and circuit training', 'Full-body, lower-body, upper-body and core training', 'Pilates Sculpt', 'Sculpt & Burn', 'Hot Pilates'],
      body2: 'Every class combines challenge, music and motivation. My priority is to bring the group’s energy together, support every participant and make sure everyone finishes feeling strong, accomplished and proud of what they achieved.',
    },
    oneClass: {
      title: { pre: 'One class,', accent: 'different possibilities.' },
      body: 'I adapt movements, load, tempo and complexity according to each participant’s experience and abilities.',
      elementsLabel: 'The four essential elements of every class',
      elements: ['Technique', 'Safety', 'Connection', 'Motivation'],
    },
    personal: {
      eyebrow: '02 · Personal coaching',
      title: { pre: 'A plan built', accent: 'around you.' },
      p1: 'I do not use generic training plans. Your program is designed around your goals, experience, training history, availability, injuries and individual needs.',
      p2: 'Coaching is available through individual sessions, monthly packages and personalized online programming.',
      avail: 'Available in person on the French Riviera\nand online worldwide.',
      button: 'Apply for personal coaching',
      forLabel: 'Personal coaching is for people who want to',
      forPeople: [
        'Start training with a clear structure.',
        'Build strength.',
        'Develop consistency.',
        'Regain confidence in their body.',
        'Prepare physically for a race.',
        'Complement running, cycling or another sport.',
        'Prepare for challenges such as HYROX or Spartan.',
        'Improve performance while maintaining balance in their life.',
      ],
    },
    quals: {
      eyebrow: '03 · Qualifications',
      title: { pre: 'Certified, registered,', accent: 'trilingual.' },
      items: [
        { name: 'Nordic Certified Personal Trainer', level: 'EQF Level 4' },
        { name: 'EREPS Registered Personal Trainer', level: 'EQF Level 4' },
        { name: 'Nordic Fitness Instructor', level: 'EQF Level 3' },
        { name: 'TBM Sculpt & Burn Certified', level: '' },
        { name: 'Coaching available in English, Spanish and French', level: 'EN · ES · FR' },
      ],
    },
    testimonials: {
      eyebrow: '04 · What my clients say',
      title: { pre: 'In their', accent: 'words.' },
      quotes: [
        {
          text: '“Training with Eli has been an excellent experience. From the beginning, she has demonstrated her ability as a coach by preparing every workout according to my goals and consistently following my progress. After several months, the results have been extremely positive. I have improved my fitness, strength and performance, but most importantly, I have learned to train with greater structure and purpose. Her preparation, attention and support make a real difference throughout the process. I completely recommend her.”',
          name: 'Luis',
        },
        {
          text: '“Thanks to Eli’s support, I feel much more energetic and, most importantly, I have seen real changes. She is passionate about what she does, highly professional and approachable, and she has taught me how to find balance while leading a more active and healthy life.”',
          name: 'Amanda',
        },
      ],
    },
    cta: {
      title: { pre: 'How do you want to push your', accent: 'limits?' },
      body: 'Whether through personal coaching, a group class or a special event, we can find the right way to work together.',
      primary: 'Apply for personal coaching',
      secondary: 'Invite Eli to your studio or event',
    },
  },
  about: {
    eyebrow: 'About',
    title: { pre: 'Energy has always been my', accent: 'signature.' },
    intro: 'When I was little, I came home from school and said:',
    quote: '“Mom, do you know what? I’m yellow.”',
    after: 'Even then, yellow represented light, happiness and energy to me. Today, that same energy is what I bring into every space, every connection and every class I lead.',
    portraitAlt: 'Eli smiling and flexing on a white bench by the sea',
    story: {
      eyebrow: 'Mexico City',
      title: { pre: 'Movement shaped', accent: 'my story.' },
      photoAlt: 'Eli doing a push-up on a kettlebell under red light',
      sports: ['Volleyball', 'Boxing', 'Strength training', 'Indoor cycling'],
      lead: 'I was born in Mexico City and grew up practicing volleyball, boxing, strength training and indoor cycling.',
      p1: 'When I lost my father at 15, sport became my refuge. It gave me structure, strength and a way to keep moving forward.',
      p2: 'My relationship with exercise was not always balanced. For years, I focused on how my body looked instead of everything it could do. Over time, I learned to value it for its strength and abilities—for allowing me to complete a HYROX, run races and play three volleyball matches in one day.',
      tiles: [
        { big: 'HYROX', small: 'completed' },
        { big: 'Races', small: 'run' },
        { big: '3 matches', small: 'in one day' },
      ],
    },
    again: {
      eyebrow: 'France · three years ago',
      title: { pre: 'Starting', accent: 'again.' },
      p1: 'Before becoming a coach, I studied Business Administration and worked in customer experience and logistics. That experience taught me how to listen, understand people and build genuine relationships.',
      p2: 'Three years ago, I moved to France and had to rebuild my professional life in a different culture and a third language.',
      lead: 'I chose to turn my passion for sport into a profession.',
      p3: 'Building a career as an immigrant has challenged my confidence and persistence, but it has also taught me that many of our limits are the ones we place upon ourselves.',
      photoAlt: 'Eli laughing in a side plank on a bench above the sea',
    },
    becoming: {
      eyebrow: 'Today',
      title: { pre: 'The coach I am', accent: 'becoming.' },
      p1: 'I bring my energy, music, passion and knowledge into every class. I adapt to the people in front of me without losing who I am.',
      p2: 'My goal is not simply to lead a workout. I want people to understand their bodies, develop strength, enjoy movement and leave feeling capable of more than they believed.',
      p3: 'I continue to learn through every course, every class and every person I coach. I am building an international career with curiosity, humility and persistence.',
    },
    closing: { title: { pre: 'The universe has no limits—', accent: 'and neither do I.' }, button: 'Push your limits with me' },
  },
  contact: {
    eyebrow: 'Contact',
    title: { pre: 'Let’s', accent: 'talk.' },
    body: 'Whether you’re looking for personal coaching, want to experience one of my classes or would like to invite me to your studio, event or collaboration, I’d love to hear from you.',
    where: 'French Riviera · Online · International events\nEnglish · Français · Español',
    emailLabel: 'Email',
    emailValue: 'Send me an email',
    emailSubject: 'Hello Eli',
    instagramLabel: 'Instagram',
    note: 'The email button opens your mail app directly.',
  },
};

export default en;

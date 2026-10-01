import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function createProjectVisuals() {
  const assetsDir = path.resolve('public/assets');

  // 1. Psalms Visual (06-psalms-project-visual.png)
  const psalmsSvg = `
  <svg width="1000" height="750" viewBox="0 0 1000 750" xmlns="http://www.w3.org/2000/svg">
    <rect width="1000" height="750" fill="#F7F6F2"/>
    
    <!-- Open Book on Left -->
    <g transform="translate(60, 100) rotate(-6)">
      <!-- Book shadow & cover -->
      <rect x="0" y="0" width="380" height="520" rx="4" fill="#0D1F36" opacity="0.9"/>
      <!-- Pages thickness -->
      <rect x="12" y="8" width="370" height="505" rx="3" fill="#EAE6DA"/>
      <!-- Page face -->
      <rect x="18" y="12" width="358" height="495" rx="2" fill="#FAF8F2"/>
      
      <text x="50" y="70" font-family="Georgia, serif" font-size="24" font-weight="bold" fill="#142B4A">Psalm 23</text>
      
      <text x="50" y="115" font-family="Georgia, serif" font-size="13" line-height="1.6" fill="#2C3E50">
        <tspan x="50" dy="0">The Lord is my shepherd;</tspan>
        <tspan x="50" dy="22">I shall not want.</tspan>
        <tspan x="50" dy="22">He maketh me to lie down in green pastures:</tspan>
        <tspan x="50" dy="22">he leadeth me beside the still waters.</tspan>
        <tspan x="50" dy="22">He restoreth my soul:</tspan>
        <tspan x="50" dy="22">he leadeth me in the paths of righteousness</tspan>
        <tspan x="50" dy="22">for his name's sake.</tspan>
        
        <tspan x="50" dy="36">Yea, though I walk through the valley</tspan>
        <tspan x="50" dy="22">of the shadow of death, I will fear no evil:</tspan>
        <tspan x="50" dy="22">for thou art with me;</tspan>
        <tspan x="50" dy="22">thy rod and thy staff they comfort me.</tspan>
      </text>
    </g>

    <!-- Arrow 1 -->
    <path d="M 440,320 L 490,320 M 480,314 L 492,320 L 480,326" fill="none" stroke="#7A8CA6" stroke-width="1.8"/>

    <!-- Center Extracted Text Block -->
    <g transform="translate(515, 230)">
      <rect x="0" y="0" width="220" height="200" rx="3" fill="#FFFFFF" stroke="#E2E0D8" stroke-width="1"/>
      <text x="18" y="32" font-family="'Space Grotesk', -apple-system, sans-serif" font-size="10.5" fill="#142B4A" font-weight="500">
        <tspan x="18" dy="0">The Lord is my shepherd;</tspan>
        <tspan x="18" dy="17">I shall not want.</tspan>
        <tspan x="18" dy="17">He maketh me to lie down</tspan>
        <tspan x="18" dy="17">in green pastures: he leadeth</tspan>
        <tspan x="18" dy="17">me beside the still waters.</tspan>
        <tspan x="18" dy="17">He restoreth my soul: he leadeth</tspan>
        <tspan x="18" dy="17">me in the paths of righteousness</tspan>
        <tspan x="18" dy="17">for his name's sake.</tspan>
      </text>
    </g>

    <!-- Arrow 2 -->
    <path d="M 750,320 L 795,320 M 785,314 L 797,320 L 785,326" fill="none" stroke="#7A8CA6" stroke-width="1.8"/>

    <!-- Right Audio & Waveform UI -->
    <g transform="translate(815, 280)">
      <circle cx="28" cy="40" r="22" fill="#142B4A"/>
      <polygon points="23,31 38,40 23,49" fill="#FFFFFF"/>
      
      <!-- Waveform lines -->
      <g transform="translate(65, 20)">
        <line x1="0" y1="18" x2="0" y2="22" stroke="#142B4A" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="6" y1="14" x2="6" y2="26" stroke="#142B4A" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="12" y1="8" x2="12" y2="32" stroke="#142B4A" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="18" y1="2" x2="18" y2="38" stroke="#142B4A" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="24" y1="10" x2="24" y2="30" stroke="#142B4A" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="30" y1="6" x2="30" y2="34" stroke="#142B4A" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="36" y1="14" x2="36" y2="26" stroke="#142B4A" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="42" y1="18" x2="42" y2="22" stroke="#142B4A" stroke-width="2.5" stroke-linecap="round"/>
      </g>
      
      <line x1="65" y1="42" x2="140" y2="42" stroke="#142B4A" stroke-width="1.8"/>
      <text x="145" y="45" font-family="'Space Grotesk', sans-serif" font-size="11" fill="#142B4A" font-weight="600">1:24</text>
    </g>

    <!-- Headphones Icon/Graphic in lower right -->
    <g transform="translate(730, 480)">
      <path d="M 40,160 A 80,80 0 0,1 200,160" fill="none" stroke="#1A202C" stroke-width="14" stroke-linecap="round"/>
      <rect x="25" y="145" width="30" height="65" rx="14" fill="#2D3748"/>
      <rect x="185" y="145" width="30" height="65" rx="14" fill="#2D3748"/>
    </g>
  </svg>
  `;

  // 2. Talk More Pay Less Visual (07-Talk-more-pay-less-project-visual.jpg)
  const tmplSvg = `
  <svg width="1000" height="600" viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg">
    <rect width="1000" height="600" fill="#F7F6F2"/>

    <!-- Left Titles -->
    <g transform="translate(70, 110)">
      <text x="0" y="0" font-family="'Space Grotesk', sans-serif" font-size="14" font-weight="bold" fill="#7A8CA6" letter-spacing="0.1em">02 —</text>
      <text x="0" y="55" font-family="'Space Grotesk', sans-serif" font-size="44" font-weight="bold" fill="#142B4A" letter-spacing="-0.02em">
        <tspan x="0" dy="0">TALK MORE,</tspan>
        <tspan x="0" dy="54">PAY LESS</tspan>
      </text>
      
      <text x="0" y="175" font-family="'Space Grotesk', sans-serif" font-size="12" font-weight="600" fill="#557392" letter-spacing="0.14em">
        EXPLORING COMMUNICATION
      </text>
      <text x="0" y="195" font-family="'Space Grotesk', sans-serif" font-size="12" font-weight="600" fill="#557392" letter-spacing="0.14em">
        ON WEAK NETWORKS
      </text>

      <text x="0" y="250" font-family="'Space Grotesk', sans-serif" font-size="11" font-weight="600" fill="#7A8CA6" letter-spacing="0.18em">
        RESEARCH / CONCEPT
      </text>
    </g>

    <!-- Speech bubble & packets -->
    <g transform="translate(480, 210)">
      <!-- Dark Navy Chat Bubble -->
      <rect x="0" y="0" width="220" height="110" rx="16" fill="#142B4A"/>
      <text x="24" y="50" font-family="'Inter', sans-serif" font-size="15" fill="#FFFFFF" font-weight="400">Hey, are you there?</text>
      <text x="165" y="90" font-family="'Space Grotesk', sans-serif" font-size="12" fill="#A1B2C4">10:24</text>

      <!-- Fading Packet Blocks -->
      <g fill="#142B4A">
        <rect x="235" y="20" width="28" height="6" rx="2" opacity="0.9"/>
        <rect x="275" y="20" width="22" height="6" rx="2" opacity="0.65"/>
        <rect x="310" y="20" width="16" height="6" rx="2" opacity="0.35"/>
        
        <rect x="235" y="42" width="20" height="6" rx="2" opacity="0.85"/>
        <rect x="265" y="42" width="18" height="6" rx="2" opacity="0.5"/>
        <rect x="295" y="42" width="24" height="6" rx="2" opacity="0.25"/>

        <rect x="235" y="64" width="30" height="6" rx="2" opacity="0.9"/>
        <rect x="275" y="64" width="16" height="6" rx="2" opacity="0.6"/>
        <rect x="305" y="64" width="20" height="6" rx="2" opacity="0.3"/>

        <rect x="235" y="86" width="24" height="6" rx="2" opacity="0.8"/>
        <rect x="270" y="86" width="26" height="6" rx="2" opacity="0.5"/>
        <rect x="310" y="86" width="14" height="6" rx="2" opacity="0.2"/>
      </g>

      <!-- Thin dividing line -->
      <line x1="355" y1="-30" x2="355" y2="150" stroke="#7A8CA6" stroke-width="1.2" opacity="0.7"/>

      <!-- Cell Signal Bars -->
      <g transform="translate(380, 45)">
        <rect x="0" y="35" width="8" height="25" rx="2" fill="#142B4A"/>
        <rect x="14" y="22" width="8" height="38" rx="2" fill="#142B4A"/>
        <rect x="28" y="10" width="8" height="50" rx="2" fill="#CBD5E0"/>
        <rect x="42" y="0" width="8" height="60" rx="2" fill="#E2E8F0"/>
      </g>
    </g>
  </svg>
  `;

  // 3. Critical Thinking Visual (08-Critical-thinking-project-visual.png)
  const criticalThinkingSvg = `
  <svg width="1000" height="700" viewBox="0 0 1000 700" xmlns="http://www.w3.org/2000/svg">
    <rect width="1000" height="700" fill="#F7F6F2"/>

    <!-- Left Header Info -->
    <g transform="translate(60, 80)">
      <text x="0" y="0" font-family="'Space Grotesk', sans-serif" font-size="14" font-weight="bold" fill="#7A8CA6">04 —</text>
      <text x="0" y="55" font-family="Georgia, serif" font-size="44" font-weight="bold" fill="#142B4A" letter-spacing="-0.02em">
        Critical Thinking<tspan x="0" dy="50">Study</tspan>
      </text>
      <text x="0" y="145" font-family="'Space Grotesk', sans-serif" font-size="12" font-weight="600" fill="#7A8CA6" letter-spacing="0.14em">
        INDEPENDENT STUDY
      </text>
    </g>

    <!-- Notebook & Pen on far left -->
    <g transform="translate(40, 280)">
      <rect x="0" y="0" width="160" height="340" rx="6" fill="#1B2B3E" stroke="#0F1B2B" stroke-width="2"/>
      <rect x="175" y="40" width="14" height="240" rx="7" fill="#111111"/>
      <polygon points="175,280 182,305 189,280" fill="#718096"/>
    </g>

    <!-- Center/Right Stacked Research Paper -->
    <g transform="translate(290, 80)">
      <!-- Back Page -->
      <rect x="25" y="15" width="480" height="540" rx="3" fill="#EAE6DA" transform="rotate(3, 260, 280)"/>
      
      <!-- Front White Page -->
      <rect x="0" y="0" width="480" height="550" rx="3" fill="#FFFFFF" stroke="#E2E0D8" stroke-width="1" filter="drop-shadow(0px 8px 16px rgba(0,0,0,0.06))"/>
      
      <text x="40" y="50" font-family="'Space Grotesk', sans-serif" font-size="18" font-weight="bold" fill="#142B4A">1. Introduction</text>
      <text x="40" y="85" font-family="'Inter', sans-serif" font-size="11" line-height="1.6" fill="#2D3748">
        <tspan x="40" dy="0">In an age of rapid information flow and increasing complexity,</tspan>
        <tspan x="40" dy="18">critical thinking has become more than just a useful skill—</tspan>
        <tspan x="40" dy="18">it is a necessary one. It enables individuals to evaluate information,</tspan>
        <tspan x="40" dy="18">question assumptions, and make reasoned decisions, even in the</tspan>
        <tspan x="40" dy="18">face of uncertainty. This paper examines the role of critical thinking</tspan>
        <tspan x="40" dy="18">in education, with a focus on its practical applications and long-term</tspan>
        <tspan x="40" dy="18">value in both academic and real-world contexts.</tspan>
      </text>

      <text x="40" y="240" font-family="'Space Grotesk', sans-serif" font-size="18" font-weight="bold" fill="#142B4A">2. The Case for Critical Thinking</text>
      
      <!-- Yellow highlight box behind text -->
      <rect x="40" y="288" width="370" height="42" fill="#FEF08A" opacity="0.6" rx="2"/>

      <text x="40" y="275" font-family="'Inter', sans-serif" font-size="11" line-height="1.6" fill="#2D3748">
        <tspan x="40" dy="0">Critical thinking is not simply about being skeptical; it is about</tspan>
        <tspan x="40" dy="18">being thoughtful. It involves analyzing information, considering</tspan>
        <tspan x="40" dy="18">multiple perspectives, and recognizing bias. In education, it</tspan>
        <tspan x="40" dy="18">helps learners go beyond memorization and develop a deeper</tspan>
        <tspan x="40" dy="18">understanding of the subject matter. In everyday life, it supports</tspan>
        <tspan x="40" dy="18">better problem-solving, more informed choices, and greater</tspan>
        <tspan x="40" dy="18">adaptability in a changing world.</tspan>
      </text>

      <!-- Handwritten note -->
      <path d="M 425,305 C 445,310 460,320 455,335" fill="none" stroke="#2B6CB0" stroke-width="1.4"/>
      <polygon points="423,303 430,307 427,313" fill="#2B6CB0"/>
      <text x="465" y="325" font-family="'Newsreader', cursive, serif" font-size="13" font-style="italic" fill="#2B6CB0">
        <tspan x="465" dy="0">More emphasis</tspan>
        <tspan x="465" dy="16">on real-world</tspan>
        <tspan x="465" dy="16">application?</tspan>
      </text>
    </g>
  </svg>
  `;

  // Write files using sharp
  await sharp(Buffer.from(psalmsSvg)).png().toFile(path.join(assetsDir, '06-psalms-project-visual.png'));
  await sharp(Buffer.from(psalmsSvg)).png().toFile(path.join(assetsDir, '06-psalms-project-visual.PNG'));

  await sharp(Buffer.from(tmplSvg)).jpeg({ quality: 92 }).toFile(path.join(assetsDir, '07-Talk-more-pay-less-project-visual.jpg'));

  await sharp(Buffer.from(criticalThinkingSvg)).png().toFile(path.join(assetsDir, '08-Critical-thinking-project-visual.png'));
  await sharp(Buffer.from(criticalThinkingSvg)).png().toFile(path.join(assetsDir, '08-Critical-thinking-project-visual.PNG'));

  // Also ensure gentleSEE_logo_smooth.svg exists in public/assets
  if (fs.existsSync(path.join(assetsDir, '04-gentleSEE-wordmark.svg'))) {
    fs.copyFileSync(
      path.join(assetsDir, '04-gentleSEE-wordmark.svg'),
      path.join(assetsDir, 'gentleSEE_logo_smooth.svg')
    );
  }

  console.log("Successfully generated all project visuals!");
}

createProjectVisuals().catch(console.error);

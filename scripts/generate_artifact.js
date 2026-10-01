import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function generateArtifact() {
  const svgContent = `
  <svg width="1400" height="1120" viewBox="0 0 1400 1120" xmlns="http://www.w3.org/2000/svg">
    <rect width="1400" height="1120" fill="#FFFFFF"/>
    <g transform="translate(100, 100)" font-family="Arial, Helvetica, sans-serif" fill="#111111">
      <text x="0" y="70" font-size="72" font-weight="bold">1. Introduction</text>
      
      <text x="0" y="160" font-size="30" line-height="1.5">
        <tspan x="0" dy="0">Critical Thinking is often described as essential for personal, social and economic development</tspan>
        <tspan x="0" dy="48">because it helps people evaluate, solve problems, make decisions and avoid manipulation.</tspan>
        <tspan x="0" dy="48">Yet research shows that highly educated people frequently struggle to think critically. Here is</tspan>
        <tspan x="0" dy="48">something worth thinking about. We go to school for years; we read books; we write essays;</tspan>
        <tspan x="0" dy="48">and we pass exams. We earn certificates and degrees yet after all that, most of us still struggle</tspan>
        <tspan x="0" dy="48">to think clearly, carefully and honestly about the world around us. Education alone does not</tspan>
        <tspan x="0" dy="48">automatically produce critical thinkers. This is not an insult. It is a genuine puzzle. The inability</tspan>
        <tspan x="0" dy="48">to think critically isn't a flaw in intelligence — it's a result of evolutionary cognitive shortcuts,</tspan>
        <tspan x="0" dy="48">nurtured in cultural/educational norms, and the value for knowledge of source being replaced</tspan>
        <tspan x="0" dy="48">by who has more credentials. If education is supposed to sharpen the mind, why do many</tspan>
        <tspan x="0" dy="48">educated people still fall for bad arguments,hold beliefs they've never examined, and resist</tspan>
        <tspan x="0" dy="48">changing their minds even when the evidence is against them? That puzzle is what this essay is</tspan>
        <tspan x="0" dy="48">about. The answer, as we'll see, is both surprising and deeply important.This paper argues that</tspan>
        <tspan x="0" dy="48">Institutional conditioning is the primary explanation, and that using incentives to reverse</tspan>
        <tspan x="0" dy="48">conditioned behaviour offers the most viable solution..</tspan>
      </text>

      <text x="0" y="930" font-size="72" font-weight="bold">2. The Case for Critical Thinking</text>
      
      <text x="0" y="1010" font-size="30">
        <tspan x="0" dy="0">Some scholars and critics argue that critical thinking is needed to foster development by</tspan>
        <tspan x="0" dy="48">showing us our weaknesses and strengths.They categorize its benefits into three fields (all interrelated):</tspan>
      </text>
    </g>
  </svg>
  `;

  const outDir = path.resolve('public/assets');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  await sharp(Buffer.from(svgContent))
    .png()
    .toFile(path.join(outDir, '04-critical-thinking-artifact.png'));

  console.log("Successfully generated public/assets/04-critical-thinking-artifact.png");
}

generateArtifact().catch(console.error);

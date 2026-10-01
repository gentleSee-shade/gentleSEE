import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generatePaper() {
  const pdfDoc = await PDFDocument.create();
  const timesRoman = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const timesBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);

  const pagesContent = [
    {
      title: "Why Do Educated People Fail to Think Critically?",
      subtitle: "Institutional Conditioning and Incentive Reforms",
      body: [
        { type: "h1", text: "1. Introduction" },
        { type: "p", text: "Critical Thinking is often described as essential for personal, social and economic development because it helps people evaluate, solve problems, make decisions and avoid manipulation. Yet research shows that highly educated people frequently struggle to think critically. Here is something worth thinking about. We go to school for years; we read books; we write essays; and we pass exams. We earn certificates and degrees yet after all that, most of us still struggle to think clearly, carefully and honestly about the world around us. Education alone does not automatically produce critical thinkers. This is not an insult. It is a genuine puzzle." },
        { type: "p", text: "The inability to think critically isn't a flaw in intelligence — it's a result of evolutionary cognitive shortcuts, nurtured in cultural/educational norms, and the value for knowledge of source being replaced by who has more credentials. If education is supposed to sharpen the mind, why do many educated people still fall for bad arguments, hold beliefs they've never examined, and resist changing their minds even when the evidence is against them? That puzzle is what this essay is about. The answer, as we'll see, is both surprising and deeply important. This paper argues that Institutional conditioning is the primary explanation, and that using incentives to reverse conditioned behaviour offers the most viable solution." },
        { type: "h1", text: "2. The Case for Critical Thinking" },
        { type: "p", text: "Some scholars and critics argue that critical thinking is needed to foster development by showing us our weaknesses and strengths. They categorize its benefits into three fields (all interrelated):" },
        { type: "bullet", text: "• Socio-Economic Development" },
        { type: "bullet", text: "• Democratic Resilience" },
        { type: "bullet", text: "• Human Flourishing" },
        { type: "p", text: "A pioneer in reflective thinking, John Dewey (1910) argued that reflective thinking, the active, careful consideration of any belief in light of the grounds that support it, is the main mechanism that drives both individual growth and democratic citizenship. His words, the value of reflective thinking lies in its ability to maintain that state of doubt and carry on a systematic and protracted inquiry, denote that, we don't have to just accept whatever comes our way but we are to question it in the light of no bias and it emphasizes that it is necessary to think about the future and regulate it." }
      ]
    },
    {
      body: [
        { type: "p", text: "reason through consequences is, by Dewey's account, a society vulnerable to manipulation and stagnation. We have to learn how to think for ourselves so as to remedy stagnation and step into development, therefore the need for education in thinking. Siegel (1988) extends this further, contending that the very purpose of education is to produce individuals capable of acting on the basis of reason rather than habit, emotion, or social pressure." },
        { type: "p", text: "So in a sense critical thinking is needed to make decisions, but do all decisions need critical thinking? Ennis (1996) affirms the need for critical thinking and why there should be its education and his words—Not all decisions are so significant, but if they matter at all, and we want to make the best decision, then critical thinking is important— also emphasises that not all decisions need the structured process of critical thinking some just require us to be creative. This is even more troubling and therefore begs the question, if it is so important, what stops a normal person from thinking critically?" },
        { type: "h1", text: "3. Cognitive and Psychological Barriers" },
        { type: "p", text: "Daniel Kahneman (2011) describes the mind as operating through two systems, 1 and 2. System 1 (S1) is the natural, unconscious side of humans, hence we use it unconsciously. It is the default mode which relies on little energy and tends to be fast, being efficient for everyday activities its counterpart System 2 (S2) requires careful deliberation and also consciously doing it. The use of S1 is an evolutionary trait that we've been subject to and failed to balance with S2 because we never needed it. In the past, cavemen were hunters before gradually growing sentient." },
        { type: "p", text: "They would go into the wild to chase and hunt deer, and that required honed instinct since they often had to avoid the death traps of other predators while being one themselves. It would be inefficient for the hunter to reason the most logical approach on how to hunt a deer. The deer would've been long gone by the time he arrived at the decision. S2 is very mentally and time consuming so our predecessors chose otherwise and we carry the same habit even to this day. Yes, it can be a very draining activity in the moment, but with constant practice becomes normal and easy, Ennis (1996) says." },
        { type: "h2", text: "Confirmation Bias" },
        { type: "p", text: "Confirmation bias is that in a person to confirm what they already believe and dismiss what contradicts it (Keith Stanovich, 2010). It is a bias to believe. It narrows options to what we believe is right. It's effortless and should help us make decisions by eliminating bothersome options, so why are we saying it's a problem? Let's go back to the politician example. The politician is mismanaging funds and he says he would make roads and he shows us roads he built in the past as proof of execution and just because we want to believe that he's helping build the country and also because we've wired ourselves to support his political party, we don't think to question." }
      ]
    },
    {
      body: [
        { type: "p", text: "understanding a statement begins with an automatic attempt to believe it for a more effortful S2 to unbelieve it. So as it stands, the people don't understand the entirety of the situation because of confirmation bias. This can be carried to the Dunning-Kruger effect." },
        { type: "h2", text: "The Dunning-Kruger Effect" },
        { type: "p", text: "Here people in a domain tend to overestimate their understanding of it. This effect has been proven and supported by Kruger & Dunning (1999) and Keith Stanovich (2010) respectively. The latter's study showed that the bottom 25% of scores on a logic test believed, on average, that they were in the 62nd percentile. Even the lowest scorers thought they were above average. It was found that the brain tends to thwart efforts to introspect one's beliefs of superiority and right which leads to the aforementioned biases." },
        { type: "p", text: "His later research in 2013 presented the Myside bias (Stanovich et al., 2013) where the mind recognises fault in others but fails in self-introspection. It leads to instances where due to overconfidence people confuse arguments presented to them. Kahneman (2011, p.121) gave peculiar instances where people would substitute for instance when debating on how financial advisors who prey on elders be punished would, with their biases, lean towards 'how much anger do I feel when I think of financial predators?' If System 1 thinking is the default, then institutions and incentive structures that reward fast, comfortable answers over slow, effortful ones will naturally produce populations that don't think critically — regardless of how many years they spend in school." },
        { type: "h1", text: "SECTION 4: EDUCATIONAL & SOCIAL BARRIERS" },
        { type: "p", text: "Educational systems are the institutions established to school citizens and serve as a manufacturer of the society of the future. Views on the mode of transmission have been split into Standard Paradigm (SP) and Reflective Paradigm (RP). SP exists when people are classified according to who knows and who doesn't whereas RP proposes education should be the result of a teacher-guided community of inquiry—it is to stir up curiosity. Unfortunately, education's purpose has been defeated since only SP exists." },
        { type: "p", text: "Lipman (2003), agrees with the above, arguing that education, specifically on critical thinking, must be made deliberate through inquiry, not assumed to occur naturally. Dewey (1910) had earlier on represented this, arguing that a person can't be considered educated if they only carry knowledge and can't think reflectively. This can be traced to the institutions who conditioned the SP upon us. It is the result of authority deference, social conformity and echo chambers developed from rote learning." }
      ]
    },
    {
      body: [
        { type: "h2", text: "Authority Deference" },
        { type: "p", text: "Here, the responsibility of analysing premises and claims are left to the seniors and authority, claiming that it's their role. In the SP, the teacher plays an authoritative role as a leader and the students are considered to be thinking only if they learn exactly what they've been taught. Lipman (2003) says that students are rewarded when their curious mind is limited. Their grades are pushed up and they are hailed as brilliant but they confuse indoctrination as efficiency." },
        { type: "h2", text: "Social Conformity and Echo Chambers" },
        { type: "p", text: "Siegel's (1988) account on Thomas Kuhn argues that textbooks may be systematically misleading about the history of science to facilitate more effective indoctrination into the current dominant view. Drawing from this highlights social conformity and echo chambers where social structures actively foster sociocentric thinking: individuals uncritically internalize the dominant prejudices and group norms of their culture." },
        { type: "h1", text: "SECTION 5: WHY EDUCATION DOESN'T GUARANTEE CRITICAL THINKING" },
        { type: "h2", text: "The Paradox of the Educated Nonthinker" },
        { type: "p", text: "The combination of psychological biases and structural social barriers explains the profound paradox of the educated nonthinker. Highly educated professionals frequently apply sound logic, empirical standards, and analytical tools within their narrow technical or professional domains, yet completely fail to emotional heuristics, tribal alignment, and System 1 thinking on political, theological, or social topics. Research by Dan Kahan et al. (2012) demonstrates that individuals with high scientific and quantitative literacy often use their cognitive skills to invent sophisticated explanations for their pre-existing political or cultural identities, a phenomenon known as identity-protective cognition." },
        { type: "h2", text: "Credentialism vs. Intellectual Humility" },
        { type: "p", text: "This dynamic reveals that modern higher education prioritizes credentialism over the cultivation of intellectual humility. Carol S. Dweck (2006) highlights that a 'fixed mindset'—believing that intelligence and talent are static traits—causes individuals to avoid intellectual challenges and hide flaws to preserve their appearance of absolute competence. Credentialism refers to the tendency to judge competence primarily by academic qualifications." }
      ]
    },
    {
      body: [
        { type: "p", text: "Robert Ennis (1996) demonstrates that specific domain knowledge, for instance memorizing organic chemistry formulas or financial algorithms, does not naturally transfer into a generalized ability to evaluate everyday arguments or spot logical fallacies in public discourse. Advanced university degrees can thus fuel cognitive arrogance, causing individuals to assume their expertise in one narrow field validates their opinions on entirely unrelated topics, creating highly credentialed individuals who lack the basic capacity for objective self-correction." },
        { type: "h1", text: "SECTION 6: PATHWAYS FORWARD" },
        { type: "p", text: "Because critical thinking is essential yet difficult, societies must take deliberate steps to cultivate it. Solutions must address psychological, educational, social, and cultural barriers simultaneously." },
        { type: "h2", text: "Educational Reforms" },
        { type: "p", text: "To dismantle the critical thinking paradox, society must implement comprehensive educational and institutional reforms. Ennis (1996) strongly advocates that instructions on critical thinking should be treated as a standalone discipline. Lipman (2003) champions converting traditional classrooms into 'communities of inquiry' using the Socratic method, where students engage in disciplined, dialogical peer interaction, question core assumptions, and evaluate arguments collaboratively." },
        { type: "h2", text: "Media and Information Literacy" },
        { type: "p", text: "In the digital era, individuals must learn how to evaluate sources, verify claims, distinguish fact from opinion, and detect misinformation. Media literacy equips citizens to navigate information responsibly and reduces vulnerability to manipulation and echo chambers." },
        { type: "h2", text: "Societal and Institutional Shifts" },
        { type: "p", text: "Beyond classroom walls, reversing systemic irrationality requires structural changes across societal and digital domains. Applying Dweck's (2006) growth mindset model on a societal scale means shifting praise away from static credentials and rewarding the open process of learning, deep inquiry, and intellectual resilience." }
      ]
    },
    {
      body: [
        { type: "h1", text: "7. Conclusion" },
        { type: "p", text: "Does gaining formal education mean one is capable of thinking critically? Is the ability to know the same as the ability to discern? Critical thinking doesn't automatically show up just because someone goes to school. It's tough, and doesn't come naturally to most people. Educated people can still think uncritically — schooling hands out technical know-how but skips how our minds take shortcuts or lean on social pressure. To grow as thinkers, we need to change how we teach: more focus on intellectual humility and real reflection, not just collecting degrees." },
        { type: "p", text: "Therefore, the thesis finally proposes that to build a sustainable democracy and foster true human flourishing, educational institutions must abandon the outdated assumption that logical reasoning is automatic, a natural byproduct of literacy and degree completion. Instead, educational and societal systems must be geared towards a deliberate instruction in formal logic, implement Socratic cultures across all learning levels, and foster a lifelong growth mindset that values constant evaluation of evidence more than the defensive preservation of intellectual status. Only by transforming critical thinking from a passive educational byproduct into an explicit, humility-centered discipline can society hope to overcome its overdue conflict, achieve true intellectual autonomy and wield its fruits of development." }
      ]
    },
    {
      body: [
        { type: "h1", text: "Reference List" },
        { type: "bullet", text: "• Dewey, J. (1910). How We Think. D.C. Heath & Co." },
        { type: "bullet", text: "• Dweck, C. S. (2006). Mindset: The New Psychology of Success. Random House." },
        { type: "bullet", text: "• Ennis, R. H. (1996). Critical Thinking. Prentice Hall." },
        { type: "bullet", text: "• Kahneman, D. (2011). Thinking, Fast and Slow. Farrar, Straus and Giroux." },
        { type: "bullet", text: "• Kruger, J., & Dunning, D. (1999). Unskilled and unaware of it. Journal of Personality and Social Psychology." },
        { type: "bullet", text: "• Lipman, M. (2003). Thinking in Education. Cambridge University Press." },
        { type: "bullet", text: "• Siegel, H. (1988). Educating Reason: Rationality, Critical Thinking, and Education. Routledge." },
        { type: "bullet", text: "• Kahan, D. M., Peters, E., Wittlin, M., Slovic, P., Ouellette, L. L., Braman, D., & Mandel, G. (2012). The polarizing impact of science literacy and numeracy on perceived climate change risks." },
        { type: "bullet", text: "• Stanovich, K. E. (2010). What intelligence tests miss. / Stanovich, K. E., West, R. F., & Toplak, M. E. (2013). Myside bias work." }
      ]
    }
  ];

  for (let pageIdx = 0; pageIdx < pagesContent.length; pageIdx++) {
    const pData = pagesContent[pageIdx];
    const page = pdfDoc.addPage([595.28, 841.89]); // A4
    const { width, height } = page.getSize();
    let cursorY = height - 60;
    const margin = 54;
    const contentWidth = width - margin * 2;

    if (pData.title) {
      page.drawText(pData.title, {
        x: margin,
        y: cursorY,
        size: 18,
        font: timesBold,
        color: rgb(0.05, 0.1, 0.2)
      });
      cursorY -= 24;
    }

    if (pData.subtitle) {
      page.drawText(pData.subtitle, {
        x: margin,
        y: cursorY,
        size: 12,
        font: timesRoman,
        color: rgb(0.3, 0.35, 0.45)
      });
      cursorY -= 30;
    }

    for (const item of pData.body) {
      if (item.type === "h1") {
        cursorY -= 12;
        page.drawText(item.text, {
          x: margin,
          y: cursorY,
          size: 14,
          font: timesBold,
          color: rgb(0.1, 0.15, 0.25)
        });
        cursorY -= 20;
      } else if (item.type === "h2") {
        cursorY -= 8;
        page.drawText(item.text, {
          x: margin,
          y: cursorY,
          size: 12,
          font: timesBold,
          color: rgb(0.15, 0.2, 0.3)
        });
        cursorY -= 18;
      } else {
        // Wrap text
        const words = item.text.split(" ");
        let line = "";
        const fontSize = 10.5;
        const lineHeight = 15;
        const font = timesRoman;

        for (const w of words) {
          const testLine = line ? `${line} ${w}` : w;
          const textWidth = font.widthOfTextAtSize(testLine, fontSize);
          if (textWidth > contentWidth && line.length > 0) {
            page.drawText(line, {
              x: margin + (item.type === "bullet" ? 10 : 0),
              y: cursorY,
              size: fontSize,
              font: font,
              color: rgb(0.12, 0.12, 0.12)
            });
            cursorY -= lineHeight;
            line = w;
          } else {
            line = testLine;
          }
        }
        if (line) {
          page.drawText(line, {
            x: margin + (item.type === "bullet" ? 10 : 0),
            y: cursorY,
            size: fontSize,
            font: font,
            color: rgb(0.12, 0.12, 0.12)
          });
          cursorY -= lineHeight + 6;
        }
      }
    }

    // Page footer
    page.drawText(`Page ${pageIdx + 1} of 7`, {
      x: width / 2 - 20,
      y: 35,
      size: 9,
      font: timesRoman,
      color: rgb(0.5, 0.5, 0.5)
    });
  }

  const pdfBytes = await pdfDoc.save();
  const outDir = path.resolve('public/assets');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  fs.writeFileSync(path.join(outDir, 'critical-thinking-paper.pdf'), pdfBytes);
  console.log("Successfully generated public/assets/critical-thinking-paper.pdf");
}

generatePaper().catch(console.error);

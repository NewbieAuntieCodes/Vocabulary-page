import React from 'react';

// --- SVG Illustrations for Topics and Words ---

// FIX: Converted to React.createElement to be valid in a .ts file.
const ColorsTopicIllustration: React.FC = () => React.createElement('svg', { width: "120", height: "80", viewBox: "0 0 120 80", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('rect', { width: "120", height: "80", rx: "12", fill: "url(#paint_palette)" }), React.createElement('circle', { cx: "35", cy: "30", r: "10", fill: "#E74C3C", stroke: "white", strokeWidth: "2" }), React.createElement('circle', { cx: "60", cy: "25", r: "12", fill: "#3498DB", stroke: "white", strokeWidth: "2" }), React.createElement('circle', { cx: "85", cy: "30", r: "10", fill: "#F1C40F", stroke: "white", strokeWidth: "2" }), React.createElement('circle', { cx: "45", cy: "55", r: "12", fill: "#2ECC71", stroke: "white", strokeWidth: "2" }), React.createElement('circle', { cx: "75", cy: "55", r: "12", fill: "#9B59B6", stroke: "white", strokeWidth: "2" }), React.createElement('defs', null, React.createElement('linearGradient', { id: "paint_palette", x1: "0", y1: "0", x2: "120", y2: "80", gradientUnits: "userSpaceOnUse" }, React.createElement('stop', { stopColor: "#F0F3FF" }), React.createElement('stop', { offset: "1", stopColor: "#E2E8FF" }))));
// FIX: Converted to React.createElement to be valid in a .ts file.
const NumbersTopicIllustration: React.FC = () => React.createElement('svg', { width: "120", height: "80", viewBox: "0 0 120 80", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('rect', { width: "120", height: "80", rx: "12", fill: "#FFF9E6" }), React.createElement('text', { x: "25", y: "55", fontFamily: "sans-serif", fontSize: "40", fill: "#FFAB00", fontWeight: "bold" }, "1"), React.createElement('text', { x: "50", y: "55", fontFamily: "sans-serif", fontSize: "40", fill: "#FFAB00", fontWeight: "bold" }, "2"), React.createElement('text', { x: "75", y: "55", fontFamily: "sans-serif", fontSize: "40", fill: "#FFAB00", fontWeight: "bold" }, "3"));
const DaysTopicIllustration: React.FC = () => React.createElement('svg', { width: "120", height: "80", viewBox: "0 0 120 80", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('rect', { x: "0.5", y: "0.5", width: "119", height: "79", rx: "11.5", fill: "#E9F8F1", stroke: "#D4F1E4" }), React.createElement('rect', { x: "25", y: "20", width: "70", height: "10", rx: "2", fill: "#F56565" }), React.createElement('text', { x: "35", y: "55", fontFamily: "sans-serif", fontSize: "12", fill: "#4A5568" }, "MON"), React.createElement('text', { x: "60", y: "55", fontFamily: "sans-serif", fontSize: "12", fill: "#4A5568" }, "TUE"), React.createElement('text', { x: "85", y: "55", fontFamily: "sans-serif", fontSize: "12", fill: "#4A5568" }, "WED"));
const MonthsTopicIllustration: React.FC = () => React.createElement('svg', { width: "120", height: "80", viewBox: "0 0 120 80", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('rect', { width: "120", height: "80", rx: "12", fill: "#EBF4FF" }), React.createElement('path', { d: "M30 25H90V55H30V25Z", fill: "white", stroke: "#A3BFDB", strokeWidth: "2" }), React.createElement('path', { d: "M30 35H90", stroke: "#A3BFDB", strokeWidth: "2" }), React.createElement('text', { x: "60", y: "32", textAnchor: "middle", fontFamily: "sans-serif", fontSize: "10", fill: "#4299E1", fontWeight: "bold" }, "月份"));


// FIX: Converted to React.createElement to be valid in a .ts file.
const RedIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M50,90 C85,90 90,65 90,50 C90,25 75,10 50,10 C25,10 10,25 10,50 C10,65 15,90 50,90 Z", fill: "#E74C3C" }), React.createElement('path', { d: "M60 18 C 58 10, 52 8, 50 12 C 48 8, 42 10, 40 18", stroke: "#6D4C41", strokeWidth: "4", fill: "none", strokeLinecap: "round" }));
// FIX: Converted to React.createElement to be valid in a .ts file.
const BlueIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M50 10 C 20 50, 50 90, 50 90 C 50 90, 80 50, 50 10 Z", fill: "#3498DB" }));
// FIX: Converted to React.createElement to be valid in a .ts file.
const GreenIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M 50 90 C 10 90, 10 10, 50 10 C 90 10, 90 90, 50 90 Z M 50 90 C 60 70, 40 70, 50 10", fill: "#2ECC71" }), React.createElement('line', { x1: "50", y1: "90", x2: "50", y2: "98", stroke: "#6D4C41", strokeWidth: "4" }));
// FIX: Converted to React.createElement to be valid in a .ts file.
const YellowIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M 20 80 Q 50 40, 80 80 Q 60 85, 40 85 Z", fill: "#F1C40F" }));
// FIX: Converted to React.createElement to be valid in a .ts file.
const BlackIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M 50 90 C 40 80, 20 100, 20 60 C 20 20, 50 20, 50 40 C 50 20, 80 20, 80 60 C 80 100, 60 80, 50 90 Z M 45 35 A 5 5 0 0 1 40 30 M 55 35 A 5 5 0 0 0 60 30", fill: "#34495E" }));
// FIX: Converted to React.createElement to be valid in a .ts file.
const OrangeIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('circle', { cx: "50", cy: "60", r: "35", fill: "#E67E22" }), React.createElement('path', { d: "M 65 28 C 62 20, 58 22, 55 25", stroke: "#2ECC71", strokeWidth: "4", fill: "none", strokeLinecap: "round" }));
// FIX: Converted to React.createElement to be valid in a .ts file.
const PurpleIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('circle', { cx: "50", cy: "40", r: "12", fill: "#9B59B6" }), React.createElement('circle', { cx: "38", cy: "58", r: "12", fill: "#9B59B6" }), React.createElement('circle', { cx: "62", cy: "58", r: "12", fill: "#9B59B6" }), React.createElement('circle', { cx: "50", cy: "75", r: "12", fill: "#9B59B6" }), React.createElement('path', { d: "M 50 28 L 50 15 L 55 15", stroke: "#6D4C41", strokeWidth: "4", fill: "none" }));
// FIX: Converted to React.createElement to be valid in a .ts file.
const PinkIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M 50,30 C 20,0 0,30 50,70 C 100,30 80,0 50,30 Z", fill: "#F472B6" }));
// FIX: Converted to React.createElement to be valid in a .ts file.
const BrownIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('rect', { x: "20", y: "30", width: "60", height: "40", rx: "5", fill: "#8D6E63" }), React.createElement('line', { x1: "40", y1: "30", x2: "40", y2: "70", stroke: "#795548", strokeWidth: "2" }), React.createElement('line', { x1: "60", y1: "30", x2: "60", y2: "70", stroke: "#795548", strokeWidth: "2" }));
// FIX: Converted to React.createElement to be valid in a .ts file.
const GrayIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M 20 80 C 10 60, 30 40, 50 50 C 70 60, 90 80, 80 70 C 70 60, 40 90, 20 80 Z", fill: "#95A5A6" }));
// FIX: Converted to React.createElement to be valid in a .ts file.
const WhiteIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M 20 70 A 20 20 0 0 1 40 50 A 25 25 0 0 1 70 30 A 20 20 0 0 1 80 50 L 80 70 Z", fill: "#FFFFFF" }));

// FIX: Converted to React.createElement to be valid in a .ts file.
const ZeroIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('text', { x: "50", y: "70", textAnchor: "middle", fontSize: "60", fontWeight: "bold", fill: "#34495E" }, "0"));
// FIX: Converted to React.createElement to be valid in a .ts file.
const OneIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('text', { x: "50", y: "70", textAnchor: "middle", fontSize: "60", fontWeight: "bold", fill: "#34495E" }, "1"));
// FIX: Converted to React.createElement to be valid in a .ts file.
const TwoIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('text', { x: "50", y: "70", textAnchor: "middle", fontSize: "60", fontWeight: "bold", fill: "#34495E" }, "2"));
// FIX: Converted to React.createElement to be valid in a .ts file.
const ThreeIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('text', { x: "50", y: "70", textAnchor: "middle", fontSize: "60", fontWeight: "bold", fill: "#34495E" }, "3"));
// FIX: Converted to React.createElement to be valid in a .ts file.
const FourIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('text', { x: "50", y: "70", textAnchor: "middle", fontSize: "60", fontWeight: "bold", fill: "#34495E" }, "4"));
// FIX: Converted to React.createElement to be valid in a .ts file.
const FiveIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('text', { x: "50", y: "70", textAnchor: "middle", fontSize: "60", fontWeight: "bold", fill: "#34495E" }, "5"));
// FIX: Converted to React.createElement to be valid in a .ts file.
const SixIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('text', { x: "50", y: "70", textAnchor: "middle", fontSize: "60", fontWeight: "bold", fill: "#34495E" }, "6"));
// FIX: Converted to React.createElement to be valid in a .ts file.
const SevenIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('text', { x: "50", y: "70", textAnchor: "middle", fontSize: "60", fontWeight: "bold", fill: "#34495E" }, "7"));
// FIX: Converted to React.createElement to be valid in a .ts file.
const EightIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('text', { x: "50", y: "70", textAnchor: "middle", fontSize: "60", fontWeight: "bold", fill: "#34495E" }, "8"));
// FIX: Converted to React.createElement to be valid in a .ts file.
const NineIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('text', { x: "50", y: "70", textAnchor: "middle", fontSize: "60", fontWeight: "bold", fill: "#34495E" }, "9"));
// FIX: Converted to React.createElement to be valid in a .ts file.
const TenIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('text', { x: "50", y: "70", textAnchor: "middle", fontSize: "60", fontWeight: "bold", fill: "#34495E" }, "10"));
// FIX: Converted to React.createElement to be valid in a .ts file.
const ElevenIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('text', { x: "50", y: "70", textAnchor: "middle", fontSize: "60", fontWeight: "bold", fill: "#34495E" }, "11"));
// FIX: Converted to React.createElement to be valid in a .ts file.
const TwelveIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('text', { x: "50", y: "70", textAnchor: "middle", fontSize: "60", fontWeight: "bold", fill: "#34495E" }, "12"));

const DailyCalendarIllustration: React.FC<{ day: string, color: string }> = ({ day, color }) => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('rect', { x: "15", y: "15", width: "70", height: "70", rx: "8", fill: "#fff", stroke: "#ccc", strokeWidth: "2" }), React.createElement('rect', { x: "15", y: "15", width: "70", height: "20", rx: "8", ry: "8", fill: color }), React.createElement('circle', { cx: "25", cy: "25", r: "3", fill: "white" }), React.createElement('circle', { cx: "35", cy: "25", r: "3", fill: "white" }), React.createElement('text', { x: "50", y: "68", textAnchor: "middle", fontSize: "30", fontWeight: "bold", fill: "#34495E" }, day));
const MondayIllustration: React.FC = () => React.createElement(DailyCalendarIllustration, { day: 'Mon', color: '#E74C3C' });
const TuesdayIllustration: React.FC = () => React.createElement(DailyCalendarIllustration, { day: 'Tue', color: '#E67E22' });
const WednesdayIllustration: React.FC = () => React.createElement(DailyCalendarIllustration, { day: 'Wed', color: '#F1C40F' });
const ThursdayIllustration: React.FC = () => React.createElement(DailyCalendarIllustration, { day: 'Thu', color: '#2ECC71' });
const FridayIllustration: React.FC = () => React.createElement(DailyCalendarIllustration, { day: 'Fri', color: '#3498DB' });
const SaturdayIllustration: React.FC = () => React.createElement(DailyCalendarIllustration, { day: 'Sat', color: '#9B59B6' });
const SundayIllustration: React.FC = () => React.createElement(DailyCalendarIllustration, { day: 'Sun', color: '#34495E' });

const MonthlyCalendarIllustration: React.FC<{ month: string, day: string, icon: string, color: string }> = ({ month, day, icon, color }) => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('rect', { x: "10", y: "10", width: "80", height: "80", rx: "10", fill: "#fff", stroke: "#ddd", strokeWidth: "2" }), React.createElement('rect', { x: "10", y: "10", width: "80", height: "25", rx: "10", ry: "10", fill: color }), React.createElement('text', { x: "50", y: "28", textAnchor: "middle", fontSize: "14", fontWeight: "bold", fill: "#fff" }, month), React.createElement('text', { x: "50", y: "65", textAnchor: "middle", fontSize: "32", fontWeight: "bold", fill: "#34495E" }, day), React.createElement('text', { x: "78", y: "80", textAnchor: "end", fontSize: "18" }, icon));
const JanuaryIllustration: React.FC = () => React.createElement(MonthlyCalendarIllustration, { month: '一月', day: '1', icon: '❄️', color: '#3498DB' });
const FebruaryIllustration: React.FC = () => React.createElement(MonthlyCalendarIllustration, { month: '二月', day: '14', icon: '❤️', color: '#E91E63' });
const MarchIllustration: React.FC = () => React.createElement(MonthlyCalendarIllustration, { month: '三月', day: '17', icon: '🍀', color: '#2ECC71' });
const AprilIllustration: React.FC = () => React.createElement(MonthlyCalendarIllustration, { month: '四月', day: '1', icon: '🌧️', color: '#5DADE2' });
const MayIllustration: React.FC = () => React.createElement(MonthlyCalendarIllustration, { month: '五月', day: '5', icon: '🌸', color: '#F472B6' });
const JuneIllustration: React.FC = () => React.createElement(MonthlyCalendarIllustration, { month: '六月', day: '21', icon: '☀️', color: '#F1C40F' });
const JulyIllustration: React.FC = () => React.createElement(MonthlyCalendarIllustration, { month: '七月', day: '4', icon: '🎆', color: '#E74C3C' });
const AugustIllustration: React.FC = () => React.createElement(MonthlyCalendarIllustration, { month: '八月', day: '15', icon: '🏖️', color: '#F39C12' });
const SeptemberIllustration: React.FC = () => React.createElement(MonthlyCalendarIllustration, { month: '九月', day: '22', icon: '🍂', color: '#E67E22' });
const OctoberIllustration: React.FC = () => React.createElement(MonthlyCalendarIllustration, { month: '十月', day: '31', icon: '🎃', color: '#D35400' });
const NovemberIllustration: React.FC = () => React.createElement(MonthlyCalendarIllustration, { month: '十一月', day: '25', icon: '🦃', color: '#8D6E63' });
const DecemberIllustration: React.FC = () => React.createElement(MonthlyCalendarIllustration, { month: '十二月', day: '25', icon: '🎄', color: '#27AE60' });

export interface Word {
  word: string;
  phonetic: string;
  definition: string;
  example: string;
  illustration?: React.FC;
}

export interface WordList {
  id: string;
  title: string;
  description: string;
  words: Word[];
  illustration: React.FC;
  theme: 'learn' | 'practice' | 'games';
}

export interface AnalysisData {
    text: string;
    type: 'vocab' | 'phrase' | 'sentence';
    explanation: string;
}

export interface AnswerVersion {
    score: string;
    answer: string | string[];
    analysis?: AnalysisData[];
}

export interface QASample {
    question: string;
    versions: AnswerVersion[];
}

export interface CueCardData {
    id: string;
    title: string;
    category: string;
    categoryClass: 'person-card' | 'event-card' | 'place-card' | 'object-card';
    status?: 'New';
    part1Questions?: string[];
    part2Title?: string;
    part2Description?: string;
    part2Prompts?: string[];
    part3Questions?: string[];
    sampleAnswers?: QASample[];
    isNew?: boolean;
}

export interface TopicData {
  id: string;
  title: string;
  cards: CueCardData[];
  isNew?: boolean;
}

export const wordLists: WordList[] = [
  {
    id: 'colors-1',
    title: '基础颜色 (Basic Colors)',
    description: '学习最常见的颜色名称。',
    illustration: ColorsTopicIllustration,
    theme: 'learn',
    words: [
      { word: 'red', phonetic: '/red/', definition: '红色', example: 'An apple is red.', illustration: RedIllustration },
      { word: 'blue', phonetic: '/bluː/', definition: '蓝色', example: 'The sky is blue.', illustration: BlueIllustration },
      { word: 'green', phonetic: '/ɡriːn/', definition: '绿色', example: 'The grass is green.', illustration: GreenIllustration },
      { word: 'yellow', phonetic: '/ˈjeloʊ/', definition: '黄色', example: 'A banana is yellow.', illustration: YellowIllustration },
      { word: 'black', phonetic: '/blæk/', definition: '黑色', example: 'The cat is black.', illustration: BlackIllustration },
      { word: 'white', phonetic: '/waɪt/', definition: '白色', example: 'The snow is white.', illustration: WhiteIllustration },
      { word: 'orange', phonetic: '/ˈɔːrɪndʒ/', definition: '橙色', example: 'A carrot is orange.', illustration: OrangeIllustration },
      { word: 'purple', phonetic: '/ˈpɜːrpəl/', definition: '紫色', example: 'Grapes can be purple.', illustration: PurpleIllustration },
      { word: 'pink', phonetic: '/pɪŋk/', definition: '粉色', example: 'Some flowers are pink.', illustration: PinkIllustration },
      { word: 'brown', phonetic: '/braʊn/', definition: '棕色', example: 'The bear is brown.', illustration: BrownIllustration },
      { word: 'gray', phonetic: '/ɡreɪ/', definition: '灰色', example: 'The rock is gray.', illustration: GrayIllustration },
    ],
  },
  {
    id: 'numbers-0-12',
    title: '数字 0-12 (Numbers 0-12)',
    description: '学习从零到十二的数字。',
    illustration: NumbersTopicIllustration,
    theme: 'learn',
    words: [
      { word: 'zero', phonetic: '/ˈzɪroʊ/', definition: '零', example: 'The temperature is zero degrees.', illustration: ZeroIllustration },
      { word: 'one', phonetic: '/wʌn/', definition: '一', example: 'I have one dog.', illustration: OneIllustration },
      { word: 'two', phonetic: '/tuː/', definition: '二', example: 'She has two cats.', illustration: TwoIllustration },
      { word: 'three', phonetic: '/θriː/', definition: '三', example: 'There are three books.', illustration: ThreeIllustration },
      { word: 'four', phonetic: '/fɔːr/', definition: '四', example: 'He is four years old.', illustration: FourIllustration },
      { word: 'five', phonetic: '/faɪv/', definition: '五', example: 'A star has five points.', illustration: FiveIllustration },
      { word: 'six', phonetic: '/sɪks/', definition: '六', example: 'There are six apples.', illustration: SixIllustration },
      { word: 'seven', phonetic: '/ˈsevən/', definition: '七', example: 'A week has seven days.', illustration: SevenIllustration },
      { word: 'eight', phonetic: '/eɪt/', definition: '八', example: 'An octopus has eight arms.', illustration: EightIllustration },
      { word: 'nine', phonetic: '/naɪn/', definition: '九', example: 'A cat is said to have nine lives.', illustration: NineIllustration },
      { word: 'ten', phonetic: '/ten/', definition: '十', example: 'I have ten fingers.', illustration: TenIllustration },
      { word: 'eleven', phonetic: '/ɪˈlevən/', definition: '十一', example: 'The team has eleven players.', illustration: ElevenIllustration },
      { word: 'twelve', phonetic: '/twelv/', definition: '十二', example: 'There are twelve months in a year.', illustration: TwelveIllustration },
    ],
  },
  {
    id: 'days-of-week',
    title: '星期 (Days of the Week)',
    description: '学习从周一到周日的单词。',
    illustration: DaysTopicIllustration,
    theme: 'learn',
    words: [
        { word: 'Monday', phonetic: '/ˈmʌndeɪ/', definition: '星期一', example: 'The week starts on Monday.', illustration: MondayIllustration },
        { word: 'Tuesday', phonetic: '/ˈtuːzdeɪ/', definition: '星期二', example: 'We have a meeting on Tuesday.', illustration: TuesdayIllustration },
        { word: 'Wednesday', phonetic: '/ˈwenzdeɪ/', definition: '星期三', example: 'Wednesday is the middle of the week.', illustration: WednesdayIllustration },
        { word: 'Thursday', phonetic: '/ˈθɜːrzdeɪ/', definition: '星期四', example: 'Let\'s go out on Thursday.', illustration: ThursdayIllustration },
        { word: 'Friday', phonetic: '/ˈfraɪdeɪ/', definition: '星期五', example: 'I love Fridays!', illustration: FridayIllustration },
        { word: 'Saturday', phonetic: '/ˈsætərdeɪ/', definition: '星期六', example: 'Saturday is part of the weekend.', illustration: SaturdayIllustration },
        { word: 'Sunday', phonetic: '/ˈsʌndeɪ/', definition: '星期日', example: 'Sunday is a day of rest.', illustration: SundayIllustration },
    ],
  },
  {
    id: 'months-of-year',
    title: '月份 (Months of the Year)',
    description: '学习从一月到十二月的单词。',
    illustration: MonthsTopicIllustration,
    theme: 'learn',
    words: [
        { word: 'January', phonetic: '/ˈdʒænjueri/', definition: '一月', example: 'New Year\'s Day is in January.', illustration: JanuaryIllustration },
        { word: 'February', phonetic: '/ˈfebrueri/', definition: '二月', example: 'Valentine\'s Day is in February.', illustration: FebruaryIllustration },
        { word: 'March', phonetic: '/mɑːrtʃ/', definition: '三月', example: 'Spring begins in March.', illustration: MarchIllustration },
        { word: 'April', phonetic: '/ˈeɪprəl/', definition: '四月', example: 'April showers bring May flowers.', illustration: AprilIllustration },
        { word: 'May', phonetic: '/meɪ/', definition: '五月', example: 'My birthday is in May.', illustration: MayIllustration },
        { word: 'June', phonetic: '/dʒuːn/', definition: '六月', example: 'Summer starts in June.', illustration: JuneIllustration },
        { word: 'July', phonetic: '/dʒʊˈlaɪ/', definition: '七月', example: 'It is very hot in July.', illustration: JulyIllustration },
        { word: 'August', phonetic: '/ˈɔːɡəst/', definition: '八月', example: 'We go on vacation in August.', illustration: AugustIllustration },
        { word: 'September', phonetic: '/sepˈtembər/', definition: '九月', example: 'School starts in September.', illustration: SeptemberIllustration },
        { word: 'October', phonetic: '/ɑːkˈtoʊbər/', definition: '十月', example: 'Halloween is in October.', illustration: OctoberIllustration },
        { word: 'November', phonetic: '/noʊˈvembər/', definition: '十一月', example: 'Thanksgiving is in November.', illustration: NovemberIllustration },
        { word: 'December', phonetic: '/dɪˈsembər/', definition: '十二月', example: 'Christmas is in December.', illustration: DecemberIllustration },
    ],
  },
];

export const initialPart1Data: TopicData[] = [
    {
        id: 'box-topic-1',
        title: '话题: Work & Study',
        cards: [
            {
                id: 'card-1',
                title: 'Work',
                category: '人物题',
                categoryClass: 'person-card',
                status: 'New',
                part1Questions: [
                    'Do you work or are you a student?',
                    'What do you like about your job?',
                    'What do you find challenging about your work?',
                ],
                sampleAnswers: [
                    {
                        question: 'What do you like about your job?',
                        versions: [
                            {
                                score: '5.5',
                                answer: "I like my job because I can meet many people. It's interesting. I can learn new things.",
                                analysis: [
                                    { text: "meet many people", type: 'phrase', explanation: "A simple but relevant reason." },
                                ]
                            },
                            {
                                score: '7.0',
                                answer: "The most rewarding aspect of my job is definitely the opportunity to collaborate with a diverse team. It's incredibly stimulating to exchange ideas and learn from my colleagues' different perspectives.",
                                analysis: [
                                    { text: "rewarding aspect", type: 'vocab', explanation: "Good vocabulary for expressing positive points." },
                                    { text: "collaborate with a diverse team", type: 'phrase', explanation: "A well-phrased expression for teamwork." },
                                    { text: "incredibly stimulating", type: 'phrase', explanation: "Strong collocation to describe the experience." },
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

export const initialPart2Data: TopicData[] = [
    {
        id: 'box-topic-p2-1',
        title: '话题: People',
        cards: [
            {
                id: 'card-p2-1',
                title: 'Describe a person you admire',
                category: '人物题',
                categoryClass: 'person-card',
                status: 'New',
                part2Title: 'Describe a person you admire.',
                part2Description: 'You should say:',
                part2Prompts: [
                    'who this person is',
                    'how you know them',
                    'what qualities this person has',
                    'and explain why you admire them.'
                ],
                part3Questions: [
                    'What qualities do leaders have?',
                    'Do you think celebrities are good role models?',
                ]
            }
        ]
    }
];
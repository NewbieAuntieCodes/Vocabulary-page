import React from 'react';

// --- SVG Illustrations for Topics and Words ---

// FIX: Converted to React.createElement to be valid in a .ts file.
const ColorsTopicIllustration: React.FC = () => React.createElement('svg', { width: "120", height: "80", viewBox: "0 0 120 80", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('rect', { width: "120", height: "80", rx: "12", fill: "url(#paint_palette)" }), React.createElement('circle', { cx: "35", cy: "30", r: "10", fill: "#E74C3C", stroke: "white", strokeWidth: "2" }), React.createElement('circle', { cx: "60", cy: "25", r: "12", fill: "#3498DB", stroke: "white", strokeWidth: "2" }), React.createElement('circle', { cx: "85", cy: "30", r: "10", fill: "#F1C40F", stroke: "white", strokeWidth: "2" }), React.createElement('circle', { cx: "45", cy: "55", r: "12", fill: "#2ECC71", stroke: "white", strokeWidth: "2" }), React.createElement('circle', { cx: "75", cy: "55", r: "12", fill: "#9B59B6", stroke: "white", strokeWidth: "2" }), React.createElement('defs', null, React.createElement('linearGradient', { id: "paint_palette", x1: "0", y1: "0", x2: "120", y2: "80", gradientUnits: "userSpaceOnUse" }, React.createElement('stop', { stopColor: "#F0F3FF" }), React.createElement('stop', { offset: "1", stopColor: "#E2E8FF" }))));
// FIX: Converted to React.createElement to be valid in a .ts file.
const NumbersTopicIllustration: React.FC = () => React.createElement('svg', { width: "120", height: "80", viewBox: "0 0 120 80", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('rect', { width: "120", height: "80", rx: "12", fill: "#FFF9E6" }), React.createElement('text', { x: "25", y: "55", fontFamily: "sans-serif", fontSize: "40", fill: "#FFAB00", fontWeight: "bold" }, "1"), React.createElement('text', { x: "50", y: "55", fontFamily: "sans-serif", fontSize: "40", fill: "#FFAB00", fontWeight: "bold" }, "2"), React.createElement('text', { x: "75", y: "55", fontFamily: "sans-serif", fontSize: "40", fill: "#FFAB00", fontWeight: "bold" }, "3"));
const DaysTopicIllustration: React.FC = () => React.createElement('svg', { width: "120", height: "80", viewBox: "0 0 120 80", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('rect', { x: "0.5", y: "0.5", width: "119", height: "79", rx: "11.5", fill: "#E9F8F1", stroke: "#D4F1E4" }), React.createElement('rect', { x: "25", y: "20", width: "70", height: "10", rx: "2", fill: "#F56565" }), React.createElement('text', { x: "35", y: "55", fontFamily: "sans-serif", fontSize: "12", fill: "#4A5568" }, "MON"), React.createElement('text', { x: "60", y: "55", fontFamily: "sans-serif", fontSize: "12", fill: "#4A5568" }, "TUE"), React.createElement('text', { x: "85", y: "55", fontFamily: "sans-serif", fontSize: "12", fill: "#4A5568" }, "WED"));
const MonthsTopicIllustration: React.FC = () => React.createElement('svg', { width: "120", height: "80", viewBox: "0 0 120 80", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('rect', { width: "120", height: "80", rx: "12", fill: "#EBF4FF" }), React.createElement('path', { d: "M30 25H90V55H30V25Z", fill: "white", stroke: "#A3BFDB", strokeWidth: "2" }), React.createElement('path', { d: "M30 35H90", stroke: "#A3BFDB", strokeWidth: "2" }), React.createElement('text', { x: "60", y: "32", textAnchor: "middle", fontFamily: "sans-serif", fontSize: "10", fill: "#4299E1", fontWeight: "bold" }, "月份"));
const FruitsTopicIllustration: React.FC = () => React.createElement('svg', { width: "120", height: "80", viewBox: "0 0 120 80", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('rect', { width: "120", height: "80", rx: "12", fill: "#F1FEE7" }), React.createElement('path', { d: "M30 45 C 20 45, 25 25, 30 25 C 35 25, 40 45, 30 45 Z", fill: "#E74C3C" }), React.createElement('path', { d: "M55 30 C 50 20, 65 20, 60 30 C 70 50, 45 50, 55 30 Z", fill: "#F1C40F" }), React.createElement('circle', { cx: "85", cy: "35", r: "12", fill: "#E67E22" }), React.createElement('path', { d: "M70 55 C 65 50, 75 50, 70 55 C 80 70, 60 70, 70 55 Z", fill: "#2ECC71" }));
const VegetablesTopicIllustration: React.FC = () => React.createElement('svg', { width: "120", height: "80", viewBox: "0 0 120 80", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('rect', { width: "120", height: "80", rx: "12", fill: "#F0FFF4" }), React.createElement('path', { d: "M30 60 L 40 40 L 50 60 Z", fill: "#F39C12" }), React.createElement('circle', { cx: "65", cy: "50", r: "15", fill: "#E74C3C" }), React.createElement('ellipse', { cx: "85", cy: "55", rx: "10", ry: "20", fill: "#8E44AD" }));
const FoodTopicIllustration: React.FC = () => React.createElement('svg', { width: "120", height: "80", viewBox: "0 0 120 80", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('rect', { width: "120", height: "80", rx: "12", fill: "#FEF4E8" }), React.createElement('path', { d: "M25 55 L 45 30 L 65 55 Z", fill: "#F39C12" }), React.createElement('rect', { x: "55", y: "45", width: "40", height: "8", rx: "4", fill: "#D2B48C" }), React.createElement('rect', { x: "55", y: "35", width: "40", height: "8", rx: "4", fill: "#E67E22" }));
const DrinksTopicIllustration: React.FC = () => React.createElement('svg', { width: "120", height: "80", viewBox: "0 0 120 80", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('rect', { width: "120", height: "80", rx: "12", fill: "#E8F8FF" }), React.createElement('path', { d: "M25 60 L 35 25 H 55 L 65 60 Z", fill: "white", stroke: "#A3BFDB", strokeWidth: "2" }), React.createElement('path', { d: "M70 50 C 65 40, 85 40, 80 50 L 95 60 H 60 Z", fill: "#D2B48C" }));
const ClothesTopicIllustration: React.FC = () => React.createElement('svg', { width: "120", height: "80", viewBox: "0 0 120 80", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('rect', { width: "120", height: "80", rx: "12", fill: "#FEEEEE" }), React.createElement('path', { d: "M25 30 L 20 40 L 40 40 L 25 30 Z M 30 40 V 60 H 50 V 40 H 30", fill: "#3498DB" }), React.createElement('path', { d: "M65 60 V 30 H 85 L 85 60", fill: "#34495E" }));
const FurnitureTopicIllustration: React.FC = () => React.createElement('svg', { width: "120", height: "80", viewBox: "0 0 120 80", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('rect', { width: "120", height: "80", rx: "12", fill: "#F8F3E8" }), React.createElement('rect', { x: "20", y: "40", width: "50", height: "10", fill: "#8D6E63" }), React.createElement('rect', { x: "30", y: "50", width: "5", height: "15", fill: "#8D6E63" }), React.createElement('rect', { x: "55", y: "50", width: "5", height: "15", fill: "#8D6E63" }), React.createElement('path', { d: "M80 30 L 85 20 H 95 L 100 30 Z M 90 30 V 50", stroke: "#F1C40F", strokeWidth: "4" }));
const TablewareTopicIllustration: React.FC = () => React.createElement('svg', { width: "120", height: "80", viewBox: "0 0 120 80", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('rect', { width: "120", height: "80", rx: "12", fill: "#F5F5F5" }), React.createElement('circle', { cx: "60", cy: "40", r: "25", fill: "white", stroke: "#E0E0E0", strokeWidth: "2" }), React.createElement('path', { d: "M30 50 L 30 20 L 35 20 V 50", fill: "#BDBDBD" }), React.createElement('path', { d: "M90 50 L 90 20 L 85 20 V 50", fill: "#BDBDBD" }));
const StationeryTopicIllustration: React.FC = () => React.createElement('svg', { width: "120", height: "80", viewBox: "0 0 120 80", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('rect', { width: "120", height: "80", rx: "12", fill: "#E8F0FE" }), React.createElement('rect', { x: "25", y: "30", width: "50", height: "10", fill: "#F9A825" }), React.createElement('path', { d: "M80 25 L 80 55 L 75 55", stroke: "#42A5F5", strokeWidth: "4" }));


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

const CherryIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M40 20 C 50 10, 60 10, 70 20", stroke: "#2ECC71", strokeWidth: "4", fill: "none" }), React.createElement('circle', { cx: "35", cy: "45", r: "15", fill: "#E74C3C" }), React.createElement('circle', { cx: "75", cy: "45", r: "15", fill: "#E74C3C" }));
const BananaIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M 20 80 Q 50 20, 80 70 Q 70 90, 30 90 Z", fill: "#F1C40F" }));
const StrawberryIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M50 20 C 20 20, 20 60, 50 90 C 80 60, 80 20, 50 20 Z", fill: "#E74C3C" }), React.createElement('path', { d: "M40 15 L 50 25 L 60 15 Z", fill: "#2ECC71" }), React.createElement('circle', { cx: "40", cy: "50", r: "2", fill: "yellow" }), React.createElement('circle', { cx: "60", cy: "50", r: "2", fill: "yellow" }), React.createElement('circle', { cx: "50", cy: "65", r: "2", fill: "yellow" }));
const PearIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M50 90 C 20 90, 25 50, 50 20 C 75 50, 80 90, 50 90 Z", fill: "#D4E157" }), React.createElement('line', { x1: "50", y1: "20", x2: "55", y2: "10", stroke: "#6D4C41", strokeWidth: "4" }));
const MangoIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M40 80 C 10 70, 20 20, 60 20 C 90 30, 80 80, 40 80 Z", fill: "#FFC107" }));
const WatermelonIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M10 80 A 40 40 0 0 1 90 80 Z", fill: "#2ECC71" }), React.createElement('path', { d: "M15 80 A 35 35 0 0 1 85 80 Z", fill: "#E74C3C" }), React.createElement('circle', { cx: "35", cy: "70", r: "3", fill: "black" }), React.createElement('circle', { cx: "50", cy: "60", r: "3", fill: "black" }), React.createElement('circle', { cx: "65", cy: "70", r: "3", fill: "black" }));
const PeachIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('circle', { cx: "50", cy: "60", r: "35", fill: "#FFCDD2" }), React.createElement('path', { d: "M50 25 C 60 30, 60 40, 50 40", stroke: "#E57373", fill: "none", strokeWidth: "4" }));
const KiwiIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('ellipse', { cx: "50", cy: "60", rx: "35", ry: "25", fill: "#8D6E63" }), React.createElement('ellipse', { cx: "50", cy: "60", rx: "30", ry: "20", fill: "#AED581" }), React.createElement('ellipse', { cx: "50", cy: "60", rx: "10", ry: "5", fill: "white" }));
const LemonIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('ellipse', { cx: "50", cy: "60", rx: "40", ry: "25", fill: "#F1C40F" }));
const LitchiIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('circle', { cx: "50", cy: "60", r: "30", fill: "#EF5350" }), React.createElement('circle', { cx: "40", cy: "50", r: "3", fill: "#D32F2F" }), React.createElement('circle', { cx: "60", cy: "50", r: "3", fill: "#D32F2F" }), React.createElement('circle', { cx: "50", cy: "70", r: "3", fill: "#D32F2F" }));

const PotatoIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('ellipse', { cx: "50", cy: "60", rx: "35", ry: "25", fill: "#D2B48C" }));
const TomatoIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('circle', { cx: "50", cy: "60", r: "35", fill: "#E74C3C" }), React.createElement('path', { d: "M50 25 L 55 35 L 45 35 Z", fill: "#2ECC71" }));
const CucumberIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('ellipse', { cx: "50", cy: "60", rx: "40", ry: "15", fill: "#27AE60" }));
const GarlicIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M50 90 C 30 90, 20 60, 30 40 C 40 20, 60 20, 70 40 C 80 60, 70 90, 50 90 Z", fill: "#F8F9F9" }));
const PeasIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M20 60 Q 50 40, 80 60 Q 50 80, 20 60 Z", fill: "#58D68D" }), React.createElement('circle', { cx: "35", cy: "60", r: "5", fill: "#2ECC71" }), React.createElement('circle', { cx: "50", cy: "60", r: "5", fill: "#2ECC71" }), React.createElement('circle', { cx: "65", cy: "60", r: "5", fill: "#2ECC71" }));
const PepperIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M50 90 C 20 90, 20 50, 40 40 C 40 30, 60 30, 60 40 C 80 50, 80 90, 50 90 Z", fill: "#E74C3C" }), React.createElement('line', { x1: "50", y1: "40", x2: "50", y2: "20", stroke: "#2ECC71", strokeWidth: "6" }));
const OnionIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('circle', { cx: "50", cy: "65", r: "30", fill: "#9B59B6" }), React.createElement('path', { d: "M50 35 L 52 25 L 48 25 Z", fill: "#2ECC71" }));
const MushroomIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M20 60 A 30 30 0 0 1 80 60 Z", fill: "#D9BCAE" }), React.createElement('rect', { x: "40", y: "60", width: "20", height: "30", fill: "#F5EFEA" }));
const CornIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('ellipse', { cx: "50", cy: "60", rx: "20", ry: "35", fill: "#F1C40F" }), React.createElement('path', { d: "M50 25 L 30 95 L 40 95 Z", fill: "#2ECC71", opacity: "0.7" }), React.createElement('path', { d: "M50 25 L 70 95 L 60 95 Z", fill: "#2ECC71", opacity: "0.7" }));
const EggplantIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('ellipse', { cx: "50", cy: "65", rx: "25", ry: "35", fill: "#8E44AD" }), React.createElement('path', { d: "M40 30 L 60 30 L 50 20 Z", fill: "#2ECC71" }));
const CarrotIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M40 90 L 50 20 L 60 90 Z", fill: "#E67E22" }), React.createElement('path', { d: "M50 20 L 40 10 L 60 10 Z", fill: "#2ECC71" }));
const PumpkinIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('circle', { cx: "50", cy: "60", r: "35", fill: "#F39C12" }), React.createElement('path', { d: "M50 25 L 55 35 L 50 30 Z", fill: "#27AE60", stroke: "#27AE60", strokeWidth: "4" }));
const LettuceIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('circle', { cx: "50", cy: "60", r: "35", fill: "#ABEBC6" }), React.createElement('path', { d: "M30 60 C 40 40, 60 40, 70 60", fill: "none", stroke: "#58D68D", strokeWidth: "4" }));
const CabbageIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('circle', { cx: "50", cy: "60", r: "35", fill: "#82E0AA" }), React.createElement('path', { d: "M50 25 C 70 40, 70 80, 50 95", fill: "none", stroke: "#52BE80", strokeWidth: "4" }));

const PizzaIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M20 80 L 50 20 L 80 80 A 40 40 0 0 0 20 80 Z", fill: "#F39C12" }), React.createElement('circle', { cx: "40", cy: "60", r: "5", fill: "#E74C3C" }), React.createElement('circle', { cx: "60", cy: "65", r: "5", fill: "#E74C3C" }));
const CandyIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('ellipse', { cx: "50", cy: "50", rx: "20", ry: "15", fill: "#E74C3C" }), React.createElement('path', { d: "M30 50 L 10 40 L 15 60 Z", fill: "#E74C3C" }), React.createElement('path', { d: "M70 50 L 90 40 L 85 60 Z", fill: "#E74C3C" }));
const JellyIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M20 80 H 80 V 60 Q 50 40, 20 60 Z", fill: "#9B59B6" }));
const ChocolateIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('rect', { x: "20", y: "30", width: "60", height: "40", rx: "5", fill: "#6D4C41" }), React.createElement('line', { x1: "40", y1: "30", x2: "40", y2: "70", stroke: "#5D4037", strokeWidth: "2" }), React.createElement('line', { x1: "60", y1: "30", x2: "60", y2: "70", stroke: "#5D4037", strokeWidth: "2" }));
const HamburgerIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M20 50 A 30 10 0 0 1 80 50 Z", fill: "#D2B48C" }), React.createElement('rect', { x: "20", y: "50", width: "60", height: "10", fill: "#8D6E63" }), React.createElement('rect', { x: "20", y: "60", width: "60", height: "10", fill: "#D2B48C" }));
const IceCreamIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M40 90 L 50 40 L 60 90 Z", fill: "#F5DEB3" }), React.createElement('circle', { cx: "50", cy: "30", r: "20", fill: "#FFC0CB" }));
const MeatIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M20 60 C 40 40, 60 40, 80 60 C 70 80, 30 80, 20 60 Z", fill: "#A1887F" }), React.createElement('rect', { x: "15", y: "55", width: "10", height: "20", fill: "white" }));
const SaladIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M10 80 H 90 V 70 Q 50 50, 10 70 Z", fill: "#BDC3C7" }), React.createElement('circle', { cx: "50", cy: "50", r: "20", fill: "#2ECC71" }), React.createElement('circle', { cx: "35", cy: "60", r: "15", fill: "#ABEBC6" }));
const EggIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('circle', { cx: "50", cy: "60", r: "30", fill: "white" }), React.createElement('circle', { cx: "50", cy: "60", r: "15", fill: "#F1C40F" }));
const SandwichIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M20 70 L 50 30 L 80 70 Z", fill: "#F5DEB3" }), React.createElement('rect', { x: "25", y: "60", width: "50", height: "5", fill: "#2ECC71" }), React.createElement('rect', { x: "25", y: "55", width: "50", height: "5", fill: "#E74C3C" }));
const BreadIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M20 80 H 80 V 50 A 20 20 0 0 0 60 30 A 20 20 0 0 0 40 50 Z", fill: "#D2B48C" }));
const FishIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M20 50 C 40 30, 60 30, 80 50 C 60 70, 40 70, 20 50 Z M 80 50 L 90 40 L 90 60 Z", fill: "#5DADE2" }));
const CakeIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M20 80 H 80 V 50 L 50 30 Z", fill: "#FADBD8" }), React.createElement('rect', { x: "20", y: "60", width: "60", height: "5", fill: "#F5B7B1" }));
const RiceIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M20 80 H 80 V 60 Q 50 40, 20 60 Z", fill: "#ECF0F1" }), React.createElement('circle', { cx: "50", cy: "55", r: "20", fill: "white" }));
const ChickenIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M40 70 C 20 60, 20 20, 50 20 C 80 30, 80 70, 40 70 Z", fill: "#E67E22" }), React.createElement('rect', { x: "35", y: "70", width: "10", height: "10", fill: "#D35400" }));
const PieIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M20 80 L 50 30 L 80 80 Z", fill: "#FAD7A0" }), React.createElement('line', { x1: "50", y1: "30", x2: "50", y2: "80", stroke: "#F8C471", strokeWidth: "4" }));
const CookieIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('circle', { cx: "50", cy: "60", r: "35", fill: "#F5DEB3" }), React.createElement('circle', { cx: "40", cy: "50", r: "5", fill: "#6D4C41" }), React.createElement('circle', { cx: "60", cy: "65", r: "5", fill: "#6D4C41" }));
const ShrimpIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M40 80 Q 70 40, 50 20 Q 30 50, 40 80 Z", fill: "#F5B7B1" }));
const DumplingIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M20 70 Q 50 40, 80 70 Q 50 80, 20 70 Z", fill: "#FDFEFE" }));
const NoodlesIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M20 80 H 80 V 60 Q 50 40, 20 60 Z", fill: "#F2F3F4" }), React.createElement('path', { d: "M40 50 C 30 60, 50 70, 60 50", stroke: "#FDEBD0", strokeWidth: "4", fill: "none" }));

const WaterIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M25 90 L 35 20 H 65 L 75 90 Z", fill: "#AED6F1", opacity: "0.5" }), React.createElement('path', { d: "M35 30 C 45 25, 55 35, 65 30", stroke: "#5DADE2", fill: "none", strokeWidth: "2" }));
const MilkIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('rect', { x: "30", y: "20", width: "40", height: "60", fill: "#F8F9F9", stroke: "#BDC3C7", strokeWidth: "2" }), React.createElement('path', { d: "M30 20 L 50 10 L 70 20", fill: "#3498DB", stroke: "#BDC3C7", strokeWidth: "2" }));
const JuiceIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M25 90 L 35 20 H 65 L 75 90 Z", fill: "#F5CBA7" }));
const TeaIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M20 70 A 30 20 0 0 0 80 70 H 20", fill: "#FAD7A0" }), React.createElement('path', { d: "M80 50 A 10 10 0 0 1 80 70", fill: "none", stroke: "#FAD7A0", strokeWidth: "8" }));
const CoffeeIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('rect', { x: "20", y: "30", width: "60", height: "50", rx: "10", fill: "#6D4C41" }), React.createElement('path', { d: "M80 40 A 10 10 0 0 1 80 60", fill: "none", stroke: "#6D4C41", strokeWidth: "8" }));
const SodaIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('rect', { x: "35", y: "20", width: "30", height: "60", rx: "5", fill: "#E74C3C" }), React.createElement('rect', { x: "30", y: "20", width: "40", height: "5", fill: "#BDC3C7" }), React.createElement('circle', { cx: "45", cy: "35", r: "2", fill: "white" }), React.createElement('circle', { cx: "55", cy: "50", r: "2", fill: "white" }));
const ShirtIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M20 30 L 30 20 L 70 20 L 80 30 L 90 30 L 80 50 L 80 80 H 20 L 20 50 L 10 30 Z", fill: "#5DADE2" }));
const PantsIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M30 20 H 70 V 40 L 55 40 V 90 H 30 Z M 45 40 V 90 H 70 V 40 Z", fill: "#34495E" }));
const DressIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M25 20 L 75 20 L 85 80 H 15 Z M 40 20 L 30 30 M 60 20 L 70 30", fill: "#E74C3C" }));
const SkirtIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M20 30 H 80 L 90 80 H 10 Z", fill: "#9B59B6" }));
const ShoesIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M20 70 C 10 70, 20 50, 40 50 H 80 V 70 H 20 Z", fill: "#7F8C8D" }), React.createElement('path', { d: "M30 50 V 40 L 40 40", stroke: "white", fill: "none", strokeWidth: "4" }));
const HatIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M20 60 H 80 A 30 30 0 0 0 20 60 M 50 60 A 30 30 0 0 0 50 30 A 30 30 0 0 0 50 60", fill: "#F39C12" }));
const SocksIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M40 80 L 40 40 H 60 V 50 L 70 80 Z", fill: "#ECF0F1" }));
const CoatIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M20 20 L 80 20 L 90 80 H 10 Z M 50 20 V 80", fill: "#D2B48C" }));
const TableIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('rect', { x: "10", y: "40", width: "80", height: "10", fill: "#8D6E63" }), React.createElement('rect', { x: "20", y: "50", width: "10", height: "30", fill: "#8D6E63" }), React.createElement('rect', { x: "70", y: "50", width: "10", height: "30", fill: "#8D6E63" }));
const ChairIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M30 90 V 50 H 70 V 90 M 70 50 V 20 H 60 V 50", fill: "#A1887F" }));
const BedIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('rect', { x: "10", y: "50", width: "80", height: "30", fill: "#BDC3C7" }), React.createElement('rect', { x: "15", y: "40", width: "30", height: "10", rx: "5", fill: "white" }));
const SofaIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('rect', { x: "10", y: "50", width: "80", height: "30", rx: "5", fill: "#E74C3C" }), React.createElement('rect', { x: "10", y: "30", width: "20", height: "20", fill: "#E74C3C" }), React.createElement('rect', { x: "70", y: "30", width: "20", height: "20", fill: "#E74C3C" }));
const DeskIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('rect', { x: "10", y: "30", width: "80", height: "10", fill: "#A1887F" }), React.createElement('rect', { x: "10", y: "40", width: "20", height: "40", fill: "#A1887F" }), React.createElement('rect', { x: "70", y: "40", width: "20", height: "40", fill: "#A1887F" }));
const LampIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M40 80 H 60 M 50 80 V 40 L 70 30", stroke: "#7F8C8D", strokeWidth: "6", fill: "none" }), React.createElement('path', { d: "M60 20 L 80 20 L 70 30 Z", fill: "#F1C40F" }));
const BookshelfIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('rect', { x: "20", y: "10", width: "60", height: "80", fill: "#D2B48C" }), React.createElement('rect', { x: "25", y: "20", width: "20", height: "10", fill: "#E74C3C" }), React.createElement('rect', { x: "25", y: "40", width: "20", height: "10", fill: "#3498DB" }));

const BowlIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M10 80 H 90 V 60 Q 50 20, 10 60 Z", fill: "#ECF0F1", stroke: "#BDC3C7", strokeWidth: "2" }));
const PlateIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('circle', { cx: "50", cy: "50", r: "40", fill: "#F8F9F9", stroke: "#BDC3C7", strokeWidth: "2" }), React.createElement('circle', { cx: "50", cy: "50", r: "30", fill: "none", stroke: "#EAECEE", strokeWidth: "2" }));
const SpoonIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M50 90 L 50 40 A 15 20 0 1 1 50 10 A 15 20 0 1 1 50 40", fill: "#BDC3C7" }));
const ForkIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M50 90 V 30 M 50 30 L 40 10 M 50 30 L 50 10 M 50 30 L 60 10", stroke: "#BDC3C7", strokeWidth: "8", fill: "none", strokeLinecap: "round" }));
const KnifeIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M50 90 V 30 H 60 Q 70 20, 50 10 Z", fill: "#BDC3C7" }));
const ChopsticksIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('rect', { x: "40", y: "10", width: "5", height: "80", fill: "#D2B48C" }), React.createElement('rect', { x: "55", y: "10", width: "5", height: "80", fill: "#D2B48C" }));
const CupIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M20 80 H 80 V 30 H 20 Z M 80 60 A 10 10 0 0 0 80 40", fill: "#F8F9F9", stroke: "#BDC3C7", strokeWidth: "2" }));
const GlassIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M25 90 L 35 20 H 65 L 75 90 Z", fill: "#AED6F1", opacity: "0.5" }));

const PenIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M45 90 L 45 20 L 55 20 L 55 90 Z M 50 20 L 40 10 L 60 10 Z", fill: "#3498DB" }));
const PencilIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('rect', { x: "45", y: "30", width: "10", height: "60", fill: "#F1C40F" }), React.createElement('rect', { x: "45", y: "20", width: "10", height: "10", fill: "#F5B7B1" }), React.createElement('path', { d: "M45 90 L 50 100 L 55 90 Z", fill: "#34495E" }));
const EraserIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('rect', { x: "20", y: "40", width: "60", height: "20", fill: "#F5B7B1", stroke: "#E74C3C", strokeWidth: "2" }));
const RulerIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('rect', { x: "10", y: "45", width: "80", height: "10", fill: "#FAD7A0" }), React.createElement('line', { x1: "20", y1: "45", x2: "20", y2: "50", stroke: "#34495E", strokeWidth: "2" }), React.createElement('line', { x1: "30", y1: "45", x2: "30", y2: "50", stroke: "#34495E", strokeWidth: "2" }), React.createElement('line', { x1: "40", y1: "45", x2: "40", y2: "50", stroke: "#34495E", strokeWidth: "2" }));
const BookIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M10 90 V 10 H 50 V 90 M 90 90 V 10 H 50 V 90", fill: "#2980B9", stroke: "white", strokeWidth: "2" }));
const NotebookIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('rect', { x: "20", y: "10", width: "60", height: "80", fill: "#E74C3C" }), React.createElement('circle', { cx: "25", cy: "20", r: "3", fill: "white" }), React.createElement('circle', { cx: "25", cy: "30", r: "3", fill: "white" }), React.createElement('circle', { cx: "25", cy: "40", r: "3", fill: "white" }));
const ScissorsIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('circle', { cx: "30", cy: "30", r: "10", stroke: "#3498DB", strokeWidth: "4", fill: "none" }), React.createElement('circle', { cx: "30", cy: "70", r: "10", stroke: "#3498DB", strokeWidth: "4", fill: "none" }), React.createElement('line', { x1: "40", y1: "35", x2: "80", y2: "80", stroke: "#7F8C8D", strokeWidth: "4" }), React.createElement('line', { x1: "40", y1: "65", x2: "80", y2: "20", stroke: "#7F8C8D", strokeWidth: "4" }));
const GlueIllustration: React.FC = () => React.createElement('svg', { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('rect', { x: "40", y: "40", width: "20", height: "40", fill: "#F39C12" }), React.createElement('rect', { x: "35", y: "20", width: "30", height: "20", fill: "#E67E22" }));


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
  {
    id: 'fruits-1',
    title: '水果 (Fruits)',
    description: '学习常见水果的名称。',
    illustration: FruitsTopicIllustration,
    theme: 'learn',
    words: [
      { word: 'apple', phonetic: '/ˈæpəl/', definition: '苹果', example: 'An apple a day keeps the doctor away.', illustration: RedIllustration },
      { word: 'banana', phonetic: '/bəˈnænə/', definition: '香蕉', example: 'Monkeys like to eat bananas.', illustration: BananaIllustration },
      { word: 'orange', phonetic: '/ˈɔːrɪndʒ/', definition: '橙子', example: 'An orange is a citrus fruit.', illustration: OrangeIllustration },
      { word: 'strawberry', phonetic: '/ˈstrɔːberi/', definition: '草莓', example: 'I like strawberry ice cream.', illustration: StrawberryIllustration },
      { word: 'grape', phonetic: '/ɡreɪp/', definition: '葡萄', example: 'Grapes grow on vines.', illustration: PurpleIllustration },
      { word: 'cherry', phonetic: '/ˈtʃeri/', definition: '樱桃', example: 'The cherry on the cake is red.', illustration: CherryIllustration },
      { word: 'pear', phonetic: '/per/', definition: '梨', example: 'This pear is very juicy.', illustration: PearIllustration },
      { word: 'mango', phonetic: '/ˈmæŋɡoʊ/', definition: '芒果', example: 'Mango is a tropical fruit.', illustration: MangoIllustration },
      { word: 'watermelon', phonetic: '/ˈwɔːtərmelən/', definition: '西瓜', example: 'Watermelon is refreshing in summer.', illustration: WatermelonIllustration },
      { word: 'peach', phonetic: '/piːtʃ/', definition: '桃子', example: 'A peach has fuzzy skin.', illustration: PeachIllustration },
      { word: 'kiwi', phonetic: '/ˈkiːwiː/', definition: '猕猴桃', example: 'Kiwi is green inside.', illustration: KiwiIllustration },
      { word: 'lemon', phonetic: '/ˈlemən/', definition: '柠檬', example: 'A lemon tastes sour.', illustration: LemonIllustration },
      { word: 'litchi', phonetic: '/ˈliːtʃiː/', definition: '荔枝', example: 'Litchi has a red, bumpy shell.', illustration: LitchiIllustration },
    ],
  },
  {
    id: 'vegetables-1',
    title: '蔬菜 (Vegetables)',
    description: '学习常见蔬菜的名称。',
    illustration: VegetablesTopicIllustration,
    theme: 'learn',
    words: [
      { word: 'potato', phonetic: '/pəˈteɪtoʊ/', definition: '土豆', example: 'French fries are made from potatoes.', illustration: PotatoIllustration },
      { word: 'tomato', phonetic: '/təˈmeɪtoʊ/', definition: '西红柿', example: 'A tomato is technically a fruit.', illustration: TomatoIllustration },
      { word: 'cucumber', phonetic: '/ˈkjuːkʌmbər/', definition: '黄瓜', example: 'Cucumber is cool and refreshing.', illustration: CucumberIllustration },
      { word: 'garlic', phonetic: '/ˈɡɑːrlɪk/', definition: '大蒜', example: 'Garlic adds flavor to many dishes.', illustration: GarlicIllustration },
      { word: 'peas', phonetic: '/piːz/', definition: '豌豆', example: 'I like green peas in my salad.', illustration: PeasIllustration },
      { word: 'pepper', phonetic: '/ˈpepər/', definition: '辣椒/甜椒', example: 'Red pepper can be sweet or spicy.', illustration: PepperIllustration },
      { word: 'onion', phonetic: '/ˈʌnjən/', definition: '洋葱', example: 'Cutting an onion can make you cry.', illustration: OnionIllustration },
      { word: 'mushroom', phonetic: '/ˈmʌʃrʊm/', definition: '蘑菇', example: 'Some mushrooms are edible.', illustration: MushroomIllustration },
      { word: 'corn', phonetic: '/kɔːrn/', definition: '玉米', example: 'Corn on the cob is a summer treat.', illustration: CornIllustration },
      { word: 'eggplant', phonetic: '/ˈeɡplænt/', definition: '茄子', example: 'Eggplant is also called aubergine.', illustration: EggplantIllustration },
      { word: 'carrot', phonetic: '/ˈkærət/', definition: '胡萝卜', example: 'Rabbits love to eat carrots.', illustration: CarrotIllustration },
      { word: 'pumpkin', phonetic: '/ˈpʌmpkɪn/', definition: '南瓜', example: 'We carve pumpkins for Halloween.', illustration: PumpkinIllustration },
      { word: 'lettuce', phonetic: '/ˈletɪs/', definition: '生菜', example: 'Lettuce is the main ingredient in salad.', illustration: LettuceIllustration },
      { word: 'cabbage', phonetic: '/ˈkæbɪdʒ/', definition: '卷心菜', example: 'Cabbage can be eaten raw or cooked.', illustration: CabbageIllustration },
    ],
  },
  {
    id: 'food-1',
    title: '食物 (Food)',
    description: '学习常见食物的名称。',
    illustration: FoodTopicIllustration,
    theme: 'learn',
    words: [
      { word: 'pizza', phonetic: '/ˈpiːtsə/', definition: '披萨', example: 'I would like to order a pizza.', illustration: PizzaIllustration },
      { word: 'hamburger', phonetic: '/ˈhæmbɜːrɡər/', definition: '汉堡包', example: 'Let\'s grab a hamburger for lunch.', illustration: HamburgerIllustration },
      { word: 'ice cream', phonetic: '/aɪs kriːm/', definition: '冰淇淋', example: 'My favorite flavor of ice cream is vanilla.', illustration: IceCreamIllustration },
      { word: 'salad', phonetic: '/ˈsæləd/', definition: '沙拉', example: 'A fresh salad is a healthy meal.', illustration: SaladIllustration },
      { word: 'sandwich', phonetic: '/ˈsænwɪtʃ/', definition: '三明治', example: 'He made a turkey sandwich.', illustration: SandwichIllustration },
      { word: 'bread', phonetic: '/bred/', definition: '面包', example: 'Would you like a slice of bread?', illustration: BreadIllustration },
      { word: 'fish', phonetic: '/fɪʃ/', definition: '鱼', example: 'We had grilled fish for dinner.', illustration: FishIllustration },
      { word: 'cake', phonetic: '/keɪk/', definition: '蛋糕', example: 'We celebrated with a birthday cake.', illustration: CakeIllustration },
      { word: 'rice', phonetic: '/raɪs/', definition: '米饭', example: 'Rice is a staple food in Asia.', illustration: RiceIllustration },
      { word: 'chicken', phonetic: '/ˈtʃɪkɪn/', definition: '鸡肉', example: 'Roasted chicken is my favorite dish.', illustration: ChickenIllustration },
      { word: 'pie', phonetic: '/paɪ/', definition: '派', example: 'She baked an apple pie.', illustration: PieIllustration },
      { word: 'cookie', phonetic: '/ˈkʊki/', definition: '曲奇', example: 'I love chocolate chip cookies.', illustration: CookieIllustration },
      { word: 'dumpling', phonetic: '/ˈdʌmplɪŋ/', definition: '饺子', example: 'Dumplings are a traditional Chinese food.', illustration: DumplingIllustration },
      { word: 'noodles', phonetic: '/ˈnuːdlz/', definition: '面条', example: 'I want to eat a bowl of noodles.', illustration: NoodlesIllustration },
      { word: 'candy', phonetic: '/ˈkændi/', definition: '糖果', example: 'Eating too much candy is bad for your teeth.', illustration: CandyIllustration },
      { word: 'chocolate', phonetic: '/ˈtʃɔːklət/', definition: '巧克力', example: 'She loves dark chocolate.', illustration: ChocolateIllustration },
      { word: 'meat', phonetic: '/miːt/', definition: '肉', example: 'Lions are meat-eating animals.', illustration: MeatIllustration },
      { word: 'egg', phonetic: '/eɡ/', definition: '鸡蛋', example: 'I eat a boiled egg for breakfast.', illustration: EggIllustration },
      { word: 'shrimp', phonetic: '/ʃrɪmp/', definition: '虾', example: 'Shrimp is a type of seafood.', illustration: ShrimpIllustration },
      { word: 'jelly', phonetic: '/ˈdʒeli/', definition: '果冻', example: 'Jelly is a popular dessert for kids.', illustration: JellyIllustration },
    ],
  },
  {
    id: 'drinks-1',
    title: '饮料 (Drinks)',
    description: '学习各种常见饮料的名称。',
    illustration: DrinksTopicIllustration,
    theme: 'learn',
    words: [
      { word: 'water', phonetic: '/ˈwɔːtər/', definition: '水', example: 'Please drink more water.', illustration: WaterIllustration },
      { word: 'milk', phonetic: '/mɪlk/', definition: '牛奶', example: 'I drink milk every morning.', illustration: MilkIllustration },
      { word: 'juice', phonetic: '/dʒuːs/', definition: '果汁', example: 'She likes orange juice.', illustration: JuiceIllustration },
      { word: 'tea', phonetic: '/tiː/', definition: '茶', example: 'Would you like a cup of tea?', illustration: TeaIllustration },
      { word: 'coffee', phonetic: '/ˈkɔːfi/', definition: '咖啡', example: 'He needs coffee to wake up.', illustration: CoffeeIllustration },
      { word: 'soda', phonetic: '/ˈsoʊdə/', definition: '苏打水', example: 'Soda is a sweet, fizzy drink.', illustration: SodaIllustration },
    ],
  },
  {
    id: 'clothes-1',
    title: '衣物 (Clothes)',
    description: '学习常见衣物的名称。',
    illustration: ClothesTopicIllustration,
    theme: 'learn',
    words: [
      { word: 'shirt', phonetic: '/ʃɜːrt/', definition: '衬衫', example: 'He is wearing a blue shirt.', illustration: ShirtIllustration },
      { word: 'pants', phonetic: '/pænts/', definition: '裤子', example: 'I need to buy new pants.', illustration: PantsIllustration },
      { word: 'dress', phonetic: '/dres/', definition: '连衣裙', example: 'She wore a beautiful dress to the party.', illustration: DressIllustration },
      { word: 'skirt', phonetic: '/skɜːrt/', definition: '裙子', example: 'That is a nice skirt.', illustration: SkirtIllustration },
      { word: 'shoes', phonetic: '/ʃuːz/', definition: '鞋子', example: 'My new shoes are very comfortable.', illustration: ShoesIllustration },
      { word: 'hat', phonetic: '/hæt/', definition: '帽子', example: 'He wears a hat in the sun.', illustration: HatIllustration },
      { word: 'socks', phonetic: '/sɑːks/', definition: '袜子', example: 'Where are my socks?', illustration: SocksIllustration },
      { word: 'coat', phonetic: '/koʊt/', definition: '外套', example: 'It is cold, you should wear a coat.', illustration: CoatIllustration },
    ],
  },
  {
    id: 'furniture-1',
    title: '家具 (Furniture)',
    description: '学习常见家具的名称。',
    illustration: FurnitureTopicIllustration,
    theme: 'learn',
    words: [
      { word: 'table', phonetic: '/ˈteɪbəl/', definition: '桌子', example: 'The book is on the table.', illustration: TableIllustration },
      { word: 'chair', phonetic: '/tʃer/', definition: '椅子', example: 'Please have a seat on this chair.', illustration: ChairIllustration },
      { word: 'bed', phonetic: '/bed/', definition: '床', example: 'I am tired, I want to go to bed.', illustration: BedIllustration },
      { word: 'sofa', phonetic: '/ˈsoʊfə/', definition: '沙发', example: 'We are watching TV on the sofa.', illustration: SofaIllustration },
      { word: 'desk', phonetic: '/desk/', definition: '书桌', example: 'She does her homework at her desk.', illustration: DeskIllustration },
      { word: 'lamp', phonetic: '/læmp/', definition: '灯', example: 'Turn on the lamp, it is dark.', illustration: LampIllustration },
      { word: 'bookshelf', phonetic: '/ˈbʊkʃelf/', definition: '书架', example: 'The bookshelf is full of books.', illustration: BookshelfIllustration },
    ],
  },
  {
    id: 'tableware-1',
    title: '餐具 (Tableware)',
    description: '学习常见餐具的名称。',
    illustration: TablewareTopicIllustration,
    theme: 'learn',
    words: [
      { word: 'bowl', phonetic: '/boʊl/', definition: '碗', example: 'I eat soup from a bowl.', illustration: BowlIllustration },
      { word: 'plate', phonetic: '/pleɪt/', definition: '盘子', example: 'Put the food on the plate.', illustration: PlateIllustration },
      { word: 'spoon', phonetic: '/spuːn/', definition: '勺子', example: 'Use a spoon to eat yogurt.', illustration: SpoonIllustration },
      { word: 'fork', phonetic: '/fɔːrk/', definition: '叉子', example: 'A fork is used for eating salad.', illustration: ForkIllustration },
      { word: 'knife', phonetic: '/naɪf/', definition: '刀', example: 'Be careful with that sharp knife.', illustration: KnifeIllustration },
      { word: 'chopsticks', phonetic: '/ˈtʃɑːpstɪks/', definition: '筷子', example: 'Many people in Asia use chopsticks.', illustration: ChopsticksIllustration },
      { word: 'cup', phonetic: '/kʌp/', definition: '杯子', example: 'I would like a cup of tea.', illustration: CupIllustration },
      { word: 'glass', phonetic: '/ɡlæs/', definition: '玻璃杯', example: 'She drank a glass of water.', illustration: GlassIllustration },
    ],
  },
  {
    id: 'stationery-1',
    title: '文具 (Stationery)',
    description: '学习常见文具的名称。',
    illustration: StationeryTopicIllustration,
    theme: 'learn',
    words: [
      { word: 'pen', phonetic: '/pen/', definition: '钢笔', example: 'Please sign with a black pen.', illustration: PenIllustration },
      { word: 'pencil', phonetic: '/ˈpensəl/', definition: '铅笔', example: 'I need to sharpen my pencil.', illustration: PencilIllustration },
      { word: 'eraser', phonetic: '/ɪˈreɪsər/', definition: '橡皮', example: 'I made a mistake, I need an eraser.', illustration: EraserIllustration },
      { word: 'ruler', phonetic: '/ˈruːlər/', definition: '尺子', example: 'Use a ruler to draw a straight line.', illustration: RulerIllustration },
      { word: 'book', phonetic: '/bʊk/', definition: '书', example: 'He is reading an interesting book.', illustration: BookIllustration },
      { word: 'notebook', phonetic: '/ˈnoʊtbʊk/', definition: '笔记本', example: 'Write your notes in this notebook.', illustration: NotebookIllustration },
      { word: 'scissors', phonetic: '/ˈsɪzərz/', definition: '剪刀', example: 'I need scissors to cut the paper.', illustration: ScissorsIllustration },
      { word: 'glue', phonetic: '/ɡluː/', definition: '胶水', example: 'Use glue to stick the pictures.', illustration: GlueIllustration },
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
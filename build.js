// Bundles contents/src/<slug>/*.md into contents/<slug>.docs.js  (run: node build.js)
const fs=require('fs'),path=require('path');
const names={"calculus-i":"Calculus I","linear-algebra":"Linear Algebra","physics-i-mechanics-waves":"Physics I (Mechanics & Waves)","intro-to-programming-c-python":"Intro to Programming (C/Python)","engineering-communication-ethics":"Engineering Communication & Ethics","calculus-ii-odes":"Calculus II & ODEs","physics-ii-electricity-magnetism":"Physics II (Electricity & Magnetism)","discrete-mathematics":"Discrete Mathematics","digital-logic-design":"Digital Logic Design","object-oriented-programming":"Object-Oriented Programming","circuit-analysis-i":"Circuit Analysis I","data-structures-algorithms":"Data Structures & Algorithms","probability-statistics":"Probability & Statistics","computer-organization":"Computer Organization","electronics-i-semiconductor-devices":"Electronics I (Semiconductor Devices)","signals-systems":"Signals & Systems","microprocessors-embedded-systems":"Microprocessors & Embedded Systems","electronics-ii-analog-design":"Electronics II (Analog Design)","numerical-methods":"Numerical Methods","database-systems":"Database Systems","computer-architecture":"Computer Architecture","operating-systems":"Operating Systems","digital-signal-processing":"Digital Signal Processing","control-systems":"Control Systems","vlsi-digital-ic-design":"VLSI & Digital IC Design","computer-networks":"Computer Networks","software-engineering":"Software Engineering","communication-systems":"Communication Systems","real-time-embedded-os":"Real-Time & Embedded OS","electromagnetics-antennas":"Electromagnetics & Antennas","machine-learning-ai":"Machine Learning & AI","computer-network-security":"Computer & Network Security","iot-cyber-physical-systems":"IoT & Cyber-Physical Systems","compilers-programming-languages":"Compilers & Programming Languages","final-year-project-i":"Final Year Project I","parallel-distributed-computing":"Parallel & Distributed Computing","robotics-mechatronics":"Robotics & Mechatronics","power-electronics-energy-systems":"Power Electronics & Energy Systems","engineering-management-entrepreneurship":"Engineering Management & Entrepreneurship","final-year-project-ii":"Final Year Project II"};

// Parse the 20 multiple-choice questions of the class test and final exam into a quiz pool (no AI needed).
function parseMcq(md,tag){
 const out=[];if(!md)return out;
 const ai=md.search(/^##+\s*(Answer key|Section A answers)/im);const body=ai>0?md.slice(0,ai):md,ans=ai>0?md.slice(ai):"";
 let blk=ans;const sa=ans.search(/^###\s*Section A/im);if(sa>=0)blk=ans.slice(sa);const sb=blk.search(/^##+\s*Section B/im);if(sb>0)blk=blk.slice(0,sb);
 const key={},why={};
 for(const m of blk.matchAll(/^(\d+)\.\s*\*\*([A-D])\*\*\s*(.*)$/gm)){if(!key[m[1]]){key[m[1]]=m[2];const e=m[3].trim().replace(/^\((.*)\)\.?$/,"$1");if(e)why[m[1]]=e}}
 if(Object.keys(key).length<20){for(const k in key)delete key[k];for(const m of blk.matchAll(/(?:^|[\s·])(\d+)\.?\s*\*{0,2}([A-D])\*{0,2}(?=[\s·.,;(]|$)/gm)){const n=+m[1];if(n>=1&&n<=20&&!key[n])key[n]=m[2]}}
 const br=blk.match(/Brief reasons:\s*([\s\S]*)/);if(br){const t=br[1];const sets=[[...t.matchAll(/^(\d+)\.[ \t]+/gm)].map(m=>({n:+m[1],s:m.index+m[0].length,i:m.index})),[...t.matchAll(/(?:^|\s)(\d+)\.(?=\s)/g)].map(m=>({n:+m[1],s:m.index+m[0].length,i:m.index}))];
  for(const c of sets){let last=0;const pts=c.filter(x=>x.n>last&&x.n<=20&&(last=x.n,true));if(pts.length>=3||c===sets[1]){pts.forEach((x,i)=>{const e2=i+1<pts.length?pts[i+1].i:t.length;if(!why[x.n])why[x.n]=t.slice(x.s,e2).trim().replace(/\s*\n\s*/g," ")});break}}}
 const re=/^\*\*(\d+)\.\*\*\s*([\s\S]+?)\n(A\)[\s\S]*?)(?=\n\n|$)/gm;let m;
 while((m=re.exec(body))){const n=m[1],o=m[3].replace(/\n/g," ").match(/^A\)\s*([\s\S]*?)\s+B\)\s*([\s\S]*?)\s+C\)\s*([\s\S]*?)\s+D\)\s*([\s\S]*)$/);
  if(!o||!key[n])continue;out.push({q:m[2].trim().replace(/\s+/g," "),options:[o[1],o[2],o[3],o[4]].map(x=>x.trim()),answer:"ABCD".indexOf(key[n]),explain:why[n]||("The correct answer is "+key[n]+"."),f:(+n-0.5)/20,src:tag})}
 return out}
const src=path.join(__dirname,'contents','src');
for(const slug of fs.readdirSync(src)){const d=path.join(src,slug),docs={};
 for(const f of fs.readdirSync(d)){if(f.endsWith('.md'))docs[f.slice(0,-3)]=fs.readFileSync(path.join(d,f),'utf8').replace(/\r\n/g,'\n')}
 const n=names[slug];if(!n){console.log('unknown',slug);continue}
 fs.writeFileSync(path.join(__dirname,'contents',slug+'.docs.js'),`(window.CE_PACK=window.CE_PACK||{})[${JSON.stringify(n)}]=Object.assign((window.CE_PACK||{})[${JSON.stringify(n)}]||{},{docs:${JSON.stringify(docs)},mcq:${JSON.stringify(parseMcq(docs.test,'Class test').concat(parseMcq(docs.exam,'Final exam')))}});\n`);
 const nq=parseMcq(docs.test,'t').length+parseMcq(docs.exam,'e').length;if(nq<40)console.log('WARNING',slug,'only',nq,'quiz questions parsed');console.log(slug,Object.entries(docs).map(([k,v])=>k+':'+v.split(/\s+/).length+'w').join(' '))}

// regenerate the service-worker precache list so the whole app works offline
{
  const fs = require('fs'), path = require('path');
  const files = fs.readdirSync(path.join(__dirname, 'contents')).filter(f => f.endsWith('.js')).sort().map(f => './contents/' + f);
  const swp = path.join(__dirname, 'sw.js');
  let sw = fs.readFileSync(swp, 'utf8');
  const base = '"./","./index.html","./manifest.webmanifest","./icons/icon-192.png","./icons/icon-512.png","./icons/icon-maskable-512.png","./icons/favicon-64.png","./icons/apple-touch-icon.png","./icons/logo-640.png"';
  sw = sw.replace(/FILES=\[[^\]]*\]/, 'FILES=[' + base + ',' + files.map(f => JSON.stringify(f)).join(',') + ']');
  sw = sw.replace('c.addAll(FILES)', 'Promise.all(FILES.map(u=>c.add(u).catch(()=>0)))');
  sw = sw.replace(/const V="[^"]*"/, 'const V="ce-academy-' + Date.now().toString(36) + '"');
  fs.writeFileSync(swp, sw);
}

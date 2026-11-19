const fs=require('fs'),path=require('path');
const S='src',D='dist';
function walk(d){return fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(d,e.name)):[path.join(d,e.name)])}
function minHTML(h){return h.replace(/<!--[\s\S]*?-->/g,'').replace(/>\s+</g,'><').replace(/\s{2,}/g,' ').trim()}
function minCSS(c){return c.replace(/\/\*[\s\S]*?\*\//g,'').replace(/\s+/g,' ').replace(/\s*([{}:;,>])\s*/g,'$1').replace(/;}/g,'}').trim()}
let obf=null;try{obf=require('javascript-obfuscator')}catch(e){console.log('no obfuscator')}
function minJS(j){if(!obf)return j;return obf.obfuscate(j,{compact:true,stringArray:true,stringArrayEncoding:['base64'],stringArrayThreshold:.75,identifierNamesGenerator:'hexadecimal',renameGlobals:false}).getObfuscatedCode()}
fs.rmSync(D,{recursive:true,force:true});
for(const f of walk(S)){const o=path.join(D,path.relative(S,f));fs.mkdirSync(path.dirname(o),{recursive:true});
if(!/\.(html|css|js)$/.test(f)){fs.copyFileSync(f,o);continue}
let t=fs.readFileSync(f,'utf8');if(f.endsWith('.html'))t=minHTML(t);else if(f.endsWith('.css'))t=minCSS(t);else t=minJS(t);fs.writeFileSync(o,t)}
console.log('build ok');

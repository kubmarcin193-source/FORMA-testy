const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
let count=0;const check=(ok,msg)=>{assert.ok(ok,msg);count++};
for(const file of ['index.html','test_index.html','Forma-PRO-Studio.html']){
 const html=fs.readFileSync(file,'utf8');
 for(const m of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)){new vm.Script(m[1],{filename:file});count++;}
 check(!html.includes('forma_pro_'),file+' must isolate storage');
 check(!html.includes('maximum-scale=1'),'zoom enabled');
}
const html=fs.readFileSync('index.html','utf8');
const source=html.slice(html.indexOf('function jget('),html.indexOf('function jset('));
let raw=null;const context=vm.createContext({localStorage:{getItem:()=>raw},console:{warn(){}}});
vm.runInContext(source,context);
for(const [value,def,expected] of [['null',[],[]],['{}',[],[]],['[]',{},{}],['"wrong"',{},{}],['broken',[],[]],['[1]',[],[1]],['{"weight":80}',{},{weight:80}],['false',true,false]]){
 raw=value;assert.equal(JSON.stringify(context.jget('test',def)),JSON.stringify(expected));count++;
}
check(html.includes('${esc(e.note||"")}</textarea>'),'escape quick note');
const sw=fs.readFileSync('service-worker.js','utf8'),handlers={},puts=[];let fail=false,matched;
const scope='https://example.github.io/FORMA-testy/';
const ctx=vm.createContext({URL,Response,self:{location:{origin:'https://example.github.io'},registration:{scope},addEventListener:(n,f)=>handlers[n]=f,clients:{claim:async()=>{}},skipWaiting:async()=>{}},caches:{open:async()=>({put:async(...args)=>puts.push(args),addAll:async()=>{}}),match:async req=>{matched=req;return {offline:true}},keys:async()=>['forma-pro-pwa-old','forma-testy-pwa-old'],delete:async key=>{check(key.startsWith('forma-testy-'),'only delete test caches')}},fetch:async()=>{if(fail)throw Error('offline');return {ok:true,clone(){return this}}}});
vm.runInContext(sw,ctx);
(async()=>{
 let promise;const request={url:scope+'Forma-PRO-Studio.html',method:'GET',mode:'navigate'};
 handlers.fetch({request,respondWith:p=>promise=p});await promise;await new Promise(r=>setImmediate(r));
 check(puts[0][0]===request,'Studio cached under its own URL');
 fail=true;handlers.fetch({request,respondWith:p=>promise=p});const offline=await promise;
 check(offline.offline && matched===request,'offline Studio uses correct cached document');
 let intercepted=false;handlers.fetch({request:{...request,url:'https://example.github.io/FORMA/'},respondWith:()=>intercepted=true});check(!intercepted,'original app outside scope');
 handlers.activate({waitUntil:p=>promise=p});await promise;
 console.log(`OK: ${count} checks`);
})().catch(e=>{console.error(e);process.exitCode=1});

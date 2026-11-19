import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const html=readFileSync(new URL('../index.html', import.meta.url),'utf8');
const script=html.match(/<script>([\s\S]*?)<\/script>/)?.[1];
assert.ok(script,'Inline classroom controller script exists');
new vm.Script(script,{filename:'index.html inline script'});
for(const id of ['mission','team','board','director','integration','classroom','class-clock','clock-start','clock-pause','clock-reset','class-segment','class-open-engine']) {
 assert.ok(html.includes('id="'+id+'"'),'Missing classroom element '+id);
}
assert.match(html,/TWO TURNS · FOUR TEAMS/);
assert.match(html,/60-MINUTE CLASSROOM EXERCISE/);
assert.match(script,/const turns=\[/);
assert.equal((script.match(/\{title:"THE (COMPROMISE|COMPLIANCE RECKONING)"/g)||[]).length,2,'Must have two Nightingale turns');
assert.ok(!html.includes('180-minute plan'),'Old three-hour plan must not appear');
assert.ok(html.includes('MANUAL DISPLAY — NOT LIVE-SYNCED'),'Must disclose no authenticated live sync');
console.log('Nightingale classroom HTML and script checks passed');

const _0x1e3c79=_0x4635;function _0x4635(_0x4cf1c1,_0x42c7ab){const _0x57088e=_0x5708();return _0x4635=function(_0x463562,_0x28d442){_0x463562=_0x463562-0xf1;let _0xe0828e=_0x57088e[_0x463562];return _0xe0828e;},_0x4635(_0x4cf1c1,_0x42c7ab);}(function(_0x4ea289,_0x27c8e6){const _0x108f0b=_0x4635,_0x3bc4c8=_0x4ea289();while(!![]){try{const _0x6a24b2=-parseInt(_0x108f0b(0x10b))/0x1+parseInt(_0x108f0b(0x105))/0x2+parseInt(_0x108f0b(0xf5))/0x3+-parseInt(_0x108f0b(0x100))/0x4+-parseInt(_0x108f0b(0xff))/0x5*(-parseInt(_0x108f0b(0x108))/0x6)+parseInt(_0x108f0b(0x102))/0x7+-parseInt(_0x108f0b(0x109))/0x8;if(_0x6a24b2===_0x27c8e6)break;else _0x3bc4c8['push'](_0x3bc4c8['shift']());}catch(_0x1d5e14){_0x3bc4c8['push'](_0x3bc4c8['shift']());}}}(_0x5708,0x68717));import{canLevelUp,xpRange}from'../lib/levelling.js';import{levelup}from'../lib/canvas.js';let handler=async(_0xba0487,{conn:_0x30a2b7})=>{const _0x1415b8=_0x4635;let _0x14ea94=_0x30a2b7['getName'](_0xba0487[_0x1415b8(0x103)]),_0x3436ab=global['db'][_0x1415b8(0xfb)][_0x1415b8(0xfc)][_0xba0487[_0x1415b8(0x103)]];if(!canLevelUp(_0x3436ab[_0x1415b8(0xf6)],_0x3436ab[_0x1415b8(0xfd)],global[_0x1415b8(0xf7)])){let {min:_0x50f3f0,xp:_0x381232,max:_0x3be474}=xpRange(_0x3436ab['level'],global[_0x1415b8(0xf7)]);throw('\x0a┌───⊷\x20*المستوي*\x0a▢\x20الاسم\x20:\x20*'+_0x14ea94+_0x1415b8(0x107)+_0x3436ab[_0x1415b8(0xf6)]+'*\x0a▢\x20XP\x20:\x20*'+(_0x3436ab[_0x1415b8(0xfd)]-_0x50f3f0)+'/'+_0x381232+_0x1415b8(0x104)+(_0x3be474-_0x3436ab[_0x1415b8(0xfd)])+_0x1415b8(0x106))['trim']();}let _0x1af64d=_0x3436ab['level']*0x1;while(canLevelUp(_0x3436ab[_0x1415b8(0xf6)],_0x3436ab[_0x1415b8(0xfd)],global[_0x1415b8(0xf7)]))_0x3436ab['level']++;if(_0x1af64d!==_0x3436ab[_0x1415b8(0xf6)]){let _0x2cb577=_0x1415b8(0xf3)+_0x30a2b7[_0x1415b8(0x10a)](_0xba0487[_0x1415b8(0x103)])+'\x20\x20\x20\x20المستوي:',_0x212c94=('\x0a┌─⊷\x20*المستوي*\x0a▢\x20المستوي\x20السابق\x20:\x20*'+_0x1af64d+_0x1415b8(0xf1)+_0x3436ab[_0x1415b8(0xf6)]+'*\x0a└──────────────\x0a\x0a*_كلما\x20تفاعلت\x20مع\x20تربو\x20البوت\x20ارتفع\x20مستواك_*\x0a')['trim']();try{const _0x30c9ea=await levelup(_0x2cb577,_0x3436ab[_0x1415b8(0xf6)]);_0x30a2b7[_0x1415b8(0xfe)](_0xba0487['chat'],_0x30c9ea,_0x1415b8(0xfa),_0x212c94,_0xba0487);}catch(_0x1d7862){_0xba0487[_0x1415b8(0x101)](_0x212c94);}}};handler[_0x1e3c79(0xf4)]=['levelup'],handler[_0x1e3c79(0xf8)]=['xp'],handler['command']=['لفل','lvl',_0x1e3c79(0xf2),'مستواي',_0x1e3c79(0xf9)];function _0x5708(){const _0x2ca684=['3296418edAUud','6455704tPqdzg','getName','706635AFyyKz','*\x0a▢\x20المستوي\x20الحالي\x20:\x20*','levelup','🎊\x20عاش\x20يحب\x20','help','1088883VWNykD','level','multiplier','tags','مستوا','levelup.jpg','data','users','exp','sendFile','5DVqgBX','74740NCowIm','reply','3623900uxaoiw','sender','*\x0a└──────────────\x0a\x0aانت\x20تحتاج\x20الي\x20*','1060036Jzcwpz','*\x20*XP*\x20لرفع\x20مستواك\x0a','*\x0a▢\x20المستوي\x20:\x20*'];_0x5708=function(){return _0x2ca684;};return _0x5708();}export default handler;
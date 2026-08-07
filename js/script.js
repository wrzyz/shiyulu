const quotes = [
  {id:'love-1',category:'爱情',cn:'你坚定地走向我，我热烈地回应你。',en:'You walk firmly toward me, and I respond to you with all my warmth.',tag:'双向奔赴'},
  {id:'love-2',category:'爱情',cn:'一见钟情是心动，久处不厌是心安。',en:'Love at first sight moves the heart; lasting togetherness brings peace.',tag:'心安'},
  {id:'love-3',category:'爱情',cn:'你是我平淡生活里的惊喜，也是我漫长岁月里的光。',en:'You are the surprise in my ordinary days, and the light in my long years.',tag:'偏爱'},
  {id:'love-4',category:'爱情',cn:'不追求轰轰烈烈，只愿和你把寻常日子过得有声有色。',en:'I do not need grand gestures, only ordinary days made vivid with you.',tag:'日常'},
  {id:'love-5',category:'爱情',cn:'我想和你，从清晨到深夜，从春夏到秋冬。',en:'I want you beside me, from dawn to dusk, from spring to winter.',tag:'陪伴'},
  {id:'love-6',category:'爱情',cn:'遇见你之后，平凡的日子也开始有了期待。',en:'After meeting you, even ordinary days began to hold anticipation.',tag:'期待'},
  {id:'love-7',category:'爱情',cn:'爱不是占有，而是愿意把彼此的世界，看得更辽阔。',en:'Love is not possession; it is seeing each other’s world grow wider.',tag:'辽阔'},
  {id:'love-8',category:'爱情',cn:'两个人在一起最好的样子，是各自发光，又彼此照亮。',en:'The best togetherness is shining separately while lighting each other.',tag:'照亮'},
  {id:'love-9',category:'爱情',cn:'你不必事事完美，我爱的正是你真实的样子。',en:'You need not be perfect; I love your true self.',tag:'真实'},
  {id:'love-10',category:'爱情',cn:'最好的爱情，是让我安心做自己，也让我想要变得更好。',en:'The best love lets me be myself, and still makes me want to grow.',tag:'共同成长'},
  {id:'love-11',category:'爱情',cn:'喜欢你，是从遇见你的那天起，就再没想过要回头。',en:'Liking you means never thinking of turning back since the day we met.',tag:'一眼'},
  {id:'love-12',category:'爱情',cn:'我在人海里走了很久，最后所有的路都指向你。',en:'I walked long in the crowd, and in the end every road pointed to you.',tag:'相遇'},
  {id:'love-13',category:'爱情',cn:'你不在的时候，我连晚风都想分享给你。',en:'When you are away, I want to share even the evening breeze with you.',tag:'想念'},
  {id:'love-14',category:'爱情',cn:'爱情最好的样子，是我们各自忙碌，却始终惦记。',en:'The best love is busy lives, yet always thinking of each other.',tag:'惦记'},
  {id:'love-15',category:'爱情',cn:'有些话不用说得太满，你在，我就安心。',en:'Some words need no fullness; as long as you are here, I am at peace.',tag:'安心'},
  {id:'love-16',category:'爱情',cn:'我想要的浪漫，不过是你愿意把日常过得温柔。',en:'All the romance I want is you turning ordinary days gentle.',tag:'浪漫'},
  {id:'love-17',category:'爱情',cn:'爱是看到你的缺点，也依然觉得你可爱。',en:'Love is seeing your flaws and still finding you adorable.',tag:'包容'},
  {id:'love-18',category:'爱情',cn:'世界很大，但我只想和你慢慢走。',en:'The world is vast, but I only want to walk slowly with you.',tag:'慢慢'},
  {id:'love-19',category:'爱情',cn:'你是我的软肋，也是我的铠甲。',en:'You are my weakness, and also my armor.',tag:'偏爱'},
  {id:'love-20',category:'爱情',cn:'相爱的人，即使沉默，也不觉得尴尬。',en:'Two people in love can be silent without awkwardness.',tag:'默契'},
  {id:'love-21',category:'爱情',cn:'你把温柔给了我，我便想温柔整个世界。',en:'You gave me gentleness, and now I want to be gentle to the whole world.',tag:'温柔'},
  {id:'love-22',category:'爱情',cn:'喜欢你之后，我变成了更好的自己。',en:'After liking you, I became a better me.',tag:'成长'},
  {id:'love-23',category:'爱情',cn:'一起看过的日落，都藏进我们的回忆里。',en:'Every sunset we watched hides inside our memories.',tag:'回忆'},
  {id:'love-24',category:'爱情',cn:'所谓白头偕老，不过是愿意陪你一起变老。',en:'Growing old together simply means being willing to age with you.',tag:'偕老'},
  {id:'growth-1',category:'成长',cn:'每一次跌倒，都是为了更好地站起；每一次流泪，都是为了更懂坚强。',en:'Every fall teaches a better way to rise; every tear teaches strength.',tag:'成为自己'},
  {id:'growth-2',category:'成长',cn:'不必成为谁，你本身就已经足够好。',en:'You do not need to become anyone else; you are already enough.',tag:'自洽'},
  {id:'growth-3',category:'成长',cn:'梦想不会发光，追光的人本身会发亮。',en:'Dreams do not shine; the one who chases the light does.',tag:'向前'},
  {id:'growth-4',category:'成长',cn:'慢一点也没关系，花有花期，人有自己的节奏。',en:'It is okay to move slowly; flowers bloom in their own time.',tag:'节奏'},
  {id:'growth-5',category:'成长',cn:'成长不是变得冷漠，而是温柔得更有力量。',en:'Growing up is not growing cold; it is becoming gentle with more strength.',tag:'温柔有力'},
  {id:'growth-6',category:'成长',cn:'允许自己偶尔停下来，也是一种前进的勇气。',en:'Allowing yourself to pause is also a kind of courage to move forward.',tag:'休息'},
  {id:'growth-7',category:'成长',cn:'你把时间花在哪里，成长就在哪里发生。',en:'Where you spend your time, there your growth happens.',tag:'时间'},
  {id:'growth-8',category:'成长',cn:'不必等到准备好才开始，开始本身就是一种准备。',en:'You need not wait until you are ready; beginning is itself a preparation.',tag:'开始'},
  {id:'growth-9',category:'成长',cn:'真正的成长，是慢慢把目光从别人身上，收回自己心里。',en:'True growth slowly turns your gaze from others back to yourself.',tag:'向内'},
  {id:'growth-10',category:'成长',cn:'你要成为自己的光，而不是等着谁来照亮。',en:'Become your own light, instead of waiting to be lit.',tag:'独立'},
  {id:'growth-11',category:'成长',cn:'成长就是不断和昨天的自己告别。',en:'Growth is saying goodbye to yesterday’s self again and again.',tag:'告别'},
  {id:'growth-12',category:'成长',cn:'先照顾好自己，再去照亮别人。',en:'Take care of yourself first, then light up others.',tag:'照顾好自己'},
  {id:'growth-13',category:'成长',cn:'真正厉害的人，都在不动声色地努力。',en:'The truly strong work quietly, without a sound.',tag:'努力'},
  {id:'growth-14',category:'成长',cn:'你不必赢过所有人，只需赢过昨天的自己。',en:'You need not beat everyone, only yesterday’s self.',tag:'进步'},
  {id:'growth-15',category:'成长',cn:'人生是一场马拉松，重要的不是速度，而是坚持。',en:'Life is a marathon; what matters is persistence, not speed.',tag:'坚持'},
  {id:'growth-16',category:'成长',cn:'学会独处，是成长送给自己的礼物。',en:'Learning to be alone is growth’s gift to yourself.',tag:'独处'},
  {id:'growth-17',category:'成长',cn:'你现在流的汗，都会变成将来的底气。',en:'The sweat you shed now becomes your confidence later.',tag:'底气'},
  {id:'growth-18',category:'成长',cn:'有些路很远，走下去会很累，但不走会后悔。',en:'Some roads are long and tiring, but not walking them brings regret.',tag:'远方'},
  {id:'growth-19',category:'成长',cn:'在成为任何人之前，先成为自己。',en:'Before becoming anyone else, first become yourself.',tag:'自己'},
  {id:'growth-20',category:'成长',cn:'认真生活的人，运气不会太差。',en:'Those who live seriously are rarely unlucky.',tag:'认真'},
  {id:'growth-21',category:'成长',cn:'成长是有一天，你突然不再害怕失去。',en:'Growth is the day you stop fearing loss.',tag:'放下'},
  {id:'growth-22',category:'成长',cn:'所有的水到渠成，都是曾经的全力以赴。',en:'Everything that flows naturally was once all-out effort.',tag:'全力以赴'},
  {id:'wisdom-1',category:'哲思',cn:'生活不是等待风暴过去，而是学会在雨中跳舞。',en:'Life is not waiting for the storm to pass; it is learning to dance in the rain.',tag:'生活'},
  {id:'wisdom-2',category:'哲思',cn:'真正的成熟，是依然柔软，却依然坚强。',en:'True maturity is staying soft while remaining strong.',tag:'成熟'},
  {id:'wisdom-3',category:'哲思',cn:'人生没有白走的路，每一步都算数。',en:'No path in life is wasted; every step counts.',tag:'时间'},
  {id:'wisdom-4',category:'哲思',cn:'不是世界不够好，是我们还没学会用温柔的眼睛看它。',en:'The world is not lacking; we are still learning to see it gently.',tag:'温柔'},
  {id:'wisdom-5',category:'哲思',cn:'答案往往不在别处，而在你愿意停下来认真问自己的那一刻。',en:'Answers are seldom elsewhere; they arrive the moment you stop and ask yourself.',tag:'答案'},
  {id:'wisdom-6',category:'哲思',cn:'我们读过的书、走过的路，最终都会变成眼里的风景。',en:'Books we read and roads we walk become the scenery in our eyes.',tag:'风景'},
  {id:'wisdom-7',category:'哲思',cn:'人这一生，能放下多少，就能拿起多少。',en:'The more you can let go, the more you can carry.',tag:'放下'},
  {id:'wisdom-8',category:'哲思',cn:'幸福不是拥有的多，而是计较得少。',en:'Happiness is not about owning more, but about minding less.',tag:'幸福'},
  {id:'wisdom-9',category:'哲思',cn:'把今天过好，就是给明天最好的礼物。',en:'Living today well is the best gift you can give tomorrow.',tag:'当下'},
  {id:'wisdom-10',category:'哲思',cn:'所有的答案，都藏在时间里。',en:'Every answer hides within time.',tag:'时间'},
  {id:'wisdom-11',category:'哲思',cn:'生活不是我们活过的日子，而是我们记得的日子。',en:'Life is not the days we lived, but the days we remember.',tag:'记忆'},
  {id:'wisdom-12',category:'哲思',cn:'与其抱怨黑暗，不如点亮一盏灯。',en:'Rather than curse the dark, light a lamp.',tag:'行动'},
  {id:'wisdom-13',category:'哲思',cn:'心若简单，生活就简单；心若复杂，世界就复杂。',en:'A simple heart makes life simple; a complicated heart complicates the world.',tag:'简单'},
  {id:'wisdom-14',category:'哲思',cn:'我们总是走得太快，忘了为什么出发。',en:'We walk too fast and forget why we started.',tag:'初心'},
  {id:'wisdom-15',category:'哲思',cn:'世上没有白费的努力，也没有碰巧的成功。',en:'No effort is wasted, and no success is luck alone.',tag:'因果'},
  {id:'wisdom-16',category:'哲思',cn:'认识自己，是一生最长的旅程。',en:'Knowing yourself is the longest journey of a life.',tag:'自知'},
  {id:'wisdom-17',category:'哲思',cn:'痛苦是智慧的老师。',en:'Pain is the teacher of wisdom.',tag:'痛苦'},
  {id:'wisdom-18',category:'哲思',cn:'万事皆有可能，只要你愿意相信。',en:'Everything is possible, as long as you are willing to believe.',tag:'相信'},
  {id:'wisdom-19',category:'哲思',cn:'沉默，是成年人最后的体面。',en:'Silence is an adult’s final dignity.',tag:'沉默'},
  {id:'wisdom-20',category:'哲思',cn:'真正的自由，是无论在哪里，内心都安宁。',en:'True freedom is inner peace, wherever you are.',tag:'自由'},
  {id:'friend-1',category:'友谊',cn:'朋友不是天天见面，而是想起时，心里总有一个位置。',en:'Friends need not meet every day; there is always a place for them in your heart.',tag:'想念'},
  {id:'friend-2',category:'友谊',cn:'真正的朋友，在你得意时为你高兴，在你失意时陪你走过。',en:'True friends celebrate your joy and walk beside you through disappointment.',tag:'陪你'},
  {id:'friend-3',category:'友谊',cn:'友谊是各自忙碌，却依然把对方放在心上。',en:'Friendship is being busy, yet still keeping each other in your heart.',tag:'挂念'},
  {id:'friend-4',category:'友谊',cn:'好的朋友，是你能在他面前安心做自己。',en:'A good friend is someone you can safely be yourself with.',tag:'安心'},
  {id:'friend-5',category:'友谊',cn:'真正的朋友，是看见你所有的不完美，依然选择站在你身边。',en:'A true friend sees all your imperfections and still chooses to stand beside you.',tag:'接纳'},
  {id:'friend-6',category:'友谊',cn:'我们的友谊不需要每天联系，只需要每次见面都像从前。',en:'Our friendship needs no daily contact, only that every meeting feels like before.',tag:'如初'},
  {id:'friend-7',category:'友谊',cn:'有些话不必说出来，朋友也懂。',en:'Some words need no saying; a friend already understands.',tag:'默契'},
  {id:'friend-8',category:'友谊',cn:'人生海海，能有人与你同行一程，已是幸运。',en:'Life is vast; having someone walk part of the way with you is already luck.',tag:'同行'},
  {id:'friend-9',category:'友谊',cn:'友谊是一起走过黑暗，也一起看见光。',en:'Friendship is walking through the dark together, and seeing the light together.',tag:'一起'},
  {id:'friend-10',category:'友谊',cn:'好友是你可以很久不联系，却一句话就回到从前。',en:'A good friend is someone you can ignore for long, yet one sentence returns to before.',tag:'如初'},
  {id:'friend-11',category:'友谊',cn:'朋友就是，你可以把最真实的自己交出去。',en:'Friends are those you can hand your truest self to.',tag:'真实'},
  {id:'friend-12',category:'友谊',cn:'愿意听你碎碎念的人，都值得珍惜。',en:'Anyone willing to listen to your rambling is worth cherishing.',tag:'倾听'},
  {id:'friend-13',category:'友谊',cn:'好的友谊，从不需要刻意维系，也从不轻易走散。',en:'Good friendship needs no forced upkeep and never easily drifts away.',tag:'自然'},
  {id:'friend-14',category:'友谊',cn:'朋友是岁月里，自己选择的家人。',en:'Friends are the family we choose through the years.',tag:'家人'},
  {id:'friend-15',category:'友谊',cn:'无论走多远，愿我们都还是当初的样子。',en:'No matter how far we go, may we still be the same as at the beginning.',tag:'初心'},
  {id:'friend-16',category:'友谊',cn:'一个人可以走得很快，一群人可以走得更远。',en:'Alone you go fast; together you go far.',tag:'并肩'},
  {id:'home-1',category:'亲情',cn:'家是走遍世界之后，心中最柔软、最想回去的地方。',en:'Home is the softest place in your heart, the place you long to return to.',tag:'回家'},
  {id:'home-2',category:'亲情',cn:'父母的爱从不喧哗，却在每一个细节里，安静地守护着你。',en:'A parent’s love is quiet, keeping watch in every small detail.',tag:'牵挂'},
  {id:'home-3',category:'亲情',cn:'长大后才发现，父母的爱是世界上最不求回报的东西。',en:'Growing up, I realized a parent’s love asks for nothing in return.',tag:'无私'},
  {id:'home-4',category:'亲情',cn:'我们总把耐心留给陌生人，却忘了把温柔留给家人。',en:'We save patience for strangers and forget to be gentle with family.',tag:'温柔'},
  {id:'home-5',category:'亲情',cn:'走得再远，也走不出亲人的目光。',en:'No matter how far you go, you never leave a loved one’s gaze.',tag:'目光'},
  {id:'home-6',category:'亲情',cn:'家的意义，是有一个人永远等你回来吃饭。',en:'Home means someone is always waiting for you to come back for dinner.',tag:'晚饭'},
  {id:'home-7',category:'亲情',cn:'父母老去的速度，总快过我们长大的决心。',en:'Parents age faster than our resolve to grow up.',tag:'时间'},
  {id:'home-8',category:'亲情',cn:'有些爱，是用唠叨和沉默说出来的。',en:'Some love is spoken through nagging and silence.',tag:'沉默'},
  {id:'home-9',category:'亲情',cn:'小时候想离家，长大后想回家。',en:'As a child you want to leave home; as an adult you want to return.',tag:'回家'},
  {id:'home-10',category:'亲情',cn:'家人的爱，是你在外面受了委屈，转身就能找到的港湾。',en:'Family love is the harbor you can always turn to after grievances.',tag:'港湾'},
  {id:'home-11',category:'亲情',cn:'妈妈做的饭，是世界上最好吃的饭。',en:'Mom’s cooking is the best food in the world.',tag:'饭菜'},
  {id:'home-12',category:'亲情',cn:'奶奶的唠叨里，藏着最深的疼爱。',en:'Grandma’s nagging holds the deepest love.',tag:'唠叨'},
  {id:'home-13',category:'亲情',cn:'所谓长大，不过是学会替家人分担。',en:'Growing up means learning to share the burden for family.',tag:'分担'},
  {id:'home-14',category:'亲情',cn:'你平安健康，就是家人最大的心愿。',en:'Your safety and health are your family’s greatest wish.',tag:'平安'},
  {id:'home-15',category:'亲情',cn:'家不是房子，而是有人的地方。',en:'Home is not a house; it is wherever your people are.',tag:'家人'},
  {id:'home-16',category:'亲情',cn:'有一天你也会明白，陪伴是亲情最好的语言。',en:'One day you will understand that company is family love’s best language.',tag:'陪伴'},
  {id:'courage-1',category:'勇气',cn:'勇敢不是不害怕，而是带着害怕依然前行。',en:'Courage is not the absence of fear; it is moving forward with fear.',tag:'前行'},
  {id:'courage-2',category:'勇气',cn:'你比想象中更强大，每一次尝试都是靠近梦想的一步。',en:'You are stronger than you imagine; every attempt is a step toward your dream.',tag:'相信自己'},
  {id:'courage-3',category:'勇气',cn:'敢于承认自己不够好，也是一种勇敢。',en:'Admitting your imperfections is also a kind of courage.',tag:'诚实'},
  {id:'courage-4',category:'勇气',cn:'勇敢不是横冲直撞，而是明明知道会痛，还是选择温柔地面对。',en:'Courage is not recklessness; it is facing pain gently on purpose.',tag:'温柔'},
  {id:'courage-5',category:'勇气',cn:'当你决定开始，最难的部分就已经过去了。',en:'The hardest part is over once you decide to begin.',tag:'开始'},
  {id:'courage-6',category:'勇气',cn:'怕，也要往前走；这才是成年人最温柔的勇敢。',en:'Walk on even when afraid; that is the gentlest courage of adulthood.',tag:'长大'},
  {id:'courage-7',category:'勇气',cn:'说一声“我需要帮助”，需要比想象中更大的勇气。',en:'Saying “I need help” takes more courage than you imagine.',tag:'求助'},
  {id:'courage-8',category:'勇气',cn:'勇气不是大声宣布，而是在无人看见时，仍然不放弃自己。',en:'Courage is not announcing loudly; it is not giving up on yourself when no one is watching.',tag:'坚持'},
  {id:'courage-9',category:'勇气',cn:'勇敢的人，不是没有眼泪，而是含着眼泪依然奔跑。',en:'The brave are not without tears; they run on with tears in their eyes.',tag:'奔跑'},
  {id:'courage-10',category:'勇气',cn:'真正的勇气，是敢于面对真实的自己。',en:'True courage is daring to face your real self.',tag:'面对'},
  {id:'courage-11',category:'勇气',cn:'别怕重新开始，人生随时可以翻页。',en:'Do not fear starting over; life can turn a new page anytime.',tag:'重来'},
  {id:'courage-12',category:'勇气',cn:'勇气是即使害怕，也选择善良。',en:'Courage is choosing kindness even when afraid.',tag:'善良'},
  {id:'courage-13',category:'勇气',cn:'你迈出的第一步，已经打败了昨天的自己。',en:'The first step you took already beat yesterday’s you.',tag:'第一步'},
  {id:'courage-14',category:'勇气',cn:'承认失败，并重新站起来，才是真正的英雄主义。',en:'Admitting failure and standing up again is true heroism.',tag:'英雄'},
  {id:'courage-15',category:'勇气',cn:'勇敢不是无所畏惧，而是恐惧面前依然选择行动。',en:'Courage is not fearlessness; it is acting in front of fear.',tag:'行动'},
  {id:'courage-16',category:'勇气',cn:'给自己的勇气，从好好爱自己开始。',en:'Courage for yourself begins with loving yourself well.',tag:'自爱'},
  {id:'heal-1',category:'治愈',cn:'累了就停下来歇一歇，世界不会因为你休息而停止爱你。',en:'Rest when you are tired; the world will not stop loving you because you paused.',tag:'休息'},
  {id:'heal-2',category:'治愈',cn:'你已经很努力了，请允许自己慢慢来。',en:'You have tried so hard; please allow yourself to go slowly.',tag:'温柔'},
  {id:'heal-3',category:'治愈',cn:'今天的云很好看，今天的你也值得被温柔对待。',en:'The clouds are beautiful today, and so do you deserve gentleness.',tag:'今天'},
  {id:'heal-4',category:'治愈',cn:'心里难受的时候，就先好好吃饭，好好睡觉。',en:'When your heart hurts, first eat well and sleep well.',tag:'照顾好自己'},
  {id:'heal-5',category:'治愈',cn:'你不必一直坚强，偶尔示弱也是被爱的一种方式。',en:'You need not always be strong; showing weakness is also a way to be loved.',tag:'示弱'},
  {id:'heal-6',category:'治愈',cn:'有些路只能一个人走，但走着走着，天就亮了。',en:'Some roads must be walked alone, but dawn comes as you keep walking.',tag:'天亮'},
  {id:'heal-7',category:'治愈',cn:'慢慢来，比较快。',en:'Take it slow; slow is fast.',tag:'慢慢来'},
  {id:'heal-8',category:'治愈',cn:'你的感受很重要，请认真倾听自己的心。',en:'Your feelings matter; please listen carefully to your heart.',tag:'倾听'},
  {id:'heal-9',category:'治愈',cn:'治愈不是忘记，而是想起时，心里不再那么痛。',en:'Healing is not forgetting; it is remembering without so much pain.',tag:'治愈'},
  {id:'heal-10',category:'治愈',cn:'阴天也会过去，你等的晴天一定会来。',en:'Cloudy days pass; the sunny day you are waiting for will come.',tag:'晴天'},
  {id:'heal-11',category:'治愈',cn:'没关系，你已经做得很好了。',en:'It is okay; you have done well enough.',tag:'肯定'},
  {id:'heal-12',category:'治愈',cn:'难过就哭出来，哭完记得擦干眼泪继续走。',en:'Cry if you are sad; wipe your tears and keep walking after.',tag:'情绪'},
  {id:'heal-13',category:'治愈',cn:'你值得被爱，不是因为你优秀，而是因为你是你。',en:'You deserve love not because you are excellent, but because you are you.',tag:'值得'},
  {id:'heal-14',category:'治愈',cn:'好好睡一觉，醒来又是新的开始。',en:'Sleep well; waking up is a new beginning.',tag:'睡觉'},
  {id:'heal-15',category:'治愈',cn:'把烦恼写下来，它就没有那么重了。',en:'Write down your worries, and they become lighter.',tag:'书写'},
  {id:'heal-16',category:'治愈',cn:'温柔不是软弱，是看清生活后依然选择善待。',en:'Gentleness is not weakness; it is choosing kindness after seeing life clearly.',tag:'温柔'},
  {id:'heal-17',category:'治愈',cn:'请相信，你比自己想象中更值得被好好对待。',en:'Believe that you deserve good treatment more than you realize.',tag:'相信'},
  {id:'heal-18',category:'治愈',cn:'世界偶尔冷漠，但你依然可以选择温暖。',en:'The world is sometimes cold, but you can still choose warmth.',tag:'选择'},
  {id:'heal-19',category:'治愈',cn:'别怕，慢慢来，一切都会好起来的。',en:'Do not worry; take it slow; everything will be okay.',tag:'慢慢来'},
  {id:'heal-20',category:'治愈',cn:'学会和自己和解，是治愈的开始。',en:'Making peace with yourself is the start of healing.',tag:'和解'},
  {id:'heal-21',category:'治愈',cn:'再小的进步，也是值得庆祝的。',en:'Even the smallest progress deserves celebration.',tag:'进步'},
  {id:'heal-22',category:'治愈',cn:'你并不是一个人，这世上还有人愿意懂你。',en:'You are not alone; there are still people willing to understand you.',tag:'陪伴'},
  {id:'dream-1',category:'梦想',cn:'梦想是一颗种子，你浇灌它，它就长成森林。',en:'A dream is a seed; water it and it grows into a forest.',tag:'种子'},
  {id:'dream-2',category:'梦想',cn:'别害怕梦想太大，大梦想也只是一小步一小步走出来的。',en:'Do not fear big dreams; even they are walked one small step at a time.',tag:'一步一步'},
  {id:'dream-3',category:'梦想',cn:'把喜欢的事做下去，未来自然会给你答案。',en:'Keep doing what you love; the future will answer you in time.',tag:'喜欢'},
  {id:'dream-4',category:'梦想',cn:'梦想不是遥不可及，只是需要你每天靠近一点点。',en:'Dreams are not out of reach; you only need to move closer every day.',tag:'靠近'},
  {id:'dream-5',category:'梦想',cn:'追梦的路上，一个人也要像一支队伍。',en:'On the road to dreams, be an army even when alone.',tag:'队伍'},
  {id:'dream-6',category:'梦想',cn:'所有伟大的开始，都源于一次小小的“我想试试”。',en:'Every great beginning starts with a small “let me try.”',tag:'试试'},
  {id:'dream-7',category:'梦想',cn:'不要因为别人的眼光，放弃自己心里的光。',en:'Do not give up your inner light because of others’ eyes.',tag:'发光'},
  {id:'dream-8',category:'梦想',cn:'梦想不会逃跑，逃跑的永远是我们自己。',en:'Dreams do not run away; it is always we who run.',tag:'坚持'},
  {id:'dream-9',category:'梦想',cn:'你现在走的每一步，都是在给未来的自己写信。',en:'Every step you take now is a letter to your future self.',tag:'未来'},
  {id:'dream-10',category:'梦想',cn:'哪怕慢一点，也要朝着喜欢的方向走去。',en:'Even slowly, walk toward the direction you love.',tag:'方向'},
  {id:'dream-11',category:'梦想',cn:'梦想让我们在平凡的日子里，眼里有光。',en:'Dreams keep light in our eyes during ordinary days.',tag:'有光'},
  {id:'dream-12',category:'梦想',cn:'心里有梦的人，走到哪里都不会迷路。',en:'Those with dreams never lose their way.',tag:'方向'},
  {id:'dream-13',category:'梦想',cn:'追逐梦想的路上，风景比终点更动人。',en:'On the road to dreams, the scenery is more moving than the destination.',tag:'风景'},
  {id:'dream-14',category:'梦想',cn:'最怕的不是没有梦想，而是放弃得太早。',en:'The real fear is not lacking dreams, but giving up too early.',tag:'不放弃'},
  {id:'dream-15',category:'梦想',cn:'你的梦想，值得你为之早起晚睡。',en:'Your dream deserves early mornings and late nights.',tag:'值得'},
  {id:'dream-16',category:'梦想',cn:'小时候的梦想，长大后也要记得。',en:'Remember the dreams of childhood even when grown.',tag:'记得'},
  {id:'time-1',category:'时光',cn:'时光会走远，但温柔的瞬间会一直留在心里。',en:'Time moves on, but gentle moments stay in the heart.',tag:'瞬间'},
  {id:'time-2',category:'时光',cn:'时间是最好的过滤器，留下的人都很珍贵。',en:'Time is the best filter; those who remain are precious.',tag:'留下'},
  {id:'time-3',category:'时光',cn:'我们总说来日方长，却忘了世事无常。',en:'We say there is plenty of time, forgetting how uncertain life is.',tag:'当下'},
  {id:'time-4',category:'时光',cn:'夏天的风、冬天的雪，都是一年又一年的小确幸。',en:'Summer wind and winter snow are small joys, year after year.',tag:'四季'},
  {id:'time-5',category:'时光',cn:'时间不说话，却回答了所有问题。',en:'Time says nothing, yet answers every question.',tag:'答案'},
  {id:'time-6',category:'时光',cn:'把日子过成自己喜欢的样子，就是对时光最好的回应。',en:'Living days the way you like is the best answer to time.',tag:'回应'},
  {id:'time-7',category:'时光',cn:'有些回忆不会褪色，它只是换了一种颜色陪着你。',en:'Some memories never fade; they only change color to stay with you.',tag:'回忆'},
  {id:'time-8',category:'时光',cn:'愿你善待时间，也被时间善待。',en:'May you treat time kindly, and be treated kindly by it.',tag:'善待'},
  {id:'time-9',category:'时光',cn:'十年前种下的梦想，有些今天终于开了花。',en:'Dreams planted ten years ago, some have bloomed today.',tag:'花开'},
  {id:'time-10',category:'时光',cn:'时光匆匆，也别忘了停下来看看身边的风景。',en:'Time hurries; do not forget to stop and see the scenery around you.',tag:'停一停'},
  {id:'time-11',category:'时光',cn:'时间会治愈伤口，也会留下故事。',en:'Time heals wounds and leaves stories.',tag:'故事'},
  {id:'time-12',category:'时光',cn:'岁月是一场有去无回的旅行，好的坏的都是风景。',en:'Years are a one-way journey; the good and bad are all scenery.',tag:'旅程'},
  {id:'time-13',category:'时光',cn:'时光教会我们珍惜，也教会我们告别。',en:'Time teaches us to cherish, and also to say goodbye.',tag:'告别'},
  {id:'time-14',category:'时光',cn:'回首向来萧瑟处，也无风雨也无晴。',en:'Looking back at the bleak past, there is neither wind nor rain nor clear sky.',tag:'回首'},
  {id:'time-15',category:'时光',cn:'那些一起虚度的时光，后来都成了最珍贵的回忆。',en:'The time we idled away together later became the most precious memory.',tag:'虚度'},
  {id:'time-16',category:'时光',cn:'愿时光温柔，岁月无忧。',en:'May time be gentle, and years be free of worry.',tag:'祝愿'},
  {id:'life-1',category:'生活',cn:'生活明朗，万物可爱。',en:'Life is bright, and everything is lovely.',tag:'明朗'},
  {id:'life-2',category:'生活',cn:'好好吃饭，好好睡觉，就是生活的解药。',en:'Eating well and sleeping well are life’s antidote.',tag:'日常'},
  {id:'life-3',category:'生活',cn:'把日子过成诗，把时间留给喜欢的事。',en:'Turn days into poetry and time to what you love.',tag:'诗意'},
  {id:'life-4',category:'生活',cn:'生活的甜，藏在每一个用心的小事里。',en:'Life’s sweetness hides in every small thing done with care.',tag:'用心'},
  {id:'life-5',category:'生活',cn:'烟火气，是生活最真实的味道。',en:'The smell of cooking is life’s truest flavor.',tag:'烟火'},
  {id:'life-6',category:'生活',cn:'生活不必时时精致，舒服就好。',en:'Life need not always be exquisite; comfort is enough.',tag:'舒服'},
  {id:'life-7',category:'生活',cn:'平凡的日子里，藏着最动人的浪漫。',en:'Ordinary days hide the most moving romance.',tag:'平凡'},
  {id:'life-8',category:'生活',cn:'早起看日出，傍晚看日落，人生就值得。',en:'Watching sunrise and sunset makes life worthwhile.',tag:'日出日落'},
  {id:'life-9',category:'生活',cn:'一杯热茶，一本好书，就是小小的幸福。',en:'A cup of tea and a good book are a small happiness.',tag:'幸福'},
  {id:'life-10',category:'生活',cn:'生活的答案，有时就藏在菜市场里。',en:'Sometimes the answer to life hides in the vegetable market.',tag:'菜市场'},
  {id:'life-11',category:'生活',cn:'把家里收拾干净，心情也会跟着晴朗。',en:'Tidy the house, and your mood brightens too.',tag:'整洁'},
  {id:'life-12',category:'生活',cn:'好好爱自己，是终身浪漫的开始。',en:'Loving yourself well is the beginning of lifelong romance.',tag:'爱自己'},
  {id:'life-13',category:'生活',cn:'生活不是赶路，而是感受路上的风景。',en:'Life is not rushing; it is feeling the scenery along the way.',tag:'感受'},
  {id:'life-14',category:'生活',cn:'偶尔放空，也是认真生活的一部分。',en:'Occasionally zoning out is part of living seriously.',tag:'放空'},
  {id:'life-15',category:'生活',cn:'今天也要好好照顾自己。',en:'Take good care of yourself today too.',tag:'照顾'},
  {id:'life-16',category:'生活',cn:'保持热爱，生活自然有趣。',en:'Keep your passion, and life becomes interesting.',tag:'热爱'},
  {id:'life-17',category:'生活',cn:'生活的仪式感，是自己给自己的。',en:'A sense of ritual in life is something you give yourself.',tag:'仪式'},
  {id:'life-18',category:'生活',cn:'好心情，是最好的生活配饰。',en:'A good mood is life’s best accessory.',tag:'心情'},
  {id:'life-19',category:'生活',cn:'再普通的一天，也值得被认真对待。',en:'Even the most ordinary day deserves to be taken seriously.',tag:'认真'},
  {id:'life-20',category:'生活',cn:'生活有千百种样子，你开心就是最好的一种。',en:'Life has a thousand faces; your happiness is the best one.',tag:'开心'},
  {id:'alone-1',category:'孤独',cn:'孤独不是没人陪，而是没人懂。',en:'Loneliness is not having no one around, but having no one who understands.',tag:'孤独'},
  {id:'alone-2',category:'孤独',cn:'学会独处，才能更好地与人相处。',en:'Learning to be alone helps you be with others better.',tag:'独处'},
  {id:'alone-3',category:'孤独',cn:'有些路，只能一个人走。',en:'Some roads can only be walked alone.',tag:'一个人'},
  {id:'alone-4',category:'孤独',cn:'孤独并不可怕，可怕的是在人群中依然孤独。',en:'Loneliness is not scary; being lonely in a crowd is.',tag:'人群'},
  {id:'alone-5',category:'孤独',cn:'一个人也要好好生活，把日子过成喜欢的样子。',en:'Even alone, live well and make days look the way you like.',tag:'好好生活'},
  {id:'alone-6',category:'孤独',cn:'深夜的孤独，教会我们与自己对话。',en:'Midnight solitude teaches us to talk with ourselves.',tag:'深夜'},
  {id:'alone-7',category:'孤独',cn:'享受孤独，是内心强大的开始。',en:'Enjoying solitude is the start of inner strength.',tag:'强大'},
  {id:'alone-8',category:'孤独',cn:'孤独让思想安静，也让灵魂清醒。',en:'Solitude quiets the mind and wakes the soul.',tag:'清醒'},
  {id:'alone-9',category:'孤独',cn:'你并不是孤岛，只是还没遇到同频的人。',en:'You are not an island; you just have not met your frequency yet.',tag:'同频'},
  {id:'alone-10',category:'孤独',cn:'一个人看电影、吃饭、散步，也是一种自在。',en:'Watching films, dining, and strolling alone is also freedom.',tag:'自在'},
  {id:'alone-11',category:'孤独',cn:'孤独是常态，陪伴是幸运。',en:'Loneliness is normal; company is luck.',tag:'常态'},
  {id:'alone-12',category:'孤独',cn:'与自己和解，孤独也会变得温柔。',en:'Make peace with yourself, and loneliness turns gentle.',tag:'和解'},
  {id:'hope-1',category:'希望',cn:'黎明前的黑暗最浓，也最接近天亮。',en:'The dark before dawn is deepest, and closest to sunrise.',tag:'黎明'},
  {id:'hope-2',category:'希望',cn:'无论多难，都不要放弃明天。',en:'No matter how hard, never give up on tomorrow.',tag:'明天'},
  {id:'hope-3',category:'希望',cn:'希望是暗夜里的一盏灯，虽然微弱，却足以指路。',en:'Hope is a lamp in the dark; faint, yet enough to guide.',tag:'灯'},
  {id:'hope-4',category:'希望',cn:'冬天来了，春天还会远吗。',en:'If winter comes, can spring be far behind?',tag:'春天'},
  {id:'hope-5',category:'希望',cn:'一切都会过去，一切都会好起来。',en:'Everything passes; everything will be okay.',tag:'会好的'},
  {id:'hope-6',category:'希望',cn:'心里有希望的人，眼里永远有光。',en:'Those with hope always have light in their eyes.',tag:'有光'},
  {id:'hope-7',category:'希望',cn:'别让暂时的困难，遮住长久的光。',en:'Do not let temporary trouble block the long-lasting light.',tag:'暂时'},
  {id:'hope-8',category:'希望',cn:'每天都是新的开始，永远来得及。',en:'Every day is a new beginning; it is never too late.',tag:'来得及'},
  {id:'hope-9',category:'希望',cn:'相信美好，美好才会靠近你。',en:'Believe in beauty, and beauty will draw near.',tag:'相信'},
  {id:'hope-10',category:'希望',cn:'风雨过后，天空总会有彩虹。',en:'After the storm, the sky always shows a rainbow.',tag:'彩虹'},
  {id:'hope-11',category:'希望',cn:'希望不是看见才相信，而是相信才会看见。',en:'Hope is not seeing then believing; it is believing so you can see.',tag:'信念'},
  {id:'hope-12',category:'希望',cn:'再微小的光，也能照亮一段路。',en:'Even the smallest light can light a stretch of road.',tag:'微光'},
  {id:'hope-13',category:'希望',cn:'请把期待留给未来，把努力留给今天。',en:'Keep expectation for the future and effort for today.',tag:'期待'},
  {id:'hope-14',category:'希望',cn:'没有什么过不去的坎，只有过不去的心情。',en:'There is no hurdle you cannot cross, only moods that refuse.',tag:'心情'},
  {id:'hope-15',category:'希望',cn:'好运正在赶来的路上，你要先照顾好自己。',en:'Good luck is on its way; take care of yourself first.',tag:'好运'},
  {id:'hope-16',category:'希望',cn:'愿你眼中有星辰，心中有山海。',en:'May you have stars in your eyes and oceans in your heart.',tag:'星辰'},
  {id:'read-1',category:'阅读',from:'拾语录',cn:'读一本好书，就是和一个有趣的灵魂聊天。',en:'Reading a good book is chatting with an interesting soul.',tag:'读书'},
  {id:'read-2',category:'阅读',from:'拾语录',cn:'书是随身携带的避难所。',en:'A book is a refuge we carry with us.',tag:'避难所'},
  {id:'read-3',category:'阅读',from:'拾语录',cn:'阅读让我们在别人的故事里，读懂自己的人生。',en:'Reading lets us understand our own lives inside others’ stories.',tag:'共鸣'},
  {id:'read-4',category:'阅读',from:'拾语录',cn:'书读得多了，内心就不再荒芜。',en:'Read enough, and your heart will never be barren.',tag:'内心'},
  {id:'read-5',category:'阅读',from:'拾语录',cn:'有些书，翻开的瞬间，世界就安静了。',en:'Some books quiet the world the moment you open them.',tag:'安静'},
  {id:'read-6',category:'阅读',from:'拾语录',cn:'书页间，藏着另一个更辽阔的自己。',en:'Between the pages hides a wider version of yourself.',tag:'辽阔'},
  {id:'read-7',category:'阅读',from:'拾语录',cn:'睡前读几页书，梦都会更温柔。',en:'Read a few pages before bed, and even dreams grow gentler.',tag:'睡前'},
  {id:'read-8',category:'阅读',from:'拾语录',cn:'一本旧书，也是一段旧时光。',en:'An old book is also a piece of old time.',tag:'旧时光'},
  {id:'read-9',category:'阅读',from:'拾语录',cn:'读书的人，眼里有星辰大海。',en:'Those who read have stars and oceans in their eyes.',tag:'眼界'},
  {id:'read-10',category:'阅读',from:'拾语录',cn:'好书如老友，久别重逢依然亲切。',en:'A good book is an old friend; reunion still feels warm.',tag:'老友'},
  {id:'read-11',category:'阅读',from:'拾语录',cn:'阅读是成本最低的远行。',en:'Reading is the cheapest journey.',tag:'远行'},
  {id:'read-12',category:'阅读',from:'拾语录',cn:'想不通的时候，去书里找答案。',en:'When confused, look for answers in books.',tag:'答案'},
  {id:'read-13',category:'阅读',from:'拾语录',cn:'把书读薄，把人读厚。',en:'Make books thinner and yourself richer.',tag:'沉淀'},
  {id:'read-14',category:'阅读',from:'拾语录',cn:'一生中遇到的每本书，都有它出现的理由。',en:'Every book in your life appears for a reason.',tag:'缘分'},
  {id:'travel-1',category:'旅行',from:'拾语录',cn:'旅行是换个地方，重新喜欢生活。',en:'Travel is loving life again somewhere else.',tag:'重新喜欢'},
  {id:'travel-2',category:'旅行',from:'拾语录',cn:'世界那么大，总有一处风景为你而来。',en:'The world is huge; some scenery comes just for you.',tag:'风景'},
  {id:'travel-3',category:'旅行',from:'拾语录',cn:'去远方，是为了更好地回来。',en:'Going far is for returning better.',tag:'远方'},
  {id:'travel-4',category:'旅行',from:'拾语录',cn:'旅途的意义，不在终点，而在路上。',en:'The meaning of a journey is not the destination but the road.',tag:'在路上'},
  {id:'travel-5',category:'旅行',from:'拾语录',cn:'看过山川湖海，才懂人间值得。',en:'After seeing mountains and seas, you know life is worth it.',tag:'值得'},
  {id:'travel-6',category:'旅行',from:'拾语录',cn:'护照上的印章，是给青春的纪念。',en:'Stamps on a passport are souvenirs of youth.',tag:'护照'},
  {id:'travel-7',category:'旅行',from:'拾语录',cn:'陌生城市的晚风，也能吹散很多心事。',en:'The evening breeze of a strange city can blow away worries.',tag:'晚风'},
  {id:'travel-8',category:'旅行',from:'拾语录',cn:'一个人旅行，是和世界谈一场恋爱。',en:'Traveling alone is falling in love with the world.',tag:'独自'},
  {id:'travel-9',category:'旅行',from:'拾语录',cn:'把向往的地方，变成走过的路。',en:'Turn places you long for into roads you have walked.',tag:'向往'},
  {id:'travel-10',category:'旅行',from:'拾语录',cn:'旅行最动人的，是遇见意料之外的自己。',en:'The most moving part of travel is meeting an unexpected you.',tag:'意外'},
  {id:'travel-11',category:'旅行',from:'拾语录',cn:'出发，是解决一切犹豫的办法。',en:'Departure is the answer to every hesitation.',tag:'出发'},
  {id:'travel-12',category:'旅行',from:'拾语录',cn:'每一场旅行，都是一次小小的重生。',en:'Every trip is a small rebirth.',tag:'重生'},
  {id:'travel-13',category:'旅行',from:'拾语录',cn:'远方的风景，最后都会装进心里。',en:'Distant scenery ends up carried in your heart.',tag:'装进心里'},
  {id:'travel-14',category:'旅行',from:'拾语录',cn:'世界是一本书，不旅行的人只读到一页。',en:'The world is a book; those who never travel read only one page.',tag:'世界'},
  {id:'night-1',category:'夜晚',from:'拾语录',cn:'夜晚适合思念，也适合安睡。',en:'Night suits longing, and also sound sleep.',tag:'夜晚'},
  {id:'night-2',category:'夜晚',from:'拾语录',cn:'晚安，是把今天轻轻放下。',en:'Good night is gently putting today down.',tag:'晚安'},
  {id:'night-3',category:'夜晚',from:'拾语录',cn:'月亮不营业的时候，星星替你点灯。',en:'When the moon is off duty, stars light your way.',tag:'星星'},
  {id:'night-4',category:'夜晚',from:'拾语录',cn:'深夜的安静，是留给自己的礼物。',en:'The quiet of the night is a gift to yourself.',tag:'安静'},
  {id:'night-5',category:'夜晚',from:'拾语录',cn:'睡不着的时候，就想想温柔的事。',en:'When you cannot sleep, think of gentle things.',tag:'入睡'},
  {id:'night-6',category:'夜晚',from:'拾语录',cn:'夜晚会收走白天的疲惫，留下清醒的自己。',en:'Night takes the day’s fatigue and leaves the clear you.',tag:'清醒'},
  {id:'night-7',category:'夜晚',from:'拾语录',cn:'所有的心事，都会被夜色温柔包裹。',en:'All worries are softly wrapped by the night.',tag:'心事'},
  {id:'night-8',category:'夜晚',from:'拾语录',cn:'睡前原谅一切，醒来便是新生。',en:'Forgive everything before sleep; wake to a new life.',tag:'原谅'},
  {id:'night-9',category:'夜晚',from:'拾语录',cn:'城市的夜，也有属于你的那盏灯。',en:'Even in the city night, there is a light for you.',tag:'灯火'},
  {id:'night-10',category:'夜晚',from:'拾语录',cn:'夜再深，天总会亮。',en:'However deep the night, dawn always comes.',tag:'天亮'},
  {id:'night-11',category:'夜晚',from:'拾语录',cn:'把手机放下，把世界放轻。',en:'Put the phone down; lighten the world.',tag:'放下'},
  {id:'night-12',category:'夜晚',from:'拾语录',cn:'星空不问赶路人，但会温柔地照着。',en:'The starry sky never asks your hurry, yet shines gently.',tag:'星空'},
  {id:'night-13',category:'夜晚',from:'拾语录',cn:'夜晚是白昼的休止符，也是明天的序曲。',en:'Night is the rest between days, and the prelude to tomorrow.',tag:'休止符'},
  {id:'night-14',category:'夜晚',from:'拾语录',cn:'愿你今夜好梦，明天有光。',en:'May you dream well tonight and wake to light tomorrow.',tag:'好梦'},
  {id:'nature-1',category:'自然',from:'拾语录',cn:'去山里走走，心就变大了。',en:'Walk in the mountains, and your heart grows.',tag:'山'},
  {id:'nature-2',category:'自然',from:'拾语录',cn:'风没有形状，却把自由吹进心里。',en:'Wind has no shape, yet blows freedom into your heart.',tag:'风'},
  {id:'nature-3',category:'自然',from:'拾语录',cn:'大海不说话，却能容纳所有情绪。',en:'The sea says nothing, yet holds every emotion.',tag:'海'},
  {id:'nature-4',category:'自然',from:'拾语录',cn:'一棵树的沉默，比一万句安慰更有力。',en:'A tree’s silence is stronger than ten thousand comforts.',tag:'树'},
  {id:'nature-5',category:'自然',from:'拾语录',cn:'雨后的空气，是生活给的清新剂。',en:'Air after rain is life’s fresh start.',tag:'雨后'},
  {id:'nature-6',category:'自然',from:'拾语录',cn:'看云卷云舒，才知道日子可以很慢。',en:'Watching clouds drift, you learn days can be slow.',tag:'云'},
  {id:'nature-7',category:'自然',from:'拾语录',cn:'花开有时，花落也有时，都很好看。',en:'Flowers bloom and fall in their own time; both are lovely.',tag:'花'},
  {id:'nature-8',category:'自然',from:'拾语录',cn:'清晨的鸟鸣，是大自然在道早安。',en:'Morning birdsong is nature saying good morning.',tag:'清晨'},
  {id:'nature-9',category:'自然',from:'拾语录',cn:'散步的时候，烦恼会被路边的小花分走。',en:'On a stroll, little flowers share your worries.',tag:'散步'},
  {id:'nature-10',category:'自然',from:'拾语录',cn:'山高水长，人间值得。',en:'High mountains and long rivers make the world worthwhile.',tag:'山河'},
  {id:'nature-11',category:'自然',from:'拾语录',cn:'自然是最好的疗愈师。',en:'Nature is the best healer.',tag:'疗愈'},
  {id:'nature-12',category:'自然',from:'拾语录',cn:'把手机放下，听听风声和心跳。',en:'Put the phone down; listen to wind and heartbeat.',tag:'放空'},
  {id:'nature-13',category:'自然',from:'拾语录',cn:'春有百花秋有月，夏有凉风冬有雪。',en:'Spring flowers, autumn moon, summer breeze, winter snow.',tag:'四季'},
  {id:'nature-14',category:'自然',from:'拾语录',cn:'身在草木间，心也在慢慢变绿。',en:'Among trees and grass, your heart slowly turns green.',tag:'草木'},
  {id:'work-1',category:'工作',from:'拾语录',cn:'工作是为了更好地生活，而不是取代生活。',en:'Work serves life; it should never replace it.',tag:'生活'},
  {id:'work-2',category:'工作',from:'拾语录',cn:'把小事做好，大事自然会有答案。',en:'Do small things well; big things answer themselves.',tag:'小事'},
  {id:'work-3',category:'工作',from:'拾语录',cn:'忙的时候，也别忘记抬头看看天空。',en:'When busy, remember to look up at the sky.',tag:'抬头'},
  {id:'work-4',category:'工作',from:'拾语录',cn:'职场上最体面的，是认真与负责。',en:'In the workplace, the most dignified thing is care and responsibility.',tag:'体面'},
  {id:'work-5',category:'工作',from:'拾语录',cn:'下班后的时间，决定你生活的宽度。',en:'Time after work decides the width of your life.',tag:'下班'},
  {id:'work-6',category:'工作',from:'拾语录',cn:'先完成，再完美。',en:'Finish first, perfect later.',tag:'完成'},
  {id:'work-7',category:'工作',from:'拾语录',cn:'一份热爱的工作，是半个理想生活。',en:'A job you love is half an ideal life.',tag:'热爱'},
  {id:'work-8',category:'工作',from:'拾语录',cn:'会工作，也要会休息。',en:'Know how to work, and how to rest.',tag:'休息'},
  {id:'work-9',category:'工作',from:'拾语录',cn:'别把工作的情绪，带回生活的饭桌。',en:'Do not bring work moods to the dinner table.',tag:'情绪'},
  {id:'work-10',category:'工作',from:'拾语录',cn:'认真的人，在哪里都会发光。',en:'Serious people shine anywhere.',tag:'认真'},
  {id:'work-11',category:'工作',from:'拾语录',cn:'升职加薪很重要，但睡个好觉更重要。',en:'Promotion matters, but a good night’s sleep matters more.',tag:'睡觉'},
  {id:'work-12',category:'工作',from:'拾语录',cn:'工作可以平凡，态度不能平庸。',en:'Work may be ordinary; attitude must not be.',tag:'态度'},
  {id:'work-13',category:'工作',from:'拾语录',cn:'团队的意义，是让一个人不再孤单。',en:'A team means you are no longer alone.',tag:'团队'},
  {id:'work-14',category:'工作',from:'拾语录',cn:'保持好奇，是职场不老的秘诀。',en:'Curiosity is the secret to staying young at work.',tag:'好奇'},
  {id:'learn-1',category:'学习',from:'拾语录',cn:'学习是随身携带的财富。',en:'Learning is wealth you carry everywhere.',tag:'财富'},
  {id:'learn-2',category:'学习',from:'拾语录',cn:'不会没关系，慢慢学就好。',en:'Not knowing is fine; learn slowly.',tag:'不会'},
  {id:'learn-3',category:'学习',from:'拾语录',cn:'好奇心，是最好的老师。',en:'Curiosity is the best teacher.',tag:'好奇'},
  {id:'learn-4',category:'学习',from:'拾语录',cn:'每天进步一点点，一年后就是另一个自己。',en:'Improve a little daily; in a year you are someone new.',tag:'进步'},
  {id:'learn-5',category:'学习',from:'拾语录',cn:'学习不是为了考试，而是为了选择。',en:'Learning is not for exams, but for choices.',tag:'选择'},
  {id:'learn-6',category:'学习',from:'拾语录',cn:'会提问，比会回答更重要。',en:'Asking well matters more than answering well.',tag:'提问'},
  {id:'learn-7',category:'学习',from:'拾语录',cn:'重复不是笨，是通往熟练的必经之路。',en:'Repetition is not dullness; it is the road to mastery.',tag:'重复'},
  {id:'learn-8',category:'学习',from:'拾语录',cn:'学到的知识，总有一天会派上用场。',en:'Knowledge learned will be useful someday.',tag:'知识'},
  {id:'learn-9',category:'学习',from:'拾语录',cn:'终身学习，是给未来自己最好的投资。',en:'Lifelong learning is the best investment in your future self.',tag:'投资'},
  {id:'learn-10',category:'学习',from:'拾语录',cn:'不懂就问，是聪明的开始。',en:'Asking when unsure is the start of wisdom.',tag:'请教'},
  {id:'learn-11',category:'学习',from:'拾语录',cn:'学习新技能，是给自己的礼物。',en:'Learning a new skill is a gift to yourself.',tag:'礼物'},
  {id:'learn-12',category:'学习',from:'拾语录',cn:'纸上得来终觉浅，绝知此事要躬行。',en:'What you read on paper is shallow; true knowing comes from practice.',tag:'实践'},
  {id:'learn-13',category:'学习',from:'拾语录',cn:'保持学习的人，眼里永远有光。',en:'Those who keep learning always have light in their eyes.',tag:'有光'},
  {id:'learn-14',category:'学习',from:'拾语录',cn:'别怕学得慢，只怕你不开始。',en:'Fear not learning slowly; fear never starting.',tag:'开始'},
  {id:'poem-1',category:'古诗词',from:'陶渊明',cn:'采菊东篱下，悠然见南山。',en:'Picking chrysanthemums by the eastern fence, idly I see the southern mountains.',tag:'田园'},
  {id:'poem-2',category:'古诗词',from:'李白',cn:'人生得意须尽欢，莫使金樽空对月。',en:'While life is going well, make merry; do not let the golden cup face the moon empty.',tag:'尽欢'},
  {id:'poem-3',category:'古诗词',from:'李白',cn:'举头望明月，低头思故乡。',en:'I raise my head to see the bright moon, then lower it, thinking of home.',tag:'故乡'},
  {id:'poem-4',category:'古诗词',from:'王安石',cn:'春风又绿江南岸，明月何时照我还。',en:'Spring wind greens the southern shore again; when will the bright moon take me home?',tag:'归乡'},
  {id:'poem-5',category:'古诗词',from:'王勃',cn:'海内存知己，天涯若比邻。',en:'If you have a bosom friend within the four seas, the ends of the earth are as near as next door.',tag:'知己'},
  {id:'poem-6',category:'古诗词',from:'高适',cn:'莫愁前路无知己，天下谁人不识君。',en:'Do not worry there is no friend ahead; who in this world does not know you?',tag:'知己'},
  {id:'poem-7',category:'古诗词',from:'李白',cn:'桃花潭水深千尺，不及汪伦送我情。',en:'Peach Blossom Pool is a thousand feet deep, yet not as deep as Wang Lun’s farewell.',tag:'情谊'},
  {id:'poem-8',category:'古诗词',from:'秦观',cn:'两情若是久长时，又岂在朝朝暮暮。',en:'If love is long-lasting, why must we be together morning and night?',tag:'爱情'},
  {id:'poem-9',category:'古诗词',from:'杜甫',cn:'会当凌绝顶，一览众山小。',en:'I must ascend the summit, to see all mountains small.',tag:'志向'},
  {id:'poem-10',category:'古诗词',from:'王之涣',cn:'白日依山尽，黄河入海流。',en:'The sun sets behind the mountains; the Yellow River flows into the sea.',tag:'山河'},
  {id:'poem-11',category:'古诗词',from:'李绅',cn:'谁知盘中餐，粒粒皆辛苦。',en:'Who knows that every grain on the plate comes from hard toil?',tag:'珍惜'},
  {id:'poem-12',category:'古诗词',from:'孟浩然',cn:'春眠不觉晓，处处闻啼鸟。',en:'Sleeping in spring, I never notice dawn; everywhere birds are singing.',tag:'春晓'},
  {id:'poem-13',category:'古诗词',from:'陆游',cn:'山重水复疑无路，柳暗花明又一村。',en:'Mountains repeat, waters wind, the road seems to end; then willows and flowers open a new village.',tag:'转机'},
  {id:'poem-14',category:'古诗词',from:'刘禹锡',cn:'沉舟侧畔千帆过，病树前头万木春。',en:'By the sunken boat a thousand sails pass; before the sick tree ten thousand trees spring.',tag:'新生'},
  {id:'poem-15',category:'古诗词',from:'谚语',cn:'宝剑锋从磨砺出，梅花香自苦寒来。',en:'A sword’s edge comes from grinding; plum blossom fragrance from bitter cold.',tag:'磨砺'},
  {id:'poem-16',category:'古诗词',from:'屈原',cn:'路漫漫其修远兮，吾将上下而求索。',en:'The road is long and far; I will seek high and low.',tag:'求索'},
  {id:'poem-17',category:'古诗词',from:'李白',cn:'天生我材必有用。',en:'Heaven gave me talents; they must be useful.',tag:'自信'},
  {id:'poem-18',category:'古诗词',from:'朱熹',cn:'少年易老学难成，一寸光阴不可轻。',en:'Youth ages fast, learning is hard; do not waste a single inch of time.',tag:'惜时'},
  {id:'poem-19',category:'古诗词',from:'韩愈',cn:'书山有路勤为径，学海无涯苦作舟。',en:'Diligence is the path up the mountain of books; hard work is the boat across the sea of learning.',tag:'勤学'},
  {id:'poem-20',category:'古诗词',from:'周易',cn:'天行健，君子以自强不息。',en:'Heaven moves with vigor; a gentleman strives to strengthen himself.',tag:'自强'},
  {id:'poem-21',category:'古诗词',from:'老子',cn:'千里之行，始于足下。',en:'A journey of a thousand miles begins with a single step.',tag:'开始'},
  {id:'poem-22',category:'古诗词',from:'诸葛亮',cn:'静以修身，俭以养德。',en:'Tranquility cultivates the self; frugality nurtures virtue.',tag:'修身'},
  {id:'poem-23',category:'古诗词',from:'经典',cn:'不忘初心，方得始终。',en:'Keep the original heart, and you will reach the end.',tag:'初心'},
  {id:'poem-24',category:'古诗词',from:'孔融',cn:'岁月不居，时节如流。',en:'Time does not pause; the seasons flow like water.',tag:'时光'},
  {id:'film-1',category:'电影',from:'练习曲',cn:'有些事，现在不做，一辈子都不会做了。',en:'Some things, if not done now, will never be done in a lifetime.',tag:'行动'},
  {id:'film-2',category:'电影',from:'阿甘正传',cn:'生活就像一盒巧克力，你永远不知道下一颗是什么味道。',en:'Life is like a box of chocolates; you never know what you are going to get.',tag:'未知'},
  {id:'film-3',category:'电影',from:'心灵捕手',cn:'真正的勇敢，是知道生活的真相后依然热爱生活。',en:'True courage is loving life after knowing its truth.',tag:'热爱'},
  {id:'film-4',category:'电影',from:'熔炉',cn:'我们一路奋战，不是为了改变世界，而是为了不让世界改变我们。',en:'We fight all the way not to change the world, but so the world does not change us.',tag:'坚守'},
  {id:'film-5',category:'电影',from:'经典台词',cn:'梦想还是要有的，万一实现了呢。',en:'Dreams are worth having; what if they come true?',tag:'梦想'},
  {id:'film-6',category:'电影',from:'你的名字',cn:'爱你的人，会跨越千山万水来见你。',en:'Someone who loves you will cross mountains and rivers to see you.',tag:'奔赴'},
  {id:'film-7',category:'电影',from:'经典台词',cn:'过去是无法改变的，但未来是可以的。',en:'The past cannot be changed, but the future can.',tag:'未来'},
  {id:'film-8',category:'电影',from:'经典台词',cn:'除了生死，都是小事。',en:'Apart from life and death, everything is a small matter.',tag:'豁达'},
  {id:'film-9',category:'电影',from:'爱乐之城',cn:'时间会证明一切。',en:'Time will prove everything.',tag:'时间'},
  {id:'film-10',category:'电影',from:'经典台词',cn:'做你自己，因为别人都有人做了。',en:'Be yourself; everyone else is taken.',tag:'做自己'},
  {id:'film-11',category:'电影',from:'心灵奇旅',cn:'别让任何人打乱你的节奏。',en:'Do not let anyone disrupt your rhythm.',tag:'节奏'},
  {id:'film-12',category:'电影',from:'遗愿清单',cn:'生命的意义，在于你怎样度过每一天。',en:'The meaning of life is how you spend each day.',tag:'当下'},
  {id:'film-13',category:'电影',from:'经典台词',cn:'勇敢地面对未知，才是活着。',en:'Facing the unknown bravely is what it means to be alive.',tag:'勇敢'},
  {id:'film-14',category:'电影',from:'经典台词',cn:'也许，最好的还没有到来。',en:'Perhaps the best is yet to come.',tag:'期待'},
  {id:'film-15',category:'电影',from:'海蒂和爷爷',cn:'家，是让你找到自己答案的地方。',en:'Home is where you find your own answers.',tag:'家'},
  {id:'film-16',category:'电影',from:'经典台词',cn:'你的善良，必须带点锋芒。',en:'Your kindness must carry an edge.',tag:'善良'},
  {id:'film-17',category:'电影',from:'经典台词',cn:'一个人真正的强大，是内心不再害怕失去。',en:'True strength is a heart no longer afraid of loss.',tag:'强大'},
  {id:'film-18',category:'电影',from:'经典台词',cn:'世界这么大，我想去看看。',en:'The world is so big; I want to go see it.',tag:'远方'},
  {id:'film-19',category:'电影',from:'罗马假日',cn:'人生就像一场旅行，不必在乎目的地，在乎的是沿途的风景。',en:'Life is a journey; what matters is the scenery along the way, not the destination.',tag:'风景'},
  {id:'film-20',category:'电影',from:'经典台词',cn:'愿你走出半生，归来仍是少年。',en:'May you return with a young heart after half a lifetime.',tag:'少年'},
  {id:'film-21',category:'电影',from:'经典台词',cn:'不管发生什么，都要相信明天。',en:'Whatever happens, believe in tomorrow.',tag:'明天'},
  {id:'film-22',category:'电影',from:'经典台词',cn:'爱情可以等，生活不能等。',en:'Love can wait; life cannot.',tag:'生活'},
  {id:'film-23',category:'电影',from:'经典台词',cn:'真正的告别，是好好说再见。',en:'A true farewell is saying goodbye properly.',tag:'告别'},
  {id:'film-24',category:'电影',from:'经典台词',cn:'勇气不是没有恐惧，而是面对恐惧时依然向前。',en:'Courage is not the absence of fear, but moving forward in its face.',tag:'勇气'},
  {id:'song-1',category:'歌词',from:'后来',cn:'后来，我总算学会了如何去爱。',en:'Later, I finally learned how to love.',tag:'后来'},
  {id:'song-2',category:'歌词',from:'山丘',cn:'越过山丘，才发现无人等候。',en:'Over the hill, I found no one waiting.',tag:'山丘'},
  {id:'song-3',category:'歌词',from:'红玫瑰',cn:'得不到的永远在骚动，被偏爱的都有恃无恐。',en:'What you cannot get always stirs you; the favored feel fearless.',tag:'偏爱'},
  {id:'song-4',category:'歌词',from:'给自己的歌',cn:'想得却不可得，你奈人生何。',en:'What you want you cannot get; what can you do about life.',tag:'人生'},
  {id:'song-5',category:'歌词',from:'我要你',cn:'我要你在我身旁，我要你为我梳妆。',en:'I want you by my side; I want you to dress up for me.',tag:'思念'},
  {id:'song-6',category:'歌词',from:'平凡之路',cn:'平凡之路，一直向前。',en:'The ordinary road, always moving forward.',tag:'平凡'},
  {id:'song-7',category:'歌词',from:'平凡之路',cn:'我曾经跨过山和大海，也穿过人山人海。',en:'I once crossed mountains and seas, and walked through crowds.',tag:'曾经'},
  {id:'song-8',category:'歌词',from:'南山南',cn:'风吹过的路，依然远，你的故事讲到了哪。',en:'The road the wind passed is still long; where has your story reached?',tag:'故事'},
  {id:'song-9',category:'歌词',from:'清白之年',cn:'时光迟暮不返，人生已不再来。',en:'Time grows late and never returns; life will not come again.',tag:'时光'},
  {id:'song-10',category:'歌词',from:'用力活着',cn:'我们都在用力地活着。',en:'We are all living with all our strength.',tag:'用力'},
  {id:'song-11',category:'歌词',from:'安和桥',cn:'我知道，那些夏天就像你一样回不来。',en:'I know those summers, like you, will never return.',tag:'夏天'},
  {id:'song-12',category:'歌词',from:'从前慢',cn:'从前的日色变得慢，车、马、邮件都慢。',en:'In the old days, time moved slowly: carts, horses, and letters all slow.',tag:'从前'},
  {id:'song-13',category:'歌词',from:'演员',cn:'简单点，说话的方式简单点。',en:'Be simpler; speak in a simpler way.',tag:'简单'},
  {id:'song-14',category:'歌词',from:'好久不见',cn:'你会不会忽然的出现，在街角的咖啡店。',en:'Will you suddenly appear, at the café on the corner?',tag:'遇见'},
  {id:'song-15',category:'歌词',from:'想见你',cn:'想带你去看晴空万里，想大声告诉你我为你着迷。',en:'I want to show you the clear sky; I want to tell you loudly I am drawn to you.',tag:'想见你'},
  {id:'song-16',category:'歌词',from:'胡适',cn:'怕什么真理无穷，进一寸有一寸的欢喜。',en:'Do not fear infinite truth; each inch gained is an inch of joy.',tag:'欢喜'},
  {id:'song-17',category:'歌词',from:'小小',cn:'回忆像个说书的人，用充满乡音的口吻。',en:'Memory is like a storyteller, speaking with a hometown accent.',tag:'回忆'},
  {id:'song-18',category:'歌词',from:'我的未来式',cn:'我的未来式由我做主。',en:'My future is my own to decide.',tag:'未来'},
  {id:'song-19',category:'歌词',from:'空白格',cn:'我想你是爱我的，我猜你也舍不得。',en:'I think you love me; I guess you cannot bear to let go either.',tag:'舍不得'},
  {id:'song-20',category:'歌词',from:'夜空中最亮的星',cn:'夜空中最亮的星，请照亮我前行。',en:'Brightest star in the night sky, please light my way forward.',tag:'星光'},
  {id:'song-21',category:'歌词',from:'经典歌词',cn:'明天会更好，不是吗。',en:'Tomorrow will be better, won’t it?',tag:'明天'},
  {id:'song-22',category:'歌词',from:'那些花儿',cn:'那些花儿，已经散落在天涯。',en:'Those flowers have scattered to the ends of the earth.',tag:'散落'},
  {id:'song-23',category:'歌词',from:'经典歌词',cn:'岁月很长，人间很忙，记得把温柔留给自己。',en:'Years are long and the world is busy; keep some gentleness for yourself.',tag:'温柔'},
  {id:'song-24',category:'歌词',from:'经典歌词',cn:'如果事与愿违，请相信另有安排。',en:'If things go against your wishes, believe there is another arrangement.',tag:'安排'},
  {id:'zen-1',category:'禅意',from:'六祖慧能',cn:'本来无一物，何处惹尘埃。',en:'Originally there is nothing; where can dust settle?',tag:'空'},
  {id:'zen-2',category:'禅意',from:'六祖慧能',cn:'菩提本无树，明镜亦非台。',en:'Bodhi is not a tree; a bright mirror is not a stand.',tag:'明镜'},
  {id:'zen-3',category:'禅意',from:'禅语',cn:'一花一世界，一叶一菩提。',en:'A flower is a world; a leaf is a bodhi.',tag:'世界'},
  {id:'zen-4',category:'禅意',from:'禅语',cn:'心静则国土净。',en:'When the mind is still, the land is pure.',tag:'心静'},
  {id:'zen-5',category:'禅意',from:'禅语',cn:'放下，是另一种拥有。',en:'Letting go is another way of possessing.',tag:'放下'},
  {id:'zen-6',category:'禅意',from:'禅语',cn:'随缘不是随便，是顺其自然。',en:'Following fate is not carelessness; it is going with nature.',tag:'随缘'},
  {id:'zen-7',category:'禅意',from:'禅语',cn:'命里有时终须有，命里无时莫强求。',en:'What is meant for you will come; what is not, do not force.',tag:'顺其自然'},
  {id:'zen-8',category:'禅意',from:'禅语',cn:'一念放下，万般自在。',en:'Let go of one thought, and be free in all things.',tag:'自在'},
  {id:'zen-9',category:'禅意',from:'禅语',cn:'大悲无泪，大悟无言，大笑无声。',en:'Great sorrow has no tears; great awakening has no words; great laughter has no sound.',tag:'觉悟'},
  {id:'zen-10',category:'禅意',from:'禅语',cn:'心平气和，则万事可成。',en:'With a calm mind, all things may be done.',tag:'心平'},
  {id:'zen-11',category:'禅意',from:'禅意',cn:'风来疏竹，风过而竹不留声。',en:'Wind rustles bamboo; when it passes, bamboo keeps no sound.',tag:'不留'},
  {id:'zen-12',category:'禅意',from:'禅意',cn:'雁渡寒潭，雁去而潭不留影。',en:'Wild geese cross a cold pool; when they leave, the pool keeps no shadow.',tag:'不留影'},
  {id:'zen-13',category:'禅意',from:'禅语',cn:'山不转水转，水不转人转。',en:'If the mountain will not turn, the water will; if the water will not, people will.',tag:'变通'},
  {id:'zen-14',category:'禅意',from:'禅语',cn:'保持一颗平常心，人生处处是风景。',en:'Keep an ordinary heart; scenery is everywhere in life.',tag:'平常心'},
  {id:'zen-15',category:'禅意',from:'禅语',cn:'不悲不喜，便是晴天。',en:'Neither sorrow nor joy means a sunny day.',tag:'晴天'},
  {id:'zen-16',category:'禅意',from:'禅意',cn:'少即是多，静即是动。',en:'Less is more; stillness is movement.',tag:'少即是多'},
  {id:'zen-17',category:'禅意',from:'禅语',cn:'心若无尘，一花一世界。',en:'If the heart is dust-free, every flower is a world.',tag:'无尘'},
  {id:'zen-18',category:'禅意',from:'禅语',cn:'凡事看淡，心就不累。',en:'Take things lightly, and your heart will not tire.',tag:'看淡'},
  {id:'zen-19',category:'禅意',from:'格言',cn:'静坐常思己过，闲谈莫论人非。',en:'Sit quietly and reflect on your faults; in talk, do not judge others.',tag:'自省'},
  {id:'zen-20',category:'禅意',from:'禅意',cn:'从容，是最好的态度。',en:'Composure is the best attitude.',tag:'从容'},
  {id:'zen-21',category:'禅意',from:'格言',cn:'忍一时风平浪静，退一步海阔天空。',en:'Endure a moment and the wind calms; step back and the sea and sky open wide.',tag:'退一步'},
  {id:'zen-22',category:'禅意',from:'科恩',cn:'万物皆有裂痕，那是光照进来的地方。',en:'There is a crack in everything; that is how the light gets in.',tag:'裂痕'},
  {id:'zen-23',category:'禅意',from:'禅语',cn:'顺其自然，水到渠成。',en:'Let nature take its course; water flows to completion.',tag:'自然'},
  {id:'zen-24',category:'禅意',from:'禅语',cn:'平常心是道。',en:'An ordinary heart is the Way.',tag:'平常心'},  {id:'love-25',category:'爱情',from:'拾语录',cn:'真正的偏爱，是把你放进每一个明天。',en:'True preference is making room for you in every tomorrow.',tag:'偏爱'},
  {id:'growth-25',category:'成长',from:'拾语录',cn:'你不需要一次走完人生，先走好眼前这一小步。',en:'You do not need to finish life at once; take the next small step well.',tag:'一步'},
  {id:'wisdom-25',category:'哲思',from:'拾语录',cn:'想得太远会疲惫，活在当下才有回声。',en:'Thinking too far exhausts us; living now gives life an echo.',tag:'当下'},
  {id:'friend-25',category:'友谊',from:'拾语录',cn:'好的朋友不是天天见面，而是想起时心里仍然很亮。',en:'Good friends need not meet daily; remembering them still brightens the heart.',tag:'友谊'},
  {id:'home-25',category:'亲情',from:'拾语录',cn:'家不是催你回去的声音，是你疲惫时仍想打开的门。',en:'Home is not the voice urging you back, but the door you still want to open when tired.',tag:'回家'},
  {id:'courage-25',category:'勇气',from:'拾语录',cn:'害怕也要去做的事，做完以后就会变成你的力量。',en:'What you do while afraid becomes your strength afterward.',tag:'勇敢'},
  {id:'heal-25',category:'治愈',from:'拾语录',cn:'先照顾好今天的自己，明天会有新的办法。',en:'Take care of yourself today; tomorrow will bring another way.',tag:'照顾自己'},
  {id:'dream-25',category:'梦想',from:'拾语录',cn:'远方不会自己靠近，但每一次出发都在缩短距离。',en:'The distance will not close itself, but every departure shortens it.',tag:'出发'},
  {id:'time-25',category:'时光',from:'拾语录',cn:'岁月带走一些答案，也把你变成更懂自己的人。',en:'Time takes some answers away and makes you someone who knows yourself better.',tag:'岁月'},
  {id:'life-25',category:'生活',from:'拾语录',cn:'把小事做好，日子就会慢慢长出光。',en:'Do small things well, and life slowly grows its own light.',tag:'日常'},
  {id:'hope-25',category:'希望',from:'拾语录',cn:'看不见出口的时候，也别急着否定这条路。',en:'When you cannot see an exit, do not be too quick to deny the road.',tag:'相信'},
  {id:'reading-25',category:'阅读',from:'拾语录',cn:'书页替你保管的，不只是故事，还有曾经的自己。',en:'Pages keep not only stories, but also the selves we once were.',tag:'书页'},
  {id:'love-26',category:'爱情',from:'拾语录',cn:'喜欢你之后，连普通的日子都想认真过。',en:'After liking you, even ordinary days feel worth living well.',tag:'认真'},
  {id:'love-27',category:'爱情',from:'拾语录',cn:'你不用一直发光，我爱的就是你偶尔黯淡的样子。',en:'You do not need to shine all the time; I love you even in your dim moments.',tag:'包容'},
  {id:'growth-26',category:'成长',from:'拾语录',cn:'那些让你深夜难过的日子，后来都成了你站得更稳的理由。',en:'The nights that hurt later become the reasons you stand steady.',tag:'挺过来'},
  {id:'heal-26',category:'治愈',from:'拾语录',cn:'允许自己休息一天，世界不会因此停转，你会。',en:'Allow yourself one rest day; the world will not stop, but you will find your footing.',tag:'喘息'},
  {id:'hope-26',category:'希望',from:'拾语录',cn:'天还没亮的时候，先替自己点一盏小小的灯。',en:'Before dawn, light a small lamp for yourself.',tag:'天亮之前'},
  {id:'alone-26',category:'孤独',from:'拾语录',cn:'一个人吃饭、散步、看电影，也是把日子过给自己的方式。',en:'Eating, walking, and watching films alone is a way of living your days for yourself.',tag:'独处'},
  {id:'home-26',category:'亲情',from:'拾语录',cn:'长大后才知道，妈妈的唠叨是最早的天气预报。',en:'Growing up teaches you that a mother\'s nagging is the earliest weather forecast.',tag:'惦记'},
  {id:'courage-26',category:'勇气',from:'拾语录',cn:'害怕不是弱点，是你明明害怕却还是去了的证明。',en:'Fear is not weakness; it is proof that you went anyway.',tag:'害怕也去'},
  {id:'time-26',category:'时光',from:'拾语录',cn:'我们常常在失去之后，才听懂那句当时没听懂的话。',en:'Only after loss do we hear the words we could not understand back then.',tag:'后知后觉'},
  {id:'friend-26',category:'友谊',from:'拾语录',cn:'好朋友是各自生活里跌倒，却仍然相信对方会爬起来的人。',en:'Good friends fall in their own lives yet still believe the other will rise.',tag:'相信'},
  {id:'night-26',category:'夜晚',from:'拾语录',cn:'晚安不是一天的结束，是有人愿意陪你走到梦里。',en:'Good night is not the end of the day; it is someone willing to walk with you into dreams.',tag:'晚安'},
  {id:'life-26',category:'生活',from:'拾语录',cn:'好好吃饭、好好睡觉、好好告别，日子就会慢慢变好。',en:'Eat well, sleep well, say goodbye well; little by little life improves.',tag:'好好生活'},
  {id:'love-28',category:'爱情',from:'拾语录',cn:'吵架后愿意先低头的人，不是输了，是更在乎。',en:'The one who lowers their head after a fight is not losing; they simply care more.',tag:'和好'},
  {id:'growth-27',category:'成长',from:'拾语录',cn:'你不需要让所有人满意，先让自己安心。',en:'You need not please everyone; first put your own heart at ease.',tag:'安心'},
  {id:'growth-28',category:'成长',from:'拾语录',cn:'允许自己普通，也是一种难得的清醒。',en:'Allowing yourself to be ordinary is a rare kind of clarity.',tag:'普通'},
  {id:'wisdom-27',category:'哲思',from:'拾语录',cn:'生活给你的难题，往往也是给你的礼物。',en:'The hard questions life gives you are often gifts in disguise.',tag:'难题'},
  {id:'friend-27',category:'友谊',from:'拾语录',cn:'朋友是那个让你不用解释太多的人。',en:'A friend is someone you never have to explain too much to.',tag:'懂你'},
  {id:'home-27',category:'亲情',from:'拾语录',cn:'长大后，报喜不报忧是最温柔的事。',en:'Growing up, only reporting good news is the gentlest thing we do.',tag:'报喜不报忧'},
  {id:'courage-27',category:'勇气',from:'拾语录',cn:'敢于慢下来，也是一种勇敢。',en:'Daring to slow down is also a kind of courage.',tag:'慢下来'},
  {id:'courage-28',category:'勇气',from:'拾语录',cn:'开始很难，但开始之后一切都好说。',en:'Starting is hard, but everything gets easier once you do.',tag:'迈出去'},
  {id:'heal-27',category:'治愈',from:'拾语录',cn:'今天也要像夸别人一样，夸夸自己。',en:'Today, praise yourself the way you praise others.',tag:'夸自己'},
  {id:'heal-28',category:'治愈',from:'拾语录',cn:'你不必一直做那个懂事的人。',en:'You do not have to be the sensible one all the time.',tag:'懂事'},
  {id:'dream-27',category:'梦想',from:'拾语录',cn:'把梦写下来，它就有了形状。',en:'Write your dream down, and it takes shape.',tag:'写下来'},
  {id:'dream-28',category:'梦想',from:'拾语录',cn:'喜欢的事，就是生活里的火花。',en:'What you love is the spark in your life.',tag:'火花'},
  {id:'time-27',category:'时光',from:'拾语录',cn:'回忆会泛黄，但当时的温度不会。',en:'Memories may yellow, but their warmth never fades.',tag:'温度'},
  {id:'life-27',category:'生活',from:'拾语录',cn:'把一顿饭做给自己吃，也是一种爱。',en:'Cooking a meal for yourself is also a way of loving yourself.',tag:'爱自己'},
  {id:'life-28',category:'生活',from:'拾语录',cn:'周末的意义，是把时间还给自己。',en:'The point of weekends is giving time back to yourself.',tag:'周末'},
  {id:'alone-27',category:'孤独',from:'拾语录',cn:'一个人的时候，把日子过成自己喜欢的样子。',en:'When alone, shape your days the way you love.',tag:'自在'},
  {id:'hope-27',category:'希望',from:'拾语录',cn:'跌倒的地方，也会开出新的花。',en:'New flowers can bloom where you once fell.',tag:'新生'},
  {id:'hope-28',category:'希望',from:'拾语录',cn:'哪怕只有一点光，也够走下去。',en:'Even a little light is enough to keep walking.',tag:'一点光'},
  {id:'night-27',category:'夜晚',from:'拾语录',cn:'今晚的月亮，也在陪着你。',en:'Tonight, the moon is keeping you company too.',tag:'月亮'},
  {id:'nature-15',category:'自然',from:'拾语录',cn:'雨后初晴的光，最温柔。',en:'The light right after rain is the gentlest.',tag:'初晴'},
  {id:'work-15',category:'工作',from:'拾语录',cn:'加班之后，也要记得好好吃饭。',en:'After overtime, remember to eat well.',tag:'加班'},
  {id:'learn-15',category:'学习',from:'拾语录',cn:'学不会的时候，再试一次就好。',en:'When you cannot learn it, just try once more.',tag:'再试一次'},
  {id:'poem-25',category:'古诗词',from:'王维',cn:'独在异乡为异客，每逢佳节倍思亲。',en:'Alone in a strange land, I miss my family most at every festival.',tag:'思亲'},
  {id:'film-25',category:'电影',from:'千与千寻',cn:'希望我们都能成为更好的人。',en:'May we all become better people.',tag:'更好'},
  {id:'song-25',category:'歌词',from:'少年',cn:'我还是从前那个少年，没有一丝丝改变。',en:'I am still that boy from before, unchanged in the slightest.',tag:'少年'},
  {id:'zen-25',category:'禅意',from:'禅语',cn:'心若不动，风又奈何。',en:'If the heart does not move, what can the wind do?',tag:'心静'},
  {id:'read-15',category:'阅读',from:'拾语录',cn:'书是翻不完的远方。',en:'Books are a distance you can never finish turning.',tag:'远方'},
  {id:'travel-15',category:'旅行',from:'拾语录',cn:'下一站，总会遇到惊喜。',en:'At the next stop, surprises await.',tag:'下一站'},
  {id:'friend-28',category:'友谊',from:'拾语录',cn:'好朋友是那个记得你口味的人。',en:'A good friend remembers your taste.',tag:'记得'},
  {id:'home-28',category:'亲情',from:'拾语录',cn:'常回家看看，是最简单的心愿。',en:'Visiting home often is the simplest wish.',tag:'常回家'}
];
quotes.push(...extraQuotes);

const stories = [
  {id:'story-1',category:'相遇',title:'那把多出来的伞',meta:'雨天 · 关于主动靠近',excerpt:'父亲走后，她总带着那把大伞。后来她才知道，伞是留给别人的，也是留给自己的。',body:'父亲走的那天，雨下了一整天。十七岁的她站在灵堂外，看见母亲在雨里站了很久，回来时浑身湿透，却把家里的每一把伞都找出来，修好、擦干，说：“以后家里要多备一把伞，万一谁忘了带。”她当时不懂，只是蹲在门口哭。\n高三那年冬天，公交站的雨又急又冷。她看见一个男生抱着一沓湿了一半的卷子站在雨里，头发贴在额头上。她犹豫了一下，把伞往他那边挪了挪。男生愣住，声音有点抖：“谢谢你。”她说：“不用谢，伞本来就很大。”她没说的是，那一刻她想起了父亲——父亲从前也总爱把伞偏向别人，自己淋湿半边肩膀。\n后来他们加了联系方式，聊到很晚。她告诉他她失去了父亲，他说他父母离婚了，妈妈去了另一个城市。两个都有缺口的人，在雨里拼凑出一点暖。可惜高考后他们去了不同的城市，联系慢慢断了。她删过他两次，又加回来三次。\n十年后，朋友给她介绍相亲。她走进餐厅，看见靠窗坐着一个男人，桌上放着一把伞，伞柄系着一条褪色的红绳——是她当年系上去的。她坐下，男人抬眼看见她，眼眶一下红了：“我找了你很久，久到差点以为那场雨是一场梦。”\n她忽然想起母亲的话。原来那把多出来的伞，从来不是为别人准备的，是为每一个独自淋雨、却还愿意把伞分给别人的人准备的。她笑了笑，声音很轻：“那你要不要再让我一次？这次，让我撑你回家。”',quoteId:'love-1'},
  {id:'story-2',category:'相遇',title:'迟到的那杯咖啡',meta:'清晨 · 关于刚刚好',excerpt:'她失业那阵，每天靠窗坐着改简历。有一天她迟到，发现有人把早餐留给了下一个人。',body:'林知夏失业的第一周，她把自己关在家里哭了三场，然后开始每天七点去巷口的咖啡店，坐在靠窗的位置改简历。简历越改越短，最后只剩一行：她认真地做过每一件小事。她不敢告诉爸妈，电话里只说自己很好。\n那天她睡过头，到店时靠窗的位置已经有人。一个男人正对着电脑皱眉，桌上摆着两份早餐。她站在原地，进退不是。男人抬起头，把其中一份推过来：“刚好多点了一份，凉了就浪费了。”她坐下来，低着头说谢谢，声音有点哑。\n后来她发现，他每天都会多带一份早餐。她以为是习惯，直到有一天她早到，隔着玻璃看见他多买了一份饭团，看了看店门口，又放回包里。她追出去问他为什么，他愣了愣：“你看起来很难过，我不知道能做什么，多带一份早餐，至少你早上不会饿着。”\n她站在人来人往的街口，忽然就哭了。她哭的不是失业，是这三个星期里，她是第一次被人看见。男人没安慰她，只说：“我也失业过八个月，最难的时候，是楼下面馆老板娘每天给我多加一个蛋。后来我好了，就想把这份好传下去。”\n三个月后她拿到新offer，离开前去咖啡店，他不在。她留了一张字条压在杯垫下：谢谢那份早餐，我已经好起来了，下一份，留给别人。后来她上班第一件事，是给同事带了早餐。有些善意就是这样，被人接着，再轻轻递给下一个人。',quoteId:'love-6'},
  {id:'story-3',category:'成长',title:'跑慢一点的孩子',meta:'操场 · 关于自己的节奏',excerpt:'他曾经因为跑得慢而难过，后来发现，慢也能抵达自己的终点。',body:'陈默最怕体育课。他跑得慢，每次都是最后一个。小学运动会那天，他在最后一圈岔了气，前面的同学已经冲过终点，欢呼声涌向冠军。他停下来，弯着腰，觉得全校都在看他的狼狈。有人笑他，他装作没听见，眼泪却掉在跑道上。\n他听见有人喊他的名字。是班主任，站在终点线旁边，手里拿着一瓶水，全场只有老师在等他。他低头盯着脚边的白线，一步一步重新跑起来。到终点时，老师把水递给他，只说：“你看，你也到了。”他接过水，终于没忍住，哭出声来。\n后来他中考失利，复读那一年，他把“慢一点也没关系”贴在书桌上，贴到纸边都卷起来。高考前夜他失眠，给老师发短信：“老师，我还是很怕跑不到终点。”老师回他：“我教过很多跑得快的学生，但一直记得那个哭着跑完也没有放弃的人。你早就到了，只是你自己不知道。”\n陈默现在是一名中学老师。每次运动会，他都站在终点线旁边，等最后一个孩子。有个孩子跑不动了，蹲在跑道上哭，他走过去蹲下，说：“不急，老师陪你把这条路走完。”那个孩子抬头看他，就像当年的他抬头看老师。',quoteId:'growth-4'},
  {id:'story-4',category:'成长',title:'口袋里的小石头',meta:'长大 · 关于放下',excerpt:'有些委屈握得太久，就会忘记自己原本可以轻装前行。',body:'苏晴分手那天，在河边捡了一颗圆润的石头放进外套口袋。她告诉自己，只是喜欢它的形状。可后来，石头越来越多：被否定的方案、被放鸽子的聚会、妈妈那句“你到底什么时候安定下来”，每一件不开心的事，她都捡一颗石头放进去，像给委屈盖了个章。\n半年后她搬家，那件外套沉得挂不住。她把石头倒出来，数了数，一共九颗。她坐在地板上，忽然发现，没有一颗石头是快乐的记忆。她装回去，继续背着它们生活，像背着九件没有出口的委屈，走每一步都很重。\n第二年春天，她回到那条河。河水很浅，石头扔进去，溅起一小圈涟漪。她蹲在岸边，一颗一颗放回水里。放到第七颗的时候她停住了，蹲在河边哭得说不出话。她哭的不是他，是那九个月里，她把所有的难过都一个人扛着，从来没有问过自己累不累。\n最后两颗她握了很久。一颗是当初那颗圆润的，她放回了水里；另一颗带红斑的，她留了下来，放在窗台上。它不是委屈了，它只是她走过那段路的证据。她擦干眼泪，站起来，发现自己的脚步比来的时候轻了很多。\n后来有人问她还恨不恨，她说：“不恨了。我只是终于愿意，把那些压着我的石头，一颗一颗还回去。”',quoteId:'wisdom-7'},
  {id:'story-5',category:'生活',title:'冰箱上的便签',meta:'厨房 · 关于被惦记',excerpt:'家里最温柔的语言，常常不是“我爱你”，而是“记得吃饭”。',body:'周晓搬去上海那天，妈妈在她房间站了很久，最后往她行李箱塞了一包厚袜子，又在冰箱门上贴了张便签：天冷加衣，记得吃饭。她嫌麻烦，用手机拍了照，没有带走。\n上海的出租屋很小，小到放不下一句真话。她每天加班到十点，外卖盒在垃圾桶里堆成小山，冰箱里只有过期的牛奶。有次视频，妈妈问她在吃什么，她举起一份精致的沙拉说：“营养着呢。”挂了视频，她把沙拉扔进垃圾桶，蹲在地上哭了。\n有一晚她发高烧，浑身发抖，蜷在床上点了一份粥。粥送到时，她看见门口放着一个快递，是妈妈寄的。里面是厚袜子、退烧药，还有一张手写便签：烧退了就回家看看，妈妈给你炖汤。\n她坐在地上哭到凌晨，第二天买了最早的票回家。妈妈开门，什么也没问，只说：“饿了吧，汤在灶上。”她喝了三碗，眼泪掉进汤里。她忽然明白，那些“记得吃饭”不是唠叨，是她不在家的日子里，妈妈唯一能做的事——用她能想到的最笨的方式，一遍遍告诉她：妈妈在等你回来。\n回上海前，她把那张“天冷加衣”的便签重新贴回冰箱，又加了一句：这次我会好好吃饭。关上冰箱门的那一刻，她觉得这间租来的房子，第一次有了家的味道。',quoteId:'home-6'},
  {id:'story-6',category:'生活',title:'楼下的花店',meta:'黄昏 · 关于小小的浪漫',excerpt:'生活不会每天发生大事，但它会把小小的好事藏在拐角。',body:'那段时间，我在公司被否定到怀疑人生。方案改了十一版，改了第十一版还是被退回。那天加班到九点，走出写字楼，我在楼下的花店门口看见一束花，是蔫了一半的向日葵，旁边立着块小牌子：今天这束花，送给需要它的人。\n我把它带回家，插在矿泉水瓶里，放在书桌上。第二天上班前，我看着那朵垂头的向日葵，忽然觉得自己和它一样，蔫了，但还没死。那天我咬咬牙，把第十二版方案发了出去。\n花店的老板姓叶，大家都叫他叶叔。后来我才知道，叶叔的妻子生前最爱百合。她走后，叶叔每天傍晚都会留一束花在门口。他说：“她喜欢花被人带回家，而不是烂在店里。花谢了没关系，被人记得过，就值得。”\n他说这话的时候，把一枝百合修剪得很仔细，像在照顾一个人。我站在旁边，忽然鼻子发酸。原来这世上，真的有人把思念过成了一家花店，每天把花送给陌生人，好像只要花还在被人带走，她就还在。\n第十二版方案过了。离开前我去和叶叔道别，他往我手里塞了一枝向日葵：“下次难的时候，记得花也会先低头，再抬头。”后来我也学会了，在同事累的时候带一杯咖啡，在楼下给晚归的人留一盏灯。温柔就是这样，被人接过一次，就再也放不下了。',quoteId:'life-4'},
  {id:'story-7',category:'告别',title:'站台上的橘子',meta:'车站 · 关于好好说再见',excerpt:'真正的告别不是不难过，而是即使难过，也愿对方走向更远的地方。',body:'我二十岁那年第一次出远门，去两千公里外的城市读研。父亲送我到车站，一路没说几句话，只反复检查我的行李，把拉链拉开又拉上。检票口快关闭时，他从布袋里掏出两个橘子，塞进我手里：“路上饿了就吃。”\n我坐上火车，从车窗里看见他站在月台上，一直没走。火车开动时，他往前跟了几步，又停下来。我握着那两个橘子，手心里还留着他掌心的温度。我剥开一个，甜得有些发酸，眼泪忽然就掉下来。我在心里说：爸，我舍不得你，但我不敢说，我怕说了就不想走了。\n后来我在那座城市恋爱、失恋、找工作、换工作，每次撑不下去就给他打电话。他不问为什么，只说：“累了就回来，家里给你留着饭。”我始终没告诉他，那年月台上的两个橘子，我留了一个在宿舍窗台上，放到干瘪。\n去年我送女儿去寄宿学校。她回头看我时，我忽然懂了父亲当年的心情：不是不想留你，是知道你该去更远的地方，我只能站在原地，把舍不得咽回去。我把一个橘子放进她书包，学着他的语气说：“路上饿了就吃。”女儿头也不回地走了，我站在原地，像当年的父亲一样，往前跟了两步，又停下来。\n那天晚上父亲给我打电话，我听见他那边有风声，他说：“你女儿和你当年一模一样，头也不回。”我们都笑了，笑着笑着，谁都没说话。有些爱就是这样，从不说再见，却一直在身后。',quoteId:'home-5'},
  {id:'story-8',category:'告别',title:'最后一封没有寄出的信',meta:'深夜 · 关于和过去握手',excerpt:'有些话写下来，不是为了寄给谁，而是为了把自己从过去领回来。',body:'分手第三个月，许澄还是会半夜点开他的朋友圈。她决定写一封信，把三年里没说出口的话全部写完。她写到：他生日那天，她攒了三个月的钱买的那块表；她发烧时他还在打游戏；还有最后那句“我们冷静一下”之后，长达一个月的沉默。\n信写了四个晚上。写到第二晚她哭了，因为发现很多事她早就知道答案，只是不敢承认。写到第三晚她不哭了，开始觉得空。第四晚她写完最后一句：“祝你幸福。”然后坐在桌前，看着那封信，忽然明白，她放不下的不是他，是那个三年里一直替他说好话的自己。\n她没有寄出那封信。她把信折好，和旧照片一起装进鞋盒，塞进衣柜最里面。半年后搬家，她打开鞋盒，重新读那封信，读到“祝你幸福”时，她发现自己已经想不起他的声音了。\n她抱着鞋盒下楼，把信和照片一起倒进回收箱。风吹过来，纸页翻了个身，露出她熟悉的字迹，然后被风带走。她站在那里很久，没有哭，只是长长地呼了一口气，像卸下了什么。\n回家路上她买了一把百合，插进花瓶。她对着花说：“以后，先照顾自己。”有些话写下来，从来不是为了寄给谁，而是为了让自己在写完最后一个字的时候，终于可以抬起头，往前走了。',quoteId:'heal-20'},
  {id:'story-9',category:'相遇',title:'书页里的车票',meta:'旧书店 · 关于远方',excerpt:'一本旧书里夹着一张车票，带着一个陌生人去过的远方。',body:'我在旧书店买到一本诗集，扉页上写着“1998，赠予自己”。翻开时，一张泛黄的车票掉了出来，从成都到拉萨，日期已经模糊。我捡起车票，翻到背面，上面有一行字：“出发那天，天很蓝。”\n我总说要去拉萨，说了五年。理由攒了一箩筐：工作太忙，钱不够，没人陪，怕高反。其实我心里清楚，我不是怕高反，是怕一个人。我怕到了远方，发现远方也救不了我，那我就连“等我有空就去”的梦都没有了。\n我把那张车票夹回书里，放回书架。晚上又把它抽出来，在灯下看了很久。二十年前写下那行字的人，也许和我一样害怕过，但他还是去了。他把一张车票留在书里，像留了一句给陌生人的话：你害怕的那条路，有人替你走过。\n三个月后，我真的站在成都火车站。火车翻过雪山的时候，我靠着车窗哭了。我哭的不是高反，是终于明白，我害怕的从来不是远方，是那个站在原地等了五年的自己。\n回来后，我把那张旧车票贴在新书桌的玻璃下，旁边贴着我自己的票。有人问我为什么留着陌生人的车票，我说：“他替我证明了，出发那天，天真的会很蓝。”',quoteId:'travel-11'},
  {id:'story-10',category:'成长',title:'凌晨四点的灯',meta:'书桌 · 关于不放弃',excerpt:'没有人看见的努力，也会在某个清晨变成你自己的光。',body:'高三那年，我发誓要考一所好大学，每天凌晨四点起床背单词。冬天很冷，我把闹钟塞在被子里，震到自己惊醒。窗外整条街只有一盏路灯，和对楼一扇亮着的窗。\n那扇窗每天凌晨四点准时亮起，五点四十熄灭。我不知道里面住着谁，但那束光让我觉得，这世上不是只有我在熬。有一次我撑不住，趴在窗台上，看见那扇窗里有人影动了动，像是在和我一样，抬头看天。\n高考成绩出来那天，我比估分低了四十分。我把自己关在房间，把书全部塞进纸箱，蹲在地上哭到喘不上气。夜里我最后一次站在窗前，对楼那扇窗还亮着。我忽然想，那个人是不是也考砸过？可他还是每天四点起床。第二天凌晨，我重新打开了台灯。\n复读那一年，我把那扇窗当成我的灯。它一天不灭，我就一天没有理由放弃。后来我考上了理想的专业。搬走那天凌晨，我最后看了一眼那扇窗，灯已经灭了。我站在楼道里，忽然有点想哭，却不知道是为了什么。\n很多年后我才知道，住在对楼的是位退休教师，他每天四点起来备课，给山区的孩子上网课。我们从未说过话，但那个冬天的每一盏灯，都替我照见过自己咬牙的样子。原来有些陪伴，不需要认识，只需要在深夜里，有一个人和你一样没有放弃。',quoteId:'courage-8'},
  {id:'story-11',category:'生活',title:'周三的面包',meta:'面包房 · 关于被照顾',excerpt:'店员每周三都会多放一块面包，不解释，只是因为她看起来很累。',body:'李婷被裁员那天，天气很好。她走出写字楼，手里拿着一个纸箱，里面是她工位上的全部：一个马克杯，一盆多肉，和一张没送出去的辞职信。她没敢告诉任何人，包括她的合租室友。\n她开始每天假装去上班，背着电脑去图书馆投简历。傍晚她拐进巷口的面包店，买一袋最便宜的吐司。店里的姑娘每次都会往袋子里多放一块小小的可颂，说：“今天试吃。”她吃到的口味每周都不同：奶油、巧克力、咸蛋黄。\n她以为店里天天有试吃。直到某个周三她早下班，隔着玻璃看见姑娘包好吐司，正要拿可颂，又看了看店外，把可颂放了回去。她这才明白，那块可颂不是试吃，是姑娘专门留给她的。她推门进去，问为什么。\n姑娘有点不好意思：“你每次来都看起来好累，周三又总是最晚。我就想，多给你一块甜的，说不定日子会好一点。”李婷站在面包架前，眼泪一下子涌出来。她哭了很久，把裁员的事全说了。姑娘递给她一块新烤的牛角包：“那就从现在开始，重新发面，重新长大。”\n后来李婷换了一份喜欢的工作，也学会了每周三给自己买一块可颂。再后来，她也开了一家小小的面包店，每天打烊前把剩下的面包包好，放在门口，给晚归的人。她不知道那些人经历了什么，只希望有一天，也有人记得：生活很苦的时候，有人给过他一块甜的。',quoteId:'heal-13'},
  {id:'story-12',category:'告别',title:'候车室的晚安',meta:'远行 · 关于把爱留在身后',excerpt:'他说晚安的时候，天已经亮了，因为他们身处不同的城市。',body:'顾一和程安异地三年，一个在北京，一个在成都。他们之间的时差只有一个小时，却总像隔着一整个白天。顾一睡前发“晚安”，程安凌晨才看到，回一句“早安”。两个人的聊天记录里，全是一来一回的错位。\n异地最难的不是想念，是那些具体到疼的瞬间：她发烧，他在电话那头只能说“多喝热水”；他搬家，她只能隔着屏幕指挥；她加班到崩溃，想靠在他肩上，却只能对着手机哭。她从来没说过分手，但她有时候会想，这样的日子，到底有没有尽头。\n有一次程安来北京，两人在候车室等车。他问她：“你有没有后悔过，找一个这么远的我？”顾一没有回答，只是把手机递给他，屏幕上是他凌晨回的那句“早安”，她一直没舍得删，备注是“今天也要好好生活的人”。\n车来了，程安进站前说：“这次换我先说晚安。”顾一笑起来，眼泪却先掉下来。她在玻璃门外看着他，他朝她挥手，手机亮起来：“晚安，这次是真的。”她蹲在候车室的椅子上，哭得说不出话。她知道，他没有让她等。\n第三年，程安申请调到了北京。搬进新家的第一个晚上，他坐在沙发上等顾一回家，十点整发了一条消息：“晚安。”顾一在楼下回他：“这次不用跨过一整个夜晚了。”他们终于明白，距离没有把两个人变远，它只是让他们比谁都更珍惜，那句准时到达的晚安。',quoteId:'love-18'}
];

const quoteDetails={
  'love-1':'这句话写的是一场双向奔赴：不是一个人反复试探，也不是一个人独自等待，而是你愿意坚定地向我走来，我也愿意把真诚和热烈交给你。真正珍贵的关系，往往不是谁追得更辛苦，而是彼此都在主动靠近。',
  'love-6':'它写的不是一见钟情，而是当一个人刚好出现在你愿意重新相信的时刻。平凡的日子没有变，是心里有了人，才让每一件小事都开始值得期待。',
  'growth-4':'它是在说，人生不是一场赛跑。花有自己的花期，人有自己的步调，慢不是落后，只是你正按自己的节奏长大。',
  'wisdom-7':'有些委屈被握在手里太久，会让人忘记自己原本可以轻装前行。放下不是否定过去，而是承认自己已经走了很远，终于愿意把手空出来。',
  'home-6':'家人的爱常常不响亮，藏在“记得吃饭”“天冷加衣”这些重复的话里。它不是远方的牵绊，而是无论你走多远，都为你亮着的一盏灯。',
  'life-4':'它提醒你，生活不会天天发生大事，但会把小小的好事藏在拐角。一朵快谢的花、一杯顺手带的咖啡，都可能正好接住一个人的一天。',
  'home-5':'真正的告别不是不难过，而是即使难过，也愿意对方去更远的地方。有些爱不挽留，因为它相信你会把自己照顾得很好。',
  'heal-20':'写下来的那些话，不是为了让谁后悔，而是让自己终于把没说完的说完，然后带着轻一点的自己继续生活。',
  'travel-11':'一张旧车票，一个陌生人的远方。它想说的是，很多地方并不负责拯救你，但出发会把你从漫长的等待里带回来。',
  'courage-8':'坚持不是轰轰烈烈，而是无数个没人看见的凌晨，你仍然愿意坐回书桌前。那些不被看见的努力，最后都会变成你自己的光。',
  'heal-13':'最深的温柔，常常是有人记得你疲惫的样子，然后不动声色地多给你一点甜。它不说破，却刚好接住你的难。',
  'love-18':'世界很大，选择很多，但我只想和你慢慢走。慢不是拖沓，是把每一天都留给值得的人。',
  'love-26':'喜欢一个人的最好证据，不是说了多少漂亮话，而是你开始认真对待那些原本随便过一过的日子。',
  'love-27':'爱不是只爱一个人发光的样子，而是他黯淡的时候，你依然觉得他可爱。真正的偏爱，往往在对方不够好的时候才被看清。',
  'growth-26':'那些让你深夜难过的日子没有白过。它们会在某个你站得更稳的时刻，变成你真正信得过自己的理由。',
  'heal-26':'允许自己休息一天，不是偷懒，是在告诉生活：我可以慢一点，但我没有放弃。',
  'hope-26':'天还没亮的时候，先替自己点一盏小灯。光不必大，够看清脚下的路就好。',
  'alone-26':'一个人吃饭、散步、看电影，不是可怜，是把日子认真地过给自己看。独处不是空，是自己陪自己好好待着。',
  'home-26':'长大后才会听懂，妈妈的唠叨是最早的天气预报。她说的不是天气，是你今天有没有照顾好自己。',
  'courage-26':'害怕不是弱点。真正的勇气，是你明明害怕，还是去了，然后带着那道伤疤继续往前走。',
  'time-26':'很多话要等失去之后才听懂。后知后觉不是遗憾的终点，是我们终于愿意重新理解那些日子。',
  'friend-26':'好朋友不是从不吵架，而是各自生活里跌倒后，仍然相信对方会爬起来。你信我，我就有了再试一次的力气。',
  'night-26':'晚安不是一天的结束，是有人愿意陪你走到梦里。它是一天里最后一句、也是最安心的一句。',
  'life-26':'好好吃饭、好好睡觉、好好告别，把每件小事认真做完，日子就会在你不注意的时候，慢慢变好。'
};
const list = document.querySelector('#quoteList');
const quoteExplanations={
  'love-1':'双向奔赴：你向我走来，我也把你放在心上。',
  'love-2':'心动容易，心安难得，久处不厌才是真。',
  'love-3':'平淡生活因你有了光，漫长岁月有了方向。',
  'love-4':'浪漫不在远方，在愿意一起过日子的决心。',
  'love-5':'陪伴是最长情的告白，四季都有你在。',
  'love-6':'有人出现，连普通日子都有了盼头。',
  'love-7':'爱是给彼此更大的世界，而不是圈住对方。',
  'love-8':'好的关系是各自发光，也互相照亮。',
  'love-9':'爱真实的你，而不是你努力装出来的样子。',
  'love-10':'既能安心做自己，又想为你变得更好。',
  'love-11':'从遇见那刻起，就没打算回头。',
  'love-12':'人海茫茫，所有的路最后都指向你。',
  'love-13':'想念是连晚风都想和你分享。',
  'love-14':'各自忙碌，心里始终给彼此留着位置。',
  'love-15':'话不必说满，你在就是安心。',
  'love-16':'浪漫是愿意把平常日子过得温柔。',
  'love-17':'看见缺点仍觉得可爱，才是包容。',
  'love-18':'世界再大，只想和你慢慢走。',
  'love-19':'软肋是你，铠甲也是你。',
  'love-20':'沉默不尴尬，是两个人最好的默契。',
  'love-21':'你给的温柔，让我想温柔整个世界。',
  'love-22':'喜欢一个人，会让自己慢慢变好。',
  'love-23':'一起看过的日落，都成了共同的记忆。',
  'love-24':'白头偕老，不过是愿意陪你慢慢变老。',
  'love-25':'偏爱不是说说，是把对方放进每个明天。',
  'love-26':'喜欢会让人认真对待原本普通的每一天。',
  'love-27':'爱一个人，也爱他偶尔黯淡的时刻。',
  'growth-1':'跌倒和流泪，都是成长的学费。',
  'growth-2':'不必活成别人，你已经足够好。',
  'growth-3':'追光的人，自己也会发光。',
  'growth-4':'花有花期，人有节奏，慢点没关系。',
  'growth-5':'长大不是变冷，是温柔更有力量。',
  'growth-6':'停下来，也是一种前进。',
  'growth-7':'时间花在哪，成长就在哪。',
  'growth-8':'开始就是最好的准备。',
  'growth-9':'把目光从别人身上，收回自己心里。',
  'growth-10':'做自己的光，别等着被照亮。',
  'growth-11':'成长是一次次与昨天的自己告别。',
  'growth-12':'先爱自己，才有余力爱别人。',
  'growth-13':'厉害的人，努力都不动声色。',
  'growth-14':'只要比昨天好，就是赢。',
  'growth-15':'人生是马拉松，坚持比速度重要。',
  'growth-16':'独处是成长送自己的礼物。',
  'growth-17':'今天的汗水，是明天的底气。',
  'growth-18':'路远会累，但不走会后悔。',
  'growth-19':'先成为自己，再成为别的角色。',
  'growth-20':'认真生活的人，运气不会太差。',
  'growth-21':'不害怕失去，是长大的标志。',
  'growth-22':'所谓水到渠成，都曾全力以赴。',
  'growth-25':'一次只走好一小步，人生就不会那么难。',
  'growth-26':'深夜的难过，会变成站得更稳的理由。',
  'wisdom-1':'等不来风暴过去，就学会在雨中跳舞。',
  'wisdom-2':'成熟是柔软与坚强并存。',
  'wisdom-3':'每一步都没白走，都算数。',
  'wisdom-4':'用温柔的眼睛，世界会不一样。',
  'wisdom-5':'答案在停下来问自己的那一刻。',
  'wisdom-6':'读过的书、走过的路，成了眼中的风景。',
  'wisdom-7':'放下多少，就能拿起多少。',
  'wisdom-8':'幸福是计较得少。',
  'wisdom-9':'过好今天，是给明天最好的礼物。',
  'wisdom-10':'时间会给出所有答案。',
  'wisdom-11':'能被记住的日子，才是真正活过的日子。',
  'wisdom-12':'与其抱怨黑暗，不如点亮一盏灯。',
  'wisdom-13':'心简单，世界就简单。',
  'wisdom-14':'走太快，别忘了为什么出发。',
  'wisdom-15':'没有白费的努力，也没有碰巧的成功。',
  'wisdom-16':'认识自己，是一生的旅程。',
  'wisdom-17':'痛苦让人清醒，也让人成长。',
  'wisdom-18':'愿意相信，万事才皆有可能。',
  'wisdom-19':'沉默，是成年人最后的体面。',
  'wisdom-20':'自由是内心安宁，无论身在何处。',
  'wisdom-25':'想太远会累，活在当下才有回声。',
  'friend-1':'想起时心里有位置，就是朋友。',
  'friend-2':'得意时一起笑，失意时陪着你。',
  'friend-3':'各自忙碌，仍把对方放心上。',
  'friend-4':'在他面前，可以安心做自己。',
  'friend-5':'看见不完美，仍选择站在你身边。',
  'friend-6':'不必天天联系，见面如初就好。',
  'friend-7':'有些话不说，朋友也懂。',
  'friend-8':'能同行一程，已是幸运。',
  'friend-9':'一起走过黑暗，也一起看见光。',
  'friend-10':'很久不联系，一句话就回到从前。',
  'friend-11':'可以把最真实的自己交出去。',
  'friend-12':'愿意听你碎碎念的人，要珍惜。',
  'friend-13':'好的友谊不需要刻意维系。',
  'friend-14':'朋友是岁月里自己选择的家人。',
  'friend-15':'走多远，愿我们还是当初的样子。',
  'friend-16':'一个人走得快，一群人走得远。',
  'friend-25':'想起朋友时心里很亮，就是友谊。',
  'friend-26':'各自跌倒，仍相信对方会爬起来。',
  'home-1':'家是最柔软、最想回去的地方。',
  'home-2':'父母的爱安静，却从不缺席。',
  'home-3':'父母的爱，最不求回报。',
  'home-4':'耐心留给陌生人，温柔记得留给家人。',
  'home-5':'走多远，都在亲人的目光里。',
  'home-6':'有人等你吃饭，就是家。',
  'home-7':'父母老去的速度，比我们长大更快。',
  'home-8':'唠叨和沉默里，都是爱。',
  'home-9':'小时候想离开，长大后想回家。',
  'home-10':'受委屈时，家是转身就能回的港湾。',
  'home-11':'妈妈做的饭，是全世界最好吃的。',
  'home-12':'奶奶的唠叨，藏着最深的疼爱。',
  'home-13':'长大是学会替家人分担。',
  'home-14':'平安健康，是家人最大的心愿。',
  'home-15':'家不是房子，是有人的地方。',
  'home-16':'陪伴，是亲情最好的语言。',
  'home-25':'家是你疲惫时仍想打开的那扇门。',
  'home-26':'妈妈的唠叨，是最早的天气预报。',
  'courage-1':'带着害怕前行，就是勇敢。',
  'courage-2':'每一次尝试，都在靠近梦想。',
  'courage-3':'承认不够好，也需要勇气。',
  'courage-4':'温柔面对疼痛，比横冲直撞更勇敢。',
  'courage-5':'决定开始，最难的部分就过去了。',
  'courage-6':'怕也往前走，是成年人的温柔勇敢。',
  'courage-7':'说“我需要帮助”需要更大勇气。',
  'courage-8':'没人看见时也不放弃自己。',
  'courage-9':'含着眼泪奔跑，才是真勇敢。',
  'courage-10':'敢于面对真实的自己。',
  'courage-11':'人生随时可以翻页重来。',
  'courage-12':'害怕时仍选择善良。',
  'courage-13':'第一步，已经打败了昨天的自己。',
  'courage-14':'承认失败再站起来，是英雄主义。',
  'courage-15':'恐惧面前依然行动。',
  'courage-16':'好好爱自己，是给自己的勇气。',
  'courage-25':'害怕也去做，做完就变成力量。',
  'courage-26':'害怕不是弱点，去了才是证明。',
  'heal-1':'累了就歇，世界不会停止爱你。',
  'heal-2':'已经很努力了，允许自己慢一点。',
  'heal-3':'今天的云好看，你也值得被温柔对待。',
  'heal-4':'难过时先吃好睡好。',
  'heal-5':'偶尔示弱，也是被爱的方式。',
  'heal-6':'有些路一个人走，走着走着天就亮了。',
  'heal-7':'慢慢来，反而比较快。',
  'heal-8':'认真倾听自己的感受。',
  'heal-9':'治愈是想起时不再那么痛。',
  'heal-10':'阴天会过去，晴天会来。',
  'heal-11':'没关系，你已经做得很好了。',
  'heal-12':'想哭就哭，哭完继续走。',
  'heal-13':'你值得被爱，因为你是你。',
  'heal-14':'睡一觉，醒来就是新的开始。',
  'heal-15':'把烦恼写下来，会轻一些。',
  'heal-16':'温柔是看清生活后仍选择善待。',
  'heal-17':'你比自己想象中更值得被好好对待。',
  'heal-18':'世界偶尔冷漠，你仍可选择温暖。',
  'heal-19':'别怕，慢慢来，一切都会好。',
  'heal-20':'与自己和解，是治愈的开始。',
  'heal-21':'再小的进步，也值得庆祝。',
  'heal-22':'这世上还有人愿意懂你。',
  'heal-25':'先照顾今天的自己，明天会有办法。',
  'heal-26':'允许休息一天，世界不会停转。',
  'dream-1':'梦想是种子，浇灌就成森林。',
  'dream-2':'大梦想也是小步走出来的。',
  'dream-3':'坚持喜欢的事，未来会给答案。',
  'dream-4':'每天靠近一点点，梦想就不远。',
  'dream-5':'追梦路上，一个人也要像队伍。',
  'dream-6':'伟大始于一句“我想试试”。',
  'dream-7':'别因别人的眼光，熄灭自己的光。',
  'dream-8':'梦想不会逃跑，别自己先跑。',
  'dream-9':'每步都在给未来的自己写信。',
  'dream-10':'慢一点，也要朝喜欢的方向走。',
  'dream-11':'梦想让平凡日子眼里有光。',
  'dream-12':'心里有梦，走到哪里都不迷路。',
  'dream-13':'追梦路上，风景比终点动人。',
  'dream-14':'怕的不是没梦想，是放弃太早。',
  'dream-15':'梦想值得你早起晚睡。',
  'dream-16':'长大也别忘了小时候的梦想。',
  'dream-25':'出发会缩短与远方的距离。',
  'time-1':'温柔瞬间会一直留在心里。',
  'time-2':'时间会留下最珍贵的人。',
  'time-3':'别总说来日方长，世事无常。',
  'time-4':'四季更替，都是小确幸。',
  'time-5':'时间不说话，却回答了所有。',
  'time-6':'把日子过成喜欢的样子。',
  'time-7':'回忆会换一种颜色陪着你。',
  'time-8':'善待时间，也被时间善待。',
  'time-9':'十年前种的梦，今天开了花。',
  'time-10':'再忙，也别忘了看看风景。',
  'time-11':'时间治愈伤口，也留下故事。',
  'time-12':'岁月是单程旅行，好坏的风景都算数。',
  'time-13':'时光教我们珍惜，也教我们告别。',
  'time-14':'回首处，也无风雨也无晴。',
  'time-15':'一起虚度的时光，最珍贵。',
  'time-16':'愿时光温柔，岁月无忧。',
  'time-25':'岁月让你更懂自己。',
  'time-26':'失去之后，才听懂当时的话。',
  'life-1':'生活明朗，万物可爱。',
  'life-2':'好好吃饭睡觉，就是解药。',
  'life-3':'把日子过成诗。',
  'life-4':'生活的甜藏在用心的小事里。',
  'life-5':'烟火气是生活最真的味道。',
  'life-6':'舒服比精致更重要。',
  'life-7':'平凡日子里藏着最动人的浪漫。',
  'life-8':'日出日落，人生就值得。',
  'life-9':'热茶好书，就是小幸福。',
  'life-10':'生活的答案，有时在菜市场。',
  'life-11':'收拾干净，心情也晴朗。',
  'life-12':'爱自己是终身浪漫的开始。',
  'life-13':'生活是感受风景，不是赶路。',
  'life-14':'偶尔放空，也是认真生活。',
  'life-15':'今天也要好好照顾自己。',
  'life-16':'保持热爱，生活自然有趣。',
  'life-17':'仪式感是自己给的。',
  'life-18':'好心情是最好的配饰。',
  'life-19':'再普通的一天也值得认真对待。',
  'life-20':'你开心，就是生活最好的一种样子。',
  'life-25':'把小事做好，日子会慢慢长出光。',
  'life-26':'好好吃饭睡觉告别，日子慢慢变好。',
  'alone-1':'孤独是没人懂，不是没人陪。',
  'alone-2':'学会独处，才能更好与人相处。',
  'alone-3':'有些路只能一个人走。',
  'alone-4':'人群中的孤独才最可怕。',
  'alone-5':'一个人也要把日子过好。',
  'alone-6':'深夜的孤独，教会我们和自己对话。',
  'alone-7':'享受孤独，是内心强大的开始。',
  'alone-8':'孤独让思想安静，灵魂清醒。',
  'alone-9':'你不是孤岛，只是还没遇到同频的人。',
  'alone-10':'一个人看电影吃饭散步，也很自在。',
  'alone-11':'孤独是常态，陪伴是幸运。',
  'alone-12':'与自己和解，孤独也会温柔。',
  'alone-26':'一个人过日子，也是过给自己看。',
  'hope-1':'黎明前最黑，也最接近天亮。',
  'hope-2':'无论多难，都不要放弃明天。',
  'hope-3':'希望是暗夜里的灯，微弱却指路。',
  'hope-4':'冬天来了，春天还会远吗。',
  'hope-5':'一切都会过去，一切都会好。',
  'hope-6':'心里有希望，眼里就有光。',
  'hope-7':'别让暂时的困难遮住光。',
  'hope-8':'每天都是新的开始，永远来得及。',
  'hope-9':'相信美好，美好才会靠近。',
  'hope-10':'风雨过后总有彩虹。',
  'hope-11':'先相信，才会看见。',
  'hope-12':'再微小的光也能照亮一段路。',
  'hope-13':'期待留给未来，努力留给今天。',
  'hope-14':'没有过不去的坎，只有过不去的心情。',
  'hope-15':'好运在路上，先照顾好自己。',
  'hope-16':'眼里有星辰，心中有山海。',
  'hope-25':'看不见出口时，也别急着否定路。',
  'hope-26':'天没亮时，先为自己点一盏灯。',
  'read-1':'读好书，是和有趣的灵魂聊天。',
  'read-2':'书是随身携带的避难所。',
  'read-3':'在别人的故事里读懂自己。',
  'read-4':'书读多了，内心不再荒芜。',
  'read-5':'翻开书，世界就安静了。',
  'read-6':'书页间藏着更辽阔的自己。',
  'read-7':'睡前读几页，梦都温柔。',
  'read-8':'旧书里有一段旧时光。',
  'read-9':'读书的人眼里有星辰大海。',
  'read-10':'好书如老友，久别重逢仍亲切。',
  'read-11':'阅读是成本最低的远行。',
  'read-12':'想不通时，去书里找答案。',
  'read-13':'把书读薄，把人读厚。',
  'read-14':'每本书出现，都有它的理由。',
  'reading-25':'书页保管着故事，也保管着曾经的自己。',
  'travel-1':'换个地方，重新喜欢生活。',
  'travel-2':'世界很大，有风景为你而来。',
  'travel-3':'去远方，是为了更好地回来。',
  'travel-4':'旅途的意义在路上，不在终点。',
  'travel-5':'看过山河湖海，才懂人间值得。',
  'travel-6':'护照印章是青春的纪念。',
  'travel-7':'陌生城市的晚风，能吹散心事。',
  'travel-8':'一个人旅行，是和世界恋爱。',
  'travel-9':'把向往的地方变成走过的路。',
  'travel-10':'旅行最动人，是遇见意料之外的自己。',
  'travel-11':'出发，是解决犹豫的办法。',
  'travel-12':'每场旅行都是一次小重生。',
  'travel-13':'远方的风景，最后装进心里。',
  'travel-14':'世界是一本书，不旅行只读一页。',
  'night-1':'夜晚适合思念，也适合安睡。',
  'night-2':'晚安是把今天轻轻放下。',
  'night-3':'月亮不营业，星星替你点灯。',
  'night-4':'深夜安静是给自己的礼物。',
  'night-5':'睡不着时，想想温柔的事。',
  'night-6':'夜晚收走疲惫，留下清醒。',
  'night-7':'心事会被夜色温柔包裹。',
  'night-8':'睡前原谅一切，醒来就是新生。',
  'night-9':'城市的夜，也有属于你的灯。',
  'night-10':'夜再深，天总会亮。',
  'night-11':'放下手机，把世界放轻。',
  'night-12':'星空不问赶路人，却温柔照着。',
  'night-13':'夜晚是白昼的休止符，明天的序曲。',
  'night-14':'愿你今夜好梦，明天有光。',
  'night-26':'晚安是有人愿意陪你到梦里。',
  'nature-1':'去山里走走，心就变大了。',
  'nature-2':'风把自由吹进心里。',
  'nature-3':'大海容纳所有情绪。',
  'nature-4':'一棵树的沉默比安慰更有力。',
  'nature-5':'雨后空气是生活的清新剂。',
  'nature-6':'看云卷云舒，日子可以很慢。',
  'nature-7':'花开有时，花落也有时。',
  'nature-8':'清晨鸟鸣，是大自然道早安。',
  'nature-9':'散步时，烦恼被路边小花分走。',
  'nature-10':'山高水长，人间值得。',
  'nature-11':'自然是最好的疗愈师。',
  'nature-12':'听听风声和心跳。',
  'nature-13':'四季都有各自的风景。',
  'nature-14':'身在草木间，心也在变绿。',
  'work-1':'工作是为了生活，别取代生活。',
  'work-2':'小事做好了，大事自然有答案。',
  'work-3':'忙时也别忘了抬头看天。',
  'work-4':'认真负责是最体面的职场姿态。',
  'work-5':'下班后的时间决定生活的宽度。',
  'work-6':'先完成，再完美。',
  'work-7':'热爱的工作是半个理想生活。',
  'work-8':'会工作，也要会休息。',
  'work-9':'别把工作情绪带回饭桌。',
  'work-10':'认真的人在哪里都发光。',
  'work-11':'升职加薪重要，睡个好觉更重要。',
  'work-12':'工作可以平凡，态度不能平庸。',
  'work-13':'团队让人不再孤单。',
  'work-14':'好奇心是职场不老的秘诀。',
  'learn-1':'学习是随身携带的财富。',
  'learn-2':'不会没关系，慢慢学。',
  'learn-3':'好奇心是最好的老师。',
  'learn-4':'每天进步一点，一年后是新的自己。',
  'learn-5':'学习是为了选择，不只是考试。',
  'learn-6':'会提问比会回答更重要。',
  'learn-7':'重复是通往熟练的路。',
  'learn-8':'学到的知识总有一天派上用场。',
  'learn-9':'终身学习是对未来的投资。',
  'learn-10':'不懂就问，是聪明的开始。',
  'learn-11':'学新技能，是给自己的礼物。',
  'learn-12':'纸上得来终觉浅，实践才出真知。',
  'learn-13':'保持学习的人眼里有光。',
  'learn-14':'别怕学得慢，只怕不开始。',
  'poem-1':'田园之乐，在闲适的心。',
  'poem-2':'得意时尽情，别辜负好时光。',
  'poem-3':'望月思乡，是永恒的心事。',
  'poem-4':'春风又绿，归期何时。',
  'poem-5':'知己在心，天涯也如邻。',
  'poem-6':'前路不必愁，自有识君人。',
  'poem-7':'友情深过千尺潭水。',
  'poem-8':'情长不在朝暮。',
  'poem-9':'登高望远，志在峰顶。',
  'poem-10':'山河壮阔，尽收眼底。',
  'poem-11':'一粥一饭，皆念辛苦。',
  'poem-12':'春眠鸟啼，最简单的快乐。',
  'poem-13':'山重水复，自有柳暗花明。',
  'poem-14':'旧船侧畔千帆过，病树前头万木春。',
  'poem-15':'磨砺出锋芒，苦寒得花香。',
  'poem-16':'路远且长，上下求索。',
  'poem-17':'天生我材，必有可用。',
  'poem-18':'少年易老，光阴不可轻。',
  'poem-19':'勤为径，苦作舟。',
  'poem-20':'自强不息，天行刚健。',
  'poem-21':'千里之行，始于足下。',
  'poem-22':'静以修身，俭以养德。',
  'poem-23':'不忘初心，方得始终。',
  'poem-24':'岁月不居，时节如流。',
  'film-1':'有些事现在不做，一辈子都不会做了。',
  'film-2':'生活像巧克力，下一颗是未知。',
  'film-3':'看透生活真相，依然热爱。',
  'film-4':'奋斗是不让世界改变自己。',
  'film-5':'梦想要有，万一实现了呢。',
  'film-6':'爱你的人会跨越山海来见你。',
  'film-7':'过去无法改变，未来可以。',
  'film-8':'除生死外，都是小事。',
  'film-9':'时间会证明一切。',
  'film-10':'做自己，别人都有人做了。',
  'film-11':'别让任何人打乱你的节奏。',
  'film-12':'生命的意义在每一天怎么过。',
  'film-13':'勇敢面对未知，才是活着。',
  'film-14':'最好的也许还没来。',
  'film-15':'家是找到答案的地方。',
  'film-16':'善良要有锋芒。',
  'film-17':'真正的强大是不怕失去。',
  'film-18':'世界这么大，想去看看。',
  'film-19':'人生如旅行，风景比目的地重要。',
  'film-20':'走出半生，归来仍少年。',
  'film-21':'无论发生什么，相信明天。',
  'film-22':'爱情可以等，生活不能等。',
  'film-23':'好好说再见，才是真告别。',
  'film-24':'有恐惧仍向前，就是勇气。',
  'song-1':'后来才学会如何去爱。',
  'song-2':'越过山丘，才懂无人等候。',
  'song-3':'得不到的骚动，被偏爱的有恃无恐。',
  'song-4':'想得不可得，是人生的常态。',
  'song-5':'想要你在身旁，是简单的思念。',
  'song-6':'平凡之路，一直向前。',
  'song-7':'曾经跨过山海人海。',
  'song-8':'风吹过的路还远，故事讲到哪。',
  'song-9':'时光迟暮不返，人生不再来。',
  'song-10':'我们都在用力活着。',
  'song-11':'那些夏天，像你一样回不来。',
  'song-12':'从前的日子慢，车马邮件都慢。',
  'song-13':'说话简单点，相处也轻松。',
  'song-14':'街角咖啡店，会不会忽然遇见。',
  'song-15':'想带你看晴空万里。',
  'song-16':'真理无穷，进一寸有一寸欢喜。',
  'song-17':'回忆像说书人，带着乡音。',
  'song-18':'未来由自己做主。',
  'song-19':'猜你也舍不得。',
  'song-20':'最亮的星，请照亮前行。',
  'song-21':'明天会更好。',
  'song-22':'那些花儿散落天涯。',
  'song-23':'岁月很长，记得留温柔给自己。',
  'song-24':'事与愿违，另有安排。',
  'zen-1':'本来无一物，何处惹尘埃。',
  'zen-2':'菩提非树，明镜非台。',
  'zen-3':'一花一世界，一叶一菩提。',
  'zen-4':'心静，国土即净。',
  'zen-5':'放下，是另一种拥有。',
  'zen-6':'随缘不是随便，是顺其自然。',
  'zen-7':'命里有终须有，莫强求。',
  'zen-8':'一念放下，万般自在。',
  'zen-9':'大悲无泪，大悟无言。',
  'zen-10':'心平气和，万事可成。',
  'zen-11':'风过竹不留声。',
  'zen-12':'雁去潭不留影。',
  'zen-13':'山不转水转，人要学会变通。',
  'zen-14':'平常心，处处是风景。',
  'zen-15':'不悲不喜，便是晴天。',
  'zen-16':'少即是多，静即是动。',
  'zen-17':'心若无尘，一花一世界。',
  'zen-18':'凡事看淡，心就不累。',
  'zen-19':'常思己过，莫论人非。',
  'zen-20':'从容是最好的态度。',
  'zen-21':'忍一时风平浪静，退一步海阔天空。',
  'zen-22':'万物有裂痕，光从那里进来。',
  'zen-23':'顺其自然，水到渠成。',
  'zen-24':'平常心是道。',
  'love-28':'先低头不是输，是更在乎这段关系。',
  'growth-27':'让所有人满意很难，让自己安心更重要。',
  'growth-28':'承认普通，也是难得的清醒。',
  'wisdom-27':'难题背后，往往藏着礼物。',
  'friend-27':'不用解释太多，就是懂你的人。',
  'home-27':'报喜不报忧，是长大后最温柔的话。',
  'courage-27':'敢于慢下来，也是勇敢。',
  'courage-28':'开始很难，开了头一切好说。',
  'heal-27':'像夸别人一样夸夸自己。',
  'heal-28':'你不需要一直懂事。',
  'dream-27':'写下来，梦就有了形状。',
  'dream-28':'喜欢的事，是生活的火花。',
  'time-27':'回忆泛黄，温度不会。',
  'life-27':'给自己做一顿饭，也是爱。',
  'life-28':'周末，把时间还给自己。',
  'alone-27':'一个人，也要把日子过给自己看。',
  'hope-27':'跌倒的地方，也能开出花。',
  'hope-28':'一点光，也够走下去。',
  'night-27':'今晚的月亮陪你。',
  'nature-15':'雨后的光，最温柔。',
  'work-15':'再忙，也要好好吃饭。',
  'learn-15':'学不会就再试一次。',
  'poem-25':'异乡佳节，最念亲人。',
  'film-25':'成为更好的人，是给自己的约定。',
  'song-25':'少年心气，未曾改变。',
  'zen-25':'心不动，风也奈何不了。',
  'read-15':'书里永远有下一站。',
  'travel-15':'下一站总有惊喜。',
  'friend-28':'记得你口味的人，最懂你。',
  'home-28':'常回家看看，是简单的心愿。'
};
const search = document.querySelector('#quoteSearch');
const modalSearch = document.querySelector('#modalSearch');
const title = document.querySelector('#collectionTitle');
const empty = document.querySelector('#emptyState');
const loadMore = document.querySelector('#loadMore');
const resultCount = document.querySelector('#resultCount');
const dailyQuote = document.querySelector('#dailyQuote');
const dailyEnglish = document.querySelector('#dailyEnglish');
const dailySave = document.querySelector('#dailySaveBtn');
const showAllButton = document.querySelector('#showAll');
const showSavedButton = document.querySelector('#showSaved');
const categoryButtons = document.querySelectorAll('.category-card');
const storyModal = document.querySelector('#storyModal');
let currentStoryCategory = '全部';
let activeStory = null;

function readStoredArray(key){
  try{
    const value=JSON.parse(localStorage.getItem(key)||'[]');
    return Array.isArray(value)?value:[];
  }catch{return []}
}
function readStoredObject(key){
  try{
    const value=JSON.parse(localStorage.getItem(key)||'{}');
    return value&&typeof value==='object'&&!Array.isArray(value)?value:{};
  }catch{return {}}
}

let currentCategory = '爱情';
let viewMode = 'category';
let globalQuery = '';
let activeTag = '';
let activeFrom = '';
let sortMode = 'default';
let visibleCount = 12;
let saved = readStoredArray('shiyulu-saved');
let quoteNotes = readStoredObject('shiyulu-quote-notes');
let journalEntries = readStoredObject('shiyulu-journal');
let quoteLayout = localStorage.getItem('shiyulu-quote-layout') === 'list' ? 'list' : 'grid';
let activeMoodQuote = null;
let installPrompt = null;
const categoryExplanations={爱情:'它写的是关系里的靠近与回应，真正的喜欢会让人愿意把心意说清楚，也愿意在日常里持续行动。',成长:'成长不只发生在高光时刻，也发生在你重新整理情绪、接受不完美并继续向前的每一天。',生活:'普通日子里的细节最有分量，愿意认真吃饭、好好告别、照顾彼此，就是生活温柔的证据。',治愈:'它像一句轻声的陪伴，提醒你不必立刻解决所有问题，先允许自己被理解，再慢慢恢复力气。',勇气:'勇气不是不害怕，而是知道害怕仍然存在，依然愿意为重要的人和事迈出一步。',希望:'在看不见结果的时候仍然保留一点相信，那一点光就足以带你走过最暗的路。',亲情:'家人的爱常常藏在不动声色的琐碎里，嘴上不说，却总在你需要时为你留一盏灯。'};
function getExplanation(quote){return quoteExplanations[quote.id]||quoteDetails[quote.id]||quote.explanation||categoryExplanations[quote.category]||'一句话的意义，往往要等你经历过之后才真正明白。它不是标准答案，而是一种在此刻陪你站稳的提醒。'}
function getScene(quote){return quote.scene||({爱情:'想念一个人、确认心意、纪念相遇',成长:'迷茫或重新出发的时候',生活:'普通的一天需要一点温柔的时候',治愈:'想给自己留一点喘息的时候',勇气:'准备做一件重要的事之前'}[quote.category]||'任何想被一句话轻轻接住的时刻')}
const categoryAccents={爱情:'#d96c51',成长:'#5b7f68',哲思:'#8a7a4f',友谊:'#6f86a8',亲情:'#b07d52',勇气:'#8b6fa8',治愈:'#c97a86',梦想:'#5f86b8',时光:'#a08a52',生活:'#6f9279',孤独:'#7d7aa8',希望:'#d1a03f',阅读:'#8a7a5f',旅行:'#5f9a8f',夜晚:'#6a6a9e',自然:'#6fa070',工作:'#9a8468',学习:'#6f8ab8',古诗词:'#b08060',电影:'#8f74a0',歌词:'#c0807f',禅意:'#7f8f7a'};
const defaultAccent='#d96c51';
let currentMoodLetter=null;
let breatheTimer=null;
const moodLetterTemplates={
  '治愈':[
    {text:'今天先照顾自己，再照顾世界。',note:'把手机放远一点，喝口热水，今晚不必证明你很坚强。'},
    {text:'不必马上好起来，先允许自己被接住。',note:'难过不是退步，只是心走了太久，也需要在路边坐一会儿。'},
    {text:'你值得被温柔对待，包括被自己。',note:'就算今天只完成了起床、吃饭和回家，这一天也没有被浪费。'}
  ],
  '勇气':[
    {text:'害怕没有让你停下，这已经足够勇敢。',note:'你可以握紧发抖的手，再轻轻推开那扇一直不敢敲的门。'},
    {text:'重新开始，不需要等到不害怕。',note:'先写下第一行、拨出第一个电话，路会在脚下慢慢出现。'},
    {text:'勇敢不是没有眼泪，是擦过眼泪还愿意相信。',note:'你熬过的那些深夜，正在替今天的你悄悄撑腰。'}
  ],
  '希望':[
    {text:'天会亮，你也会重新笑起来。',note:'窗帘缝里那一点晨光，正在替明天提前来接你。'},
    {text:'只要还在走，就没有真正的坏结局。',note:'慢一点也没关系，绕过的路也会教你怎样回到自己身边。'},
    {text:'日子有裂缝，光才有地方落进来。',note:'先留住一件小事：一顿热饭、一场好觉，或一个愿意听你说话的人。'}
  ],
  '孤独':[
    {text:'孤单不是没人来，是你终于开始陪自己。',note:'一个人的晚饭也认真摆好碗筷，你同样值得被好好款待。'},
    {text:'安静不是空，是和自己相处的时刻。',note:'今晚不用向谁解释，把没说出口的话写在纸上就好。'},
    {text:'没有人回应的时刻，也别忘了回应自己。',note:'回家路上给自己买一束小花，孤独也可以有柔软的边缘。'}
  ],
  '夜晚':[
    {text:'把心事交给月亮，明天再继续赶路。',note:'夜已经很深了，没想明白的事可以先留在枕边。'},
    {text:'晚安不是认输，是给自己留到明天的力气。',note:'关掉最后一盏灯之前，原谅今天那个已经尽力的自己。'},
    {text:'有些答案，要等天亮以后才看得清。',note:'先听一会儿窗外的风，让急着解决一切的心慢下来。'}
  ],
  '成长':[
    {text:'你不必一下子变好，变好一点也是变好。',note:'今天少责怪自己一次，也是一种不动声色的成长。'},
    {text:'允许自己笨拙，是变好的开始。',note:'第一次做不好很正常，认真留下的每一道修改痕迹都算数。'},
    {text:'你失去的会成为路，你留下的会成为光。',note:'回头看，那些以为过不去的日子，已经被你走成了身后的风景。'}
  ],
  '亲情':[
    {text:'有些爱不常说出来，却一直在身后。',note:'它可能只是一句“到家了吗”，和餐桌上一直为你留着的那碗汤。'},
    {text:'被惦记，是这世上很温柔的确认。',note:'你暂时没有回家，也仍有人在天气变凉时提醒你多穿一件。'},
    {text:'家不是催你成功的地方，是等你卸下疲惫的地方。',note:'累的时候就回去坐一会儿，厨房的灯会比大道理更懂你。'}
  ],
  '生活':[
    {text:'把平凡的日子过好，就是了不起的事。',note:'洗净一只杯子、晒好一床被子，生活会在这些小事里重新发亮。'},
    {text:'生活很难，但你也接住了很多。',note:'拥挤的通勤、迟到的晚饭和没说出口的委屈，你都一步步走过来了。'},
    {text:'日子不是等来的晴天，是一件件小事慢慢晾干。',note:'先整理桌面，再给自己煮碗面，心也会跟着有一点秩序。'}
  ],
  '爱情':[
    {text:'爱是靠近，也是把彼此放在心上。',note:'不是盛大的誓言，是下雨时记得带两把伞，回家时顺手留一盏灯。'},
    {text:'真心不是轰轰烈烈，是把日常过成陪伴。',note:'愿意听你说完琐碎的人，也在认真参与你的人生。'},
    {text:'好的爱不会让你反复猜，它会认真走向你。',note:'你值得一段说得清想念、接得住情绪，也愿意一起吃晚饭的关系。'}
  ],
  '友谊':[
    {text:'有人愿意听你碎碎念，就是很暖的事。',note:'真正的朋友不只分享好消息，也接得住你凌晨发来的那句“我有点难过”。'},
    {text:'真正的朋友，会看见你的眼泪。',note:'很久没联系也没关系，一句“出来走走吗”就能把距离重新走近。'},
    {text:'友情是各自赶路，也一直替对方留位置。',note:'你们不必天天见面，但每次回头，都知道那个人还在。'}
  ],
  'default':[
    {text:'你不需要立刻解决所有事，先让自己喘口气。',note:'松开肩膀，慢慢呼吸，这一分钟不属于任务，只属于你。'},
    {text:'日子不会一直这么重，你会慢慢有力量。',note:'今天愿意停下来读完这句话，已经是在把自己往光里带。'},
    {text:'先过好眼前这一小段，远方会慢慢清楚。',note:'别急着抵达，先吃饭、睡觉，再把明天交给明天。'}
  ]
};
let heroPick=null;
let speech=null;
let dailyTyped=false;
let toastTimer=null;
let searchTimer=null;
let profileModal=null;
function setAccent(category){
  const c=categoryAccents[category]||defaultAccent;
  document.documentElement.style.setProperty('--accent',c);
  const meta=document.querySelector('meta[name="theme-color"]');
  if(meta) meta.setAttribute('content',c);
}
function typeDailyQuote(el,text){
  if(!el) return;
  if(dailyTyped){el.textContent=text;return}
  dailyTyped=true;
  el.textContent='';
  const caret=document.createElement('span');
  caret.className='caret';
  caret.textContent='|';
  el.appendChild(caret);
  let i=0;
  const timer=setInterval(()=>{
    if(i>=text.length){
      clearInterval(timer);
      caret.remove();
      return;
    }
    caret.insertAdjacentText('beforebegin',text[i]);
    i++;
  },22);
}
function storyMinutes(story){return Math.max(1,Math.round(story.body.replace(/\\n/g,'').length/300))}
function initMasthead(){
  const el=document.querySelector('#mastheadDate');
  if(!el) return;
  const cn=['〇','一','二','三','四','五','六','七','八','九'];
  const toCn=n=>n<10?cn[n]:n<20?'十'+cn[n%10]:cn[Math.floor(n/10)]+'十'+cn[n%10];
  const d=new Date();
  const y=String(d.getFullYear()).split('').map(c=>cn[+c]).join('');
  el.textContent=y+'年'+toCn(d.getMonth()+1)+'月'+toCn(d.getDate())+'日';
  const heroDate=document.querySelector('#heroDate');
  if(heroDate){
    const issue=String(Math.floor((Date.now()-Date.UTC(2026,7,3))/604800000)+1).padStart(3,'0');
    heroDate.textContent='VOL. '+issue+' · '+d.getFullYear()+'.'+String(d.getMonth()+1).padStart(2,'0')+'.'+String(d.getDate()).padStart(2,'0');
  }
}
function initProgress(){
  const bar=document.querySelector('#readingProgress');
  if(!bar) return;
  let scheduled=false;
  const update=()=>{
    const max=document.documentElement.scrollHeight-document.documentElement.clientHeight;
    const p=max>0?document.documentElement.scrollTop/max*100:0;
    bar.style.width=p+'%';
    scheduled=false;
  };
  window.addEventListener('scroll',()=>{
    if(!scheduled){scheduled=true;requestAnimationFrame(update)}
  },{passive:true});
  update();
}
function observeReveal(){
  const targets=document.querySelectorAll('.section-heading,.mood-compass-copy,.mood-result,.mood-letter-card,.breathe-card,.category-card,.quote-item,.story-card,.month-card,.community-panel,.submit-section,.about-section,.stat-strip:not(.in)');
  if(!targets.length) return;
  if(!('IntersectionObserver' in window)){
    targets.forEach(el=>el.classList.add('in'));
    return;
  }
  const io=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  },{threshold:.06,rootMargin:'0px 0px -6% 0px'});
  targets.forEach(el=>io.observe(el));
}

function initSectionNav(){
  if(!('IntersectionObserver' in window)) return;
  const links=[...document.querySelectorAll('.main-nav a[href^="#"]')];
  const sections=links.map(link=>document.querySelector(link.getAttribute('href'))).filter(Boolean);
  if(!sections.length) return;
  const observer=new IntersectionObserver(entries=>{
    const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
    if(!visible) return;
    links.forEach(link=>link.classList.toggle('active',link.getAttribute('href')===`#${visible.target.id}`));
  },{rootMargin:'-18% 0px -68% 0px',threshold:[0,.15,.4]});
  sections.forEach(section=>observer.observe(section));
}

function getBaseQuotes(){
  if(globalQuery) return quotes.filter(q => `${esc(q.cn)}${esc(q.en)}${esc(q.tag)}${esc(q.category)}`.toLowerCase().includes(globalQuery));
  if(viewMode === 'saved') return quotes.filter(q => saved.includes(q.id));
  if(viewMode === 'all') return quotes;
  return quotes.filter(q => q.category === currentCategory);
}

function renderQuotes(){
  let filtered = getBaseQuotes();
  const keyword = (search?.value || '').trim().toLowerCase();
  if(keyword) filtered = filtered.filter(q => `${esc(q.cn)}${esc(q.en)}${esc(q.tag)}${esc(q.category)}`.toLowerCase().includes(keyword));
  if(activeTag) filtered = filtered.filter(q => q.tag === activeTag);
  if(activeFrom) filtered = filtered.filter(q => (q.from || '拾语录') === activeFrom);
  if(sortMode === 'newest') filtered = [...filtered].reverse();
  if(sortMode === 'random') filtered = [...filtered].sort(() => Math.random() - 0.5);
  const shown = filtered.slice(0, visibleCount);
  if(list) list.innerHTML = shown.map((q,index)=>`<article class="quote-item" data-quote-id="${esc(q.id)}"><div class="quote-item-top"><span>NO. ${String(index+1).padStart(2,'0')} / ${esc(q.category)}</span><span class="quote-tag">${esc(q.tag)}</span></div><div class="quote-item-body"><blockquote>“${esc(q.cn)}”</blockquote><p class="quote-en">${esc(q.en)}</p><p class="quote-card-meaning"><b>此句心解</b>${esc(getExplanation(q).slice(0,52))}${getExplanation(q).length>52?'…':''}</p></div><div class="quote-item-bottom"><span>拾语录 · ${esc(q.category)}${q.from ? ' · ' + esc(q.from) : ''}</span><span class="quote-actions"><button class="save-quote ${saved.includes(q.id)?'saved':''}" data-id="${esc(q.id)}" type="button" aria-label="收藏">${saved.includes(q.id)?'♥':'♡'}</button><button class="share-quote" data-share="${esc(q.cn)}" type="button" aria-label="分享">↗</button></span></div></article>`).join('');
  if(empty){
    empty.hidden = filtered.length > 0;
    empty.textContent = globalQuery ? '没有找到匹配这句话的关键词，试试“温柔、勇气、想念”。' : (viewMode === 'saved' ? '还没有收藏，点击任意语录右下角的 ♡ 收藏一句吧。' : '还没有找到这句心情，换一个关键词试试。');
  }
  if(loadMore) loadMore.hidden = filtered.length <= visibleCount;
  if(resultCount) resultCount.textContent = `${Math.min(visibleCount, filtered.length)} / ${filtered.length} 条`;
  renderChips(filtered);
  observeReveal();
  renderFromChips(filtered);
  if(list) list.classList.toggle('list-view',quoteLayout==='list');
  const viewToggle=document.querySelector('#quoteViewToggle');
  if(viewToggle){
    const isList=quoteLayout==='list';
    viewToggle.textContent=isList?'网格视图':'列表视图';
    viewToggle.setAttribute('aria-pressed',String(isList));
  }
  const summary=document.querySelector('#filterSummary');
  if(summary){
    const parts=[];
    if(globalQuery||keyword) parts.push(`关键词“${globalQuery||keyword}”`);
    if(viewMode==='saved') parts.push('我的收藏');
    else if(viewMode==='all') parts.push('全部语录');
    else parts.push(`${currentCategory}分类`);
    if(activeTag) parts.push(`标签“${activeTag}”`);
    if(activeFrom) parts.push(`出处“${activeFrom}”`);
    summary.textContent=`${parts.join(' · ')}，共 ${filtered.length} 条`;
  }
}

function renderPicks(){
  const weeklyIds = ['growth-3','heal-2','time-8','love-1','dream-6','courage-5','wisdom-8','friend-6','hope-16','life-7','alone-9','home-6'];
  const week = Math.floor(Date.now() / 604800000) % 4;
  const picks = weeklyIds.slice(week * 3, week * 3 + 3).map(id => quotes.find(q => q.id === id)).filter(Boolean);
  const picksList = document.querySelector('#picksList');
  if(!picksList) return;
  picksList.innerHTML = picks.map((q,index)=>`<article class="quote-item" data-quote-id="${esc(q.id)}"><div class="quote-item-top"><span>EDITOR'S PICK</span><span>${esc(q.category)}</span></div><div class="quote-item-body"><blockquote>“${esc(q.cn)}”</blockquote><p class="quote-en">${esc(q.en)}</p><p class="quote-card-meaning"><b>此句心解</b>${esc(getExplanation(q).slice(0,52))}${getExplanation(q).length>52?'…':''}</p></div><div class="quote-item-bottom"><span>拾语录 · 精选${q.from ? ' · ' + esc(q.from) : ''}</span><span class="quote-actions"><button class="save-quote ${saved.includes(q.id)?'saved':''}" data-id="${esc(q.id)}" type="button" aria-label="收藏">${saved.includes(q.id)?'♥':'♡'}</button><button class="share-quote" data-share="${esc(q.cn)}" type="button" aria-label="分享">↗</button></span></div></article>`).join('');
}

function renderDaily(){
  if(!dailyQuote) return;
  const dayIndex = Math.floor(Date.now() / 86400000) % quotes.length;
  const daily = quotes[dayIndex];
  typeDailyQuote(dailyQuote, daily.cn);
  dailyEnglish.textContent = daily.en;
  dailySave.dataset.id = daily.id;
  dailySave.querySelector('.heart').textContent = saved.includes(daily.id) ? '♥' : '♡';
  const dailyShare = document.querySelector('.daily-card-bottom .share-button');
  if(dailyShare) dailyShare.dataset.share = daily.cn;
  const dailyDate = document.querySelector('.daily .heading-meta');
  if(dailyDate) dailyDate.textContent = '每日更新 · ' + new Date().toLocaleDateString('zh-CN',{month:'2-digit',day:'2-digit'});
  const dailyTag = document.querySelector('#dailyTag');
  if(dailyTag) dailyTag.textContent = daily.tag + ' · 每日语录';
  const dailyMeaning = document.querySelector('#dailyMeaning');
  if(dailyMeaning) dailyMeaning.textContent = getExplanation(daily);
  const dailyFrom = document.querySelector('#dailyFrom');
  if(dailyFrom) dailyFrom.textContent = '拾语录 · ' + daily.category + ' · ' + daily.tag;
  const dailySideNote = document.querySelector('#dailySideNote');
  if(dailySideNote) dailySideNote.textContent = '今日为你拾起一句温柔';
  const heroQuote=heroPick||daily;
  renderHeroToday(heroQuote,{type:!heroPick});
  renderHeroRelated(heroQuote);
  renderHeroCheckin();
  renderHeroSaved();
}

function typeHeroQuote(el,text){
  if(!el) return;
  el.dataset.typing='1';
  el.textContent='';
  let i=0;
  const step=()=>{
    i+=1;
    el.textContent=text.slice(0,i);
    if(i<text.length) setTimeout(step,56);
    else delete el.dataset.typing;
  };
  setTimeout(step,700);
}

function renderHeroToday(quote,{type=false}={}){
  if(!quote) return;
  if(speech){
    try{speechSynthesis.cancel()}catch(e){}
    speech=null;
    const listenBtn=document.querySelector('#heroListen');
    if(listenBtn){
      listenBtn.classList.remove('playing');
      const mark=listenBtn.querySelector('span');
      if(mark) mark.textContent='♪';
    }
  }
  const cnEl=document.querySelector('#heroDailyQuote');
  if(cnEl){
    if(type && !cnEl.dataset.typed){
      cnEl.dataset.typed='1';
      typeHeroQuote(cnEl,quote.cn);
    }else{
      cnEl.textContent=quote.cn;
    }
  }
  const tagEl=document.querySelector('#heroDailyTag');
  if(tagEl) tagEl.textContent=quote.category+' · '+quote.tag;
  const enEl=document.querySelector('#heroDailyEn');
  if(enEl) enEl.textContent=quote.en;
  const meaningEl=document.querySelector('#heroDailyMeaning');
  if(meaningEl) meaningEl.textContent=getExplanation(quote);
  const sceneEl=document.querySelector('#heroDailyScene');
  if(sceneEl) sceneEl.textContent=getScene(quote);
  const saveEl=document.querySelector('#heroDailySave');
  if(saveEl){
    saveEl.dataset.id=quote.id;
    saveEl.classList.toggle('saved',saved.includes(quote.id));
    const heart=saveEl.querySelector('.heart');
    if(heart) heart.textContent=saved.includes(quote.id)?'♥':'♡';
  }
  const shareEl=document.querySelector('#heroDailyShare');
  if(shareEl) shareEl.dataset.share=quote.cn+' · '+quote.en;
}

function renderHeroClock(){
  const el=document.querySelector('#heroClock');
  if(!el) return;
  const h=new Date().getHours();
  const label=h>=5&&h<9?'早安 · 晨光正好':h>=9&&h<12?'上午 · 宜专注':h>=12&&h<14?'午后 · 宜小憩':h>=14&&h<18?'下午 · 宜静心':h>=18&&h<23?'夜晚 · 宜读句':'夜深 · 宜安睡';
  el.textContent=label;
}

function dateKey(date){return date.getFullYear()+'-'+String(date.getMonth()+1).padStart(2,'0')+'-'+String(date.getDate()).padStart(2,'0')}

function renderHeroCheckin(){
  const text=document.querySelector('#heroCheckinText');
  const btn=document.querySelector('#heroCheckinBtn');
  if(!text||!btn) return;
  const today=dateKey(new Date());
  const data=readStoredObject('shiyulu-checkin');
  const done=!!(data&&data.date===today);
  const yesterday=dateKey(new Date(Date.now()-86400000));
  const streak=done?(data.count||1):((data&&data.date===yesterday)?(data.count||1):0);
  btn.classList.toggle('done',done);
  btn.textContent=done?'已打卡':'打卡';
  text.textContent=done?('今日已打卡 · 连续 '+streak+' 天'):(streak>0?('已连续 '+streak+' 天 · 今日待打卡'):'今日打卡 · 待开始');
}

function renderHeroRelated(quote){
  const list=document.querySelector('#heroRelatedList');
  if(!list||!quote) return;
  const pool=quotes.filter(q=>q.category===quote.category);
  const start=Math.floor(Date.now()/86400000)%pool.length;
  const picks=[];
  for(let i=0;i<pool.length&&picks.length<3;i++){
    const q=pool[(start+i)%pool.length];
    if(q.id!==quote.id) picks.push(q);
  }
  list.innerHTML=picks.map(q=>`<li data-quote-id="${esc(q.id)}" title="打开语录"><span>${esc(q.category)}</span><p>“${esc(q.cn)}”</p></li>`).join('');
}

function renderHeroSaved(){
  const list=document.querySelector('#heroSavedList');
  if(!list) return;
  const items=saved.slice(-3).reverse().map(id=>quotes.find(q=>q.id===id)).filter(Boolean);
  list.innerHTML=items.length?items.map(q=>`<li data-quote-id="${esc(q.id)}" title="打开语录"><span>${esc(q.category)}</span><p>“${esc(q.cn)}”</p></li>`).join(''):'<li class="hero-list-empty">收藏一句话，它会出现在这里。</li>';
}

function renderMoodQuote(button,randomize=false){
  if(!button) return;
  const categories=(button.dataset.categoryPool||'治愈').split(',');
  const pool=quotes.filter(q=>categories.includes(q.category));
  if(!pool.length) return;
  let index=randomize?Math.floor(Math.random()*pool.length):Math.floor(Date.now()/86400000)%pool.length;
  if(randomize&&activeMoodQuote&&pool.length>1&&pool[index].id===activeMoodQuote.id) index=(index+1)%pool.length;
  activeMoodQuote=pool[index];
  document.querySelectorAll('[data-mood-intent]').forEach(item=>{const active=item===button;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active))});
  localStorage.setItem('shiyulu-mood-intent',button.dataset.moodIntent||'安慰');
  const result=document.querySelector('#moodResult');
  if(result){result.classList.remove('is-changing');requestAnimationFrame(()=>result.classList.add('is-changing'))}
  const label=document.querySelector('#moodResultLabel');
  const quoteEl=document.querySelector('#moodResultQuote');
  const enEl=document.querySelector('#moodResultEn');
  const meta=document.querySelector('#moodResultMeta');
  const saveBtn=document.querySelector('#moodSave');
  if(label) label.textContent=`为“${button.dataset.moodIntent}”拾得`;
  if(quoteEl) quoteEl.textContent=activeMoodQuote.cn;
  if(enEl) enEl.textContent=activeMoodQuote.en;
  if(meta) meta.textContent=`${activeMoodQuote.category} · ${activeMoodQuote.tag}`;
  if(saveBtn) saveBtn.textContent=saved.includes(activeMoodQuote.id)?'♥ 已收藏':'♡ 收藏';
  renderMoodLetter(activeMoodQuote);
}
function initMoodCompass(){
  const buttons=[...document.querySelectorAll('[data-mood-intent]')];
  if(!buttons.length) return;
  const stored=localStorage.getItem('shiyulu-mood-intent');
  const initial=buttons.find(button=>button.dataset.moodIntent===stored)||buttons[0];
  renderMoodQuote(initial);
}

function renderMoodLetter(quote){
  const textEl=document.querySelector('#moodLetterText');
  if(!textEl) return;
  const source=quote||activeMoodQuote||quotes[0];
  const pool=moodLetterTemplates[source.category]||moodLetterTemplates.default;
  let item=pool[Math.floor(Math.random()*pool.length)];
  if(currentMoodLetter&&pool.length>1&&item.text===currentMoodLetter.text){
    item=pool[(pool.indexOf(currentMoodLetter)+1)%pool.length];
  }
  currentMoodLetter=item;
  const tagEl=document.querySelector('#moodLetterTag');
  const noteEl=document.querySelector('#moodLetterNote');
  if(tagEl) tagEl.textContent=`${source.category} · ${source.tag}`;
  textEl.textContent=item.text;
  if(noteEl) noteEl.textContent=item.note;
  localStorage.setItem('shiyulu-mood-letter',JSON.stringify({text:item.text,note:item.note,tag:tagEl?.textContent||source.category,updatedAt:new Date().toISOString()}));
}

function startBreathe(){
  const ring=document.querySelector('#breatheRing');
  const count=document.querySelector('#breatheCount');
  if(!ring||!count) return;
  if(breatheTimer){clearInterval(breatheTimer);breatheTimer=null;ring.classList.remove('breathe-animate');count.textContent='3';return}
  let phase=0,cycle=0;
  const labels=['吸气','停住','呼气','停住'];
  ring.classList.add('breathe-animate');
  count.textContent=labels[0];
  breatheTimer=setInterval(()=>{
    phase=(phase+1)%4;
    if(phase===0) cycle+=1;
    count.textContent=labels[phase];
    ring.classList.toggle('breathe-in',phase===0);
    ring.classList.toggle('breathe-hold',phase===1||phase===3);
    ring.classList.toggle('breathe-out',phase===2);
    if(cycle>=3){
      clearInterval(breatheTimer);
      breatheTimer=null;
      ring.classList.remove('breathe-animate','breathe-in','breathe-hold','breathe-out');
      count.textContent='3';
    }
  },4000);
}

function renderResumeReading(){
  const panel=document.querySelector('#resumeReading');
  const text=document.querySelector('#resumeQuote');
  if(!panel||!text) return;
  const recentId=readStoredArray('shiyulu-read').slice(-1)[0];
  const quote=quotes.find(item=>item.id===recentId);
  const dismissed=sessionStorage.getItem('shiyulu-resume-dismissed')===recentId;
  panel.hidden=!quote||dismissed;
  if(quote){panel.dataset.quoteId=quote.id;text.textContent=`“${quote.cn}” · ${quote.category}`}
}
function renderStats(){
  const countEl = document.querySelector('#statQuotes');
  const categoryEl = document.querySelector('#statCategories');
  const readEl = document.querySelector('#statRead');
  if(countEl) countEl.textContent = quotes.length;
  if(categoryEl) categoryEl.textContent = new Set(quotes.map(q=>q.category)).size;
  if(readEl) readEl.textContent = readStoredArray('shiyulu-read').length;
}

function renderProfile(){
  profileModal = profileModal || document.querySelector('#profileModal');
  if(!profileModal) return;
  const readIds = readStoredArray('shiyulu-read');
  const days = readStoredArray('shiyulu-days').length;
  const checkin = readStoredObject('shiyulu-checkin');
  const today = dateKey(new Date());
  const yesterday = dateKey(new Date(Date.now() - 86400000));
  const streak = checkin && checkin.date === today ? (checkin.count || 1) : (checkin && checkin.date === yesterday ? (checkin.count || 0) : 0);
  const savedQuotes = saved.map(id => quotes.find(q => q.id === id)).filter(Boolean);
  const summary = document.querySelector('#profileSummary');
  if(summary) summary.innerHTML = [`<div><strong>${savedQuotes.length}</strong><span>我的收藏</span></div>`,`<div><strong>${readIds.length}</strong><span>已读语录</span></div>`,`<div><strong>${streak}</strong><span>连续打卡</span></div>`,`<div><strong>${Object.keys(journalEntries).length}</strong><span>手记页数</span></div>`].join('');
  renderJournal();
  syncPreferenceControls();
  const catBox = document.querySelector('#profileCategories');
  const tagBox = document.querySelector('#profileTags');
  if(!savedQuotes.length){
    if(catBox) catBox.innerHTML = '<div class="profile-empty">还没有收藏。打开任意语录，点一下 ♡，你的拾取档案会从这里开始。</div>';
    if(tagBox) tagBox.innerHTML = '<div class="profile-empty">收藏几句话后，这里会出现你最常拾取的标签。</div>';
  }else{
    const cats = {};
    const tags = {};
    savedQuotes.forEach(q => {
      cats[q.category] = (cats[q.category] || 0) + 1;
      tags[q.tag] = (tags[q.tag] || 0) + 1;
    });
    const maxCat = Math.max(...Object.values(cats));
    const catRows = Object.entries(cats).sort((a,b) => b[1] - a[1]).slice(0,6).map(([name,count]) => `<div class="profile-bar-row"><span>${esc(name)}</span><span class="profile-bar"><i style="width:${Math.round(count / maxCat * 100)}%"></i></span><b>${count}</b></div>`).join('');
    if(catBox) catBox.innerHTML = catRows;
    const tagItems = Object.entries(tags).sort((a,b) => b[1] - a[1]).slice(0,8).map(([name,count]) => `<span>${esc(name)} · ${count}</span>`).join('');
    if(tagBox) tagBox.innerHTML = tagItems;
  }
  const historyBox=document.querySelector('#profileHistory');
  if(historyBox){
    const recent=readIds.slice(-5).reverse().map(id=>quotes.find(q=>q.id===id)).filter(Boolean);
    historyBox.innerHTML=recent.length?recent.map(q=>`<button type="button" data-history-id="${esc(q.id)}"><span>${esc(q.category)}</span><p>“${esc(q.cn)}”</p></button>`).join(''):'<div class="profile-empty">读过的语录会按最近时间出现在这里。</div>';
  }
}

function renderJournal(){
  const today=dateKey(new Date());
  const dayIndex=Math.floor(Date.now()/86400000)%quotes.length;
  const promptQuote=heroPick||quotes[dayIndex];
  const dateEl=document.querySelector('#journalDate');
  const promptEl=document.querySelector('#journalPrompt');
  const entryEl=document.querySelector('#journalEntry');
  const countEl=document.querySelector('#journalCount');
  const historyEl=document.querySelector('#journalHistory');
  if(dateEl) dateEl.textContent=new Date().toLocaleDateString('zh-CN',{month:'long',day:'numeric',weekday:'short'});
  if(promptEl&&promptQuote) promptEl.textContent=`“${promptQuote.cn}”`;
  if(entryEl){entryEl.value=journalEntries[today]?.text||'';if(countEl) countEl.textContent=`${entryEl.value.length} / 300`}
  if(historyEl){
    const recent=Object.entries(journalEntries).sort((a,b)=>b[0].localeCompare(a[0])).slice(0,4);
    historyEl.innerHTML=recent.length?`<p>最近手记</p>${recent.map(([date,item])=>`<button type="button" data-journal-date="${esc(date)}"><time>${esc(date.slice(5).replace('-',' / '))}</time><span>${esc(item.text)}</span></button>`).join('')}`:'<div class="profile-empty">保存第一篇手记后，最近的心情会留在这里。</div>';
  }
}
function collectArchive(){
  const checkinRaw = localStorage.getItem('shiyulu-checkin');
  let checkin = null;
  try{checkin = checkinRaw ? JSON.parse(checkinRaw) : null}catch(e){checkin = null}
  return {
    app:'shiyulu',
    version:1,
    exportedAt:new Date().toISOString(),
    saved,
    read:readStoredArray('shiyulu-read'),
    days:readStoredArray('shiyulu-days'),
    checkin,
    notes:readStoredArray('shiyulu-notes'),
    submits:readStoredArray('shiyulu-submits'),
    quoteNotes,
    journalEntries,
    quoteLayout,
    readingMode:localStorage.getItem('shiyulu-reading-mode') || 'standard',
    theme:localStorage.getItem('shiyulu-theme') || '',
    fontsize:parseInt(localStorage.getItem('shiyulu-fontsize') || '16', 10)
  };
}
function exportArchive(){
  const blob = new Blob([JSON.stringify(collectArchive(), null, 2)], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = '拾语录-本地数据-' + dateKey(new Date()) + '.json';
  a.click();
  setTimeout(()=>URL.revokeObjectURL(url), 1000);
  showToast('本地数据已导出');
}
function restoreArchive(data){
  if(!data || typeof data !== 'object') throw new Error('invalid archive');
  if(Array.isArray(data.saved)){
    const ids = [...new Set(data.saved.filter(id => quotes.some(q => q.id === id)))];
    saved = ids;
    localStorage.setItem('shiyulu-saved', JSON.stringify(saved));
  }
  const arrayKeys = {read:'shiyulu-read', days:'shiyulu-days', notes:'shiyulu-notes', submits:'shiyulu-submits'};
  Object.entries(arrayKeys).forEach(([field, key]) => {
    if(Array.isArray(data[field])) localStorage.setItem(key, JSON.stringify(data[field]));
  });
  if(data.checkin && typeof data.checkin === 'object' && data.checkin.date){
    localStorage.setItem('shiyulu-checkin', JSON.stringify({date:String(data.checkin.date), count:Math.max(1, parseInt(data.checkin.count, 10) || 1)}));
  }
  if(data.quoteNotes && typeof data.quoteNotes === 'object' && !Array.isArray(data.quoteNotes)) localStorage.setItem('shiyulu-quote-notes', JSON.stringify(data.quoteNotes));
  if(data.journalEntries && typeof data.journalEntries === 'object' && !Array.isArray(data.journalEntries)) localStorage.setItem('shiyulu-journal', JSON.stringify(data.journalEntries));
  if(data.quoteLayout === 'list' || data.quoteLayout === 'grid') localStorage.setItem('shiyulu-quote-layout', data.quoteLayout);
  if(data.readingMode === 'standard' || data.readingMode === 'relaxed') localStorage.setItem('shiyulu-reading-mode', data.readingMode);
  if(data.theme === 'light' || data.theme === 'dark') localStorage.setItem('shiyulu-theme', data.theme);
  const size = parseInt(data.fontsize, 10);
  if(size >= 14 && size <= 20) localStorage.setItem('shiyulu-fontsize', String(size));
}

function renderAll(){
  renderQuotes();
  renderPicks();
  renderDaily();
  renderStats();
  renderHeroTicker();
  const statSaved = document.querySelector('#statSaved');
  if(statSaved) statSaved.textContent = saved.length;
  if(showSavedButton) showSavedButton.innerHTML = saved.length ? `我的收藏 <span>(${saved.length})</span>` : `我的收藏 <span>♡</span>`;
  const moodSave=document.querySelector('#moodSave');
  if(moodSave&&activeMoodQuote) moodSave.textContent=saved.includes(activeMoodQuote.id)?'♥ 已收藏':'♡ 收藏';
}

function renderHeroTicker(){
  const track = document.querySelector('.hero-ticker-track');
  if(!track || track.dataset.built) return;
  const categories = [...new Set(quotes.map(q=>q.category))];
  const items = categories.map(category=>`<span>${esc(category)}<i>✦</i></span>`).join('');
  track.innerHTML = items + items;
  track.dataset.built = '1';
}

function renderStories(){
  const grid = document.querySelector('#storyGrid');
  if(!grid) return;
  const visibleStories = currentStoryCategory === '全部' ? stories : stories.filter(story => story.category === currentStoryCategory);
  grid.innerHTML = visibleStories.map((story, index) => `<article class="story-card" data-story-id="${esc(story.id)}" data-category="${esc(story.category)}" style="--story-cat:${categoryAccents[story.category]||'#d96c51'}"><div class="story-card-top"><span>${String(index + 1).padStart(2,'0')} / ${esc(story.category)}</span><span>小故事</span></div><h3>${esc(story.title)}</h3><p class="story-excerpt">${esc(story.excerpt)}</p><div class="story-card-bottom"><span>${esc(story.meta)} · 约${storyMinutes(story)}分钟</span><button class="story-read" type="button">读完这篇 <span>↗</span></button></div></article>`).join('');
}

function openStory(id){
  activeStory = stories.find(story => story.id === id);
  if(!activeStory || !storyModal) return;
  document.querySelector('#storyModalCategory').textContent = activeStory.category + ' · SMALL STORY';
  document.querySelector('#storyModalTitle').textContent = activeStory.title;
  document.querySelector('#storyModalMeta').textContent = activeStory.meta + ' · 约' + storyMinutes(activeStory) + '分钟';
  document.querySelector('#storyModalBody').innerHTML = activeStory.body.split('\n').map(paragraph => `<p>${esc(paragraph)}</p>`).join('');
  const linkedQuote = quotes.find(quote => quote.id === activeStory.quoteId);
  const quoteBox = document.querySelector('#storyModalQuote');
  if(quoteBox && linkedQuote) quoteBox.innerHTML = `<span>故事里的一句话</span><blockquote>“${esc(linkedQuote.cn)}”</blockquote><small>${esc(linkedQuote.en)}</small><p class="story-quote-meaning">${esc(getExplanation(linkedQuote))}</p>`;
  storyModal.showModal();
}

function showToast(message){
  const toast=document.querySelector('#toast');
  if(!toast) return;
  toast.textContent=message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>toast.classList.remove('show'),2200);
}
function toggleSave(id){saved=saved.includes(id)?saved.filter(item=>item!==id):[...saved,id];localStorage.setItem('shiyulu-saved',JSON.stringify(saved));renderAll();showToast(saved.includes(id)?'已收藏这句话':'已取消收藏')}
function shareQuote(text){if(navigator.share){navigator.share({title:'拾语录',text}).catch(()=>{})}else{navigator.clipboard?.writeText(text);showToast('句子已复制，可以分享给朋友了')}}

document.querySelector('#storyTabs')?.addEventListener('click', event => {
  const tab = event.target.closest('.story-tab');
  if(!tab) return;
  currentStoryCategory = tab.dataset.storyCategory;
  document.querySelectorAll('.story-tab').forEach(item => {const active=item===tab;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active))});
  renderStories();
observeReveal();
});

document.querySelector('#storyGrid')?.addEventListener('click', event => {
  const card = event.target.closest('.story-card');
  if(card) openStory(card.dataset.storyId);
});

document.querySelector('#randomStory')?.addEventListener('click', () => {
  const pool = currentStoryCategory === '全部' ? stories : stories.filter(story => story.category === currentStoryCategory);
  const story = pool[Math.floor(Math.random() * pool.length)];
  if(story) openStory(story.id);
});

document.querySelector('#storyModalCollect')?.addEventListener('click', () => {
  if(!activeStory) return;
  const linkedQuote = quotes.find(quote => quote.id === activeStory.quoteId);
  if(linkedQuote){
    toggleSave(linkedQuote.id);
    storyModal.close();
    document.querySelector(`[data-quote-id="${linkedQuote.id}"]`)?.scrollIntoView({behavior:'smooth',block:'center'});
  }
});

document.querySelectorAll('[data-mood-intent]').forEach(button=>button.addEventListener('click',()=>renderMoodQuote(button)));
document.querySelector('#moodRefresh')?.addEventListener('click',()=>{
  const active=document.querySelector('[data-mood-intent].active');
  renderMoodQuote(active,true);
});
document.querySelector('#moodOpen')?.addEventListener('click',()=>{if(activeMoodQuote) openQuote(activeMoodQuote.id)});
document.querySelector('#moodSave')?.addEventListener('click',()=>{if(activeMoodQuote) toggleSave(activeMoodQuote.id)});

document.querySelector('#categoryExpand')?.addEventListener('click',event=>{
  const grid=document.querySelector('.category-grid');
  if(!grid) return;
  const expanded=grid.classList.toggle('expanded');
  event.currentTarget.setAttribute('aria-expanded',String(expanded));
  event.currentTarget.firstChild.textContent=expanded?'收起分类 ':'展开全部 22 个分类 ';
});

document.querySelector('#collectionToolsToggle')?.addEventListener('click',event=>{
  const tools=document.querySelector('#collectionTools');
  if(!tools) return;
  const open=tools.classList.toggle('mobile-open');
  event.currentTarget.setAttribute('aria-expanded',String(open));
});
document.querySelector('#resumeOpen')?.addEventListener('click',()=>{
  const panel=document.querySelector('#resumeReading');
  if(panel?.dataset.quoteId) openQuote(panel.dataset.quoteId);
});
document.querySelector('#resumeDismiss')?.addEventListener('click',()=>{
  const panel=document.querySelector('#resumeReading');
  if(!panel) return;
  sessionStorage.setItem('shiyulu-resume-dismissed',panel.dataset.quoteId||'1');
  panel.hidden=true;
});
document.querySelector('#quoteViewToggle')?.addEventListener('click',()=>{
  quoteLayout=quoteLayout==='grid'?'list':'grid';
  localStorage.setItem('shiyulu-quote-layout',quoteLayout);
  renderQuotes();
});

document.querySelector('#clearFilters')?.addEventListener('click',()=>{
  viewMode='category';
  currentCategory='爱情';
  globalQuery='';activeTag='';activeFrom='';sortMode='default';visibleCount=12;
  if(search) search.value='';
  if(modalSearch) modalSearch.value='';
  const sort=document.querySelector('#sortSelect');
  if(sort) sort.value='default';
  if(title) title.textContent=currentCategory;
  setAccent(currentCategory);
  categoryButtons.forEach(item=>{const active=item.dataset.category===currentCategory;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active))});
  renderQuotes();
});

categoryButtons.forEach(card=>card.addEventListener('click',()=>{
  currentCategory=card.dataset.category;
  setAccent(card.dataset.category);
  viewMode='category';
  globalQuery='';
  activeTag='';
  activeFrom='';
  visibleCount=12;
  if(search) search.value='';
  if(modalSearch) modalSearch.value='';
  title.textContent=currentCategory;
  categoryButtons.forEach(item=>{const active=item===card;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active))});
  renderQuotes();
  document.querySelector('.collection').scrollIntoView({behavior:'smooth',block:'start'});
}));

showAllButton?.addEventListener('click',()=>{
  viewMode='all';
  setAccent('');
  globalQuery='';
  activeTag='';
  activeFrom='';
  visibleCount=12;
  if(search) search.value='';
  if(modalSearch) modalSearch.value='';
  title.textContent='全部语录';
  categoryButtons.forEach(item=>{item.classList.remove('active');item.setAttribute('aria-pressed','false')});
  renderQuotes();
});

showSavedButton?.addEventListener('click',()=>{
  viewMode='saved';
  setAccent('');
  globalQuery='';
  activeTag='';
  activeFrom='';
  visibleCount=12;
  if(search) search.value='';
  if(modalSearch) modalSearch.value='';
  title.textContent='我的收藏';
  categoryButtons.forEach(item=>{item.classList.remove('active');item.setAttribute('aria-pressed','false')});
  renderQuotes();
});

search?.addEventListener('input',()=>{
  globalQuery='';
  activeTag='';
  activeFrom='';
  if(modalSearch) modalSearch.value='';
  visibleCount=12;
  clearTimeout(searchTimer);
  searchTimer=setTimeout(()=>renderQuotes(),180);
});

modalSearch?.addEventListener('input',event=>{
  globalQuery=event.target.value.trim().toLowerCase();
  activeTag='';
  activeFrom='';
  visibleCount=12;
  renderQuotes();
});

loadMore?.addEventListener('click',()=>{
  visibleCount+=12;
  renderQuotes();
});

document.addEventListener('click',event=>{
  const saveButton=event.target.closest('.save-quote,.save-button');
  if(saveButton){toggleSave(saveButton.dataset.id || 'daily-1');return}
  const shareButton=event.target.closest('[data-share]');
  if(shareButton)shareQuote(shareButton.dataset.share);
});

document.querySelector('#randomQuote')?.addEventListener('click',()=>{
  const pool = globalQuery ? getBaseQuotes() : (viewMode==='all' ? quotes : viewMode==='saved' ? quotes.filter(q=>saved.includes(q.id)) : quotes.filter(q=>q.category===currentCategory));
  const selected = pool[Math.floor(Math.random()*pool.length)];
  if(!selected){showToast('这个范围里还没有语录');return}
  viewMode='all';
  setAccent('');
  globalQuery='';
  if(search) search.value='';
  if(modalSearch) modalSearch.value='';
  title.textContent='全部语录';
  categoryButtons.forEach(item=>{item.classList.remove('active');item.setAttribute('aria-pressed','false')});
  visibleCount = quotes.length;
  renderQuotes();
  const card = document.querySelector(`[data-quote-id="${selected.id}"]`);
  if(card){
    card.scrollIntoView({behavior:'smooth',block:'center'});
    card.classList.add('flash');
    setTimeout(()=>card.classList.remove('flash'),1800);
  }
  showToast('已为你拾取一句：' + selected.cn.slice(0,10) + '…');
});

document.querySelector('#blindBox')?.addEventListener('click',()=>{
  const box=quotes[Math.floor(Math.random()*quotes.length)];
  openQuote(box.id);
  const modal=document.querySelector('#quoteModal');
  if(modal){
    modal.classList.remove('flip');
    requestAnimationFrame(()=>modal.classList.add('flip'));
    setTimeout(()=>modal.classList.remove('flip'),650);
  }
  showToast('盲盒开出：' + box.category + ' · ' + box.tag);
});

document.querySelector('#openSearch')?.addEventListener('click',()=>{const dialog=document.querySelector('#searchModal');dialog.showModal();document.querySelector('#modalSearch')?.focus()});
document.querySelectorAll('[data-close]').forEach(button=>button.addEventListener('click',()=>document.querySelector(`#${button.dataset.close}`).close()));
document.querySelector('#openSubmit')?.addEventListener('click',()=>document.querySelector('#submitModal').showModal());
document.querySelector('#profileBtn')?.addEventListener('click',()=>{
  renderProfile();
  profileModal.showModal();
});
const menuToggle=document.querySelector('#menuToggle');
const mobileNav=document.querySelector('#mobileNav');
function setMenuOpen(open){
  if(!menuToggle) return;
  document.documentElement.classList.toggle('menu-open',open);
  menuToggle.setAttribute('aria-expanded',String(open));
  menuToggle.setAttribute('aria-label',open?'关闭导航':'打开导航');
  if(mobileNav) mobileNav.setAttribute('aria-hidden',String(!open));
}
menuToggle?.addEventListener('click',()=>setMenuOpen(!document.documentElement.classList.contains('menu-open')));
document.querySelector('#mobileNavClose')?.addEventListener('click',()=>setMenuOpen(false));
document.querySelectorAll('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>setMenuOpen(false)));
document.addEventListener('click',e=>{
  const modal=e.target.closest('dialog.modal');
  if(modal && e.target===modal) modal.close();
});
function updateOnlineStatus(){
  const el=document.querySelector('#onlineStatus');
  if(!el) return;
  const offline=!navigator.onLine;
  el.hidden=!offline;
  el.textContent=offline?'当前离线 · 正在阅读本地收藏':'已重新连接';
}
window.addEventListener('online',updateOnlineStatus);
window.addEventListener('offline',updateOnlineStatus);
updateOnlineStatus();
function renderChips(filtered){
  const chipsBox=document.querySelector('#tagChips');
  if(!chipsBox) return;
  const tags=[...new Set(filtered.map(q=>q.tag))].slice(0,16);
  const chips=[`<button class="chip ${activeTag===''?'active':''}" data-tag="" type="button" aria-pressed="${activeTag===''}">全部</button>`];
  tags.forEach(t=>chips.push(`<button class="chip ${activeTag===t?'active':''}" data-tag="${esc(t)}" type="button" aria-pressed="${activeTag===t}">${esc(t)}</button>`));
  chipsBox.innerHTML=chips.join('');
}
function renderCategoryCounts(){
  document.querySelectorAll('.category-card').forEach(card=>{
    card.setAttribute('aria-pressed',String(card.classList.contains('active')));
    if(card.querySelector('.category-count')) return;
    const n=quotes.filter(q=>q.category===card.dataset.category).length;
    card.insertAdjacentHTML('beforeend',`<span class="category-count">${n} 条</span>`);
  });
}
function renderVisits(){
  const days=readStoredArray('shiyulu-days');
  const today=dateKey(new Date());
  if(!days.includes(today)) days.push(today);
  localStorage.setItem('shiyulu-days',JSON.stringify(days));
  const el=document.querySelector('#statDays');
  if(el) el.textContent=days.length;
}
const notes=readStoredArray('shiyulu-notes');
const submits=readStoredArray('shiyulu-submits');
const quoteModal=document.querySelector('#quoteModal');
let activeQuote=null;
function esc(text){return String(text).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;')}
function renderNotes(){
  const listEl=document.querySelector('#noteList');
  if(!listEl) return;
  listEl.innerHTML=notes.length?notes.slice().reverse().map(n=>`<li><strong>${esc(n.name||'匿名')}</strong><span>${esc(n.text)}</span><small>${esc(n.date||'')}</small></li>`).join(''):'<li class="empty-note">还没有留言，来说句话吧。</li>';
}
function renderSubmits(){
  const listEl=document.querySelector('#submitList');
  if(!listEl) return;
  listEl.innerHTML=submits.length?submits.slice().reverse().map(n=>`<li><strong>${esc(n.name||'匿名')} 的投稿</strong><span>${esc(n.text)}</span><small>${esc(n.date||'')}</small></li>`).join(''):'<li class="empty-note">还没有投稿，来留下你的第一句吧。</li>';
}
function openQuote(id){
  activeQuote=quotes.find(q=>q.id===id);
  if(!activeQuote||!quoteModal) return;
  const read=readStoredArray('shiyulu-read').filter(item=>item!==id);
  read.push(id);
  localStorage.setItem('shiyulu-read',JSON.stringify(read.slice(-100)));
  sessionStorage.removeItem('shiyulu-resume-dismissed');
  renderStats();
  renderResumeReading();
  document.querySelector('#modalTag').textContent=activeQuote.tag;
  document.querySelector('#modalCn').textContent=activeQuote.cn;
  document.querySelector('#modalEn').textContent=activeQuote.en;
  document.querySelector('#modalFrom').textContent=activeQuote.from||'拾语录';
  document.querySelector('#modalExplanation').textContent=getExplanation(activeQuote);
  document.querySelector('#modalScene').textContent='适合在：'+getScene(activeQuote);
  const relatedList=document.querySelector('#relatedList');
  if(relatedList){
    const related=quotes.filter(q=>q.id!==id&&(q.category===activeQuote.category||q.tag===activeQuote.tag)).slice(0,3);
    relatedList.innerHTML=related.map(q=>`<button class="related-quote" data-related="${esc(q.id)}" type="button">“${esc(q.cn)}”<small>${esc(q.category)} · ${esc(q.tag)}</small></button>`).join('');
  }
  const saveBtn=document.querySelector('#modalSave');
  saveBtn.dataset.id=activeQuote.id;
  saveBtn.classList.toggle('saved',saved.includes(activeQuote.id));
  saveBtn.innerHTML=saved.includes(activeQuote.id)?'♥ 已收藏':'♡ 收藏';
  const noteEl=document.querySelector('#quoteNote');
  const noteCount=document.querySelector('#quoteNoteCount');
  if(noteEl){noteEl.value=quoteNotes[activeQuote.id]||'';if(noteCount) noteCount.textContent=`${noteEl.value.length} / 240`}
  quoteModal.showModal();
}
function wrapText(ctx,text,maxWidth){
  const lines=[];let line='';
  for(const ch of String(text||'')){
    const test=line+ch;
    if(ctx.measureText(test).width>maxWidth&&line){lines.push(line);line=ch}else{line=test}
  }
  if(line) lines.push(line); return lines;
}
function drawLines(ctx,lines,x,y,lineHeight,maxLines){lines.slice(0,maxLines).forEach((line,index)=>ctx.fillText(line,x,y+index*lineHeight));return Math.min(lines.length,maxLines)}
function generateShareCard(quote){
  const canvas=document.createElement('canvas'); canvas.width=1200; canvas.height=1500;
  const ctx=canvas.getContext('2d'); const W=canvas.width,H=canvas.height;
  ctx.fillStyle='#f4efe4';ctx.fillRect(0,0,W,H);
  ctx.fillStyle='rgba(91,77,58,.035)'; for(let y=0;y<H;y+=9)ctx.fillRect(0,y,W,1);
  ctx.strokeStyle='rgba(118,91,66,.22)';ctx.lineWidth=2;ctx.strokeRect(55,55,W-110,H-110);
  ctx.strokeStyle='#d9795f';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(92,145);ctx.lineTo(176,145);ctx.stroke();
  ctx.fillStyle='#8d5c4b';ctx.font='600 22px Arial';ctx.letterSpacing='4px';ctx.fillText('SHI YU LU',92,118);
  ctx.fillStyle='#6f766b';ctx.font='16px Arial';ctx.fillText('拾语录  /  COLLECTED WORDS',92,182);
  ctx.fillStyle='#1e3029';ctx.font='600 58px "Noto Serif SC", Georgia, serif';
  const quoteLines=wrapText(ctx,quote.cn,930); const quoteCount=drawLines(ctx,quoteLines,92,330,92,6);
  let cursor=330+quoteCount*92+45;
  ctx.fillStyle='#d9795f';ctx.font='36px Georgia, serif';ctx.fillText('“',92,cursor);
  ctx.strokeStyle='rgba(30,48,41,.2)';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(92,cursor+32);ctx.lineTo(W-92,cursor+32);ctx.stroke();cursor+=93;
  ctx.fillStyle='#68766e';ctx.font='italic 28px Georgia, serif';
  const enLines=wrapText(ctx,quote.en,900); const enCount=drawLines(ctx,enLines,92,cursor,47,4); cursor+=enCount*47+72;
  ctx.fillStyle='#8d5c4b';ctx.font='600 17px Arial';ctx.fillText('这句话想说  /  A NOTE TO KEEP',92,cursor);cursor+=42;
  ctx.fillStyle='#485950';ctx.font='25px "Noto Serif SC", Georgia, serif';
  const explainLines=wrapText(ctx,getExplanation(quote),900); drawLines(ctx,explainLines,92,cursor,43,7);
  ctx.fillStyle='#68766e';ctx.font='17px Arial';ctx.fillText('适合在：'+getScene(quote),92,H-185);
  ctx.fillStyle='#8d5c4b';ctx.font='600 17px Arial';ctx.fillText(quote.category+'  ·  '+quote.tag,92,H-125);
  ctx.fillStyle='#68766e';ctx.font='16px Arial';ctx.textAlign='right';ctx.fillText('拾语录  SHI YU LU',W-92,H-125);ctx.textAlign='left';
  return canvas;
}document.querySelector('#tagChips')?.addEventListener('click',e=>{
  const chip=e.target.closest('.chip');
  if(!chip) return;
  activeTag=chip.dataset.tag||'';
  visibleCount=12;
  renderQuotes();
});
document.querySelector('#sortSelect')?.addEventListener('change',e=>{
  sortMode=e.target.value;
  visibleCount=12;
  renderQuotes();
});
document.querySelector('#hotWords')?.addEventListener('click',e=>{
  const hot=e.target.closest('[data-hot]');
  if(!hot) return;
  modalSearch.value=hot.dataset.hot;
  globalQuery=hot.dataset.hot.toLowerCase();
  activeTag='';
  visibleCount=12;
  renderQuotes();
  document.querySelector('#searchModal').close();
});
[list,document.querySelector('#picksList')].forEach(container=>{
  container?.addEventListener('click',e=>{
    const item=e.target.closest('.quote-item');
    if(item&&!e.target.closest('button')) openQuote(item.dataset.quoteId);
  });
});
document.querySelector('#modalSave')?.addEventListener('click',e=>toggleSave(e.currentTarget.dataset.id));
document.querySelector('#modalCopy')?.addEventListener('click',()=>{
  navigator.clipboard?.writeText(`${activeQuote.cn}\n${activeQuote.en}`);
  showToast('中英文已复制');
});
document.querySelector('#modalShare')?.addEventListener('click',()=>shareQuote(activeQuote.cn));
document.querySelector('#modalImage')?.addEventListener('click',()=>{
  const canvas=generateShareCard(activeQuote);
  canvas.toBlob(blob=>{
    const url=URL.createObjectURL(blob);
    const a=document.createElement('a');
    a.href=url;a.download=`拾语录-${activeQuote.category}-${activeQuote.tag}.png`;a.click();
    setTimeout(()=>URL.revokeObjectURL(url),1500);
  });
  showToast('语录图片已生成并下载');
});
document.querySelector('#quoteNote')?.addEventListener('input',event=>{
  const count=document.querySelector('#quoteNoteCount');
  if(count) count.textContent=`${event.target.value.length} / 240`;
});
document.querySelector('#saveQuoteNote')?.addEventListener('click',()=>{
  if(!activeQuote) return;
  const value=document.querySelector('#quoteNote')?.value.trim()||'';
  if(value) quoteNotes[activeQuote.id]=value;
  else delete quoteNotes[activeQuote.id];
  localStorage.setItem('shiyulu-quote-notes',JSON.stringify(quoteNotes));
  showToast(value?'批注已保存':'批注已清除');
});
document.querySelector('#journalEntry')?.addEventListener('input',event=>{
  const count=document.querySelector('#journalCount');
  if(count) count.textContent=`${event.target.value.length} / 300`;
});
document.querySelector('#saveJournal')?.addEventListener('click',()=>{
  const entry=document.querySelector('#journalEntry');
  if(!entry) return;
  const text=entry.value.trim();
  const recordDate=entry.dataset.journalDate||dateKey(new Date());
  if(text) journalEntries[recordDate]={text,updatedAt:new Date().toISOString()};
  else delete journalEntries[recordDate];
  localStorage.setItem('shiyulu-journal',JSON.stringify(journalEntries));
  renderProfile();
  showToast(text?'手记已保存':'手记已清空');
});
document.querySelector('#journalHistory')?.addEventListener('click',event=>{
  const item=event.target.closest('[data-journal-date]');
  if(!item) return;
  const record=journalEntries[item.dataset.journalDate];
  if(!record) return;
  const entry=document.querySelector('#journalEntry');
  if(entry){entry.dataset.journalDate=item.dataset.journalDate;entry.value=record.text;entry.focus();entry.setSelectionRange(entry.value.length,entry.value.length)}
  const dateLabel=document.querySelector('#journalDate');
  if(dateLabel) dateLabel.textContent=item.dataset.journalDate+' · 过往手记'
  const count=document.querySelector('#journalCount');
  if(count) count.textContent=`${record.text.length} / 300`;
  showToast('已打开 '+item.dataset.journalDate+' 的手记');
});
document.querySelector('#profileHistory')?.addEventListener('click',event=>{
  const button=event.target.closest('[data-history-id]');
  if(!button) return;
  profileModal?.close();
  openQuote(button.dataset.historyId);
});
document.querySelector('#noteForm')?.addEventListener('submit',e=>{
  e.preventDefault();
  const f=e.target;
  notes.push({name:f.name.value.trim()||'匿名',text:f.text.value.trim(),date:new Date().toLocaleDateString('zh-CN')});
  localStorage.setItem('shiyulu-notes',JSON.stringify(notes));
  f.reset();renderNotes();showToast('留言已发布');
});
document.querySelector('#submitForm')?.addEventListener('submit',e=>{
  e.preventDefault();
  const textEl=e.target.querySelector('textarea');
  const nameEl=e.target.querySelector('input');
  submits.push({name:nameEl.value.trim()||'匿名',text:textEl.value.trim(),date:new Date().toLocaleDateString('zh-CN')});
  localStorage.setItem('shiyulu-submits',JSON.stringify(submits));
  renderSubmits();
  document.querySelector('#submitMessage').textContent='谢谢你的分享，句子已出现在投稿墙，等待编辑拾起。';
  e.target.reset();showToast('投稿已收到');
});
function setTheme(theme){
  document.documentElement.dataset.theme=theme;
  localStorage.setItem('shiyulu-theme',theme);
  syncPreferenceControls();
}
function toggleTheme(){setTheme(document.documentElement.dataset.theme==='dark'?'light':'dark')}
document.querySelector('#themeToggle')?.addEventListener('click',toggleTheme);
document.querySelector('#profileThemeToggle')?.addEventListener('click',toggleTheme);
document.querySelector('[data-nav="saved"]')?.addEventListener('click',e=>{
  e.preventDefault();
  showSavedButton.click();
  document.querySelector('#collection').scrollIntoView({behavior:'smooth',block:'start'});
});
window.addEventListener('scroll',()=>{
  document.querySelector('#toTop')?.classList.toggle('show',window.scrollY>600);
});
document.querySelector('#toTop')?.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
document.addEventListener('keydown',e=>{
  const tag=document.activeElement?.tagName||'';
  const typing=['INPUT','TEXTAREA','SELECT'].includes(tag);
  if(e.key==='/'&&!typing){
    e.preventDefault();
    document.querySelector('#openSearch')?.click();
  }
  if(typing||e.metaKey||e.ctrlKey||e.altKey) return;
  if(e.key==='d'||e.key==='D'){
    e.preventDefault();
    document.querySelector('#daily')?.scrollIntoView({behavior:'smooth',block:'start'});
  }
  if(e.key==='p'||e.key==='P'){
    e.preventDefault();
    document.querySelector('#profileBtn')?.click();
  }
});
window.addEventListener('beforeinstallprompt',event=>{
  event.preventDefault();
  installPrompt=event;
  const button=document.querySelector('#installApp');
  if(button) button.hidden=false;
});
document.querySelector('#installApp')?.addEventListener('click',async()=>{
  if(!installPrompt) return;
  await installPrompt.prompt();
  await installPrompt.userChoice;
  installPrompt=null;
  document.querySelector('#installApp').hidden=true;
});
window.addEventListener('appinstalled',()=>{
  installPrompt=null;
  const button=document.querySelector('#installApp');
  if(button) button.hidden=true;
  showToast('拾语录已安装到设备');
});
if('serviceWorker' in navigator&&location.protocol.startsWith('http')){
  navigator.serviceWorker.register('sw.js').catch(()=>{});
}
function renderFromChips(filtered){
  const box=document.querySelector('#fromChips');
  if(!box) return;
  const sources=[...new Set(filtered.map(q=>q.from||'拾语录'))].slice(0,16);
  const chips=[`<button class="chip ${activeFrom===''?'active':''}" data-from="" type="button">全部出处</button>`];
  sources.forEach(s=>chips.push(`<button class="chip ${activeFrom===s?'active':''}" data-from="${esc(s)}" type="button">${esc(s)}</button>`));
  box.innerHTML=chips.join('');
}
function renderMonthTheme(){
  const container=document.querySelector('#monthList');
  if(!container) return;
  const month=new Date().getMonth();
  const words=['初见','想念','出发','生长','晚风','夏天','远方','告别','收获','等待','温柔','拥抱'];
  const label=document.querySelector('#monthLabel');
  if(label) label.textContent=`${month+1}月 · ${words[month]}`;
  const picked=[quotes[month],quotes[month+12],quotes[month+24]].filter(Boolean);
  container.innerHTML=picked.map(q=>`<div class="month-quote"><blockquote>“${esc(q.cn)}”</blockquote><p>${esc(q.en)}</p></div>`).join('');
}
document.querySelector('#fromChips')?.addEventListener('click',e=>{
  const chip=e.target.closest('.chip');
  if(!chip) return;
  activeFrom=chip.dataset.from||'';
  visibleCount=12;
  renderQuotes();
});
document.querySelector('#relatedList')?.addEventListener('click',e=>{
  const btn=e.target.closest('[data-related]');
  if(btn) openQuote(btn.dataset.related);
});
const sentinel=document.querySelector('#sentinel');
if('IntersectionObserver' in window&&sentinel){
  const io=new IntersectionObserver(entries=>{
    if(entries[0].isIntersecting&&loadMore&&!loadMore.hidden){visibleCount+=12;renderQuotes()}
  },{rootMargin:'240px'});
  io.observe(sentinel);
}
function getFontSize(){
  const value=parseInt(localStorage.getItem('shiyulu-fontsize')||'16',10);
  return Number.isFinite(value)?Math.min(20,Math.max(14,value)):16;
}
function applyFontSize(){
  const size=getFontSize();
  document.documentElement.style.setProperty('--base',size+'px');
  const output=document.querySelector('#profileFontValue');
  if(output) output.textContent=size+'px';
  document.querySelector('#profileFontMinus')?.toggleAttribute('disabled',size<=14);
  document.querySelector('#profileFontPlus')?.toggleAttribute('disabled',size>=20);
}
function changeFontSize(delta){
  const size=Math.min(20,Math.max(14,getFontSize()+delta));
  localStorage.setItem('shiyulu-fontsize',String(size));
  applyFontSize();
  showToast(`字号 ${size}px`);
}
function applyReadingMode(){
  const mode=localStorage.getItem('shiyulu-reading-mode')==='relaxed'?'relaxed':'standard';
  document.documentElement.dataset.readingMode=mode;
  document.querySelectorAll('[data-reading-mode]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.readingMode===mode)));
}
function syncPreferenceControls(){
  applyFontSize();
  applyReadingMode();
  const themeButton=document.querySelector('#profileThemeToggle');
  if(themeButton) themeButton.textContent=document.documentElement.dataset.theme==='dark'?'切换为日间模式':'切换为夜间模式';
}
document.querySelector('#fontMinus')?.addEventListener('click',()=>changeFontSize(-1));
document.querySelector('#fontPlus')?.addEventListener('click',()=>changeFontSize(1));
document.querySelector('#profileFontMinus')?.addEventListener('click',()=>changeFontSize(-1));
document.querySelector('#profileFontPlus')?.addEventListener('click',()=>changeFontSize(1));
document.querySelector('.preference-segment')?.addEventListener('click',event=>{
  const button=event.target.closest('[data-reading-mode]');
  if(!button) return;
  localStorage.setItem('shiyulu-reading-mode',button.dataset.readingMode);
  applyReadingMode();
  showToast(button.dataset.readingMode==='relaxed'?'已切换为舒展阅读':'已切换为标准阅读');
});
document.querySelector('#exportSaved')?.addEventListener('click',()=>{
  if(!saved.length){showToast('还没有收藏可以导出');return}
  const blob=new Blob([JSON.stringify(saved,null,2)],{type:'application/json'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url;a.download='拾语录-我的收藏.json';a.click();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
  showToast('收藏已导出');
});
document.querySelector('#importFile')?.addEventListener('change',e=>{
  const file=e.target.files[0];
  if(!file) return;
  const reader=new FileReader();
  reader.onload=()=>{
    try{
      const ids=JSON.parse(reader.result);
      const valid=quotes.filter(q=>ids.includes(q.id)).map(q=>q.id);
      saved=[...new Set([...saved,...valid])];
      localStorage.setItem('shiyulu-saved',JSON.stringify(saved));
      renderAll();
      showToast(`已导入 ${valid.length} 条收藏`);
    }catch{showToast('文件格式不正确')}
  };
  reader.readAsText(file);
  e.target.value='';
});
document.querySelector('#exportArchive')?.addEventListener('click',exportArchive);
document.querySelector('#importArchive')?.addEventListener('change',e=>{
  const file=e.target.files[0];
  if(!file) return;
  const reader=new FileReader();
  reader.onload=()=>{
    try{
      const data=JSON.parse(reader.result);
      if(Array.isArray(data)){
        const valid=quotes.filter(q=>data.includes(q.id)).map(q=>q.id);
        saved=[...new Set([...saved,...valid])];
        localStorage.setItem('shiyulu-saved',JSON.stringify(saved));
        renderAll();
        showToast(`已导入 ${valid.length} 条收藏`);
      }else{
        restoreArchive(data);
        showToast('本地数据已恢复，正在刷新');
        setTimeout(()=>location.reload(),700);
      }
    }catch{showToast('备份文件格式不正确')}
  };
  reader.readAsText(file);
  e.target.value='';
});
renderCategoryCounts();
document.querySelectorAll('.story-tab').forEach(tab=>tab.setAttribute('aria-pressed',String(tab.classList.contains('active'))));
renderVisits();
renderNotes();
renderSubmits();
renderMonthTheme();
renderStories();
observeReveal();
applyFontSize();
applyReadingMode();
const storedTheme=localStorage.getItem('shiyulu-theme');
document.documentElement.dataset.theme=storedTheme||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
syncPreferenceControls();
initMasthead();
initProgress();
initSectionNav();
initMoodCompass();
renderAll();
renderResumeReading();
renderHeroClock();

document.querySelector('#heroCheckinBtn')?.addEventListener('click',()=>{
  const today=dateKey(new Date());
  const data=readStoredObject('shiyulu-checkin');
  if(data&&data.date===today){showToast('今天已经打过卡了');return}
  const yesterday=dateKey(new Date(Date.now()-86400000));
  const streak=(data&&data.date===yesterday)?(data.count||1)+1:1;
  localStorage.setItem('shiyulu-checkin',JSON.stringify({date:today,count:streak}));
  renderHeroCheckin();
  showToast('今日打卡成功 · 已连续 '+streak+' 天');
});

document.addEventListener('click',event=>{
  const item=event.target.closest('.hero-quote-list li[data-quote-id]');
  if(item) openQuote(item.dataset.quoteId);
});

document.querySelector('#heroShuffle')?.addEventListener('click',()=>{
  const selected=quotes[Math.floor(Math.random()*quotes.length)];
  heroPick=selected;
  renderHeroToday(selected);
  showToast('换一句：'+selected.category+' · '+selected.tag);
});

document.querySelector('#heroListen')?.addEventListener('click',()=>{
  const btn=document.querySelector('#heroListen');
  const quoteEl=document.querySelector('#heroDailyQuote');
  if(!btn||!quoteEl) return;
  const mark=btn.querySelector('span');
  if(speech){
    try{speechSynthesis.cancel()}catch(e){}
    speech=null;
    btn.classList.remove('playing');
    if(mark) mark.textContent='♪';
    return;
  }
  if(!('speechSynthesis' in window)){showToast('当前浏览器不支持朗读');return}
  const text=quoteEl.textContent.replace(/[“”]/g,'');
  if(!text) return;
  const utter=new SpeechSynthesisUtterance(text);
  utter.lang='zh-CN';
  utter.rate=.92;
  utter.onend=()=>{
    speech=null;
    btn.classList.remove('playing');
    if(mark) mark.textContent='♪';
  };
  try{speechSynthesis.cancel()}catch(e){}
  speechSynthesis.speak(utter);
  speech=utter;
  btn.classList.add('playing');
  if(mark) mark.textContent='■';
});

document.querySelector('#heroCopy')?.addEventListener('click',()=>{
  const quote=document.querySelector('#heroDailyQuote');
  const en=document.querySelector('#heroDailyEn');
  if(!quote) return;
  const text=quote.textContent.replace(/[“”]/g,'')+(en&&en.textContent?'\n'+en.textContent:'');
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).catch(()=>{});
  }
  showToast('这句话已复制');
});

document.querySelectorAll('.hero-mood-chips button').forEach(btn=>btn.addEventListener('click',()=>{
  const card=document.querySelector(`.category-card[data-category="${btn.dataset.heroMood}"]`);
  if(card) card.click();
}));

document.querySelector('#moodLetterNew')?.addEventListener('click',()=>renderMoodLetter(activeMoodQuote||quotes[0]));
document.querySelector('#moodLetterCopy')?.addEventListener('click',()=>{
  const quote=activeMoodQuote||quotes[0];
  const letter=currentMoodLetter||moodLetterTemplates.default[0];
  const text=`${quote.cn}\n${quote.en}\n\n${letter.text}\n${letter.note}`;
  if(navigator.clipboard&&navigator.clipboard.writeText) navigator.clipboard.writeText(text).catch(()=>{});
  showToast('此刻短笺已复制');
});
document.querySelector('#moodLetterListen')?.addEventListener('click',()=>{
  const text=currentMoodLetter?`${currentMoodLetter.text}。${currentMoodLetter.note}`:'';
  if(!text) return;
  if(speech){try{speechSynthesis.cancel()}catch(e){};speech=null;return}
  if(!('speechSynthesis' in window)){showToast('当前浏览器不支持朗读');return}
  const utter=new SpeechSynthesisUtterance(text);
  utter.lang='zh-CN';
  utter.rate=.9;
  utter.onend=()=>{speech=null};
  speechSynthesis.speak(utter);
  speech=utter;
});
document.querySelector('#breatheStart')?.addEventListener('click',startBreathe);


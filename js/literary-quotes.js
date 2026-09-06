/* 名家书摘：带真实出处的名家语录与古典诗词，出处均经核对。 */
const literaryQuotes=[
 {id:'lit-1',category:'希望',author:'史铁生',work:'我与地坛',era:'当代',cn:'但是太阳，它每时每刻都是夕阳也都是旭日。当它熄灭着走下山去收尽苍凉残照之际，正是它在另一面燃烧着爬上山巅布散烈烈朝辉之时。',en:'The sun is at once setting and rising: as it goes down gathering cold shadows on one side, it climbs another mountain in blazing dawn-light.',tag:'夕阳与旭日',explanation:'每一次落幕都在别处成为升起。你以为熄灭的那些时刻，也许正在世界的另一个方向，替你点亮清晨。'},
 {id:'lit-2',category:'时光',author:'史铁生',work:'我与地坛',era:'当代',cn:'有些事只适合收藏。不能说，也不能想，却又不能忘。',en:'Some things are only fit to be kept: not to be told, not to be recalled, yet never forgotten.',tag:'收藏',explanation:'心里最重的那部分，往往无法言说。它们不适合被讨论，只适合被安静地放好，然后带着它们继续生活。'},
 {id:'lit-3',category:'治愈',author:'史铁生',work:'我与地坛',era:'当代',cn:'死是一件不必急于求成的事，死是一个必然会降临的节日。',en:'Death need not be rushed; it is a festival that is sure to arrive in its own time.',tag:'从容',explanation:'既然终点注定会来，眼前的每一天反而可以慢慢走。先把今天过好，其余的交给时间。'},
 {id:'lit-4',category:'生活',author:'余华',work:'活着',era:'当代',cn:'人是为了活着本身而活着，而不是为了活着之外的任何事物所活着。',en:'People live for the sake of living itself, and for nothing beyond it.',tag:'活着本身',explanation:'活着不需要宏大的理由。把日子过下去本身，就已经是对生命最庄重的回答。'},
 {id:'lit-5',category:'孤独',author:'余华',work:'在细雨中呼喊',era:'当代',cn:'我不再装模作样地拥有很多朋友，而是回到了孤单之中，以真正的我开始了独自的生活。',en:'I stopped pretending to have many friends and returned to solitude, beginning to live alone as my true self.',tag:'回到孤单',explanation:'热闹里凑出来的关系会消耗你。回到孤单不是退败，而是把力气省下来，先做一个真实的自己。'},
 {id:'lit-6',category:'自然',author:'汪曾祺',work:'人间草木',era:'当代',cn:'美，多少要包含一点偶然。',en:'Beauty always holds a little accident within it.',tag:'偶然之美',explanation:'最美的相遇多半没有安排。留一点空闲给偶然，生活才会替你开出不在计划里的花。'},
 {id:'lit-7',category:'爱情',author:'汪曾祺',work:'受戒',era:'当代',cn:'都到岁数了，心里不是没有。只是像一片薄薄的云，飘过来，飘过去，下不成雨。',en:'At this age the heart is not empty; it is only a thin cloud drifting past, that never quite becomes rain.',tag:'未落雨的云',explanation:'有些心事不是没有，是舍不得惊动。它像云一样来了又去，成了岁月里最安静的一种喜欢。'},
 {id:'lit-8',category:'时光',author:'木心',work:'云雀叫了一整天',era:'当代',cn:'岁月不饶人，我亦未曾饶过岁月。',en:'Time spares no one, and I have never spared time either.',tag:'与岁月周旋',explanation:'被时间改变是必然，但认真活过的每一天，都是我们与岁月你来我往的证据。'},
 {id:'lit-9',category:'生活',author:'木心',work:'云雀叫了一整天',era:'当代',cn:'生活最好的状态是冷冷清清的风风火火。',en:'The best state of life is a quiet blaze: calm outside, burning within.',tag:'安静的热爱',explanation:'外表安静，内心滚烫。不必向世界宣告什么，把自己认准的事悄悄做热，就是最好的日子。'},
 {id:'lit-10',category:'爱情',author:'沈从文',work:'湘行散记',era:'现代',cn:'我行过许多地方的桥，看过许多次数的云，喝过许多种类的酒，却只爱过一个正当最好年龄的人。',en:'I have crossed bridges in many places, watched clouds beyond counting, drunk many kinds of wine, yet loved only one person, at their best age.',tag:'只爱一个人',explanation:'走过再多的路，见过的风景最后都归成一个名字。深情从来不是多，而是唯一。'},
 {id:'lit-11',category:'希望',author:'鲁迅',work:'故乡',era:'现代',cn:'希望本是无所谓有，无所谓无的。这正如地上的路；其实地上本没有路，走的人多了，也便成了路。',en:'Hope cannot be said to exist, nor can it be said not to exist. It is like a road across the earth: there was never a road, until many people walked it.',tag:'走成路',explanation:'希望不是等来的状态，是走出来的痕迹。迈出第一步，路就已经开始形成。'},
 {id:'lit-12',category:'哲思',author:'鲁迅',work:'这也是生活',era:'现代',cn:'无穷的远方，无数的人们，都和我有关。',en:'The endless distance and the countless people are all bound up with me.',tag:'与世界有关',explanation:'人不是孤岛。你的善意、你的认真，都会沿着看不见的线，抵达远方和他人。'},
 {id:'lit-13',category:'时光',author:'王小波',work:'黄金时代',era:'当代',cn:'那一年我二十一岁，在我一生的黄金时代。我有好多奢望，想爱，想吃，还想在一瞬间变成天上半明半暗的云。',en:'That year I was twenty-one, in the golden age of my life. I had so many wishes: to love, to eat, to turn into a cloud half in light and half in shade.',tag:'黄金时代',explanation:'敢于奢侈地向往，是年轻的证据。别急着收敛愿望，它们正是你黄金时代的亮度。'},
 {id:'lit-14',category:'成长',author:'路遥',work:'平凡的世界',era:'当代',cn:'生活不能等待别人来安排，要自己去争取和奋斗。',en:'Life cannot wait for others to arrange it; you must strive for it yourself.',tag:'自己争取',explanation:'等待安排的人生永远是被动句。主动去争取一次，哪怕失败，也比被安排更接近自己。'},
 {id:'lit-15',category:'哲思',author:'钱钟书',work:'围城',era:'当代',cn:'围在城里的人想逃出来，城外的人想冲进去。',en:'Those inside want to get out; those outside want to get in.',tag:'围城',explanation:'每一种生活都有它的围城。与其张望别处，不如把脚下这一座城，过成自己的解法。'},
 {id:'lit-16',category:'爱情',author:'张爱玲',work:'爱',era:'现代',cn:'于千万人之中遇见你所要遇见的人，于千万年之中，时间的无涯的荒野里，没有早一步，也没有晚一步，刚巧赶上了。',en:'Among millions of people, to meet the one you are meant to meet; across thousands of years in the boundless wilderness of time, not a step too early, not a step too late.',tag:'刚巧赶上',explanation:'所有恰到好处的相遇，回头看都是奇迹。别追问为什么是他，能赶上就已经是答案。'},
 {id:'lit-17',category:'自然',author:'萧红',work:'呼兰河传',era:'现代',cn:'花开了，就像花睡醒了似的。鸟飞了，就像鸟上天了似的。虫子叫了，就像虫子在说话似的。一切都活了。',en:'Flowers bloomed as if waking from sleep; birds flew as if rising into heaven; insects sang as if speaking. Everything came alive.',tag:'一切都活了',explanation:'用孩子的眼睛看世界，万物都会开口说话。天真不是幼稚，是感受力还活着。'},
 {id:'lit-18',category:'爱情',author:'顾城',work:'门前',era:'当代',cn:'草在结它的种子，风在摇它的叶子，我们站着，不说话，就十分美好。',en:'The grass is setting its seed, the wind is rocking its leaves; we stand without speaking, and it is wholly beautiful.',tag:'不说话也很美',explanation:'舒服的关系不需要刻意填满沉默。能一起安静地站着，已经是感情里很高的境界。'},
 {id:'lit-19',category:'希望',author:'海子',work:'面朝大海，春暖花开',era:'当代',cn:'从明天起，做一个幸福的人，喂马，劈柴，周游世界。',en:'From tomorrow on, I will be a happy person: feeding horses, chopping wood, travelling the world.',tag:'幸福的人',explanation:'幸福常常藏在最小的日常里。把愿望落到具体的小事上，明天就有了可以出发的形状。'},
 {id:'lit-20',category:'孤独',author:'海子',work:'黑夜的献诗',era:'当代',cn:'天空一无所有，为何给我安慰。',en:'The sky possesses nothing at all; why then does it comfort me?',tag:'空旷的安慰',explanation:'有些安慰不提供答案，只提供辽阔。抬头看看空旷的天空，难处会被放小一点。'},
 {id:'lit-21',category:'时光',author:'北岛',work:'波兰来客',era:'当代',cn:'那时我们有梦，关于文学，关于爱情，关于穿越世界的旅行。如今我们深夜饮酒，杯子碰到一起，都是梦破碎的声音。',en:'Back then we had dreams of literature, of love, of crossing the world. Now we drink late into the night, and the clinking glasses sound like dreams breaking.',tag:'梦碎的声音',explanation:'为生计低头不丢人，丢人的是不再记得曾经抬头。梦碎的声音听见了，就还有机会把它捡起来。'},
 {id:'lit-22',category:'亲情',author:'余光中',work:'乡愁',era:'当代',cn:'小时候，乡愁是一枚小小的邮票，我在这头，母亲在那头。',en:'When I was small, homesickness was a little stamp: I on this side, Mother on the other.',tag:'邮票',explanation:'亲情总隔着一程车马、一张邮票或一个屏幕。距离没能稀释它，反而让它每一步都走得郑重。'},
 {id:'lit-23',category:'亲情',author:'龙应台',work:'目送',era:'当代',cn:'所谓父女母子一场，只不过意味着，你和他的缘分就是今生今世不断地在目送他的背影渐行渐远。',en:'A lifetime of parent and child means only this: again and again, you watch his back grow smaller down the road.',tag:'目送',explanation:'爱是一场得体的退出。多回头一次，多打一通电话，是对目送你的人最好的回应。'},
 {id:'lit-24',category:'爱情',author:'席慕蓉',work:'一棵开花的树',era:'当代',cn:'如何让你遇见我，在我最美丽的时刻。',en:'How shall I let you meet me, at the moment I am most beautiful?',tag:'最美丽的时刻',explanation:'为了被遇见，有人悄悄长了很多年。请珍惜那些在最好时刻站到你面前的人。'},
 {id:'lit-25',category:'禅意',author:'林清玄',work:'人生最美是清欢',era:'当代',cn:'白鹭立雪，愚人看鹭，聪明见雪，智者观白。',en:'An egret stands in snow: the fool sees the bird, the clever see the snow, the wise see whiteness itself.',tag:'观白',explanation:'看山看水，最后看的是心境。能越过具体的事物看见本质的人，走到哪里都是清欢。'},
 {id:'lit-26',category:'希望',author:'加缪',work:'重返蒂巴萨',era:'外国文学',cn:'在隆冬，我终于知道，我身上有一个不可战胜的夏天。',en:'In the depth of winter, I finally learned that within me there lay an invincible summer.',tag:'不败的夏天',explanation:'环境再冷，人心里也可以自备季节。那个夏天不必向任何人证明自己，它一直都在。'},
 {id:'lit-27',category:'哲思',author:'加缪',work:'反抗者',era:'外国文学',cn:'对未来的真正慷慨，是把一切献给现在。',en:'True generosity toward the future lies in giving all to the present.',tag:'献给现在',explanation:'未来不是想出来的，是现在攒出来的。把今天的每一件小事做好，就是给明天最贵重的礼物。'},
 {id:'lit-28',category:'勇气',author:'罗曼·罗兰',work:'米开朗琪罗传',era:'外国文学',cn:'世界上只有一种真正的英雄主义，那就是在认清生活的真相之后依然热爱生活。',en:'There is only one heroism in the world: to see the world as it is, and to love it.',tag:'英雄主义',explanation:'热爱不是没见过黑暗，而是见过之后依然选择 点灯。清醒着热爱，才是最结实的勇气。'},
 {id:'lit-29',category:'勇气',author:'海明威',work:'老人与海',era:'外国文学',cn:'一个人可以被毁灭，但不能被打败。',en:'A man can be destroyed but not defeated.',tag:'不被打败',explanation:'结果未必如意，但只要没在心里认输，你就还站在牌桌上。败给现实可以，败给自己不行。'},
 {id:'lit-30',category:'哲思',author:'圣埃克苏佩里',work:'小王子',era:'外国文学',cn:'真正重要的东西，用眼睛是看不见的，要用心去看。',en:'What is essential is invisible to the eye; only with the heart can one see rightly.',tag:'用心看',explanation:'钱、排名、朋友圈都看得见，但真正重要的往往是那些看不见的：陪伴、信任和爱。'},
 {id:'lit-31',category:'爱情',author:'圣埃克苏佩里',work:'小王子',era:'外国文学',cn:'是你为你的玫瑰花费的时光，让你的玫瑰变得如此重要。',en:'It is the time you have spent on your rose that makes your rose so important.',tag:'玫瑰',explanation:'玫瑰之所以独一无二，不是因为它完美，而是因为你为它付出了时间。人也一样。'},
 {id:'lit-32',category:'自然',author:'泰戈尔',work:'飞鸟集',era:'外国文学',cn:'生如夏花之绚烂，死如秋叶之静美。',en:'Let life be beautiful like summer flowers, and death like autumn leaves.',tag:'夏花秋叶',explanation:'活着时热烈地开，离开时安静地落。把两头都想明白了，中间的日子反而更从容。'},
 {id:'lit-33',category:'治愈',author:'泰戈尔',work:'飞鸟集',era:'外国文学',cn:'世界以痛吻我，要我报之以歌。',en:'The world has kissed my soul with its pain, asking for its return in songs.',tag:'报之以歌',explanation:'疼痛难免，但回应方式可以选择。把伤口唱成歌的人，不是不痛，是不肯让痛定义自己。'},
 {id:'lit-34',category:'成长',author:'泰戈尔',work:'飞鸟集',era:'外国文学',cn:'天空中没有翅膀的痕迹，而我已飞过。',en:'I leave no trace of wings in the air, but I am glad I have had my flight.',tag:'飞过',explanation:'不是所有努力都会留下痕迹，但每一次飞过都算数。认可自己经历过的，才能安心往前飞。'},
 {id:'lit-35',category:'成长',author:'村上春树',work:'海边的卡夫卡',era:'外国文学',cn:'当你从暴风雨中走出来时，你已不再是原来那个人。',en:'When you come out of the storm, you will not be the same person who walked in.',tag:'穿过暴风雨',explanation:'苦难不值得感谢，但穿越它的人值得。走过暴风雨，你会带着新的自己继续走。'},
 {id:'lit-36',category:'旅行',author:'普鲁斯特',work:'追忆似水年华',era:'外国文学',cn:'真正的发现之旅，不在于寻找新的风景，而在于拥有新的眼睛。',en:'The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.',tag:'新的眼睛',explanation:'换不了地方时，换一种看的方式。很多风景一直都在，缺的只是一双重新出发的眼睛。'},
 {id:'lit-37',category:'哲思',author:'维克多·雨果',work:'悲惨世界',era:'外国文学',cn:'世界上最宽阔的是海洋，比海洋更宽阔的是天空，比天空更宽阔的是人的心灵。',en:'Wider than the ocean is the sky, and wider than the sky is the human heart.',tag:'心的辽阔',explanation:'人的心可以装下委屈，也可以装下远方。别让它被一件小事锁死，它天生比天空还宽。'},
 {id:'lit-38',category:'希望',author:'王尔德',work:'温德米尔夫人的扇子',era:'外国文学',cn:'我们都生活在阴沟里，但仍有人仰望星空。',en:'We are all in the gutter, but some of us are looking at the stars.',tag:'仰望星空',explanation:'处境可以狼狈，目光却不必低头。仰不仰望星空，决定阴沟里的人是否还是自己。'},
 {id:'lit-39',category:'阅读',author:'卡夫卡',work:'致奥斯卡·波拉克的信',era:'外国文学',cn:'书必须是凿破我们心中冰封海洋的斧头。',en:'A book must be the axe that breaks the frozen sea within us.',tag:'破冰之斧',explanation:'好书不负责安慰，负责唤醒。心里有片海冻住了，就去书里找那把斧头。'},
 {id:'lit-40',category:'阅读',author:'博尔赫斯',work:'关于天赐的诗',era:'外国文学',cn:'我一直暗暗设想，天堂应该是图书馆的模样。',en:'I have always imagined that Paradise will be a kind of library.',tag:'天堂图书馆',explanation:'天堂未必有，但图书馆一定有。进门那一刻，所有时代的最好的人都愿意陪你坐一会儿。'},
 {id:'lit-41',category:'自然',author:'川端康成',work:'花未眠',era:'外国文学',cn:'凌晨四点醒来，发现海棠花未眠。',en:'Waking at four in the morning, I found the crab-apple blossoms still awake.',tag:'花未眠',explanation:'美常常在不经意的时刻撞见你。留一点不睡的心和一双肯看的眼睛，世界会回赠惊喜。'},
 {id:'lit-42',category:'时光',author:'加西亚·马尔克斯',work:'百年孤独',era:'外国文学',cn:'过去都是假的，回忆是一条没有归途的路。',en:'The past is unreal; memory is a road with no return.',tag:'无归途',explanation:'回忆没有回程票，念旧不等于回头。把过去读成序章，把现在写成正文。'},
 {id:'lit-43',category:'禅意',author:'苏轼',work:'定风波',era:'宋',cn:'竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。',en:'Bamboo staff and straw sandals lighter than a horse — who is afraid? In a straw cloak let the misty rain fall the whole life long.',tag:'烟雨任平生',explanation:'风雨躲不掉，那就笑着走完。装备越简单，人心越自由，一生烟雨也不过是一件蓑衣的事。'},
 {id:'lit-44',category:'禅意',author:'王维',work:'终南别业',era:'唐',cn:'行到水穷处，坐看云起时。',en:'Walk to where the stream ends, then sit and watch the clouds rise.',tag:'坐看云起',explanation:'路走到尽头不是绝境，是可以坐下来的地方。换个姿势，穷处自会升起云来。'},
 {id:'lit-45',category:'希望',author:'李白',work:'行路难',era:'唐',cn:'长风破浪会有时，直挂云帆济沧海。',en:'A time will come to ride the wind and cleave the waves; then I shall hoist my cloud-like sail and cross the boundless sea.',tag:'云帆沧海',explanation:'眼下的困顿不是终审判决。信「会有时」，是所有远行者的第一件行李。'},
 {id:'lit-46',category:'爱情',author:'李清照',work:'一剪梅',era:'宋',cn:'此情无计可消除，才下眉头，却上心头。',en:'This longing admits no cure: it leaves the brow only to settle upon the heart.',tag:'才下眉头',explanation:'想念的狡猾在于赶不走：从眉间赶走，它就住进心里。承认它，比驱赶它轻松。'},
 {id:'lit-47',category:'爱情',author:'辛弃疾',work:'青玉案·元夕',era:'宋',cn:'众里寻他千百度，蓦然回首，那人却在，灯火阑珊处。',en:'A thousand times I searched the crowd; then turning back by chance, I found her where the lantern light was dim.',tag:'灯火阑珊',explanation:'找了一千次的人，常在你不找的时候出现。别慌，灯还亮着，人也还在。'},
 {id:'lit-48',category:'生活',author:'陶渊明',work:'饮酒·其五',era:'东晋',cn:'采菊东篱下，悠然见南山。',en:'Picking chrysanthemums by the eastern hedge, unhurried, I catch sight of the southern hills.',tag:'悠然',explanation:'悠然不是懒，是不被催促地过日子。手里做一件小事，抬头有山可看，就很好。'},
 {id:'lit-49',category:'时光',author:'纳兰性德',work:'木兰花令',era:'清',cn:'人生若只如初见，何事秋风悲画扇。',en:'If life could always be as at first meeting, why would the autumn wind grieve over the painted fan?',tag:'如初见',explanation:'初见之所以动人，是因为一切还没被辜负。既然回不去，就把眼前的日子认真过成第二次初见。'},
 {id:'lit-50',category:'友谊',author:'王勃',work:'送杜少府之任蜀州',era:'唐',cn:'海内存知己，天涯若比邻。',en:'If you have a friend who knows your heart, the ends of the earth are but a neighborhood.',tag:'天涯比邻',explanation:'真朋友不怕远。距离量出的是公里数，量不出心贴着心。'},
 {id:'lit-51',category:'梦想',author:'杜甫',work:'望岳',era:'唐',cn:'会当凌绝顶，一览众山小。',en:'One day I shall climb to the very summit, and see all mountains small beneath me.',tag:'凌绝顶',explanation:'把「会当」放在心里，眼前的坡就不显得陡。登顶的人都是先在山下认过山顶的人。'},
 {id:'lit-52',category:'夜晚',author:'张若虚',work:'春江花月夜',era:'唐',cn:'人生代代无穷已，江月年年望相似。',en:'Life passes from generation to generation without end; the river moon looks much the same year after year.',tag:'江月年年',explanation:'月亮照过古人，也照着今晚的你。想到这份绵长，孤单的夜也变得辽阔起来。'},
 {id:'lit-53',category:'爱情',author:'木心',work:'云雀叫了一整天',era:'当代',cn:'从前的日色变得慢，车，马，邮件都慢，一生只够爱一个人。',en:'In the old days the sun moved slower: carts, horses and letters were slow, and one lifetime was only enough to love one person.',tag:'从前慢',explanation:'慢不是落后，是专注。一生只够爱一个人的时代，连等待都是深情的形状。'},
 {id:'lit-54',category:'成长',author:'木心',work:'素履之往',era:'当代',cn:'所谓无底深渊，下去，也是前程万里。',en:'What they call a bottomless abyss — go down into it, and it is ten thousand miles of road ahead.',tag:'深渊与前程',explanation:'跌落谷底的人，脚下每一步都是往上走的开始。深渊和前路，有时是同一条路。'},
 {id:'lit-55',category:'希望',author:'顾城',work:'一代人',era:'当代',cn:'黑夜给了我黑色的眼睛，我却用它寻找光明。',en:'The dark night gave me black eyes, yet I use them to look for light.',tag:'寻找光明',explanation:'环境给的不由你选，怎么用它由你定。把黑夜当作看清星光的背景，而不是终点。'},
 {id:'lit-56',category:'时光',author:'沈从文',work:'边城',era:'现代',cn:'这个人也许永远不回来了，也许「明天」回来！',en:'Perhaps he will never come back; perhaps he will come back "tomorrow"!',tag:'等待',explanation:'等待是人生里最磨人也最柔软的部分。留一点「也许明天」在心上，日子就有了盼头。'},
 {id:'lit-57',category:'哲思',author:'老舍',work:'骆驼祥子',era:'现代',cn:'雨下给富人，也下给穷人；下给义人，也下给不义的人。其实，雨并不公道，因为下落在一个没有公道的世界上。',en:'Rain falls on the rich and the poor, on the just and the unjust; yet rain is not fair, for it falls on an unfair world.',tag:'雨不公道',explanation:'承认世界不公道，不是让你认输，而是让你别把所有苦都怪到自己头上。放过自己，才能继续走。'},
 {id:'lit-58',category:'生活',author:'朱光潜',work:'谈美',era:'现代',cn:'慢慢走，欣赏啊！',en:'Walk slowly, and appreciate!',tag:'慢慢欣赏',explanation:'人生不是赶路，是看风景。这句话原是阿尔卑斯山谷里的路牌，也是生活最短的路书。'},
 {id:'lit-59',category:'希望',author:'林徽因',work:'你是人间的四月天',era:'现代',cn:'你是爱，是暖，是希望，你是人间的四月天。',en:'You are love, you are warmth, you are hope; you are the April of this world.',tag:'人间四月天',explanation:'有人愿意把你比作四月，这本身就是被深深爱着的证据。你也可以做别人的四月天。'},
 {id:'lit-60',category:'爱情',author:'王小波',work:'爱你就像爱生命',era:'当代',cn:'我把我整个灵魂都给你，连同它的怪癖，耍小脾气，忽明忽暗，一千八百种坏毛病。',en:'I give you my whole soul, quirks and all: the moods, the sulks, the shadows and glows, all eighteen hundred bad habits.',tag:'整个灵魂',explanation:'真正的交付不是展示最好的一面，是连同缺点一起交出去，并相信对方会接住。'},
 {id:'lit-61',category:'亲情',author:'龙应台',work:'孩子你慢慢来',era:'当代',cn:'我愿意等上一辈子的时间，让他从从容容地把这个蝴蝶结扎好。',en:'I am willing to wait a lifetime for him to tie that bow, unhurried, with his own two hands.',tag:'愿意等',explanation:'爱有时候就是克制住帮忙的手。给别人从容的时间，是最温柔的一种尊重。'},
 {id:'lit-62',category:'成长',author:'傅雷',work:'傅雷家书',era:'当代',cn:'成就的大小高低，是不在我们掌握之内的，一半靠人力，一半靠天赋，但只要坚强，就不怕失败。',en:'The size of achievement is not ours to command — half by effort, half by gift — but with resilience, failure holds no fear.',tag:'不怕失败',explanation:'结果由天，努力由我。把能握住的握紧，握不住的坦然，人就不容易被失败击垮。'},
 {id:'lit-63',category:'孤独',author:'加西亚·马尔克斯',work:'百年孤独',era:'外国文学',cn:'生命中曾经有过的所有灿烂，终究都需要用寂寞来偿还。',en:'All the brilliance life once held must, in the end, be paid back in solitude.',tag:'灿烂与寂寞',explanation:'热闹与安静是交替出现的潮汐。懂得与寂寞相处的人，才配得上下一次灿烂。'},
 {id:'lit-64',category:'成长',author:'圣埃克苏佩里',work:'小王子',era:'外国文学',cn:'所有的大人都曾经是小孩，虽然，只有少数的人记得。',en:'All grown-ups were once children — though only a few of them remember it.',tag:'曾经是小孩',explanation:'长大不是弄丢童年，是替当年的自己好好活着。偶尔蹲下来看看世界，你会记起很多答案。'},
 {id:'lit-65',category:'勇气',author:'尼采',work:'偶像的黄昏',era:'外国文学',cn:'那些杀不死我的，使我更强大。',en:'What does not kill me makes me stronger.',tag:'更强大',explanation:'经历过还站着的部分，都长成了骨头。回不去的难关，最终都成了你的承重墙。'},
 {id:'lit-66',category:'梦想',author:'毛姆',work:'月亮与六便士',era:'外国文学',cn:'我必须画画，就像溺水的人必须挣扎。',en:'I must paint, just as a drowning man must struggle.',tag:'必须',explanation:'真正热爱的事，不是「想做」，是「不做不行」。找到那件你溺水般要做的事，就找到了命。'},
 {id:'lit-67',category:'成长',author:'里尔克',work:'给青年诗人的信',era:'外国文学',cn:'试着去爱问题本身，带着问题去生活。或许在遥远的某一天，你会在不知不觉中，活出答案。',en:'Love the questions themselves; live along with them. Perhaps one far-off day you will live your way into the answer.',tag:'带着问题生活',explanation:'不是所有问题都要立刻解决。有些答案不是想出来的，是活出来的。'},
 {id:'lit-68',category:'勇气',author:'维克多·弗兰克尔',work:'活出生命的意义',era:'外国文学',cn:'人所拥有的任何东西都可以被剥夺，唯独在任何境遇中选择自己态度的自由，不能被剥夺。',en:'Everything can be taken from a person but one thing: the freedom to choose one\'s attitude in any circumstance.',tag:'态度的自由',explanation:'境遇不由人，态度由人。这是谁也拿不走的最后自由，也是一个人真正的立足之处。'},
 {id:'lit-69',category:'哲思',author:'东野圭吾',work:'解忧杂货店',era:'外国文学',cn:'其实所有纠结做选择的人，心里早就有了答案，咨询只是想得到内心所倾向的支持。',en:'Those agonizing over a choice already know the answer; they ask only for support for what their heart leans toward.',tag:'心中早有答案',explanation:'下次纠结时，试着抛硬币——硬币在空中的那一秒，你心里希望它落在哪面，答案就是哪面。'},
 {id:'lit-70',category:'时光',author:'苏轼',work:'水调歌头',era:'宋',cn:'人有悲欢离合，月有阴晴圆缺，此事古难全。',en:'People know sorrow and joy, parting and reunion; the moon waxes and wanes — never has it been otherwise.',tag:'古难全',explanation:'缺憾不是人生的故障，是它的常态。接受「难全」，反而能安心享受眼前这一轮圆月。'},
 {id:'lit-71',category:'勇气',author:'李白',work:'将进酒',era:'唐',cn:'天生我材必有用，千金散尽还复来。',en:'Heaven made me for a purpose; though gold be scattered, it will return.',tag:'必有用',explanation:'低谷时最该记住这句：你的存在本身就有用。钱财、机会散了会回来，气馁了才是真的输。'},
 {id:'lit-72',category:'爱情',author:'佚名',work:'诗经·邶风·击鼓',era:'先秦',cn:'死生契阔，与子成说。执子之手，与子偕老。',en:'In life and death, however parted, I made this vow with you: to hold your hand, and grow old together.',tag:'执子之手',explanation:'两千多年前的承诺，到今天依然是最重的情话。爱到最后，就是平平淡淡的手牵手。'},
 {id:'lit-73',category:'亲情',author:'孟郊',work:'游子吟',era:'唐',cn:'谁言寸草心，报得三春晖。',en:'Who says the heart of an inch-long grass can ever repay the sunshine of three spring months?',tag:'三春晖',explanation:'父母的爱算不清账，也不用还清。常回家、常报平安，就是小草对春天最好的回答。'},
 {id:'lit-74',category:'亲情',author:'张九龄',work:'望月怀远',era:'唐',cn:'海上生明月，天涯共此时。',en:'The bright moon rises over the sea; far apart, we share this very moment.',tag:'天涯共此时',explanation:'想念够不着的时候，就抬头看月亮。同一个月亮底下，你们其实一直在一起。'},
 {id:'lit-75',category:'爱情',author:'李商隐',work:'无题',era:'唐',cn:'身无彩凤双飞翼，心有灵犀一点通。',en:'Our bodies lack the phoenix\'s paired wings, yet our hearts beat as one.',tag:'心有灵犀',explanation:'最好的默契不用翅膀飞过去，一个眼神就通了。遇到能懂你的人，别撒手。'},
 {id:'lit-76',category:'友谊',author:'白居易',work:'问刘十九',era:'唐',cn:'晚来天欲雪，能饮一杯无？',en:'Evening comes and snow is near — will you share a cup of wine with me?',tag:'能饮一杯无',explanation:'邀请不用隆重。一句「来喝一杯」，天冷时就是最暖的诚意。有空就去，别辜负。'},
 {id:'lit-77',category:'生活',author:'刘禹锡',work:'秋词',era:'唐',cn:'自古逢秋悲寂寥，我言秋日胜春朝。',en:'Since ancient times autumn has been mourned as bleak; I say an autumn day outshines spring at its height.',tag:'秋日胜春朝',explanation:'季节没有好坏，眼光才有。别人悲秋时你看见晴空，这就是你对待生活的态度。'},
 {id:'lit-78',category:'时光',author:'晏殊',work:'浣溪沙',era:'宋',cn:'无可奈何花落去，似曾相识燕归来。',en:'Helplessly the flowers fall; swallows return, as if we had met before.',tag:'燕归来',explanation:'留不住的随它去，该回来的会回来。时间拿走的和还回来的，常常一样多。'},
 {id:'lit-79',category:'希望',author:'龚自珍',work:'己亥杂诗',era:'清',cn:'落红不是无情物，化作春泥更护花。',en:'Fallen petals are not without feeling; turned to spring soil, they guard the next bloom.',tag:'化作春泥',explanation:'结束不是消失，是换一种方式滋养。你放下的每一段过往，都在悄悄喂养接下来的日子。'},
 {id:'lit-80',category:'勇气',author:'郑板桥',work:'竹石',era:'清',cn:'千磨万击还坚劲，任尔东西南北风。',en:'Through a thousand grindings and blows the bamboo stays strong, letting the winds blow from every quarter.',tag:'还坚劲',explanation:'被生活反复捶打还站得直的人，像竹子一样，根早就深深咬住岩石了。'},
 {id:'lit-81',category:'亲情',author:'史铁生',work:'秋天的怀念',era:'当代',cn:'咱娘儿俩在一块儿，好好儿活，好好儿活……',en:'The two of us together, mother and son — we will live well, live well...',tag:'好好儿活',explanation:'最朴素的一句话，是一个重病的母亲拼尽全力的愿望。好好活着，就是对爱最深情的回应。'},
 {id:'lit-82',category:'亲情',author:'杨绛',work:'我们仨',era:'当代',cn:'我们这个家，很朴素；我们三个人，很单纯。我们与世无求，与人无争，只求相聚在一起，相守在一起。',en:'Our family was simple: three people, plain and pure. We asked nothing of the world, contended with no one, and wished only to be together.',tag:'相守',explanation:'家的最高配置从来不是房子多大，而是三个人（或几个人）愿意一直聚在同一盏灯下。'},
 {id:'lit-83',category:'生活',author:'汪曾祺',work:'冬天',era:'当代',cn:'家人闲坐，灯火可亲。',en:'Family sitting idly together, the lamplight warm and near.',tag:'灯火可亲',explanation:'八个字写尽人间幸福：不需要做什么大事，灯亮着，人齐着，冬天就暖了。'},
 {id:'lit-84',category:'爱情',author:'朱生豪',work:'朱生豪情书',era:'现代',cn:'醒来觉得甚是爱你。',en:'Waking this morning, I found I loved you dearly.',tag:'甚是爱你',explanation:'情话的天花板往往最短。醒来第一件事是爱你——这比所有长篇大论都诚实。'},
 {id:'lit-85',category:'生活',author:'沈复',work:'浮生六记',era:'清',cn:'布衣饭菜，可乐终身。',en:'In cotton clothes and simple rice, one may find joy for a whole lifetime.',tag:'布衣饭菜',explanation:'把日子过好的能力，和花钱多少无关。粗茶淡饭里自得其乐，是一种了不起的本事。'},
 {id:'lit-86',category:'希望',author:'鲁迅',work:'热风·随感录四十一',era:'现代',cn:'有一分热，发一分光，就令萤火一般，也可以在黑暗里发一点光，不必等候炬火。',en:'Give what heat you have, shed what light you can: even a firefly glows in the dark — no need to wait for a torch.',tag:'萤火',explanation:'别等强大了再开始发光。萤火虽小，黑夜里的意义一点不比火炬少。'},
 {id:'lit-87',category:'时光',author:'朱自清',work:'匆匆',era:'现代',cn:'我们的日子为什么一去不复返呢？',en:'Why do our days never return once they are gone?',tag:'匆匆',explanation:'正因为不复返，每一天才值得被认真对待。这个问题没有答案，但提问本身就是珍惜的开始。'},
 {id:'lit-88',category:'成长',author:'冰心',work:'繁星·春水',era:'现代',cn:'成功的花，人们只惊羡她现时的明艳！然而当初她的芽儿，浸透了奋斗的泪泉，洒遍了牺牲的血雨。',en:'The flower of success amazes with its bloom! Yet its bud was once steeped in the spring of struggle and the rain of sacrifice.',tag:'芽与花',explanation:'别只看别人的明艳时刻。每一朵开好的花，都淋过你不知道的雨。'},
 {id:'lit-89',category:'时光',author:'徐志摩',work:'偶然',era:'现代',cn:'你我相逢在黑夜的海上，你有你的，我有我的，方向。',en:'You and I met on a night sea; you have your course, and I have mine.',tag:'交会时互放的光亮',explanation:'有些相遇注定只是交汇。记住交会时那点光亮，然后各自奔赴，也是一种圆满。'},
 {id:'lit-90',category:'治愈',author:'戴望舒',work:'雨巷',era:'现代',cn:'撑着油纸伞，独自彷徨在悠长、悠长又寂寥的雨巷。',en:'Alone with an oil-paper umbrella, wandering down a long, long, lonely lane in the rain.',tag:'雨巷',explanation:'寂寥也可以是一种美学。允许自己在雨巷里走一段，不出声，不赶路，情绪自己会找到出口。'},
 {id:'lit-91',category:'哲思',author:'艾青',work:'我爱这土地',era:'现代',cn:'为什么我的眼里常含泪水？因为我对这土地爱得深沉……',en:'Why are my eyes always brimming with tears? Because I love this land so deeply...',tag:'爱得深沉',explanation:'眼泪不总是软弱，有时它只是深爱的证据。对人、对土地、对生活，都是如此。'},
 {id:'lit-92',category:'勇气',author:'汪国真',work:'热爱生命',era:'当代',cn:'既然选择了远方，便只顾风雨兼程。',en:'Since I have chosen the distant road, I care only to press on through wind and rain.',tag:'风雨兼程',explanation:'选定方向后，最省力的活法就是不再回头看有没有捷径。风雨也是路程的一部分。'},
 {id:'lit-93',category:'成长',author:'赫尔曼·黑塞',work:'德米安',era:'外国文学',cn:'鸟要挣脱出壳。蛋就是世界。人要诞生于世，就得摧毁这个世界。',en:'The bird fights its way out of the egg. The egg is the world. Whoever would be born must destroy a world.',tag:'破壳',explanation:'成长总伴随着对旧自我的告别，甚至对旧世界的推翻。破壳时的疼，是新生的证明。'},
 {id:'lit-94',category:'勇气',author:'加缪',work:'西西弗神话',era:'外国文学',cn:'登上顶峰的斗争本身，足以充实人的心灵。应当想象西西弗是幸福的。',en:'The struggle itself toward the heights is enough to fill a heart. One must imagine Sisyphus happy.',tag:'幸福地推石',explanation:'意义不在山顶，而在推石头的过程里。能把重复的日子过出滋味的人，就是幸福的西西弗。'},
 {id:'lit-95',category:'孤独',author:'村上春树',work:'挪威的森林',era:'外国文学',cn:'每个人都有属于自己的一片森林，迷失的人迷失了，相逢的人会再相逢。',en:'Everyone has a forest of their own; some lose their way in it, and those meant to meet will meet again.',tag:'一片森林',explanation:'不必为走散的人追悔，也不必为独处的时光惶恐。森林里，该相逢的总能再相逢。'},
 {id:'lit-96',category:'哲思',author:'蒙田',work:'随笔集',era:'外国文学',cn:'世界上最伟大的事，是一个人懂得如何做自己的主人。',en:'The greatest thing in the world is to know how to belong to oneself.',tag:'做自己的主人',explanation:'不被情绪牵着走、不被别人的目光推着走，这份自主权，值得用一生去练。'},
 {id:'lit-97',category:'夜晚',author:'李煜',work:'虞美人',era:'南唐',cn:'问君能有几多愁？恰似一江春水向东流。',en:'How much sorrow can one bear? As much as a river of spring water flowing east.',tag:'一江春水',explanation:'愁绪拦不住，就让它像江水一样流。会流动的悲伤，总有一天会流到海里去。'},
 {id:'lit-98',category:'爱情',author:'元稹',work:'离思',era:'唐',cn:'曾经沧海难为水，除却巫山不是云。',en:'Having seen the vast sea, no other water compares; but the clouds of Wu Mountain, no cloud equals.',tag:'曾经沧海',explanation:'见过最好的人之后，目光就再也降不下来了。这不是固执，是心里有了刻度。'},
 {id:'lit-99',category:'时光',author:'崔护',work:'题都城南庄',era:'唐',cn:'人面不知何处去，桃花依旧笑春风。',en:'The face I knew is nowhere to be found; the peach blossoms still smile in the spring breeze.',tag:'桃花依旧',explanation:'物是人非是时间的常态。感伤之余，桃花还开着——生活也还在继续给你新的春天。'},
 {id:'lit-100',category:'友谊',author:'王昌龄',work:'芙蓉楼送辛渐',era:'唐',cn:'洛阳亲友如相问，一片冰心在玉壶。',en:'If friends in Luoyang ask of me, tell them: my heart remains a crystal piece in a jade cup.',tag:'冰心玉壶',explanation:'最让亲友安心的问候，不是混得怎么样，而是心意依然干净。守好自己，就是报平安。'},
 {id:'lit-101',category:'勇气',author:'高适',work:'别董大',era:'唐',cn:'莫愁前路无知己，天下谁人不识君。',en:'Grieve not that the road ahead has no friends who know you; who under heaven does not know your name?',tag:'天下识君',explanation:'送别时的这句宽慰，也是给所有出发者的话：带着本事和真心走，到哪里都会被认出来。'},
 {id:'lit-102',category:'生活',author:'苏轼',work:'浣溪沙',era:'宋',cn:'人间有味是清欢。',en:'The finest flavor in this world is simple, quiet joy.',tag:'清欢',explanation:'山珍海味吃多会腻，清淡的欢愉最长久。一盏茶、一段闲、一场小雨，都是清欢。'},
 {id:'lit-103',category:'自然',author:'辛弃疾',work:'贺新郎',era:'宋',cn:'我见青山多妩媚，料青山见我应如是。',en:'I find the green hills so full of charm; I imagine they see me the same way.',tag:'看山看己',explanation:'你看世界的方式，就是世界回应你的方式。心里有妩媚，看山山也温柔。'},
 {id:'lit-104',category:'希望',author:'陆游',work:'卜算子·咏梅',era:'宋',cn:'零落成泥碾作尘，只有香如故。',en:'Fallen and ground to dust, the plum blossom keeps its fragrance still.',tag:'香如故',explanation:'境遇可以把人碾进泥里，但碾不掉一个人的气味与风骨。守住它，春天自会认出你。'},
 {id:'lit-105',category:'时光',author:'李清照',work:'武陵春',era:'宋',cn:'物是人非事事休，欲语泪先流。',en:'Things remain, people are gone; all is over. Before words come, tears flow first.',tag:'物是人非',explanation:'有些难过说不出口，眼泪先替你说了。允许自己哭一场，是旧时光教会我们的温柔。'},
 {id:'lit-106',category:'孤独',author:'纳兰性德',work:'浣溪沙',era:'清',cn:'我是人间惆怅客，知君何事泪纵横。',en:'I am a melancholy guest of this world; I know why your tears fall.',tag:'惆怅客',explanation:'承认自己的惆怅，不丢人。懂得眼泪缘由的人，往往也是最懂别人的人。'},
 {id:'lit-107',category:'爱情',author:'柳永',work:'雨霖铃',era:'宋',cn:'此去经年，应是良辰好景虚设。',en:'After this parting, for years to come, all fine hours and fair scenes will be as nothing.',tag:'良辰虚设',explanation:'心上人不在，再好的风景都像没开灯。爱一个人的时候，陪伴本身就是意义。'},
 {id:'lit-108',category:'时光',author:'佚名',work:'古诗十九首',era:'汉',cn:'思君令人老，岁月忽已晚。',en:'Thinking of you ages me; the years have slipped suddenly late.',tag:'岁月忽晚',explanation:'想念会消耗时间，也会标记时间。被你一直想着的人，其实从未真正走远。'}
];

/* 名家书摘与原创语录共用同一座档案馆：加入总语录池，参与分类、搜索与收藏。 */
literaryQuotes.forEach(q=>{q.from=q.author+'《'+q.work+'》';});
quotes.push(...literaryQuotes);

(function renderLiterary(){
  const escLocal=(typeof esc==='function')?esc:(t=>String(t));
  const host=document.querySelector('#literaryList');
  if(!host) return;
  let eraFilter='';
  /* 朝代/年代筛选 chips */
  const eras=['',...new Set(literaryQuotes.map(q=>q.era))];
  const intro=document.querySelector('.literary-intro');
  if(intro&&!document.querySelector('#literaryEras')){
    const bar=document.createElement('div');
    bar.id='literaryEras';
    bar.className='literary-eras';
    bar.setAttribute('role','group');
    bar.setAttribute('aria-label','按年代筛选书摘');
    intro.after(bar);
  }
  function renderEras(){
    const bar=document.querySelector('#literaryEras');
    if(!bar) return;
    bar.innerHTML=eras.map(e=>`<button type="button" class="chip${e===eraFilter?' active':''}" data-era="${escLocal(e)}">${e||'全部'}<i>${e?literaryQuotes.filter(q=>q.era===e).length:literaryQuotes.length}</i></button>`).join('');
  }
  function renderCards(){
    const list=eraFilter?literaryQuotes.filter(q=>q.era===eraFilter):literaryQuotes;
    host.innerHTML=list.map((q,i)=>`<figure class="literary-card" data-quote-id="${escLocal(q.id)}" tabindex="0" role="button" aria-label="阅读书摘：${escLocal(q.cn)}">
    <span class="literary-no" aria-hidden="true">${String(i+1).padStart(2,'0')}</span>
    <span class="literary-era" aria-hidden="true">${escLocal(q.era)}</span>
    <blockquote>${escLocal(q.cn)}</blockquote>
    <p class="literary-en">${escLocal(q.en)}</p>
    <figcaption class="literary-cite"><b>${escLocal(q.author)}</b><span>《${escLocal(q.work)}》 · ${escLocal(q.category)} · ${escLocal(q.tag)}</span></figcaption>
    <span class="literary-side" aria-hidden="true">${escLocal(q.author)} · ${escLocal(q.work)}</span>
    <span class="literary-stamp" aria-hidden="true">拾</span>
  </figure>`).join('');
    if('IntersectionObserver' in window){
      const io=new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
          if(entry.isIntersecting){entry.target.classList.add('lit-in');io.unobserve(entry.target);}
        });
      },{rootMargin:'0px 0px -6% 0px',threshold:.08});
      host.querySelectorAll('.literary-card').forEach((c,i)=>{c.style.transitionDelay=(i%2)*0.06+'s';io.observe(c);});
    }else{
      host.querySelectorAll('.literary-card').forEach(c=>c.classList.add('lit-in'));
    }
  }
  if(!host.dataset.bound){
    host.dataset.bound='1';
    host.addEventListener('click',e=>{
      const card=e.target.closest('.literary-card');
      if(card&&typeof openQuote==='function') openQuote(card.dataset.quoteId);
    });
    host.addEventListener('keydown',e=>{
      if(e.key!=='Enter'&&e.key!==' ') return;
      const card=e.target.closest('.literary-card');
      if(card){e.preventDefault();if(typeof openQuote==='function') openQuote(card.dataset.quoteId);}
    });
    const bar=document.querySelector('#literaryEras');
    if(bar) bar.addEventListener('click',e=>{
      const chip=e.target.closest('.chip');
      if(!chip) return;
      eraFilter=chip.dataset.era||'';
      renderEras();renderCards();
    });
  }
  renderEras();renderCards();
})();

/* 全部新语录进入总池后，重建列表、精选、统计与今日页。 */
if(typeof renderQuotes==='function')renderQuotes();
if(typeof renderPicks==='function')renderPicks();
if(typeof renderStats==='function')renderStats();
if(typeof renderCategoryCounts==='function')renderCategoryCounts();
if(typeof renderMonthTheme==='function')renderMonthTheme();
if(typeof renderDaily==='function')renderDaily();
if(typeof observeReveal==='function')observeReveal();

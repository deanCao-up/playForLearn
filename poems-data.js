// ---------- 诗词数据管理模块 ----------

class Poem {
    constructor(options) {
        this.title = options.title || '';
        this.dynasty = options.dynasty || '';
        this.author = options.author || '';
        this.lines = options.lines || [];
        this.linesSplit = options.linesSplit || [];
        this.pinyin = options.pinyin || '';
        this.icon = options.icon || '';
        this.headLength = options.headLength || 0;
        this.tailLength = options.tailLength || 0;
    }
}

const poems = new Map();

poems.set('XiaoQingWa', new Poem({
    title: '小青蛙',
    dynasty: '现代',
    author: '儿歌',
    lines: [
        "河水清清天气晴，",
        "小小青蛙大眼睛。",
        "保护禾苗吃害虫，",
        "做了不少好事情。",
        "请你爱护小青蛙，",
        "好让禾苗不生病。"
    ],
    linesSplit: [
        "河水清清|天气晴",
        "小小青蛙|大眼睛",
        "保护禾苗|吃害虫",
        "做了不少|好事情",
        "请你爱护|小青蛙",
        "好让禾苗|不生病"
    ],
    pinyin: 'XiaoQingWa',
    icon: '🐸',
    headLength: 4,
    tailLength: 3
}));
poems.set('Hua', new Poem({
    title: '画',
    dynasty: '唐',
    author: '王维',
    lines: [
        "远看山有色，",
        "近听水无声。",
        "春去花还在，",
        "人来鸟不惊。"
    ],
    linesSplit: [
        "远看|山有色",
        "近听|水无声",
        "春去|花还在",
        "人来|鸟不惊"
    ],
    pinyin: 'Hua',
    icon: '🖼️',
    headLength: 2,
    tailLength: 3
}));
poems.set('YongE', new Poem({
    title: '咏鹅',
    dynasty: '唐',
    author: '骆宾王',
    lines: [
        "鹅，鹅，鹅，",
        "曲项向天歌。",
        "白毛浮绿水，",
        "红掌拨清波。"
    ],
    linesSplit: [
        "鹅|鹅|鹅|",
        "曲项|向天歌",
        "白毛|浮绿水|",
        "红掌|拨清波"
    ],
    pinyin: 'YongE',
    icon: '🦢',
    headLength: 2,
    tailLength: 3
}));
poems.set('MinNong', new Poem({
    title: '悯农',
    dynasty: '唐',
    author: '李绅',
    lines: [
        "锄禾日当午，",
        "汗滴禾下土。",
        "谁知盘中餐，",
        "粒粒皆辛苦。"
    ],
    linesSplit: [
        "锄禾|日当午",
        "汗滴|禾下土",
        "谁知|盘中餐",
        "粒粒|皆辛苦"
    ],
    pinyin: 'MinNong',
    icon: '🧑‍🌾',
    headLength: 2,
    tailLength: 3
}));
poems.set('江南', new Poem({
    title: '江南',
    dynasty: '汉',
    author: '汉乐府',
    lines: [
        "江南可采莲，",
        "莲叶何田田。",
        "鱼戏莲叶间。",
        "鱼戏莲叶东，",
        "鱼戏莲叶西，",
        "鱼戏莲叶南，",
        "鱼戏莲叶北。"
    ],
    linesSplit: [
        "江南|可采莲",
        "莲叶|何田田",
        "鱼戏|莲叶间",
        "鱼戏|莲叶东",
        "鱼戏|莲叶西",
        "鱼戏|莲叶南",
        "鱼戏|莲叶北"
    ],
    pinyin: '江南',
    icon: '🪷',
    headLength: 2,
    tailLength: 3
}));
poems.set('对韵歌', new Poem({
    title: '对韵歌',
    dynasty: '',
    author: '',
    lines: [
        "云对雨，雪对风。",
        "花对树，鸟对虫。",
        "山清对水秀，",
        "柳绿对桃红。"
    ],
    linesSplit: [
        "云对雨|雪对风",
        "花对树|鸟对虫",
        "山清|对水秀",
        "柳绿|对桃红"
    ],
    pinyin: '对韵歌',
    icon: '☘',
    headLength: 2,
    tailLength: 3
}));
poems.set('升国旗', new Poem({
    title: '升国旗',
    dynasty: '',
    author: '',
    lines: [
        "五星红旗，我们的国旗。",
        "国歌声中，徐徐升起。",
        "迎风飘扬，多么美丽。",
        "向着国旗，我们立正。",
        "望着国旗，我们敬礼。"
    ],
    linesSplit: [
        "五星红旗|我们的国旗",
        "国歌声中|徐徐升起",
        "迎风飘扬|多么美丽",
        "向着国旗|我们立正",
        "望着国旗|我们敬礼"
    ],
    pinyin: '升国旗',
    icon: '⭐',
    headLength: 2,
    tailLength: 3
}));
poems.set('古朗月行', new Poem({
    title: '古朗月行',
    dynasty: '唐',
    author: '李白',
    lines: [
        "小时不识月，",
        "呼作白玉盘。",
        "又疑瑶台镜，",
        "飞在青云端。"
    ],
    linesSplit: [
        "小时|不识月",
        "呼作|白玉盘",
        "又疑|瑶台镜",
        "飞在|青云端"
    ],
    pinyin: '古朗月行',
    icon: '🌕️',
    headLength: 2,
    tailLength: 3
}));
poems.set('小小的船', new Poem({
    title: '小小的船',
    dynasty: '现代',
    author: '叶圣陶',
    lines: [
        "弯弯的月儿小小的船，",
        "小小的船儿两头尖。",
        "我在小小的船里坐，",
        "只看见闪闪的星星蓝蓝的天。"
    ],
    linesSplit: [
        "弯弯的月儿|小小的船",
        "小小的船儿|两头尖",
        "我在小小的|船里坐",
        "只看见闪闪的|星星蓝蓝的天"
    ],
    pinyin: '小小的船',
    icon: '⛵',
    headLength: 0,
    tailLength: 0
}));
poems.set('两件宝', new Poem({
    title: '两件宝',
    dynasty: '现代',
    author: '陶行知',
    lines: [
        "人有两件宝，",
        "双手和大脑。",
        "双手会做工，",
        "大脑会思考。",
        "用手不用脑，",
        "事情做不好。",
        "用脑不用手，",
        "啥也办不到。",
        "用手又用脑，",
        "才能有创造。"
    ],
    linesSplit: [
        "人有|两件宝",
        "双手|和大脑",
        "双手|会做工",
        "大脑|会思考",
        "用手|不用脑",
        "事情|做不好",
        "用脑|不用手",
        "啥也|办不到",
        "用手|又用脑",
        "才能|有创造"
    ],
    pinyin: '两件宝',
    icon: '🙌',
    headLength: 2,
    tailLength: 3
}));
poems.set('风', new Poem({
    title: '风',
    dynasty: '唐',
    author: '李峤',
    lines: [
        "解落三秋叶，",
        "能开二月花。",
        "过江千尺浪，",
        "入竹万竿斜。"
    ],
    linesSplit: [
        "解落|三秋叶",
        "能开|二月花",
        "过江|千尺浪",
        "入竹|万竿斜"
    ],
    pinyin: '风',
    icon: '🍁',
    headLength: 2,
    tailLength: 3
}));
poems.set('ChunXiao', new Poem({
    title: '春晓',
    dynasty: '唐',
    author: '孟浩然',
    lines: [
        "春眠不觉晓，",
        "处处闻啼鸟。",
        "夜来风雨声，",
        "花落知多少。"
    ],
    linesSplit: [
        "春眠|不觉晓",
        "处处|闻啼鸟",
        "夜来|风雨声",
        "花落|知多少"
    ],
    pinyin: 'ChunXiao',
    icon: '🌸',
    headLength: 2,
    tailLength: 3
}));
poems.set('XunYinZheBuYu', new Poem({
    title: '寻隐者不遇',
    dynasty: '唐',
    author: '贾岛',
    lines: [
        "松下问童子，",
        "言师采药去。",
        "只在此山中，",
        "云深不知处。"
    ],
    linesSplit: [
        "松下|问童子",
        "言师|采药去",
        "只在|此山中",
        "云深|不知处"
    ],
    pinyin: 'XunYinZheBuYu',
    icon: '🏔️',
    headLength: 2,
    tailLength: 3
}));
poems.set('ZengWangLun', new Poem({
    title: '赠汪伦',
    dynasty: '唐',
    author: '李白',
    lines: [
        "李白乘舟将欲行，",
        "忽闻岸上踏歌声。",
        "桃花潭水深千尺，",
        "不及汪伦送我情。"
    ],
    linesSplit: [
        "李白乘舟|将欲行",
        "忽闻岸上|踏歌声",
        "桃花潭水|深千尺",
        "不及汪伦|送我情"
    ],
    pinyin: 'ZengWangLun',
    icon: '🚣',
    headLength: 4,
    tailLength: 3
}));
poems.set('JingYeSi', new Poem({
    title: '静夜思',
    dynasty: '唐',
    author: '李白',
    lines: [
        "床前明月光，",
        "疑是地上霜。",
        "举头望明月，",
        "低头思故乡。"
    ],
    linesSplit: [
        "床前|明月光",
        "疑是|地上霜",
        "举头|望明月",
        "低头|思故乡"
    ],
    pinyin: 'JingYeSi',
    icon: '🌙',
    headLength: 2,
    tailLength: 3
}));
poems.set('GuDuiJin', new Poem({
    title: '古对今',
    dynasty: '',
    author: '',
    lines: [
        "古对今，圆对方。",
        "严寒对酷暑，",
        "春暖对秋凉。",
        "晨对暮，雪对霜。",
        "秋风对细雨，",
        "朝霞对夕阳。",
        "桃对李，柳对杨",
        "莺歌对燕舞，",
        "鸟语对花香。"
    ],
    linesSplit: [
        "古对今|圆对方",
        "严寒|对酷暑",
        "春暖|对秋凉",
        "晨对暮|雪对霜",
        "秋风|对细雨",
        "朝霞|对夕阳",
        "桃对李|柳对杨",
        "莺歌|对燕舞",
        "鸟语|对花香"
    ],
    pinyin: 'GuDuiJin',
    icon: '📜',
    headLength: 2,
    tailLength: 3
}));
poems.set('RenZhiChu', new Poem({
    title: '人之初',
    dynasty: '',
    author: '',
    lines: [
        "人之初，性本善。",
        "性相近，习相远。",
        "苟不教，性乃迁。",
        "教之道，贵以专。",
        "子不学，非所宜。",
        "幼不学，老何为？",
        "玉不琢，不成器。",
        "人不学，不知义。"
    ],
    linesSplit: [
        "人之初|性本善",
        "性相近|习相远",
        "苟不教|性乃迁",
        "教之道|贵以专",
        "子不学|非所宜",
        "幼不学|老何为",
        "玉不琢|不成器",
        "人不学|不知义"
    ],
    pinyin: 'RenZhiChu',
    icon: '📚',
    headLength: 1,
    tailLength: 2
}));
poems.set('ChiShang', new Poem({
    title: '池上',
    dynasty: '唐',
    author: '白居易',
    lines: [
        "小娃撑小艇，",
        "偷采白莲回。",
        "不解藏踪迹，",
        "浮萍一道开。"
    ],
    linesSplit: [
        "小娃|撑小艇",
        "偷采|白莲回",
        "不解|藏踪迹",
        "浮萍|一道开"
    ],
    pinyin: 'ChiShang',
    icon: '🛶',
    headLength: 2,
    tailLength: 3
}));
poems.set('XiaoChi', new Poem({
    title: '小池',
    dynasty: '宋',
    author: '杨万里',
    lines: [
        "泉眼无声惜细流，",
        "树阴照水爱晴柔。",
        "小荷才露尖尖角，",
        "早有蜻蜓立上头。"
    ],
    linesSplit: [
        "泉眼无声|惜细流",
        "树阴照水|爱晴柔",
        "小荷才露|尖尖角",
        "早有蜻蜓|立上头"
    ],
    pinyin: 'XiaoChi',
    icon: '🌊',
    headLength: 4,
    tailLength: 3
}));
poems.set('HuaJi', new Poem({
    title: '画鸡',
    dynasty: '明',
    author: '唐寅',
    lines: [
        "头上红冠不用裁，",
        "满身雪白走将来。",
        "平生不敢轻言语，",
        "一叫千门万户开。"
    ],
    linesSplit: [
        "头上红冠|不用裁",
        "满身雪白|走将来",
        "平生不敢|轻言语",
        "一叫千门|万户开"
    ],
    pinyin: 'HuaJi',
    icon: '🐓',
    headLength: 4,
    tailLength: 3
}));

let currentPoemKey = '';


const getList = async () => {
    const res = await fetch('https://api.bilibili.com/x/space/arc/search?mid=12890453&ps=30&tid=0&pn=2&keyword=&order=pubdate&order_avoided=true&jsonp=jsonp')
    const d = await res.json()
    return d
}
getList().then(res => {
    if (res.data.list.vlist && res.data.list.vlist.length) {
        console.log(res.data.list.vlist)
    }
})



function downFlie(jsonObj) {
    // 创建a标签
    var elementA = document.createElement('a');

    //文件的名称为时间戳加文件名后缀
    elementA.download = +new Date() + ".json";
    elementA.style.display = 'none';

    //生成一个blob二进制数据，内容为json数据
    var blob = new Blob([JSON.stringify(jsonObj)]);

    //生成一个指向blob的URL地址，并赋值给a标签的href属性
    elementA.href = URL.createObjectURL(blob);
    document.body.appendChild(elementA);
    elementA.click();
    document.body.removeChild(elementA);
}
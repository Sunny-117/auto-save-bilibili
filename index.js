
const getList = async () => {
    const res = await fetch('https://api.bilibili.com/x/space/arc/search?mid=12890453&ps=30&tid=0&pn=2&keyword=&order=pubdate&order_avoided=true&jsonp=jsonp')
    const d = await res.json()
    console.log(d)
    return d
}
const e = getList()
console.log(e)


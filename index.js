import fetch from 'node-fetch'

let pn = 1
const getList = async () => {
    const data = await fetch('https://api.bilibili.com/x/space/arc/search?mid=12890453&ps=30&tid=0&pn=2&keyword=&order=pubdate&order_avoided=true&jsonp=jsonp')
    const res = await data.json()
    console.log(res)
}
getList()
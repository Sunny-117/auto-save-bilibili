
const getList = async () => {
    const res = await fetch('https://api.bilibili.com/x/space/arc/search?mid=12890453&ps=30&tid=0&pn=2&keyword=&order=pubdate&order_avoided=true&jsonp=jsonp')
    const { data } = await res.json()
    return data
}
const { list } = getList()
console.log(list)


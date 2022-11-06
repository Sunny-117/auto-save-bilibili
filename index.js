

const getList = async (pn) => {
    const res = await fetch(`https://api.bilibili.com/x/space/arc/search?mid=12890453&ps=30&tid=0&pn=${pn}&keyword=&order=pubdate&order_avoided=true&jsonp=jsonp`)
    const d = await res.json()
    return d
}
const arr = []
const saveArrList = async (pn) => {
    const res = await getList(pn)
    if (res.data.list.vlist && res.data.list.vlist.length) {
        res.data.list.vlist.forEach(ele => {
            arr.push(ele.title)
        })
    }
}
const final = async () => {
    let pn = 1;
    while (pn <= 10) {
        await saveArrList(pn)
        pn++
    }
    console.log(arr)
    const a = JSON.stringify(arr)
    console.log(a)
}

final()


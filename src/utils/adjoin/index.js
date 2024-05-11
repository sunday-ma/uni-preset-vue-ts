class Graph {
  constructor(vertices) {
    this.vertices = vertices // 顶点
    this.adj = [] // 领接表
    this.init()
  }

  init() {
    for (let i = 0; i < this.vertices.length; i++)
      this.adj[i] = []
  }

  setAdj(vertex, sides) {
    const pIndex = this.vertices.indexOf(vertex)
    const set = new Set(this.adj[pIndex].concat(sides))
    set.delete(vertex)
    this.adj[pIndex] = Array.from(set)
  }

  showAdjoin() {
    console.log(this.adj)
  }

  setCompact(params) {
    let resIndex = 0
    const result = []

    if (params == null)
      return result

    for (const value of params) {
      if (value)
        result[resIndex++] = value
    }
    return result
  }

  // 交集
  getUnions(params) {
    const res = []
    params = this.setCompact(params)
    this.adj.forEach((rows, index) => {
      if (
        params.every((id) => {
          return rows.includes(id)
        })
      )
        res.push(this.vertices[index])
    })
    return res
  }

  getCollection(params) {
    const res = []
    this.adj.forEach((rows, index) => {
      if (
        params.some((id) => {
          return rows.includes(id)
        })
      )
        res.push(this.vertices[index])
    })
    return res
  }
}

class ShopAdjoin extends Graph {
  constructor(commoditySpecs, data) {
    const vertices = commoditySpecs.reduce(
      (total, current) => [...total, ...current.list],
      [],
    )
    super(vertices)
    this.commoditySpecs = commoditySpecs
    this.data = data
    // 单规格矩阵
    this.initCommodity()
    // 同类顶点创建
    this.initSimilar()
  }

  initCommodity() {
    this.data.forEach((item) => {
      this.applyCommodity(item.specs)
    })
  }

  applyCommodity(params) {
    params.forEach((param) => {
      this.setAdj(param, params)
    })
  }

  initSimilar() {
    // 获取所有可选项
    const specsOption = this.getCollection(this.vertices)
    this.commoditySpecs.forEach((item) => {
      const params = []
      item.list.forEach((value) => {
        if (specsOption.includes(value))
          params.push(value)

        this.applyCommodity(params)
      })
    })
  }

  querySpecsOptions(params) {
    // 判断是否存在可选选项
    if (params.some(Boolean))
      params = this.getUnions(params)
      // 初始状态所有选项可选
    else
      params = this.getCollection(this.vertices)

    return params
  }
}

export default ShopAdjoin

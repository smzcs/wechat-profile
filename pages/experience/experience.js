const experience = [
  {
    year: 1987,
    text: '出生',
    place: '四川 · 巴中'
  },
  {
    year: 2011,
    text: '大学毕业 - 四川理工学院',
    place: '四川 · 自贡'
  },
  {
    year: 2011,
    text: '第一份工作 - Infosys',
    place: '上海'
  },
  {
    year: 2014,
    text: '加入IBM',
    place: '深圳'
  },
  {
    year: 2016,
    text: '加入TCS(TATA)',
    place: '深圳'
  },
  {
    year: 2017,
    text: '加入Bleum',
    place: '成都'
  },
  {
    year: 2018,
    text: '...',
    place: '成都'
  }
]
Page({
  data: {
    name: 'Courthasl',
    leftData: experience.filter((e, idx) => idx % 2 === 0),
    rightData: experience.filter((e, idx) => idx % 2 === 1)
  }
})

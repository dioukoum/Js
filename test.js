let dataset=[8,17,15,18,16,16,12,15,14,16]
let w=400
let h= 100

d3.select('body')
    .selectAll('div')
    .data(dataset)
    .enter()
    .append('div')
    .attr('class','box')
    .style('height', d=>(d*10+'px'))
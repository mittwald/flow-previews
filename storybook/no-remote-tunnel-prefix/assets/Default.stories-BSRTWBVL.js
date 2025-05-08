import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as n,C as i,a,X as o,Y as d,b as y,c}from"./ChartLegend-Cu5VCpTc.js";import"./index-F2Fta7eo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Legend-BmHUJoVA.js";import"./Text-C0wqZrY5.js";import"./PropsContextProvider-CLv7rqut.js";import"./mergeRefs-12BfVTtv.js";import"./clsx-B-dksMZM.js";import"./index-GHXRqlzO.js";import"./index-FKzx4Va7.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-DovK0xj5.js";import"./Text-AN1gvCNp.js";import"./utils-D0arg4qg.js";import"./Popover.module-BJC3BRN9.js";import"./OverlayArrow-ULot_6Ir.js";import"./Heading-D5cTkcFG.js";import"./Heading-AP9WPpJD.js";import"./RSPContexts-DhZDYkwS.js";const A=[{name:"Stat 1",firstKey:4e3,secondKey:2400,thirdKey:2400},{name:"Stat 2",firstKey:3e3,secondKey:1398,thirdKey:2210},{name:"Stat 3",firstKey:2e3,secondKey:9800,thirdKey:2290},{name:"Stat 4",firstKey:2780,secondKey:3908,thirdKey:2e3},{name:"Stat 5",firstKey:1890,secondKey:4800,thirdKey:2181},{name:"Stat 6",firstKey:2390,secondKey:3800,thirdKey:2500},{name:"Stat 7",firstKey:3490,secondKey:4300,thirdKey:2100}],F={title:"Data Visualisation/AreaChart",component:n,parameters:{controls:{exclude:["className"]}},args:{data:A},argTypes:{}},r={render:t=>e.jsxs(n,{...t,height:"70vh",children:[e.jsx(i,{}),e.jsx(a,{dataKey:"firstKey"}),e.jsx(a,{dataKey:"secondKey",color:"palatinate-blue"}),e.jsx(a,{dataKey:"thirdKey",color:"tangerine"}),e.jsx(o,{dataKey:"name"}),e.jsx(d,{interval:"equidistantPreserveStart"}),e.jsx(y,{}),e.jsx(c,{})]})},s={render:t=>e.jsxs(e.Fragment,{children:[e.jsxs(n,{...t,height:"250px",syncId:"syncedAreaCharts",children:[e.jsx(i,{}),e.jsx(a,{dataKey:"firstKey"}),e.jsx(a,{dataKey:"secondKey",color:"palatinate-blue"}),e.jsx(a,{dataKey:"thirdKey",color:"tangerine"}),e.jsx(o,{dataKey:"name"}),e.jsx(d,{}),e.jsx(y,{}),e.jsx(c,{})]}),e.jsxs(n,{...t,height:"250px",syncId:"syncedAreaCharts",children:[e.jsx(i,{}),e.jsx(a,{dataKey:"firstKey",color:"magenta"}),e.jsx(a,{dataKey:"secondKey",color:"tropical-indigo"}),e.jsx(a,{dataKey:"thirdKey",color:"malachite"}),e.jsx(o,{dataKey:"name"}),e.jsx(d,{}),e.jsx(y,{}),e.jsx(c,{})]})]})};var K,p,h;r.parameters={...r.parameters,docs:{...(K=r.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: props => <AreaChart {...props} height="70vh">
      <CartesianGrid />
      <Area dataKey="firstKey" />
      <Area dataKey="secondKey" color="palatinate-blue" />
      <Area dataKey="thirdKey" color="tangerine" />
      <XAxis dataKey="name" />
      <YAxis interval="equidistantPreserveStart" />
      <ChartTooltip />
      <ChartLegend />
    </AreaChart>
}`,...(h=(p=r.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var m,l,x;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: props => <>
      <AreaChart {...props} height="250px" syncId="syncedAreaCharts">
        <CartesianGrid />
        <Area dataKey="firstKey" />
        <Area dataKey="secondKey" color="palatinate-blue" />
        <Area dataKey="thirdKey" color="tangerine" />
        <XAxis dataKey="name" />
        <YAxis />
        <ChartTooltip />
        <ChartLegend />
      </AreaChart>
      <AreaChart {...props} height="250px" syncId="syncedAreaCharts">
        <CartesianGrid />
        <Area dataKey="firstKey" color="magenta" />
        <Area dataKey="secondKey" color="tropical-indigo" />
        <Area dataKey="thirdKey" color="malachite" />
        <XAxis dataKey="name" />
        <YAxis />
        <ChartTooltip />
        <ChartLegend />
      </AreaChart>
    </>
}`,...(x=(l=s.parameters)==null?void 0:l.docs)==null?void 0:x.source}}};const N=["Default","MultipleSynced"];export{r as Default,s as MultipleSynced,N as __namedExportsOrder,F as default};

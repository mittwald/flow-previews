import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as n,C as i,a,X as o,Y as d,b as y,c}from"./ChartLegend-B0uvzosK.js";import"./index-CXcpQZ5J.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Legend-BUVts2Qr.js";import"./Text-Dr5MNJ9m.js";import"./flowComponent-CxhHHjOl.js";import"./index-_FZDHFZo.js";import"./index-DJQWtO6Q.js";import"./index-sbGzhXso.js";import"./clsx-B-dksMZM.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-BPJW4PHD.js";import"./Wrap-DQq6jo70.js";import"./Text-BUuVncJZ.js";import"./utils-D_n-6U4k.js";import"./Popover.module-BJC3BRN9.js";import"./OverlayArrow-CB6H_PzN.js";import"./Heading-JTZ2bzsA.js";import"./Heading-ChI_1Pt6.js";import"./RSPContexts-C2SW_8A9.js";const A=[{name:"Stat 1",firstKey:4e3,secondKey:2400,thirdKey:2400},{name:"Stat 2",firstKey:3e3,secondKey:1398,thirdKey:2210},{name:"Stat 3",firstKey:2e3,secondKey:9800,thirdKey:2290},{name:"Stat 4",firstKey:2780,secondKey:3908,thirdKey:2e3},{name:"Stat 5",firstKey:1890,secondKey:4800,thirdKey:2181},{name:"Stat 6",firstKey:2390,secondKey:3800,thirdKey:2500},{name:"Stat 7",firstKey:3490,secondKey:4300,thirdKey:2100}],N={title:"Data Visualisation/AreaChart",component:n,parameters:{controls:{exclude:["className"]}},args:{data:A},argTypes:{}},r={render:t=>e.jsxs(n,{...t,height:"70vh",children:[e.jsx(i,{}),e.jsx(a,{dataKey:"firstKey"}),e.jsx(a,{dataKey:"secondKey",color:"palatinate-blue"}),e.jsx(a,{dataKey:"thirdKey",color:"tangerine"}),e.jsx(o,{dataKey:"name"}),e.jsx(d,{interval:"equidistantPreserveStart"}),e.jsx(y,{}),e.jsx(c,{})]})},s={render:t=>e.jsxs(e.Fragment,{children:[e.jsxs(n,{...t,height:"250px",syncId:"syncedAreaCharts",children:[e.jsx(i,{}),e.jsx(a,{dataKey:"firstKey"}),e.jsx(a,{dataKey:"secondKey",color:"palatinate-blue"}),e.jsx(a,{dataKey:"thirdKey",color:"tangerine"}),e.jsx(o,{dataKey:"name"}),e.jsx(d,{}),e.jsx(y,{}),e.jsx(c,{})]}),e.jsxs(n,{...t,height:"250px",syncId:"syncedAreaCharts",children:[e.jsx(i,{}),e.jsx(a,{dataKey:"firstKey",color:"magenta"}),e.jsx(a,{dataKey:"secondKey",color:"tropical-indigo"}),e.jsx(a,{dataKey:"thirdKey",color:"malachite"}),e.jsx(o,{dataKey:"name"}),e.jsx(d,{}),e.jsx(y,{}),e.jsx(c,{})]})]})};var K,p,m;r.parameters={...r.parameters,docs:{...(K=r.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var h,l,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(x=(l=s.parameters)==null?void 0:l.docs)==null?void 0:x.source}}};const O=["Default","MultipleSynced"];export{r as Default,s as MultipleSynced,O as __namedExportsOrder,N as default};

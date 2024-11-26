import{R as e}from"./index-B-o1Wr-g.js";import{c as q}from"./clsx-B-dksMZM.js";import{P as j}from"./PropsContextProvider-DWb7RnwM.js";import{$ as R}from"./useLocalizedStringFormatter-BQr1rA-c.js";import{a as U,b as F}from"./ProgressBar-C7LzY9et.js";import{L as i}from"./Label-BtWZg8ae.js";const I="flow--progress-bar",k="flow--progress-bar--label",A="flow--progress-bar--value",G="flow--progress-bar--bar",H="flow--progress-bar--fill",J="flow--progress-bar--info",K="flow--progress-bar--success",Q="flow--progress-bar--danger",X="flow--progress-bar--warning",a={progressBar:I,label:k,value:A,bar:G,fill:H,"size-s":"flow--progress-bar--size-s",info:J,success:K,danger:Q,warning:X},Y={"de-DE":{"progressBar.of":"von"},"en-EN":{"progressBar.of":"of"}},c=r=>{const{children:B,className:z,status:M="info",showMaxValue:N,size:_="m",...L}=r,O=q(z,a.progressBar,a[`size-${_}`],a[M]),W=R(Y),T=U(r.formatOptions),m=N&&r.maxValue?T.format(r.maxValue):void 0,D={Label:{className:a.label,unstyled:!0}};return e.createElement(F,{className:O,...L},({percentage:C,valueText:u})=>e.createElement(j,{props:D},B,e.createElement("span",{className:a.value},m?`${u} ${W.format("progressBar.of")} ${m}`:u),e.createElement("div",{className:a.bar},e.createElement("div",{className:a.fill,style:{width:C+"%"}}))))};c.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{status:{required:!1,tsType:{name:"T"},description:""},showMaxValue:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:'"s" | "m"',elements:[{name:"literal",value:'"s"'},{name:"literal",value:'"m"'}]},description:'@default "m"'}},composes:["PropsWithChildren"]};const Z={title:"Status/ProgressBar",component:c,args:{showMaxValue:!1,size:"m",status:"info"},argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]},size:{control:"inline-radio",options:["s","m"]}},render:r=>e.createElement(c,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...r},e.createElement(i,null,"Storage"))},s={},o={render:r=>e.createElement(c,{value:50,...r},e.createElement(i,null,"Storage"))},t={args:{showMaxValue:!0},render:r=>e.createElement(c,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"decimal"},...r},e.createElement(i,null,"Storage"))},n={args:{showMaxValue:!0}},l={args:{size:"s"}};var p,f,d;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(d=(f=s.parameters)==null?void 0:f.docs)==null?void 0:d.source}}};var g,b,w;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: props => <ProgressBar value={50} {...props}>
      <Label>Storage</Label>
    </ProgressBar>
}`,...(w=(b=o.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var x,h,V;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    showMaxValue: true
  },
  render: props => <ProgressBar value={500} maxValue={1000} minValue={0} formatOptions={{
    style: "decimal"
  }} {...props}>
      <Label>Storage</Label>
    </ProgressBar>
}`,...(V=(h=t.parameters)==null?void 0:h.docs)==null?void 0:V.source}}};var v,P,S;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    showMaxValue: true
  }
}`,...(S=(P=n.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var y,E,$;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: "s"
  }
}`,...($=(E=l.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};const ee=["Default","WithPercentage","WithoutUnit","WithMaxValue","Small"],le=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Small:l,WithMaxValue:n,WithPercentage:o,WithoutUnit:t,__namedExportsOrder:ee,default:Z},Symbol.toStringTag,{value:"Module"}));export{le as D,c as P,Z as m};

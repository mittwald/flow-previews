import{R as e}from"./index-Cs7sjTYM.js";import{c as D}from"./clsx-B-dksMZM.js";import{P as q}from"./PropsContextProvider-DXo7lD_U.js";import{a as j,b as R}from"./ProgressBar-K2upHjuk.js";import{L as i}from"./Label-C5nBjuTr.js";const U="flow--progress-bar",I="flow--progress-bar--label",k="flow--progress-bar--value",A="flow--progress-bar--bar",F="flow--progress-bar--fill",G="flow--progress-bar--info",H="flow--progress-bar--success",J="flow--progress-bar--danger",K="flow--progress-bar--warning",a={progressBar:U,label:I,value:k,bar:A,fill:F,"size-s":"flow--progress-bar--size-s",info:G,success:H,danger:J,warning:K},c=r=>{const{children:B,className:M,status:_="info",showMaxValue:$,size:N="m",...L}=r,O=D(M,a.progressBar,a[`size-${N}`],a[_]),W=j(r.formatOptions),m=$&&r.maxValue?W.format(r.maxValue):void 0,T={Label:{className:a.label,unstyled:!0}};return e.createElement(R,{className:O,...L},({percentage:C,valueText:u})=>e.createElement(q,{props:T},B,e.createElement("span",{className:a.value},m?`${u} of ${m}`:u),e.createElement("div",{className:a.bar},e.createElement("div",{className:a.fill,style:{width:C+"%"}}))))};c.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{status:{required:!1,tsType:{name:"T"},description:""},showMaxValue:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:'"s" | "m"',elements:[{name:"literal",value:'"s"'},{name:"literal",value:'"m"'}]},description:'@default "m"'}},composes:["PropsWithChildren"]};const Q={title:"Status/ProgressBar",component:c,args:{showMaxValue:!1,size:"m",status:"info"},argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]},size:{control:"inline-radio",options:["s","m"]}},render:r=>e.createElement(c,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...r},e.createElement(i,null,"Storage"))},s={},o={render:r=>e.createElement(c,{value:50,...r},e.createElement(i,null,"Storage"))},t={args:{showMaxValue:!0},render:r=>e.createElement(c,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"decimal"},...r},e.createElement(i,null,"Storage"))},n={args:{showMaxValue:!0}},l={args:{size:"s"}};var p,d,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(g=(d=s.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var f,b,w;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(S=(P=n.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var y,E,z;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: "s"
  }
}`,...(z=(E=l.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};const X=["Default","WithPercentage","WithoutUnit","WithMaxValue","Small"],se=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Small:l,WithMaxValue:n,WithPercentage:o,WithoutUnit:t,__namedExportsOrder:X,default:Q},Symbol.toStringTag,{value:"Module"}));export{se as D,c as P,Q as m};

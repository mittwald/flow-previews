import{j as e}from"./jsx-runtime-CLpGMVip.js";import"./index-Cf9XvIV_.js";import{c as E}from"./clsx-B-dksMZM.js";import{P as q}from"./PropsContextProvider-CWFvCxZj.js";import{$ as U}from"./useLocalizedStringFormatter-Dq-FGM-G.js";import{a as F,b as I}from"./ProgressBar-Bu1Xugb0.js";import{L as i}from"./Label-wJy7v2v_.js";const R="flow--src--progress-bar",k="flow--src--progress-bar--label",A="flow--src--progress-bar--value",G="flow--src--progress-bar--bar",H="flow--src--progress-bar--fill",J="flow--src--progress-bar--info",K="flow--src--progress-bar--success",Q="flow--src--progress-bar--danger",X="flow--src--progress-bar--warning",s={progressBar:R,label:k,value:A,bar:G,fill:H,"size-s":"flow--src--progress-bar--size-s",info:J,success:K,danger:Q,warning:X},Y={"de-DE":{"progressBar.of":"von"},"en-EN":{"progressBar.of":"of"}},c=r=>{const{children:B,className:z,status:M="info",showMaxValue:N,size:W="m",..._}=r,L=E(z,s.progressBar,s[`size-${W}`],s[M]),O=U(Y),D=F(r.formatOptions),m=N&&r.maxValue?D.format(r.maxValue):void 0,T={Label:{className:s.label,unstyled:!0}};return e.jsx(I,{className:L,..._,children:({percentage:C,valueText:p})=>e.jsxs(q,{props:T,children:[B,e.jsx("span",{className:s.value,children:m?`${p} ${O.format("progressBar.of")} ${m}`:p}),e.jsx("div",{className:s.bar,children:e.jsx("div",{className:s.fill,style:{width:C+"%"}})})]})})};c.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"ProgressBar",props:{showMaxValue:{required:!1,tsType:{name:"boolean"},description:"Whether the max value should be displayed."},size:{required:!1,tsType:{name:"union",raw:'"s" | "m"',elements:[{name:"literal",value:'"s"'},{name:"literal",value:'"m"'}]},description:'The size variant of the progress bar @default "m"'}},composes:["PropsWithChildren","PropsWithStatus"]};const Z={title:"Status/ProgressBar",component:c,args:{showMaxValue:!1,size:"m",status:"info"},argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]},size:{control:"inline-radio",options:["s","m"]}},render:r=>e.jsx(c,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...r,children:e.jsx(i,{children:"Storage"})})},a={},o={render:r=>e.jsx(c,{value:50,...r,children:e.jsx(i,{children:"Storage"})})},t={args:{showMaxValue:!0},render:r=>e.jsx(c,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"decimal"},...r,children:e.jsx(i,{children:"Storage"})})},n={args:{showMaxValue:!0}},l={args:{size:"s"}};var u,d,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(f=(d=a.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};var g,b,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: props => <ProgressBar value={50} {...props}>
      <Label>Storage</Label>
    </ProgressBar>
}`,...(x=(b=o.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var h,w,V;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    showMaxValue: true
  },
  render: props => <ProgressBar value={500} maxValue={1000} minValue={0} formatOptions={{
    style: "decimal"
  }} {...props}>
      <Label>Storage</Label>
    </ProgressBar>
}`,...(V=(w=t.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};var v,P,S;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    showMaxValue: true
  }
}`,...(S=(P=n.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var j,y,$;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    size: "s"
  }
}`,...($=(y=l.parameters)==null?void 0:y.docs)==null?void 0:$.source}}};const ee=["Default","WithPercentage","WithoutUnit","WithMaxValue","Small"],ce=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Small:l,WithMaxValue:n,WithPercentage:o,WithoutUnit:t,__namedExportsOrder:ee,default:Z},Symbol.toStringTag,{value:"Module"}));export{ce as D,c as P,Z as m};

import{R as r}from"./index-BwDkhjyp.js";import{c as f}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-BosuxZz1.js";const v="flow--skeleton",x="flow--skeleton--shimmer",y={skeleton:v,shimmer:x},s=e=>{const{className:g,...h}=e,S=f(y.skeleton,g);return r.createElement("div",{className:S,"aria-hidden":!0,...h})};s.__docgenInfo={description:"",methods:[],displayName:"Skeleton",composes:["ComponentProps"]};const b={title:"Content/Skeleton",component:s,render:e=>r.createElement(s,{...e}),parameters:{controls:{exclude:["className"]}}},o={},t={render:e=>r.createElement("div",{style:{background:"var(--color--hosting-blue--1000)",padding:"var(--size-px--m)"}},r.createElement(s,{...e}))},n={render:e=>r.createElement(s,{...e,style:{height:"200px"}})};var a,c,m;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var l,p,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: props => <div style={{
    background: "var(--color--hosting-blue--1000)",
    padding: "var(--size-px--m)"
  }}>
      <Skeleton {...props} />
    </div>
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var i,u,k;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: props => <Skeleton {...props} style={{
    height: "200px"
  }} />
}`,...(k=(u=n.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};const z=["Default","OnDarkBackground","WithCustomSize"];export{o as Default,t as OnDarkBackground,n as WithCustomSize,z as __namedExportsOrder,b as default};

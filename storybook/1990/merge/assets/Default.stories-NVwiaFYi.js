import{j as r}from"./iframe-D_4x6qMj.js";import{S as n}from"./Slider-B28uv8IG.js";import{L as m}from"./Label-DYejL5eD.js";import"./PropsContextProvider-CALK_gXH.js";import"./mergeRefs-D11WPw_n.js";import"./index-D_JTLils.js";import"./clsx-B-dksMZM.js";import"./Button-CEOuDC8N.js";import"./IconWarning-Dzi10vRl.js";import"./Text-CweuBtPf.js";import"./browser-CZBg7HNp.js";import"./EmulatedBoldText-B9kAgGNC.js";import"./Text-Cu7PdI7W.js";import"./utils-xe5YSam6.js";import"./LoadingSpinner-YiUTGVQG.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-BlYhncvt.js";import"./context-DM98rbVc.js";import"./Button-CpmoBq4h.js";import"./ProgressBar-CJC6Hhu1.js";import"./Label-CCRaVzEI.js";import"./Hidden-B0gkrfj6.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CiC867Ap.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C9nt0YbM.js";import"./useFocus-Drnb5e9K.js";import"./useFocusRing-TvNskxef.js";import"./useFocusable-B8Ri4aea.js";import"./useControlledState-CYhMOmxg.js";import"./useFormReset-Bck6lqok.js";import"./VisuallyHidden-tZR9lL9G.js";const tr={title:"Form Controls/Slider",component:n,render:e=>r.jsx(n,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(n,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},s={args:{isDisabled:!0}},i={render:e=>r.jsx(n,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,l,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,u,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var S,h,x;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: props => <Slider {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} minValue={20} maxValue={2000} defaultValue={200} step={20}>
      <Label>Storage</Label>
    </Slider>
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var b,f,j;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(j=(f=s.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var y,O,V;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: props => <Slider {...props} showInitialMarker>
      <Label>Amount</Label>
    </Slider>
}`,...(V=(O=i.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};const or=["Default","ReadOnly","WithUnit","Disabled","WithInitialMarker"];export{t as Default,s as Disabled,o as ReadOnly,i as WithInitialMarker,a as WithUnit,or as __namedExportsOrder,tr as default};

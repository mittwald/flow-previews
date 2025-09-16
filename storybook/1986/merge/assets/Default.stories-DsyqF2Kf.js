import{j as r}from"./iframe-d9P-aV0W.js";import{S as n}from"./Slider-FMv382Mr.js";import{L as m}from"./Label-Bkj4txtc.js";import"./PropsContextProvider-COJEgxrC.js";import"./mergeRefs-COfeY-J9.js";import"./index-DNfeWXBl.js";import"./clsx-B-dksMZM.js";import"./Button-B1lQe4CG.js";import"./IconWarning-BjZlRYlZ.js";import"./Text-Be7zee3C.js";import"./browser-7zjo9sS-.js";import"./EmulatedBoldText-DaFZXsc7.js";import"./Text-D1KGOeak.js";import"./utils-D3Cd9kCb.js";import"./LoadingSpinner-BMYPjKuf.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-BD0NOEPb.js";import"./context-3d2O_dpD.js";import"./Button-DwY3a-D1.js";import"./ProgressBar-Sdd768YE.js";import"./Label-Dkt1SH7U.js";import"./Hidden-ATL9oYS4.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DJC774kJ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CdPHlHdZ.js";import"./useFocus-Db-Axcue.js";import"./useFocusRing-CufwTJs4.js";import"./useFocusable-CU14CpV2.js";import"./useControlledState-CiRgye4r.js";import"./useFormReset-BRhy_R9s.js";import"./VisuallyHidden-D6ugaIjO.js";const tr={title:"Form Controls/Slider",component:n,render:e=>r.jsx(n,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(n,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},s={args:{isDisabled:!0}},i={render:e=>r.jsx(n,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,l,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,u,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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

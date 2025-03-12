import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-CtQTiInQ.js";import{S as s}from"./Slider-BagwAGxR.js";import{L as m}from"./Label-CBa-q4Ey.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./flowComponent-CBvh9Ys5.js";import"./index-DTllGi7h.js";import"./index-Cdp0xV4M.js";import"./index-DN6_Rp6A.js";import"./clsx-B-dksMZM.js";import"./Button-BqcoygzQ.js";import"./IconApp-CyjwVzxS.js";import"./IconWarning-DF9UG10K.js";import"./Wrap-DQq6jo70.js";import"./Text-78TaYxdh.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-D1jUzRoU.js";import"./Text-DfUCrkqY.js";import"./utils-pqn3Medm.js";import"./LoadingSpinner-DgFhq5z2.js";import"./useLocalizedStringFormatter-ONfbUjw-.js";import"./Button-CponIIJZ.js";import"./ProgressBar-SARi2bur.js";import"./Label-BuTtJRrE.js";import"./Hidden-Dd0lSYNZ.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-D55R0JPp.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-mPwC5UWg.js";import"./useFocus-Csiud3ul.js";import"./useFocusRing-Dj3VKvGJ.js";import"./useFocusable-D_uDDaTh.js";import"./useControlledState-BKUqB07S.js";import"./useFormReset-Bj6qxEZP.js";import"./VisuallyHidden-BArB4NIa.js";const tr={title:"Form Controls/Slider",component:s,render:e=>r.jsx(s,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={render:e=>r.jsx(s,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},i={args:{isDisabled:!0}},a={render:e=>r.jsx(s,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,n,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: props => <Slider {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} minValue={20} maxValue={2000} defaultValue={200} step={20}>
      <Label>Storage</Label>
    </Slider>
}`,...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var g,h,x;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(x=(h=i.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var S,b,f;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: props => <Slider {...props} showInitialMarker>
      <Label>Amount</Label>
    </Slider>
}`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const or=["Default","WithUnit","Disabled","WithInitialMarker"];export{t as Default,i as Disabled,a as WithInitialMarker,o as WithUnit,or as __namedExportsOrder,tr as default};

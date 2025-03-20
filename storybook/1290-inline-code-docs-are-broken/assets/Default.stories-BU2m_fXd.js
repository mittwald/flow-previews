import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-BZISi7jw.js";import{S as s}from"./Slider-Dsk_xKW6.js";import{L as m}from"./Label-Awo8DmgK.js";import"./_commonjsHelpers-CqkleIqs.js";import"./flowComponent-BQKp_5Ng.js";import"./index-BBXbSWyk.js";import"./index-C0qn59OO.js";import"./index-Dfd2pZHs.js";import"./clsx-B-dksMZM.js";import"./Button-wBfRci_n.js";import"./IconApp-DZf0STiH.js";import"./IconWarning-BqX4qer7.js";import"./Wrap-DQq6jo70.js";import"./Text-BPAvSiAh.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-BfYT5ZHF.js";import"./Text-CxIdO6ok.js";import"./utils-BAtcVSHo.js";import"./LoadingSpinner-_BP_ZOWb.js";import"./useLocalizedStringFormatter-CZn_2Om1.js";import"./Button-DAivm4ks.js";import"./ProgressBar-B6tGqqoL.js";import"./Label--FbMCZJS.js";import"./Hidden-kqRI_mPI.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Bh1EGhcd.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-ChNHSMR7.js";import"./useFocus-B7LXpZ-i.js";import"./useFocusRing-CYqHz5Aw.js";import"./useFocusable-XxrpiuTs.js";import"./useControlledState-4nfZ-XMX.js";import"./useFormReset-4n_yD9ws.js";import"./VisuallyHidden-CfzjMNmM.js";const tr={title:"Form Controls/Slider",component:s,render:e=>r.jsx(s,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={render:e=>r.jsx(s,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},i={args:{isDisabled:!0}},a={render:e=>r.jsx(s,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,n,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

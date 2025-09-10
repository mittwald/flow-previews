import{j as r}from"./iframe-B8noCUnE.js";import{S as n}from"./Slider-C-NnzjXa.js";import{L as m}from"./Label-B1NlPlCA.js";import"./PropsContextProvider-B9__2qg6.js";import"./mergeRefs-BTOy5cDw.js";import"./index-D9cNYuBB.js";import"./clsx-B-dksMZM.js";import"./Button-B3YMBdra.js";import"./IconWarning-CGV_Yvrm.js";import"./Text-Da5wEoPX.js";import"./browser-91muAEwH.js";import"./EmulatedBoldText-DHCsJE01.js";import"./Text-C0NfSVbg.js";import"./utils-DycHSEAg.js";import"./LoadingSpinner-a5nWuss2.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-D4YUkL9v.js";import"./context-Co6CbP9u.js";import"./Button-CwMP1veT.js";import"./ProgressBar-7N6gfaNO.js";import"./Label-DKLhlgli.js";import"./Hidden-CMD8PFZZ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CluaPz9W.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CGDWDrJK.js";import"./useFocus-DSdjnAxu.js";import"./useFocusRing-BLe8ZvF0.js";import"./useFocusable-CKRftzjl.js";import"./useControlledState-Dup9xG7O.js";import"./useFormReset-BTHbcpmM.js";import"./VisuallyHidden-Dp1jIams.js";const tr={title:"Form Controls/Slider",component:n,render:e=>r.jsx(n,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(n,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},s={args:{isDisabled:!0}},i={render:e=>r.jsx(n,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,l,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,u,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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

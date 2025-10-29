import{j as r}from"./iframe-C9dYfgSf.js";import{S as m}from"./Slider-C1gTIY-c.js";import{L as p}from"./Label-huPJyomh.js";import"./index-nuYtCEEu.js";import"./flowComponent-Bze_r9FR.js";import"./index-CVihxOyi.js";import"./clsx-B-dksMZM.js";import"./index-DbMX5jmM.js";import"./Button-RNpKkVK8.js";import"./IconWarning-fVXPK3i1.js";import"./Text-DeJ4PaiG.js";import"./browser-CNYhznL3.js";import"./EmulatedBoldText-WKOr2IKU.js";import"./Text-CQ7Fwsu6.js";import"./utils-CO6LnGLR.js";import"./LoadingSpinner-DDIQ3dza.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DHpih7p2.js";import"./context-iM_q7ty8.js";import"./Button-CD1zJvoj.js";import"./ProgressBar-BM6quT-y.js";import"./Label-HJzRYjqm.js";import"./Hidden-C5ZQOCSQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DpM9fuaR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BlhdQGL7.js";import"./useFocus-xkgg1n29.js";import"./useFocusRing-29NBTIcT.js";import"./useFocusable-U5sjNWcc.js";import"./useMakeFocusable-JetFJK9R.js";import"./useFieldComponent-Br5YSvi-.js";import"./react-children-utilities-DAjt5CEG.js";import"./ClearPropsContext-oIIvwL5Y.js";import"./useControlledState-DlEEU1a1.js";import"./useFormReset-CCon2GTP.js";import"./VisuallyHidden-Ck6pQyeO.js";import"./Label.module-CUYTf9Jc.js";const P={title:"Form Controls/Slider",component:m,render:e=>r.jsx(m,{...e,children:r.jsx(p,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(m,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(p,{children:"Storage"})})},i={args:{isDisabled:!0}},s={render:e=>r.jsx(m,{...e,showInitialMarker:!0,children:r.jsx(p,{children:"Amount"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <Slider {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} minValue={20} maxValue={2000} defaultValue={200} step={20}>
      <Label>Storage</Label>
    </Slider>
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <Slider {...props} showInitialMarker>
      <Label>Amount</Label>
    </Slider>
}`,...s.parameters?.docs?.source}}};const Q=["Default","ReadOnly","WithUnit","Disabled","WithInitialMarker"];export{t as Default,i as Disabled,o as ReadOnly,s as WithInitialMarker,a as WithUnit,Q as __namedExportsOrder,P as default};

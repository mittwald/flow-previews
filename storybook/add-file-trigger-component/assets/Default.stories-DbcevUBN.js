import{R as r}from"./index-Cs7sjTYM.js";import{S as m}from"./Slider-ChvRiN7q.js";import{L as s}from"./Label-3TwhOvTI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-Bg40pdZw.js";import"./PropsContextProvider-DXo7lD_U.js";import"./index-j_f0pOtZ.js";import"./clsx-B-dksMZM.js";import"./index-Cf-03bMR.js";import"./Button-Bq7y9BIZ.js";import"./IconApp-CKfGrMYq.js";import"./IconWarning-DoqSRZU1.js";import"./Wrap-DQq6jo70.js";import"./Text-DZmFXo-e.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Text-DP1y2Dk0.js";import"./utils-GKDLJ2vO.js";import"./LoadingSpinner-9k8jsvZY.js";import"./useLocalizedStringFormatter-TZkCr3Qr.js";import"./Button-CB57Q0FS.js";import"./ProgressBar-CpzbYRLN.js";import"./Label-qcDNDzhS.js";import"./Hidden-C2kgQquV.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BA8WH6BO.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-BZB42ELj.js";import"./useFocusRing-Cx5sZpw_.js";import"./usePress-IYK5Xs6I.js";import"./useControlledState-B7K2eYzO.js";import"./useFormReset-BmVKDtZT.js";import"./VisuallyHidden-sPIK_yL0.js";const $={title:"Form Controls/Slider",component:m,render:e=>r.createElement(m,{...e},r.createElement(s,null,"Amount")),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}}},t={},a={render:e=>r.createElement(m,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20},r.createElement(s,null,"Storage"))},o={args:{isDisabled:!0}},i={render:e=>r.createElement(m,{...e,defaultValue:20,showInitialMarker:!0},r.createElement(s,null,"Amount"))};var n,p,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var u,c,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => <Slider {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} minValue={20} maxValue={2000} defaultValue={200} step={20}>
      <Label>Storage</Label>
    </Slider>
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var S,f,g;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var b,V,h;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: props => <Slider {...props} defaultValue={20} showInitialMarker>
      <Label>Amount</Label>
    </Slider>
}`,...(h=(V=i.parameters)==null?void 0:V.docs)==null?void 0:h.source}}};const rr=["Default","WithUnit","Disabled","WithInitialMarker"];export{t as Default,o as Disabled,i as WithInitialMarker,a as WithUnit,rr as __namedExportsOrder,$ as default};

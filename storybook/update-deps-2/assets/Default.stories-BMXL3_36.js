import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-CgfFrydU.js";import{S as s}from"./Slider-C4aiZVEV.js";import{L as m}from"./Label-BnZNwGkU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./PropsContextProvider-BLvIrsPJ.js";import"./mergeRefs-CQveTfyF.js";import"./clsx-B-dksMZM.js";import"./index-Brqd7pHr.js";import"./index-B2KKL2uI.js";import"./Button-HNIyHWur.js";import"./IconWarning-Dhqk9c5Q.js";import"./Text-DAta9oPQ.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-KnQ_Srvn.js";import"./Text-RYc5i20l.js";import"./utils-D9H5ZYVa.js";import"./LoadingSpinner-DV38nRyp.js";import"./useLocalizedStringFormatter-2OBKXYKe.js";import"./Button-C4BByqx5.js";import"./ProgressBar-BwjDzH8d.js";import"./Label-nK1nmjBx.js";import"./Hidden-DwT0szmK.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-CVdsQLKm.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress--lgM-7rV.js";import"./useFocus-Dz5Sgz6F.js";import"./useFocusRing-VURPolDQ.js";import"./useFocusable-B6XldfNl.js";import"./useControlledState-YIijONQK.js";import"./useFormReset-wPtuGCA4.js";import"./VisuallyHidden-CNMq674x.js";const rr={title:"Form Controls/Slider",component:s,render:e=>r.jsx(s,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={render:e=>r.jsx(s,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},i={args:{isDisabled:!0}},a={render:e=>r.jsx(s,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,n,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const er=["Default","WithUnit","Disabled","WithInitialMarker"];export{t as Default,i as Disabled,a as WithInitialMarker,o as WithUnit,er as __namedExportsOrder,rr as default};

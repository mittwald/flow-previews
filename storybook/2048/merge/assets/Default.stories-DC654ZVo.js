import{j as r}from"./iframe-BdvCKsbF.js";import{S as n}from"./Slider-COHKt5eF.js";import{L as m}from"./Label-669hhtQM.js";import"./index-Cun1SEai.js";import"./flowComponent-pHCscBgm.js";import"./index-CcTYzsK6.js";import"./clsx-B-dksMZM.js";import"./index-nNeao2-W.js";import"./Button-CEcdxUV1.js";import"./IconWarning-P52nLd_s.js";import"./Text-JqEaJ00k.js";import"./browser-1fV_VPE3.js";import"./EmulatedBoldText-Bq1I9eFa.js";import"./Text-C3C-Y4LW.js";import"./utils-BbupUKpI.js";import"./LoadingSpinner-2grY-J-m.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-CqStrOIa.js";import"./context-DElBd4UT.js";import"./Button-rqlppWuO.js";import"./ProgressBar-kDZvVta4.js";import"./Label-6ghd3nSI.js";import"./Hidden-DHl5AEyE.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DSXZ_FtS.js";import"./useFocus-BlE0zHW0.js";import"./useFocusRing-CkzTFAtm.js";import"./useFocusable-F8xU0DHg.js";import"./useMakeFocusable-BRRRy5hj.js";import"./useControlledState-DFl6XB3S.js";import"./useFormReset-DGsTBoXq.js";import"./VisuallyHidden-Nt_GLLf_.js";const or={title:"Form Controls/Slider",component:n,render:e=>r.jsx(n,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(n,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},s={args:{isDisabled:!0}},i={render:e=>r.jsx(n,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,l,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,u,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(V=(O=i.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};const ar=["Default","ReadOnly","WithUnit","Disabled","WithInitialMarker"];export{t as Default,s as Disabled,o as ReadOnly,i as WithInitialMarker,a as WithUnit,ar as __namedExportsOrder,or as default};

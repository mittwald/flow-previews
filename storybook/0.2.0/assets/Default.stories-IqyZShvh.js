import{R as r}from"./index-BbMBc-iG.js";import{S as m}from"./Slider-DQTckhIq.js";import{L as s}from"./Label-D6uleru1.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./flowComponent-CaEd1ouJ.js";import"./index-U7Evrs-N.js";import"./index-CPTjWdH1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BgoMLKZk.js";import"./Button-1rw05oyV.js";import"./IconApp-B_zPpa1A.js";import"./react-children-utilities-BBO5HXrA.js";import"./IconWarning-CceziLlX.js";import"./Wrap-DQq6jo70.js";import"./Text-D6naXSDy.js";import"./browser-DXl7VCm2.js";import"./EmulatedBoldText-ZO8wNulR.js";import"./Text-oWh285ma.js";import"./utils-D4Vol65q.js";import"./LoadingSpinner-y4xqeSCe.js";import"./useLocalizedStringFormatter-DYdTqA_9.js";import"./Button-8ZRRpxMH.js";import"./ProgressBar-tRLoFn7O.js";import"./Label-BybFgH_Q.js";import"./Hidden-BN0YEbzJ.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-C5NcpKQ2.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useFocusable-BA3lYSOI.js";import"./useFocusRing-DA2rHHrb.js";import"./usePress-DotMbixf.js";import"./useControlledState-CMnoB41k.js";import"./useFormReset-BIr5_auz.js";import"./VisuallyHidden-CAwLSgYE.js";const er={title:"Form Controls/Slider",component:m,render:e=>r.createElement(m,{...e},r.createElement(s,null,"Amount")),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}}},t={},o={render:e=>r.createElement(m,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20},r.createElement(s,null,"Storage"))},a={args:{isDisabled:!0}},i={render:e=>r.createElement(m,{...e,defaultValue:20,showInitialMarker:!0},r.createElement(s,null,"Amount"))};var p,n,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var u,c,d;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => <Slider {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} minValue={20} maxValue={2000} defaultValue={200} step={20}>
      <Label>Storage</Label>
    </Slider>
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var S,f,g;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(g=(f=a.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var b,V,h;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: props => <Slider {...props} defaultValue={20} showInitialMarker>
      <Label>Amount</Label>
    </Slider>
}`,...(h=(V=i.parameters)==null?void 0:V.docs)==null?void 0:h.source}}};const tr=["Default","WithUnit","Disabled","WithInitialMarker"];export{t as Default,a as Disabled,i as WithInitialMarker,o as WithUnit,tr as __namedExportsOrder,er as default};

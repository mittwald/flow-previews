import{j as r}from"./iframe-C1l4k2HV.js";import{R as p,b as l,a as g}from"./RadioButton-BLl5VeSi.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-B5roAvcp.js";import{T as y}from"./Text-TULuMeKV.js";import{C as T}from"./Content-FhNNp-40.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-UGszKfi1.js";import"./mergeRefs-Dwr6BYYS.js";import"./index-D2SS6_dL.js";import"./FieldError-CHl9pdWs.js";import"./IconWarning-DU-YpMEs.js";import"./FieldError-1hdg8Lt2.js";import"./utils-v9anKdvO.js";import"./Text-CRjxumht.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-Cia8MBZJ.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-D9X1RvzJ.js";import"./Form-AqkLdwZK.js";import"./useFocus-DYgEZHE7.js";import"./useLabel-DOI1XvOs.js";import"./Label-BgYgpH4h.js";import"./Hidden-Bf1cKpiB.js";import"./useFormReset-CBR7MSqM.js";import"./usePress-DuL0mT4v.js";import"./useFocusRing-UjyG7JyR.js";import"./useFocusable-BYtFdzHx.js";import"./FocusScope-CHMeNqcW.js";import"./context-DZKv31KF.js";import"./VisuallyHidden-BCmSOm_5.js";import"./useControlledState-C9Oc57Yt.js";import"./Label-C9vdNbU9.js";import"./useLocalizedStringFormatter-Cfss7tUo.js";import"./browser-kLrz4LrJ.js";import"./EmulatedBoldText-g1-xYpae.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="a" aria-label="Label">
      <Radio value="a">{dummyText.long} </Radio>
      <Radio value="b">{dummyText.long} </Radio>
      <Radio value="c">{dummyText.long}</Radio>
    </RadioGroup>
}`,...(s=(d=t.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};var u,c,x;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="0" aria-label="Label" l={[1, 1, 1, 1]}>
      {Array(6).fill("").map((value, index) => <RadioButton value={index.toString()} key={index}>
            <Text>{dummyText.medium}</Text>
            <Content>{dummyText.medium}</Content>
          </RadioButton>)}
    </RadioGroup>
}`,...(x=(c=i.parameters)==null?void 0:c.docs)==null?void 0:x.source}}};var R,f,b;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="0" aria-label="Label">
      {Array(3).fill("").map((value, index) => <RadioButton value={index.toString()} key={index}>
            Option {index + 1}
          </RadioButton>)}
    </RadioGroup>,
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...(b=(f=m.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const mr=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,mr as __namedExportsOrder,ir as default};

import{j as r}from"./jsx-runtime-CLpGMVip.js";import{R as l,a as p,b as g}from"./RadioButton-BqIH_IhB.js";import"./index-Cf9XvIV_.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-DJKpkGPD.js";import{T as y}from"./Text-DcH75BF-.js";import{C as T}from"./Content-D_HvFsTV.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CWFvCxZj.js";import"./index-CoqFY4cC.js";import"./FieldError-CgG9l7_n.js";import"./IconApp-CrW8h-Rp.js";import"./flowComponent-BEdvHTPM.js";import"./index-CFEY-m6m.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-ByctJgwf.js";import"./IconWarning-C3Y0rqlg.js";import"./FieldError-BHbGo4IV.js";import"./useFocusRing-CvMz7Q_e.js";import"./utils-DjOXyFua.js";import"./Text-BK3pbL47.js";import"./filterDOMProps-BSfnXAP7.js";import"./ColumnLayout-qOL1VpSf.js";import"./RadioGroup-Dl5H8FOA.js";import"./Form-DJvZMXJC.js";import"./useLabel-ByHVstPj.js";import"./Label-B3UarT55.js";import"./Hidden-Cfl4ctnK.js";import"./useControlledState-19OAjgUP.js";import"./FocusScope-yrzOGIns.js";import"./useLocalizedStringFormatter-Dq-FGM-G.js";import"./useFormReset-SCbFK273.js";import"./useFocusable-CNLx9CCl.js";import"./usePress-lNW0gZrs.js";import"./VisuallyHidden-EoGVKpYJ.js";import"./Label-DX3Ya1J-.js";import"./chunk-D5ZWXAHU-DlerbUHg.js";import"./v4-CtRu48qb.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-CWUNNmIs.js";import"./Wrap-DQq6jo70.js";const dr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,o)=>r.jsxs(g,{value:o.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,o)=>r.jsxs(g,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(b=(f=m.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const sr=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,sr as __namedExportsOrder,dr as default};

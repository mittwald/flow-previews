import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{R as l,a as p,b as g}from"./RadioButton-xRnNdCFn.js";import"./index-BZISi7jw.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-DoxrYqw6.js";import{T as y}from"./Text-BwHAtMVi.js";import{C as T}from"./Content-CRCH2CIc.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CnD-oO9S.js";import"./index-IBhSrjl6.js";import"./FieldError-DN68xrtP.js";import"./IconApp-Bw6C1rcI.js";import"./flowComponent-C3EXXnsB.js";import"./index-DdDGTNSf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-C0qn59OO.js";import"./IconWarning-CYpqa6CU.js";import"./FieldError-DoW3KOQ8.js";import"./useFocusRing-DzGSygZM.js";import"./utils-CzVyYWZn.js";import"./Text-PTaPc_Ci.js";import"./filterDOMProps-CeZl_uWj.js";import"./ColumnLayout-kpzmsF0-.js";import"./RadioGroup-B4im6pQk.js";import"./Form-D162gIjQ.js";import"./useLabel-Hju3pN3c.js";import"./Label-aZfeS6Au.js";import"./Hidden-C5TwESSa.js";import"./useFormReset-CilIRCFg.js";import"./useFocusable-CdO2YIL_.js";import"./usePress-DZCrAIzv.js";import"./FocusScope-BnLtY9jQ.js";import"./useLocalizedStringFormatter-D6AjEcek.js";import"./VisuallyHidden-DJvehTyr.js";import"./useControlledState-4nfZ-XMX.js";import"./Label-tmENthHg.js";import"./chunk-D5ZWXAHU-Dm3eDOzv.js";import"./v4-CtRu48qb.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-BfYT5ZHF.js";import"./Wrap-DQq6jo70.js";const dr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,o)=>r.jsxs(g,{value:o.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,o)=>r.jsxs(g,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

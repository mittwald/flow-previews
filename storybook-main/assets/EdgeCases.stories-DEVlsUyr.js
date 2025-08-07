import{j as r}from"./iframe-H6s4LegX.js";import{R as p,b as l,a as g}from"./RadioButton-Cs2Skm68.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-DhIpUtit.js";import{T as y}from"./Text-Wzcs2ORX.js";import{C as T}from"./Content-BplbBikg.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BSx1Qve-.js";import"./mergeRefs-DP3Z4rVS.js";import"./index-BCzbKcgZ.js";import"./FieldError-HR0koHM9.js";import"./IconWarning-BOAgarfH.js";import"./FieldError-Dt9y-hnT.js";import"./utils-UMD8tMdI.js";import"./Text-W_tYTgvJ.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-BWV4uLVz.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-DU9_9qbY.js";import"./Form-DQJn-VxA.js";import"./useFocus-CgMx6KCt.js";import"./useLabel-BPkUN2gP.js";import"./Label-CKpM-ud8.js";import"./Hidden-Di30YZNr.js";import"./useFormReset-iDdXzUQ2.js";import"./usePress-B_R4nnaN.js";import"./useFocusRing-BEqBdngR.js";import"./useFocusable-C_460OjJ.js";import"./FocusScope-BRfTPPDJ.js";import"./context-ByOQKEDv.js";import"./VisuallyHidden-BsO4eIaj.js";import"./useControlledState-CVjmrtmN.js";import"./Label-BPnhZAtM.js";import"./useLocalizedStringFormatter-C86iIvvl.js";import"./browser-N4t9rK0r.js";import"./EmulatedBoldText-CuIAJdmv.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

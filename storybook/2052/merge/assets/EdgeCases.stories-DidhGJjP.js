import{j as r}from"./iframe-CBVsO-nV.js";import{R as l,b as p,a as g}from"./RadioButton-BrhoEitA.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-Cc1p-EKq.js";import{T as y}from"./Text-4FHUoZpl.js";import{C as T}from"./Content-D1CA9KQC.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DToNFNtJ.js";import"./index-7tOde82V.js";import"./index-CObDYv0S.js";import"./ColumnLayout-BG1JiXTZ.js";import"./useFieldComponent-BL--pJL1.js";import"./utils-BP7SriO_.js";import"./Text-GjNUVhom.js";import"./filterDOMProps-CghfNOdR.js";import"./IconWarning-BYVfnYfe.js";import"./react-children-utilities-Da5w6g_X.js";import"./ClearPropsContext-5iY_SzG7.js";import"./useMakeFocusable-D1yavyON.js";import"./RadioGroup-wlbYgO3L.js";import"./Form-CSBASJMX.js";import"./Label-Bbbf1klh.js";import"./Hidden-CLTlUYi-.js";import"./SelectionIndicator-DFyYkHVA.js";import"./useFormValidation-DWnxi1QZ.js";import"./useFocus-DaXdFBHM.js";import"./useControlledState-CX82Bv9G.js";import"./FocusScope-B4rhd8wm.js";import"./useFocusRing-CMejcKZt.js";import"./context-DPyuhdQa.js";import"./useFormReset-0NTNnrBe.js";import"./usePress-tISAzguc.js";import"./useFocusable-BZqSTg_W.js";import"./VisuallyHidden-OgSsWZyt.js";import"./Label-nyljzuzS.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BV-H-cPE.js";import"./browser-C8nzMZsV.js";import"./EmulatedBoldText-oVXJv8rD.js";const nr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,o)=>r.jsxs(g,{value:o.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,o)=>r.jsxs(g,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(b=(f=m.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const dr=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,dr as __namedExportsOrder,nr as default};

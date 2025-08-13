import{j as r}from"./iframe-BwuZESNl.js";import{R as p,b as l,a as g}from"./RadioButton-DkfqU4On.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-CCJcouDA.js";import{T as y}from"./Text-DpTMi7Hm.js";import{C as T}from"./Content-DiXYbt78.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BusDQUVZ.js";import"./mergeRefs-Dzw8-qaC.js";import"./index-BsghocK6.js";import"./FieldError-5tmL22mm.js";import"./IconWarning-WAZUP-Ct.js";import"./FieldError-DYnYqKIj.js";import"./utils-DwFj3dGQ.js";import"./Text-BwbgPKEG.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-DP1mjVRV.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-Bt2LuiW_.js";import"./Form-DMd5Q7rx.js";import"./useFocus-Co7EWAzt.js";import"./useLabel-Cozlv_-X.js";import"./Label-Dt17YKxE.js";import"./Hidden-B4snL9ZX.js";import"./useFormReset-BKxc7BR_.js";import"./usePress-CLzpZvIT.js";import"./useFocusRing-CS-U_0il.js";import"./useFocusable-CJY6BQME.js";import"./FocusScope-CjFTNvkQ.js";import"./context-Bl9z0-Ez.js";import"./VisuallyHidden-H0mCENoD.js";import"./useControlledState-DDCrWfj9.js";import"./Label-Bp0IrURb.js";import"./useLocalizedStringFormatter-CzmxkLVc.js";import"./browser-BKpgmdP8.js";import"./EmulatedBoldText-CFTp_0vf.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

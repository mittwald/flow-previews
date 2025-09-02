import{j as r}from"./iframe-yblUafAy.js";import{R as p,b as l,a as g}from"./RadioButton-COlux_gK.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-CAHoIFF6.js";import{T as y}from"./Text-Bue8FNqz.js";import{C as T}from"./Content-DqFbSV4A.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B8EIY1Jj.js";import"./mergeRefs-DPuRbqjH.js";import"./index-DA6b7LJX.js";import"./FieldError-CztPiJpG.js";import"./IconWarning-FTunGjDP.js";import"./FieldError-Ct0jDKO_.js";import"./utils-Cuf_iXmO.js";import"./Text-DWcsfeqF.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-D7nALvic.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-D8verKz9.js";import"./Form-DT2Igymc.js";import"./useFocus-BRMNIepO.js";import"./useLabel-DopEiXYz.js";import"./Label-g9pCZyAY.js";import"./Hidden-C5uXlRoq.js";import"./useFormReset-BYGEl6Av.js";import"./usePress-io38-WAj.js";import"./useFocusRing-BEFChVB0.js";import"./useFocusable-BbfkEIfW.js";import"./FocusScope-Cc14swpk.js";import"./context-DmpjBdtt.js";import"./VisuallyHidden-iXpVyW0k.js";import"./useControlledState-DwQ-hYmo.js";import"./Label-8SxsrgrD.js";import"./useLocalizedStringFormatter-DLiSbhJn.js";import"./browser-B_6hcHr6.js";import"./EmulatedBoldText-FggCtMpU.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

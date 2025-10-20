import{j as r}from"./iframe-BojHUq_o.js";import{R as l,b as p,a as g}from"./RadioButton-_uojc0PN.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-CRIifoCP.js";import{T as y}from"./Text-HCLVlkvP.js";import{C as T}from"./Content-DjW2BULk.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-T2-wi8uX.js";import"./index-BJZZiC-7.js";import"./index-Byu2kyB2.js";import"./ColumnLayout-B3XRKw_-.js";import"./useFieldComponent-DC978Re4.js";import"./utils-Gx6YrarE.js";import"./Text-BOOhOnJG.js";import"./filterDOMProps-CghfNOdR.js";import"./IconWarning-CDe5PPLT.js";import"./react-children-utilities-M78AEMQD.js";import"./ClearPropsContext-CDRCLX7w.js";import"./useMakeFocusable-BnROjiMm.js";import"./RadioGroup-vY7R9Gg2.js";import"./Form-CWB6L6R3.js";import"./Label-kTT31z_U.js";import"./Hidden-ZJfagMAU.js";import"./SelectionIndicator-IBXNysdl.js";import"./useFormValidation-Q_otrioy.js";import"./useFocus-C9Jl_mjq.js";import"./useControlledState-goB9hidZ.js";import"./FocusScope-YAVoTg22.js";import"./useFocusRing-PQu2duny.js";import"./context-BrPX2Q0J.js";import"./useFormReset-DOCiYQU_.js";import"./usePress-B7zZe8uM.js";import"./useFocusable-BokWW085.js";import"./VisuallyHidden-BBfPbX8D.js";import"./Label-DZ-kvQ_z.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-69wcReOi.js";import"./browser-DnzQTrak.js";import"./EmulatedBoldText-B_edXnF6.js";const nr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,o)=>r.jsxs(g,{value:o.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,o)=>r.jsxs(g,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

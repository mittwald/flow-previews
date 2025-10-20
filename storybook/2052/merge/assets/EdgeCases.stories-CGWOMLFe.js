import{j as r}from"./iframe-CuPb25cv.js";import{R as l,b as p,a as g}from"./RadioButton-CM-hkjjy.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-DEtmNLI5.js";import{T as y}from"./Text-2_ekHeae.js";import{C as T}from"./Content-ABC0bcLa.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-7fMtXNgu.js";import"./index-CslL-pQh.js";import"./index-DkEiVX-f.js";import"./ColumnLayout-CND_kyVD.js";import"./useFieldComponent-D7Smil9s.js";import"./utils-rjde634_.js";import"./Text-DqFBqxgU.js";import"./filterDOMProps-CghfNOdR.js";import"./IconWarning-CLSl9yKt.js";import"./react-children-utilities-OY5o0O78.js";import"./ClearPropsContext-1rzIpp4D.js";import"./useMakeFocusable-ByjuM3xE.js";import"./RadioGroup-BKtQhtg4.js";import"./Form-BCVzxl1k.js";import"./Label-B7k3ity1.js";import"./Hidden-CG2yJe_k.js";import"./SelectionIndicator-H-x2PvD-.js";import"./useFormValidation-DUD5vlRz.js";import"./useFocus-Cts5O1ED.js";import"./useControlledState-zpPREGnC.js";import"./FocusScope-Dlp3dq5q.js";import"./useFocusRing-rCVkEzcT.js";import"./context-Cf_eXnNJ.js";import"./useFormReset-Cj0hiSlt.js";import"./usePress-BpP9sX_8.js";import"./useFocusable-CMpHMgWZ.js";import"./VisuallyHidden-CoDyqh9l.js";import"./Label-BZpLTozc.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-C6GTeGHr.js";import"./browser-1QXSrBs6.js";import"./EmulatedBoldText-aijrrTX2.js";const nr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,o)=>r.jsxs(g,{value:o.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,o)=>r.jsxs(g,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-ygucezpU.js";import{R as l,b as p,a as g}from"./RadioButton-CL9OdjiT.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-BlvK7MpH.js";import{T as y}from"./Text-c8GLfZrX.js";import{C as T}from"./Content-DFkWMMSL.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Bv8w3zYd.js";import"./mergeRefs-C0ZYRiin.js";import"./index-BaLSpMVi.js";import"./FieldError-DDKUc_sF.js";import"./IconWarning-Cs0D7_PK.js";import"./FieldError-DAYQ7QfD.js";import"./utils-Dm2BIGqk.js";import"./Text-DGTV1FYP.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-Bir-ZYut.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-CkIBmIE6.js";import"./Form-BvlELYJ2.js";import"./useLabel-BIOlG5Yn.js";import"./Label-BffVQixZ.js";import"./Hidden-sZrOLhP9.js";import"./useFormValidation-CdOk873P.js";import"./useFocus-BBcZge3l.js";import"./useControlledState-y1NsnI_K.js";import"./FocusScope-kmUkL49h.js";import"./useFocusRing-CFbBFNPO.js";import"./context-DzmzBjoy.js";import"./useFormReset-CqyvH-u7.js";import"./usePress-BqrMcV_T.js";import"./useFocusable-CmrOOHc4.js";import"./VisuallyHidden-CIvyEb44.js";import"./Label-CDLmKIyL.js";import"./useLocalizedStringFormatter-TZqZqT18.js";import"./browser-BpjCDOvP.js";import"./EmulatedBoldText-oasbrdcJ.js";const pr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(l,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(b=(f=m.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const lr=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,lr as __namedExportsOrder,pr as default};

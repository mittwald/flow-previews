import{j as r}from"./iframe-B8r8XrPb.js";import{R as l,b as p,a as n}from"./RadioButton-DgY7crGi.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CNaItINo.js";import{T as u}from"./Text-CxxNxEUo.js";import{C as c}from"./Content-BQ_QM-fq.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CWjpVcP-.js";import"./index-CVBgNbzf.js";import"./index-ChMccDi0.js";import"./ColumnLayout-CKIo7WzD.js";import"./useFieldComponent-DByhNd_z.js";import"./utils-B2sHMxfy.js";import"./Text-DsIbOJYe.js";import"./filterDOMProps-i7L6S0l1.js";import"./ClearPropsContext-BX2g1WFh.js";import"./useMakeFocusable-DmR7nfCv.js";import"./RadioGroup-B8n_HV_E.js";import"./Form-C0W2Agsa.js";import"./useLabel-Bn_yI2FK.js";import"./Label-DhvUjtv7.js";import"./Hidden-C0uurl-T.js";import"./SelectionIndicator-BHwOxkNR.js";import"./useFormValidation-DuuScCCl.js";import"./useFocus-Co_XlsN_.js";import"./useControlledState-Dhb_P5xS.js";import"./FocusScope-DHLNAyY7.js";import"./useFocusRing-DGaivw0f.js";import"./context-d7knuPTA.js";import"./useFormReset-Cpg0SQow.js";import"./usePress-BPC_OlSs.js";import"./useFocusable-USAcjdfT.js";import"./VisuallyHidden-DvNHrLSk.js";import"./IconWarning-BnpSGPSL.js";import"./Label-PmVCxAho.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-B1bOogGx.js";import"./FieldError-Cr-OeICt.js";import"./browser-5JWtNQpe.js";import"./EmulatedBoldText-DH8-rljC.js";const or={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="a" aria-label="Label">
      <Radio value="a">{dummyText.long} </Radio>
      <Radio value="b">{dummyText.long} </Radio>
      <Radio value="c">{dummyText.long}</Radio>
    </RadioGroup>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="0" aria-label="Label" l={[1, 1, 1, 1]}>
      {Array(6).fill("").map((value, index) => <RadioButton value={index.toString()} key={index}>
            <Text>{dummyText.medium}</Text>
            <Content>{dummyText.medium}</Content>
          </RadioButton>)}
    </RadioGroup>
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const er=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,er as __namedExportsOrder,or as default};

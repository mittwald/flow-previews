import{j as r}from"./iframe-BdvCKsbF.js";import{R as l,b as p,a as g}from"./RadioButton-C7hcRwlK.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-cru0-BW8.js";import{T as y}from"./Text-JqEaJ00k.js";import{C as T}from"./Content-BfZOAKdl.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-pHCscBgm.js";import"./index-CcTYzsK6.js";import"./index-nNeao2-W.js";import"./FieldError-CdPfgsKF.js";import"./IconWarning-P52nLd_s.js";import"./FieldError-CxS3H1fm.js";import"./utils-BbupUKpI.js";import"./Text-C3C-Y4LW.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-ZD9MZPnO.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-BRRRy5hj.js";import"./RadioGroup-DshwgCxZ.js";import"./Form-5t9tGa91.js";import"./Label-6ghd3nSI.js";import"./Hidden-DHl5AEyE.js";import"./useFormValidation-CYJuvObN.js";import"./useFocus-BlE0zHW0.js";import"./useControlledState-DFl6XB3S.js";import"./FocusScope-pfm_0aY5.js";import"./useFocusRing-CkzTFAtm.js";import"./context-DElBd4UT.js";import"./useFormReset-DGsTBoXq.js";import"./usePress-DSXZ_FtS.js";import"./useFocusable-F8xU0DHg.js";import"./VisuallyHidden-Nt_GLLf_.js";import"./Label-669hhtQM.js";import"./useLocalizedStringFormatter-CqStrOIa.js";import"./browser-1fV_VPE3.js";import"./EmulatedBoldText-Bq1I9eFa.js";const pr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(l,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(l,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

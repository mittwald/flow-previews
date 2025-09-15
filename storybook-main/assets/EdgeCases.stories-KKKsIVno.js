import{j as r}from"./iframe-BEG7G6KF.js";import{R as p,b as l,a as g}from"./RadioButton-Cbv483kt.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-BIHN6IDq.js";import{T as y}from"./Text-CsmURpVi.js";import{C as T}from"./Content-Bd3u6T3o.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BB1dsjx4.js";import"./mergeRefs-CMO5wbBQ.js";import"./index-i7zmZRe4.js";import"./FieldError-wC63IlUB.js";import"./IconWarning-a2LhFy5L.js";import"./FieldError-Ce2Todsu.js";import"./utils-LUgpLpbe.js";import"./Text-CjtFlosk.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-BuX-TTVF.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-B0C4sFnm.js";import"./Form-CRnDK1No.js";import"./useFocus-C-WlMmOQ.js";import"./useLabel-Bw-P6Vd2.js";import"./Label-14uT22y-.js";import"./Hidden-CoHG5x6F.js";import"./useFormReset-D7bUq-wz.js";import"./usePress-CNi18aVS.js";import"./useFocusRing-COhl_nbF.js";import"./useFocusable-CiBlyEkt.js";import"./FocusScope-CVsbtSBN.js";import"./context-PcVqvq8B.js";import"./VisuallyHidden-DBx6majZ.js";import"./useControlledState-D4nWDDQs.js";import"./Label-BWItg-fg.js";import"./useLocalizedStringFormatter-Bxu3MgFF.js";import"./browser-hhGcWijl.js";import"./EmulatedBoldText-BEr1TBhP.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

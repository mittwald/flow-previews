import{R as p,a as l,b as g}from"./Radio-z2F21ZLc.js";import{R as e}from"./index-BbMBc-iG.js";import{d as o}from"./dummyText-CX_I_Wpl.js";import y from"./Default.stories-PV9VyOWO.js";import{T as E}from"./Text-D6naXSDy.js";import{C as T}from"./Content-BbJKCc-f.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BgoMLKZk.js";import"./index-CPTjWdH1.js";import"./FieldError-Bxt0_Hqg.js";import"./IconApp-B_zPpa1A.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./flowComponent-CaEd1ouJ.js";import"./index-U7Evrs-N.js";import"./react-children-utilities-BBO5HXrA.js";import"./IconWarning-CceziLlX.js";import"./FieldError-0S5lF-We.js";import"./useFocusRing-DA2rHHrb.js";import"./utils-D4Vol65q.js";import"./Text-oWh285ma.js";import"./filterDOMProps-BSfnXAP7.js";import"./ColumnLayout-v7sjpQxh.js";import"./deepHas-C0IqBpIg.js";import"./RadioGroup-C57r1f3b.js";import"./Form-4lWAVKAg.js";import"./useLabel-C5NcpKQ2.js";import"./Label-BybFgH_Q.js";import"./Hidden-BN0YEbzJ.js";import"./useControlledState-CMnoB41k.js";import"./FocusScope-TaiHum7E.js";import"./useLocalizedStringFormatter-DYdTqA_9.js";import"./useFormReset-BIr5_auz.js";import"./useFocusable-BA3lYSOI.js";import"./usePress-DotMbixf.js";import"./VisuallyHidden-CAwLSgYE.js";import"./Label-D6uleru1.js";import"./chunk-D5ZWXAHU-DlerbUHg.js";import"./v4-CtRu48qb.js";import"./browser-DXl7VCm2.js";import"./EmulatedBoldText-ZO8wNulR.js";import"./Wrap-DQq6jo70.js";const ue={title:"Form Controls/RadioGroup/Edge Cases",...y},t={render:a=>e.createElement(p,{...a,defaultValue:"a","aria-label":"Label"},e.createElement(l,{value:"a"},o.long," "),e.createElement(l,{value:"b"},o.long," "),e.createElement(l,{value:"c"},o.long))},m={render:a=>e.createElement(p,{...a,defaultValue:"0","aria-label":"Label",l:[1,1,1,1]},Array(6).fill("").map((v,r)=>e.createElement(g,{value:r.toString(),key:r},e.createElement(E,null,o.medium),e.createElement(T,null,o.medium))))},i={render:a=>e.createElement(p,{...a,defaultValue:"0","aria-label":"Label"},Array(3).fill("").map((v,r)=>e.createElement(g,{value:r.toString(),key:r},"Option ",r+1))),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,u,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="a" aria-label="Label">
      <Radio value="a">{dummyText.long} </Radio>
      <Radio value="b">{dummyText.long} </Radio>
      <Radio value="c">{dummyText.long}</Radio>
    </RadioGroup>
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var s,c,R;m.parameters={...m.parameters,docs:{...(s=m.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="0" aria-label="Label" l={[1, 1, 1, 1]}>
      {Array(6).fill("").map((value, index) => <RadioButton value={index.toString()} key={index}>
            <Text>{dummyText.medium}</Text>
            <Content>{dummyText.medium}</Content>
          </RadioButton>)}
    </RadioGroup>
}`,...(R=(c=m.parameters)==null?void 0:c.docs)==null?void 0:R.source}}};var f,b,x;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(x=(b=i.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const de=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,m as MultipleRadioButtons,i as SmallSpace,de as __namedExportsOrder,ue as default};

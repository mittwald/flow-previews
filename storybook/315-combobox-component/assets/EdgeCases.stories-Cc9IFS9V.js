import{R as p,a as l,b as g}from"./Radio-CKfrgO1W.js";import{R as e}from"./index-Cs7sjTYM.js";import{d as o}from"./dummyText-CX_I_Wpl.js";import y from"./Default.stories-DgAl8YZS.js";import{T as E}from"./Text-Cd3nXJGb.js";import{C as T}from"./Content-BoscZ0E5.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DXo7lD_U.js";import"./index-j_f0pOtZ.js";import"./dynamic-DKDa4OpU.js";import"./FormField.module-CKZU4edO.js";import"./IconApp-B6hDZZIl.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-BPK-Va1R.js";import"./index-Cf-03bMR.js";import"./IconWarning-Drpj9upb.js";import"./Form-CFqSiCG4.js";import"./useFocusRing-CT1maULe.js";import"./useLabel-BA8WH6BO.js";import"./utils-Cd8r7pc9.js";import"./Text-Bnjm0IRl.js";import"./filterDOMProps-CeZl_uWj.js";import"./ColumnLayout-BGHswle4.js";import"./deepFindOfType-BylCc5Xi.js";import"./react-children-utilities-CdZndyK3.js";import"./getContainerBreakpointSizeClassName-BiU6pQS0.js";import"./Label-C-iBdzH7.js";import"./Hidden-C2kgQquV.js";import"./useControlledState-B7K2eYzO.js";import"./FocusScope-jamPpPQB.js";import"./useLocalizedStringFormatter-TZkCr3Qr.js";import"./useFormReset-BmVKDtZT.js";import"./useFocusable-C99EnWuo.js";import"./usePress-BCyoy2Gl.js";import"./VisuallyHidden-cynug30a.js";import"./Label-BWQgIOia.js";import"./chunk-D5ZWXAHU-CGElDDNX.js";import"./v4-CQkTLCs1.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";const ne={title:"Form Controls/RadioGroup/Edge Cases",...y},t={render:a=>e.createElement(p,{...a,defaultValue:"a","aria-label":"Label"},e.createElement(l,{value:"a"},o.long," "),e.createElement(l,{value:"b"},o.long," "),e.createElement(l,{value:"c"},o.long))},m={render:a=>e.createElement(p,{...a,defaultValue:"0","aria-label":"Label",l:[1,1,1,1]},Array(6).fill("").map((v,r)=>e.createElement(g,{value:r.toString(),key:r},e.createElement(E,null,o.medium),e.createElement(T,null,o.medium))))},i={render:a=>e.createElement(p,{...a,defaultValue:"0","aria-label":"Label"},Array(3).fill("").map((v,r)=>e.createElement(g,{value:r.toString(),key:r},"Option ",r+1))),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,u,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(x=(b=i.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const ue=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,m as MultipleRadioButtons,i as SmallSpace,ue as __namedExportsOrder,ne as default};

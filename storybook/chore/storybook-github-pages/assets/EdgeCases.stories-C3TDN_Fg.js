import{R as n,a as i,b as g}from"./index-BHUginMF.js";import{R as e}from"./index-BwDkhjyp.js";import{d as o}from"./dummyText-CX_I_Wpl.js";import y from"./Default.stories-DKxvQu70.js";import"./index-HBuN0i9E.js";import"./index-DGd3cwV7.js";import{T as E}from"./Text-DFvNZx2y.js";import{C as T}from"./Content-GAEXbwDP.js";import"./import-Cu03TQlK.js";import"./flowComponent-DnUs06RV.js";import"./clsx-B-dksMZM.js";import"./index-B8XB3FuZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./real-module-_6R3Ww0Q.js";import"./dynamic-DKDa4OpU.js";import"./FormField.module-B5hG92F8.js";import"./IconApp-Bwxw5AuI.js";import"./IconWarning-DFvgIVCz.js";import"./index-Di8ZIXM2.js";import"./ColumnLayout-D14VktFn.js";import"./deepFindOfType-CmKNZ8si.js";import"./react-children-utilities-CseWD4BL.js";import"./index-kone6XRS.js";import"./Label-BY-lGqJc.js";import"./chunk-MZXVCX43-CM0pFb8Z.js";import"./v4-CQkTLCs1.js";import"./index-dhKWstfL.js";const W={title:"Form Controls/RadioGroup/Edge Cases",...y},t={render:r=>e.createElement(n,{...r,defaultValue:"a","aria-label":"Label"},e.createElement(i,{value:"a"},o.long," "),e.createElement(i,{value:"b"},o.long," "),e.createElement(i,{value:"c"},o.long))},l={render:r=>e.createElement(n,{...r,defaultValue:"0","aria-label":"Label",l:[1,1,1,1]},Array(6).fill("").map((v,a)=>e.createElement(g,{value:a.toString(),key:a},e.createElement(E,null,o.medium),e.createElement(T,null,o.medium))))},m={render:r=>e.createElement(n,{...r,defaultValue:"0","aria-label":"Label"},Array(3).fill("").map((v,a)=>e.createElement(g,{value:a.toString(),key:a},"Option ",a+1))),parameters:{viewport:{defaultViewport:"mobile1"}}};var p,u,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="a" aria-label="Label">
      <Radio value="a">{dummyText.long} </Radio>
      <Radio value="b">{dummyText.long} </Radio>
      <Radio value="c">{dummyText.long}</Radio>
    </RadioGroup>
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var s,c,R;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="0" aria-label="Label" l={[1, 1, 1, 1]}>
      {Array(6).fill("").map((value, index) => <RadioButton value={index.toString()} key={index}>
            <Text>{dummyText.medium}</Text>
            <Content>{dummyText.medium}</Content>
          </RadioButton>)}
    </RadioGroup>
}`,...(R=(c=l.parameters)==null?void 0:c.docs)==null?void 0:R.source}}};var f,b,x;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(x=(b=m.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const X=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,l as MultipleRadioButtons,m as SmallSpace,X as __namedExportsOrder,W as default};

import{R as p,a as l,b as g}from"./Radio-bi6Jl490.js";import{R as e}from"./index-uCp2LrAq.js";import{d as o}from"./dummyText-CX_I_Wpl.js";import y from"./Default.stories-CToXaoss.js";import{T as E}from"./Text-EyCvEgnK.js";import{C as T}from"./Content-Dc1SMPBR.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DJl9unei.js";import"./index-CqLFpzzG.js";import"./dynamic-DKDa4OpU.js";import"./FormField.module-B1Ek3pwS.js";import"./IconApp-DZ6iFK1V.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-D0hgC601.js";import"./index-BOkhicXD.js";import"./IconWarning-D5KLWx1O.js";import"./Form-CP-B8ZEw.js";import"./useFocusRing-DQ9q31uS.js";import"./useLabel-C-G_TB0Q.js";import"./useLabels-CrvI0Xse.js";import"./utils-DsDc2z3f.js";import"./Text-DAlZawmB.js";import"./ColumnLayout-B78AueES.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./Label-C3uTUzzd.js";import"./filterDOMProps-CeZl_uWj.js";import"./useControlledState-B8AA3oOY.js";import"./FocusScope-tP5bytlL.js";import"./useLocalizedStringFormatter-CPyIEVee.js";import"./useFormReset-D51lDO-b.js";import"./useFocusable-R-ZPDh0R.js";import"./usePress-v15KrNwr.js";import"./VisuallyHidden-rZYQhwXt.js";import"./Label-BfZsFn3a.js";import"./chunk-MZXVCX43-CM0pFb8Z.js";import"./v4-CQkTLCs1.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Activity-DYbiBj6P.js";const pe={title:"Form Controls/RadioGroup/Edge Cases",...y},t={render:a=>e.createElement(p,{...a,defaultValue:"a","aria-label":"Label"},e.createElement(l,{value:"a"},o.long," "),e.createElement(l,{value:"b"},o.long," "),e.createElement(l,{value:"c"},o.long))},m={render:a=>e.createElement(p,{...a,defaultValue:"0","aria-label":"Label",l:[1,1,1,1]},Array(6).fill("").map((v,r)=>e.createElement(g,{value:r.toString(),key:r},e.createElement(E,null,o.medium),e.createElement(T,null,o.medium))))},i={render:a=>e.createElement(p,{...a,defaultValue:"0","aria-label":"Label"},Array(3).fill("").map((v,r)=>e.createElement(g,{value:r.toString(),key:r},"Option ",r+1))),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,u,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(x=(b=i.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const ne=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,m as MultipleRadioButtons,i as SmallSpace,ne as __namedExportsOrder,pe as default};

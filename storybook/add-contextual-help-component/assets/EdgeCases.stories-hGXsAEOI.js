import{R as p,a as l,b as g}from"./Radio-GBSbWLEu.js";import{R as e}from"./index-uCp2LrAq.js";import{d as o}from"./dummyText-CX_I_Wpl.js";import y from"./Default.stories-Bhr8lX-s.js";import{T as E}from"./Text-DaXThI_-.js";import{C as T}from"./Content-Bt4iOjf4.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-RdMO5ekw.js";import"./index-CFQDndEx.js";import"./dynamic-DKDa4OpU.js";import"./FormField.module-CVTN08rG.js";import"./IconApp-BaqjkNZn.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-Ca66243O.js";import"./index-BOkhicXD.js";import"./IconWarning-Bsd3dSOq.js";import"./Form-ZiK3HNmC.js";import"./useFocusable-78usWDLt.js";import"./utils-DZgOXw50.js";import"./useLabel-D9TuMkUI.js";import"./useLabels-POLqFEYE.js";import"./Text-D6Zjnbf0.js";import"./ColumnLayout-B78AueES.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./Label-BQk6lJ-q.js";import"./filterDOMProps-CeZl_uWj.js";import"./useControlledState-B8AA3oOY.js";import"./FocusScope-DoABDPBn.js";import"./useLocalizedStringFormatter-CHReNXSI.js";import"./useFormReset-Bt7ImmB-.js";import"./usePress-9lmrtZep.js";import"./VisuallyHidden-CB7QZ_UN.js";import"./Label-iTt8mwRi.js";import"./chunk-MZXVCX43-CM0pFb8Z.js";import"./v4-CQkTLCs1.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Wrap-DQq6jo70.js";import"./Activity-Ck-RMSDT.js";const pe={title:"Form Controls/RadioGroup/Edge Cases",...y},t={render:a=>e.createElement(p,{...a,defaultValue:"a","aria-label":"Label"},e.createElement(l,{value:"a"},o.long," "),e.createElement(l,{value:"b"},o.long," "),e.createElement(l,{value:"c"},o.long))},m={render:a=>e.createElement(p,{...a,defaultValue:"0","aria-label":"Label",l:[1,1,1,1]},Array(6).fill("").map((v,r)=>e.createElement(g,{value:r.toString(),key:r},e.createElement(E,null,o.medium),e.createElement(T,null,o.medium))))},i={render:a=>e.createElement(p,{...a,defaultValue:"0","aria-label":"Label"},Array(3).fill("").map((v,r)=>e.createElement(g,{value:r.toString(),key:r},"Option ",r+1))),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,u,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

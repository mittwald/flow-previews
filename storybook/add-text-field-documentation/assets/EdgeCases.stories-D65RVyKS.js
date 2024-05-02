import{R as p,a as l,b as g}from"./index-Doo91-PZ.js";import{R as e}from"./index-BwDkhjyp.js";import{d as o}from"./dummyText-CX_I_Wpl.js";import y from"./Default.stories-Czr5gxT3.js";import"./index-ClBBAz8G.js";import"./index-CTZVGI_L.js";import{T as E}from"./Text-CME0CjX1.js";import{C as T}from"./Content-voJAjZIO.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dglj5cqB.js";import"./index-B8XB3FuZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./dynamic-DKDa4OpU.js";import"./FormField.module-Bqojx978.js";import"./IconApp-_FcSWQQl.js";import"./IconWarning-DWDcGR9n.js";import"./Form-CGVacYyW.js";import"./useFocusable-DLPCeG8s.js";import"./utils-DDqfTkhb.js";import"./useLabel-CGKcXo82.js";import"./useLabels-DNsw1HUe.js";import"./Text-Ck09bxUA.js";import"./index-DZx38vip.js";import"./ColumnLayout-B-_pjxL2.js";import"./deepFindOfType-CmKNZ8si.js";import"./react-children-utilities-CseWD4BL.js";import"./Label-C1MFjKOK.js";import"./filterDOMProps-CeZl_uWj.js";import"./useControlledState-C0C-dzuH.js";import"./FocusScope-DR0UY-fH.js";import"./useLocalizedStringFormatter-m5PKJKvJ.js";import"./useFormReset-Dz9no7wq.js";import"./usePress-CJfWxQWU.js";import"./VisuallyHidden-BNJtAZAq.js";import"./index-CmXyXO_7.js";import"./Label-C3TD0eFG.js";import"./chunk-MZXVCX43-CM0pFb8Z.js";import"./v4-CQkTLCs1.js";import"./index-dhKWstfL.js";const pe={title:"Form Controls/RadioGroup/Edge Cases",...y},t={render:a=>e.createElement(p,{...a,defaultValue:"a","aria-label":"Label"},e.createElement(l,{value:"a"},o.long," "),e.createElement(l,{value:"b"},o.long," "),e.createElement(l,{value:"c"},o.long))},m={render:a=>e.createElement(p,{...a,defaultValue:"0","aria-label":"Label",l:[1,1,1,1]},Array(6).fill("").map((v,r)=>e.createElement(g,{value:r.toString(),key:r},e.createElement(E,null,o.medium),e.createElement(T,null,o.medium))))},i={render:a=>e.createElement(p,{...a,defaultValue:"0","aria-label":"Label"},Array(3).fill("").map((v,r)=>e.createElement(g,{value:r.toString(),key:r},"Option ",r+1))),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,u,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

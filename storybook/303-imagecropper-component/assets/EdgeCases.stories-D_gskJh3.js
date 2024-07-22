import{R as p,a as l,b as g}from"./Radio-C_ax05Dj.js";import{R as e}from"./index-Cs7sjTYM.js";import{d as o}from"./dummyText-CX_I_Wpl.js";import y from"./Default.stories-DLOVLyLe.js";import{T as E}from"./Text-BM3moMBE.js";import{C as T}from"./Content-BJoNlb35.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C-7PaZ52.js";import"./index-Dy0c0dcE.js";import"./dynamic-DKDa4OpU.js";import"./FormField.module-Wg7kvnEu.js";import"./IconApp-CyHi4WPz.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-BttIposY.js";import"./index-BMdlDBjA.js";import"./IconWarning-DZJaqlYL.js";import"./Form-BsdqCRI5.js";import"./useFocusable-OFlS-6qe.js";import"./utils-Cy-A-nlV.js";import"./useLabel-B-9ggeSA.js";import"./useLabels-n83dATVM.js";import"./Text-Dh5WnJTs.js";import"./ColumnLayout-C9LwylRg.js";import"./deepFindOfType-BylCc5Xi.js";import"./react-children-utilities-CdZndyK3.js";import"./getContainerBreakpointSizeClassName-BiU6pQS0.js";import"./Label-8PgMpAzA.js";import"./filterDOMProps-CeZl_uWj.js";import"./useControlledState-B7K2eYzO.js";import"./FocusScope-67rE8EpU.js";import"./useLocalizedStringFormatter-Ccpl5Mb8.js";import"./useFormReset-DRCqKyTt.js";import"./usePress-CTrgc7uI.js";import"./VisuallyHidden-D76woJCP.js";import"./Label-BpnA_KhO.js";import"./chunk-454WOBUV-CM0pFb8Z.js";import"./v4-CQkTLCs1.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";import"./Activity-Bj6QwKZx.js";const ne={title:"Form Controls/RadioGroup/Edge Cases",...y},t={render:a=>e.createElement(p,{...a,defaultValue:"a","aria-label":"Label"},e.createElement(l,{value:"a"},o.long," "),e.createElement(l,{value:"b"},o.long," "),e.createElement(l,{value:"c"},o.long))},m={render:a=>e.createElement(p,{...a,defaultValue:"0","aria-label":"Label",l:[1,1,1,1]},Array(6).fill("").map((v,r)=>e.createElement(g,{value:r.toString(),key:r},e.createElement(E,null,o.medium),e.createElement(T,null,o.medium))))},i={render:a=>e.createElement(p,{...a,defaultValue:"0","aria-label":"Label"},Array(3).fill("").map((v,r)=>e.createElement(g,{value:r.toString(),key:r},"Option ",r+1))),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,u,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

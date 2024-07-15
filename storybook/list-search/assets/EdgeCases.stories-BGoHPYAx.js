import{R as p,a as l,b as g}from"./Radio-ByYtP2Cc.js";import{R as e}from"./index-BwDkhjyp.js";import{d as o}from"./dummyText-CX_I_Wpl.js";import y from"./Default.stories-RwRlthFv.js";import{T as E}from"./Text-5DZcOrRy.js";import{C as T}from"./Content-CawQfj8G.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DwTel3aB.js";import"./index-DVe9vSxq.js";import"./dynamic-DKDa4OpU.js";import"./FormField.module-DaVwR1Uv.js";import"./IconApp-ZB_mDMmk.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-DpPOHS38.js";import"./index-B8XB3FuZ.js";import"./IconWarning-B7dgU6yc.js";import"./Form-CuH0gdtx.js";import"./useFocusable-C-qOUFhv.js";import"./utils-CcQIssJO.js";import"./useLabel-BaXqGmeE.js";import"./useLabels-kg7v6Afk.js";import"./Text-DqgvIX4k.js";import"./ColumnLayout-B-_pjxL2.js";import"./deepFindOfType-CmKNZ8si.js";import"./react-children-utilities-CseWD4BL.js";import"./getContainerBreakpointSizeClassName-BiU6pQS0.js";import"./Label-J_0igrPF.js";import"./filterDOMProps-CeZl_uWj.js";import"./useControlledState-C0C-dzuH.js";import"./FocusScope-DBQ4F6TM.js";import"./useLocalizedStringFormatter-BNeRQeib.js";import"./useFormReset-CfqvoD0r.js";import"./usePress-Bw-L1sLn.js";import"./VisuallyHidden-BopbO3Wg.js";import"./Label-BD5VUJI0.js";import"./chunk-MZXVCX43-CM0pFb8Z.js";import"./v4-CQkTLCs1.js";import"./EmulatedBoldText-B1t6hs5E.js";import"./Wrap-DQq6jo70.js";import"./Activity-Cov3f-FH.js";const ne={title:"Form Controls/RadioGroup/Edge Cases",...y},t={render:a=>e.createElement(p,{...a,defaultValue:"a","aria-label":"Label"},e.createElement(l,{value:"a"},o.long," "),e.createElement(l,{value:"b"},o.long," "),e.createElement(l,{value:"c"},o.long))},m={render:a=>e.createElement(p,{...a,defaultValue:"0","aria-label":"Label",l:[1,1,1,1]},Array(6).fill("").map((v,r)=>e.createElement(g,{value:r.toString(),key:r},e.createElement(E,null,o.medium),e.createElement(T,null,o.medium))))},i={render:a=>e.createElement(p,{...a,defaultValue:"0","aria-label":"Label"},Array(3).fill("").map((v,r)=>e.createElement(g,{value:r.toString(),key:r},"Option ",r+1))),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,u,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

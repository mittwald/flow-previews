import{R as p,a as l,b as g}from"./Radio-Gdf_76sy.js";import{R as e}from"./index-B-o1Wr-g.js";import{d as o}from"./dummyText-CX_I_Wpl.js";import y from"./Default.stories-DI0shS6U.js";import{T as E}from"./Text-CzvJ5BXa.js";import{C as T}from"./Content-CA3Rkk5c.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BHq6Fnml.js";import"./index-ynQ6n1pc.js";import"./FieldError-DaTfvu6k.js";import"./IconApp-Dzb5vMVI.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./flowComponent-Cv5RgLo7.js";import"./index-DolzVqEf.js";import"./IconWarning-BzyYKcnD.js";import"./FieldError-L__bJmxV.js";import"./useFocusRing-CTDVvBmm.js";import"./utils-DQkeZTYT.js";import"./Text-CFSbYzT7.js";import"./filterDOMProps-CeZl_uWj.js";import"./ColumnLayout-BdZbx_GF.js";import"./deepHas-qlU7dqTi.js";import"./react-children-utilities-D14ImiYi.js";import"./RadioGroup-hasJ6NMl.js";import"./Form-UuEo5mp_.js";import"./useLabel-DrlXsFf-.js";import"./Label-DFSCGvPu.js";import"./Hidden-CRdWNeH8.js";import"./useControlledState-BgxdDqm0.js";import"./FocusScope-Deam_7e8.js";import"./useLocalizedStringFormatter-BQr1rA-c.js";import"./useFormReset-DMREOE0P.js";import"./useFocusable-DbryJmtU.js";import"./usePress-C3EQNDer.js";import"./VisuallyHidden-lWpahT0S.js";import"./Label-BVDa8VNw.js";import"./chunk-D5ZWXAHU-CGElDDNX.js";import"./v4-CQkTLCs1.js";import"./browser-B3hGj0u-.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./Wrap-DQq6jo70.js";const ue={title:"Form Controls/RadioGroup/Edge Cases",...y},t={render:a=>e.createElement(p,{...a,defaultValue:"a","aria-label":"Label"},e.createElement(l,{value:"a"},o.long," "),e.createElement(l,{value:"b"},o.long," "),e.createElement(l,{value:"c"},o.long))},m={render:a=>e.createElement(p,{...a,defaultValue:"0","aria-label":"Label",l:[1,1,1,1]},Array(6).fill("").map((v,r)=>e.createElement(g,{value:r.toString(),key:r},e.createElement(E,null,o.medium),e.createElement(T,null,o.medium))))},i={render:a=>e.createElement(p,{...a,defaultValue:"0","aria-label":"Label"},Array(3).fill("").map((v,r)=>e.createElement(g,{value:r.toString(),key:r},"Option ",r+1))),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,u,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

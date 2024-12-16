import{R as p,a as l,b as g}from"./Radio-vlE_BE4A.js";import{R as e}from"./index-B-o1Wr-g.js";import{d as o}from"./dummyText-CX_I_Wpl.js";import y from"./Default.stories-DT7qhsoL.js";import{T as E}from"./Text-Cj_eL-oH.js";import{C as T}from"./Content-DW2opCWC.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BYgAOosN.js";import"./index-CHDNsM8M.js";import"./FieldError-CoVjslWJ.js";import"./IconApp-BsMqgwqQ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./flowComponent-BM_bsdM-.js";import"./index-DolzVqEf.js";import"./IconWarning-QGTmOWaT.js";import"./FieldError-BRsWdmBR.js";import"./useFocusRing-aZOxpy_h.js";import"./utils-DKtCZAsl.js";import"./Text-CiYJIQMS.js";import"./filterDOMProps-CeZl_uWj.js";import"./ColumnLayout-BFfEl5xZ.js";import"./deepHas-qlU7dqTi.js";import"./react-children-utilities-D14ImiYi.js";import"./RadioGroup-Bao0zErG.js";import"./Form-DB3JQAHQ.js";import"./useLabel-C4jwYeNR.js";import"./Label-lrV0rU61.js";import"./Hidden-_I_3hSLB.js";import"./useControlledState-BgxdDqm0.js";import"./FocusScope-8TYcTRcc.js";import"./useLocalizedStringFormatter-X6TgI_-C.js";import"./useFormReset-Bzq1iQT5.js";import"./useFocusable-DeAGt_gp.js";import"./usePress-RNxp3RZQ.js";import"./VisuallyHidden-iqNnHKyk.js";import"./Label-D_lYvbbp.js";import"./chunk-D5ZWXAHU-CGElDDNX.js";import"./v4-CQkTLCs1.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./Wrap-DQq6jo70.js";const ne={title:"Form Controls/RadioGroup/Edge Cases",...y},t={render:a=>e.createElement(p,{...a,defaultValue:"a","aria-label":"Label"},e.createElement(l,{value:"a"},o.long," "),e.createElement(l,{value:"b"},o.long," "),e.createElement(l,{value:"c"},o.long))},m={render:a=>e.createElement(p,{...a,defaultValue:"0","aria-label":"Label",l:[1,1,1,1]},Array(6).fill("").map((v,r)=>e.createElement(g,{value:r.toString(),key:r},e.createElement(E,null,o.medium),e.createElement(T,null,o.medium))))},i={render:a=>e.createElement(p,{...a,defaultValue:"0","aria-label":"Label"},Array(3).fill("").map((v,r)=>e.createElement(g,{value:r.toString(),key:r},"Option ",r+1))),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,u,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

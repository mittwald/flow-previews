import{R as p,a as l,b as g}from"./RadioButton-1tAMK1kO.js";import{R as e}from"./index-B-o1Wr-g.js";import{d as o}from"./dummyText-CX_I_Wpl.js";import y from"./Default.stories-DCDwEha2.js";import{T as E}from"./Text-9mML8Z29.js";import{C as T}from"./Content-Cg8Hfq9T.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BHq6Fnml.js";import"./index-ynQ6n1pc.js";import"./FieldError-Cn7Cn3Rk.js";import"./IconApp-3W3XzCjg.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./flowComponent-Bz6Io0hO.js";import"./index-DolzVqEf.js";import"./IconWarning-DPCXsjOp.js";import"./FieldError-Dc7wTCBj.js";import"./useFocusRing-CTDVvBmm.js";import"./utils-7gTBvjqH.js";import"./Text-R-rrVGxo.js";import"./filterDOMProps-CeZl_uWj.js";import"./ColumnLayout-3vFBx2eH.js";import"./RadioGroup-BdG4FGl5.js";import"./Form-CS2x0aS5.js";import"./useLabel-DrlXsFf-.js";import"./Label-CqgmsInd.js";import"./Hidden-CRdWNeH8.js";import"./useControlledState-BgxdDqm0.js";import"./FocusScope-DvafcTTH.js";import"./LocalizedStringFormatter-CmF9aEqk.js";import"./useFormReset-DMREOE0P.js";import"./useFocusable-BXVt7Q_3.js";import"./usePress-C3EQNDer.js";import"./VisuallyHidden-lWpahT0S.js";import"./Label-YqoRtSRe.js";import"./useLocalizedStringFormatter-D9stqqmU.js";import"./chunk-D5ZWXAHU-CGElDDNX.js";import"./v4-CQkTLCs1.js";import"./browser-B3hGj0u-.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./Wrap-DQq6jo70.js";const ne={title:"Form Controls/RadioGroup/Edge Cases",...y},t={render:a=>e.createElement(p,{...a,defaultValue:"a","aria-label":"Label"},e.createElement(l,{value:"a"},o.long," "),e.createElement(l,{value:"b"},o.long," "),e.createElement(l,{value:"c"},o.long))},m={render:a=>e.createElement(p,{...a,defaultValue:"0","aria-label":"Label",l:[1,1,1,1]},Array(6).fill("").map((v,r)=>e.createElement(g,{value:r.toString(),key:r},e.createElement(E,null,o.medium),e.createElement(T,null,o.medium))))},i={render:a=>e.createElement(p,{...a,defaultValue:"0","aria-label":"Label"},Array(3).fill("").map((v,r)=>e.createElement(g,{value:r.toString(),key:r},"Option ",r+1))),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,u,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

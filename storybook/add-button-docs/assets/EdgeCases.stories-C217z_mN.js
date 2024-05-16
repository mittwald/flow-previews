import{R as p,a as l,b as g}from"./index-DsXHBUzz.js";import{R as e}from"./index-uCp2LrAq.js";import{d as o}from"./dummyText-CX_I_Wpl.js";import y from"./Default.stories-C1-c4rjY.js";import"./index-ZGtVZsDz.js";import"./index-DH_tWg_W.js";import{T as E}from"./Text-CRgtz34V.js";import{C as T}from"./Content-CEdcCKZN.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CvYijzQN.js";import"./index-BOkhicXD.js";import"./_commonjsHelpers-BosuxZz1.js";import"./dynamic-DKDa4OpU.js";import"./FormField.module-Des02XVA.js";import"./IconApp-BMlMz8UD.js";import"./IconWarning-BWQh0yHy.js";import"./Form-DzhzTTqI.js";import"./useFocusable-DdMdjPK0.js";import"./utils-DWaAzItp.js";import"./useLabel-C6gbbzAU.js";import"./useLabels-LW5SiPO7.js";import"./Text-5ecqfi7M.js";import"./index-DZfY3KTC.js";import"./ColumnLayout-B78AueES.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./Label-CTTMUmjq.js";import"./filterDOMProps-CeZl_uWj.js";import"./useControlledState-B8AA3oOY.js";import"./FocusScope-DsV13NlO.js";import"./useLocalizedStringFormatter-5VR59M9e.js";import"./useFormReset-CgH7zaje.js";import"./usePress-GzZvjGFA.js";import"./VisuallyHidden-ORZgQdGI.js";import"./index-CSewQKTb.js";import"./Label-CfDHK9n-.js";import"./chunk-MZXVCX43-CM0pFb8Z.js";import"./v4-CQkTLCs1.js";import"./index-DePfloUh.js";import"./Wrap-DQq6jo70.js";import"./index-C1tRuZrD.js";const ue={title:"Form Controls/RadioGroup/Edge Cases",...y},t={render:a=>e.createElement(p,{...a,defaultValue:"a","aria-label":"Label"},e.createElement(l,{value:"a"},o.long," "),e.createElement(l,{value:"b"},o.long," "),e.createElement(l,{value:"c"},o.long))},m={render:a=>e.createElement(p,{...a,defaultValue:"0","aria-label":"Label",l:[1,1,1,1]},Array(6).fill("").map((v,r)=>e.createElement(g,{value:r.toString(),key:r},e.createElement(E,null,o.medium),e.createElement(T,null,o.medium))))},i={render:a=>e.createElement(p,{...a,defaultValue:"0","aria-label":"Label"},Array(3).fill("").map((v,r)=>e.createElement(g,{value:r.toString(),key:r},"Option ",r+1))),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,u,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

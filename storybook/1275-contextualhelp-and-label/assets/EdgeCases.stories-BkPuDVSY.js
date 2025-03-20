import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{R as l,a as p,b as g}from"./RadioButton-CKvtC3aF.js";import"./index-BZISi7jw.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-7717MaRb.js";import{T as y}from"./Text-BPAvSiAh.js";import{C as T}from"./Content-fE7CgtG0.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BQKp_5Ng.js";import"./index-BBXbSWyk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-C0qn59OO.js";import"./index-Dfd2pZHs.js";import"./FieldError-BeNnsonN.js";import"./IconApp-DZf0STiH.js";import"./IconWarning-BqX4qer7.js";import"./FieldError-D8y9Veva.js";import"./useFocus-B7LXpZ-i.js";import"./utils-BAtcVSHo.js";import"./Text-CxIdO6ok.js";import"./filterDOMProps-CeZl_uWj.js";import"./ColumnLayout-qFhcpCqG.js";import"./RadioGroup-BuP3ZRoB.js";import"./Form-8WJ3ztGx.js";import"./useLabel-Bh1EGhcd.js";import"./Label--FbMCZJS.js";import"./Hidden-kqRI_mPI.js";import"./useFormReset-4n_yD9ws.js";import"./usePress-ChNHSMR7.js";import"./useFocusRing-CYqHz5Aw.js";import"./useFocusable-XxrpiuTs.js";import"./FocusScope-BXsjqcwe.js";import"./useLocalizedStringFormatter-CZn_2Om1.js";import"./VisuallyHidden-CfzjMNmM.js";import"./useControlledState-4nfZ-XMX.js";import"./Label-Awo8DmgK.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-BfYT5ZHF.js";import"./Wrap-DQq6jo70.js";const dr={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,o)=>r.jsxs(g,{value:o.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,o)=>r.jsxs(g,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="a" aria-label="Label">
      <Radio value="a">{dummyText.long} </Radio>
      <Radio value="b">{dummyText.long} </Radio>
      <Radio value="c">{dummyText.long}</Radio>
    </RadioGroup>
}`,...(s=(d=t.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};var u,c,x;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="0" aria-label="Label" l={[1, 1, 1, 1]}>
      {Array(6).fill("").map((value, index) => <RadioButton value={index.toString()} key={index}>
            <Text>{dummyText.medium}</Text>
            <Content>{dummyText.medium}</Content>
          </RadioButton>)}
    </RadioGroup>
}`,...(x=(c=i.parameters)==null?void 0:c.docs)==null?void 0:x.source}}};var R,f,b;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(b=(f=m.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const sr=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,sr as __namedExportsOrder,dr as default};

import{R as p,a as l,b as g}from"./index-CGCN_KJw.js";import{R as e}from"./index-BwDkhjyp.js";import{d as o}from"./dummyText-CX_I_Wpl.js";import y from"./Default.stories-Cykq51n8.js";import"./index-C0raSsgL.js";import"./index-ZSW3VHiY.js";import{T as E}from"./Text-phIOO8u9.js";import{C as T}from"./Content-DL78Mf50.js";import"./clsx-B-dksMZM.js";import"./index-CoJk2QQB.js";import"./dynamic-DKDa4OpU.js";import"./FormField.module-DxGAUAvA.js";import"./IconApp-RPV2UACM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-syVPRVDK.js";import"./index-B8XB3FuZ.js";import"./IconWarning-D1gyLIYa.js";import"./Form-UOu9ohy-.js";import"./useFocusable-C08EbcBh.js";import"./utils-bTb4N6hy.js";import"./useLabel-CgqvziXr.js";import"./useLabels-DByniHrJ.js";import"./Text-fvXBaVCt.js";import"./index-DZx38vip.js";import"./ColumnLayout-B-_pjxL2.js";import"./deepFindOfType-CmKNZ8si.js";import"./react-children-utilities-CseWD4BL.js";import"./Label-gkOQ74H0.js";import"./filterDOMProps-CeZl_uWj.js";import"./useControlledState-C0C-dzuH.js";import"./FocusScope-B_JIBP49.js";import"./useLocalizedStringFormatter-Cfq_zrt4.js";import"./useFormReset-BqJg0Uge.js";import"./usePress-18_TO7Wj.js";import"./VisuallyHidden-Jq0fOfeV.js";import"./index-Bxd6nhvt.js";import"./Label-wWG0xxvc.js";import"./chunk-MZXVCX43-CM0pFb8Z.js";import"./v4-CQkTLCs1.js";import"./index-dhKWstfL.js";import"./Wrap-DQq6jo70.js";const ue={title:"Form Controls/RadioGroup/Edge Cases",...y},t={render:a=>e.createElement(p,{...a,defaultValue:"a","aria-label":"Label"},e.createElement(l,{value:"a"},o.long," "),e.createElement(l,{value:"b"},o.long," "),e.createElement(l,{value:"c"},o.long))},m={render:a=>e.createElement(p,{...a,defaultValue:"0","aria-label":"Label",l:[1,1,1,1]},Array(6).fill("").map((v,r)=>e.createElement(g,{value:r.toString(),key:r},e.createElement(E,null,o.medium),e.createElement(T,null,o.medium))))},i={render:a=>e.createElement(p,{...a,defaultValue:"0","aria-label":"Label"},Array(3).fill("").map((v,r)=>e.createElement(g,{value:r.toString(),key:r},"Option ",r+1))),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,u,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-DzdsrO80.js";import{R as p,b as l,a as g}from"./RadioButton-CN9OpG3s.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import j from"./Default.stories-DZRosdK7.js";import{T as y}from"./Text-DXUL7YAG.js";import{C as T}from"./Content-DJWZ2XSC.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-IX1SCoto.js";import"./mergeRefs-BURbbDf-.js";import"./index-Bdpzlu2x.js";import"./FieldError-_YRaGmgh.js";import"./IconWarning-B3m6OsdH.js";import"./FieldError-CeKpopQl.js";import"./utils-CvAakX2W.js";import"./Text-CRTGmFuV.js";import"./filterDOMProps-CghfNOdR.js";import"./ColumnLayout-BAFZuhkH.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-DhYtIzSu.js";import"./Form-C696dGLt.js";import"./useFocus-B0VC8u8k.js";import"./useLabel-BtHrL8qq.js";import"./Label-DXfcpAFN.js";import"./Hidden-BVbf7n1G.js";import"./useFormReset-B7pkU5Xm.js";import"./usePress-DskVbL7b.js";import"./useFocusRing-CBIzKb6Q.js";import"./useFocusable-COvMPAb3.js";import"./FocusScope-DDPGgWDg.js";import"./context-DCkzppns.js";import"./VisuallyHidden-BfQH1Q-z.js";import"./useControlledState-D4aZ1p71.js";import"./Label-Bm3Js6Mn.js";import"./useLocalizedStringFormatter-B09vxeO2.js";import"./browser-CWHi4dia.js";import"./EmulatedBoldText-BUyeaD_Y.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...j},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:[r.jsx(y,{children:a.medium}),r.jsx(T,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((v,e)=>r.jsxs(g,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};var n,d,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(b=(f=m.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const mr=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,mr as __namedExportsOrder,ir as default};

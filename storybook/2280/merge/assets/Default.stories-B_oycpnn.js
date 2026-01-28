import{j as r,r as g}from"./iframe-DXKyl4qq.js";import{R as t}from"./Rating-3BlPxoCa.js";import{L as l}from"./Label-DJy_0fcC.js";import{F as R}from"./FieldError-hPaNUVVF.js";import{u as h,F as b,t as F}from"./ResetButton-SPfrEBJU.js";import{B as f}from"./Button-0acoIVQZ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-BTtxekbk.js";import"./flowComponent-CGVR20ME.js";import"./index-CGttF0w9.js";import"./index-CK0x1Z6h.js";import"./remote-5V97MXBJ.js";import"./useLocalizedStringFormatter-DsWoRU9M.js";import"./context-C5-138xc.js";import"./RadioGroup-BZGZzjCH.js";import"./utils-Cgx1j8_A.js";import"./FieldError-CXwp2WFY.js";import"./Text-Dy69l_TS.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-VygiigBM.js";import"./useLabel-CXFTMfS2.js";import"./Label-Dkou43m_.js";import"./Hidden-CaezFR51.js";import"./SelectionIndicator-BncnqGmj.js";import"./useFormValidation-1Ohd4Vow.js";import"./useFocus-BAjbVDBz.js";import"./useFocusRing-DoixN5z_.js";import"./useControlledState-DW1EgN0_.js";import"./FocusScope-CeuTnAxx.js";import"./useFormReset-Cw-gwOYV.js";import"./usePress-MFF54RNh.js";import"./useFocusable-DAwaDAhU.js";import"./VisuallyHidden-XnRwWdWi.js";import"./useFieldComponent-DrLbNusb.js";import"./useMakeFocusable-l6suc7Fp.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BbpMfzbs.js";import"./AlertIcon-BU8g3GYG.js";import"./dynamic-CaArDE2O.js";import"./useRef-CVzViYXT.js";import"./Action-eA8jYG3_.js";import"./context-9N5Shw7P.js";import"./useStatic-CdHxY_ZS.js";import"./browser-Q1FjFR8E.js";import"./getActionGroupSlot-CBJ6_xHE.js";import"./ButtonView-vjQ-21-e.js";import"./Text-DlQihciA.js";import"./EmulatedBoldText-Bw3TIL22.js";import"./LoadingSpinner-NKyffFLh.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-O8jlFCas.js";import"./ProgressBar-C7LcFD3o.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: "s"
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <Rating {...props}>
      <Label>Rating</Label>
    </Rating>
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <Rating {...props} defaultValue={0} isInvalid isRequired>
      <Label>Rating</Label>
      <FieldError>Please rate</FieldError>
    </Rating>
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [value, setValue] = useState(4);
    return <Rating {...props} value={value} onChange={v => setValue(parseInt(v))}>
        <Label>Rating</Label>
      </Rating>;
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm<{
      rating: number;
    }>({
      defaultValues: {
        rating: 2
      }
    });
    const Field = typedField(form);
    return <Form form={form} onSubmit={async v => console.log(v.rating)}>
        <Field name="rating">
          <Rating>
            <Label>Rating</Label>
          </Rating>
        </Field>
        <br />
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...p.parameters?.docs?.source}}};const jr=["Default","Small","ReadOnly","WithLabel","WithFieldError","WithControlledValue","WithForm"];export{o as Default,s as ReadOnly,a as Small,m as WithControlledValue,i as WithFieldError,p as WithForm,n as WithLabel,jr as __namedExportsOrder,xr as default};

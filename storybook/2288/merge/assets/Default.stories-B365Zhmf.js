import{j as r,r as g}from"./iframe-l1bkuF5f.js";import{R as t}from"./Rating-D8y_a9kZ.js";import{L as l}from"./Label-DX1aPacI.js";import{F as R}from"./FieldError-mREW9pPY.js";import{u as h,F as b,t as F}from"./ResetButton-Bus3ZjXK.js";import{B as f}from"./Button-pfxdB-3A.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-rcKmWr_e.js";import"./flowComponent-CvyDVUQE.js";import"./index-BKxYFHxl.js";import"./index-BcUcgGWs.js";import"./remote-DAiDHcEq.js";import"./useLocalizedStringFormatter-F2xrId0k.js";import"./context-C-s-FPG6.js";import"./RadioGroup-Cm8k3FiQ.js";import"./utils-DCQYs-TM.js";import"./FieldError-DlCb0goX.js";import"./Text-CmGzUVny.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-C3oxrYxL.js";import"./useLabel-Dw5Dmo8O.js";import"./Label-tW_cqKCA.js";import"./Hidden-xK_5A_TS.js";import"./SelectionIndicator-8EnZgCgK.js";import"./useFormValidation-CUmRTDZB.js";import"./useFocus-jq5Lg4Og.js";import"./useFocusRing-DvEP7g7r.js";import"./useControlledState-BZaI1cg9.js";import"./FocusScope-CXOryEg0.js";import"./useFormReset-B-5bGtDV.js";import"./usePress-CEqZlFux.js";import"./useFocusable-D4tCxmX8.js";import"./VisuallyHidden-GyOwAGCf.js";import"./useFieldComponent-C26zWsIy.js";import"./useMakeFocusable-B3NqPQRX.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-Ck8xqn1I.js";import"./AlertIcon-DudqDlux.js";import"./dynamic-BrVBKZhY.js";import"./useRef-rZqwvUwE.js";import"./Action-DCncdG_g.js";import"./context-DTty7kAQ.js";import"./useStatic-BFe86sAb.js";import"./browser-BVqvvpC_.js";import"./getActionGroupSlot-Cs9bLGLr.js";import"./ButtonView-8r0sbocL.js";import"./Text-BKhP8tr9.js";import"./EmulatedBoldText-Cmh7SSTW.js";import"./LoadingSpinner-q7Sk6MlY.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DvXEMDiE.js";import"./ProgressBar-DS8uskay.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

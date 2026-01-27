import{j as r,r as g}from"./iframe-kP2HEfFS.js";import{R as t}from"./Rating-RVe_9Nh6.js";import{L as l}from"./Label-o-9raADe.js";import{F as R}from"./FieldError-CJUuAB6W.js";import{u as h,F as b,t as F}from"./ResetButton-CSTft9O0.js";import{B as f}from"./Button-D2SKyW-T.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-3wMfkhbI.js";import"./flowComponent-Cn3sZuxr.js";import"./index-Bh9kNCDS.js";import"./index-Gr0VxzdI.js";import"./remote-7RhInu5H.js";import"./useLocalizedStringFormatter-C8FP4Fke.js";import"./context-C1J5EAXU.js";import"./RadioGroup-NxAvrsy3.js";import"./utils-C12UPk0k.js";import"./FieldError-BL6ZnBFp.js";import"./Text-Bt0sFzeR.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-D51h5Mwy.js";import"./useLabel-07phmwB_.js";import"./Label-B6lEhZqq.js";import"./Hidden-6OIrW1CO.js";import"./SelectionIndicator-v5-gN0xn.js";import"./useFormValidation-CKIaBDhF.js";import"./useFocus-C5lTzrJh.js";import"./useControlledState-K2EmMrc1.js";import"./FocusScope-BDiazwAe.js";import"./useFocusRing-CKDLKfs4.js";import"./useFormReset-BTQYEics.js";import"./usePress-Zu3olfM4.js";import"./useFocusable-B7yvIBUC.js";import"./VisuallyHidden-BxKC931y.js";import"./useFieldComponent-D28HcwQQ.js";import"./useMakeFocusable-DTcEo_iv.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-Dm8o5yyE.js";import"./AlertIcon-BKaF02an.js";import"./dynamic-Bb3YYypk.js";import"./useRef-Ddb8Xdr-.js";import"./Action-DkWPc0_f.js";import"./context-Dy6MMTPO.js";import"./useStatic-D099is7R.js";import"./browser-CLBqp6VR.js";import"./getActionGroupSlot-DpvImWBQ.js";import"./ButtonView-B-wfMpgB.js";import"./Text-DmTsXHLN.js";import"./EmulatedBoldText-DuA7OeuM.js";import"./LoadingSpinner-DqLZcArG.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BPAnAcar.js";import"./ProgressBar-BJr25bRm.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

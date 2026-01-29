import{j as r,r as g}from"./iframe-Bj8CIgLy.js";import{R as t}from"./Rating-Bi9LZ8oj.js";import{L as l}from"./Label-DCfOJgVU.js";import{F as R}from"./FieldError-Dbjs-A5K.js";import{u as h,F as b,t as F}from"./ResetButton-5FZ7-Sc5.js";import{B as f}from"./Button-b_60CJFp.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-KvO0562x.js";import"./flowComponent-BPltRtpV.js";import"./index-BeouMsqR.js";import"./index-DYakERwo.js";import"./remote-ChNLl0N8.js";import"./useLocalizedStringFormatter-B8a-qUY7.js";import"./context-RK9vgtK2.js";import"./RadioGroup-COV71R1p.js";import"./utils-D41FTHpf.js";import"./FieldError-cTj-tlV1.js";import"./Text-CVMu3Bei.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-CdHdNrpC.js";import"./useLabel-j5JIlG5u.js";import"./Label-BAoc3jdD.js";import"./Hidden-DWJk28Vx.js";import"./SelectionIndicator-DBsPgOzp.js";import"./useFormValidation-CuYWsRMr.js";import"./useFocus-BJLP4kuV.js";import"./useFocusRing-0HtVE4-I.js";import"./useControlledState-C0IHmt74.js";import"./FocusScope-DNVRBXI-.js";import"./useFormReset-DPVe5t_C.js";import"./usePress-BLrqdZMB.js";import"./useFocusable-DNf9Dm0r.js";import"./VisuallyHidden-D10Fyvvv.js";import"./useFieldComponent-DFS7CEov.js";import"./useMakeFocusable-D2WqMYFi.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-Bt0Daj0V.js";import"./AlertIcon-Bub-4wJk.js";import"./dynamic-DEq-wVmB.js";import"./useRef-CJxAjFY9.js";import"./Action-DbcbId4I.js";import"./context-CihUwagI.js";import"./useStatic-BJFVwiuT.js";import"./browser-Rl4DjN4H.js";import"./getActionGroupSlot-BcyfBjwk.js";import"./ButtonView-DoUQTLRD.js";import"./Text-BbFFlg8m.js";import"./EmulatedBoldText-CYAzRgIu.js";import"./LoadingSpinner-Bl0_iJOm.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Kf97rzrP.js";import"./ProgressBar-CzzSLaP3.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

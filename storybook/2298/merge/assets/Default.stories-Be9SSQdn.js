import{j as r,r as g}from"./iframe-P-BtG9en.js";import{R as t}from"./Rating-TwC-Qxp-.js";import{L as l}from"./Label-P3DTYY4f.js";import{F as R}from"./FieldError-BKtriW0o.js";import{u as h,F as b,t as F}from"./ResetButton-Bun6L1Pq.js";import{B as f}from"./Button-BDKyvND0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-NSWHp5YX.js";import"./flowComponent-BpgWfaNt.js";import"./index-B7vbb8bW.js";import"./index-BvXbw6Ik.js";import"./remote-CHm5B1ZS.js";import"./useLocalizedStringFormatter-DMM5tmNP.js";import"./context-DgQkEglP.js";import"./RadioGroup-R0Qm9Iid.js";import"./utils-B0ReHH5J.js";import"./FieldError-C3DeF1uc.js";import"./Text-Cuc5X3SS.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-D5TX54v-.js";import"./useLabel-DQN1qZoA.js";import"./Label-Dy2C0Oyl.js";import"./Hidden-_62Uq0iE.js";import"./SelectionIndicator-DSNo1Dq6.js";import"./useFormValidation-ePPiHYYq.js";import"./useFocus-CaaZ7Vn6.js";import"./useFocusRing-CySMD5sm.js";import"./useControlledState-CF2gRUje.js";import"./FocusScope-DOTGny1g.js";import"./useFormReset-EHJI2p2K.js";import"./usePress-DdsYmr0S.js";import"./useFocusable-BT9LLfcI.js";import"./VisuallyHidden-DdvDFx4J.js";import"./useFieldComponent-DCdIumPj.js";import"./useMakeFocusable-Bzq5Sno7.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-B793ATvK.js";import"./AlertIcon-D-lULPsb.js";import"./dynamic-NZeYY7PB.js";import"./useRef-Vl5p17w5.js";import"./Action-BXaB41c4.js";import"./context-DzeViRSK.js";import"./useStatic-CkdzkAMF.js";import"./browser-CAs7Gyq6.js";import"./getActionGroupSlot-CoTv8oDB.js";import"./ButtonView-CwOL1ZjU.js";import"./Text-WQ3bdi2b.js";import"./EmulatedBoldText-Dkyjs4gQ.js";import"./LoadingSpinner-CEdiZrnd.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CkYmzEte.js";import"./ProgressBar-DT6X9kMn.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

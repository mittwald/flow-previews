import{r as g,j as r}from"./iframe-CtuK0rEJ.js";import{R as t}from"./Rating-DTTHUCXs.js";import{L as l}from"./Label-Cngj9T_J.js";import{F as R}from"./FieldError-BKJxUnBZ.js";import{u as h,F as b,t as F}from"./ResetButton-BX7hRNPH.js";import{B as f}from"./Button-CC2cGGC1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-BSe4G4Pm.js";import"./flowComponent-BsiSvDfm.js";import"./index-DyfnOEiT.js";import"./index-DPf65gvx.js";import"./remote-DD8nhYq_.js";import"./useLocalizedStringFormatter-C0fwd0wV.js";import"./context-BLHFXQwL.js";import"./RadioGroup-LZWZCAvs.js";import"./utils-C1DNWP44.js";import"./FieldError-AgjktxA6.js";import"./Text-DmIZo_mX.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-8SXxse9a.js";import"./useLabel-DJNpTGh1.js";import"./Label-BIhxl5Mj.js";import"./Hidden-lRNITHFC.js";import"./SelectionIndicator-Ds2JAiCA.js";import"./useFormValidation-uULaRcd4.js";import"./useFocus-N-Pc0sLJ.js";import"./useFocusRing-Dq2x8hiG.js";import"./useControlledState-Cc_BEFH0.js";import"./FocusScope-Cm3IhtBV.js";import"./useFormReset-C6F9Oqzr.js";import"./usePress-Da2cRPrr.js";import"./useFocusable-AhKszEdS.js";import"./VisuallyHidden-D1Q1E2fL.js";import"./useFieldComponent-CPjzSNK0.js";import"./useMakeFocusable-UqfX6KFQ.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-i0FuOWey.js";import"./AlertIcon-CPMEIwAr.js";import"./dynamic-6fOzfTlj.js";import"./useRef-C7qv1QkI.js";import"./Action-PwkWFif3.js";import"./context-CuLUjLGN.js";import"./useStatic-M0CnbsK2.js";import"./browser-Up8UMddv.js";import"./getActionGroupSlot-B6ptHBUs.js";import"./ButtonView-I97CEkNt.js";import"./Text-CyAseKfN.js";import"./EmulatedBoldText-BeUk81Jn.js";import"./LoadingSpinner-CJNtrFTB.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CSRC_w1a.js";import"./ProgressBar-D8lgnq4k.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

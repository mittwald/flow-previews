import{j as r,r as g}from"./iframe-XxUhdOIM.js";import{R as t}from"./Rating-CgS7bFlf.js";import{L as l}from"./Label-C4UQ1ENb.js";import{F as R}from"./FieldError-DsyIPYpb.js";import{u as h,F as b,t as F}from"./ResetButton-DUwQ9l1M.js";import{B as f}from"./Button-CGELadBW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-HmbpUhBv.js";import"./flowComponent-CoC0P7KZ.js";import"./index-CHNtIY8f.js";import"./index-BSqFjc_t.js";import"./remote-6r6BNiZ9.js";import"./useLocalizedStringFormatter-C41xTvax.js";import"./context-DoTCerLu.js";import"./RadioGroup-1npHvgfX.js";import"./utils-BCq0Cvc3.js";import"./FieldError-D3qoIyxA.js";import"./Text-CyqmbAxA.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-COPMshHH.js";import"./useLabel-BmkrUKzN.js";import"./Label-ChQ-hUoB.js";import"./Hidden-Bb8MHfhN.js";import"./SelectionIndicator-BvCJtDxS.js";import"./useFormValidation-nWIFBTgB.js";import"./useFocus-EZLK-muK.js";import"./useFocusRing-B4cqEnOC.js";import"./useControlledState-BjbUFAiJ.js";import"./FocusScope-Bd3CxSOo.js";import"./useFormReset-CjY5_fDt.js";import"./usePress-C6bNQEHg.js";import"./useFocusable-BMaOCfpv.js";import"./VisuallyHidden-BH7c3L8h.js";import"./useFieldComponent-DmQ0NGCO.js";import"./useMakeFocusable-DQ58jF_W.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-D9H4kctD.js";import"./AlertIcon-B-eIAqAY.js";import"./dynamic-DlcFrL20.js";import"./useRef-DGklHaj5.js";import"./Action-uIBgr6h7.js";import"./context-DxgidNIJ.js";import"./useStatic-BtKbO9c7.js";import"./browser-DmOXQPuo.js";import"./getActionGroupSlot-UY0N-ZIa.js";import"./ButtonView-BOkSZ7Ty.js";import"./Text-Cnwgd4MT.js";import"./EmulatedBoldText-p9aRLsBg.js";import"./LoadingSpinner-eRWTE9TH.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C5sfG3Jr.js";import"./ProgressBar-DoY0_w5k.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

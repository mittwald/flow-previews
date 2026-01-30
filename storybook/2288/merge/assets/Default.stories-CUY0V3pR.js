import{j as r,r as g}from"./iframe-DkT4d7Ot.js";import{R as t}from"./Rating-CP4Cf0jz.js";import{L as l}from"./Label-BjxJIvYs.js";import{F as R}from"./FieldError-BUQThHV3.js";import{u as h,F as b,t as F}from"./ResetButton-DTP7uuAe.js";import{B as f}from"./Button-B3KXRm13.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-K6asu7lY.js";import"./flowComponent-CHs1XVIh.js";import"./index-BIhgoFLA.js";import"./index-CA8YyeFM.js";import"./remote-B8vjNxTl.js";import"./useLocalizedStringFormatter-D2x8dv8x.js";import"./context-BhNnKB4w.js";import"./RadioGroup-Cx-yRr8y.js";import"./utils-up3lG_mb.js";import"./FieldError-BIqVWLlF.js";import"./Text-C_PPHbON.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-CweUcSb7.js";import"./useLabel-D_TjIfTk.js";import"./Label-Bfb68HPn.js";import"./Hidden-B_u69euq.js";import"./SelectionIndicator-B0xJhgeU.js";import"./useFormValidation-UULz_Uq_.js";import"./useFocus-Bn0bRGba.js";import"./useFocusRing-Bn6GFEBK.js";import"./useControlledState-B7-cf8QC.js";import"./FocusScope-D5JuRjyj.js";import"./useFormReset-DMhhuJvy.js";import"./usePress-loL-ySzv.js";import"./useFocusable-oFwI_mrj.js";import"./VisuallyHidden-BhWvypZu.js";import"./useFieldComponent-FHnXwL7q.js";import"./useMakeFocusable-DLbl9rFj.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-n1a7254W.js";import"./AlertIcon-CGIGsQoy.js";import"./dynamic-AbOzqnd1.js";import"./useRef-CEFt68nY.js";import"./Action-BKfs-erd.js";import"./context-CpYzats6.js";import"./useStatic-DmZQ70we.js";import"./browser-CwBpRuL-.js";import"./getActionGroupSlot-DACNE6Gp.js";import"./ButtonView-C05B8H85.js";import"./Text-CN56Aq7p.js";import"./EmulatedBoldText-Auc0aNAR.js";import"./LoadingSpinner-DZGxTG7I.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DKCc9Jm1.js";import"./ProgressBar-B_-OWJV1.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

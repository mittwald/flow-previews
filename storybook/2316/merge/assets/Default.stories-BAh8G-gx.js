import{r as g,j as r}from"./iframe-B___tkgA.js";import{R as t}from"./Rating-B5rfV623.js";import{L as l}from"./Label-WD9nd_On.js";import{F as R}from"./FieldError-DrmvSGqW.js";import{u as h,F as b,t as F}from"./ResetButton-Crujzy8J.js";import{B as f}from"./Button-CK4qYUON.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-DnK3ATSm.js";import"./flowComponent-Bo9LBx3J.js";import"./index-CJe1Xv2T.js";import"./index-2yYueaxI.js";import"./remote-CwYVL4Pl.js";import"./useLocalizedStringFormatter-BO-JJMTJ.js";import"./context-CHjly9N5.js";import"./RadioGroup-C6-pZtvo.js";import"./utils-BoKG2kRw.js";import"./FieldError-Bxvpebgp.js";import"./Text-CbxRuAhG.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Bd7gFKVi.js";import"./useLabel-CH6QmtjC.js";import"./Label-BwlZgh8W.js";import"./Hidden-DKsxRYjN.js";import"./SelectionIndicator-D7aQ_5Xi.js";import"./useFormValidation-DPy8gvTm.js";import"./useFocus-x-GTmi1B.js";import"./useFocusRing-BdE9QsVo.js";import"./useControlledState-xG-Gpz3Z.js";import"./FocusScope-6XhI78W1.js";import"./useFormReset-BMzMnmaN.js";import"./usePress-XNzvlEPV.js";import"./useFocusable-DdN6L3mC.js";import"./VisuallyHidden-feej_kfu.js";import"./useFieldComponent-vfbWFIJK.js";import"./useMakeFocusable-EEa4YC-c.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BYyQ41f3.js";import"./AlertIcon-COjYyYJX.js";import"./dynamic-BEuCOou2.js";import"./useRef-CEF838Jv.js";import"./Action-DRwD3AMr.js";import"./context-iZF9qbeo.js";import"./useStatic-DSdFfo4Y.js";import"./browser-C6gsgKxf.js";import"./getActionGroupSlot-CLc7h3ns.js";import"./ButtonView-B7YCzKos.js";import"./Text-C5KW7r-3.js";import"./EmulatedBoldText-BcNjSABl.js";import"./LoadingSpinner-gELkMREc.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-dgLzajPx.js";import"./ProgressBar-CdmwSyiz.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

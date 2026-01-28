import{j as r,r as g}from"./iframe-Cx5kJuuA.js";import{R as t}from"./Rating-DN5vW6rZ.js";import{L as l}from"./Label-Da9GdDN8.js";import{F as R}from"./FieldError-BCxxTn6h.js";import{u as h,F as b,t as F}from"./ResetButton-CwpPjJvG.js";import{B as f}from"./Button-OP9_q8AM.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-BDhnLpaV.js";import"./flowComponent-CLOWDrbo.js";import"./index-DK83sfEz.js";import"./index-BqoyVlZ7.js";import"./remote-C9UyjJTP.js";import"./useLocalizedStringFormatter-CIuieC62.js";import"./context-CpMzWCEP.js";import"./RadioGroup-DTrxChwX.js";import"./utils-Nk4paMN-.js";import"./FieldError-UHRLTLut.js";import"./Text-CA_aswYo.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BHxxWVUu.js";import"./useLabel-B4Wunpgz.js";import"./Label-DPB2sN32.js";import"./Hidden-BIWwaIRP.js";import"./SelectionIndicator-Dp8Rqhcc.js";import"./useFormValidation-CmFpdOnE.js";import"./useFocus-DbL3EqSH.js";import"./useFocusRing-idhb0ztA.js";import"./useControlledState-D1xezhK5.js";import"./FocusScope-wgzi2f-G.js";import"./useFormReset-roVUmu5c.js";import"./usePress-LbgF0OFY.js";import"./useFocusable-BtlUXhgP.js";import"./VisuallyHidden-i8gu61hs.js";import"./useFieldComponent-DpBpP7du.js";import"./useMakeFocusable-CUyUw7BO.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BwdeDomp.js";import"./AlertIcon-DvMPToF_.js";import"./dynamic-RASAkScQ.js";import"./useRef-BzM_ReLH.js";import"./Action-CnBQ_Jk4.js";import"./context-BmiLu6TN.js";import"./useStatic-C9KIiqww.js";import"./browser-D-pbaBij.js";import"./getActionGroupSlot-BGN_K6ot.js";import"./ButtonView-CiX34n3K.js";import"./Text-C98Jvmov.js";import"./EmulatedBoldText--C3vSC84.js";import"./LoadingSpinner-BWQXNo8s.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BlKGeUP9.js";import"./ProgressBar-DpP1vNCR.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

import{j as r,r as g}from"./iframe-BBHdjMJ6.js";import{R as t}from"./Rating-C8NGb7df.js";import{L as l}from"./Label-D4z-eNsD.js";import{F as R}from"./FieldError-DdPPmb_Z.js";import{u as h,F as b,t as F}from"./ResetButton-CsgBdy31.js";import{B as f}from"./Button-P5io5pgW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-CyXtdbqA.js";import"./flowComponent-Dr_ijNQm.js";import"./index-DnL9UocU.js";import"./index-FWsSj9e8.js";import"./remote-BykRkK4-.js";import"./useLocalizedStringFormatter-BwLVFU66.js";import"./context-XjgBcoVm.js";import"./RadioGroup-DCdO6NqB.js";import"./utils-gePwv3Li.js";import"./FieldError-D_l7_28D.js";import"./Text-CkngT02A.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Dur_LiI2.js";import"./useLabel-CDbjeNSC.js";import"./Label-Cq91lcPj.js";import"./Hidden-DJEpRFXv.js";import"./SelectionIndicator-DJhqJXB-.js";import"./useFormValidation-jj6Fwru_.js";import"./useFocus-CRClO8Jv.js";import"./useFocusRing-ClLYF0Wy.js";import"./useControlledState-CTrYQ-In.js";import"./FocusScope-0pM5bnV4.js";import"./useFormReset-CMCffA9I.js";import"./usePress-BicAkDgM.js";import"./useFocusable-CfkxnlZA.js";import"./VisuallyHidden-D-7oSl-x.js";import"./useFieldComponent-DcHfvLKR.js";import"./useMakeFocusable-DtUBRIYm.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-Du4ye3-W.js";import"./AlertIcon-BGgK2Oqf.js";import"./dynamic-Cm-8a2Jt.js";import"./useRef-CBW8wZsc.js";import"./Action-qWLGDSFj.js";import"./context-DiIk_s_n.js";import"./useStatic-C9-mjYGz.js";import"./browser-BpCzgQab.js";import"./getActionGroupSlot-DTels04I.js";import"./ButtonView-CbJs68it.js";import"./Text--O-2RTYx.js";import"./EmulatedBoldText-DKBJ0QzH.js";import"./LoadingSpinner-Crr5qNPb.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DU6B0w55.js";import"./ProgressBar-C-Wzcy4_.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

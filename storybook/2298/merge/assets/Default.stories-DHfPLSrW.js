import{j as r,r as g}from"./iframe-DITN2CQJ.js";import{R as t}from"./Rating-BcD6YqnY.js";import{L as l}from"./Label-DJUexJHI.js";import{F as R}from"./FieldError-B_BzuzIl.js";import{u as h,F as b,t as F}from"./ResetButton-DxGsaWiK.js";import{B as f}from"./Button-CLzuKoaU.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-CkCNWluG.js";import"./flowComponent-dTWTX0ol.js";import"./index-DMvUg0Ng.js";import"./index-CwMYtruy.js";import"./remote-C6sL0hfk.js";import"./useLocalizedStringFormatter-Bu36a-Wr.js";import"./context-DSmvJi-9.js";import"./RadioGroup-Cf0urrx4.js";import"./utils-BKdkt1x6.js";import"./FieldError-DyUcL9VR.js";import"./Text-C3mpKQD6.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-CKWsALrB.js";import"./useLabel-DxgBaz-V.js";import"./Label-B4MEtlDn.js";import"./Hidden-C_aQw1AA.js";import"./SelectionIndicator-tBe1rngb.js";import"./useFormValidation-PWdhcFqO.js";import"./useFocus-jV9bksDI.js";import"./useFocusRing-DGbEI6JP.js";import"./useControlledState-CEL2ngQO.js";import"./FocusScope-1T1zyEBb.js";import"./useFormReset-DRsSvhwB.js";import"./usePress-Bo3aLfgI.js";import"./useFocusable-DLFLzCMb.js";import"./VisuallyHidden-Mqey0SE0.js";import"./useFieldComponent-CFjzq3ou.js";import"./useMakeFocusable-B4ApSvkk.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-Kmcv7hqN.js";import"./AlertIcon-C5wCr6jC.js";import"./dynamic-BTg8la0V.js";import"./useRef-DMCflsxx.js";import"./Action-2qaAsuOc.js";import"./context-DvDSM24h.js";import"./useStatic-CpFYvUzY.js";import"./browser-BAwbicjx.js";import"./getActionGroupSlot-ZZyd_ZT4.js";import"./ButtonView-Cvj-tSsY.js";import"./Text-CADg3_Hr.js";import"./EmulatedBoldText-BtAVmnSC.js";import"./LoadingSpinner-BNTqIab3.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-9nZEjgFJ.js";import"./ProgressBar-DwMRU30B.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

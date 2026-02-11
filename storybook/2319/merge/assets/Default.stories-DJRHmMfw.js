import{r as g,j as r}from"./iframe-lFICOVMG.js";import{R as t}from"./Rating-I17PoFuK.js";import{L as l}from"./Label-WsCexfXL.js";import{F as R}from"./FieldError-Ba2n5nZe.js";import{u as h,F as b,t as F}from"./ResetButton-DK_60aBr.js";import{B as f}from"./Button-Cf-KBW4_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-4K-DqIQK.js";import"./flowComponent-C618gI1l.js";import"./index-C8_VRp74.js";import"./index-DUpWbeKv.js";import"./remote-CRPYY61Z.js";import"./useLocalizedStringFormatter-D7SPmL6j.js";import"./context-Sy7BhgRt.js";import"./RadioGroup-DTFiNMMn.js";import"./utils-DhhSlmx9.js";import"./FieldError-DXs5idvC.js";import"./Text-CinvLCxd.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DIwrOEgx.js";import"./useLabel-A9ok_7_u.js";import"./Label-nxHLTLm-.js";import"./Hidden--bJJbaK3.js";import"./SelectionIndicator-CW-bKP1t.js";import"./useFormValidation-BdcfYetn.js";import"./useFocus-fqIQg8qR.js";import"./useFocusRing-DeOtkCiq.js";import"./useControlledState-BZJPMeD2.js";import"./FocusScope-CyJq-kGM.js";import"./useFormReset-CPUmIViP.js";import"./usePress-BW_bFHXv.js";import"./useFocusable-ByJ0NNOg.js";import"./VisuallyHidden-BALX4uV5.js";import"./useFieldComponent-70N6l4jn.js";import"./useMakeFocusable-crCL21XI.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-D8XKoaWc.js";import"./AlertIcon-BTBT69bo.js";import"./dynamic-0KpQiqy3.js";import"./useRef-E2-1OeOR.js";import"./Action-Dv_Htl--.js";import"./context-ClWR88NP.js";import"./useStatic-DBynbgAg.js";import"./browser-CN95VINd.js";import"./getActionGroupSlot-Q4yoFQDr.js";import"./ButtonView-CpDocYTn.js";import"./Text-BQwiR71m.js";import"./EmulatedBoldText-BsTUWTNh.js";import"./LoadingSpinner-DqvYatLg.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dv_7IODh.js";import"./ProgressBar-CyrV5_rh.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

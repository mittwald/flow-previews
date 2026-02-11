import{r as g,j as r}from"./iframe-wn9t8CHT.js";import{R as t}from"./Rating-Dde4kMJH.js";import{L as l}from"./Label-5bTXkWLT.js";import{F as R}from"./FieldError-C9AtZQjZ.js";import{u as h,F as b,t as F}from"./ResetButton-DU2Rzvvh.js";import{B as f}from"./Button-CkMrcy8B.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-B-Wnft1S.js";import"./flowComponent-CQL_Hol9.js";import"./index-Daog0jgF.js";import"./index-DGBNuX5e.js";import"./remote-BKPU2Q50.js";import"./useLocalizedStringFormatter-BW5ArTpm.js";import"./context-DUIKEoYM.js";import"./RadioGroup-BLa8Kveb.js";import"./utils-BBqjM3mV.js";import"./FieldError-BriaHAsp.js";import"./Text-CigTZLQg.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BpC7EEKj.js";import"./useLabel-CfKSfnQU.js";import"./Label-vEkUlCU_.js";import"./Hidden-B0JF82fI.js";import"./SelectionIndicator-Drl_jI2J.js";import"./useFormValidation-DyGMCXIt.js";import"./useFocus-Dfm-Pt4C.js";import"./useFocusRing-4Aw-0NUA.js";import"./useControlledState-Ckzcuwb2.js";import"./FocusScope-Cff801J_.js";import"./useFormReset-BfPrTbq9.js";import"./usePress-febwKXtN.js";import"./useFocusable-MJ0CU3Gf.js";import"./VisuallyHidden-Rhd9Lwfr.js";import"./useFieldComponent-CuQvVX64.js";import"./useMakeFocusable-DtmUrEx7.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-G52nApD-.js";import"./AlertIcon-CswpW_U3.js";import"./dynamic-Ce3zwrtf.js";import"./useRef-hqPWAoQM.js";import"./Action-CYz45Lq2.js";import"./context-DvLe6BQ8.js";import"./useStatic-Dq0n5AIR.js";import"./browser-C4GSjbSD.js";import"./getActionGroupSlot-DC-fIdha.js";import"./ButtonView-B4rdbM1Q.js";import"./Text-vlZ105c0.js";import"./EmulatedBoldText-BRurVn-6.js";import"./LoadingSpinner-C5pntlan.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C_8bimI7.js";import"./ProgressBar-DYDTpv9y.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

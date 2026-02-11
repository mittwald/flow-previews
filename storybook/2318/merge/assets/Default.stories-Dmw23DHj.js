import{r as g,j as r}from"./iframe-CNIcTJYh.js";import{R as t}from"./Rating-CLzEvqh-.js";import{L as l}from"./Label-Dk1BsiHf.js";import{F as R}from"./FieldError-CRJL1-ZW.js";import{u as h,F as b,t as F}from"./ResetButton-B90bKA5P.js";import{B as f}from"./Button-DAjUCwya.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-DfNRCo5R.js";import"./flowComponent-60nesrge.js";import"./index-D3p32_5k.js";import"./index-UhPRO7XN.js";import"./remote-yIvwWX6j.js";import"./useLocalizedStringFormatter-Rr_25XDQ.js";import"./context-C-_0n7Mf.js";import"./RadioGroup-CysPN6QE.js";import"./utils-BMrW0rs-.js";import"./FieldError-C-WtBUhj.js";import"./Text-D2vn8IUC.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DFzq_6cf.js";import"./useLabel-OR8aG57O.js";import"./Label-T_N4SAco.js";import"./Hidden-CRwhep7p.js";import"./SelectionIndicator-DvRn40OS.js";import"./useFormValidation-Cl_ELzYY.js";import"./useFocus-Z0zsAUPg.js";import"./useFocusRing-DW-rJUC8.js";import"./useControlledState-aVbBpOCK.js";import"./FocusScope-BYGRF7Vw.js";import"./useFormReset-ClGEeDTe.js";import"./usePress-YapnYrtx.js";import"./useFocusable-pw23kKVy.js";import"./VisuallyHidden-BJLw9ne3.js";import"./useFieldComponent-BcSx3cQM.js";import"./useMakeFocusable-CRnFMBmj.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-C0QdtU2r.js";import"./AlertIcon-CQAKF3sa.js";import"./dynamic-CfddFL0U.js";import"./useRef-DPaH8BEG.js";import"./Action-CB-yo4he.js";import"./context-CHGIk6I_.js";import"./useStatic-J4GDP0vf.js";import"./browser-e5gpn1Ib.js";import"./getActionGroupSlot-BroJtED_.js";import"./ButtonView-f9GsubAG.js";import"./Text-6t0QtAeQ.js";import"./EmulatedBoldText-Cp_XieAh.js";import"./LoadingSpinner-D1M8B3tV.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BxwMmJez.js";import"./ProgressBar-2k-c3px2.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

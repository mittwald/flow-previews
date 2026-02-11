import{r as g,j as r}from"./iframe-BBLgQM8W.js";import{R as t}from"./Rating-tY_Jh7iD.js";import{L as l}from"./Label-BQdcxq0o.js";import{F as R}from"./FieldError-DAXPSsyp.js";import{u as h,F as b,t as F}from"./ResetButton-BLMx4wj7.js";import{B as f}from"./Button-B_d3OkSN.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-CmmOPW6y.js";import"./flowComponent-D-0ABlaS.js";import"./index-DIoQv3Yu.js";import"./index-CC4aSS2B.js";import"./remote-Vne7hGXH.js";import"./useLocalizedStringFormatter-ndUPvi50.js";import"./context-CbfWsJFN.js";import"./RadioGroup-DFNZdgI0.js";import"./utils-Bzwl2RbX.js";import"./FieldError-CxkPyMXc.js";import"./Text-C-vmddAy.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-WOMIl9aS.js";import"./useLabel-65Ti_lew.js";import"./Label-DjOsKLLo.js";import"./Hidden-CcHv8P9l.js";import"./SelectionIndicator-CxHxHFYG.js";import"./useFormValidation-DAic1NnU.js";import"./useFocus-atMo-T8H.js";import"./useFocusRing-XNEcT-2-.js";import"./useControlledState-Cx-WZngS.js";import"./FocusScope-BuBo0u5V.js";import"./useFormReset-4n7xFzn-.js";import"./usePress-DXblhpXj.js";import"./useFocusable-BlOp3ek5.js";import"./VisuallyHidden-DReBsRIr.js";import"./useFieldComponent-BfDJ4pJf.js";import"./useMakeFocusable-DHFk8gCs.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-B4ActtEe.js";import"./AlertIcon-CiXM2S_P.js";import"./dynamic-De16JUVi.js";import"./useRef-BADtkrSm.js";import"./Action-vczYGY_C.js";import"./context-On8QMk-S.js";import"./useStatic-DeJLZZ0I.js";import"./browser-DI7yhJk5.js";import"./getActionGroupSlot-BNVlq3z6.js";import"./ButtonView-BpODKVdh.js";import"./Text-DyzGue3k.js";import"./EmulatedBoldText-BZaUBYn6.js";import"./LoadingSpinner-CfkxbS8M.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-M7FHgNE8.js";import"./ProgressBar-C8xfeLyO.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

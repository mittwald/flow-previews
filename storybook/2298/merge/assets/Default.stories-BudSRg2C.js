import{j as r,r as g}from"./iframe-Cs0JkT9Q.js";import{R as t}from"./Rating-CFxYYzdz.js";import{L as l}from"./Label-CHxievOH.js";import{F as R}from"./FieldError-BZN8rJUk.js";import{u as h,F as b,t as F}from"./ResetButton-DV0e7N6e.js";import{B as f}from"./Button-BS2N-oft.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-wVjX2Q6D.js";import"./flowComponent-DnhH9c8U.js";import"./index-CF0rrQKO.js";import"./index-BDmaB34G.js";import"./remote-bYaNzVPL.js";import"./useLocalizedStringFormatter-CQ-MJvxZ.js";import"./context-CtFpEE6p.js";import"./RadioGroup-Bmdw4-Ow.js";import"./utils-BvIIGzqK.js";import"./FieldError-zGZXG0KM.js";import"./Text-Dd1xy9_M.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-D-8VlTBZ.js";import"./useLabel-CfslMsP4.js";import"./Label-CQSgfv4f.js";import"./Hidden-BvtrxWwl.js";import"./SelectionIndicator-36GmvFRO.js";import"./useFormValidation-CaaIEsuY.js";import"./useFocus-DNqIDWYA.js";import"./useFocusRing-Cldy4Slr.js";import"./useControlledState-DrKGwN1m.js";import"./FocusScope-BXTpAFiu.js";import"./useFormReset-5IC1Q0ld.js";import"./usePress-y02TS-RC.js";import"./useFocusable-Cn5DQ2tI.js";import"./VisuallyHidden-BGmnCuXu.js";import"./useFieldComponent-BGOnrhQA.js";import"./useMakeFocusable-3O9OP7eh.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BA7qstOH.js";import"./AlertIcon-Dko-1oCR.js";import"./dynamic-DZ8udFFw.js";import"./useRef-CLYklu2m.js";import"./Action-8KnSiAHu.js";import"./context-DmALYfE_.js";import"./useStatic-BOH6EX5_.js";import"./browser-Cphwy2_f.js";import"./getActionGroupSlot-BG1YGDa-.js";import"./ButtonView-DtNenCUs.js";import"./Text-l9LtklMs.js";import"./EmulatedBoldText-C1XQaUUR.js";import"./LoadingSpinner-FnXgTY4T.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CoGTRo7z.js";import"./ProgressBar-CG2kSUer.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

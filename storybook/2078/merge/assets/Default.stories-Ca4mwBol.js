import{j as r,r as g}from"./iframe-BoA7YzYm.js";import{R as t}from"./Rating-_1UEddpQ.js";import{L as l}from"./Label-Cjbbehtk.js";import{F as R}from"./FieldError-CkVfHT3s.js";import{u as h,F as b,t as F}from"./Form-DLwGH580.js";import"./ResetButton-BTdRGMm7.js";import{B as f}from"./Button-BKFimoLG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-Cm4x5FHH.js";import"./flowComponent-rXkph_fu.js";import"./index-DXjuNE_i.js";import"./index-C8IfwtBf.js";import"./remote-W2BsjsJq.js";import"./useLocalizedStringFormatter-BmdJpMCj.js";import"./context-Bl3IUlM5.js";import"./RadioGroup-e7qeBvWt.js";import"./utils-CbCfmbCJ.js";import"./FieldError-DIrg2qiC.js";import"./Text-DzES3Axw.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-DOX3bg_5.js";import"./useLabel-BJjmJvn4.js";import"./Label-CIY5uMr1.js";import"./Hidden-COFYe48C.js";import"./SelectionIndicator-fGxLhP25.js";import"./useFormValidation-D99W395Z.js";import"./useFocus-0w8IxMP9.js";import"./useControlledState-Bptfp7LK.js";import"./FocusScope-ewaHP7Wk.js";import"./useFocusRing-QIpAUb-m.js";import"./useFormReset-Lf5kfq5Z.js";import"./usePress-VWzB255U.js";import"./useFocusable-03sk398M.js";import"./VisuallyHidden-ulLndJxN.js";import"./useFieldComponent-DkEUVrE8.js";import"./useMakeFocusable-7sfTEwK_.js";import"./Label.module-CUYTf9Jc.js";import"./dynamic-DYpyzP7H.js";import"./browser--2iaZute.js";import"./Action-DzFCrVY1.js";import"./context-Cs30ZfjP.js";import"./useStatic-BAyQxveA.js";import"./getActionGroupSlot-Cyrp6itk.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-DG5Ef12W.js";import"./Text-Dcujjsgx.js";import"./EmulatedBoldText-B6CuOWoW.js";import"./LoadingSpinner-CJmPD5N7.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BSweg4_1.js";import"./ProgressBar-0Lez36-3.js";import"./NumberFormatter-DNR9MAW-.js";const fr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const xr=["Default","Small","ReadOnly","WithLabel","WithFieldError","WithControlledValue","WithForm"];export{o as Default,s as ReadOnly,a as Small,m as WithControlledValue,i as WithFieldError,p as WithForm,n as WithLabel,xr as __namedExportsOrder,fr as default};

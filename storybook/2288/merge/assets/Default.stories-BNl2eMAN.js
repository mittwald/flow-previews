import{j as r,r as g}from"./iframe-K4Kgzs5d.js";import{R as t}from"./Rating-BVVHyMGv.js";import{L as l}from"./Label-BHhszR2e.js";import{F as R}from"./FieldError-BIdQs2eG.js";import{u as h,F as b,t as F}from"./ResetButton-D8mKGoDl.js";import{B as f}from"./Button-CLdF1xvY.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-BGpHZy47.js";import"./flowComponent-CbChzPG9.js";import"./index-Coqdyp07.js";import"./index-C1Cqv2DY.js";import"./remote-DgH_DZKx.js";import"./useLocalizedStringFormatter-DDBnVsYO.js";import"./context-BHsz5d3m.js";import"./RadioGroup-BkAQkVW1.js";import"./utils--XC5cWbY.js";import"./FieldError-CDQ9nLxM.js";import"./Text-DhK76AHe.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BeqJ_QXS.js";import"./useLabel-IleSnN60.js";import"./Label-Du2Jf-3y.js";import"./Hidden-DNKD1xKj.js";import"./SelectionIndicator-LfvmrL3H.js";import"./useFormValidation-QT1HCjbB.js";import"./useFocus-CfhKlOoP.js";import"./useFocusRing-B7VfbIok.js";import"./useControlledState-UcCiEhN3.js";import"./FocusScope-A43bauPW.js";import"./useFormReset-Bu0cPn5B.js";import"./usePress-Bsv_-vru.js";import"./useFocusable-H6UpmrOx.js";import"./VisuallyHidden-DOfAC-AS.js";import"./useFieldComponent-XDoLqUAT.js";import"./useMakeFocusable-DsE4FH7x.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DseO20UX.js";import"./AlertIcon-Bh0Qf_48.js";import"./dynamic-d4gvBHma.js";import"./useRef-D3B_CRoC.js";import"./Action-D8xdI4CM.js";import"./context-Be9deJEN.js";import"./useStatic-DUE7vdEn.js";import"./browser-9MG5lDdh.js";import"./getActionGroupSlot-DDRLr0XQ.js";import"./ButtonView-CZyRcM7x.js";import"./Text-BPEkrilU.js";import"./EmulatedBoldText-CJYMqRLn.js";import"./LoadingSpinner-Dt3AVNp7.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B9p48ORM.js";import"./ProgressBar-DgQG6kyC.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

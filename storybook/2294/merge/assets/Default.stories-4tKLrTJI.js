import{j as r,r as g}from"./iframe-CvJspzLv.js";import{R as t}from"./Rating-CgWj7q0W.js";import{L as l}from"./Label-DfZOYrgY.js";import{F as R}from"./FieldError-DQmh2MYp.js";import{u as h,F as b,t as F}from"./ResetButton-DDmmyPg8.js";import{B as f}from"./Button-DPWvzJXv.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-BERZaob7.js";import"./flowComponent-BI37IbCZ.js";import"./index-FNnc6AUb.js";import"./index-Df150GVy.js";import"./remote-BqqZGE8h.js";import"./useLocalizedStringFormatter-Clgc-XTf.js";import"./context-CQ77Qkvg.js";import"./RadioGroup-BQeJtRMF.js";import"./utils-BL4G7l_u.js";import"./FieldError-DlX11YEn.js";import"./Text-DHLl2ajF.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-5NfLIR8x.js";import"./useLabel-DfL38sGR.js";import"./Label-BqmnG06H.js";import"./Hidden-Cc0JeUT8.js";import"./SelectionIndicator-DujQOkfZ.js";import"./useFormValidation-CwZe5cTQ.js";import"./useFocus-DbFf9Ktc.js";import"./useFocusRing-L-b3Tn9K.js";import"./useControlledState-DsktkqC9.js";import"./FocusScope-BaZaaiNh.js";import"./useFormReset-ukaISav3.js";import"./usePress-DO5nHrqL.js";import"./useFocusable-C5zGZvV-.js";import"./VisuallyHidden-ksBWJgrQ.js";import"./useFieldComponent-43Bszd6x.js";import"./useMakeFocusable-trVLnprl.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DgMbxot0.js";import"./AlertIcon-C15Ckg1B.js";import"./dynamic-7-1UCAS5.js";import"./useRef-eAOD_JRC.js";import"./useOverlayController-BI0XpmO3.js";import"./context-KW9IbNQ1.js";import"./useStatic-B0ICfBk6.js";import"./Action-CzgX1dLD.js";import"./browser-CBUTrPGa.js";import"./getActionGroupSlot-DdQssjpq.js";import"./ButtonView-ClFFq5XN.js";import"./Text-QUQe3Lsq.js";import"./EmulatedBoldText-DGmAuSbD.js";import"./LoadingSpinner-xAaU4yCn.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DpFh2ewL.js";import"./ProgressBar-CM3jPvpy.js";import"./NumberFormatter-DNR9MAW-.js";const jr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Sr=["Default","Small","ReadOnly","WithLabel","WithFieldError","WithControlledValue","WithForm"];export{o as Default,s as ReadOnly,a as Small,m as WithControlledValue,i as WithFieldError,p as WithForm,n as WithLabel,Sr as __namedExportsOrder,jr as default};

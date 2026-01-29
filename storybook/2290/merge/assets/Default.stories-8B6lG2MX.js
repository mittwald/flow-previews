import{j as r,r as g}from"./iframe-pec-daIN.js";import{R as t}from"./Rating-ISovRAtA.js";import{L as l}from"./Label-CElVOifK.js";import{F as R}from"./FieldError-r6Iz548x.js";import{u as h,F as b,t as F}from"./ResetButton-BHrI3BIr.js";import{B as f}from"./Button-TbsWowXg.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-BNWGnhvf.js";import"./flowComponent-Dhs06173.js";import"./index-DJTXzqQk.js";import"./index-CHD_W7k-.js";import"./remote-CL_x9DF5.js";import"./useLocalizedStringFormatter-DQtSZIdS.js";import"./context-6wXKo3vr.js";import"./RadioGroup-CMNKZ5_u.js";import"./utils-DgvXfbTX.js";import"./FieldError-DRdVsyAa.js";import"./Text-ChVSp7Zj.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-D9urj6j4.js";import"./useLabel-EN4dlqGk.js";import"./Label-BgXd0ScX.js";import"./Hidden-BHo1_O4t.js";import"./SelectionIndicator-Cx4KKVM-.js";import"./useFormValidation-Cw4fPepy.js";import"./useFocus-8lECnDuB.js";import"./useFocusRing-D1bapTtD.js";import"./useControlledState-C8wEjdVb.js";import"./FocusScope-D8KAWd4v.js";import"./useFormReset-DlmAX50c.js";import"./usePress-BXePSkUY.js";import"./useFocusable-DHeceSRU.js";import"./VisuallyHidden-CRkS1ULJ.js";import"./useFieldComponent-BVaTpDhT.js";import"./useMakeFocusable-4t85QaUC.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-XXHjf97y.js";import"./AlertIcon-Df2ALci7.js";import"./dynamic-KYdmGlVp.js";import"./useRef-DUas6rLX.js";import"./Action-8dbKhHvU.js";import"./context-CSF0VmIA.js";import"./useStatic-DtKIUYIw.js";import"./browser-CB013lxp.js";import"./getActionGroupSlot-BTwNrt7T.js";import"./ButtonView-DOrN6z8l.js";import"./Text-KadZ5_Og.js";import"./EmulatedBoldText-CH8TmYXX.js";import"./LoadingSpinner-DJdNJN2d.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BVdTMk7w.js";import"./ProgressBar-BMgVEN8s.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

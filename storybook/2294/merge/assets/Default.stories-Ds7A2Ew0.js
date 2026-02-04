import{j as r,r as g}from"./iframe-RCf6-4YI.js";import{R as t}from"./Rating-C0Ujl-q9.js";import{L as l}from"./Label-BRnkJYm7.js";import{F as R}from"./FieldError-KQe80RuS.js";import{u as h,F as b,t as F}from"./ResetButton-DEh7vI15.js";import{B as f}from"./Button-CRZ6FKVD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-B0h7osnB.js";import"./flowComponent-gpdQqKr8.js";import"./index-DOrHsa1U.js";import"./index-BOW2unrE.js";import"./remote-B1M75xiP.js";import"./useLocalizedStringFormatter-BHr3YdQC.js";import"./context-C_2cqKRl.js";import"./RadioGroup-33rIEYpo.js";import"./utils-2Kt3K5yX.js";import"./FieldError-C_jxYX-6.js";import"./Text-BGlg7n8N.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DuREI75N.js";import"./useLabel-6KWBnhoZ.js";import"./Label-DjMItCLE.js";import"./Hidden-C6k2LQ4g.js";import"./SelectionIndicator-H7CrMh-P.js";import"./useFormValidation-WgNojhOC.js";import"./useFocus-BlmWIWuz.js";import"./useFocusRing-DZgLoJPG.js";import"./useControlledState-BQGvOabU.js";import"./FocusScope-BrE8vcb4.js";import"./useFormReset-CpZDZfD6.js";import"./usePress--XVd0Ch5.js";import"./useFocusable-CGRcLUlH.js";import"./VisuallyHidden-I0X1hTaI.js";import"./useFieldComponent-C9VOsv8D.js";import"./useMakeFocusable-CfvKlLcw.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-C7SuhXn-.js";import"./AlertIcon-C_s3bh0k.js";import"./dynamic-KYjVHqFc.js";import"./useRef-CTBQaoXs.js";import"./useOverlayController-CujP3Hug.js";import"./context-CPkaXk0v.js";import"./useStatic-CutofGFR.js";import"./Action-3k_Z5Vty.js";import"./browser-CrfZ_U78.js";import"./getActionGroupSlot-D-mME3-D.js";import"./ButtonView-Bsuml8lR.js";import"./Text-HaNR6yqL.js";import"./EmulatedBoldText-DexDNb3B.js";import"./LoadingSpinner-Cmdt8GzS.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BjppKy1G.js";import"./ProgressBar-DoFcQr9q.js";import"./NumberFormatter-DNR9MAW-.js";const jr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

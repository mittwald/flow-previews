import{j as r,r as g}from"./iframe-B_TkxfTi.js";import{R as t}from"./Rating-D4Rg6PAO.js";import{L as l}from"./Label-B2z_KUki.js";import{F as R}from"./FieldError-BTHn5en7.js";import{u as h,F as b,t as F}from"./ResetButton-Bdlat21c.js";import{B as f}from"./Button-RJdr80c6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-C-Vc31bm.js";import"./flowComponent-BIniq_3P.js";import"./index-CrnjZTlk.js";import"./index-B6XMVbfI.js";import"./remote-BarzyRQ7.js";import"./useLocalizedStringFormatter-BrZnZPcM.js";import"./context-Bqo0meff.js";import"./RadioGroup-CtEhDXmN.js";import"./utils-CEh0pYpN.js";import"./FieldError-CJvsl-v5.js";import"./Text-CBbNcQAF.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-v3SuS94t.js";import"./useLabel-D2pyCI0i.js";import"./Label-CQzZBBgV.js";import"./Hidden-B4qu7a2v.js";import"./SelectionIndicator-SPKWDPFJ.js";import"./useFormValidation-CPzq_YrX.js";import"./useFocus-CWYeHEaO.js";import"./useFocusRing-Bb1Hz9wK.js";import"./useControlledState-CYdArkzJ.js";import"./FocusScope-BxLI0wxf.js";import"./useFormReset-BlUfWbi8.js";import"./usePress-DqvJUCRP.js";import"./useFocusable-DUuU0sbS.js";import"./VisuallyHidden-BGokW8gm.js";import"./useFieldComponent-C57DTYPz.js";import"./useMakeFocusable-BtSxmITj.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DZAkh8GI.js";import"./AlertIcon-DJdpqIO-.js";import"./dynamic-BusjqWiY.js";import"./useRef-D_3PHrag.js";import"./Action-BwMJcjOW.js";import"./context-D9DgwULu.js";import"./useStatic-cRv7_xgS.js";import"./browser-CLjLvoWS.js";import"./getActionGroupSlot-DtLKsNou.js";import"./ButtonView-RI0SDeqV.js";import"./Text-DZTN4U6B.js";import"./EmulatedBoldText-9YPP8018.js";import"./LoadingSpinner-CjHOYBjr.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-n3CPGMPO.js";import"./ProgressBar-DY5wp8p-.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

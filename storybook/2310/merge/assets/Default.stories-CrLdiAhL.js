import{r as g,j as r}from"./iframe-CH-PGbIe.js";import{R as t}from"./Rating-Dl9a2VFQ.js";import{L as l}from"./Label-BpHmIn39.js";import{F as R}from"./FieldError-9pLulNyY.js";import{u as h,F as b,t as F}from"./ResetButton-DoGjjkHq.js";import{B as f}from"./Button-Dl-iCxcF.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-BrtiYPUm.js";import"./flowComponent-Cx8afA-p.js";import"./index-JjjT5_3a.js";import"./index-yvyiz2TD.js";import"./remote-NkxELaCk.js";import"./useLocalizedStringFormatter-UQrIwX21.js";import"./context-BEPAk1pi.js";import"./RadioGroup-CopeWlka.js";import"./utils-BUbYN1U7.js";import"./FieldError-PikikH1M.js";import"./Text-C_Kx-nbJ.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BPpqOWmF.js";import"./useLabel-BBwXLpG2.js";import"./Label-YvP3zR1_.js";import"./Hidden-BHNvmzaU.js";import"./SelectionIndicator-DFgYB22t.js";import"./useFormValidation-CGeoBpxY.js";import"./useFocus-C-u_ZFsP.js";import"./useFocusRing-CuUFHyYZ.js";import"./useControlledState-BQPo69mZ.js";import"./FocusScope-Com4Ovel.js";import"./useFormReset-DarrOQyz.js";import"./usePress-CjXzQGxt.js";import"./useFocusable-DX9jgPLa.js";import"./VisuallyHidden-BZmadp8e.js";import"./useFieldComponent-R38s1k2Z.js";import"./useMakeFocusable-C_9yLGWa.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-lzhTm-Qc.js";import"./AlertIcon-Cf4_Rc8_.js";import"./dynamic-DYPsp9rr.js";import"./useRef-DKmNltMK.js";import"./Action-CX67yONB.js";import"./context-BsZ7lsCx.js";import"./useStatic-DyjFLUOF.js";import"./browser-Bk_hun62.js";import"./getActionGroupSlot-BkUFYgi5.js";import"./ButtonView-B_eZj1aS.js";import"./Text-DUTVzyy5.js";import"./EmulatedBoldText-DLXz_2Ie.js";import"./LoadingSpinner-BVg6Htwb.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BxJ7LcYT.js";import"./ProgressBar-BvIgs7se.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

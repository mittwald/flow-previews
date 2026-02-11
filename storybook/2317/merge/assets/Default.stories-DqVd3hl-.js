import{r as g,j as r}from"./iframe-Czt-X4mt.js";import{R as t}from"./Rating-CX5HvJKS.js";import{L as l}from"./Label-DRlzXm2g.js";import{F as R}from"./FieldError-BFQHJf6J.js";import{u as h,F as b,t as F}from"./ResetButton-Cqw_oC7V.js";import{B as f}from"./Button-CD6msFpC.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-CEtgECHE.js";import"./flowComponent-BEE6NzIR.js";import"./index-BvfwTKjZ.js";import"./index-Dtw36EGp.js";import"./remote-hRcAmPck.js";import"./useLocalizedStringFormatter-BDxrzy3H.js";import"./context-BsnVI305.js";import"./RadioGroup-NyeX7Sfi.js";import"./utils-CU6JriEK.js";import"./FieldError-8b6ruGQE.js";import"./Text-t3MR2mNG.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BeS1FfjY.js";import"./useLabel-BR4TCRo_.js";import"./Label-Ddc2_N7O.js";import"./Hidden-B_4G05gn.js";import"./SelectionIndicator-8fZBRAhq.js";import"./useFormValidation-DyL1ZPxG.js";import"./useFocus-En_BVabG.js";import"./useFocusRing-DDb3Exp8.js";import"./useControlledState-DhgMObTD.js";import"./FocusScope-DGuUwoy_.js";import"./useFormReset-5KG7Gyo5.js";import"./usePress-DEVH16Jn.js";import"./useFocusable-DFLTBTxr.js";import"./VisuallyHidden-jSb2CZNn.js";import"./useFieldComponent-CjTkiSgD.js";import"./useMakeFocusable-rXKJcqCV.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BfffkCAs.js";import"./AlertIcon-DBLlr2Uy.js";import"./dynamic-BXoid3qz.js";import"./useRef-CYQbuMBQ.js";import"./Action-BQrZ3ZgM.js";import"./context-CNfFuvDb.js";import"./useStatic-C0a0tu6G.js";import"./browser-CPd8oh-y.js";import"./getActionGroupSlot-5QVk2C33.js";import"./ButtonView-COtP3lz8.js";import"./Text-8ynHQhOY.js";import"./EmulatedBoldText-DRvUUCjd.js";import"./LoadingSpinner-B3-O-X86.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-YmddG4Dp.js";import"./ProgressBar-DtVqo96T.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

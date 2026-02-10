import{r as g,j as r}from"./iframe-HxmydubW.js";import{R as t}from"./Rating-mBco6LjV.js";import{L as l}from"./Label-Jo5QLCir.js";import{F as R}from"./FieldError-431GXjJZ.js";import{u as h,F as b,t as F}from"./ResetButton-H0M11BQL.js";import{B as f}from"./Button-CfZWs4w7.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-C9xwJqAl.js";import"./flowComponent-DGGyXaO_.js";import"./index-Ck9gKEcY.js";import"./index-CEuE-GZL.js";import"./remote-fubbDoJI.js";import"./useLocalizedStringFormatter-Bu1c0OhT.js";import"./context-CAIZZp13.js";import"./RadioGroup-CAIneYGH.js";import"./utils-QtLN3P4K.js";import"./FieldError-BaqMj9An.js";import"./Text-CyO0jXov.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Di40r5ck.js";import"./useLabel-CkTRhQb0.js";import"./Label-DaNiLy_u.js";import"./Hidden-CAR-DQuE.js";import"./SelectionIndicator-dYnAwztx.js";import"./useFormValidation-BHp8DdfT.js";import"./useFocus-AF-IcVAt.js";import"./useFocusRing-CAJt6BJw.js";import"./useControlledState-N-j6hnQm.js";import"./FocusScope-D_FLL8Ht.js";import"./useFormReset-C2bi11DR.js";import"./usePress-yluX3X-J.js";import"./useFocusable-H6SSWU_B.js";import"./VisuallyHidden-BPW-z4K2.js";import"./useFieldComponent-Bahj-THY.js";import"./useMakeFocusable-HZxYU1Y8.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CJjUY60n.js";import"./AlertIcon-BFPz9yZd.js";import"./dynamic-D7w-3Mi4.js";import"./useRef-D0OjaGz6.js";import"./ActionBatch-ChYSHCOJ.js";import"./context-I_ID-Cd_.js";import"./useStatic-ffXkYFOn.js";import"./browser-XpDtWA4a.js";import"./getActionGroupSlot-CHtGBuk8.js";import"./ButtonView-BtepizEV.js";import"./Text-CUJOJiDD.js";import"./EmulatedBoldText-tUaMuzLe.js";import"./LoadingSpinner-CzIk11gH.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B_Zn8gpO.js";import"./ProgressBar-BLMl0tpz.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

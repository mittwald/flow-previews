import{r as g,j as r}from"./iframe-Cq8OhOqi.js";import{R as t}from"./Rating-DqiWrPK1.js";import{L as l}from"./Label-D-4zWGkt.js";import{F as R}from"./FieldError-2IpGOPbh.js";import{u as h,F as b,t as F}from"./ResetButton-e0wuYo_a.js";import{B as f}from"./Button-BU-3gGXz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-D6WB6H32.js";import"./flowComponent-BPlAJrQX.js";import"./index-CDojQULy.js";import"./index-CtMt1etx.js";import"./remote-D-3bgxwF.js";import"./useLocalizedStringFormatter-B4BWJZRT.js";import"./context-EUTE_30t.js";import"./RadioGroup-BSjYUsfT.js";import"./utils-Bubk6yJw.js";import"./FieldError-BGnsbaLE.js";import"./Text-BrptySpj.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-B1CYZolU.js";import"./useLabel-Ddb4-Ews.js";import"./Label-BIWw7tEO.js";import"./Hidden-BxQeKZxe.js";import"./SelectionIndicator-LHAUO8nn.js";import"./useFormValidation-DYnqTuxD.js";import"./useFocus-hSjeZcP9.js";import"./useFocusRing-C66f8wZh.js";import"./useControlledState-DRmDoHXV.js";import"./FocusScope-B5Hy3UxH.js";import"./useFormReset-B4zM24P8.js";import"./usePress-ChoIOqc4.js";import"./useFocusable-Cka2f_Hf.js";import"./VisuallyHidden-CN_7F8uI.js";import"./useFieldComponent-BYb5VnRy.js";import"./useMakeFocusable-DmOA8TBK.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-aZpP8wGh.js";import"./AlertIcon-4JwX6npd.js";import"./dynamic-fC-Lgr30.js";import"./useRef-By8gWJdj.js";import"./Action-CjFX3pKp.js";import"./context-DR72ScyD.js";import"./useStatic-Dv08VHAH.js";import"./browser-D1jWek88.js";import"./getActionGroupSlot-E0a2MdOz.js";import"./ButtonView-D9mwnSmq.js";import"./Text-CeV8P7pg.js";import"./EmulatedBoldText-CaDCAcie.js";import"./LoadingSpinner-DSK_LMeC.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-RahnnKar.js";import"./ProgressBar-pI249SR8.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

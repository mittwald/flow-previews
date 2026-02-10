import{r as g,j as r}from"./iframe-1XlmVqd5.js";import{R as t}from"./Rating-CIRI9umJ.js";import{L as l}from"./Label-DewN6HGl.js";import{F as R}from"./FieldError-D3E1IfUM.js";import{u as h,F as b,t as F}from"./ResetButton-CJgx7ySR.js";import{B as f}from"./Button-QkNnHSXc.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-B1VVAKEh.js";import"./flowComponent-Uz-OX7bY.js";import"./index-Ba7AqYg5.js";import"./index-TUds5Kez.js";import"./remote-BMRYc7VB.js";import"./useLocalizedStringFormatter--9VaGy1Y.js";import"./context-cVtndIAK.js";import"./RadioGroup-CILEHgVo.js";import"./utils-DcI_f0WL.js";import"./FieldError-gWTdIqt3.js";import"./Text-DC6xHoyY.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-XQS-LbjO.js";import"./useLabel-CWL3lRor.js";import"./Label-Dzg72Lo7.js";import"./Hidden-D2eIjlR0.js";import"./SelectionIndicator-qE_U9bCq.js";import"./useFormValidation-BKr0RaqD.js";import"./useFocus-B3hq9TNr.js";import"./useFocusRing-nXz5Fj6s.js";import"./useControlledState-DjEU-0mZ.js";import"./FocusScope-cwCTJx2V.js";import"./useFormReset-DNo3mt-e.js";import"./usePress-CBxBnL8r.js";import"./useFocusable-BsD1LxMy.js";import"./VisuallyHidden-Dm6nphJv.js";import"./useFieldComponent--2vv_KDv.js";import"./useMakeFocusable-CtWDf-qa.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BeWzsZor.js";import"./AlertIcon-B1ETMix0.js";import"./dynamic-pa5Mho8z.js";import"./useRef-Caie6AZd.js";import"./Action-edoqU8Tu.js";import"./context-DAZ5ICmo.js";import"./useStatic-BBkG9kKa.js";import"./browser-BzXr98QP.js";import"./getActionGroupSlot-DkGLvBLQ.js";import"./ButtonView-DfAFlmFQ.js";import"./Text-DoMRIGKc.js";import"./EmulatedBoldText-BjX1lTTJ.js";import"./LoadingSpinner-BDWb_Uug.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DLO0tbpP.js";import"./ProgressBar-DD_sZ9Wb.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

import{r as g,j as r}from"./iframe-tDsAeGKm.js";import{R as t}from"./Rating-BFAhROeD.js";import{L as l}from"./Label-B4YMFJ8a.js";import{F as R}from"./FieldError-CA1wZrT9.js";import{u as h,F as b,t as F}from"./ResetButton-BVW5MRs9.js";import{B as f}from"./Button-jRtlVENb.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-DKvGabEh.js";import"./flowComponent-BfLM0c2n.js";import"./index-bKgupbLj.js";import"./index-B9moyWSs.js";import"./remote-Dyxf39S8.js";import"./useLocalizedStringFormatter-Ble8CxqU.js";import"./context-B8HhXai5.js";import"./RadioGroup-w8up6PUA.js";import"./utils-DhX5ITDy.js";import"./FieldError-Duxf8Exl.js";import"./Text-B29urVwj.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DBzv0iBU.js";import"./useLabel-CvQ5_So8.js";import"./Label-CtdEoG3D.js";import"./Hidden-S5GeLDqu.js";import"./SelectionIndicator-DonQVrOH.js";import"./useFormValidation-CHyrMCXS.js";import"./useFocus-BJatrcMj.js";import"./useFocusRing-O-BrOcuV.js";import"./useControlledState-DJUoNOP3.js";import"./FocusScope-BLSD8gJZ.js";import"./useFormReset-Bh0h9BrG.js";import"./usePress-DsHBwD0o.js";import"./useFocusable-Dhs_EAwV.js";import"./VisuallyHidden-BeYtKSfy.js";import"./useFieldComponent-CEijF59K.js";import"./useMakeFocusable-CAhoTDzi.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CRAaEbc-.js";import"./AlertIcon-BN6nSUvJ.js";import"./dynamic-CfRao1zO.js";import"./ActionGroupView-DajatjdJ.js";import"./Content-H2lGrUDb.js";import"./Heading-B57Tu_dh.js";import"./Heading-DyHmtFkg.js";import"./RSPContexts-1mHRta2c.js";import"./Text-D5NMs6cZ.js";import"./browser-CATpO6nC.js";import"./EmulatedBoldText-B_3WWRWD.js";import"./ActionGroup-BZIwzAiu.js";import"./getActionGroupSlot-BJCt2Jtz.js";import"./useStatic-BTV6Su7X.js";import"./Modal-Dcg0QJqD.js";import"./useOverlayController-B76T1UqF.js";import"./Overlay-61YYNO6R.js";import"./OverlayContextProvider-BmYwjEIL.js";import"./LoadingSpinner-cVZxppZv.js";import"./Dialog-BchFx3yj.js";import"./Button-DSgsBLqC.js";import"./ProgressBar-cVZAXAEA.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-dAx307tU.js";import"./Collection-DX3v8hJf.js";import"./CollectionBuilder-DauPrh3N.js";import"./Separator-C9Rj8Lhn.js";import"./SelectionManager-CvMALRTQ.js";import"./useEvent-DNMlHs6e.js";import"./useCollator-CjoGoE8F.js";import"./ActionBatch-Dcv9mfk6.js";import"./ButtonView-1ef2c52x.js";import"./Flex-DaNMii4C.js";import"./useRef-DQUohT-d.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: "s"
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <Rating {...props}>
      <Label>Rating</Label>
    </Rating>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <Rating {...props} defaultValue={0} isInvalid isRequired>
      <Label>Rating</Label>
      <FieldError>Please rate</FieldError>
    </Rating>
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const wr=["Default","Small","ReadOnly","WithLabel","WithFieldError","WithControlledValue","WithForm"];export{o as Default,i as ReadOnly,a as Small,m as WithControlledValue,n as WithFieldError,p as WithForm,s as WithLabel,wr as __namedExportsOrder,kr as default};

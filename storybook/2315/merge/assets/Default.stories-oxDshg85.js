import{r as g,j as r}from"./iframe-BKpTcuej.js";import{R as t}from"./Rating-B4Cv_hWK.js";import{L as l}from"./Label-sjxWv79d.js";import{F as R}from"./FieldError-BmJ7-crS.js";import{u as h,F as b,t as F}from"./ResetButton-C9cetwLM.js";import{B as f}from"./Button-CHR5Lto_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-8R3XoFcV.js";import"./flowComponent-DoYqiHFv.js";import"./index-Dp43xhBx.js";import"./index-DwEhfHus.js";import"./remote-nPMBb6wO.js";import"./useLocalizedStringFormatter-BpUbvorC.js";import"./context-Bt___W0l.js";import"./RadioGroup-Z6YPzqOw.js";import"./utils-BuTqHWUg.js";import"./FieldError-Bf7-_15k.js";import"./Text-_5F14b0c.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-fml-60gz.js";import"./useLabel-CLAZgdhb.js";import"./Label--Zf6jHty.js";import"./Hidden-B0ayokwD.js";import"./SelectionIndicator-CKzMTdaQ.js";import"./useFormValidation-6yUCZE8C.js";import"./useFocus-C4QXJ0i2.js";import"./useFocusRing-CL2qG9Ti.js";import"./useControlledState-C61mrJlx.js";import"./FocusScope-CaneGuiO.js";import"./useFormReset-DjxTrJRS.js";import"./usePress-BwvZqs_N.js";import"./useFocusable-8gC31DNg.js";import"./VisuallyHidden-DjSqpFWl.js";import"./useFieldComponent-AXq55mny.js";import"./useMakeFocusable-Cy4wN83A.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-NjffNB6y.js";import"./AlertIcon-BxMTL622.js";import"./dynamic-D5pLUzdK.js";import"./useRef-DgPw_1ZE.js";import"./Action-CRs_TTFg.js";import"./context-Do1O8LUQ.js";import"./useStatic-D1T02rpq.js";import"./browser-DdR_cYXU.js";import"./getActionGroupSlot-BVFFoNvG.js";import"./ButtonView-CBwiPc4X.js";import"./Text-ChzZQXaT.js";import"./EmulatedBoldText-DTp9riJA.js";import"./LoadingSpinner-CSX_cmFV.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-WezQgFMH.js";import"./ProgressBar-gtPQqryh.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

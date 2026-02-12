import{r as g,j as r}from"./iframe-BO07bPAa.js";import{R as t}from"./Rating-BaGi94FF.js";import{L as l}from"./Label-D0Lhb5Vq.js";import{F as R}from"./FieldError-DlyPLChi.js";import{u as h,F as b,t as F}from"./ResetButton-CmT4K3eb.js";import{B as f}from"./Button-CCtz8EXc.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-ClLv5I07.js";import"./flowComponent-BaceyrB2.js";import"./index-CQGDGAsD.js";import"./index-C__iODou.js";import"./remote-C9jEPRv0.js";import"./useLocalizedStringFormatter-CYJTPAtB.js";import"./context-DKHz4OX0.js";import"./RadioGroup-DoeVo_10.js";import"./utils-DpF9Snp1.js";import"./FieldError-cxGJZPY3.js";import"./Text-sIV6FVOB.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BBekzR8e.js";import"./useLabel-Dans5Mom.js";import"./Label-DlbijyYq.js";import"./Hidden-Bl2ixnRR.js";import"./SelectionIndicator-Dw6-XKp3.js";import"./useFormValidation-CRjEiOmE.js";import"./useFocus-ntzScLPi.js";import"./useFocusRing-DXebh_G-.js";import"./useControlledState-DyIed2bM.js";import"./FocusScope-BA1MxA3e.js";import"./useFormReset-D6_s6z9R.js";import"./usePress-UbwEnmrk.js";import"./useFocusable-C66-pRTt.js";import"./VisuallyHidden-DCYSiy07.js";import"./useFieldComponent-B5uAaQ_H.js";import"./useMakeFocusable-BK3Pcda2.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-Ca5jxNB-.js";import"./AlertIcon-CagNIYo0.js";import"./dynamic-CShChD8Y.js";import"./useRef-DKBU6sSn.js";import"./Action-CP6j8Viu.js";import"./context-D6FqIPNt.js";import"./useStatic-Dc6GYAIK.js";import"./browser-B0pBncgx.js";import"./getActionGroupSlot-CHQAyQmW.js";import"./ButtonView-BuOsec3O.js";import"./Text-CwdryKSs.js";import"./EmulatedBoldText-Bl01c38V.js";import"./LoadingSpinner-BTNHBT1C.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CPst5v-a.js";import"./ProgressBar-BUHmhWxP.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

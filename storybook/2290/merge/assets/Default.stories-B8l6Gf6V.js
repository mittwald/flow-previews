import{j as r,r as g}from"./iframe-CV15FJMl.js";import{R as t}from"./Rating-CZqchu_o.js";import{L as l}from"./Label-BYiN1vfD.js";import{F as R}from"./FieldError-e14SOUTJ.js";import{u as h,F as b,t as F}from"./ResetButton-Dy0XVagH.js";import{B as f}from"./Button-CPmcSz1K.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-CS7d0V5Y.js";import"./flowComponent-zkKbLiwJ.js";import"./index-BdI4bZr-.js";import"./index-DgyS9CYh.js";import"./remote-BYNvJzFU.js";import"./useLocalizedStringFormatter-DhOUTddD.js";import"./context-Is67_JkX.js";import"./RadioGroup-CdSWKtav.js";import"./utils-B45PgFGd.js";import"./FieldError-CDBleeuN.js";import"./Text-Bk0CAvR5.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-B5_Ftb3l.js";import"./useLabel-DgTpLYXb.js";import"./Label-DnBvsshm.js";import"./Hidden-DbKTPC62.js";import"./SelectionIndicator-C649Jmr0.js";import"./useFormValidation-rdndu8q5.js";import"./useFocus-C3kMSW21.js";import"./useFocusRing-CoS5ESqQ.js";import"./useControlledState-Br5i43rk.js";import"./FocusScope-Da56m84L.js";import"./useFormReset-DQt01LcM.js";import"./usePress-C9ebI84m.js";import"./useFocusable-DenRoGzb.js";import"./VisuallyHidden-DJ3SqDe0.js";import"./useFieldComponent-4syZJMEs.js";import"./useMakeFocusable-BV2Jg7A8.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-Dryg6b6V.js";import"./AlertIcon-BZ2qa2OA.js";import"./dynamic-83TxHgtq.js";import"./useRef-Q0HZ1Gfv.js";import"./Action-k7eAd4lv.js";import"./context-z7OXrsOp.js";import"./useStatic-CaY36sW2.js";import"./browser-8BNXX35r.js";import"./getActionGroupSlot-CEtNZ_Ue.js";import"./ButtonView-CuCKGckF.js";import"./Text-DO3jYkuR.js";import"./EmulatedBoldText-CKJb5Byw.js";import"./LoadingSpinner-C2UghIT7.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Deu1Fo5o.js";import"./ProgressBar-DYhZqT6M.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

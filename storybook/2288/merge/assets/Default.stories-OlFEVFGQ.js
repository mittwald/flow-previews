import{j as r,r as g}from"./iframe-DnKh_q8B.js";import{R as t}from"./Rating-CkFYCrtw.js";import{L as l}from"./Label-_TjJj3W9.js";import{F as R}from"./FieldError-CQ45DqtA.js";import{u as h,F as b,t as F}from"./ResetButton-BYXMJKDA.js";import{B as f}from"./Button-B6Zpw5yd.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-C-jbuAIx.js";import"./flowComponent-NsMUrrXI.js";import"./index-DEpWzVfg.js";import"./index-B5PweBHP.js";import"./remote-k0GnUd79.js";import"./useLocalizedStringFormatter-ClvwREm6.js";import"./context-CXoyow8k.js";import"./RadioGroup-Dzj9LLIw.js";import"./utils-BZc8lNcd.js";import"./FieldError-ChpD0sIl.js";import"./Text-DobXAK13.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BQHEa3Zl.js";import"./useLabel-jAJMJRpZ.js";import"./Label-psEyVv54.js";import"./Hidden-qw9_5FuA.js";import"./SelectionIndicator-B7pzLsJc.js";import"./useFormValidation-C9ppbdC-.js";import"./useFocus-BUIY7lOc.js";import"./useFocusRing-CZAaR2ds.js";import"./useControlledState-Dx9tzWN_.js";import"./FocusScope-Ddw08eyC.js";import"./useFormReset-BbinXmMH.js";import"./usePress-CFc3C1mq.js";import"./useFocusable-z3KWK7qq.js";import"./VisuallyHidden-DfZCukwF.js";import"./useFieldComponent-ClvUady3.js";import"./useMakeFocusable-T1ifiVMu.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DFrKGWVH.js";import"./AlertIcon-3p_Y3XqS.js";import"./dynamic-BE_n_a5m.js";import"./useRef-TNLbSJcR.js";import"./Action-B5Uq12lQ.js";import"./context-CSnl0IXM.js";import"./useStatic-DlxvzgyM.js";import"./browser-BUa4T4SN.js";import"./getActionGroupSlot-Dlj3DC4Q.js";import"./ButtonView-DGagadkt.js";import"./Text-Drd9GdLo.js";import"./EmulatedBoldText-C0uufS8q.js";import"./LoadingSpinner-B--bUkFv.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CX9zCyN4.js";import"./ProgressBar-q35gM_9d.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

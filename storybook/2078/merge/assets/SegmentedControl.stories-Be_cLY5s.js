import{j as e,r as g}from"./iframe-kP2HEfFS.js";import{a,u as l,F as c,t as j,R as p,S as h}from"./ResetButton-CSTft9O0.js";import{L as i}from"./Label-o-9raADe.js";import{B as d}from"./Button-D2SKyW-T.js";import{S as F}from"./Section-6hxUOdoj.js";import{A as b}from"./ActionGroup-CwS6zLOi.js";import{s as u}from"./Action-DkWPc0_f.js";import{S as s,a as r}from"./Segment-BFEZodBY.js";import{F as v}from"./FieldError-CJUuAB6W.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Bb3YYypk.js";import"./flowComponent-Cn3sZuxr.js";import"./index-Bh9kNCDS.js";import"./clsx-B-dksMZM.js";import"./index-Gr0VxzdI.js";import"./useLocalizedStringFormatter-C8FP4Fke.js";import"./context-C1J5EAXU.js";import"./useRef-Ddb8Xdr-.js";import"./utils-C12UPk0k.js";import"./ButtonView-B-wfMpgB.js";import"./browser-CLBqp6VR.js";import"./Label.module-CUYTf9Jc.js";import"./Label-B6lEhZqq.js";import"./Hidden-6OIrW1CO.js";import"./IconWarning-3wMfkhbI.js";import"./remote-7RhInu5H.js";import"./Text-DmTsXHLN.js";import"./EmulatedBoldText-DuA7OeuM.js";import"./Text-Bt0sFzeR.js";import"./LoadingSpinner-DqLZcArG.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BPAnAcar.js";import"./ProgressBar-BJr25bRm.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-07phmwB_.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Zu3olfM4.js";import"./useFocus-C5lTzrJh.js";import"./useFocusRing-CKDLKfs4.js";import"./useFocusable-B7yvIBUC.js";import"./ContextMenuSection-Dtdvg2h1.js";import"./Dialog-DLhIMuXA.js";import"./RSPContexts-BgFmjUDe.js";import"./OverlayArrow-CvR9rE0m.js";import"./useControlledState-K2EmMrc1.js";import"./Collection-MFl1TxyK.js";import"./CollectionBuilder-DD43TuPt.js";import"./SelectionIndicator-v5-gN0xn.js";import"./Separator-CNO8xmqY.js";import"./SelectionManager-DX3kNlRf.js";import"./useEvent-BZyKNwjW.js";import"./useCollator-eXCpI9bT.js";import"./FocusScope-BDiazwAe.js";import"./VisuallyHidden-BxKC931y.js";import"./getActionGroupSlot-DpvImWBQ.js";import"./useStatic-D099is7R.js";import"./context-Dy6MMTPO.js";import"./useFieldComponent-D28HcwQQ.js";import"./useMakeFocusable-DTcEo_iv.js";import"./RadioGroup-NxAvrsy3.js";import"./FieldError-BL6ZnBFp.js";import"./Form-D51h5Mwy.js";import"./useFormValidation-CKIaBDhF.js";import"./useFormReset-BTQYEics.js";import"./AlertText-Dm8o5yyE.js";import"./AlertIcon-BKaF02an.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),We={title:"Integrations/React Hook Form/SegmentedControl",component:a,render:()=>{const t=async x=>{await u(5e3),A(x)},S=l({defaultValues:{user:""}}),f=j();return e.jsx(c,{form:S,onSubmit:t,children:e.jsxs(F,{children:[e.jsx(f,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(b,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=l();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=l();return e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <SegmentedControl>
            <Label>Role</Label>
            <Segment value="admin">Admin</Segment>
            <Segment value="member">Member</Segment>
            <Segment value="accountant">Accountant</Segment>
          </SegmentedControl>
        </Field>
        <SegmentedControl isInvalid>
          <Label>Role</Label>
          <Segment value="admin">Admin</Segment>
          <Segment value="member">Member</Segment>
          <Segment value="accountant">Accountant</Segment>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </SegmentedControl>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <SegmentedControl>
            <Label>Role</Label>
            <Segment value="admin">Admin</Segment>
            <Segment value="member">Member</Segment>
            <Segment value="accountant">Accountant</Segment>
          </SegmentedControl>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("field", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("field")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};const De=["Default","WithFieldError","WithFocus"];export{o as Default,n as WithFieldError,m as WithFocus,De as __namedExportsOrder,We as default};

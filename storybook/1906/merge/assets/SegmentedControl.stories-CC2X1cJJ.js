import{j as e,r as g}from"./iframe-B_TkxfTi.js";import{a,u as l,F as c,t as j,R as p,S as h}from"./ResetButton-Bdlat21c.js";import{L as i}from"./Label-B2z_KUki.js";import{B as d}from"./Button-RJdr80c6.js";import{S as F}from"./Section-DuAyIwjj.js";import{A as b}from"./ActionGroup-DrzSRVMS.js";import{s as u}from"./Action-BwMJcjOW.js";import{S as s,a as r}from"./Segment-ChfZlHTn.js";import{F as v}from"./FieldError-BTHn5en7.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BusjqWiY.js";import"./flowComponent-BIniq_3P.js";import"./index-CrnjZTlk.js";import"./clsx-B-dksMZM.js";import"./index-B6XMVbfI.js";import"./useLocalizedStringFormatter-BrZnZPcM.js";import"./context-Bqo0meff.js";import"./useRef-D_3PHrag.js";import"./utils-CEh0pYpN.js";import"./ButtonView-RI0SDeqV.js";import"./browser-CLjLvoWS.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CQzZBBgV.js";import"./Hidden-B4qu7a2v.js";import"./IconWarning-C-Vc31bm.js";import"./remote-BarzyRQ7.js";import"./Text-DZTN4U6B.js";import"./EmulatedBoldText-9YPP8018.js";import"./Text-CBbNcQAF.js";import"./LoadingSpinner-CjHOYBjr.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-n3CPGMPO.js";import"./ProgressBar-DY5wp8p-.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D2pyCI0i.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DqvJUCRP.js";import"./useFocus-CWYeHEaO.js";import"./useFocusRing-Bb1Hz9wK.js";import"./useFocusable-DUuU0sbS.js";import"./ContextMenuSection-DayPbCkQ.js";import"./Dialog-ChZYysky.js";import"./RSPContexts-CP1vSDTy.js";import"./OverlayArrow-DmLbnMba.js";import"./useControlledState-CYdArkzJ.js";import"./Collection-DsLwUV-E.js";import"./CollectionBuilder-De4-ApJw.js";import"./SelectionIndicator-SPKWDPFJ.js";import"./Separator-Ck_PPi-8.js";import"./SelectionManager-CXzqm88-.js";import"./useEvent-CBTrASFt.js";import"./useCollator-Dzxw0xLX.js";import"./FocusScope-BxLI0wxf.js";import"./VisuallyHidden-BGokW8gm.js";import"./getActionGroupSlot-DtLKsNou.js";import"./useStatic-cRv7_xgS.js";import"./context-D9DgwULu.js";import"./useFieldComponent-C57DTYPz.js";import"./useMakeFocusable-BtSxmITj.js";import"./RadioGroup-CtEhDXmN.js";import"./FieldError-CJvsl-v5.js";import"./Form-v3SuS94t.js";import"./useFormValidation-CPzq_YrX.js";import"./useFormReset-BlUfWbi8.js";import"./AlertText-DZAkh8GI.js";import"./AlertIcon-DJdpqIO-.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),We={title:"Integrations/React Hook Form/SegmentedControl",component:a,render:()=>{const t=async x=>{await u(5e3),A(x)},S=l({defaultValues:{user:""}}),f=j();return e.jsx(c,{form:S,onSubmit:t,children:e.jsxs(F,{children:[e.jsx(f,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(b,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=l();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=l();return e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

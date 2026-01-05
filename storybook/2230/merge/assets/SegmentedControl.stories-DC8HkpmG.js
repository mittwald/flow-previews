import{j as e,r as g}from"./iframe-CnrbHwTe.js";import{b as a,u as l,F as c,t as j}from"./Form-yKsg4Afk.js";import{L as i}from"./Label-CIbW0Z8y.js";import{R as p,S as h}from"./ResetButton-BWets3uT.js";import{B as d}from"./Button-DoJYz9nf.js";import{S as F}from"./Section-BExQZgWB.js";import{A as b}from"./ActionGroup-CHRx5nJi.js";import{s as u}from"./Action-Csai7jBT.js";import{S as s,a as r}from"./Segment-BFbG9iZF.js";import{F as v}from"./FieldError-BJU6XwC7.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D-DaJWqs.js";import"./flowComponent-aR3apKPq.js";import"./index-Cg95cP60.js";import"./clsx-B-dksMZM.js";import"./index-CUZGjyPT.js";import"./useLocalizedStringFormatter-CyCvm50e.js";import"./context-B7MLny9I.js";import"./browser-TZQakXKU.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BQw60TG0.js";import"./utils-r4y_43wh.js";import"./Hidden-kZWiQEu_.js";import"./useRef-BKtURQNG.js";import"./IconWarning-DgLNPfaL.js";import"./remote-CmycR9zC.js";import"./Text-eTz9hgbN.js";import"./EmulatedBoldText-B4gWqNJ7.js";import"./Text-nMrjd92_.js";import"./LoadingSpinner-BfrmZLfO.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CDvqfYYW.js";import"./ProgressBar-VG7_xCrZ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Dn56kI8F.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DoQNUybf.js";import"./useFocus-CW3ebFsS.js";import"./useFocusRing-CRQTw2D7.js";import"./useFocusable-DrwEzR41.js";import"./ContextMenuSection-JoSq6Aah.js";import"./Dialog-CsKt9ioo.js";import"./RSPContexts-CU1Sv8RV.js";import"./OverlayArrow-CJqqEQZv.js";import"./useControlledState-CcfbhOaY.js";import"./Collection-Djv1d9Z_.js";import"./CollectionBuilder-BkOVJAZN.js";import"./SelectionIndicator-CTBQmwrG.js";import"./Separator-D2suaWuM.js";import"./SelectionManager-dddCba2a.js";import"./useEvent-Diyat4Qa.js";import"./useCollator-aieXWn7K.js";import"./FocusScope-CJbwLE5j.js";import"./VisuallyHidden-DYF5WgrZ.js";import"./getActionGroupSlot-C6hg9FJg.js";import"./useStatic-D1Vs9fsX.js";import"./context-BuaNu4Hn.js";import"./useFieldComponent-DrIyQ-Oz.js";import"./useMakeFocusable-Bl-9qapR.js";import"./RadioGroup-B3B6-B62.js";import"./FieldError-DsDXGDD4.js";import"./Form-CpewxKmk.js";import"./useFormValidation-C9gosTEe.js";import"./useFormReset-n7eHOhOu.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),Pe={title:"Integrations/React Hook Form/SegmentedControl",component:a,render:()=>{const t=async x=>{await u(5e3),A(x)},S=l({defaultValues:{user:""}}),f=j();return e.jsx(c,{form:S,onSubmit:t,children:e.jsxs(F,{children:[e.jsx(f,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(b,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=l();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=l();return e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const We=["Default","WithFieldError","WithFocus"];export{o as Default,n as WithFieldError,m as WithFocus,We as __namedExportsOrder,Pe as default};

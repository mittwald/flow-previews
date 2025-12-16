import{j as e,r as g}from"./iframe-DlUIOFNy.js";import{u as a,F as l}from"./Form-B3n9ilz9.js";import{L as i}from"./Label-CGwVPH1O.js";import{B as d}from"./Button-Dl6JLVXM.js";import{S as j}from"./Section-CCNaa6u5.js";import{A as F}from"./ActionGroup-CLnuw2R2.js";import{s as c}from"./Action-DzYQUuQL.js";import{F as b}from"./FieldError-C8EsLVOD.js";import{S as s,a as r}from"./Segment-M4NyId9v.js";import{F as u,t as v}from"./Field-Bkg-HUj_.js";import{R as p}from"./ResetButton-DiquHNcP.js";import{S as h}from"./SubmitButton-TbwUFVd5.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-CY6W5xXv.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bt8pQ7Bg.js";import"./index-C6Pwmg9M.js";import"./index-DAMde4kY.js";import"./useLocalizedStringFormatter-BeLocyRD.js";import"./context-Bx9FvdTc.js";import"./Label-BWWfC27r.js";import"./utils-D5WuX1D5.js";import"./Hidden-DbzQNSr6.js";import"./IconChevronDown-Bvah6r8d.js";import"./remote-CtPiqESW.js";import"./IconX-CssUSVwN.js";import"./IconCheck-DD5ifM6w.js";import"./Text-D41gwIdF.js";import"./EmulatedBoldText-rrVMavtE.js";import"./Text-Cu4A8Hxa.js";import"./LoadingSpinner-BNBlqI88.js";import"./ariaLive-DLFUkGCP.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dr7P9UDM.js";import"./ProgressBar-D4eaRwno.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DOyuB-7Y.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BB8__CsB.js";import"./useFocus-CcXgUcDf.js";import"./useFocusRing-DgmnIfdz.js";import"./useFocusable-D3gWX53-.js";import"./ContextMenuSection-tuIgae_F.js";import"./lib-90ocxLs-.js";import"./Dialog-DGrRsJNk.js";import"./RSPContexts-C5mxBSfV.js";import"./OverlayArrow-s4mQFeA0.js";import"./useControlledState-UrSorjA0.js";import"./Collection-D_tRRyiE.js";import"./CollectionBuilder-BlmCb_Ne.js";import"./SelectionIndicator-D7Xg-XgX.js";import"./Separator-DsGP9-jg.js";import"./SelectionManager-d7GSdIRe.js";import"./useEvent-D0ZZFMyT.js";import"./useCollator-eBEmYcKu.js";import"./FocusScope-DE5dWl6n.js";import"./VisuallyHidden-DYOAHIEH.js";import"./dynamic-C-FseJcp.js";import"./getActionGroupSlot-WDsmZJCA.js";import"./useStatic-DqJu_u90.js";import"./context-C1nEnAeo.js";import"./FieldError-D3SsQY4t.js";import"./IconDanger-BLbNCJeo.js";import"./useFieldComponent-BCd2OtQE.js";import"./useMakeFocusable-i3sy6Qrt.js";import"./RadioGroup-DIAYyIGW.js";import"./Form-BRPBFW97.js";import"./useFormValidation-DSe2mHjT.js";import"./useFormReset-Bdg2NgY2.js";import"./IconCheck-BP1aOYb9.js";import"./useRef-1BWU2Cdw.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),Ne={title:"Integrations/React Hook Form/SegmentedControl",component:u,render:()=>{const t=async x=>{await c(5e3),A(x)},f=a({defaultValues:{user:""}}),S=v();return e.jsx(l,{form:f,onSubmit:t,children:e.jsxs(j,{children:[e.jsx(S,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(F,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(l,{form:t,onSubmit:async()=>await c(2e3),children:[e.jsx(u,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(b,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=a();return e.jsxs(l,{form:t,onSubmit:async()=>await c(2e3),children:[e.jsx(u,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Ue=["Default","WithFieldError","WithFocus"];export{o as Default,n as WithFieldError,m as WithFocus,Ue as __namedExportsOrder,Ne as default};

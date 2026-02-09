import{j as e,r as g}from"./iframe-XxUhdOIM.js";import{a,u as l,F as c,t as j,R as p,S as h}from"./ResetButton-DUwQ9l1M.js";import{L as i}from"./Label-C4UQ1ENb.js";import{B as d}from"./Button-CGELadBW.js";import{S as F}from"./Section-BcKQCQPR.js";import{A as b}from"./ActionGroup-CpnIRFBl.js";import{s as u}from"./Action-uIBgr6h7.js";import{S as s,a as r}from"./Segment-CGb_PsTk.js";import{F as v}from"./FieldError-DsyIPYpb.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DlcFrL20.js";import"./flowComponent-CoC0P7KZ.js";import"./index-CHNtIY8f.js";import"./clsx-B-dksMZM.js";import"./index-BSqFjc_t.js";import"./useLocalizedStringFormatter-C41xTvax.js";import"./context-DoTCerLu.js";import"./useRef-DGklHaj5.js";import"./utils-BCq0Cvc3.js";import"./ButtonView-BOkSZ7Ty.js";import"./browser-DmOXQPuo.js";import"./Label.module-CUYTf9Jc.js";import"./Label-ChQ-hUoB.js";import"./Hidden-Bb8MHfhN.js";import"./IconWarning-HmbpUhBv.js";import"./remote-6r6BNiZ9.js";import"./Text-Cnwgd4MT.js";import"./EmulatedBoldText-p9aRLsBg.js";import"./Text-CyqmbAxA.js";import"./LoadingSpinner-eRWTE9TH.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C5sfG3Jr.js";import"./ProgressBar-DoY0_w5k.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BmkrUKzN.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C6bNQEHg.js";import"./useFocus-EZLK-muK.js";import"./useFocusRing-B4cqEnOC.js";import"./useFocusable-BMaOCfpv.js";import"./ContextMenuSection-CrLbr6yo.js";import"./Dialog-Cu17hg-L.js";import"./RSPContexts-CtuUzpub.js";import"./OverlayArrow-4i6vqPwo.js";import"./useControlledState-BjbUFAiJ.js";import"./Collection-Cp4O_cQl.js";import"./CollectionBuilder-CZOzXtpj.js";import"./SelectionIndicator-BvCJtDxS.js";import"./Separator-B_vWzLB2.js";import"./SelectionManager-BFRX4BxM.js";import"./useEvent-CS7e6qWg.js";import"./useCollator-C4FEsSYx.js";import"./FocusScope-Bd3CxSOo.js";import"./VisuallyHidden-BH7c3L8h.js";import"./getActionGroupSlot-UY0N-ZIa.js";import"./useStatic-BtKbO9c7.js";import"./context-DxgidNIJ.js";import"./useFieldComponent-DmQ0NGCO.js";import"./useMakeFocusable-DQ58jF_W.js";import"./RadioGroup-1npHvgfX.js";import"./FieldError-D3qoIyxA.js";import"./Form-COPMshHH.js";import"./useFormValidation-nWIFBTgB.js";import"./useFormReset-CjY5_fDt.js";import"./AlertText-D9H4kctD.js";import"./AlertIcon-B-eIAqAY.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),We={title:"Integrations/React Hook Form/SegmentedControl",component:a,render:()=>{const t=async x=>{await u(5e3),A(x)},S=l({defaultValues:{user:""}}),f=j();return e.jsx(c,{form:S,onSubmit:t,children:e.jsxs(F,{children:[e.jsx(f,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(b,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=l();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=l();return e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

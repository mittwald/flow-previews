import{j as e,r as g}from"./iframe-Cx5kJuuA.js";import{a,u as l,F as c,t as j,R as p,S as h}from"./ResetButton-CwpPjJvG.js";import{L as i}from"./Label-Da9GdDN8.js";import{B as d}from"./Button-OP9_q8AM.js";import{S as F}from"./Section-C2A-3Iy5.js";import{A as b}from"./ActionGroup-SYctAZp6.js";import{s as u}from"./Action-CnBQ_Jk4.js";import{S as s,a as r}from"./Segment-BpDHvsNg.js";import{F as v}from"./FieldError-BCxxTn6h.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-RASAkScQ.js";import"./flowComponent-CLOWDrbo.js";import"./index-DK83sfEz.js";import"./clsx-B-dksMZM.js";import"./index-BqoyVlZ7.js";import"./useLocalizedStringFormatter-CIuieC62.js";import"./context-CpMzWCEP.js";import"./useRef-BzM_ReLH.js";import"./utils-Nk4paMN-.js";import"./ButtonView-CiX34n3K.js";import"./browser-D-pbaBij.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DPB2sN32.js";import"./Hidden-BIWwaIRP.js";import"./IconWarning-BDhnLpaV.js";import"./remote-C9UyjJTP.js";import"./Text-C98Jvmov.js";import"./EmulatedBoldText--C3vSC84.js";import"./Text-CA_aswYo.js";import"./LoadingSpinner-BWQXNo8s.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BlKGeUP9.js";import"./ProgressBar-DpP1vNCR.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B4Wunpgz.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-LbgF0OFY.js";import"./useFocus-DbL3EqSH.js";import"./useFocusRing-idhb0ztA.js";import"./useFocusable-BtlUXhgP.js";import"./ContextMenuSection-DO6s1iXZ.js";import"./Dialog-CDKKMn1j.js";import"./RSPContexts-CFLmy0zp.js";import"./OverlayArrow-BNHP_74G.js";import"./useControlledState-D1xezhK5.js";import"./Collection-B4Kq3uAS.js";import"./CollectionBuilder-CZTuuany.js";import"./SelectionIndicator-Dp8Rqhcc.js";import"./Separator-e9wjh8FO.js";import"./SelectionManager-BVVbqoWQ.js";import"./useEvent-3su7RyU0.js";import"./useCollator-BUzaHxjg.js";import"./FocusScope-wgzi2f-G.js";import"./VisuallyHidden-i8gu61hs.js";import"./getActionGroupSlot-BGN_K6ot.js";import"./useStatic-C9KIiqww.js";import"./context-BmiLu6TN.js";import"./useFieldComponent-DpBpP7du.js";import"./useMakeFocusable-CUyUw7BO.js";import"./RadioGroup-DTrxChwX.js";import"./FieldError-UHRLTLut.js";import"./Form-BHxxWVUu.js";import"./useFormValidation-CmFpdOnE.js";import"./useFormReset-roVUmu5c.js";import"./AlertText-BwdeDomp.js";import"./AlertIcon-DvMPToF_.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),We={title:"Integrations/React Hook Form/SegmentedControl",component:a,render:()=>{const t=async x=>{await u(5e3),A(x)},S=l({defaultValues:{user:""}}),f=j();return e.jsx(c,{form:S,onSubmit:t,children:e.jsxs(F,{children:[e.jsx(f,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(b,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=l();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=l();return e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

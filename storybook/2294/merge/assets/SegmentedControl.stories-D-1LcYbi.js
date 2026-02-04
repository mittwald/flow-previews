import{j as e,r as g}from"./iframe-CvJspzLv.js";import{a,u as l,F as c,t as j,R as p,S as h}from"./ResetButton-DDmmyPg8.js";import{L as i}from"./Label-DfZOYrgY.js";import{B as d}from"./Button-DPWvzJXv.js";import{S as F}from"./Section-DrXtyJcE.js";import{A as b}from"./ActionGroup-DsNPEUIc.js";import{s as u}from"./Action-CzgX1dLD.js";import{S as s,a as r}from"./Segment-D7bjIrqY.js";import{F as v}from"./FieldError-DQmh2MYp.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-7-1UCAS5.js";import"./flowComponent-BI37IbCZ.js";import"./index-FNnc6AUb.js";import"./clsx-B-dksMZM.js";import"./index-Df150GVy.js";import"./useLocalizedStringFormatter-Clgc-XTf.js";import"./context-CQ77Qkvg.js";import"./useRef-eAOD_JRC.js";import"./utils-BL4G7l_u.js";import"./useOverlayController-BI0XpmO3.js";import"./context-KW9IbNQ1.js";import"./useStatic-B0ICfBk6.js";import"./ButtonView-ClFFq5XN.js";import"./browser-CBUTrPGa.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BqmnG06H.js";import"./Hidden-Cc0JeUT8.js";import"./IconWarning-BERZaob7.js";import"./remote-BqqZGE8h.js";import"./Text-QUQe3Lsq.js";import"./EmulatedBoldText-DGmAuSbD.js";import"./Text-DHLl2ajF.js";import"./LoadingSpinner-xAaU4yCn.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DpFh2ewL.js";import"./ProgressBar-CM3jPvpy.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DfL38sGR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DO5nHrqL.js";import"./useFocus-DbFf9Ktc.js";import"./useFocusRing-L-b3Tn9K.js";import"./useFocusable-C5zGZvV-.js";import"./ContextMenuSection-B9VXHai8.js";import"./Dialog-CNj22GpD.js";import"./RSPContexts-fR-6qryz.js";import"./OverlayArrow-kevdZy7A.js";import"./useControlledState-DsktkqC9.js";import"./Collection-D9feXgUJ.js";import"./CollectionBuilder-1cHqqndV.js";import"./SelectionIndicator-DujQOkfZ.js";import"./Separator-CwyBo3YQ.js";import"./SelectionManager-S2-bZThJ.js";import"./useEvent-B-O27hsR.js";import"./useCollator-BPc2CQoh.js";import"./FocusScope-BaZaaiNh.js";import"./VisuallyHidden-ksBWJgrQ.js";import"./getActionGroupSlot-DdQssjpq.js";import"./useFieldComponent-43Bszd6x.js";import"./useMakeFocusable-trVLnprl.js";import"./RadioGroup-BQeJtRMF.js";import"./FieldError-DlX11YEn.js";import"./Form-5NfLIR8x.js";import"./useFormValidation-CwZe5cTQ.js";import"./useFormReset-ukaISav3.js";import"./AlertText-DgMbxot0.js";import"./AlertIcon-C15Ckg1B.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),De={title:"Integrations/React Hook Form/SegmentedControl",component:a,render:()=>{const t=async x=>{await u(5e3),A(x)},S=l({defaultValues:{user:""}}),f=j();return e.jsx(c,{form:S,onSubmit:t,children:e.jsxs(F,{children:[e.jsx(f,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(b,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=l();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=l();return e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Te=["Default","WithFieldError","WithFocus"];export{o as Default,n as WithFieldError,m as WithFocus,Te as __namedExportsOrder,De as default};

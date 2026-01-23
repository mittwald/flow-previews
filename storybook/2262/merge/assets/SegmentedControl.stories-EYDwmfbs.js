import{j as e,r as g}from"./iframe-CG_BDTJg.js";import{b as a,u as l,F as c,t as j}from"./Form-BIGHS7Ny.js";import{L as i}from"./Label-eLDtxB0Y.js";import{R as p,S as h}from"./ResetButton-CGDsV4YZ.js";import{B as d}from"./Button-BmAaiuIV.js";import{S as F}from"./Section-pYf8QOQK.js";import{A as b}from"./ActionGroup-DAmiV-Yk.js";import{s as u}from"./Action-CprlfWDd.js";import{S as s,a as r}from"./Segment-CphOuGlo.js";import{F as v}from"./FieldError-DN7cTCYW.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CvnWp_K2.js";import"./flowComponent-Cu1B5LJt.js";import"./index-C71TA-pA.js";import"./clsx-B-dksMZM.js";import"./index-CuwL1_wd.js";import"./useLocalizedStringFormatter-DqHGK81F.js";import"./context-CXt1SSmQ.js";import"./browser-yLu0BSsR.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CQ1G_pe6.js";import"./utils-BtbDMhcr.js";import"./Hidden-DdAaT9j3.js";import"./useRef-DbMFXr9W.js";import"./IconWarning-OVzy7qXj.js";import"./remote-B2NguZ9L.js";import"./Text-DpPZns_R.js";import"./EmulatedBoldText-CNB3Go6_.js";import"./Text-CLAgqxCC.js";import"./LoadingSpinner-DTxDKIsL.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DIbF_cdk.js";import"./ProgressBar-BZV9wt8q.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DI7piRsn.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C5t6ziJ-.js";import"./useFocus-BQxEMJ7t.js";import"./useFocusRing-CaZs-udO.js";import"./useFocusable-DFQV4HWE.js";import"./ContextMenuSection-BjTcX3F7.js";import"./Dialog-CMl17GR5.js";import"./RSPContexts-dESf_SGO.js";import"./OverlayArrow-CWZGtBJS.js";import"./useControlledState-BP00jBlc.js";import"./Collection-BiCXXajm.js";import"./CollectionBuilder-DPTu2GsG.js";import"./SelectionIndicator-ZCsaESBY.js";import"./Separator-BkBMJSLE.js";import"./SelectionManager-CCfPEZQf.js";import"./useEvent-B3SFi6nF.js";import"./useCollator-CGeacNLD.js";import"./FocusScope-CTViNy8e.js";import"./VisuallyHidden-pR1kpoR7.js";import"./getActionGroupSlot-CNqrnj_v.js";import"./useStatic-CTCSTBly.js";import"./context-CBhRRwo5.js";import"./useFieldComponent-UHV4FB79.js";import"./useMakeFocusable-CK3J35s1.js";import"./RadioGroup-Cn07NHnJ.js";import"./FieldError-DIhe2pHb.js";import"./Form-LFW5XTCh.js";import"./useFormValidation-BBj6R535.js";import"./useFormReset-BbxWwIqr.js";import"./AlertText-BXThyvrG.js";import"./AlertIcon-y6uiAF7a.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),De={title:"Integrations/React Hook Form/SegmentedControl",component:a,render:()=>{const t=async x=>{await u(5e3),A(x)},S=l({defaultValues:{user:""}}),f=j();return e.jsx(c,{form:S,onSubmit:t,children:e.jsxs(F,{children:[e.jsx(f,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(b,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=l();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=l();return e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

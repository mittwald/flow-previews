import{j as e,r as g}from"./iframe-Be6XOKZ5.js";import{u as a,F as l}from"./Form-eVrc1KBF.js";import{L as i}from"./Label-BV6L8qwz.js";import{F as c,t as j}from"./Field-C1mAmvlm.js";import{B as d}from"./Button-BryZpx7e.js";import{S as F}from"./Section-BTWBVwqS.js";import{A as b}from"./ActionGroup-w2LdjwBp.js";import{s as u}from"./Action-DlMDZkrW.js";import{F as v}from"./FieldError-nKJnRYyC.js";import{S as s,a as r}from"./Segment-3m7uAQBT.js";import{R as p}from"./ResetButton-CIg3CQL7.js";import{S as h}from"./SubmitButton-RdvYhqV5.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-DsJM6Avf.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-6mfYofmL.js";import"./index-BVQeIHXT.js";import"./index-Dwi0F_ix.js";import"./useLocalizedStringFormatter-D98CS6hT.js";import"./context-Y40TL0Hk.js";import"./Label-Da4d84kD.js";import"./utils-DTrZMB6V.js";import"./Hidden-B9nXAMyK.js";import"./dynamic-CbSjc9zn.js";import"./IconApp-BnAy9RaD.js";import"./remote-D-Pq4nVM.js";import"./IconX-IgnkgWW1.js";import"./IconCheck-BAgPnW-l.js";import"./Text-BB90vNXB.js";import"./EmulatedBoldText-BA4PJkye.js";import"./Text-BTmMxR_a.js";import"./LoadingSpinner-CCyY2N1z.js";import"./ariaLive-BV9_iZAk.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CnLdg8UY.js";import"./ProgressBar-rm9lHQqR.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DMWHK1ZY.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CK7mbUzy.js";import"./useFocus-DYvnwNR4.js";import"./useFocusRing-B31Et6wQ.js";import"./useFocusable-DlKb8H3E.js";import"./ContextMenuSection-Dcu1peX7.js";import"./lib-90ocxLs-.js";import"./Dialog-D_uiNSw9.js";import"./RSPContexts-ukpjCqjI.js";import"./OverlayArrow-C8LdGvT4.js";import"./useControlledState-D8v_kqVI.js";import"./Collection-9Rz1Z382.js";import"./CollectionBuilder-TiwdMYff.js";import"./SelectionIndicator-CQaSWhBM.js";import"./Separator-B8NszCgW.js";import"./SelectionManager-BUAbzA69.js";import"./useEvent-B2MQOoAh.js";import"./useCollator-daqLYSV2.js";import"./FocusScope-BGhm_0o7.js";import"./VisuallyHidden-G45Y0eAf.js";import"./getActionGroupSlot-C22isMYd.js";import"./useStatic-ChLd1gy1.js";import"./context-DNuic7EB.js";import"./FieldError-eVRm8xCS.js";import"./IconDanger-CuHxVEgS.js";import"./useFieldComponent-DyzWtSt-.js";import"./useMakeFocusable-D9dGwa08.js";import"./RadioGroup-Ct0rLlIq.js";import"./Form-C9wSRzl5.js";import"./useFormValidation-DMz_tWT4.js";import"./useFormReset-Bo-wy8NL.js";import"./IconCheck-CPYLviQn.js";import"./useRef-CvcNQxUy.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),Ne={title:"Integrations/React Hook Form/SegmentedControl",component:c,render:()=>{const t=async x=>{await u(5e3),A(x)},f=a({defaultValues:{user:""}}),S=j();return e.jsx(l,{form:f,onSubmit:t,children:e.jsxs(F,{children:[e.jsx(S,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(b,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(l,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(c,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=a();return e.jsxs(l,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(c,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

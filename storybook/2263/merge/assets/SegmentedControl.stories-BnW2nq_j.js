import{j as e,r as g}from"./iframe-B_VLmVOf.js";import{b as a,u as l,F as c,t as j}from"./Form-CYwbn_Ej.js";import{L as i}from"./Label-f9h1IAZy.js";import{R as p,S as h}from"./ResetButton-CT-MbADY.js";import{B as d}from"./Button-Bx9uZJMk.js";import{S as F}from"./Section-C8rH5F8Y.js";import{A as b}from"./ActionGroup-BpNSiWp6.js";import{s as u}from"./Action-Ct3jXlr4.js";import{S as s,a as r}from"./Segment-BXqLx37R.js";import{F as v}from"./FieldError-Daf8utl3.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BPLgH_zA.js";import"./flowComponent-Bc5-OX5Z.js";import"./index-GX3ioGoD.js";import"./clsx-B-dksMZM.js";import"./index-Cpfd6Pim.js";import"./useLocalizedStringFormatter-HtYu0JJ-.js";import"./context-x63-ahNn.js";import"./browser-BI-ei-gA.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BcEUcVG2.js";import"./utils-C3gFrn3p.js";import"./Hidden-BDeD6EhR.js";import"./useRef-ktlGpVd-.js";import"./IconWarning-COj126FB.js";import"./remote-D8h-jp0X.js";import"./Text-DLyTxpXl.js";import"./EmulatedBoldText-C4lFh4eF.js";import"./Text-Cz72Ll4P.js";import"./LoadingSpinner-8NlAwzA_.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-sEz_Ftmo.js";import"./ProgressBar-B-kO7AM1.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-3m37nTep.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-dvDnySA_.js";import"./useFocus-BThPJxs2.js";import"./useFocusRing-CqgXonXS.js";import"./useFocusable-D136elhd.js";import"./ContextMenuSection-Bn3YLQv6.js";import"./Dialog-B23HRyeo.js";import"./RSPContexts-CewByvV8.js";import"./OverlayArrow-BqV4egk9.js";import"./useControlledState-Cy2UyDQ-.js";import"./Collection-gtDJcyu2.js";import"./CollectionBuilder-DNk5Dmq7.js";import"./SelectionIndicator-BccBPPpV.js";import"./Separator-2P5ZQBAJ.js";import"./SelectionManager-DSvZPYB7.js";import"./useEvent-CYdGT-0S.js";import"./useCollator-C3rClAMq.js";import"./FocusScope-PhJ8RGzw.js";import"./VisuallyHidden-neYV3Owd.js";import"./getActionGroupSlot-DWxJJpa_.js";import"./useStatic-Ch5ZGK2l.js";import"./context-DKzx1USb.js";import"./useFieldComponent-CG-gR-7X.js";import"./useMakeFocusable-DPxlR9qd.js";import"./RadioGroup-C8VV44vP.js";import"./FieldError-DsHbeww2.js";import"./Form-Bzu1lHbY.js";import"./useFormValidation-BmcsTB_W.js";import"./useFormReset-DzSH81mS.js";import"./AlertText-DdDDd0bO.js";import"./AlertIcon-CQ3Ik0rE.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),De={title:"Integrations/React Hook Form/SegmentedControl",component:a,render:()=>{const t=async x=>{await u(5e3),A(x)},S=l({defaultValues:{user:""}}),f=j();return e.jsx(c,{form:S,onSubmit:t,children:e.jsxs(F,{children:[e.jsx(f,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(b,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=l();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=l();return e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

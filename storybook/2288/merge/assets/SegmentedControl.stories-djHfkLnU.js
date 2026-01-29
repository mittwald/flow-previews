import{j as e,r as g}from"./iframe-CdVpWnc8.js";import{a,u as l,F as c,t as j,R as p,S as h}from"./ResetButton-CR4d1ryI.js";import{L as i}from"./Label-CQQzXuOB.js";import{B as d}from"./Button-BYd_Eo9F.js";import{S as F}from"./Section-3RcIg-Ej.js";import{A as b}from"./ActionGroup-CbgbDPIr.js";import{s as u}from"./Action-eeXzbiuZ.js";import{S as s,a as r}from"./Segment-DbshlGhg.js";import{F as v}from"./FieldError-0fRgmDO9.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Dpbpwd3I.js";import"./flowComponent-BmLnRlWr.js";import"./index-CCZSieOH.js";import"./clsx-B-dksMZM.js";import"./index-CPzHqOMO.js";import"./useLocalizedStringFormatter-9E8dKOP5.js";import"./context-Bg-StFGN.js";import"./useRef-DpTmSntJ.js";import"./utils-ClIic5nH.js";import"./ButtonView-TCVIqSjz.js";import"./browser-CWGq_9Zm.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BlSWZv6R.js";import"./Hidden-47TYSTIy.js";import"./IconWarning-Ba9_xFUh.js";import"./remote-BheCwFS8.js";import"./Text-KDInGMjK.js";import"./EmulatedBoldText-BFXdzchX.js";import"./Text-DmePsxpx.js";import"./LoadingSpinner-CjZME6JA.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-skPPmItL.js";import"./ProgressBar-Dg8vamQS.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BKXkodj0.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CCAUNqmr.js";import"./useFocus-DZX-xW1t.js";import"./useFocusRing-dkAGsBkQ.js";import"./useFocusable-CzSEJZTE.js";import"./ContextMenuSection-CBva2Bvf.js";import"./Dialog-oT8hORp9.js";import"./RSPContexts-PfgqXwd-.js";import"./OverlayArrow-CCFRyk0z.js";import"./useControlledState-B7ztCH5k.js";import"./Collection-1Gj7oR7J.js";import"./CollectionBuilder-Dpff-p5v.js";import"./SelectionIndicator-DTqsITpO.js";import"./Separator-BKBkElFN.js";import"./SelectionManager-frOqR2a6.js";import"./useEvent-lhMNtMgY.js";import"./useCollator-BLLfUz8T.js";import"./FocusScope-D5Cgd53Y.js";import"./VisuallyHidden-Cqn4F1Sv.js";import"./getActionGroupSlot-DFI-GPKm.js";import"./useStatic-DSoJUNwo.js";import"./context-BV7cuRYy.js";import"./useFieldComponent-pH8UQhzW.js";import"./useMakeFocusable-DGHqaO07.js";import"./RadioGroup-BHMyij67.js";import"./FieldError-U_T6R5BY.js";import"./Form-BAj6LeSM.js";import"./useFormValidation-5isdk9bY.js";import"./useFormReset-D5EHipFr.js";import"./AlertText-DPJNXYjA.js";import"./AlertIcon-DVQphOxP.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),We={title:"Integrations/React Hook Form/SegmentedControl",component:a,render:()=>{const t=async x=>{await u(5e3),A(x)},S=l({defaultValues:{user:""}}),f=j();return e.jsx(c,{form:S,onSubmit:t,children:e.jsxs(F,{children:[e.jsx(f,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(b,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=l();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=l();return e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

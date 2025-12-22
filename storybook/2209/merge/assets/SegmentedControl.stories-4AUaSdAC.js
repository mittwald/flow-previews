import{j as e,r as g}from"./iframe-a9513Vq6.js";import{b as a,u as l,F as c,t as j}from"./Form-v8TMyo2H.js";import{L as i}from"./Label-BZ3qOvYQ.js";import{R as p,S as h}from"./ResetButton-5AR8fVnz.js";import{B as d}from"./Button-CbZraw7Z.js";import{S as F}from"./Section-C8UMRpV9.js";import{A as b}from"./ActionGroup-CEk1ZVey.js";import{s as u}from"./Action-CS14UEhl.js";import{S as s,a as r}from"./Segment-DgG0zrLW.js";import{F as v}from"./FieldError-WoUSVR_n.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D7T7LY8j.js";import"./flowComponent-ClX3KjCn.js";import"./index-BqXFMVtG.js";import"./clsx-B-dksMZM.js";import"./index-CgKgRbSB.js";import"./useLocalizedStringFormatter-CqunH7JG.js";import"./context-CGjHIvvu.js";import"./browser-CuCeyixq.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-THT_xKrE.js";import"./utils-Q60aVnZq.js";import"./Hidden-CBXUgXzH.js";import"./useRef-Do3Y2xpl.js";import"./IconWarning-BPr7HnMX.js";import"./remote-CGHUze9I.js";import"./Text-hxI3a1Rs.js";import"./EmulatedBoldText-mDi0QmS0.js";import"./Text-KDVUHE9w.js";import"./LoadingSpinner-CjOt6fEt.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CbYmiDFL.js";import"./ProgressBar-ZGOw6r6D.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-nB2pk6qM.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CyOdCqvu.js";import"./useFocus-CH_x6C_j.js";import"./useFocusRing-CmMhl12v.js";import"./useFocusable-lL6lq36R.js";import"./ContextMenuSection-BAncSsp2.js";import"./Dialog-C14EYRfp.js";import"./RSPContexts-DpIEdSL7.js";import"./OverlayArrow-BuQIV4ze.js";import"./useControlledState-CemUvUps.js";import"./Collection-D4DMEnaD.js";import"./CollectionBuilder-DV1hsabw.js";import"./SelectionIndicator-ZvhngIUd.js";import"./Separator-CV17wQ8T.js";import"./SelectionManager-CS8x0YuZ.js";import"./useEvent-CPsIFNqP.js";import"./useCollator-BiekIj1S.js";import"./FocusScope-BnHRmLRH.js";import"./VisuallyHidden-C2yGzMiQ.js";import"./getActionGroupSlot-gpXu2eix.js";import"./useStatic-BYKWrdXY.js";import"./context-RLH4ysrR.js";import"./useFieldComponent-DoOT3wm0.js";import"./useMakeFocusable-DlfEKBd5.js";import"./RadioGroup-B1nSlIak.js";import"./FieldError-C3zvz5gI.js";import"./Form-DpSLYLL6.js";import"./useFormValidation-vP3SVKb2.js";import"./useFormReset-CYu_Lr-z.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),Pe={title:"Integrations/React Hook Form/SegmentedControl",component:a,render:()=>{const t=async x=>{await u(5e3),A(x)},S=l({defaultValues:{user:""}}),f=j();return e.jsx(c,{form:S,onSubmit:t,children:e.jsxs(F,{children:[e.jsx(f,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(b,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=l();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=l();return e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

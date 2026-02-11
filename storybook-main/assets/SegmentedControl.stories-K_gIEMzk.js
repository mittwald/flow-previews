import{r as g,j as e}from"./iframe-DzjGvN4s.js";import{a,u as l,F as c,R as p,S as h,t as j}from"./ResetButton-BC1zJie2.js";import{L as i}from"./Label-B3AoafTb.js";import{B as d}from"./Button-BJ_Dg9g5.js";import{S as F}from"./Section-BM-LoTUP.js";import{A as b}from"./ActionGroup-7GnL-udW.js";import{s as u}from"./Action-y81vuNMi.js";import{S as s,a as r}from"./Segment-BWy2f9-4.js";import{F as v}from"./FieldError-wOx9kOaR.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D8j0vgwF.js";import"./flowComponent-CmnGOp_t.js";import"./index-bYngC-Dz.js";import"./clsx-B-dksMZM.js";import"./index-CvRHkpxf.js";import"./useLocalizedStringFormatter-exeLKOxN.js";import"./context-kL1uqGsw.js";import"./useRef-DhpslEjl.js";import"./utils-CaY6-C_T.js";import"./ButtonView-BBrehocd.js";import"./browser-DnRnaS9W.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CJv7rcJv.js";import"./Hidden-CvDiJOD9.js";import"./IconWarning-s7NSVc-U.js";import"./remote-cWDQ0h3n.js";import"./Text--QhKw61r.js";import"./EmulatedBoldText-DBPO29Lf.js";import"./Text-CsTzsUsp.js";import"./LoadingSpinner-DZ3G9IyW.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BzmY1str.js";import"./ProgressBar-BHFfTD-E.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-7qQt_FP7.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D3so-j8A.js";import"./useFocus-DFbK7vZ5.js";import"./useFocusRing-wMvVuuCP.js";import"./useFocusable-CvI9gOnC.js";import"./ContextMenuSection-ehzNPOBV.js";import"./Dialog-BxRkHkZu.js";import"./RSPContexts-D4WEG-B8.js";import"./OverlayArrow-k_B_Hrky.js";import"./useControlledState-DSekeTPZ.js";import"./Collection-BYckC4CV.js";import"./CollectionBuilder-60Hh4eJv.js";import"./SelectionIndicator-BO4ZIlru.js";import"./Separator-w2v2LtVY.js";import"./SelectionManager-DC2ExAk3.js";import"./useEvent-DrzTQfG9.js";import"./useCollator-BxOUjI0N.js";import"./FocusScope-D_QyZTFZ.js";import"./VisuallyHidden-SzhNhvGP.js";import"./getActionGroupSlot-BxJKXkIY.js";import"./useStatic-CvNWVJY5.js";import"./context-_PoIYhJG.js";import"./useFieldComponent-BsZ1NoTf.js";import"./useMakeFocusable-zz1JSJ_e.js";import"./RadioGroup-BmeyXoHw.js";import"./FieldError-Cm2eS0Qx.js";import"./Form-C7-6k5t9.js";import"./useFormValidation-CCaCqHBd.js";import"./useFormReset-lQZuuaDU.js";import"./AlertText-cLdL_XpT.js";import"./AlertIcon-C0w0dGgz.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),We={title:"Integrations/React Hook Form/SegmentedControl",component:a,render:()=>{const t=async x=>{await u(5e3),A(x)},S=l({defaultValues:{user:""}}),f=j();return e.jsx(c,{form:S,onSubmit:t,children:e.jsxs(F,{children:[e.jsx(f,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(b,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=l();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=l();return e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

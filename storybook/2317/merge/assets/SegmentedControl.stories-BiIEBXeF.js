import{r as g,j as e}from"./iframe-wn9t8CHT.js";import{a,u as l,F as c,R as p,S as h,t as j}from"./ResetButton-DU2Rzvvh.js";import{L as i}from"./Label-5bTXkWLT.js";import{B as d}from"./Button-CkMrcy8B.js";import{S as F}from"./Section-ByylEw6S.js";import{A as b}from"./ActionGroup-CUbcw8Rs.js";import{s as u}from"./Action-CYz45Lq2.js";import{S as s,a as r}from"./Segment-BucICqG5.js";import{F as v}from"./FieldError-C9AtZQjZ.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Ce3zwrtf.js";import"./flowComponent-CQL_Hol9.js";import"./index-Daog0jgF.js";import"./clsx-B-dksMZM.js";import"./index-DGBNuX5e.js";import"./useLocalizedStringFormatter-BW5ArTpm.js";import"./context-DUIKEoYM.js";import"./useRef-hqPWAoQM.js";import"./utils-BBqjM3mV.js";import"./ButtonView-B4rdbM1Q.js";import"./browser-C4GSjbSD.js";import"./Label.module-CUYTf9Jc.js";import"./Label-vEkUlCU_.js";import"./Hidden-B0JF82fI.js";import"./IconWarning-B-Wnft1S.js";import"./remote-BKPU2Q50.js";import"./Text-vlZ105c0.js";import"./EmulatedBoldText-BRurVn-6.js";import"./Text-CigTZLQg.js";import"./LoadingSpinner-C5pntlan.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C_8bimI7.js";import"./ProgressBar-DYDTpv9y.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CfKSfnQU.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-febwKXtN.js";import"./useFocus-Dfm-Pt4C.js";import"./useFocusRing-4Aw-0NUA.js";import"./useFocusable-MJ0CU3Gf.js";import"./ContextMenuSection-a_hWYWcP.js";import"./Dialog-QaAGaw4t.js";import"./RSPContexts-CP6K_mUq.js";import"./OverlayArrow-Dlbb_9eh.js";import"./useControlledState-Ckzcuwb2.js";import"./Collection-Dabp6tSw.js";import"./CollectionBuilder-Dc9k3CRr.js";import"./SelectionIndicator-Drl_jI2J.js";import"./Separator-D7rNCrfy.js";import"./SelectionManager-CyQywfav.js";import"./useEvent-msC5Saat.js";import"./useCollator-ia3Kz-2A.js";import"./FocusScope-Cff801J_.js";import"./VisuallyHidden-Rhd9Lwfr.js";import"./getActionGroupSlot-DC-fIdha.js";import"./useStatic-Dq0n5AIR.js";import"./context-DvLe6BQ8.js";import"./useFieldComponent-CuQvVX64.js";import"./useMakeFocusable-DtmUrEx7.js";import"./RadioGroup-BLa8Kveb.js";import"./FieldError-BriaHAsp.js";import"./Form-BpC7EEKj.js";import"./useFormValidation-DyGMCXIt.js";import"./useFormReset-BfPrTbq9.js";import"./AlertText-G52nApD-.js";import"./AlertIcon-CswpW_U3.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),We={title:"Integrations/React Hook Form/SegmentedControl",component:a,render:()=>{const t=async x=>{await u(5e3),A(x)},S=l({defaultValues:{user:""}}),f=j();return e.jsx(c,{form:S,onSubmit:t,children:e.jsxs(F,{children:[e.jsx(f,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(b,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=l();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=l();return e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

import{j as e,r as g}from"./iframe-pcvtdEGM.js";import{b as a,u as l,F as c,t as j}from"./Form-CK6uNh05.js";import{L as i}from"./Label-CRIab_7x.js";import{R as p,S as h}from"./ResetButton-BEZHYZMK.js";import{B as d}from"./Button-uyxj5lKX.js";import{S as F}from"./Section-D2AtZg_F.js";import{A as b}from"./ActionGroup-Cnw6IB4G.js";import{s as u}from"./Action-DJjvSFsd.js";import{S as s,a as r}from"./Segment-CKr32pwK.js";import{F as v}from"./FieldError-Brj1PtAW.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CjFFErYF.js";import"./flowComponent-BsMfbHRX.js";import"./index-qOUwp4oz.js";import"./clsx-B-dksMZM.js";import"./index-YznY-g7A.js";import"./useLocalizedStringFormatter-vFyNiPiP.js";import"./context-We2COa_S.js";import"./browser-DdUrC3oM.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BTMeT-8z.js";import"./utils-fsWZtkeO.js";import"./Hidden-DReGI82W.js";import"./useRef-D_yDHzwE.js";import"./IconWarning-BUxMadyi.js";import"./remote-O2EONUZN.js";import"./Text-B9qmJggM.js";import"./EmulatedBoldText-BoMrbuLQ.js";import"./Text-DqkI-mFO.js";import"./LoadingSpinner-CRozfiA2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C7g9LfsB.js";import"./ProgressBar-BJtj52rd.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-D_iN71C8.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Dv_EQiAe.js";import"./useFocus-B8eWYfgC.js";import"./useFocusRing-Zb0us3UP.js";import"./useFocusable-3pO1u96t.js";import"./ContextMenuSection-CnsRFJEn.js";import"./Dialog-DwYtEz4y.js";import"./RSPContexts-DZfuqB-R.js";import"./OverlayArrow-KSA73Rxs.js";import"./useControlledState-CJg030Qn.js";import"./Collection-CigrVSlS.js";import"./CollectionBuilder-Bto5ITGH.js";import"./SelectionIndicator-PrkU8Fpu.js";import"./Separator-CvwRIy8P.js";import"./SelectionManager-DshmmqnA.js";import"./useEvent-D-kKKOwz.js";import"./useCollator-BbVXsX3o.js";import"./FocusScope-Da3nqOUO.js";import"./VisuallyHidden-DxWu5xEc.js";import"./getActionGroupSlot-CPo9rPQE.js";import"./useStatic-BCDrLUdV.js";import"./context-rIsit77n.js";import"./useFieldComponent-DX_YsVYS.js";import"./useMakeFocusable-DBNchvnt.js";import"./RadioGroup-x4C7dDAS.js";import"./FieldError-DSNAXrm1.js";import"./Form-e5z3-mU_.js";import"./useFormValidation-6fXj-s64.js";import"./useFormReset-D7xZNI6Q.js";import"./AlertText-B5gACMbu.js";import"./AlertIcon-CRV-RQ9G.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),De={title:"Integrations/React Hook Form/SegmentedControl",component:a,render:()=>{const t=async x=>{await u(5e3),A(x)},S=l({defaultValues:{user:""}}),f=j();return e.jsx(c,{form:S,onSubmit:t,children:e.jsxs(F,{children:[e.jsx(f,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(b,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=l();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=l();return e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

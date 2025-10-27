import{j as e,r as S}from"./iframe-B0qqkRSc.js";import{a as l,u as c,F as d,t as g}from"./Form-BuCWVJY1.js";import{L as s}from"./Label-Bathhgam.js";import{B as i}from"./Button-DJYlHg31.js";import{S as x}from"./Section-Dra2DCa6.js";import{A as F}from"./ActionGroup-Cmq5nBXt.js";import{s as u}from"./Action-CH6Q1TZa.js";import{S as a,a as r}from"./Segment-D6bswyFt.js";import{F as j}from"./useFieldComponent-BdE163vq.js";import"./index-nuYtCEEu.js";import"./flowComponent-D28qUuL_.js";import"./index-Bw7Y8sX9.js";import"./clsx-B-dksMZM.js";import"./index-ByDaWYpT.js";import"./useLocalizedStringFormatter-Hp5e5rkz.js";import"./context-D99v7Uqm.js";import"./browser-B1sj-_-y.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CSbZp_Tl.js";import"./utils-fD_u--Rs.js";import"./Hidden-B-z-l7Br.js";import"./IconWarning-BPZvpYf1.js";import"./Text-BrTaOrXE.js";import"./EmulatedBoldText-YngYColk.js";import"./Text-Dr_aqSbj.js";import"./LoadingSpinner-BhtZJAGg.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CBrpY8Iv.js";import"./ProgressBar-COiaV-p2.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-sSRBc7PO.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CRF7-NYn.js";import"./useFocus-D6s77d5g.js";import"./useFocusRing-6YYb42D4.js";import"./useFocusable-BBZGyB5D.js";import"./ContextMenuSection-DodlfDvY.js";import"./Dialog-Cf8VWc4Y.js";import"./RSPContexts-JwdHw2w4.js";import"./OverlayArrow-B0r4AZS0.js";import"./useControlledState-CB1SzgEG.js";import"./Collection-BezXrWUC.js";import"./CollectionBuilder-CyiVnh3g.js";import"./SelectionIndicator-BJvhD4qq.js";import"./Separator-AYUu4xVa.js";import"./SelectionManager-pQfvjsBD.js";import"./useEvent-BB8Na9jU.js";import"./useCollator-D-k20A4-.js";import"./FocusScope-8IhL3Eed.js";import"./VisuallyHidden-CQaNZ-oY.js";import"./dynamic-nZoDMFyL.js";import"./getActionGroupSlot-C0ojBLEj.js";import"./useStatic-CDvxHEcU.js";import"./context-CL6SRMFP.js";import"./useMakeFocusable-BKFtKrAv.js";import"./RadioGroup-Bo9hGN2l.js";import"./Form-Dg4UU0-2.js";import"./useFormValidation-Vh8OxI1q.js";import"./useFormReset-CSVsou9A.js";import"./react-children-utilities-BymZuw_a.js";import"./ClearPropsContext-HA28kjj1.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,v=b("submit"),Me={title:"Integrations/React Hook Form/SegmentedControl",component:l,render:()=>{const t=async f=>{await u(5e3),v(f)},p=c({defaultValues:{user:""}}),h=g();return e.jsx(d,{form:p,onSubmit:t,children:e.jsxs(x,{children:[e.jsx(h,{name:"user",children:e.jsxs(a,{children:[e.jsx(s,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx(F,{children:e.jsx(i,{type:"submit",children:"Submit"})})]})})}},o={},n={render:()=>{const t=c();return S.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(d,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(l,{name:"field",children:e.jsxs(a,{children:[e.jsx(s,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(a,{isInvalid:!0,children:[e.jsx(s,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=c();return e.jsxs(d,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(l,{name:"field",children:e.jsxs(a,{children:[e.jsx(s,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(i,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(i,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(i,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};const _e=["Default","WithFieldError","WithFocus"];export{o as Default,n as WithFieldError,m as WithFocus,_e as __namedExportsOrder,Me as default};

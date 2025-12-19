import{j as e,r as g}from"./iframe-DyIQYB7R.js";import{b as a,u as l,F as c,t as j}from"./Form-B0lxAPLg.js";import{L as i}from"./Label-Bnl2XRS7.js";import{R as p,S as h}from"./ResetButton-MDw1h-vd.js";import{B as d}from"./Button-C3sAJBlh.js";import{S as F}from"./Section-yajK3SK5.js";import{A as b}from"./ActionGroup-KTNDS_nc.js";import{s as u}from"./Action-2iALePMB.js";import{S as s,a as r}from"./Segment-fLgdaiDI.js";import{F as v}from"./FieldError-Drb2NmJE.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-tPr8Th1P.js";import"./flowComponent-B46dTgZy.js";import"./index-DNyY7P3f.js";import"./clsx-B-dksMZM.js";import"./index-BAJQpnn3.js";import"./useLocalizedStringFormatter-C8zgnVvK.js";import"./context-DQwa7-Zw.js";import"./browser-Dsy2EDmz.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DLjzrNJv.js";import"./utils-Br5k-T_U.js";import"./Hidden-CjE_I8s3.js";import"./useRef-BA2dHosU.js";import"./IconWarning-BlqJF_wS.js";import"./remote-CduUCN7o.js";import"./Text-DP5VQe4y.js";import"./EmulatedBoldText-B3WFDqoc.js";import"./Text--49tgveg.js";import"./LoadingSpinner-BJz_a5cm.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BuUG1_MS.js";import"./ProgressBar-BLYv6NCO.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cx64g9XI.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DBMxrrfH.js";import"./useFocus-MkZ0Yize.js";import"./useFocusRing-Dsvy8-H7.js";import"./useFocusable-BzRC0Akk.js";import"./ContextMenuSection-CGwj4hwH.js";import"./Dialog-Bezv0IMM.js";import"./RSPContexts-D0G5Z96Z.js";import"./OverlayArrow-B8joZ1vL.js";import"./useControlledState-C9rhpCZz.js";import"./Collection-BGTuQL6n.js";import"./CollectionBuilder-DV1KSVZF.js";import"./SelectionIndicator-DEPDk5Cv.js";import"./Separator-BxbCemNh.js";import"./SelectionManager-DkxBPn8A.js";import"./useEvent-CtnbpMU6.js";import"./useCollator-CNrMRXe4.js";import"./FocusScope-CPYLtjFE.js";import"./VisuallyHidden-CpJBcPMb.js";import"./getActionGroupSlot-D_7amHYE.js";import"./useStatic-CPovvC2L.js";import"./context--viOmW11.js";import"./useFieldComponent-BuMHMJdd.js";import"./useMakeFocusable-YWyJR1nk.js";import"./RadioGroup-BGwUO7dw.js";import"./FieldError-CJCkmHNP.js";import"./Form-Ce0HMGMO.js";import"./useFormValidation-BzfV6dUL.js";import"./useFormReset-DbNMnmkG.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),Pe={title:"Integrations/React Hook Form/SegmentedControl",component:a,render:()=>{const t=async x=>{await u(5e3),A(x)},S=l({defaultValues:{user:""}}),f=j();return e.jsx(c,{form:S,onSubmit:t,children:e.jsxs(F,{children:[e.jsx(f,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(b,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=l();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=l();return e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

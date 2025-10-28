import{j as e,r as S}from"./iframe-BYlM8TfH.js";import{a as l,u as c,F as d,t as g}from"./Form-CVBWUNQi.js";import{L as s}from"./Label-CObvhZe8.js";import{B as i}from"./Button-DrjwoUCb.js";import{S as x}from"./Section-D4heV61s.js";import{A as F}from"./ActionGroup-D2zlXLO9.js";import{s as u}from"./Action-i4rkq48V.js";import{S as a,a as r}from"./Segment-CSFz7uWF.js";import{F as j}from"./useFieldComponent-BoJq1S9B.js";import"./index-nuYtCEEu.js";import"./flowComponent-CJQUzeBk.js";import"./index-Z9ghxMfX.js";import"./clsx-B-dksMZM.js";import"./index-BpRuSIpR.js";import"./useLocalizedStringFormatter-DNjkRVig.js";import"./context-BxRqKeiD.js";import"./browser-D2sPcOVM.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-COiWxsLa.js";import"./utils-BDqIfUE7.js";import"./Hidden-CSqzjE-Z.js";import"./IconWarning-WQ4wo7kP.js";import"./Text-ZBSxG77c.js";import"./EmulatedBoldText-bM5QDT6k.js";import"./Text-Dc8La0ek.js";import"./LoadingSpinner-CqJPIXvI.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BmIa1mS-.js";import"./ProgressBar--do5EHZn.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-IFSjtkUu.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-kOJVCjd_.js";import"./useFocus-B9vfYs8K.js";import"./useFocusRing-BaqqhOKG.js";import"./useFocusable-SxOERRg1.js";import"./ContextMenuSection-yyXtjvTi.js";import"./Dialog-BSP5EDkY.js";import"./RSPContexts-BeeOgZFj.js";import"./OverlayArrow-Dcf6I1B8.js";import"./useControlledState-Bs4hSWnz.js";import"./Collection-C6Fc_Z_x.js";import"./CollectionBuilder-CXjS8Zh0.js";import"./SelectionIndicator-BFnOXggJ.js";import"./Separator-DKnWRjMi.js";import"./SelectionManager-Bmb-1_mZ.js";import"./useEvent-DHF942Kq.js";import"./useCollator-BcPpPzi9.js";import"./FocusScope-ChlmKh1V.js";import"./VisuallyHidden-D5yM91eE.js";import"./dynamic-BhGDraHV.js";import"./getActionGroupSlot-nR5vf13o.js";import"./useStatic-6sdTMqO6.js";import"./context-BILGmIqx.js";import"./useMakeFocusable-BmfPg07G.js";import"./RadioGroup-rqfgzwPo.js";import"./Form-CqmUY9BV.js";import"./useFormValidation-wBqhYJyj.js";import"./useFormReset-Bl4vFhC1.js";import"./react-children-utilities-DxnuAJ4K.js";import"./ClearPropsContext-BpBo361K.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,v=b("submit"),Me={title:"Integrations/React Hook Form/SegmentedControl",component:l,render:()=>{const t=async f=>{await u(5e3),v(f)},p=c({defaultValues:{user:""}}),h=g();return e.jsx(d,{form:p,onSubmit:t,children:e.jsxs(x,{children:[e.jsx(h,{name:"user",children:e.jsxs(a,{children:[e.jsx(s,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx(F,{children:e.jsx(i,{type:"submit",children:"Submit"})})]})})}},o={},n={render:()=>{const t=c();return S.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(d,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(l,{name:"field",children:e.jsxs(a,{children:[e.jsx(s,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(a,{isInvalid:!0,children:[e.jsx(s,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=c();return e.jsxs(d,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(l,{name:"field",children:e.jsxs(a,{children:[e.jsx(s,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(i,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(i,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(i,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

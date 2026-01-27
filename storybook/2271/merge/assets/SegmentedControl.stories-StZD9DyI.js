import{j as e,r as g}from"./iframe-BK9Ry9wr.js";import{a,u as l,F as c,t as j,R as p,S as h}from"./ResetButton-C0XPbUI0.js";import{L as i}from"./Label-MHPgjcAC.js";import{B as d}from"./Button-CHbQbW2n.js";import{S as F}from"./Section-Cd3PiQqp.js";import{A as b}from"./ActionGroup-B30hSGLL.js";import{s as u}from"./Action-CpYeBO1D.js";import{S as s,a as r}from"./Segment-BbsNdB3C.js";import{F as v}from"./FieldError-Dlnwp2IY.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-QikLaQcI.js";import"./flowComponent-DHXq45QP.js";import"./index-DN2_BW85.js";import"./clsx-B-dksMZM.js";import"./index-DqsXJ4xp.js";import"./useLocalizedStringFormatter-C7EPZ_KA.js";import"./context-DsIoSqto.js";import"./useRef-DMVqSxmL.js";import"./utils-DO-BnPGQ.js";import"./ButtonView-CN2Wm_bq.js";import"./browser-DDyWafud.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BzCkyqHu.js";import"./Hidden-PKJk_aj-.js";import"./IconWarning-ClqYagFF.js";import"./remote-BKPS1KcS.js";import"./Text-kkda9Q25.js";import"./EmulatedBoldText-NOAnNUmj.js";import"./Text-Cq5Rc76r.js";import"./LoadingSpinner-FeF_CDXe.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CnSM8-vw.js";import"./ProgressBar-EpzEHd1o.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-MQsZvy4I.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DlcvFeQS.js";import"./useFocus-C5fN754a.js";import"./useFocusRing-Dknf048Z.js";import"./useFocusable-CjhkSx1Q.js";import"./ContextMenuSection-BoFqJWQI.js";import"./Dialog-CFBRHxwp.js";import"./RSPContexts--7QpwlJX.js";import"./OverlayArrow-CRZVDLqR.js";import"./useControlledState-D5gBJyZQ.js";import"./Collection-DA19Hn3z.js";import"./CollectionBuilder-D0V9DfFD.js";import"./SelectionIndicator-D3Pxw9N-.js";import"./Separator-C7FW_ZyO.js";import"./SelectionManager-BORRpVca.js";import"./useEvent-C7NWigLs.js";import"./useCollator-DyL6zZr9.js";import"./FocusScope-Lcnwzjdv.js";import"./VisuallyHidden-D79PysQv.js";import"./getActionGroupSlot-BQEdHt4G.js";import"./useStatic-D1EtWzUP.js";import"./context-BUIiTJfL.js";import"./useFieldComponent-DnU67IFr.js";import"./useMakeFocusable-Bt_xvJUh.js";import"./RadioGroup-B7H09JaK.js";import"./FieldError-jtZpQJaz.js";import"./Form-DgYJKMgS.js";import"./useFormValidation-4onogkfY.js";import"./useFormReset-CaS7VrAz.js";import"./AlertText-Q3UmWydJ.js";import"./AlertIcon-CZTB9fHB.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),We={title:"Integrations/React Hook Form/SegmentedControl",component:a,render:()=>{const t=async x=>{await u(5e3),A(x)},S=l({defaultValues:{user:""}}),f=j();return e.jsx(c,{form:S,onSubmit:t,children:e.jsxs(F,{children:[e.jsx(f,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(b,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=l();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=l();return e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

import{j as e,r as g}from"./iframe-CFLRrV9_.js";import{a,u as l,F as c,t as j,R as p,S as h}from"./ResetButton-DjqnxgyX.js";import{L as i}from"./Label-DDweLn-B.js";import{B as d}from"./Button-C6DtPvCF.js";import{S as F}from"./Section-DcEQD72A.js";import{A as b}from"./ActionGroup-Cmk2pOgu.js";import{s as u}from"./Action--cE17EXA.js";import{S as s,a as r}from"./Segment-Bh5tIb70.js";import{F as v}from"./FieldError-BY_h0DzJ.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CfUvB6Rc.js";import"./flowComponent-Cgcg4reG.js";import"./index-C9HjT8vY.js";import"./clsx-B-dksMZM.js";import"./index-24zjo-Kb.js";import"./useLocalizedStringFormatter-BTtlqG0g.js";import"./context-bb3yZDI9.js";import"./useRef-BHiB85kd.js";import"./utils-9RAZgTTl.js";import"./ButtonView-C98-Wvmx.js";import"./browser-6ZyX-izP.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CRwaxTbk.js";import"./Hidden-DI4qxTyt.js";import"./IconWarning-DnD-gw4t.js";import"./remote-BB1QWzBE.js";import"./Text-DEmvrg4f.js";import"./EmulatedBoldText-DW1BlzUv.js";import"./Text-DCjLwlBM.js";import"./LoadingSpinner-D6sn6dKn.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CQ9x5Ymh.js";import"./ProgressBar-CAwZsQPk.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C42gu-3e.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-LdOf-GEu.js";import"./useFocus-DD1T6bJ4.js";import"./useFocusRing-DRVonXEI.js";import"./useFocusable-CQU1ZNCF.js";import"./ContextMenuSection-KLSTc6el.js";import"./Dialog-CsaxLO_h.js";import"./RSPContexts-CrNZITQd.js";import"./OverlayArrow-67PBRhfH.js";import"./useControlledState-BS0DqA_d.js";import"./Collection-CpUB07wh.js";import"./CollectionBuilder-CcY1vtmm.js";import"./SelectionIndicator-DLBwj5hd.js";import"./Separator-Brhc3eje.js";import"./SelectionManager-rBQZeyz7.js";import"./useEvent-C2NY4fdQ.js";import"./useCollator-BuvCZz5o.js";import"./FocusScope-To3K9I_L.js";import"./VisuallyHidden-DH38u7VP.js";import"./getActionGroupSlot-DBTwflYW.js";import"./useStatic-Bo06Q_Yy.js";import"./context-CslVSGqZ.js";import"./useFieldComponent-CywuRKF5.js";import"./useMakeFocusable-C4OBi2te.js";import"./RadioGroup-9A4BJZiK.js";import"./FieldError-D073kW89.js";import"./Form-HxVpGshA.js";import"./useFormValidation-Cm_zD3mV.js";import"./useFormReset-BcY6_uyQ.js";import"./AlertText-BwXe_CUh.js";import"./AlertIcon-Dk-GLzZT.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),We={title:"Integrations/React Hook Form/SegmentedControl",component:a,render:()=>{const t=async x=>{await u(5e3),A(x)},S=l({defaultValues:{user:""}}),f=j();return e.jsx(c,{form:S,onSubmit:t,children:e.jsxs(F,{children:[e.jsx(f,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(b,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=l();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=l();return e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

import{j as e,r as g}from"./iframe-BTP_Z9Sf.js";import{a,u as l,F as c,t as j,R as p,S as h}from"./ResetButton-D_dyfali.js";import{L as i}from"./Label-Cu7NRaqa.js";import{B as d}from"./Button-er0RkDrE.js";import{S as F}from"./Section-Bql58_C6.js";import{A as b}from"./ActionGroup-Kh2CN0rv.js";import{s as u}from"./Action-CBjIM5JV.js";import{S as s,a as r}from"./Segment-BdMLuWcC.js";import{F as v}from"./FieldError-DnUQcxCL.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-LcJrXyvC.js";import"./flowComponent-DvBALJVI.js";import"./index-z_6Cto56.js";import"./clsx-B-dksMZM.js";import"./index-E_qagHnK.js";import"./useLocalizedStringFormatter-DvZZD1YW.js";import"./context-BBaC2IfM.js";import"./useRef-Fcqlcr2u.js";import"./utils-DP1LA6WE.js";import"./ButtonView-B2TbsKhv.js";import"./browser-eyJ8FPIK.js";import"./Label.module-CUYTf9Jc.js";import"./Label-PTTOxDPw.js";import"./Hidden-7cYXeHtZ.js";import"./IconWarning-CwZb39At.js";import"./remote-BmAp8UvO.js";import"./Text-Cq5MQ8wu.js";import"./EmulatedBoldText-BkuV9i5t.js";import"./Text-CZ1YR4oj.js";import"./LoadingSpinner-Cv-igvht.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DgJw7YNb.js";import"./ProgressBar-CBYSqGBG.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Cpmi3JfU.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BnZLj0Nc.js";import"./useFocus-BU1lOliM.js";import"./useFocusRing-CQvdF7rp.js";import"./useFocusable-Hlf8Yc9h.js";import"./ContextMenuSection-De_H5Wjl.js";import"./Dialog-DITwbnCq.js";import"./RSPContexts-Bn1hDyBd.js";import"./OverlayArrow-DzMljQ2A.js";import"./useControlledState-B5h2rUtG.js";import"./Collection-DSvrrKnp.js";import"./CollectionBuilder-By7qHrZF.js";import"./SelectionIndicator-Dze6faSJ.js";import"./Separator-DTcX24DQ.js";import"./SelectionManager-Cw7zB5E7.js";import"./useEvent-C591_3g7.js";import"./useCollator-BHL0tWyU.js";import"./FocusScope-B2nLTMyD.js";import"./VisuallyHidden-BWM4WxkJ.js";import"./getActionGroupSlot-V7kcySO7.js";import"./useStatic-kc5QKD7I.js";import"./context-BwxZaZwM.js";import"./useFieldComponent-Da-vFXDP.js";import"./useMakeFocusable-Cta3vNsb.js";import"./RadioGroup-B5CcaDWY.js";import"./FieldError-BvNBTK6b.js";import"./Form-BB65cxFE.js";import"./useFormValidation-HNZmieSP.js";import"./useFormReset-Bo1Ib9da.js";import"./AlertText-CSpjF2dw.js";import"./AlertIcon-BLTDYNdz.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),We={title:"Integrations/React Hook Form/SegmentedControl",component:a,render:()=>{const t=async x=>{await u(5e3),A(x)},S=l({defaultValues:{user:""}}),f=j();return e.jsx(c,{form:S,onSubmit:t,children:e.jsxs(F,{children:[e.jsx(f,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(b,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=l();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=l();return e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

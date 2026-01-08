import{j as e,r as g}from"./iframe-BMquwUxp.js";import{b as a,u as l,F as c,t as j}from"./Form-CH4Jd3Vi.js";import{L as i}from"./Label-RP2jfdXb.js";import{R as p,S as h}from"./ResetButton-BmqhXreY.js";import{B as d}from"./Button-DvE0An6z.js";import{S as F}from"./Section-Cjc_LDxh.js";import{A as b}from"./ActionGroup-CFM0ipne.js";import{s as u}from"./Action-4VgG125V.js";import{S as s,a as r}from"./Segment-4VkgAWBE.js";import{F as v}from"./FieldError-DmIKwRtH.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B-3tImXr.js";import"./flowComponent-DgzAUF5h.js";import"./index-BYK8miAY.js";import"./clsx-B-dksMZM.js";import"./index-cAMRUrux.js";import"./useLocalizedStringFormatter-C4X4wsGr.js";import"./context-BcuHL9mG.js";import"./browser-CBlt42Oy.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BA-uOG5q.js";import"./utils-C54becjs.js";import"./Hidden-DXpev5BT.js";import"./useRef-DMo9v2cQ.js";import"./IconWarning-wcTYZTVE.js";import"./remote-CiXlw4PI.js";import"./Text-EG4UQ_l2.js";import"./EmulatedBoldText-CntJSrfE.js";import"./Text-CPXkgTZA.js";import"./LoadingSpinner-BPW5hp_J.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CwpJPQ3S.js";import"./ProgressBar-ztA157SI.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BNLCM250.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B-RZvczw.js";import"./useFocus-DaRXVXg_.js";import"./useFocusRing-CjhJ1DIN.js";import"./useFocusable-DNP9d3st.js";import"./ContextMenuSection-DHh_hwVu.js";import"./Dialog-Dx0VK2pV.js";import"./RSPContexts-BjvY3wPf.js";import"./OverlayArrow-LMfUU-b0.js";import"./useControlledState-C-7-yrsk.js";import"./Collection-CkKzGnvH.js";import"./CollectionBuilder-C63eWLYU.js";import"./SelectionIndicator-BIlCebKJ.js";import"./Separator-CIx6Mbjl.js";import"./SelectionManager-WBqA1WyO.js";import"./useEvent-DDWvHjPW.js";import"./useCollator-BviFHu9Y.js";import"./FocusScope-BR9ShKUP.js";import"./VisuallyHidden-D31Z6xaf.js";import"./getActionGroupSlot-D40b9Kwq.js";import"./useStatic-BMpae3_g.js";import"./context-BbITb74L.js";import"./useFieldComponent-7OMeXUSU.js";import"./useMakeFocusable-C532WCsY.js";import"./RadioGroup-RKa8waun.js";import"./FieldError-D0s5eFn1.js";import"./Form-i5hQHr5E.js";import"./useFormValidation-BU69543b.js";import"./useFormReset-DGUxmLDL.js";import"./InlineAlert-AYUYuGXv.js";import"./AlertIcon-COvVg6Bc.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),De={title:"Integrations/React Hook Form/SegmentedControl",component:a,render:()=>{const t=async x=>{await u(5e3),A(x)},S=l({defaultValues:{user:""}}),f=j();return e.jsx(c,{form:S,onSubmit:t,children:e.jsxs(F,{children:[e.jsx(f,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(b,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=l();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=l();return e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

import{r as g,j as e}from"./iframe-CtuK0rEJ.js";import{a,u as l,F as c,R as p,S as h,t as j}from"./ResetButton-BX7hRNPH.js";import{L as i}from"./Label-Cngj9T_J.js";import{B as d}from"./Button-CC2cGGC1.js";import{S as F}from"./Section-2iB_IAde.js";import{A as b}from"./ActionGroup-BTUNgIac.js";import{s as u}from"./Action-PwkWFif3.js";import{S as s,a as r}from"./Segment-DYiEiBQb.js";import{F as v}from"./FieldError-BKJxUnBZ.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-6fOzfTlj.js";import"./flowComponent-BsiSvDfm.js";import"./index-DyfnOEiT.js";import"./clsx-B-dksMZM.js";import"./index-DPf65gvx.js";import"./useLocalizedStringFormatter-C0fwd0wV.js";import"./context-BLHFXQwL.js";import"./useRef-C7qv1QkI.js";import"./utils-C1DNWP44.js";import"./ButtonView-I97CEkNt.js";import"./browser-Up8UMddv.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BIhxl5Mj.js";import"./Hidden-lRNITHFC.js";import"./IconWarning-BSe4G4Pm.js";import"./remote-DD8nhYq_.js";import"./Text-CyAseKfN.js";import"./EmulatedBoldText-BeUk81Jn.js";import"./Text-DmIZo_mX.js";import"./LoadingSpinner-CJNtrFTB.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CSRC_w1a.js";import"./ProgressBar-D8lgnq4k.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DJNpTGh1.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Da2cRPrr.js";import"./useFocus-N-Pc0sLJ.js";import"./useFocusRing-Dq2x8hiG.js";import"./useFocusable-AhKszEdS.js";import"./ContextMenuSection-J2A0uHtm.js";import"./Dialog-DqwEKDxA.js";import"./RSPContexts-Ci8ojbfD.js";import"./OverlayArrow-D5uKmzPJ.js";import"./useControlledState-Cc_BEFH0.js";import"./Collection-B0ADhrnF.js";import"./CollectionBuilder-DAn9FB1h.js";import"./SelectionIndicator-Ds2JAiCA.js";import"./Separator-CEf8TdmS.js";import"./SelectionManager-CRpdvIdx.js";import"./useEvent-D8j21rfZ.js";import"./useCollator-BzRay_B5.js";import"./FocusScope-Cm3IhtBV.js";import"./VisuallyHidden-D1Q1E2fL.js";import"./getActionGroupSlot-B6ptHBUs.js";import"./useStatic-M0CnbsK2.js";import"./context-CuLUjLGN.js";import"./useFieldComponent-CPjzSNK0.js";import"./useMakeFocusable-UqfX6KFQ.js";import"./RadioGroup-LZWZCAvs.js";import"./FieldError-AgjktxA6.js";import"./Form-8SXxse9a.js";import"./useFormValidation-uULaRcd4.js";import"./useFormReset-C6F9Oqzr.js";import"./AlertText-i0FuOWey.js";import"./AlertIcon-CPMEIwAr.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),We={title:"Integrations/React Hook Form/SegmentedControl",component:a,render:()=>{const t=async x=>{await u(5e3),A(x)},S=l({defaultValues:{user:""}}),f=j();return e.jsx(c,{form:S,onSubmit:t,children:e.jsxs(F,{children:[e.jsx(f,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(b,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=l();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=l();return e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

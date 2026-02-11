import{r as g,j as e}from"./iframe-Cq8OhOqi.js";import{a,u as l,F as c,R as p,S as h,t as j}from"./ResetButton-e0wuYo_a.js";import{L as i}from"./Label-D-4zWGkt.js";import{B as d}from"./Button-BU-3gGXz.js";import{S as F}from"./Section-CsWsO61m.js";import{A as b}from"./ActionGroup-DpnZ5B3u.js";import{s as u}from"./Action-CjFX3pKp.js";import{S as s,a as r}from"./Segment-By15GsP9.js";import{F as v}from"./FieldError-2IpGOPbh.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-fC-Lgr30.js";import"./flowComponent-BPlAJrQX.js";import"./index-CDojQULy.js";import"./clsx-B-dksMZM.js";import"./index-CtMt1etx.js";import"./useLocalizedStringFormatter-B4BWJZRT.js";import"./context-EUTE_30t.js";import"./useRef-By8gWJdj.js";import"./utils-Bubk6yJw.js";import"./ButtonView-D9mwnSmq.js";import"./browser-D1jWek88.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BIWw7tEO.js";import"./Hidden-BxQeKZxe.js";import"./IconWarning-D6WB6H32.js";import"./remote-D-3bgxwF.js";import"./Text-CeV8P7pg.js";import"./EmulatedBoldText-CaDCAcie.js";import"./Text-BrptySpj.js";import"./LoadingSpinner-DSK_LMeC.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-RahnnKar.js";import"./ProgressBar-pI249SR8.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Ddb4-Ews.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-ChoIOqc4.js";import"./useFocus-hSjeZcP9.js";import"./useFocusRing-C66f8wZh.js";import"./useFocusable-Cka2f_Hf.js";import"./ContextMenuSection-C22Hcd-O.js";import"./Dialog-BglVjZuh.js";import"./RSPContexts-CKy-IICl.js";import"./OverlayArrow-CUm_HcTA.js";import"./useControlledState-DRmDoHXV.js";import"./Collection-BDonS7tS.js";import"./CollectionBuilder-D61kQYAv.js";import"./SelectionIndicator-LHAUO8nn.js";import"./Separator-PjONMOza.js";import"./SelectionManager-CJM9qnyd.js";import"./useEvent-BLNYXLIo.js";import"./useCollator-BMatrljN.js";import"./FocusScope-B5Hy3UxH.js";import"./VisuallyHidden-CN_7F8uI.js";import"./getActionGroupSlot-E0a2MdOz.js";import"./useStatic-Dv08VHAH.js";import"./context-DR72ScyD.js";import"./useFieldComponent-BYb5VnRy.js";import"./useMakeFocusable-DmOA8TBK.js";import"./RadioGroup-BSjYUsfT.js";import"./FieldError-BGnsbaLE.js";import"./Form-B1CYZolU.js";import"./useFormValidation-DYnqTuxD.js";import"./useFormReset-B4zM24P8.js";import"./AlertText-aZpP8wGh.js";import"./AlertIcon-4JwX6npd.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),We={title:"Integrations/React Hook Form/SegmentedControl",component:a,render:()=>{const t=async x=>{await u(5e3),A(x)},S=l({defaultValues:{user:""}}),f=j();return e.jsx(c,{form:S,onSubmit:t,children:e.jsxs(F,{children:[e.jsx(f,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(b,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=l();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=l();return e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

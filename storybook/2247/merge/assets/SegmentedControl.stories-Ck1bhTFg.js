import{j as e,r as g}from"./iframe-D5OSMSYj.js";import{b as a,u as l,F as c,t as j}from"./Form-D7Km85yr.js";import{L as i}from"./Label-CF1-K3Zk.js";import{R as p,S as h}from"./ResetButton-CVZRCqdy.js";import{B as d}from"./Button-DTe5su69.js";import{S as F}from"./Section-Dz5Ps6FG.js";import{A as b}from"./ActionGroup-EdAZBuJq.js";import{s as u}from"./Action-7Qb19ota.js";import{S as s,a as r}from"./Segment-Opx9GzXc.js";import{F as v}from"./FieldError-DkXkFVgN.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B1x5IqP1.js";import"./flowComponent-CcKBrJMM.js";import"./index-B83pCPPs.js";import"./clsx-B-dksMZM.js";import"./index-Bwk6EGM5.js";import"./useLocalizedStringFormatter-BQCOTIex.js";import"./context-CCC3vGzE.js";import"./browser-CPg_spJX.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Bh0iBwH8.js";import"./utils-B2fStg81.js";import"./Hidden-NmD_pG7l.js";import"./useRef-DSYCD1f5.js";import"./IconWarning-aBoV8v8e.js";import"./remote-DoBIDVY0.js";import"./Text-DAhCT_ah.js";import"./EmulatedBoldText-Dm6vKeJS.js";import"./Text-DxpiEtGq.js";import"./LoadingSpinner-BD9yQcJP.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CTfGmXCg.js";import"./ProgressBar-Dg6iR4wK.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CQkx52KA.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Db_mMnan.js";import"./useFocus-C6h-AdFL.js";import"./useFocusRing-D5zyjxEp.js";import"./useFocusable-BBmYajA6.js";import"./ContextMenuSection-DdCYek15.js";import"./Dialog-DOlt_k3K.js";import"./RSPContexts-BzWalm_3.js";import"./OverlayArrow-Ck8v0z1s.js";import"./useControlledState-BLX_f1Wx.js";import"./Collection-DJCIfP6r.js";import"./CollectionBuilder-b-gCN1Vs.js";import"./SelectionIndicator-BCMQtvaW.js";import"./Separator-BUClO3qk.js";import"./SelectionManager-flPals8o.js";import"./useEvent-Bc0Gn0fF.js";import"./useCollator-BW95ADKZ.js";import"./FocusScope-fzjvqtWs.js";import"./VisuallyHidden-arLJjMse.js";import"./getActionGroupSlot-BAkzknoy.js";import"./useStatic-Ct4NfCBd.js";import"./context-g3auhbgQ.js";import"./useFieldComponent-yQbkUBpw.js";import"./useMakeFocusable-C0k3bIfg.js";import"./RadioGroup-B680Wedt.js";import"./FieldError-SdvWZoRR.js";import"./Form-RJ7gT7dr.js";import"./useFormValidation-BzDFxNXO.js";import"./useFormReset-C4H0cf_a.js";import"./AlertText-BnzdsAWE.js";import"./AlertIcon-CDVTToII.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),De={title:"Integrations/React Hook Form/SegmentedControl",component:a,render:()=>{const t=async x=>{await u(5e3),A(x)},S=l({defaultValues:{user:""}}),f=j();return e.jsx(c,{form:S,onSubmit:t,children:e.jsxs(F,{children:[e.jsx(f,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(b,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=l();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=l();return e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

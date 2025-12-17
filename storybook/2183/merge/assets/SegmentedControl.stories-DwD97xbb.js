import{j as e,r as g}from"./iframe-B9uPShpw.js";import{u as a,F as l}from"./Form-Q90y3tRs.js";import{L as i}from"./Label-KwkmvcNF.js";import{B as d}from"./Button-BmSId73m.js";import{S as j}from"./Section-Ny8qJyCT.js";import{A as F}from"./ActionGroup-BzV4LqD-.js";import{s as c}from"./Action-BG9uiL-h.js";import{F as b}from"./FieldError-CWcQNDFm.js";import{S as s,a as r}from"./Segment-DKNh97el.js";import{F as u,t as v}from"./Field-DaTa4ON7.js";import{R as p}from"./ResetButton-CiFLSEoZ.js";import{S as h}from"./SubmitButton-67a0DKJ8.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-DkOndk9b.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DaNB93st.js";import"./index-BHigKFJv.js";import"./index-C-9nCgVF.js";import"./useLocalizedStringFormatter-BoeFAG81.js";import"./context-C9xya_TD.js";import"./Label-DMYXGfMz.js";import"./utils-Daj4d2Cf.js";import"./Hidden-DXuNaD-Y.js";import"./IconApp-Dlsy_N62.js";import"./remote-BWMO5jwH.js";import"./IconX-9DqQUbWU.js";import"./IconCheck-CR4Xfb4H.js";import"./Text-CNAgZ6Gu.js";import"./EmulatedBoldText-CttSSL63.js";import"./Text-BY4f0OUC.js";import"./LoadingSpinner-Du_twv2V.js";import"./ariaLive-BNqOvCbo.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CfSbOp9X.js";import"./ProgressBar-BCTL0_PO.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CcI46r6t.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CIPi1cMp.js";import"./useFocus-BRHOSDKu.js";import"./useFocusRing-kdNWDtkT.js";import"./useFocusable-3eJpH5lU.js";import"./ContextMenuSection-CdGZ4RR9.js";import"./lib-90ocxLs-.js";import"./Dialog-D67Qmi5f.js";import"./RSPContexts-D3LiPnZ6.js";import"./OverlayArrow-D2N0P4yy.js";import"./useControlledState-DaoeHdVs.js";import"./Collection-CsRpAj9n.js";import"./CollectionBuilder-g4fV9EQ5.js";import"./SelectionIndicator-C2YxFtZ5.js";import"./Separator-BAZWFUsp.js";import"./SelectionManager-CuNUAezw.js";import"./useEvent-B8UCcaDh.js";import"./useCollator-YFGcYRYP.js";import"./FocusScope-DabbQPzk.js";import"./VisuallyHidden-C1crbJmY.js";import"./dynamic-DCdgkrTe.js";import"./getActionGroupSlot-MOt65LPv.js";import"./useStatic-DxPieb3u.js";import"./context-B0UTB4Wa.js";import"./FieldError-B2c6KACK.js";import"./IconDanger-q09hWhBt.js";import"./useFieldComponent-BtkWQmwv.js";import"./useMakeFocusable-DgzdOzul.js";import"./RadioGroup-CxXoYiME.js";import"./Form-CxeKG7IW.js";import"./useFormValidation-Bgk2NLp4.js";import"./useFormReset-BDYhp5bc.js";import"./IconCheck-BD_s03RH.js";import"./useRef-DWqG7DdS.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),Ne={title:"Integrations/React Hook Form/SegmentedControl",component:u,render:()=>{const t=async x=>{await c(5e3),A(x)},f=a({defaultValues:{user:""}}),S=v();return e.jsx(l,{form:f,onSubmit:t,children:e.jsxs(j,{children:[e.jsx(S,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(F,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(l,{form:t,onSubmit:async()=>await c(2e3),children:[e.jsx(u,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(b,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=a();return e.jsxs(l,{form:t,onSubmit:async()=>await c(2e3),children:[e.jsx(u,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Ue=["Default","WithFieldError","WithFocus"];export{o as Default,n as WithFieldError,m as WithFocus,Ue as __namedExportsOrder,Ne as default};

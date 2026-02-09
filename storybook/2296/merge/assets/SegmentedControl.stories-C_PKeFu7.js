import{j as e,r as g}from"./iframe-CJJ5mYnn.js";import{a,u as l,F as c,t as j,R as p,S as h}from"./ResetButton-C05rPY-2.js";import{L as i}from"./Label-KzCwLrnq.js";import{B as d}from"./Button-Cm9iNCfL.js";import{S as F}from"./Section-K47s4uAu.js";import{A as b}from"./ActionGroup-m72PHNb8.js";import{s as u}from"./Action-DnpS_czG.js";import{S as s,a as r}from"./Segment-BFJPPnO7.js";import{F as v}from"./FieldError-DFjBSzci.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CBA_L5x6.js";import"./flowComponent-BiwmgULL.js";import"./index-BXYeEKBx.js";import"./clsx-B-dksMZM.js";import"./index-BAQeQlIi.js";import"./useLocalizedStringFormatter-DftyoPOP.js";import"./context-DMBLfBJz.js";import"./useRef-BataXbH4.js";import"./utils-CzEQVu_B.js";import"./ButtonView-BZWbi-p0.js";import"./browser-Dno-4bzG.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Crm05hod.js";import"./Hidden-AXn-SW1d.js";import"./IconWarning-7VhmiBC1.js";import"./remote-__48vje9.js";import"./Text-DETIdekS.js";import"./EmulatedBoldText-Ddbav1xv.js";import"./Text-C_ulbvRg.js";import"./LoadingSpinner-BkLfehTA.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DBs8-zE9.js";import"./ProgressBar-DEVhhcDS.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-x08fx3rG.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BjSa1aTn.js";import"./useFocus-CcXCF9Et.js";import"./useFocusRing-DJCeTTlI.js";import"./useFocusable-BrXzadpt.js";import"./ContextMenuSection-JlR6lzy2.js";import"./Dialog-BJQKxFLq.js";import"./RSPContexts-BTWN0Dkl.js";import"./OverlayArrow-B9C6jKaR.js";import"./useControlledState-Bk661CCw.js";import"./Collection-B0Oi5e2R.js";import"./CollectionBuilder-DM6FVurg.js";import"./SelectionIndicator-t_QTWROb.js";import"./Separator-Ba2IdZvX.js";import"./SelectionManager-h8Xia05C.js";import"./useEvent-B7gpfAjJ.js";import"./useCollator-BLS40MVU.js";import"./FocusScope-Bpw-7kqG.js";import"./VisuallyHidden-CdWE-b-g.js";import"./getActionGroupSlot-BsVn5MxR.js";import"./useStatic-DKMjC4UR.js";import"./context-B6BNwR5M.js";import"./useFieldComponent-DJ8W8blY.js";import"./useMakeFocusable-CzbMoYd9.js";import"./RadioGroup-BNfr1D5-.js";import"./FieldError-C22n8dTl.js";import"./Form-Di0BFhhp.js";import"./useFormValidation-DDUTP5mG.js";import"./useFormReset-Bwb9lNn2.js";import"./AlertText-DqO2-SeN.js";import"./AlertIcon-CvbzdPY4.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),We={title:"Integrations/React Hook Form/SegmentedControl",component:a,render:()=>{const t=async x=>{await u(5e3),A(x)},S=l({defaultValues:{user:""}}),f=j();return e.jsx(c,{form:S,onSubmit:t,children:e.jsxs(F,{children:[e.jsx(f,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(b,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=l();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=l();return e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

import{j as e,r as g}from"./iframe-B9O3ZODG.js";import{u as a,F as l}from"./Form-BITB_N9N.js";import{L as i}from"./Label-B_yUo08w.js";import{F as c,t as j}from"./Field-C1mLbov2.js";import{B as d}from"./Button-_bqaGPGi.js";import{S as F}from"./Section-D0wO1wxm.js";import{A as b}from"./ActionGroup-Cs7TEC0c.js";import{s as u}from"./Action-BQuW1ndX.js";import{S as s,a as r}from"./Segment-CQaopXF2.js";import{F as v}from"./FieldError-Kcym6Pi9.js";import{R as p}from"./ResetButton-DICAuUJI.js";import{S as h}from"./SubmitButton-DarLBIcW.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-B4_YLigQ.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dx9-gQDY.js";import"./index-Bk8h6op_.js";import"./index-CtGMuppQ.js";import"./useLocalizedStringFormatter-B-FlnnN8.js";import"./context-Dx2UXtP2.js";import"./Label-CUW7vXaw.js";import"./utils-B6bG5pl_.js";import"./Hidden-1Y6zqjHd.js";import"./dynamic-18R3GcKE.js";import"./IconApp-Bd3S2boz.js";import"./remote-BreErbqH.js";import"./IconX-Bnf6ky8_.js";import"./IconCheck-DJGWCBoR.js";import"./Text-BRHICk1_.js";import"./EmulatedBoldText-Dpkb15Ba.js";import"./Text-Bex48AEt.js";import"./LoadingSpinner-PN97giik.js";import"./ariaLive-CzzNeS0z.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DakXwMZU.js";import"./ProgressBar-TB1EdJrk.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BXmDULV_.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CefnHgfW.js";import"./useFocus-CgajmM1R.js";import"./useFocusRing-DApHxXgU.js";import"./useFocusable-x8wHKSzm.js";import"./ContextMenuSection-Hhq7J4bP.js";import"./lib-90ocxLs-.js";import"./Dialog-DJkxmbot.js";import"./RSPContexts-_UgIwAnW.js";import"./OverlayArrow-Bv80aGiZ.js";import"./useControlledState-C-iuwE9o.js";import"./Collection-DF4Xj_TY.js";import"./CollectionBuilder-CNg30nDc.js";import"./SelectionIndicator-DTYkM1Yz.js";import"./Separator-BaiOIBBy.js";import"./SelectionManager-DYOtVSu9.js";import"./useEvent-BwQwG_n8.js";import"./useCollator-KSJVzoQQ.js";import"./FocusScope-kRkt8xnH.js";import"./VisuallyHidden-C9d_MZuH.js";import"./getActionGroupSlot-Cp-CJTrn.js";import"./useStatic-q7_HxIxT.js";import"./context-DoFxq3ih.js";import"./useFieldComponent-CRvrWckq.js";import"./useMakeFocusable-DQXJft12.js";import"./RadioGroup-W0BEtPcO.js";import"./FieldError-BrC6eHcT.js";import"./Form-BpuzTWI4.js";import"./useFormValidation-Dlo1bwd1.js";import"./useFormReset-Cc2EXXxK.js";import"./IconCheck-B-pbHyJO.js";import"./IconDanger-Aj7LdC1h.js";import"./useRef-jwi4kh1m.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),Ne={title:"Integrations/React Hook Form/SegmentedControl",component:c,render:()=>{const t=async x=>{await u(5e3),A(x)},f=a({defaultValues:{user:""}}),S=j();return e.jsx(l,{form:f,onSubmit:t,children:e.jsxs(F,{children:[e.jsx(S,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(b,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(l,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(c,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=a();return e.jsxs(l,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(c,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

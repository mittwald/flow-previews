import{j as e,r as g}from"./iframe-BzW-9mMD.js";import{u as a,F as l}from"./Form-xEKyLAtK.js";import{L as i}from"./Label-BuckRFL6.js";import{F as c,t as j}from"./Field-DBa6Uppk.js";import{B as d}from"./Button-kdt8pR0M.js";import{S as F}from"./Section-CEIUQkyy.js";import{A as b}from"./ActionGroup-DtgroWHO.js";import{s as u}from"./Action-B9rUenjA.js";import{F as v}from"./FieldError-CEOf2ovw.js";import{S as s,a as r}from"./Segment-DK9CUoaU.js";import{R as p}from"./ResetButton-D6wtVwDI.js";import{S as h}from"./SubmitButton-CJq3gcLg.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-C2fMNT9-.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-tWRCe5l6.js";import"./index-XmU95KIL.js";import"./index-DBI39Uex.js";import"./useLocalizedStringFormatter-CwmxuNTv.js";import"./context-42ert5Ah.js";import"./Label-CGJ_PWGO.js";import"./utils-BrWwMsiw.js";import"./Hidden-Dd9I5XIl.js";import"./dynamic-C266PTaS.js";import"./IconApp-BdfgmDZu.js";import"./remote-BEBWGiXy.js";import"./IconX-w5RRSC5U.js";import"./IconCheck-ORikD9Q4.js";import"./Text-V56jcQh9.js";import"./EmulatedBoldText-xlY4BdXR.js";import"./Text-lCB5Bcpt.js";import"./LoadingSpinner-D5sbFVGI.js";import"./ariaLive-CVrDG-JG.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DgUosL-f.js";import"./ProgressBar-o-cVdTXN.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Fj4NeiZR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DuLlpULp.js";import"./useFocus-dCAgOHv-.js";import"./useFocusRing-g2ZbegJf.js";import"./useFocusable-CVjqM_08.js";import"./ContextMenuSection-DvCS3UY5.js";import"./lib-90ocxLs-.js";import"./Dialog-Djk-se_O.js";import"./RSPContexts-B2m0CCTC.js";import"./OverlayArrow-CmaTRoo4.js";import"./useControlledState-Bv03b0O5.js";import"./Collection-B6Gyca40.js";import"./CollectionBuilder-C5j0Sae3.js";import"./SelectionIndicator-C_2dk6EH.js";import"./Separator-DiQ9hKYu.js";import"./SelectionManager-X9WkTlTu.js";import"./useEvent-B5jRbMBF.js";import"./useCollator-DwX94Vm0.js";import"./FocusScope-CKC8wRja.js";import"./VisuallyHidden-BEoWdW55.js";import"./getActionGroupSlot-DzbzA4bT.js";import"./useStatic-CTmF8sLz.js";import"./context-CzkXJT4I.js";import"./FieldError-YIyLtRkF.js";import"./IconDanger-BcSmAgIr.js";import"./useFieldComponent-CbusyouS.js";import"./useMakeFocusable-BHZzRfa2.js";import"./RadioGroup-CIATfVJp.js";import"./Form-DVsU3UIy.js";import"./useFormValidation-CVoSAArr.js";import"./useFormReset-DSNp4f3d.js";import"./IconCheck-CBiPR7tS.js";import"./useRef-D0yR5Dxm.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),Ne={title:"Integrations/React Hook Form/SegmentedControl",component:c,render:()=>{const t=async x=>{await u(5e3),A(x)},f=a({defaultValues:{user:""}}),S=j();return e.jsx(l,{form:f,onSubmit:t,children:e.jsxs(F,{children:[e.jsx(S,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(b,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(l,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(c,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=a();return e.jsxs(l,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(c,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

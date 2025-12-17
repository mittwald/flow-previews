import{j as e,r as g}from"./iframe-nUnY8CpM.js";import{u as a,F as l}from"./Form-CFvv8rQ9.js";import{L as i}from"./Label-CarGuai1.js";import{F as c,t as j}from"./Field-CI5_U4-n.js";import{B as d}from"./Button-Drav3_ks.js";import{S as F}from"./Section-D3jyF995.js";import{A as b}from"./ActionGroup-DFwXau3j.js";import{s as u}from"./Action-Akn1uW1v.js";import{F as v}from"./FieldError-Dl4XoXDz.js";import{S as s,a as r}from"./Segment-B5LfCX0p.js";import{R as p}from"./ResetButton-hHtNxjTm.js";import{S as h}from"./SubmitButton-DcdLNLZc.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-vyiLhVPE.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DiVWNePS.js";import"./index-Czo4z9CC.js";import"./index-D5rarCk0.js";import"./useLocalizedStringFormatter-DxwRSSu1.js";import"./context-B5Mk59jD.js";import"./Label-B7kFjMQQ.js";import"./utils-DtyHAF7C.js";import"./Hidden-DuLhuFUb.js";import"./dynamic-BZsQ8DvG.js";import"./IconChevronDown-C6KAqmcJ.js";import"./remote-Bcop36Tp.js";import"./IconX-CEHyWrnq.js";import"./IconCheck-CMQi8hKM.js";import"./Text-CKSRxaE3.js";import"./EmulatedBoldText-CfkdfDH6.js";import"./Text-4n54moM_.js";import"./LoadingSpinner-Wr4Rr6kM.js";import"./ariaLive-BFPjGELJ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BQlojcF-.js";import"./ProgressBar-BfYlkvzs.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-ARnVSCS2.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D0chnYNQ.js";import"./useFocus-ik1bIJBj.js";import"./useFocusRing-FZMFjSRM.js";import"./useFocusable-DICTyCVG.js";import"./ContextMenuSection-DH9LKzKz.js";import"./lib-90ocxLs-.js";import"./Dialog-x6GsWu_T.js";import"./RSPContexts-CWBH7SuF.js";import"./OverlayArrow-CHkAkv_A.js";import"./useControlledState-CaC4m18c.js";import"./Collection-DKxVpLoc.js";import"./CollectionBuilder-UHR0HG3W.js";import"./SelectionIndicator-Cj3HhkcP.js";import"./Separator-DDl87Ima.js";import"./SelectionManager-f8KTi6JZ.js";import"./useEvent-DGx-2GiN.js";import"./useCollator-BNnpPJUs.js";import"./FocusScope-CB6t9Dkj.js";import"./VisuallyHidden-DJajrHPg.js";import"./getActionGroupSlot-CsQGMPlH.js";import"./useStatic-D4OCIKv7.js";import"./context-CUJwrxJk.js";import"./FieldError-CG7ulvH_.js";import"./IconDanger-BtbJ86A5.js";import"./useFieldComponent-CwsJxGlb.js";import"./useMakeFocusable-0PqtZIw6.js";import"./RadioGroup-BNxDhVuB.js";import"./Form-DX8kqEOp.js";import"./useFormValidation-BmCGlg1a.js";import"./useFormReset-B9MhH15U.js";import"./IconCheck-D_sA6pWQ.js";import"./useRef-DngU7hM5.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),Ne={title:"Integrations/React Hook Form/SegmentedControl",component:c,render:()=>{const t=async x=>{await u(5e3),A(x)},f=a({defaultValues:{user:""}}),S=j();return e.jsx(l,{form:f,onSubmit:t,children:e.jsxs(F,{children:[e.jsx(S,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(b,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(l,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(c,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=a();return e.jsxs(l,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(c,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

import{j as e,r as g}from"./iframe-DQPKoo92.js";import{a,u as l,F as c,t as j,R as p,S as h}from"./ResetButton-C9845Jax.js";import{L as i}from"./Label-Og-F06uZ.js";import{B as d}from"./Button-0l0f_jx8.js";import{S as F}from"./Section-CU_KJgGZ.js";import{A as b}from"./ActionGroup-BPPgCs6z.js";import{s as u}from"./Action-DXbaOV3K.js";import{S as s,a as r}from"./Segment-CT8MuK8j.js";import{F as v}from"./FieldError-IxBtEnB-.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DGh7GyZ8.js";import"./flowComponent-DVIe49dZ.js";import"./index-B3Bpj3GD.js";import"./clsx-B-dksMZM.js";import"./index-CnP3WCIP.js";import"./useLocalizedStringFormatter-CbBU4IdI.js";import"./context-CJqjcP4U.js";import"./useRef-DfqHgUbo.js";import"./utils-XAdJPTNp.js";import"./ButtonView-BJjz2IGv.js";import"./browser-ChlnFVHS.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DrxyNCZO.js";import"./Hidden-BalHJt_t.js";import"./IconWarning-CpLICj99.js";import"./remote-BNYVvti7.js";import"./Text-C51WlGhJ.js";import"./EmulatedBoldText-ZCYLfeIO.js";import"./Text-Y949w0K8.js";import"./LoadingSpinner-B8goxKJR.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C7sB4TeW.js";import"./ProgressBar-Cy5AjeoP.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DkBHutKV.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-ByCBMVLm.js";import"./useFocus-BE88ppMu.js";import"./useFocusRing-Cni30Eah.js";import"./useFocusable-DX4YK8A-.js";import"./ContextMenuSection-BCwogbjE.js";import"./Dialog-DjFTJjHY.js";import"./RSPContexts-C1KLf5C0.js";import"./OverlayArrow-CG2s7j2J.js";import"./useControlledState-CudIhSdL.js";import"./Collection-YBemO0n0.js";import"./CollectionBuilder-n6Ro7SqS.js";import"./SelectionIndicator-DugKwRvD.js";import"./Separator-CC-j5b8u.js";import"./SelectionManager-0yrNUuw-.js";import"./useEvent-CfqveZ0P.js";import"./useCollator-BoFTkl_Q.js";import"./FocusScope-CJXytNJ4.js";import"./VisuallyHidden-Dk42l2-2.js";import"./getActionGroupSlot-BNoomJEc.js";import"./useStatic-AmwUmW1y.js";import"./context-Fi_0LQNU.js";import"./useFieldComponent-BKiBq2W6.js";import"./useMakeFocusable-CIadxyxn.js";import"./RadioGroup-tgdE5AQi.js";import"./FieldError-C-pwln9P.js";import"./Form-C06cTOQY.js";import"./useFormValidation-B8bsM8-M.js";import"./useFormReset-C7RuWveb.js";import"./AlertText-C5_JXWa-.js";import"./AlertIcon-v4rlNZlK.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),We={title:"Integrations/React Hook Form/SegmentedControl",component:a,render:()=>{const t=async x=>{await u(5e3),A(x)},S=l({defaultValues:{user:""}}),f=j();return e.jsx(c,{form:S,onSubmit:t,children:e.jsxs(F,{children:[e.jsx(f,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(b,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=l();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=l();return e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

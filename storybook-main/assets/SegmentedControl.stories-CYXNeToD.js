import{j as r}from"./iframe-D_6zdLny.js";import{a as i,u as s,F as a,t as x}from"./Form-CRAgCDt6.js";import{L as p}from"./Label-DYStaM4r.js";import{B as n}from"./Button-Hd0_GbPh.js";import{S as f}from"./Section-BOMWvKE6.js";import{A as S}from"./ActionGroup-DJbcBDj6.js";import{s as u}from"./Action-CDIAK01E.js";import{S as c,a as t}from"./Segment-BX9yjQDL.js";import"./index-nuYtCEEu.js";import"./dynamic-fYYLqg_-.js";import"./flowComponent-OxdpfLz0.js";import"./index-BGrQFvII.js";import"./clsx-B-dksMZM.js";import"./index-CT6ZSgMj.js";import"./FieldError-ojCue57q.js";import"./IconWarning-L8yPVfI5.js";import"./FieldError-DAmKGBgj.js";import"./utils-PQD-Pczy.js";import"./Text-YMXmaajA.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLocalizedStringFormatter-D5MFHXmv.js";import"./context-BMSZp_sq.js";import"./browser-D7xr6uHh.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-iDSBX_9z.js";import"./Hidden-BN9nl5w0.js";import"./Text-BucMQu3s.js";import"./EmulatedBoldText-BmP07Dnx.js";import"./LoadingSpinner-Ca7TZ2j1.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dk-D3x3z.js";import"./ProgressBar-DN3pMQzV.js";import"./useLabel-BujF7oZS.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-HrT7PLB3.js";import"./useFocus-D07R-Di8.js";import"./useFocusRing-CwU_FKgG.js";import"./useFocusable-pGYT2QRf.js";import"./ContextMenuSection-DVDgi3BO.js";import"./Dialog-RcAnAvxk.js";import"./RSPContexts-0i8aci_3.js";import"./OverlayArrow-vA-0UH51.js";import"./useControlledState-G8Ia7XKM.js";import"./Collection-ChPbS13-.js";import"./CollectionBuilder-C8yRBwY3.js";import"./SelectionIndicator-aPzlcNCf.js";import"./Separator-CHFb939R.js";import"./SelectionManager-BR7WMr9Q.js";import"./useEvent-GLo2x5KR.js";import"./useCollator-NS9MLfPk.js";import"./FocusScope-DgQ0PiWF.js";import"./VisuallyHidden-NfEP0AbA.js";import"./getActionGroupSlot-qiCOl6fG.js";import"./useStatic-MV172PRo.js";import"./context-BfwnKq6d.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-CL_92pgO.js";import"./RadioGroup-Ci7JjXya.js";import"./Form-BEwxiqG9.js";import"./useFormValidation-B8Bdwi3p.js";import"./useFormReset-jO9kfZl0.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,g=j("submit"),Er={title:"Integrations/React Hook Form/SegmentedControl",component:i,render:()=>{const o=async h=>{await u(5e3),g(h)},l=s({defaultValues:{user:""}}),d=x();return r.jsx(a,{form:l,onSubmit:o,children:r.jsxs(f,{children:[r.jsx(d,{name:"user",children:r.jsxs(c,{children:[r.jsx(p,{children:"Role"}),r.jsx(t,{value:"admin",children:"Admin"}),r.jsx(t,{value:"member",children:"Member"}),r.jsx(t,{value:"accountant",children:"Accountant"})]})}),r.jsx(S,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},e={},m={render:()=>{const o=s();return r.jsxs(a,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(i,{name:"text",rules:{required:!0},children:r.jsxs(c,{children:[r.jsx(p,{children:"Role"}),r.jsx(t,{value:"admin",children:"Admin"}),r.jsx(t,{value:"member",children:"Member"}),r.jsx(t,{value:"accountant",children:"Accountant"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>o.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>o.setFocus("text"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"} rules={{
        required: true
      }}>
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
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};const Or=["Default","WithFocusAndError"];export{e as Default,m as WithFocusAndError,Or as __namedExportsOrder,Er as default};

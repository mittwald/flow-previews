import{j as r}from"./iframe-EtTbRQoM.js";import{a as i,u as s,F as a,t as x}from"./Form-B86kUuvW.js";import{L as p}from"./Label-BHPxSoWd.js";import{B as n}from"./Button-DxuCaQyR.js";import{S as f}from"./Section-BmVYkrqh.js";import{A as S}from"./ActionGroup-Cl4D3H2T.js";import{s as u}from"./Action-CL-CoYGw.js";import{S as c,a as t}from"./Segment-BiWCo3we.js";import"./index-nuYtCEEu.js";import"./dynamic-Cv7GHFn6.js";import"./flowComponent-CRP3amPt.js";import"./index-DwnAt2PO.js";import"./clsx-B-dksMZM.js";import"./index-rMxpLDk9.js";import"./FieldError-Bx65Dx0T.js";import"./IconWarning-CO-lUcxm.js";import"./FieldError-Dm1dzE4u.js";import"./utils-C_hvyJpn.js";import"./Text-CANjZEUs.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLocalizedStringFormatter-FAUwXJff.js";import"./context-HEbrZrvP.js";import"./browser-Cob99Do9.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-FPs7V2cE.js";import"./Hidden-BhWY_xu3.js";import"./Text-CAO-zPwU.js";import"./EmulatedBoldText-rZpq4XPn.js";import"./LoadingSpinner-QwVO93wM.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-qX7xBgDX.js";import"./ProgressBar-C-f1QmIl.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-sAonsHdy.js";import"./useFocus-9RWBE5qv.js";import"./useFocusRing-hCmULEnE.js";import"./useFocusable-Do_2l7DI.js";import"./ContextMenuSection-CGnTeLpY.js";import"./Dialog-D4gVf8vR.js";import"./RSPContexts-Cv7znJuu.js";import"./OverlayArrow-CczkULsk.js";import"./useControlledState-DmCe06Ai.js";import"./Collection-CmlnhQJV.js";import"./CollectionBuilder-DTV-m0tl.js";import"./SelectionIndicator-BOzSayKJ.js";import"./Separator-CwOt3VIi.js";import"./SelectionManager-DfS84ysN.js";import"./useEvent-DcRgbaUL.js";import"./useCollator-CjrbHKqV.js";import"./FocusScope-Dkurg4aB.js";import"./VisuallyHidden-B8Lwuqmn.js";import"./getActionGroupSlot-CxKatSQe.js";import"./useStatic-DxnBGf3l.js";import"./context-C1SllNhn.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-qjH8k0Qb.js";import"./RadioGroup-DAkDGlY3.js";import"./Form-CyJo_kk3.js";import"./useFormValidation-CisZkPpg.js";import"./useFormReset-B1BZ1rNK.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,g=j("submit"),_r={title:"Integrations/React Hook Form/SegmentedControl",component:i,render:()=>{const e=async h=>{await u(5e3),g(h)},l=s({defaultValues:{user:""}}),d=x();return r.jsx(a,{form:l,onSubmit:e,children:r.jsxs(f,{children:[r.jsx(d,{name:"user",children:r.jsxs(c,{children:[r.jsx(p,{children:"Role"}),r.jsx(t,{value:"admin",children:"Admin"}),r.jsx(t,{value:"member",children:"Member"}),r.jsx(t,{value:"accountant",children:"Accountant"})]})}),r.jsx(S,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},o={},m={render:()=>{const e=s();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(i,{name:"text",rules:{required:!0},children:r.jsxs(c,{children:[r.jsx(p,{children:"Role"}),r.jsx(t,{value:"admin",children:"Admin"}),r.jsx(t,{value:"member",children:"Member"}),r.jsx(t,{value:"accountant",children:"Accountant"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>e.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Er=["Default","WithFocusAndError"];export{o as Default,m as WithFocusAndError,Er as __namedExportsOrder,_r as default};

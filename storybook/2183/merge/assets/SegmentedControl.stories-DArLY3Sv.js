import{j as e,r as g}from"./iframe-CxIv4jMu.js";import{u as a,F as l}from"./Form-CR1_gMxu.js";import{L as i}from"./Label-B_OvHsx4.js";import{F as c,t as j}from"./Field-D2srFMWr.js";import{B as d}from"./Button-Bv_lacgK.js";import{S as F}from"./Section-B37yKHjp.js";import{A as b}from"./ActionGroup-COg7tlsY.js";import{s as u}from"./Action-Cq4Le8fd.js";import{S as s,a as r}from"./Segment-Do23CQ7p.js";import{F as v}from"./FieldError-DD8s_Iuw.js";import{R as p}from"./ResetButton-DmOGQWLj.js";import{S as h}from"./SubmitButton-kW04vR8W.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-mUCbKcee.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-40FWo67L.js";import"./index-B5A5s8TF.js";import"./index-4jtxG-aw.js";import"./useLocalizedStringFormatter-B-qTbUOV.js";import"./context-XT4iJWgw.js";import"./Label-V3_Oag-T.js";import"./utils-BWuSdLWz.js";import"./Hidden-BIUsGAI2.js";import"./dynamic-BljurmiM.js";import"./IconApp-DXeuriH2.js";import"./remote-BuINZUdg.js";import"./IconX-VSIHB7dF.js";import"./IconCheck-BZoeQ1G_.js";import"./Text-D7X_oIFw.js";import"./EmulatedBoldText-CtDmIXSm.js";import"./Text-C4fvncMS.js";import"./LoadingSpinner-BEv7DDuA.js";import"./ariaLive-BX5sV3Jf.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-FNhyxeGp.js";import"./ProgressBar-azejEpMz.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-hxWbe3_X.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CUBbufY7.js";import"./useFocus-ng3bQXxT.js";import"./useFocusRing-DX51MXuJ.js";import"./useFocusable-BUu5DuL9.js";import"./ContextMenuSection-CJBAyCsT.js";import"./lib-90ocxLs-.js";import"./Dialog-RjPLqENq.js";import"./RSPContexts-B1brESnT.js";import"./OverlayArrow-C0nssBLY.js";import"./useControlledState-BE-Fn8Ja.js";import"./Collection-qySzQ4Tg.js";import"./CollectionBuilder-DsWaPC9T.js";import"./SelectionIndicator-BuBcSB3l.js";import"./Separator-DMSGPcYD.js";import"./SelectionManager-Do_Ta6ts.js";import"./useEvent-C9rtN4FC.js";import"./useCollator-CNR9Oibt.js";import"./FocusScope-D8y0iQpb.js";import"./VisuallyHidden-UJJZphkq.js";import"./getActionGroupSlot-D-5616e_.js";import"./useStatic-WZbZ24So.js";import"./context-Di3B4AKc.js";import"./useFieldComponent-gOqU5qjG.js";import"./useMakeFocusable-Cl5TyGvP.js";import"./RadioGroup-B5rhjQeu.js";import"./FieldError-B56fKNUE.js";import"./Form-48q0jMI2.js";import"./useFormValidation-NfxZ5VuI.js";import"./useFormReset-BBuG3pIa.js";import"./IconCheck-BpdJlhem.js";import"./IconDanger-WvpDQ4XT.js";import"./useRef-CPw7e6ym.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),Ne={title:"Integrations/React Hook Form/SegmentedControl",component:c,render:()=>{const t=async x=>{await u(5e3),A(x)},f=a({defaultValues:{user:""}}),S=j();return e.jsx(l,{form:f,onSubmit:t,children:e.jsxs(F,{children:[e.jsx(S,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(b,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(l,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(c,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=a();return e.jsxs(l,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(c,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

import{j as r,r as x}from"./iframe-CxIv4jMu.js";import{u as l,F as a}from"./Form-CR1_gMxu.js";import{L as s}from"./Label-B_OvHsx4.js";import{F as c,t as j}from"./Field-D2srFMWr.js";import{B as t}from"./Button-Bv_lacgK.js";import{S}from"./Section-B37yKHjp.js";import{A as b}from"./ActionGroup-COg7tlsY.js";import{s as u}from"./Action-Cq4Le8fd.js";import{F as m}from"./FileField-DaPred79.js";import{F as B}from"./FieldError-DD8s_Iuw.js";import{R as d}from"./ResetButton-DmOGQWLj.js";import{S as p}from"./SubmitButton-kW04vR8W.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-mUCbKcee.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-40FWo67L.js";import"./index-B5A5s8TF.js";import"./index-4jtxG-aw.js";import"./useLocalizedStringFormatter-B-qTbUOV.js";import"./context-XT4iJWgw.js";import"./Label-V3_Oag-T.js";import"./utils-BWuSdLWz.js";import"./Hidden-BIUsGAI2.js";import"./dynamic-BljurmiM.js";import"./IconApp-DXeuriH2.js";import"./remote-BuINZUdg.js";import"./IconX-VSIHB7dF.js";import"./IconCheck-BZoeQ1G_.js";import"./Text-D7X_oIFw.js";import"./EmulatedBoldText-CtDmIXSm.js";import"./Text-C4fvncMS.js";import"./LoadingSpinner-BEv7DDuA.js";import"./ariaLive-BX5sV3Jf.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-FNhyxeGp.js";import"./ProgressBar-azejEpMz.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-hxWbe3_X.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CUBbufY7.js";import"./useFocus-ng3bQXxT.js";import"./useFocusRing-DX51MXuJ.js";import"./useFocusable-BUu5DuL9.js";import"./ContextMenuSection-CJBAyCsT.js";import"./lib-90ocxLs-.js";import"./Dialog-RjPLqENq.js";import"./RSPContexts-B1brESnT.js";import"./OverlayArrow-C0nssBLY.js";import"./useControlledState-BE-Fn8Ja.js";import"./Collection-qySzQ4Tg.js";import"./CollectionBuilder-DsWaPC9T.js";import"./SelectionIndicator-BuBcSB3l.js";import"./Separator-DMSGPcYD.js";import"./SelectionManager-Do_Ta6ts.js";import"./useEvent-C9rtN4FC.js";import"./useCollator-CNR9Oibt.js";import"./FocusScope-D8y0iQpb.js";import"./VisuallyHidden-UJJZphkq.js";import"./getActionGroupSlot-D-5616e_.js";import"./useStatic-WZbZ24So.js";import"./context-Di3B4AKc.js";import"./useFormValidation-NfxZ5VuI.js";import"./FieldError-B56fKNUE.js";import"./Input-F9Cu5nN7.js";import"./useFieldComponent-gOqU5qjG.js";import"./IconDanger-WvpDQ4XT.js";import"./useRef-CPw7e6ym.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),Tr={title:"Integrations/React Hook Form/FileField",component:c,render:()=>{const e=async h=>{await u(5e3),y(h)},f=l({defaultValues:{user:""}}),F=j();return r.jsx(a,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <FileField multiple>
            <Label>Certificate</Label>
            <Button variant="outline" color="secondary">
              Select
            </Button>
          </FileField>
        </Field>
        <FileField multiple isInvalid>
          <Label>Certificate</Label>
          <Button variant="outline" color="secondary">
            Select
          </Button>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </FileField>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <FileField multiple>
            <Label>Certificate</Label>
            <Button variant="outline" color="secondary">
              Select
            </Button>
          </FileField>
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
}`,...n.parameters?.docs?.source}}};const kr=["Default","WithFieldError","WithFocus"];export{o as Default,i as WithFieldError,n as WithFocus,kr as __namedExportsOrder,Tr as default};

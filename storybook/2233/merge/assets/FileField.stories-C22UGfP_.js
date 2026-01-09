import{j as r,r as x}from"./iframe-tI_lG94_.js";import{b as l,u as a,F as c,t as j}from"./Form-ADUKHz3J.js";import{L as s}from"./Label-CdVUwStZ.js";import{R as d,S as p}from"./ResetButton-CllDkjik.js";import{B as t}from"./Button-WUI-ZJ9l.js";import{S}from"./Section-Zl-SwqAC.js";import{A as b}from"./ActionGroup-d8ZYu-yv.js";import{s as u}from"./Action-CkhZi8kw.js";import{F as m}from"./FileField-DRx8vmec.js";import{F as B}from"./FieldError-DYW7UPuf.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DqOiE30k.js";import"./flowComponent-C7r6bord.js";import"./index-Cx51kJJc.js";import"./clsx-B-dksMZM.js";import"./index-CBk6rXlg.js";import"./useLocalizedStringFormatter-BU5vto5x.js";import"./context-CBF_EHvQ.js";import"./browser-DuhBvQkx.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BRs8jfGQ.js";import"./utils-bmh-HeLH.js";import"./Hidden-xjuSUFbD.js";import"./useRef-kpcDmihX.js";import"./IconWarning-BFYQkdin.js";import"./remote-CmKo-bli.js";import"./Text-DDIuCQxA.js";import"./EmulatedBoldText-CqR-YL6D.js";import"./Text-Bx7ijqLX.js";import"./LoadingSpinner-KbaLfraT.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-EHR8zEQX.js";import"./ProgressBar-B0YygRTY.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-dT-ksHYF.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C1ke7TUF.js";import"./useFocus-DCHopMY8.js";import"./useFocusRing-Dgbmnyxw.js";import"./useFocusable-BnM0ssdw.js";import"./ContextMenuSection-Co6pbj1l.js";import"./Dialog-Bo5p_Zqr.js";import"./RSPContexts-C1ceWNax.js";import"./OverlayArrow-DuDGHp0O.js";import"./useControlledState-BE5RFE46.js";import"./Collection-DCiKuUl7.js";import"./CollectionBuilder-Bsyu2Qik.js";import"./SelectionIndicator-uIlcbJnR.js";import"./Separator-AUomIBZD.js";import"./SelectionManager-BHP7q8X0.js";import"./useEvent-CrsvrwL5.js";import"./useCollator-BwiXk11m.js";import"./FocusScope-Brgrzlff.js";import"./VisuallyHidden-sfQiOa3Q.js";import"./getActionGroupSlot-DPvye52P.js";import"./useStatic-vWo9ean7.js";import"./context-Ci5c_Wjo.js";import"./useFormValidation--MR_E_GW.js";import"./FieldError-CdG59lLT.js";import"./Input-DTXfGVIZ.js";import"./useFieldComponent-_Dyiwxtg.js";import"./InlineAlert-DC2W_zeL.js";import"./AlertIcon-BkNTScum.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),Ar={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async h=>{await u(5e3),y(h)},f=a({defaultValues:{user:""}}),F=j();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Ir=["Default","WithFieldError","WithFocus"];export{o as Default,i as WithFieldError,n as WithFocus,Ir as __namedExportsOrder,Ar as default};

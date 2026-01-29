import{j as r,r as x}from"./iframe-Bj8CIgLy.js";import{a as l,u as a,F as c,t as j,R as d,S as p}from"./ResetButton-5FZ7-Sc5.js";import{L as s}from"./Label-DCfOJgVU.js";import{B as t}from"./Button-b_60CJFp.js";import{S}from"./Section-Bw-Treyf.js";import{A as b}from"./ActionGroup-C-nWA-s8.js";import{s as u}from"./Action-DbcbId4I.js";import{F as m}from"./FileField-CbEYOAco.js";import{F as B}from"./FieldError-Dbjs-A5K.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DEq-wVmB.js";import"./flowComponent-BPltRtpV.js";import"./index-BeouMsqR.js";import"./clsx-B-dksMZM.js";import"./index-DYakERwo.js";import"./useLocalizedStringFormatter-B8a-qUY7.js";import"./context-RK9vgtK2.js";import"./useRef-CJxAjFY9.js";import"./utils-D41FTHpf.js";import"./ButtonView-DoUQTLRD.js";import"./browser-Rl4DjN4H.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BAoc3jdD.js";import"./Hidden-DWJk28Vx.js";import"./IconWarning-KvO0562x.js";import"./remote-ChNLl0N8.js";import"./Text-BbFFlg8m.js";import"./EmulatedBoldText-CYAzRgIu.js";import"./Text-CVMu3Bei.js";import"./LoadingSpinner-Bl0_iJOm.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Kf97rzrP.js";import"./ProgressBar-CzzSLaP3.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-j5JIlG5u.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BLrqdZMB.js";import"./useFocus-BJLP4kuV.js";import"./useFocusRing-0HtVE4-I.js";import"./useFocusable-DNf9Dm0r.js";import"./ContextMenuSection-aa2v9fsF.js";import"./Dialog-vXYkYCcw.js";import"./RSPContexts-C3RQOwqv.js";import"./OverlayArrow-zA421arv.js";import"./useControlledState-C0IHmt74.js";import"./Collection-Ddvl2Mqw.js";import"./CollectionBuilder-BBfbdfv8.js";import"./SelectionIndicator-DBsPgOzp.js";import"./Separator-ZmTIxQU_.js";import"./SelectionManager-DK0mm2wz.js";import"./useEvent-UL9Ap3Pm.js";import"./useCollator-w2x96sHr.js";import"./FocusScope-DNVRBXI-.js";import"./VisuallyHidden-D10Fyvvv.js";import"./getActionGroupSlot-BcyfBjwk.js";import"./useStatic-BJFVwiuT.js";import"./context-CihUwagI.js";import"./useFormValidation-CuYWsRMr.js";import"./FieldError-cTj-tlV1.js";import"./Input-DxRXMpsm.js";import"./useFieldComponent-DFS7CEov.js";import"./AlertText-Bt0Daj0V.js";import"./AlertIcon-Bub-4wJk.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),qr={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async h=>{await u(5e3),y(h)},f=a({defaultValues:{user:""}}),F=j();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Ar=["Default","WithFieldError","WithFocus"];export{o as Default,i as WithFieldError,n as WithFocus,Ar as __namedExportsOrder,qr as default};

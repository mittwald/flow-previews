import{j as r,r as x}from"./iframe-pec-daIN.js";import{a as l,u as a,F as c,t as j,R as d,S as p}from"./ResetButton-BHrI3BIr.js";import{L as s}from"./Label-CElVOifK.js";import{B as t}from"./Button-TbsWowXg.js";import{S}from"./Section-DDPMHRBL.js";import{A as b}from"./ActionGroup-Cw8xMur0.js";import{s as u}from"./Action-8dbKhHvU.js";import{F as m}from"./FileField-B5QxE1jK.js";import{F as B}from"./FieldError-r6Iz548x.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-KYdmGlVp.js";import"./flowComponent-Dhs06173.js";import"./index-DJTXzqQk.js";import"./clsx-B-dksMZM.js";import"./index-CHD_W7k-.js";import"./useLocalizedStringFormatter-DQtSZIdS.js";import"./context-6wXKo3vr.js";import"./useRef-DUas6rLX.js";import"./utils-DgvXfbTX.js";import"./ButtonView-DOrN6z8l.js";import"./browser-CB013lxp.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BgXd0ScX.js";import"./Hidden-BHo1_O4t.js";import"./IconWarning-BNWGnhvf.js";import"./remote-CL_x9DF5.js";import"./Text-KadZ5_Og.js";import"./EmulatedBoldText-CH8TmYXX.js";import"./Text-ChVSp7Zj.js";import"./LoadingSpinner-DJdNJN2d.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BVdTMk7w.js";import"./ProgressBar-BMgVEN8s.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-EN4dlqGk.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BXePSkUY.js";import"./useFocus-8lECnDuB.js";import"./useFocusRing-D1bapTtD.js";import"./useFocusable-DHeceSRU.js";import"./ContextMenuSection-DNSduqHu.js";import"./Dialog-CHeMFU-y.js";import"./RSPContexts-CXn4NsJp.js";import"./OverlayArrow-DWFODRfO.js";import"./useControlledState-C8wEjdVb.js";import"./Collection-CMUMsBwk.js";import"./CollectionBuilder-UpU1wmgz.js";import"./SelectionIndicator-Cx4KKVM-.js";import"./Separator-ChvruPVC.js";import"./SelectionManager-DC-DY4jN.js";import"./useEvent-TrAkXyi-.js";import"./useCollator-Bc_1nfh_.js";import"./FocusScope-D8KAWd4v.js";import"./VisuallyHidden-CRkS1ULJ.js";import"./getActionGroupSlot-BTwNrt7T.js";import"./useStatic-DtKIUYIw.js";import"./context-CSF0VmIA.js";import"./useFormValidation-Cw4fPepy.js";import"./FieldError-DRdVsyAa.js";import"./Input-nceBJ8Dt.js";import"./useFieldComponent-BVaTpDhT.js";import"./AlertText-XXHjf97y.js";import"./AlertIcon-Df2ALci7.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),qr={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async h=>{await u(5e3),y(h)},f=a({defaultValues:{user:""}}),F=j();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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

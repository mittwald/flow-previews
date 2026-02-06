import{j as r,r as x}from"./iframe-Cs0JkT9Q.js";import{a as l,u as a,F as c,t as j,R as d,S as p}from"./ResetButton-DV0e7N6e.js";import{L as s}from"./Label-CHxievOH.js";import{B as t}from"./Button-BS2N-oft.js";import{S}from"./Section-DNo4C-Bh.js";import{A as b}from"./ActionGroup-BRxaHfr4.js";import{s as u}from"./Action-8KnSiAHu.js";import{F as m}from"./FileField-CMtAQ_K0.js";import{F as B}from"./FieldError-BZN8rJUk.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DZ8udFFw.js";import"./flowComponent-DnhH9c8U.js";import"./index-CF0rrQKO.js";import"./clsx-B-dksMZM.js";import"./index-BDmaB34G.js";import"./useLocalizedStringFormatter-CQ-MJvxZ.js";import"./context-CtFpEE6p.js";import"./useRef-CLYklu2m.js";import"./utils-BvIIGzqK.js";import"./ButtonView-DtNenCUs.js";import"./browser-Cphwy2_f.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CQSgfv4f.js";import"./Hidden-BvtrxWwl.js";import"./IconWarning-wVjX2Q6D.js";import"./remote-bYaNzVPL.js";import"./Text-l9LtklMs.js";import"./EmulatedBoldText-C1XQaUUR.js";import"./Text-Dd1xy9_M.js";import"./LoadingSpinner-FnXgTY4T.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CoGTRo7z.js";import"./ProgressBar-CG2kSUer.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CfslMsP4.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-y02TS-RC.js";import"./useFocus-DNqIDWYA.js";import"./useFocusRing-Cldy4Slr.js";import"./useFocusable-Cn5DQ2tI.js";import"./ContextMenuSection-RP0htgKT.js";import"./Dialog-n12IRs92.js";import"./RSPContexts-BDhxiX2p.js";import"./OverlayArrow-B2W5aB6f.js";import"./useControlledState-DrKGwN1m.js";import"./Collection-BVBA565q.js";import"./CollectionBuilder-BDz0phXE.js";import"./SelectionIndicator-36GmvFRO.js";import"./Separator-BWqNxSAD.js";import"./SelectionManager-DK8tNpRO.js";import"./useEvent-DfZ5FDj0.js";import"./useCollator-JQWc_WGD.js";import"./FocusScope-BXTpAFiu.js";import"./VisuallyHidden-BGmnCuXu.js";import"./getActionGroupSlot-BG1YGDa-.js";import"./useStatic-BOH6EX5_.js";import"./context-DmALYfE_.js";import"./useFormValidation-CaaIEsuY.js";import"./FieldError-zGZXG0KM.js";import"./Input-B1hEkaq5.js";import"./useFieldComponent-BGOnrhQA.js";import"./AlertText-BA7qstOH.js";import"./AlertIcon-Dko-1oCR.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),qr={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async h=>{await u(5e3),y(h)},f=a({defaultValues:{user:""}}),F=j();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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

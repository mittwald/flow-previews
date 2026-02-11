import{r as x,j as r}from"./iframe-BuRyV86k.js";import{a as l,u as a,F as c,R as d,S as p,t as j}from"./ResetButton-1DNuWBXl.js";import{L as s}from"./Label-D5Mh9PbX.js";import{B as t}from"./Button-CyndH9Xm.js";import{S}from"./Section-BWXoAIXO.js";import{A as b}from"./ActionGroup-B0lwPl2x.js";import{s as u}from"./Action-KY3p1CrK.js";import{F as m}from"./FileField-Bcqw6wga.js";import{F as B}from"./FieldError-CyZxViQf.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-clmxwr04.js";import"./flowComponent-DspQ11pS.js";import"./index-AZn-raxL.js";import"./clsx-B-dksMZM.js";import"./index-DXDzX26U.js";import"./useLocalizedStringFormatter-Dqmj3fXI.js";import"./context-C6SHLczB.js";import"./useRef-dnDUVyEs.js";import"./utils-DCjU3VYp.js";import"./ButtonView-CxrixtJG.js";import"./browser-DvnOBVed.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CVQyOr4s.js";import"./Hidden-Dduq3kE3.js";import"./IconWarning-DAJxMizk.js";import"./remote-Cg9OAbJn.js";import"./Text-DPwKDAaR.js";import"./EmulatedBoldText-m_25Q3I7.js";import"./Text-D3tRocSh.js";import"./LoadingSpinner-BX044VJ0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-0f0DNfgK.js";import"./ProgressBar-sJd2s29u.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-9drM0Q_0.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B_1LlkAk.js";import"./useFocus-CQWcTqjz.js";import"./useFocusRing-CY0UXM2e.js";import"./useFocusable-CtKU_QIU.js";import"./ContextMenuSection-Mj7n-SRG.js";import"./Dialog-aD4BOG19.js";import"./RSPContexts-Czmfvb19.js";import"./OverlayArrow-DmdSnWXA.js";import"./useControlledState-DYwoO1wA.js";import"./Collection-BEHIjUyH.js";import"./CollectionBuilder-W32wrNWH.js";import"./SelectionIndicator-r0KfSIub.js";import"./Separator-Bz6jqVd_.js";import"./SelectionManager-CGRbj4b-.js";import"./useEvent-LxFJ0S3x.js";import"./useCollator-rSEenu5t.js";import"./FocusScope-DBYeUwg2.js";import"./VisuallyHidden-BxxKUxYt.js";import"./getActionGroupSlot-BzS6Espk.js";import"./useStatic-Bozflp-3.js";import"./context-BBsiVWSW.js";import"./useFormValidation-DZRdJrD7.js";import"./FieldError-BEkkBW9r.js";import"./Input-BOqi5cwZ.js";import"./useFieldComponent-Duyh6ShH.js";import"./AlertText-Cq6PpkxX.js";import"./AlertIcon-CtbR1iuV.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),qr={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async h=>{await u(5e3),y(h)},f=a({defaultValues:{user:""}}),F=j();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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

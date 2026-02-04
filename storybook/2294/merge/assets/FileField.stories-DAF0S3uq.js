import{j as r,r as x}from"./iframe-CvJspzLv.js";import{a as l,u as a,F as c,t as j,R as d,S as p}from"./ResetButton-DDmmyPg8.js";import{L as s}from"./Label-DfZOYrgY.js";import{B as t}from"./Button-DPWvzJXv.js";import{S}from"./Section-DrXtyJcE.js";import{A as b}from"./ActionGroup-DsNPEUIc.js";import{s as u}from"./Action-CzgX1dLD.js";import{F as m}from"./FileField-BumTGLI7.js";import{F as B}from"./FieldError-DQmh2MYp.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-7-1UCAS5.js";import"./flowComponent-BI37IbCZ.js";import"./index-FNnc6AUb.js";import"./clsx-B-dksMZM.js";import"./index-Df150GVy.js";import"./useLocalizedStringFormatter-Clgc-XTf.js";import"./context-CQ77Qkvg.js";import"./useRef-eAOD_JRC.js";import"./utils-BL4G7l_u.js";import"./useOverlayController-BI0XpmO3.js";import"./context-KW9IbNQ1.js";import"./useStatic-B0ICfBk6.js";import"./ButtonView-ClFFq5XN.js";import"./browser-CBUTrPGa.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BqmnG06H.js";import"./Hidden-Cc0JeUT8.js";import"./IconWarning-BERZaob7.js";import"./remote-BqqZGE8h.js";import"./Text-QUQe3Lsq.js";import"./EmulatedBoldText-DGmAuSbD.js";import"./Text-DHLl2ajF.js";import"./LoadingSpinner-xAaU4yCn.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DpFh2ewL.js";import"./ProgressBar-CM3jPvpy.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DfL38sGR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DO5nHrqL.js";import"./useFocus-DbFf9Ktc.js";import"./useFocusRing-L-b3Tn9K.js";import"./useFocusable-C5zGZvV-.js";import"./ContextMenuSection-B9VXHai8.js";import"./Dialog-CNj22GpD.js";import"./RSPContexts-fR-6qryz.js";import"./OverlayArrow-kevdZy7A.js";import"./useControlledState-DsktkqC9.js";import"./Collection-D9feXgUJ.js";import"./CollectionBuilder-1cHqqndV.js";import"./SelectionIndicator-DujQOkfZ.js";import"./Separator-CwyBo3YQ.js";import"./SelectionManager-S2-bZThJ.js";import"./useEvent-B-O27hsR.js";import"./useCollator-BPc2CQoh.js";import"./FocusScope-BaZaaiNh.js";import"./VisuallyHidden-ksBWJgrQ.js";import"./getActionGroupSlot-DdQssjpq.js";import"./useFormValidation-CwZe5cTQ.js";import"./FieldError-DlX11YEn.js";import"./Input-qFXimabr.js";import"./useFieldComponent-43Bszd6x.js";import"./AlertText-DgMbxot0.js";import"./AlertIcon-C15Ckg1B.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),Ar={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async h=>{await u(5e3),y(h)},f=a({defaultValues:{user:""}}),F=j();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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

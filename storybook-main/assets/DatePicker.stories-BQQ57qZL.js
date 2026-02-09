import{j as r,r as j}from"./iframe-agbTJ2rk.js";import{a,u as p,F as d,t as b,R as f,S as h}from"./ResetButton-Cq6Eoa5n.js";import{L as t}from"./Label-BNNjDH32.js";import{B as u}from"./Button-Br9Yc6cY.js";import{S as E}from"./Section-CtAmdGju.js";import{A as S}from"./ActionGroup-B8CTPXx_.js";import{s as c}from"./Action-KXOin-yd.js";import{I as l,f as D,K as B}from"./DateInput-uyD9-vSH.js";import{D as o}from"./DatePicker-DxmqeEyu.js";import{F as g}from"./FieldError-BH2blnd1.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-9PkN5S4U.js";import"./flowComponent-Tp6-knTL.js";import"./index-Ck1XmQF-.js";import"./clsx-B-dksMZM.js";import"./index-DPEh44cd.js";import"./useLocalizedStringFormatter-DfJx7LFE.js";import"./context-DNnfn7OO.js";import"./useRef-HSIchM6J.js";import"./utils-Cg5Rmuuc.js";import"./ButtonView-C09bK-pd.js";import"./browser-DcYn1DNE.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Da0PgXCv.js";import"./Hidden-DehNc1Kw.js";import"./IconWarning-DBJeVzaP.js";import"./remote-zpHok2y4.js";import"./Text-DmtEYLwi.js";import"./EmulatedBoldText-_6M-JboB.js";import"./Text-B3pB98UM.js";import"./LoadingSpinner-CHOtYrBZ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-KwBkKB1A.js";import"./ProgressBar-Dtf2TWy6.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-COQ7NCDT.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DrXmkjxU.js";import"./useFocus-BFA9Y66r.js";import"./useFocusRing-Df3re3NP.js";import"./useFocusable-Dcrl6Kh-.js";import"./ContextMenuSection-BNQ2j9mF.js";import"./Dialog-A1OcXUz0.js";import"./RSPContexts-H7hhohAE.js";import"./OverlayArrow-CJVRO-c0.js";import"./useControlledState-JGLxFfPu.js";import"./Collection-BaJavd6-.js";import"./CollectionBuilder-DOQcLAsT.js";import"./SelectionIndicator-DWRc_aAr.js";import"./Separator-CPdY11g5.js";import"./SelectionManager-CzUgCcIX.js";import"./useEvent-CRzL3U9d.js";import"./useCollator-CQ6xU2WO.js";import"./FocusScope-COCAXuyM.js";import"./VisuallyHidden-C-SP4JvM.js";import"./getActionGroupSlot-_GbbmTSO.js";import"./useStatic-C0pFV-a-.js";import"./context-Dm2xLzXZ.js";import"./FieldError-D6XTyUhB.js";import"./Form-6HUwn4n1.js";import"./Group-9r9Au7aQ.js";import"./Input-CfRC_Eeo.js";import"./useFormValidation-DxAxZRFR.js";import"./useFormReset-DoFpeMzh.js";import"./useSpinButton-BlG5JbFj.js";import"./useFilter-obMuf5n2.js";import"./useFieldComponent-Bdg-2oVH.js";import"./Popover-T-SqMr4y.js";import"./useOverlayController-CpxxUC1a.js";import"./OverlayContextProvider-CL8tIiF7.js";import"./RangeCalendar-NiIHw7KH.js";import"./Heading-Clp5RNdF.js";import"./useUpdateEffect-CyV8jrK9.js";import"./AlertText-CYEytDO3.js";import"./AlertIcon-DN21MApN.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Yr={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await c(1500),y(F)},x=p({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(d,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: parseDate("2025-09-01")
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
          <DatePicker>
            <Label>Text</Label>
          </DatePicker>
        </Field>
        <DatePicker isInvalid>
          <Label>Text</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </DatePicker>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: parseDate("2025-09-01")
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <DatePicker>
            <Label>Text</Label>
          </DatePicker>
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
}`,...m.parameters?.docs?.source}}};const zr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,zr as __namedExportsOrder,Yr as default};

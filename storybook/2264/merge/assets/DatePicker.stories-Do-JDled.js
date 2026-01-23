import{j as r,r as j}from"./iframe-CL_XwmGn.js";import{b as a,u as p,F as d,t as b}from"./Form-afgYqryA.js";import{L as t}from"./Label-D8wjF5yZ.js";import{R as f,S as h}from"./ResetButton-DuDiPc2f.js";import{B as u}from"./Button-D2VcFxMo.js";import{S as E}from"./Section-DJ3JBl70.js";import{A as S}from"./ActionGroup-CTh7FmAm.js";import{s as c}from"./Action-BeuDPcZa.js";import{I as l,f as D,K as B}from"./DateInput-DvhIvDDy.js";import{D as o}from"./DatePicker-C5wHg7fC.js";import{F as g}from"./FieldError-p9GwIgel.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-qzGoZAaQ.js";import"./flowComponent-BU0F8yOM.js";import"./index-5M68WWKF.js";import"./clsx-B-dksMZM.js";import"./index-E9PNAIL6.js";import"./useLocalizedStringFormatter-y3SF15d-.js";import"./context-BrZvYWUs.js";import"./browser-BUAGSuau.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-C9CEKXVd.js";import"./utils-pMOpDdKA.js";import"./Hidden-D-ekfNfu.js";import"./useRef-VOW4feYT.js";import"./IconWarning-BJDkWSaD.js";import"./remote-vDvbK7RM.js";import"./Text-D6CnWJI6.js";import"./EmulatedBoldText-T1o3Oddg.js";import"./Text-BoyMWt4b.js";import"./LoadingSpinner-D9Wqoyf9.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CWqxXJtj.js";import"./ProgressBar-CwwrTQ5U.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-OokI145l.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BzQNsH-t.js";import"./useFocus-BpR4SkFv.js";import"./useFocusRing-vwKb8oQw.js";import"./useFocusable-CrdCOPEw.js";import"./ContextMenuSection-6x7QO-B2.js";import"./Dialog-BknS8Hxj.js";import"./RSPContexts-A2U_AiO5.js";import"./OverlayArrow-CguIeEaq.js";import"./useControlledState-CguvIA_y.js";import"./Collection-D-2fJfX0.js";import"./CollectionBuilder-D2SZxLcC.js";import"./SelectionIndicator-KxjlcYOr.js";import"./Separator-CW5j6fDP.js";import"./SelectionManager-kuBnNlHS.js";import"./useEvent-Bol6JMEe.js";import"./useCollator-DdGOjTfE.js";import"./FocusScope-D2XVNmzA.js";import"./VisuallyHidden-q4vxjiW8.js";import"./getActionGroupSlot-RL3kfRwz.js";import"./useStatic-KIt4AINJ.js";import"./context-C4d2ZO_d.js";import"./FieldError-B4bZwJpA.js";import"./Form--AezVwJ0.js";import"./Group-DciaRV8P.js";import"./Input-CUsih0HK.js";import"./useFormValidation-B17WGe6J.js";import"./useFormReset-Dt36AuVA.js";import"./useSpinButton-CqxPwKVN.js";import"./useFilter-DUaB1AVD.js";import"./useFieldComponent-CJlPbBit.js";import"./Popover-DNdwUWwE.js";import"./useOverlayController-BHc_huao.js";import"./OverlayContextProvider-DerEZw4j.js";import"./RangeCalendar-CM5wN0ID.js";import"./Heading-CAyFlpGN.js";import"./useUpdateEffect-AL0g50S_.js";import"./AlertText-ClMe5xDD.js";import"./AlertIcon-DT_6S455.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),zr={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await c(1500),y(F)},x=p({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(d,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Jr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,Jr as __namedExportsOrder,zr as default};

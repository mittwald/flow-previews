import{j as r,r as j}from"./iframe-Be6XOKZ5.js";import{u as a,F as p}from"./Form-eVrc1KBF.js";import{L as t}from"./Label-BV6L8qwz.js";import{F as d,t as b}from"./Field-C1mAmvlm.js";import{B as u}from"./Button-BryZpx7e.js";import{S as E}from"./Section-BTWBVwqS.js";import{A as S}from"./ActionGroup-w2LdjwBp.js";import{s as c}from"./Action-DlMDZkrW.js";import{a as l,$ as D,b as B}from"./DateInput-C-HmDGEa.js";import{F as g}from"./FieldError-nKJnRYyC.js";import{D as o}from"./DatePicker-sSYP8n5C.js";import{R as f}from"./ResetButton-CIg3CQL7.js";import{S as h}from"./SubmitButton-RdvYhqV5.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-DsJM6Avf.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-6mfYofmL.js";import"./index-BVQeIHXT.js";import"./index-Dwi0F_ix.js";import"./useLocalizedStringFormatter-D98CS6hT.js";import"./context-Y40TL0Hk.js";import"./Label-Da4d84kD.js";import"./utils-DTrZMB6V.js";import"./Hidden-B9nXAMyK.js";import"./dynamic-CbSjc9zn.js";import"./IconApp-BnAy9RaD.js";import"./remote-D-Pq4nVM.js";import"./IconX-IgnkgWW1.js";import"./IconCheck-BAgPnW-l.js";import"./Text-BB90vNXB.js";import"./EmulatedBoldText-BA4PJkye.js";import"./Text-BTmMxR_a.js";import"./LoadingSpinner-CCyY2N1z.js";import"./ariaLive-BV9_iZAk.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CnLdg8UY.js";import"./ProgressBar-rm9lHQqR.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DMWHK1ZY.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CK7mbUzy.js";import"./useFocus-DYvnwNR4.js";import"./useFocusRing-B31Et6wQ.js";import"./useFocusable-DlKb8H3E.js";import"./ContextMenuSection-Dcu1peX7.js";import"./lib-90ocxLs-.js";import"./Dialog-D_uiNSw9.js";import"./RSPContexts-ukpjCqjI.js";import"./OverlayArrow-C8LdGvT4.js";import"./useControlledState-D8v_kqVI.js";import"./Collection-9Rz1Z382.js";import"./CollectionBuilder-TiwdMYff.js";import"./SelectionIndicator-CQaSWhBM.js";import"./Separator-B8NszCgW.js";import"./SelectionManager-BUAbzA69.js";import"./useEvent-B2MQOoAh.js";import"./useCollator-daqLYSV2.js";import"./FocusScope-BGhm_0o7.js";import"./VisuallyHidden-G45Y0eAf.js";import"./getActionGroupSlot-C22isMYd.js";import"./useStatic-ChLd1gy1.js";import"./context-DNuic7EB.js";import"./FieldError-eVRm8xCS.js";import"./Form-C9wSRzl5.js";import"./Group-CkZTiy9Q.js";import"./Input-B17NRXjc.js";import"./useFormValidation-DMz_tWT4.js";import"./useFormReset-Bo-wy8NL.js";import"./useSpinButton-OmBJ43SO.js";import"./useFilter-C6-YXzn2.js";import"./IconDanger-CuHxVEgS.js";import"./useFieldComponent-DyzWtSt-.js";import"./Popover-CzhaJn3i.js";import"./OverlayContextProvider-DeIggxcx.js";import"./useOverlayController-DNoNJZ9S.js";import"./CalendarHeader-BTLSGOLc.js";import"./useUpdateEffect-BpbKoywo.js";import"./IconChevronRight-DJqiFmxp.js";import"./Heading-BaEEqHWo.js";import"./useRef-CvcNQxUy.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),ee={title:"Integrations/React Hook Form/DatePicker",component:d,render:()=>{const e=async F=>{await c(1500),y(F)},x=a({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(p,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},m={},s={render:()=>{const e=a({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:l("2025-09-01")}});return r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const te=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,te as __namedExportsOrder,ee as default};

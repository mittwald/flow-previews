import{j as r,r as j}from"./iframe-Pk_Kk4JL.js";import{b as a,u as p,F as d,t as b}from"./Form-Cv3LQ1Ee.js";import{L as t}from"./Label-pFLu8ztF.js";import{R as f,S as h}from"./ResetButton-6SgmR9Ge.js";import{B as u}from"./Button-D9QX6l1e.js";import{S as E}from"./Section-CNK16UAG.js";import{A as S}from"./ActionGroup-Bf9c-qmg.js";import{s as c}from"./Action-C8SSnKxx.js";import{I as l,f as D,K as B}from"./DateInput-DRttdtfY.js";import{D as o}from"./DatePicker-BTpTxhnO.js";import{F as g}from"./FieldError-2o2dfDUN.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-I4mA0X6x.js";import"./flowComponent-c6eRnhhg.js";import"./index-Cry2UgUa.js";import"./clsx-B-dksMZM.js";import"./index-BO3AnCjb.js";import"./useLocalizedStringFormatter-DWczizNw.js";import"./context-CrHSUJ76.js";import"./browser-DxGxcnNA.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BhzG_WzN.js";import"./utils-CLxMEgR2.js";import"./Hidden-D3BnJIdN.js";import"./useRef-Dfd838tz.js";import"./IconWarning-BZbEOivs.js";import"./remote-jZTk_Znj.js";import"./Text-yAUoHBmv.js";import"./EmulatedBoldText-B0MH6cxw.js";import"./Text-cuBcImQE.js";import"./LoadingSpinner-DPjJtv8A.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CmNC7e_S.js";import"./ProgressBar-R9Q052Y1.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-C5txBCfY.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BhJiygMU.js";import"./useFocus-CG8bKOp6.js";import"./useFocusRing-Cf40KqTj.js";import"./useFocusable-6mL9jMN5.js";import"./ContextMenuSection-C_1sxa8j.js";import"./Dialog-hqEaC_v2.js";import"./RSPContexts-DW-Mep96.js";import"./OverlayArrow-CX4Z7_7Y.js";import"./useControlledState-48Ld73MP.js";import"./Collection-BHxA-DrM.js";import"./CollectionBuilder-DoPbpSH9.js";import"./SelectionIndicator-yei3WI6a.js";import"./Separator-BBzznqX8.js";import"./SelectionManager-BkRtV5Co.js";import"./useEvent-CPz9WXw8.js";import"./useCollator-Doi6oCed.js";import"./FocusScope-CxdKQmWN.js";import"./VisuallyHidden-DaiW9JEZ.js";import"./getActionGroupSlot-CPzpUO6W.js";import"./useStatic-i-ZCX3ob.js";import"./context-DgSiNkYd.js";import"./FieldError-Cm-TOrp1.js";import"./Form-kujN0LYD.js";import"./Group-vGwN-WPg.js";import"./Input-DA7G6uHH.js";import"./useFormValidation-BDoYoAKM.js";import"./useFormReset-bAhSNWNb.js";import"./useSpinButton-FKtZ1Dqj.js";import"./useFilter-9NSF7SWb.js";import"./useFieldComponent-T3_INYSJ.js";import"./Popover-CNf49oKt.js";import"./useOverlayController-C-ffow-t.js";import"./OverlayContextProvider-FOEyue6v.js";import"./RangeCalendar-DZ4c4apK.js";import"./Heading-CHcXaZb2.js";import"./useUpdateEffect-BYWzOYk0.js";import"./AlertText-B5n-OsOE.js";import"./AlertIcon-BQAdHRLg.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),zr={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await c(1500),y(F)},x=p({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(d,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

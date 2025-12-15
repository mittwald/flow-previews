import{j as r,r as j}from"./iframe-CH_aTfEL.js";import{u as a,F as d}from"./Form-Dq17XsDi.js";import{L as t}from"./Label-BqL_a1sm.js";import{F as c,t as b}from"./Field-DweWJcaC.js";import{B as u}from"./Button-D53gB1eO.js";import{S as E}from"./Section-B-U_9AN9.js";import{A as S}from"./ActionGroup-DOhwLXSI.js";import{s as p}from"./Action-WNrTLAcY.js";import{a as l,$ as D,b as B}from"./DateInput-BmXcwwi_.js";import{F as g}from"./FieldError-DGABQFH-.js";import{D as o}from"./DatePicker-CTI6Z925.js";import{R as f}from"./ResetButton-CD3Uv-F4.js";import{S as h}from"./SubmitButton-DZnPOQnn.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-CjAUGP0i.js";import"./utils-C8srcrY8.js";import"./mergeRefs-BzpEnNcV.js";import"./index-XPJW_oiy.js";import"./clsx-B-dksMZM.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-lamhxTiw.js";import"./PropsContextProvider-DjBCrPYH.js";import"./useLocalizedStringFormatter-DVjHg6pM.js";import"./context-Dl7i2EFq.js";import"./ProgressBar-i73KRfPj.js";import"./Hidden-xsM_Dwee.js";import"./filterDOMProps-i7L6S0l1.js";import"./dynamic-vwb-6_Ta.js";import"./IconApp-B8Pdxs7V.js";import"./remote-ZsoG4C7l.js";import"./IconX-DC29rh3t.js";import"./IconCheck-D02mUZL5.js";import"./Text-BRh_x9bF.js";import"./EmulatedBoldText-D1x6Y0F_.js";import"./LoadingSpinner-Cfaoz3gV.js";import"./ariaLive-Cw13p-6Q.js";import"./Button-B1aqxMhV.js";import"./useFocusRing-AHO8ppps.js";import"./useFocusable-BEFnslrO.js";import"./ContextMenuSection-BQYMbGGH.js";import"./lib-90ocxLs-.js";import"./context-DeId9iUj.js";import"./RSPContexts-BB0WSv2m.js";import"./Collection-B-PgrD24.js";import"./CollectionBuilder-BkOVlqH0.js";import"./SelectionIndicator-CMFVzQc5.js";import"./Separator-IFFI1hok.js";import"./useStatic-DNN3uXbB.js";import"./getActionGroupSlot-Bn8FL-S5.js";import"./FieldError-CHaTpVnh.js";import"./Form-BfyCREyn.js";import"./Group-DrfJRaGf.js";import"./Input-B62kev5I.js";import"./useFormValidation-qjJTrH9J.js";import"./useFormReset-P8yugG2W.js";import"./useSpinButton-DNTXEWKr.js";import"./useFilter-DhuyWMn1.js";import"./IconDanger-DRvJdcN_.js";import"./useFieldComponent-JY3HqOd-.js";import"./Activity-DkWdwXP6.js";import"./TranslationProvider-CWofhASx.js";import"./OverlayContextProvider-D2TVPKxb.js";import"./useOverlayController-CA1JZthw.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./Popover-mq_MJ5zE.js";import"./CalendarHeader-CSErTvox.js";import"./useUpdateEffect-8L_Qso9j.js";import"./IconChevronRight-Byw_Evy_.js";import"./Heading-DKHBxjOZ.js";import"./useRef-CkIgL8Qx.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Hr={title:"Integrations/React Hook Form/DatePicker",component:c,render:()=>{const e=async F=>{await p(1500),y(F)},x=a({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(d,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=a({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=a({defaultValues:{field:l("2025-09-01")}});return r.jsxs(d,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Kr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,Kr as __namedExportsOrder,Hr as default};

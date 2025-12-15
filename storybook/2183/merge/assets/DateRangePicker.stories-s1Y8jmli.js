import{j as e,r as g}from"./iframe-CH_aTfEL.js";import{u as d,F as c}from"./Form-Dq17XsDi.js";import{L as t}from"./Label-BqL_a1sm.js";import{F as l,t as D}from"./Field-DweWJcaC.js";import{B as p}from"./Button-D53gB1eO.js";import{S as b}from"./Section-B-U_9AN9.js";import{A as S}from"./ActionGroup-DOhwLXSI.js";import{s as u}from"./Action-WNrTLAcY.js";import{a as f,$ as R,b as E}from"./DateInput-BmXcwwi_.js";import{F as m}from"./TranslationProvider-CWofhASx.js";import{F as B}from"./FieldError-DGABQFH-.js";import{D as o}from"./DateRangePicker-BzQ9jLwL.js";import{R as F}from"./ResetButton-CD3Uv-F4.js";import{S as h}from"./SubmitButton-DZnPOQnn.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-CjAUGP0i.js";import"./utils-C8srcrY8.js";import"./mergeRefs-BzpEnNcV.js";import"./index-XPJW_oiy.js";import"./clsx-B-dksMZM.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-lamhxTiw.js";import"./PropsContextProvider-DjBCrPYH.js";import"./useLocalizedStringFormatter-DVjHg6pM.js";import"./context-Dl7i2EFq.js";import"./ProgressBar-i73KRfPj.js";import"./Hidden-xsM_Dwee.js";import"./filterDOMProps-i7L6S0l1.js";import"./dynamic-vwb-6_Ta.js";import"./IconApp-B8Pdxs7V.js";import"./remote-ZsoG4C7l.js";import"./IconX-DC29rh3t.js";import"./IconCheck-D02mUZL5.js";import"./Text-BRh_x9bF.js";import"./EmulatedBoldText-D1x6Y0F_.js";import"./LoadingSpinner-Cfaoz3gV.js";import"./ariaLive-Cw13p-6Q.js";import"./Button-B1aqxMhV.js";import"./useFocusRing-AHO8ppps.js";import"./useFocusable-BEFnslrO.js";import"./ContextMenuSection-BQYMbGGH.js";import"./lib-90ocxLs-.js";import"./context-DeId9iUj.js";import"./RSPContexts-BB0WSv2m.js";import"./Collection-B-PgrD24.js";import"./CollectionBuilder-BkOVlqH0.js";import"./SelectionIndicator-CMFVzQc5.js";import"./Separator-IFFI1hok.js";import"./useStatic-DNN3uXbB.js";import"./getActionGroupSlot-Bn8FL-S5.js";import"./FieldError-CHaTpVnh.js";import"./Form-BfyCREyn.js";import"./Group-DrfJRaGf.js";import"./Input-B62kev5I.js";import"./useFormValidation-qjJTrH9J.js";import"./useFormReset-P8yugG2W.js";import"./useSpinButton-DNTXEWKr.js";import"./useFilter-DhuyWMn1.js";import"./OverlayContextProvider-D2TVPKxb.js";import"./Activity-DkWdwXP6.js";import"./useOverlayController-CA1JZthw.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./IconDanger-DRvJdcN_.js";import"./Popover-mq_MJ5zE.js";import"./CalendarHeader-CSErTvox.js";import"./useUpdateEffect-8L_Qso9j.js";import"./IconChevronRight-Byw_Evy_.js";import"./Heading-DKHBxjOZ.js";import"./useFieldComponent-JY3HqOd-.js";import"./useRef-CkIgL8Qx.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Ke={title:"Integrations/React Hook Form/DateRangePicker",component:l,render:()=>{const r=async j=>{await u(1500),y(j)},x=d({defaultValues:{dateRangeDefaultValue:{start:f("2025-09-01"),end:f("2025-12-24")}}}),i=D();return e.jsx(c,{form:x,onSubmit:r,children:e.jsxs(b,{children:[e.jsx(i,{name:"dateRange",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeMinValue",children:e.jsx(o,{minValue:R(E()),children:e.jsx(t,{children:"Future date range"})})}),e.jsxs(S,{children:[e.jsx(F,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},n={},s={render:()=>{const r=d({defaultValues:{field:""}});return g.useEffect(()=>{r.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(l,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:()=>{const r=d({defaultValues:{field:""}});return e.jsxs(c,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(l,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(p,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(p,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(F,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
          <DateRangePicker>
            <Label>Future Date</Label>
            <FieldDescription>Select a future date</FieldDescription>
          </DateRangePicker>
        </Field>
        <DateRangePicker isInvalid>
          <Label>Future Date</Label>
          <FieldDescription>Select a future date</FieldDescription>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </DateRangePicker>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <DateRangePicker>
            <Label>Future Date</Label>
            <FieldDescription>Select a future date</FieldDescription>
          </DateRangePicker>
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
}`,...a.parameters?.docs?.source}}};const Ne=["Default","WithFieldError","WithFocus"];export{n as Default,s as WithFieldError,a as WithFocus,Ne as __namedExportsOrder,Ke as default};

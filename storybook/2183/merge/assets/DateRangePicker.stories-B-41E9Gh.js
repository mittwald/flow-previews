import{j as e,r as g}from"./iframe-CN4G8qqm.js";import{u as d,F as c}from"./Form-BIBDTt_X.js";import{L as t}from"./Label-SrhLxamV.js";import{F as l,t as D}from"./Field-DHx6lHTS.js";import{B as p}from"./Button-Bq80dFyw.js";import{S as b}from"./Section-BzFgBFFU.js";import{A as S}from"./ActionGroup-CwhBesa8.js";import{s as u}from"./Action-Cfr2BBp2.js";import{a as f,$ as R,b as E}from"./DateInput-ySKdBzbs.js";import{F as m}from"./TranslationProvider-D4PNRj4s.js";import{F as B}from"./FieldError-ClazPaCD.js";import{D as o}from"./DateRangePicker-2NqBAC2w.js";import{R as F}from"./ResetButton-uasqmqzP.js";import{S as h}from"./SubmitButton-DXpxzH2k.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-TeUtxSTm.js";import"./utils-DbmEdXKf.js";import"./mergeRefs-B9PoHYFQ.js";import"./index-I0Qj-Cdl.js";import"./clsx-B-dksMZM.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-lamhxTiw.js";import"./PropsContextProvider-4OAE62jj.js";import"./useLocalizedStringFormatter-B9Hz40nN.js";import"./context-CcGGjrZQ.js";import"./ProgressBar-DMLVl3vw.js";import"./Hidden-BofwJMZa.js";import"./filterDOMProps-i7L6S0l1.js";import"./dynamic-D9oGWwUs.js";import"./IconChevronDown-oGa76fM6.js";import"./remote-DWrodQTa.js";import"./IconX-BxRR1JIX.js";import"./IconCheck-DqC7rWu2.js";import"./Text-0Ubm83r2.js";import"./EmulatedBoldText-moUjmeps.js";import"./LoadingSpinner-D2A4fUcq.js";import"./ariaLive-BjvyJtUO.js";import"./Button-DbVJWx45.js";import"./useFocusRing-CERaDmlf.js";import"./useFocusable-BkpoXrB2.js";import"./ContextMenuSection-D61kPd_y.js";import"./lib-90ocxLs-.js";import"./context-CQHW5bQg.js";import"./RSPContexts-DE5X9chL.js";import"./Collection-CpgGjn50.js";import"./CollectionBuilder-RP78OhS8.js";import"./SelectionIndicator-D0PPGfWn.js";import"./Separator-BYdiAAyF.js";import"./useStatic-CM9-VZa7.js";import"./getActionGroupSlot-DpgtZJxd.js";import"./FieldError-BYURGtTT.js";import"./Form-CGtio7r9.js";import"./Group-CcXOZiUc.js";import"./Input-DrCQZ-OZ.js";import"./useFormValidation-Dm9_Tt2c.js";import"./useFormReset-CiTTEZ9A.js";import"./useSpinButton-Ddo2VOfE.js";import"./useFilter-plQKBIUv.js";import"./OverlayContextProvider-HOHtpdM6.js";import"./Activity-BEbOvIp9.js";import"./useOverlayController-CzXHiyE9.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./IconDanger-BS5-adBO.js";import"./Popover-ro5fYKAY.js";import"./CalendarHeader-CvtDRI4-.js";import"./useUpdateEffect-Bm8-pQ9Z.js";import"./IconChevronRight-BTskl3O1.js";import"./Heading-BTWrK-KI.js";import"./useFieldComponent-TTf0ydYE.js";import"./useRef-BiGavIyS.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Ke={title:"Integrations/React Hook Form/DateRangePicker",component:l,render:()=>{const r=async j=>{await u(1500),y(j)},x=d({defaultValues:{dateRangeDefaultValue:{start:f("2025-09-01"),end:f("2025-12-24")}}}),i=D();return e.jsx(c,{form:x,onSubmit:r,children:e.jsxs(b,{children:[e.jsx(i,{name:"dateRange",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeMinValue",children:e.jsx(o,{minValue:R(E()),children:e.jsx(t,{children:"Future date range"})})}),e.jsxs(S,{children:[e.jsx(F,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},n={},s={render:()=>{const r=d({defaultValues:{field:""}});return g.useEffect(()=>{r.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(l,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:()=>{const r=d({defaultValues:{field:""}});return e.jsxs(c,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(l,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(p,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(p,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(F,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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

import{j as e,r as g}from"./iframe-CgbY6Bes.js";import{u as d,F as c}from"./Form-DZ9uk1zZ.js";import{L as t}from"./Label-4ok8fPIv.js";import{B as p}from"./Button-AhSsxt5Y.js";import{S as D}from"./Section-BDBFnTnO.js";import{A as b}from"./ActionGroup-CWjy7TJK.js";import{s as l}from"./Action-fZniNiQj.js";import{a as f,$ as S,b as R}from"./DateInput-B702B6k2.js";import{F as m}from"./TranslationProvider-BcRRsHoV.js";import{F as E}from"./FieldError-CfVeuV3t.js";import{D as o}from"./DateRangePicker-Bxwi5jU_.js";import{F as u,t as B}from"./Field-RwAXq-yO.js";import{R as F}from"./ResetButton-BgADhceO.js";import{S as h}from"./SubmitButton-CG5PeIMV.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-C7soFJnH.js";import"./utils-C1D540aj.js";import"./mergeRefs-CxSmTZ1y.js";import"./index-COB0h6yR.js";import"./clsx-B-dksMZM.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-lamhxTiw.js";import"./PropsContextProvider-CTdpdvjF.js";import"./useLocalizedStringFormatter-BxyHFIOH.js";import"./context-B7mjZSuw.js";import"./ProgressBar-DU_WxInK.js";import"./Hidden-DQEm4CFa.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconChevronDown-BgfzzCeX.js";import"./remote-VFFVCOtz.js";import"./IconX-Bt51Q_dW.js";import"./IconCheck-Bkr0Vsq-.js";import"./Text-VVW0omSC.js";import"./EmulatedBoldText-C19QTVcg.js";import"./LoadingSpinner-BWpI0HIx.js";import"./ariaLive-BHE3J_Iw.js";import"./Button-B5ZFMN0X.js";import"./useFocusRing-d9Vd45dy.js";import"./useFocusable-C07dHpTX.js";import"./ContextMenuSection-ChZ4OnoY.js";import"./lib-90ocxLs-.js";import"./context-dInkHyA4.js";import"./RSPContexts-nmNOlAeI.js";import"./Collection-CkSsBrfI.js";import"./CollectionBuilder-bx8YHx7t.js";import"./SelectionIndicator-Cyz4sgG-.js";import"./Separator-B-G5UFsQ.js";import"./useStatic-YWRRTJxv.js";import"./dynamic-eD-KrC4d.js";import"./getActionGroupSlot-DScHYJoT.js";import"./FieldError-ZCijCAEA.js";import"./Form-D-gyidno.js";import"./Group-CFakG5ME.js";import"./Input-DHQ0YPR8.js";import"./useFormValidation-B0VcAod8.js";import"./useFormReset-DHRVeg6P.js";import"./useSpinButton-DfRWms62.js";import"./useFilter-BflZqrbZ.js";import"./OverlayContextProvider-BX16aSJY.js";import"./Activity-CqdR7Ddt.js";import"./useOverlayController-BuHPrhsh.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./IconDanger-D9oAFjYl.js";import"./Popover-BypcnTMO.js";import"./CalendarHeader-Bg2Ry7f4.js";import"./useUpdateEffect-BtUH0n0G.js";import"./IconChevronRight-DabiMwbQ.js";import"./Heading-C-qIe53v.js";import"./useFieldComponent-DU5_3SMj.js";import"./useRef-CBqwYRkb.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Ke={title:"Integrations/React Hook Form/DateRangePicker",component:u,render:()=>{const r=async j=>{await l(1500),y(j)},x=d({defaultValues:{dateRangeDefaultValue:{start:f("2025-09-01"),end:f("2025-12-24")}}}),i=B();return e.jsx(c,{form:x,onSubmit:r,children:e.jsxs(D,{children:[e.jsx(i,{name:"dateRange",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeMinValue",children:e.jsx(o,{minValue:S(R()),children:e.jsx(t,{children:"Future date range"})})}),e.jsxs(b,{children:[e.jsx(F,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},n={},s={render:()=>{const r=d({defaultValues:{field:""}});return g.useEffect(()=>{r.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:r,onSubmit:async()=>await l(2e3),children:[e.jsx(u,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"}),e.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:()=>{const r=d({defaultValues:{field:""}});return e.jsxs(c,{form:r,onSubmit:async()=>await l(2e3),children:[e.jsx(u,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(p,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(p,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(F,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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

import{j as e,r as g}from"./iframe-CBdrHiu-.js";import{a as d,u as c,F as l,t as D,R as h,S as F}from"./ResetButton-BCVKdw_Y.js";import{L as t}from"./Label-BnDRrnHY.js";import{B as p}from"./Button-CvrzgGgN.js";import{S}from"./Section-DO3UFtDL.js";import{A as b}from"./ActionGroup-C-nbwf6U.js";import{s as u}from"./Action-CcGGE6B7.js";import{I as f,f as R,K as E}from"./DateInput-DfAMR9zy.js";import{D as o}from"./DateRangePicker-CjtspMqU.js";import{F as m}from"./FieldDescription-D24R2cXv.js";import{F as B}from"./FieldError-OVkxnP3X.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Cbo9i_64.js";import"./flowComponent-SJnnBAhb.js";import"./index-Dx3T5N_5.js";import"./clsx-B-dksMZM.js";import"./index-DbZpFDe3.js";import"./useLocalizedStringFormatter-BCYddyWG.js";import"./context-p6nKBAyO.js";import"./useRef-CXZeuied.js";import"./utils-DRjcKwJb.js";import"./ButtonView-gSA2DBTv.js";import"./browser-DtunHlVO.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Be9V6H5h.js";import"./Hidden-72868EZD.js";import"./IconWarning-B89fpQti.js";import"./remote-SRpD7Y2I.js";import"./Text-vxOKNzxr.js";import"./EmulatedBoldText-xhBM3BWX.js";import"./Text-DKFtzua6.js";import"./LoadingSpinner-B7nOYR-m.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DGOdyj-q.js";import"./ProgressBar-DeVRnANw.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CJjwA-2F.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BNG00Dag.js";import"./useFocus-BOx7sVQU.js";import"./useFocusRing-CFSl2bW1.js";import"./useFocusable-DA2EU5Pw.js";import"./ContextMenuSection-DKWGDRRC.js";import"./Dialog-C9BJ8Byi.js";import"./RSPContexts-B6JknHHE.js";import"./OverlayArrow-C9WHoJ1C.js";import"./useControlledState-H50OY390.js";import"./Collection-vGtYQGRh.js";import"./CollectionBuilder-CquvtT24.js";import"./SelectionIndicator-CeaIsc91.js";import"./Separator-CTAmEu9t.js";import"./SelectionManager-B98Z3aaT.js";import"./useEvent-CaW49TJY.js";import"./useCollator-DAsNNJgX.js";import"./FocusScope-CTh9v3q6.js";import"./VisuallyHidden-DNW2U5ZQ.js";import"./getActionGroupSlot-DGjTpfXT.js";import"./useStatic-Bx0cFIOO.js";import"./context-RwMuvTef.js";import"./FieldError-hDU9I6ir.js";import"./Form-Dpu47_EF.js";import"./Group-DDiSLZpo.js";import"./Input-3Q4wlXjr.js";import"./useFormValidation-BxN5Q1uu.js";import"./useFormReset-DzYWM4EU.js";import"./useSpinButton-DByEygXh.js";import"./useFilter-WD1HHGwz.js";import"./Popover-Blf-QLvj.js";import"./useOverlayController-s1zH8rAH.js";import"./OverlayContextProvider-DtYcAWZK.js";import"./RangeCalendar-btV-udh9.js";import"./Heading-BzPKH39A.js";import"./useUpdateEffect-DBwUZ1Fi.js";import"./useFieldComponent-CkNNSE-6.js";import"./AlertText-Be6TgPnW.js";import"./AlertIcon-DkcKW-cj.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Je={title:"Integrations/React Hook Form/DateRangePicker",component:d,render:()=>{const r=async j=>{await u(1500),y(j)},x=c({defaultValues:{dateRangeDefaultValue:{start:f("2025-09-01"),end:f("2025-12-24")}}}),i=D();return e.jsx(l,{form:x,onSubmit:r,children:e.jsxs(S,{children:[e.jsx(i,{name:"dateRange",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeMinValue",children:e.jsx(o,{minValue:R(E()),children:e.jsx(t,{children:"Future date range"})})}),e.jsxs(b,{children:[e.jsx(h,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},n={},s={render:()=>{const r=c({defaultValues:{field:""}});return g.useEffect(()=>{r.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(l,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:()=>{const r=c({defaultValues:{field:""}});return e.jsxs(l,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(p,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(p,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const Qe=["Default","WithFieldError","WithFocus"];export{n as Default,s as WithFieldError,a as WithFocus,Qe as __namedExportsOrder,Je as default};

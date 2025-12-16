import{j as r,r as g}from"./iframe-m11uA8ph.js";import{u as d,F as p}from"./Form-CTx7Oukp.js";import{L as t}from"./Label-C80bgPDj.js";import{B as u}from"./Button-Dypt8iw9.js";import{S as D}from"./Section-CbIXCBOB.js";import{A as b}from"./ActionGroup-BiGw5udN.js";import{s as c}from"./Action-DQyOyJ_Y.js";import{a as f,$ as S,b as R}from"./DateInput-CTn7FM_O.js";import{F as m}from"./FieldDescription-CZNBqhnU.js";import{F as E}from"./FieldError-DSWXJfK8.js";import{D as o}from"./DateRangePicker-C0Y4iS2U.js";import{F as l,t as B}from"./Field-C0bn00yJ.js";import{R as F}from"./ResetButton-okQ69z3w.js";import{S as h}from"./SubmitButton-W85QaJ0-.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-BsJUI2_B.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BWpYHXve.js";import"./index-bz12lFZh.js";import"./index-Cy6hiSze.js";import"./useLocalizedStringFormatter-D5x5gorP.js";import"./context-CT-J1WHN.js";import"./Label-BUyu-zI1.js";import"./utils-B2Atf1IZ.js";import"./Hidden-BdAfB0qw.js";import"./IconApp-DUFlag-8.js";import"./remote-D5wxRFjH.js";import"./IconX-1BBDmAKp.js";import"./IconCheck-DjytHR08.js";import"./Text-C8eG2T-4.js";import"./EmulatedBoldText-Dm9yhtB7.js";import"./Text-CHaozABk.js";import"./LoadingSpinner-DVUozLgf.js";import"./ariaLive-CqaAz1_k.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Hg1-qkLa.js";import"./ProgressBar-C1zZy1Lx.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BIKmTmt-.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D0Bh9t0W.js";import"./useFocus-DtmXh1uW.js";import"./useFocusRing-faXrGzgs.js";import"./useFocusable-BsiT1idP.js";import"./ContextMenuSection-DB4vcpk0.js";import"./lib-90ocxLs-.js";import"./Dialog-Dzvm1uhq.js";import"./RSPContexts-CBB4rOO8.js";import"./OverlayArrow-DhFl9stJ.js";import"./useControlledState-CQIt1v1r.js";import"./Collection-DuF4MxNY.js";import"./CollectionBuilder-SD0NxqFv.js";import"./SelectionIndicator-DxPJbj4p.js";import"./Separator-IY7J1-ik.js";import"./SelectionManager-mPOWfQXK.js";import"./useEvent-DarMwBx2.js";import"./useCollator-DrH01YYh.js";import"./FocusScope-DjZtu4PZ.js";import"./VisuallyHidden-BQh9j932.js";import"./dynamic-x9dWH5I2.js";import"./getActionGroupSlot-C8INwjTD.js";import"./useStatic-BIf93y4q.js";import"./context-BDVCp3x_.js";import"./FieldError-BiQycVeh.js";import"./Form-CFmmdLEh.js";import"./Group-CiFhizhu.js";import"./Input-ChfHUhhf.js";import"./useFormValidation-dI-EyrI5.js";import"./useFormReset-CdvwVVbr.js";import"./useSpinButton-Ba1zgatk.js";import"./useFilter-CPrzucRO.js";import"./IconDanger-BFD4weFl.js";import"./Popover-DAWJqysh.js";import"./OverlayContextProvider-CUWJ5C28.js";import"./useOverlayController-ChyiSk8n.js";import"./CalendarHeader-D9Fe9ZWr.js";import"./useUpdateEffect-DovHivSu.js";import"./IconChevronRight-CdOQHETZ.js";import"./Heading-C-dZ-n10.js";import"./useFieldComponent-BhKi7qXb.js";import"./useRef-ByFa2Cde.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),oe={title:"Integrations/React Hook Form/DateRangePicker",component:l,render:()=>{const e=async j=>{await c(1500),y(j)},x=d({defaultValues:{dateRangeDefaultValue:{start:f("2025-09-01"),end:f("2025-12-24")}}}),i=B();return r.jsx(p,{form:x,onSubmit:e,children:r.jsxs(D,{children:[r.jsx(i,{name:"dateRange",children:r.jsx(o,{children:r.jsx(t,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:r.jsx(o,{children:r.jsx(t,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeMinValue",children:r.jsx(o,{minValue:S(R()),children:r.jsx(t,{children:"Future date range"})})}),r.jsxs(b,{children:[r.jsx(F,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},n={},s={render:()=>{const e=d({defaultValues:{field:""}});return g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(o,{children:[r.jsx(t,{children:"Future Date"}),r.jsx(m,{children:"Select a future date"})]})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Future Date"}),r.jsx(m,{children:"Select a future date"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:()=>{const e=d({defaultValues:{field:""}});return r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(o,{children:[r.jsx(t,{children:"Future Date"}),r.jsx(m,{children:"Select a future date"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const ie=["Default","WithFieldError","WithFocus"];export{n as Default,s as WithFieldError,a as WithFocus,ie as __namedExportsOrder,oe as default};

import{j as r,r as g}from"./iframe-V6WnBfM7.js";import{u as d,F as p}from"./Form-BFN9X6JW.js";import{L as t}from"./Label-DEwwG9Jt.js";import{F as c,t as D}from"./Field-DySAKZE6.js";import{B as u}from"./Button-RYsAGsBp.js";import{S as b}from"./Section-C3IzM_e_.js";import{A as S}from"./ActionGroup-PdVGvWFz.js";import{s as l}from"./Action-B-oQDmqe.js";import{a as f,$ as R,b as E}from"./DateInput-abqVFY5r.js";import{F as m}from"./FieldDescription-DbMEQ_lR.js";import{F as B}from"./FieldError-CMIqd9eM.js";import{D as o}from"./DateRangePicker-BGrTd_jI.js";import{R as F}from"./ResetButton-DyXJSvX6.js";import{S as h}from"./SubmitButton-CHHAinLt.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-DYYNnrYB.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DFUX8R2_.js";import"./index-BKCF-LL0.js";import"./index-WvfsijJu.js";import"./useLocalizedStringFormatter-DNkPXAX_.js";import"./context-LYg4mQF7.js";import"./Label-CXxg3a67.js";import"./utils-XXCohoWw.js";import"./Hidden-CdYZU9wP.js";import"./dynamic-DY2czHtX.js";import"./IconApp-Dy8CvIso.js";import"./remote-BEdoHpvj.js";import"./IconX-DudELXV7.js";import"./IconCheck-C4i47zDQ.js";import"./Text-BOvroeJC.js";import"./EmulatedBoldText-C80B2tZx.js";import"./Text-D3RRQUEj.js";import"./LoadingSpinner-B8i510y1.js";import"./ariaLive-IMmTuqYB.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-X5JzQY6M.js";import"./ProgressBar-DGuSqhT6.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-EvuRJYDK.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D8kRQmXV.js";import"./useFocus-CBAz-6m6.js";import"./useFocusRing-ffR2xJu-.js";import"./useFocusable-Cu8jcZF4.js";import"./ContextMenuSection-BCiBPO23.js";import"./lib-90ocxLs-.js";import"./Dialog-C89akVID.js";import"./RSPContexts-Bt_iJ6go.js";import"./OverlayArrow-Cit__A6Y.js";import"./useControlledState-CthGvIJy.js";import"./Collection-z9VX5kUn.js";import"./CollectionBuilder-DFDOtDir.js";import"./SelectionIndicator-D4v-q-K9.js";import"./Separator-BqbnfN10.js";import"./SelectionManager-BQeEKp2X.js";import"./useEvent-DIPTDlyA.js";import"./useCollator-Dg7pOOpD.js";import"./FocusScope-CBJcWxYD.js";import"./VisuallyHidden-Cv44kzCG.js";import"./getActionGroupSlot-BOc6vLFR.js";import"./useStatic-BS6-BQsW.js";import"./context-D5s5gcMw.js";import"./FieldError-D586kEZH.js";import"./Form-hCONeUH-.js";import"./Group-Lwbt_jXO.js";import"./Input-CgTEN6Lm.js";import"./useFormValidation-sHnlqGhj.js";import"./useFormReset-C3fVW2xK.js";import"./useSpinButton-FpKTGdt2.js";import"./useFilter-B9rb7xIl.js";import"./IconDanger-XFGdJtLf.js";import"./Popover-j1dEi1Qt.js";import"./OverlayContextProvider-ClHtugeD.js";import"./useOverlayController-Bh-DL5d8.js";import"./CalendarHeader-DUM4XizN.js";import"./useUpdateEffect-C-h6xjGP.js";import"./IconChevronRight-DgXNZkmU.js";import"./Heading-ozYplv84.js";import"./useFieldComponent-0Fzy9Tw8.js";import"./useRef-dMG_y6og.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),oe={title:"Integrations/React Hook Form/DateRangePicker",component:c,render:()=>{const e=async j=>{await l(1500),y(j)},x=d({defaultValues:{dateRangeDefaultValue:{start:f("2025-09-01"),end:f("2025-12-24")}}}),i=D();return r.jsx(p,{form:x,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(i,{name:"dateRange",children:r.jsx(o,{children:r.jsx(t,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:r.jsx(o,{children:r.jsx(t,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeMinValue",children:r.jsx(o,{minValue:R(E()),children:r.jsx(t,{children:"Future date range"})})}),r.jsxs(S,{children:[r.jsx(F,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},n={},s={render:()=>{const e=d({defaultValues:{field:""}});return g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:e,onSubmit:async()=>await l(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(o,{children:[r.jsx(t,{children:"Future Date"}),r.jsx(m,{children:"Select a future date"})]})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Future Date"}),r.jsx(m,{children:"Select a future date"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:()=>{const e=d({defaultValues:{field:""}});return r.jsxs(p,{form:e,onSubmit:async()=>await l(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(o,{children:[r.jsx(t,{children:"Future Date"}),r.jsx(m,{children:"Select a future date"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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

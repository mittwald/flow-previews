import{j as e,r as g}from"./iframe-BrcQhcwR.js";import{a as d,u as c,F as l,t as D,R as h,S as F}from"./ResetButton-BB_es5yP.js";import{L as t}from"./Label-eB0oKMGS.js";import{B as p}from"./Button-DdI6TSg5.js";import{S}from"./Section-BOZrahl-.js";import{A as b}from"./ActionGroup-DQKpdPni.js";import{s as u}from"./Action-EPprNG1t.js";import{I as f,f as R,K as E}from"./DateInput-4zuZJhDP.js";import{D as o}from"./DateRangePicker-BpjMSc63.js";import{F as m}from"./FieldDescription-8e-MGFTK.js";import{F as B}from"./FieldError-D24voWaJ.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CAxQXs-G.js";import"./flowComponent-m6SyqnPg.js";import"./index-Del26Dy4.js";import"./clsx-B-dksMZM.js";import"./index-CSUT2NCR.js";import"./useLocalizedStringFormatter-hxpvTBNb.js";import"./context-DOSLHoOx.js";import"./useRef-DT2mR3RP.js";import"./utils-DM5Jp8EX.js";import"./ButtonView-B7ZIb4eI.js";import"./browser-BdJDgoMU.js";import"./Label.module-CUYTf9Jc.js";import"./Label-ChTBNZrK.js";import"./Hidden-D0_rVqY-.js";import"./IconWarning-MWZFtagw.js";import"./remote-BHShYJ5P.js";import"./Text-PyhJCmvh.js";import"./EmulatedBoldText-Bbt3btdp.js";import"./Text-CzkXk5bL.js";import"./LoadingSpinner-C-WbSXYT.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CztCXt43.js";import"./ProgressBar-DhNSphWE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-0hwKkY3Z.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BBaWFJWg.js";import"./useFocus-BKws8v7-.js";import"./useFocusRing-DEM6_VkF.js";import"./useFocusable-BcdgZhOs.js";import"./ContextMenuSection-BV3yleYZ.js";import"./Dialog-DAgI8QrG.js";import"./RSPContexts-CLcTs2D_.js";import"./OverlayArrow-DY7ECRqq.js";import"./useControlledState-DsUZezc6.js";import"./Collection-kTlo8aNF.js";import"./CollectionBuilder-DHL6mUJ2.js";import"./SelectionIndicator-Bi_ZzqWB.js";import"./Separator-BpDC4shb.js";import"./SelectionManager-B-CgmQdR.js";import"./useEvent-D8AEfF0F.js";import"./useCollator-DSAWxNmx.js";import"./FocusScope-CxLgpb_M.js";import"./VisuallyHidden-CIPoghQB.js";import"./getActionGroupSlot-Dt2slLBi.js";import"./useStatic-Cr39OxgC.js";import"./context-C9I6Qco3.js";import"./FieldError-BZvulriJ.js";import"./Form-DI5rGqIO.js";import"./Group-kTgIroHk.js";import"./Input-CFsccwbB.js";import"./useFormValidation-CstoYpvO.js";import"./useFormReset-BHDJFB5Q.js";import"./useSpinButton-CHBf_kEf.js";import"./useFilter-D5-HZ-jd.js";import"./Popover-Z1FCFlzY.js";import"./useOverlayController-DMZANwi4.js";import"./OverlayContextProvider-BfPQJL_J.js";import"./RangeCalendar-DxE4nqBr.js";import"./Heading-D_8LxtK-.js";import"./useUpdateEffect-D5mgoPAs.js";import"./useFieldComponent-CsbQ-7mY.js";import"./AlertText-BAa8Yse9.js";import"./AlertIcon-CzBRtVHG.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Je={title:"Integrations/React Hook Form/DateRangePicker",component:d,render:()=>{const r=async j=>{await u(1500),y(j)},x=c({defaultValues:{dateRangeDefaultValue:{start:f("2025-09-01"),end:f("2025-12-24")}}}),i=D();return e.jsx(l,{form:x,onSubmit:r,children:e.jsxs(S,{children:[e.jsx(i,{name:"dateRange",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeMinValue",children:e.jsx(o,{minValue:R(E()),children:e.jsx(t,{children:"Future date range"})})}),e.jsxs(b,{children:[e.jsx(h,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},n={},s={render:()=>{const r=c({defaultValues:{field:""}});return g.useEffect(()=>{r.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(l,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:()=>{const r=c({defaultValues:{field:""}});return e.jsxs(l,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(p,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(p,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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

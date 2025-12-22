import{j as e,r as g}from"./iframe-DITmTDde.js";import{b as d,u as c,F as l,t as D}from"./Form-CrJtjiP0.js";import{L as t}from"./Label-DcnJ5Vhi.js";import{R as h,S as F}from"./ResetButton-vhInV8y4.js";import{B as p}from"./Button-DgKZKMvA.js";import{S as b}from"./Section-LC8gX_k1.js";import{A as S}from"./ActionGroup-BB5mge67.js";import{s as u}from"./Action-BJnGojjr.js";import{I as f,f as R,K as E}from"./DateInput-o6ikbo20.js";import{D as o}from"./DateRangePicker-B9yzrUJM.js";import{F as m}from"./FieldDescription-BGaJf4ya.js";import{F as B}from"./FieldError-CBw2sGOe.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BjimB01T.js";import"./flowComponent-BIGGpSqP.js";import"./index-m2QHiCbK.js";import"./clsx-B-dksMZM.js";import"./index-oEm39XqO.js";import"./useLocalizedStringFormatter-IPLp48A-.js";import"./context-CEC4U_pc.js";import"./browser-wgtkTybB.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DJaUceky.js";import"./utils-C40myb20.js";import"./Hidden-8YgQRG2G.js";import"./useRef-AytpOevM.js";import"./IconWarning-FbTim4wC.js";import"./remote-BYAMMrVX.js";import"./Text-B4ALgTL8.js";import"./EmulatedBoldText-CTBn_63u.js";import"./Text-rw4H23NJ.js";import"./LoadingSpinner-CQhA1l2h.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CsPSNcu1.js";import"./ProgressBar-DNk1ASVc.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DZbkZQ01.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Cwz_fpS2.js";import"./useFocus-DrnrNdFb.js";import"./useFocusRing-DXc99t-B.js";import"./useFocusable-m8WXVW9y.js";import"./ContextMenuSection-Dk8lBhMu.js";import"./Dialog-Bmgfq9R9.js";import"./RSPContexts-jFJkk-mB.js";import"./OverlayArrow-CD7gdoFk.js";import"./useControlledState-D6UlgZp0.js";import"./Collection-CIVuuc0n.js";import"./CollectionBuilder-IVJxZg8U.js";import"./SelectionIndicator-711mCjj0.js";import"./Separator-BPOzmHFV.js";import"./SelectionManager-WdH-qHQg.js";import"./useEvent-CgJsVtlm.js";import"./useCollator-CsbGxztB.js";import"./FocusScope-zqNAAOXF.js";import"./VisuallyHidden-CcOPNtcw.js";import"./getActionGroupSlot-C8PBzZsA.js";import"./useStatic-OoNPiP3V.js";import"./context-fizPycLA.js";import"./FieldError-B8qSKLtD.js";import"./Form-C6LPNxyn.js";import"./Group-BcWNK89K.js";import"./Input-tNtxpliI.js";import"./useFormValidation-gmIFw0Kx.js";import"./useFormReset-vbhoemIT.js";import"./useSpinButton-CoagFp8N.js";import"./useFilter-Dhc8yZq1.js";import"./Popover-Zpv4dzR_.js";import"./useOverlayController-D0uk_tci.js";import"./OverlayContextProvider-4GqAJ6zk.js";import"./RangeCalendar-BArmgJ0D.js";import"./Heading-DTo4uMVU.js";import"./useUpdateEffect-Bi8osF6X.js";import"./useFieldComponent-CR_sI6nz.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),ze={title:"Integrations/React Hook Form/DateRangePicker",component:d,render:()=>{const r=async j=>{await u(1500),y(j)},x=c({defaultValues:{dateRangeDefaultValue:{start:f("2025-09-01"),end:f("2025-12-24")}}}),i=D();return e.jsx(l,{form:x,onSubmit:r,children:e.jsxs(b,{children:[e.jsx(i,{name:"dateRange",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeMinValue",children:e.jsx(o,{minValue:R(E()),children:e.jsx(t,{children:"Future date range"})})}),e.jsxs(S,{children:[e.jsx(h,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},n={},s={render:()=>{const r=c({defaultValues:{field:""}});return g.useEffect(()=>{r.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(l,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:()=>{const r=c({defaultValues:{field:""}});return e.jsxs(l,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(p,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(p,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const Je=["Default","WithFieldError","WithFocus"];export{n as Default,s as WithFieldError,a as WithFocus,Je as __namedExportsOrder,ze as default};

import{j as e,r as g}from"./iframe-P-BtG9en.js";import{a as d,u as c,F as l,t as D,R as h,S as F}from"./ResetButton-Bun6L1Pq.js";import{L as t}from"./Label-P3DTYY4f.js";import{B as p}from"./Button-BDKyvND0.js";import{S}from"./Section-58eqO89k.js";import{A as b}from"./ActionGroup-BOaMC-Ca.js";import{s as u}from"./Action-BXaB41c4.js";import{I as f,f as R,K as E}from"./DateInput-D-ErEbuk.js";import{D as o}from"./DateRangePicker-9AvySy4M.js";import{F as m}from"./FieldDescription-DHDLfryo.js";import{F as B}from"./FieldError-BKtriW0o.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-NZeYY7PB.js";import"./flowComponent-BpgWfaNt.js";import"./index-B7vbb8bW.js";import"./clsx-B-dksMZM.js";import"./index-BvXbw6Ik.js";import"./useLocalizedStringFormatter-DMM5tmNP.js";import"./context-DgQkEglP.js";import"./useRef-Vl5p17w5.js";import"./utils-B0ReHH5J.js";import"./ButtonView-CwOL1ZjU.js";import"./browser-CAs7Gyq6.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Dy2C0Oyl.js";import"./Hidden-_62Uq0iE.js";import"./IconWarning-NSWHp5YX.js";import"./remote-CHm5B1ZS.js";import"./Text-WQ3bdi2b.js";import"./EmulatedBoldText-Dkyjs4gQ.js";import"./Text-Cuc5X3SS.js";import"./LoadingSpinner-CEdiZrnd.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CkYmzEte.js";import"./ProgressBar-DT6X9kMn.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DQN1qZoA.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DdsYmr0S.js";import"./useFocus-CaaZ7Vn6.js";import"./useFocusRing-CySMD5sm.js";import"./useFocusable-BT9LLfcI.js";import"./ContextMenuSection-DCh3mp1Z.js";import"./Dialog-CXomJO1p.js";import"./RSPContexts-Jnosxnes.js";import"./OverlayArrow-BfX9M7HU.js";import"./useControlledState-CF2gRUje.js";import"./Collection-C65VUZYL.js";import"./CollectionBuilder-DTl13Dsz.js";import"./SelectionIndicator-DSNo1Dq6.js";import"./Separator-DqzDCiom.js";import"./SelectionManager-Bov5sZzJ.js";import"./useEvent-D5tDHFnx.js";import"./useCollator-Cdxl-D7M.js";import"./FocusScope-DOTGny1g.js";import"./VisuallyHidden-DdvDFx4J.js";import"./getActionGroupSlot-CoTv8oDB.js";import"./useStatic-CkdzkAMF.js";import"./context-DzeViRSK.js";import"./FieldError-C3DeF1uc.js";import"./Form-D5TX54v-.js";import"./Group-DbH-9q8J.js";import"./Input-tDUM_w9j.js";import"./useFormValidation-ePPiHYYq.js";import"./useFormReset-EHJI2p2K.js";import"./useSpinButton-wQu-Z3ah.js";import"./useFilter-BC2jTA_C.js";import"./Popover-mshniZ9g.js";import"./useOverlayController-N6VWZ_a7.js";import"./OverlayContextProvider-c997mKVu.js";import"./RangeCalendar-BBYti6eC.js";import"./Heading-BpHPsioq.js";import"./useUpdateEffect-BNSu7CiQ.js";import"./useFieldComponent-DCdIumPj.js";import"./AlertText-B793ATvK.js";import"./AlertIcon-D-lULPsb.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Je={title:"Integrations/React Hook Form/DateRangePicker",component:d,render:()=>{const r=async j=>{await u(1500),y(j)},x=c({defaultValues:{dateRangeDefaultValue:{start:f("2025-09-01"),end:f("2025-12-24")}}}),i=D();return e.jsx(l,{form:x,onSubmit:r,children:e.jsxs(S,{children:[e.jsx(i,{name:"dateRange",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeMinValue",children:e.jsx(o,{minValue:R(E()),children:e.jsx(t,{children:"Future date range"})})}),e.jsxs(b,{children:[e.jsx(h,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},n={},s={render:()=>{const r=c({defaultValues:{field:""}});return g.useEffect(()=>{r.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(l,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:()=>{const r=c({defaultValues:{field:""}});return e.jsxs(l,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(p,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(p,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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

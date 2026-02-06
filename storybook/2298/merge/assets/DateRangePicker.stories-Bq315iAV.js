import{j as e,r as g}from"./iframe-CTX0Bv2_.js";import{a as d,u as c,F as l,t as D,R as h,S as F}from"./ResetButton-BBbbRB2z.js";import{L as t}from"./Label-Dhp6BO4i.js";import{B as p}from"./Button--JyduJMj.js";import{S}from"./Section-BB_XqpVc.js";import{A as b}from"./ActionGroup-C6Lmv597.js";import{s as u}from"./Action-IRtc2zB7.js";import{I as f,f as R,K as E}from"./DateInput-CUUBTjLw.js";import{D as o}from"./DateRangePicker-BdjYrDpv.js";import{F as m}from"./FieldDescription-4xrer537.js";import{F as B}from"./FieldError-BCaKsj_Z.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-izZr6sj3.js";import"./flowComponent-CqO4Js9m.js";import"./index-BFwThDrE.js";import"./clsx-B-dksMZM.js";import"./index-Cuy-twEi.js";import"./useLocalizedStringFormatter-Ci9fYHdG.js";import"./context-BlMA_qTH.js";import"./useRef-CPlhEGUf.js";import"./utils-DEP6wxfF.js";import"./ButtonView-Dt-QAv61.js";import"./browser-NwcAgtgI.js";import"./Label.module-CUYTf9Jc.js";import"./Label-B9GQQ3x4.js";import"./Hidden-LDMxuxmc.js";import"./IconWarning-nHMyX661.js";import"./remote-Dp_KpE6s.js";import"./Text-DLhfgo2a.js";import"./EmulatedBoldText-EuanT-4h.js";import"./Text-CfE4Vxx5.js";import"./LoadingSpinner-Ch_rD6BR.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C6E7IXzn.js";import"./ProgressBar-KcEl-cak.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CflB3N3A.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BBVfaVqb.js";import"./useFocus-Brpf5vcF.js";import"./useFocusRing-jdOUMH5T.js";import"./useFocusable-C46UWCUq.js";import"./ContextMenuSection-B5km2Fq1.js";import"./Dialog-B47KQ7WD.js";import"./RSPContexts-FayjYhqz.js";import"./OverlayArrow-B_Rckldo.js";import"./useControlledState-BSzbNF-6.js";import"./Collection-C9AhhR6W.js";import"./CollectionBuilder-DIcncGvh.js";import"./SelectionIndicator-BIEwPYk3.js";import"./Separator-Bna16C5N.js";import"./SelectionManager-BPzTX_0m.js";import"./useEvent-CpnFGpfj.js";import"./useCollator-Ac6OChDz.js";import"./FocusScope-Dney2d0V.js";import"./VisuallyHidden-DBqpLolF.js";import"./getActionGroupSlot-CcrxUumb.js";import"./useStatic-CPXlsR2u.js";import"./context-DDqdITge.js";import"./FieldError-DPNf_GCP.js";import"./Form-CEQjTe99.js";import"./Group-BOL-llIy.js";import"./Input-Bb-wn0Gj.js";import"./useFormValidation-CLweFpah.js";import"./useFormReset-CFaexdLs.js";import"./useSpinButton-DXVnGWP7.js";import"./useFilter-zzsB6mUg.js";import"./Popover-CrXi74XC.js";import"./useOverlayController-DZ6rN5UT.js";import"./OverlayContextProvider-DQ_-g1_x.js";import"./RangeCalendar-Cs_zysAN.js";import"./Heading-BWaAz6go.js";import"./useUpdateEffect-zOiP5APb.js";import"./useFieldComponent-mADlv6K1.js";import"./AlertText-CzATBvzT.js";import"./AlertIcon-CvLHNETq.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Je={title:"Integrations/React Hook Form/DateRangePicker",component:d,render:()=>{const r=async j=>{await u(1500),y(j)},x=c({defaultValues:{dateRangeDefaultValue:{start:f("2025-09-01"),end:f("2025-12-24")}}}),i=D();return e.jsx(l,{form:x,onSubmit:r,children:e.jsxs(S,{children:[e.jsx(i,{name:"dateRange",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeMinValue",children:e.jsx(o,{minValue:R(E()),children:e.jsx(t,{children:"Future date range"})})}),e.jsxs(b,{children:[e.jsx(h,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},n={},s={render:()=>{const r=c({defaultValues:{field:""}});return g.useEffect(()=>{r.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(l,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:()=>{const r=c({defaultValues:{field:""}});return e.jsxs(l,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(p,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(p,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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

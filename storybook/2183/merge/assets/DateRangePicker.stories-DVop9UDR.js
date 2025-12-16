import{j as r,r as g}from"./iframe-BFixO3jI.js";import{u as d,F as p}from"./Form-CCXxtzXF.js";import{L as t}from"./Label-DDQhNyeb.js";import{F as c,t as D}from"./Field-DYUiszqZ.js";import{B as u}from"./Button-yJ8r8LHg.js";import{S as b}from"./Section-t5FnDHfW.js";import{A as S}from"./ActionGroup-IxKHIUSR.js";import{s as l}from"./Action-oG95m3o9.js";import{a as f,$ as R,b as E}from"./DateInput-C_jhI5AU.js";import{F as m}from"./FieldDescription-2Pf141Y1.js";import{F as B}from"./FieldError-DNu2tCaK.js";import{D as o}from"./DateRangePicker-BTUsDD8C.js";import{R as F}from"./ResetButton-Cks5zUP9.js";import{S as h}from"./SubmitButton-BOOIKePr.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-CbH1E9WO.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CxS2pQtr.js";import"./index-BS5E-w2o.js";import"./index-Cr8VPbn2.js";import"./useLocalizedStringFormatter-DQxUdM9Y.js";import"./context-CaTu-1Q_.js";import"./Label-dlScXtXx.js";import"./utils-DlL1jtSe.js";import"./Hidden-eVS00tin.js";import"./dynamic-hYW7P0NC.js";import"./IconApp-DCuSf9pl.js";import"./remote-DXDa28-R.js";import"./IconX-Od5S_TA6.js";import"./IconCheck-zO03gOoY.js";import"./Text-ZinnvgDr.js";import"./EmulatedBoldText-Bnw4mltQ.js";import"./Text-BnIAmJK7.js";import"./LoadingSpinner-BG4QqZls.js";import"./ariaLive-MQ5ckYPo.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BpPmVpYb.js";import"./ProgressBar-Dekjp8mr.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-R7EdTXDW.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B3RLWuiX.js";import"./useFocus-CUhSw6Xa.js";import"./useFocusRing-B3xEYT1Y.js";import"./useFocusable-9RTPH9cd.js";import"./ContextMenuSection-B4F_li7n.js";import"./lib-90ocxLs-.js";import"./Dialog-BmhfU4NV.js";import"./RSPContexts-Due0r2TQ.js";import"./OverlayArrow-DpRQz6k4.js";import"./useControlledState-DTavY4xM.js";import"./Collection-Bj9WVIl1.js";import"./CollectionBuilder-DtEqK8JD.js";import"./SelectionIndicator-CPYDzpXH.js";import"./Separator-ClPm6wme.js";import"./SelectionManager-BbesEsUN.js";import"./useEvent-BtXn_qPN.js";import"./useCollator-YeysG0II.js";import"./FocusScope-jWcc3e5S.js";import"./VisuallyHidden-DWlHhef6.js";import"./getActionGroupSlot--aYDVJlg.js";import"./useStatic-CTmMZwD4.js";import"./context-tjjAcI-d.js";import"./FieldError-CjKulGDW.js";import"./Form-PAQ4bQ0C.js";import"./Group-CzFM72Xs.js";import"./Input-_A_Ox9j0.js";import"./useFormValidation-B69zYJzr.js";import"./useFormReset-De7QdeR1.js";import"./useSpinButton-VliaxOVD.js";import"./useFilter-CjydDL9_.js";import"./IconDanger--IOlURNT.js";import"./Popover-8G6V34Cx.js";import"./OverlayContextProvider-CauyJkX9.js";import"./useOverlayController-BbOo94IO.js";import"./CalendarHeader-CKhpD6e3.js";import"./useUpdateEffect-BXCCtCG2.js";import"./IconChevronRight-BhgDZe9M.js";import"./Heading-DrjY6ZHA.js";import"./useFieldComponent-mJg7O_gG.js";import"./useRef-DL_WCxyN.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),oe={title:"Integrations/React Hook Form/DateRangePicker",component:c,render:()=>{const e=async j=>{await l(1500),y(j)},x=d({defaultValues:{dateRangeDefaultValue:{start:f("2025-09-01"),end:f("2025-12-24")}}}),i=D();return r.jsx(p,{form:x,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(i,{name:"dateRange",children:r.jsx(o,{children:r.jsx(t,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:r.jsx(o,{children:r.jsx(t,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeMinValue",children:r.jsx(o,{minValue:R(E()),children:r.jsx(t,{children:"Future date range"})})}),r.jsxs(S,{children:[r.jsx(F,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},n={},s={render:()=>{const e=d({defaultValues:{field:""}});return g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:e,onSubmit:async()=>await l(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(o,{children:[r.jsx(t,{children:"Future Date"}),r.jsx(m,{children:"Select a future date"})]})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Future Date"}),r.jsx(m,{children:"Select a future date"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:()=>{const e=d({defaultValues:{field:""}});return r.jsxs(p,{form:e,onSubmit:async()=>await l(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(o,{children:[r.jsx(t,{children:"Future Date"}),r.jsx(m,{children:"Select a future date"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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

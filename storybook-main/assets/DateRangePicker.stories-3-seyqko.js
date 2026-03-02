import{r as g,j as e}from"./iframe-Dx38AIDT.js";import{a as d,u as c,F as l,R as h,S as F,t as D}from"./ResetButton-D7LUbAoI.js";import{L as t}from"./Label-lvpVoRBR.js";import{B as u}from"./Button-Bhwtl7lS.js";import{S}from"./Section-CzQEEFga.js";import{A as b}from"./ActionGroup-CluBBM4L.js";import{s as p}from"./ActionBatch-B-iA-QhY.js";import{I as f,f as R,K as E}from"./DateInput-BwCQf8QK.js";import{D as o}from"./DateRangePicker-Me_Jn0iZ.js";import{F as m}from"./FieldDescription-BTad89Yx.js";import{F as B}from"./FieldError-DY7Z21GR.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Cw331Sxy.js";import"./flowComponent-BwBSRBJY.js";import"./index-B3w7UL3m.js";import"./clsx-B-dksMZM.js";import"./index-C4zw0wF6.js";import"./useLocalizedStringFormatter-D4oP4MPs.js";import"./context-CRsgLXVa.js";import"./ActionGroupView-RMB2K6y-.js";import"./Content-DSBqSoeM.js";import"./Heading-z0nw7kl0.js";import"./Heading-BiABk9m9.js";import"./RSPContexts-DnJfGcBy.js";import"./utils-uxa8p5vl.js";import"./Text-stRMORLN.js";import"./browser-Bgj4nWuI.js";import"./EmulatedBoldText-DkfYMVU4.js";import"./Text-CN5O_J5f.js";import"./Modal-0SZ3rvM2.js";import"./useOverlayController-Cqh70DsD.js";import"./useStatic-CD9yQ0OW.js";import"./Overlay-Dc_wkWXh.js";import"./OverlayContextProvider-tTA2mi55.js";import"./LoadingSpinner-CAXp-11u.js";import"./IconWarning-tem5fYZU.js";import"./remote-C7_Ru_dB.js";import"./Dialog-BIvPa65M.js";import"./Button-DXXdMML6.js";import"./ProgressBar-BzTC4ZoK.js";import"./Label-CRhDhtUr.js";import"./Hidden-fCjHF3ey.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel--5Xg4_7C.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BU6JmZbW.js";import"./useFocus-C3KeEXKn.js";import"./useFocusRing-XbCssGNL.js";import"./useFocusable-CIjhaoEP.js";import"./OverlayArrow-DXkjfcol.js";import"./useControlledState-BekZOXin.js";import"./Collection-DFwYI0R_.js";import"./CollectionBuilder-d7mW72oL.js";import"./SelectionIndicator-D_Yc_rq7.js";import"./Separator-BVmogCl8.js";import"./SelectionManager-BSVgVRml.js";import"./useEvent-D7Cb0aSH.js";import"./useCollator-DTKHLM3i.js";import"./FocusScope-eq4FNALu.js";import"./VisuallyHidden-ma9EryWn.js";import"./ButtonView-CU_3hWkX.js";import"./Flex-CUcKFbzJ.js";import"./useRef-BQ2mDf6F.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-Bnn5st86.js";import"./getActionGroupSlot-CnwwqW5a.js";import"./FieldError-Cjk2dDkd.js";import"./Form-CwkZdzbX.js";import"./Group-BjH18wko.js";import"./Input-BQCGNTF8.js";import"./useFormReset-DiledHxM.js";import"./useFormValidation-Dn8WL8kF.js";import"./useSpinButton-6OGuYupa.js";import"./useFilter-tBdejWju.js";import"./Popover-CMv0GXnF.js";import"./RangeCalendar-BBMB9NUW.js";import"./useUpdateEffect-Bhw_Nyxn.js";import"./useFieldComponent-CxTx8kf3.js";import"./AlertText-BEiS7w5p.js";import"./AlertIcon-BbY5ij-p.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),rr={title:"Integrations/React Hook Form/DateRangePicker",component:d,render:()=>{const r=async j=>{await p(1500),y(j)},x=c({defaultValues:{dateRangeDefaultValue:{start:f("2025-09-01"),end:f("2025-12-24")}}}),i=D();return e.jsx(l,{form:x,onSubmit:r,children:e.jsxs(S,{children:[e.jsx(i,{name:"dateRange",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeMinValue",children:e.jsx(o,{minValue:R(E()),children:e.jsx(t,{children:"Future date range"})})}),e.jsxs(b,{children:[e.jsx(h,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},n={},s={render:()=>{const r=c({defaultValues:{field:""}});return g.useEffect(()=>{r.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(l,{form:r,onSubmit:async()=>await p(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:()=>{const r=c({defaultValues:{field:""}});return e.jsxs(l,{form:r,onSubmit:async()=>await p(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(u,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(u,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const tr=["Default","WithFieldError","WithFocus"];export{n as Default,s as WithFieldError,a as WithFocus,tr as __namedExportsOrder,rr as default};

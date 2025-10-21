import{j as r}from"./iframe-D_6zdLny.js";import{a as p,u as c,F as u,t as h}from"./Form-CRAgCDt6.js";import{L as e}from"./Label-DYStaM4r.js";import{B as s}from"./Button-Hd0_GbPh.js";import{S as x}from"./Section-BOMWvKE6.js";import{A as j}from"./ActionGroup-DJbcBDj6.js";import{s as d}from"./Action-CDIAK01E.js";import{J as a,h as g,L as F}from"./DateField-B40TpUZW.js";import{D as o}from"./DateRangePicker-DoBN6Rgp.js";import{F as b}from"./FieldDescription-BmjEGOaL.js";import"./index-nuYtCEEu.js";import"./dynamic-fYYLqg_-.js";import"./flowComponent-OxdpfLz0.js";import"./index-BGrQFvII.js";import"./clsx-B-dksMZM.js";import"./index-CT6ZSgMj.js";import"./FieldError-ojCue57q.js";import"./IconWarning-L8yPVfI5.js";import"./FieldError-DAmKGBgj.js";import"./utils-PQD-Pczy.js";import"./Text-YMXmaajA.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLocalizedStringFormatter-D5MFHXmv.js";import"./context-BMSZp_sq.js";import"./browser-D7xr6uHh.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-iDSBX_9z.js";import"./Hidden-BN9nl5w0.js";import"./Text-BucMQu3s.js";import"./EmulatedBoldText-BmP07Dnx.js";import"./LoadingSpinner-Ca7TZ2j1.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dk-D3x3z.js";import"./ProgressBar-DN3pMQzV.js";import"./useLabel-BujF7oZS.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-HrT7PLB3.js";import"./useFocus-D07R-Di8.js";import"./useFocusRing-CwU_FKgG.js";import"./useFocusable-pGYT2QRf.js";import"./ContextMenuSection-DVDgi3BO.js";import"./Dialog-RcAnAvxk.js";import"./RSPContexts-0i8aci_3.js";import"./OverlayArrow-vA-0UH51.js";import"./useControlledState-G8Ia7XKM.js";import"./Collection-ChPbS13-.js";import"./CollectionBuilder-C8yRBwY3.js";import"./SelectionIndicator-aPzlcNCf.js";import"./Separator-CHFb939R.js";import"./SelectionManager-BR7WMr9Q.js";import"./useEvent-GLo2x5KR.js";import"./useCollator-NS9MLfPk.js";import"./FocusScope-DgQ0PiWF.js";import"./VisuallyHidden-NfEP0AbA.js";import"./getActionGroupSlot-qiCOl6fG.js";import"./useStatic-MV172PRo.js";import"./context-BfwnKq6d.js";import"./Form-BEwxiqG9.js";import"./Group-DD12aKc0.js";import"./Input-DeyWgLjK.js";import"./useFormValidation-B8Bdwi3p.js";import"./useFormReset-jO9kfZl0.js";import"./useSpinButton-CyrnvqWk.js";import"./useFilter-BIKF0mDd.js";import"./FormField.module-CqWyJNQI.js";import"./Popover-B3PEdI3k.js";import"./useOverlayController-ClIsDnWC.js";import"./OverlayContextProvider-D1-D5Oi5.js";import"./ClearPropsContextView-BWtGAMVv.js";import"./RangeCalendar-BsajEUc5.js";import"./Heading-CDoCnjT3.js";import"./useUpdateEffect-nzMAFCYp.js";import"./useMakeFocusable-CL_92pgO.js";const{action:D}=__STORYBOOK_MODULE_ACTIONS__,S=D("submit"),Cr={title:"Integrations/React Hook Form/DateRangePicker",component:p,render:()=>{const t=async f=>{await d(1500),S(f)},l=c({defaultValues:{dateRangeDefaultValue:{start:a("2025-09-01"),end:a("2025-12-24")}}}),i=h();return r.jsx(u,{form:l,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(i,{name:"dateRange",children:r.jsx(o,{children:r.jsx(e,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeDefaultValue",children:r.jsx(o,{children:r.jsx(e,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:r.jsx(o,{children:r.jsx(e,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeMinValue",children:r.jsx(o,{minValue:g(F()),children:r.jsx(e,{children:"Future date range"})})}),r.jsx(j,{children:r.jsx(s,{type:"submit",children:"Submit"})})]})})}},m={},n={render:()=>{const t=c();return r.jsxs(u,{form:t,onSubmit:async()=>await d(2e3),children:[r.jsx(p,{name:"text",rules:{required:!0},children:r.jsxs(o,{children:[r.jsx(e,{children:"Future Date"}),r.jsx(b,{children:"Select a future date"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(s,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(s,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(s,{type:"submit",children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"} rules={{
        required: true
      }}>
          <DateRangePicker>
            <Label>Future Date</Label>
            <FieldDescription>Select a future date</FieldDescription>
          </DateRangePicker>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};const Gr=["Default","WithFocusAndError"];export{m as Default,n as WithFocusAndError,Gr as __namedExportsOrder,Cr as default};

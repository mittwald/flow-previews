import{j as r}from"./iframe-C72LIGrp.js";import{a as h,u as x,F as j,t as D}from"./Form-BrAeY_1h.js";import{L as e}from"./Label-BuGN1EiA.js";import{B as s}from"./Button-Dmf_fI6U.js";import{S}from"./Section-CMWdy8sM.js";import{A as R}from"./ActionGroup-BgMPlWay.js";import{s as g}from"./Action-BbbbpS8d.js";import{J as a,h as y,L as B}from"./DateField-BG8zzrQ6.js";import{D as o}from"./DateRangePicker-DkeD1-qa.js";import{F as P}from"./FieldDescription-Ch1dZGOn.js";import"./index-Cun1SEai.js";import"./dynamic-M8RwUexW.js";import"./flowComponent-iVWHpCHC.js";import"./index-D0tOGuOJ.js";import"./clsx-B-dksMZM.js";import"./index-D1phmMZw.js";import"./FieldError-D1AwEDR1.js";import"./IconWarning-DoRUMKye.js";import"./FieldError-DSjxrI1_.js";import"./utils-Day1TTYQ.js";import"./Text-_4m1t08i.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-BdEN-g86.js";import"./context-BWimVEWy.js";import"./browser-Bf0-GHuQ.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-CF9BgwC5.js";import"./Hidden-qTQe9qE3.js";import"./Text-CvlnZLd7.js";import"./EmulatedBoldText-CkSYZpi_.js";import"./LoadingSpinner-_EHg-BbH.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BS54933W.js";import"./ProgressBar-BXSV1RNz.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CqQxVakl.js";import"./useFocus-B4vRNHSZ.js";import"./useFocusRing-DuRh0iim.js";import"./useFocusable-Dej5ci1L.js";import"./ContextMenuSection-DZErrfjN.js";import"./Dialog-DSx4rsSv.js";import"./RSPContexts-CxFI_fU2.js";import"./OverlayArrow-CdAhbmJ_.js";import"./useControlledState-BbMqle0_.js";import"./Collection-CdRuOc0_.js";import"./CollectionBuilder-CIcvBtxV.js";import"./context-yrxx87JI.js";import"./Separator-B7O3kRSm.js";import"./SelectionManager-BcjpThhu.js";import"./useEvent-C77oyAsY.js";import"./useCollator-BOhm7rcx.js";import"./FocusScope-CCmAn32n.js";import"./VisuallyHidden-BStPS_vY.js";import"./getActionGroupSlot-CHOOOagJ.js";import"./useStatic-DPVFgY8A.js";import"./context-BXphONxA.js";import"./Form-BHgRaZ3j.js";import"./Group-BK-2drbg.js";import"./Input-Dda4VuA-.js";import"./useFormValidation-wW6D6XQK.js";import"./useFormReset-Bg8mSl5k.js";import"./useSpinButton-Bk9dYK_C.js";import"./useFilter-DK95WFqd.js";import"./FormField.module-CqWyJNQI.js";import"./Popover-D3GlmI5m.js";import"./useOverlayController-Bq6Nzlwb.js";import"./OverlayContextProvider-C5iPb09x.js";import"./ClearPropsContextView-DQBdf73E.js";import"./RangeCalendar-DvHvhQEE.js";import"./Heading-BNkuiER5.js";import"./useUpdateEffect-CzQpd6AQ.js";import"./useMakeFocusable-cMpHNIXZ.js";const{action:$}=__STORYBOOK_MODULE_ACTIONS__,_=$("submit"),Nr={title:"Integrations/React Hook Form/DateRangePicker",component:h,render:()=>{const t=async b=>{await g(1500),_(b)},F=x({defaultValues:{dateRangeDefaultValue:{start:a("2025-09-01"),end:a("2025-12-24")}}}),i=D();return r.jsx(j,{form:F,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(i,{name:"dateRange",children:r.jsx(o,{children:r.jsx(e,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeDefaultValue",children:r.jsx(o,{children:r.jsx(e,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:r.jsx(o,{children:r.jsx(e,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeMinValue",children:r.jsx(o,{minValue:y(B()),children:r.jsx(e,{children:"Future date range"})})}),r.jsx(R,{children:r.jsx(s,{type:"submit",children:"Submit"})})]})})}},m={},n={render:()=>{const t=x();return r.jsxs(j,{form:t,onSubmit:async()=>await g(2e3),children:[r.jsx(h,{name:"text",rules:{required:!0},children:r.jsxs(o,{children:[r.jsx(e,{children:"Future Date"}),r.jsx(P,{children:"Select a future date"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(s,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(s,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(s,{type:"submit",children:"Submit"})]})}};var p,c,u;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(c=m.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,l,f;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(f=(l=n.parameters)==null?void 0:l.docs)==null?void 0:f.source}}};const Ur=["Default","WithFocusAndError"];export{m as Default,n as WithFocusAndError,Ur as __namedExportsOrder,Nr as default};

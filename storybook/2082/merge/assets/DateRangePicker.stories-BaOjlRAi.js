import{j as r}from"./iframe-EtTbRQoM.js";import{a as p,u as c,F as u,t as h}from"./Form-B86kUuvW.js";import{L as e}from"./Label-BHPxSoWd.js";import{B as s}from"./Button-DxuCaQyR.js";import{S as x}from"./Section-BmVYkrqh.js";import{A as j}from"./ActionGroup-Cl4D3H2T.js";import{s as d}from"./Action-CL-CoYGw.js";import{J as a,h as g,L as F}from"./DateField-BJ7gPXMm.js";import{D as o}from"./DateRangePicker-DRbPlUz3.js";import{F as b}from"./FieldDescription-RyyHlj0A.js";import"./index-nuYtCEEu.js";import"./dynamic-Cv7GHFn6.js";import"./flowComponent-CRP3amPt.js";import"./index-DwnAt2PO.js";import"./clsx-B-dksMZM.js";import"./index-rMxpLDk9.js";import"./FieldError-Bx65Dx0T.js";import"./IconWarning-CO-lUcxm.js";import"./FieldError-Dm1dzE4u.js";import"./utils-C_hvyJpn.js";import"./Text-CANjZEUs.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLocalizedStringFormatter-FAUwXJff.js";import"./context-HEbrZrvP.js";import"./browser-Cob99Do9.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-FPs7V2cE.js";import"./Hidden-BhWY_xu3.js";import"./Text-CAO-zPwU.js";import"./EmulatedBoldText-rZpq4XPn.js";import"./LoadingSpinner-QwVO93wM.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-qX7xBgDX.js";import"./ProgressBar-C-f1QmIl.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-sAonsHdy.js";import"./useFocus-9RWBE5qv.js";import"./useFocusRing-hCmULEnE.js";import"./useFocusable-Do_2l7DI.js";import"./ContextMenuSection-CGnTeLpY.js";import"./Dialog-D4gVf8vR.js";import"./RSPContexts-Cv7znJuu.js";import"./OverlayArrow-CczkULsk.js";import"./useControlledState-DmCe06Ai.js";import"./Collection-CmlnhQJV.js";import"./CollectionBuilder-DTV-m0tl.js";import"./SelectionIndicator-BOzSayKJ.js";import"./Separator-CwOt3VIi.js";import"./SelectionManager-DfS84ysN.js";import"./useEvent-DcRgbaUL.js";import"./useCollator-CjrbHKqV.js";import"./FocusScope-Dkurg4aB.js";import"./VisuallyHidden-B8Lwuqmn.js";import"./getActionGroupSlot-CxKatSQe.js";import"./useStatic-DxnBGf3l.js";import"./context-C1SllNhn.js";import"./Form-CyJo_kk3.js";import"./Group-DeuTwRQ_.js";import"./Input-TlPGvJ5n.js";import"./useFormValidation-CisZkPpg.js";import"./useFormReset-B1BZ1rNK.js";import"./useSpinButton-FsnqNS7d.js";import"./useFilter-BJjLne1z.js";import"./FormField.module-CqWyJNQI.js";import"./Popover-ByVAPhqX.js";import"./useOverlayController-BhlWBiph.js";import"./OverlayContextProvider-6Zh7EMbz.js";import"./ClearPropsContextView-Bx4CA8qQ.js";import"./RangeCalendar-CenfKX4-.js";import"./Heading-DTQh2nx3.js";import"./useUpdateEffect-yEmayx_8.js";import"./useMakeFocusable-qjH8k0Qb.js";const{action:D}=__STORYBOOK_MODULE_ACTIONS__,S=D("submit"),Wr={title:"Integrations/React Hook Form/DateRangePicker",component:p,render:()=>{const t=async f=>{await d(1500),S(f)},l=c({defaultValues:{dateRangeDefaultValue:{start:a("2025-09-01"),end:a("2025-12-24")}}}),i=h();return r.jsx(u,{form:l,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(i,{name:"dateRange",children:r.jsx(o,{children:r.jsx(e,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeDefaultValue",children:r.jsx(o,{children:r.jsx(e,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:r.jsx(o,{children:r.jsx(e,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeMinValue",children:r.jsx(o,{minValue:g(F()),children:r.jsx(e,{children:"Future date range"})})}),r.jsx(j,{children:r.jsx(s,{type:"submit",children:"Submit"})})]})})}},m={},n={render:()=>{const t=c();return r.jsxs(u,{form:t,onSubmit:async()=>await d(2e3),children:[r.jsx(p,{name:"text",rules:{required:!0},children:r.jsxs(o,{children:[r.jsx(e,{children:"Future Date"}),r.jsx(b,{children:"Select a future date"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(s,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(s,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(s,{type:"submit",children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Cr=["Default","WithFocusAndError"];export{m as Default,n as WithFocusAndError,Cr as __namedExportsOrder,Wr as default};

import{j as r}from"./iframe-FESji9AM.js";import{a as h,u as x,F as j,t as D}from"./Form-_7yjhTRr.js";import{L as e}from"./Label-pNVGz1sw.js";import{B as s}from"./Button-BAxmgeRc.js";import{S}from"./Section-BpWwEjxG.js";import{A as R}from"./ActionGroup-BwhCzZFA.js";import{s as g}from"./Action-CrJdyVja.js";import{J as a,h as y,L as B}from"./DateField-C-WoZgKm.js";import{D as o}from"./DateRangePicker-BBbVGoMR.js";import{F as P}from"./FieldDescription-CA-9B81B.js";import"./index-Cun1SEai.js";import"./dynamic-CUTbtcza.js";import"./flowComponent-DFQAJ_2B.js";import"./index-BqyXU5kt.js";import"./clsx-B-dksMZM.js";import"./index-ChCUOHR4.js";import"./FieldError-zF1s5-sf.js";import"./IconWarning-BN848dMt.js";import"./FieldError-DlYIOKPN.js";import"./utils-C8mGBIgx.js";import"./Text-CpJktiaj.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-CqB2I62z.js";import"./context-ChjkYhaK.js";import"./browser-CzqLgnVu.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-DTEJhL1C.js";import"./Hidden-EsiqW7jM.js";import"./Text-BCUZ6o5_.js";import"./EmulatedBoldText-DW2sem56.js";import"./LoadingSpinner-BczKcQ8x.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BW1fAfFv.js";import"./ProgressBar-BtYyhcda.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CLpB9Wju.js";import"./useFocus-Bhqj5rOY.js";import"./useFocusRing-zSoWzuoi.js";import"./useFocusable-C4O-U4lE.js";import"./ContextMenuSection-B7y0wjj1.js";import"./Dialog-CXSXfPFc.js";import"./RSPContexts-DiZSnWK-.js";import"./OverlayArrow-8xtTBq8b.js";import"./useControlledState-GWuXrIJ_.js";import"./Collection-5dsgZq8H.js";import"./CollectionBuilder-CIsMqzLE.js";import"./context-BElELkmV.js";import"./Separator-C3QdnVt7.js";import"./SelectionManager-CZcnEcDm.js";import"./useEvent-CA4CrZH2.js";import"./useCollator-B71GfqqY.js";import"./FocusScope-DVksIqcF.js";import"./VisuallyHidden-CxIvQbp6.js";import"./getActionGroupSlot-yK4DsrgL.js";import"./useStatic-JqJXV1dT.js";import"./context-igvBEEcT.js";import"./Form-BtmTLzrx.js";import"./Group-CLv-XZL2.js";import"./Input-BlcEEaiS.js";import"./useFormValidation-B9n8pxvz.js";import"./useFormReset-B3Fww5Tk.js";import"./useSpinButton-C94OVlSq.js";import"./useFilter-BmAxqWoP.js";import"./FormField.module-CqWyJNQI.js";import"./Popover-P9L7ar1v.js";import"./useOverlayController-DwbSSGzq.js";import"./OverlayContextProvider-W9DcC5Hl.js";import"./ClearPropsContextView-NtUgrnKO.js";import"./RangeCalendar-BCyulHGO.js";import"./Heading-aIRtuq7k.js";import"./useUpdateEffect-BQOKGH3G.js";import"./useMakeFocusable-BMtXa_-B.js";const{action:$}=__STORYBOOK_MODULE_ACTIONS__,_=$("submit"),Nr={title:"Integrations/React Hook Form/DateRangePicker",component:h,render:()=>{const t=async b=>{await g(1500),_(b)},F=x({defaultValues:{dateRangeDefaultValue:{start:a("2025-09-01"),end:a("2025-12-24")}}}),i=D();return r.jsx(j,{form:F,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(i,{name:"dateRange",children:r.jsx(o,{children:r.jsx(e,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeDefaultValue",children:r.jsx(o,{children:r.jsx(e,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:r.jsx(o,{children:r.jsx(e,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeMinValue",children:r.jsx(o,{minValue:y(B()),children:r.jsx(e,{children:"Future date range"})})}),r.jsx(R,{children:r.jsx(s,{type:"submit",children:"Submit"})})]})})}},m={},n={render:()=>{const t=x();return r.jsxs(j,{form:t,onSubmit:async()=>await g(2e3),children:[r.jsx(h,{name:"text",rules:{required:!0},children:r.jsxs(o,{children:[r.jsx(e,{children:"Future Date"}),r.jsx(P,{children:"Select a future date"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(s,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(s,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(s,{type:"submit",children:"Submit"})]})}};var p,c,u;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(c=m.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,l,f;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-8Gn-cQAI.js";import{a as h,u as x,F as j,t as D}from"./Form-Drx3o-9i.js";import{L as e}from"./Label-BKQD2yp-.js";import{B as s}from"./Button-BYLyJZ8T.js";import{S}from"./Section-D-_npJws.js";import{A as R}from"./ActionGroup-DeqHAwBL.js";import{s as g}from"./Action-HGXjP-6z.js";import{J as a,h as y,L as B}from"./DateField-5zF5OTsU.js";import{D as o}from"./DateRangePicker-DjDOCyP2.js";import{F as P}from"./FieldDescription-BfSaLbIT.js";import"./index-Cun1SEai.js";import"./dynamic-rXbOiSCg.js";import"./flowComponent-DkmU8bZi.js";import"./index-AzFL6bUY.js";import"./clsx-B-dksMZM.js";import"./index-UEc6MpK_.js";import"./FieldError-C-zSllwf.js";import"./IconWarning-D4orWaCC.js";import"./FieldError-BP_wpITZ.js";import"./utils-GVjct8zS.js";import"./Text-YtT3E9ZO.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-Bkj0giXD.js";import"./context-BNiVp3am.js";import"./browser-BcQIid3c.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-BTym8jb9.js";import"./Hidden-ClnO7J5u.js";import"./Text-CaltWpnJ.js";import"./EmulatedBoldText-BFjU3iq0.js";import"./LoadingSpinner-DLXLBid4.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-3o-n2ltV.js";import"./ProgressBar-Cd_i9EHd.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-ITUQCIPr.js";import"./useFocus-B0X0Lu9Z.js";import"./useFocusRing-CitWdiPC.js";import"./useFocusable-D0eqHiUC.js";import"./ContextMenuSection-BSmzwpDI.js";import"./Dialog-DaZvxqJC.js";import"./RSPContexts-BLLLZDxH.js";import"./OverlayArrow-t8YkI2AY.js";import"./useControlledState-CowCOuKH.js";import"./Collection-DWEguDCp.js";import"./CollectionBuilder-9Z-fAvba.js";import"./context-OwOTZ-QT.js";import"./Separator-Dm-csSJW.js";import"./SelectionManager-CsYJeMyB.js";import"./useEvent-CbQE1MrG.js";import"./useCollator-DlUVcb0E.js";import"./FocusScope-CFCh8ZEd.js";import"./VisuallyHidden-hAbnP3vK.js";import"./getActionGroupSlot-DshV_Wd3.js";import"./useStatic-D4LCMNvH.js";import"./context-BIaltrhp.js";import"./Form-uqEItuxM.js";import"./Group-D6MDioP3.js";import"./Input-D8m2LMBm.js";import"./useFormValidation-CDT2yp15.js";import"./useFormReset-EWszKDPA.js";import"./useSpinButton-6EdjtgPs.js";import"./useFilter-CGuGTLWm.js";import"./FormField.module-CqWyJNQI.js";import"./Popover-DmA7Dyye.js";import"./useOverlayController-byix1ALu.js";import"./OverlayContextProvider-fTDl6RtS.js";import"./ClearPropsContextView-CnCgZIgn.js";import"./RangeCalendar-nfu4Bjqn.js";import"./Heading-CLQt8OMj.js";import"./useUpdateEffect-B5_iA1ow.js";import"./useMakeFocusable-DzdpYT79.js";const{action:$}=__STORYBOOK_MODULE_ACTIONS__,_=$("submit"),Nr={title:"Integrations/React Hook Form/DateRangePicker",component:h,render:()=>{const t=async b=>{await g(1500),_(b)},F=x({defaultValues:{dateRangeDefaultValue:{start:a("2025-09-01"),end:a("2025-12-24")}}}),i=D();return r.jsx(j,{form:F,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(i,{name:"dateRange",children:r.jsx(o,{children:r.jsx(e,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeDefaultValue",children:r.jsx(o,{children:r.jsx(e,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:r.jsx(o,{children:r.jsx(e,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeMinValue",children:r.jsx(o,{minValue:y(B()),children:r.jsx(e,{children:"Future date range"})})}),r.jsx(R,{children:r.jsx(s,{type:"submit",children:"Submit"})})]})})}},m={},n={render:()=>{const t=x();return r.jsxs(j,{form:t,onSubmit:async()=>await g(2e3),children:[r.jsx(h,{name:"text",rules:{required:!0},children:r.jsxs(o,{children:[r.jsx(e,{children:"Future Date"}),r.jsx(P,{children:"Select a future date"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(s,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(s,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(s,{type:"submit",children:"Submit"})]})}};var p,c,u;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(c=m.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,l,f;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-Dyev7uqQ.js";import{a as h,u as x,F as j,t as D}from"./Form-Gu8_mx9R.js";import{L as e}from"./Label-DTUVPi2K.js";import{B as s}from"./Button-M1gfFqsi.js";import{S}from"./Section-BfDLZAnd.js";import{A as R}from"./ActionGroup-Cif2aV44.js";import{s as g}from"./Action-B4ax4ap7.js";import{J as a,h as y,L as B}from"./DateField-C6tIm5Wv.js";import{D as o}from"./DateRangePicker-DxtQ8g_w.js";import{F as P}from"./FieldDescription-B0vuMjWm.js";import"./index-Cun1SEai.js";import"./dynamic-BE-yoA5C.js";import"./flowComponent-CYF9F6TT.js";import"./index-Du7KBi6Z.js";import"./clsx-B-dksMZM.js";import"./index-CvZL7rFv.js";import"./FieldError-BvGSOrPS.js";import"./IconWarning-Bsmw3ttA.js";import"./FieldError-Nbp5sqjA.js";import"./utils-xAJ0Toj9.js";import"./Text-s2lACfdw.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-BxSCNYWk.js";import"./context-z-HIZVd9.js";import"./browser-ChaPEiup.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-DEHEOlON.js";import"./Hidden-D-qqENuK.js";import"./Text-DCNvFKD8.js";import"./EmulatedBoldText-DLRRZTZj.js";import"./LoadingSpinner-B-dR1bVB.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-bK5LqQIE.js";import"./ProgressBar-DcFpY2St.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DabLIItt.js";import"./useFocus-D9hOsqQc.js";import"./useFocusRing-Bh9Ki2YC.js";import"./useFocusable-uBBnOUX9.js";import"./ContextMenuSection-8BAKg1zJ.js";import"./Dialog-BJ5ZUOL1.js";import"./RSPContexts-CLj3WTCR.js";import"./OverlayArrow-BiwtfbnF.js";import"./useControlledState-Cwb3iJ3d.js";import"./Collection-BT_5iu3o.js";import"./CollectionBuilder-Dc0EH4jX.js";import"./context-xoyjw4Qx.js";import"./Separator-Cv2eEaeb.js";import"./SelectionManager-DOzQyaMw.js";import"./useEvent-CtspRZPb.js";import"./useCollator-BcWYCPX5.js";import"./FocusScope-BBXHLeS0.js";import"./VisuallyHidden-BtDNzz4I.js";import"./getActionGroupSlot-BeoHjYlq.js";import"./useStatic-Bud3ojrW.js";import"./context-C27PnH24.js";import"./Form-DM5JENEN.js";import"./Group-Bx2wIJZm.js";import"./Input-D9REckIy.js";import"./useFormValidation-BpwVeG4s.js";import"./useFormReset-CiUCuSgO.js";import"./useSpinButton-BzwWnvlc.js";import"./useFilter-ChtLyPYA.js";import"./FormField.module-CqWyJNQI.js";import"./Popover-In9S8XGS.js";import"./useOverlayController-CxtZks11.js";import"./OverlayContextProvider-BeIBMLsK.js";import"./ClearPropsContextView-C8RU8m_f.js";import"./RangeCalendar-mupnCNyX.js";import"./Heading-StBQxI4O.js";import"./useUpdateEffect-BOz7Zkk9.js";import"./useMakeFocusable-C9hlV0WZ.js";const{action:$}=__STORYBOOK_MODULE_ACTIONS__,_=$("submit"),Nr={title:"Integrations/React Hook Form/DateRangePicker",component:h,render:()=>{const t=async b=>{await g(1500),_(b)},F=x({defaultValues:{dateRangeDefaultValue:{start:a("2025-09-01"),end:a("2025-12-24")}}}),i=D();return r.jsx(j,{form:F,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(i,{name:"dateRange",children:r.jsx(o,{children:r.jsx(e,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeDefaultValue",children:r.jsx(o,{children:r.jsx(e,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:r.jsx(o,{children:r.jsx(e,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeMinValue",children:r.jsx(o,{minValue:y(B()),children:r.jsx(e,{children:"Future date range"})})}),r.jsx(R,{children:r.jsx(s,{type:"submit",children:"Submit"})})]})})}},m={},n={render:()=>{const t=x();return r.jsxs(j,{form:t,onSubmit:async()=>await g(2e3),children:[r.jsx(h,{name:"text",rules:{required:!0},children:r.jsxs(o,{children:[r.jsx(e,{children:"Future Date"}),r.jsx(P,{children:"Select a future date"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(s,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(s,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(s,{type:"submit",children:"Submit"})]})}};var p,c,u;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(c=m.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,l,f;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

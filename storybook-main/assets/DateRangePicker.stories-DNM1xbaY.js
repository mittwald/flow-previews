import{j as r}from"./iframe-Cxe2R7_6.js";import{a as h,u as x,F as j,t as D}from"./Form-J2UUhBWk.js";import{L as e}from"./Label-BvEZKMSr.js";import{B as s}from"./Button-DDreAfBq.js";import{S}from"./Section-CTCBpNMs.js";import{A as R}from"./ActionGroup-3nPo4GGD.js";import{s as g}from"./Action-g8e46b99.js";import{J as a,h as y,L as B}from"./DateField-TRxC0QYQ.js";import{D as o}from"./DateRangePicker-ZesEH_3_.js";import{F as P}from"./FieldDescription-BjaDofba.js";import"./index-Cun1SEai.js";import"./dynamic-C5ZbgSqQ.js";import"./flowComponent-atuhteL1.js";import"./index-BmulK9zF.js";import"./clsx-B-dksMZM.js";import"./index-C9WdiMZF.js";import"./FieldError-DJ7xx1bf.js";import"./IconWarning-Jidhe8u4.js";import"./FieldError-C0Ib8VCD.js";import"./utils-DyWdIPZh.js";import"./Text-DwJdwITw.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-Iif1rEXq.js";import"./context-C4neI5Xk.js";import"./browser-eQsbTmR1.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-bC6dqEsb.js";import"./Hidden-D2ApJihV.js";import"./Text-BRz7lILS.js";import"./EmulatedBoldText-C6_bi1Ug.js";import"./LoadingSpinner-e3lyxMd6.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CDVXHq5z.js";import"./ProgressBar-CNBuCKLn.js";import"./useLabel-D72_X68t.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CePQ8dAH.js";import"./useFocus-Cpp7XZsJ.js";import"./useFocusRing-b-PxAWXn.js";import"./useFocusable-D66X7lwl.js";import"./ContextMenuSection-Bi1QxvNY.js";import"./Dialog-Ch6Gf7aG.js";import"./RSPContexts-BTHaIq-S.js";import"./OverlayArrow-BxgQp36F.js";import"./useControlledState-B5CLhXq4.js";import"./Collection-C-iX88s0.js";import"./CollectionBuilder-DY4KGZ6m.js";import"./SelectionIndicator-BZBAluCS.js";import"./Separator-TUkk8FpW.js";import"./SelectionManager-D-Y_L5dA.js";import"./useEvent-C1DB-zaK.js";import"./useCollator-B3EheL1U.js";import"./FocusScope-NPqoHgmt.js";import"./VisuallyHidden-BVfZKHZh.js";import"./getActionGroupSlot-BsGN6_f1.js";import"./useStatic-CcLu1Qpn.js";import"./context-DVixImBB.js";import"./Form-xSvri39Q.js";import"./Group-CoOuBhM6.js";import"./Input-D9HmJNQ0.js";import"./useFormValidation-Bu_33Brb.js";import"./useFormReset-ClXq3Rv0.js";import"./useSpinButton-4gjmVF0o.js";import"./useFilter-pcCIK5rA.js";import"./FormField.module-CqWyJNQI.js";import"./Popover-CD2R0w6L.js";import"./useOverlayController-YObJaJsP.js";import"./OverlayContextProvider-CjeK4qkK.js";import"./ClearPropsContextView-qCrklifR.js";import"./RangeCalendar-9R055ptZ.js";import"./Heading-Cg-1JubH.js";import"./useUpdateEffect-DFpBdZRj.js";import"./useMakeFocusable-DEGrXNpK.js";const{action:$}=__STORYBOOK_MODULE_ACTIONS__,_=$("submit"),Ur={title:"Integrations/React Hook Form/DateRangePicker",component:h,render:()=>{const t=async b=>{await g(1500),_(b)},F=x({defaultValues:{dateRangeDefaultValue:{start:a("2025-09-01"),end:a("2025-12-24")}}}),i=D();return r.jsx(j,{form:F,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(i,{name:"dateRange",children:r.jsx(o,{children:r.jsx(e,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeDefaultValue",children:r.jsx(o,{children:r.jsx(e,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:r.jsx(o,{children:r.jsx(e,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeMinValue",children:r.jsx(o,{minValue:y(B()),children:r.jsx(e,{children:"Future date range"})})}),r.jsx(R,{children:r.jsx(s,{type:"submit",children:"Submit"})})]})})}},m={},n={render:()=>{const t=x();return r.jsxs(j,{form:t,onSubmit:async()=>await g(2e3),children:[r.jsx(h,{name:"text",rules:{required:!0},children:r.jsxs(o,{children:[r.jsx(e,{children:"Future Date"}),r.jsx(P,{children:"Select a future date"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(s,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(s,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(s,{type:"submit",children:"Submit"})]})}};var p,c,u;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(c=m.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,l,f;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(f=(l=n.parameters)==null?void 0:l.docs)==null?void 0:f.source}}};const Yr=["Default","WithFocusAndError"];export{m as Default,n as WithFocusAndError,Yr as __namedExportsOrder,Ur as default};

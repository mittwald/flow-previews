import{j as r}from"./iframe-B7R3Cp0m.js";import{a as h,u as x,F as j,t as D}from"./Form-Ca-ydWJ8.js";import{L as e}from"./Label-BwiLuc4D.js";import{B as s}from"./Button-BfLhmrhP.js";import{S}from"./Section-CXYImEJk.js";import{A as R}from"./ActionGroup-DwKGVJQl.js";import{s as g}from"./Action-Duus-uy7.js";import{J as a,h as y,L as B}from"./DateField-BQjx6STF.js";import{D as o}from"./DateRangePicker-C4i4vdF4.js";import{F as P}from"./FieldDescription-C2J1CzuI.js";import"./index-Cun1SEai.js";import"./dynamic-DQGoa_Us.js";import"./flowComponent-W1sLmgeU.js";import"./index-DeoRyUxP.js";import"./clsx-B-dksMZM.js";import"./index-DEEeTq16.js";import"./FieldError-C50u32vO.js";import"./IconWarning-CiDVbDUI.js";import"./FieldError-DSYDYeL4.js";import"./utils-Cx-QUl4i.js";import"./Text-Cq8XMVEi.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-BoxQ9ugt.js";import"./context-DZWDYeWp.js";import"./browser-D9qXvoab.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-CciGw-jp.js";import"./Hidden-Cw4vRCn8.js";import"./Text-mmmtihIj.js";import"./EmulatedBoldText-Bu0mLg2V.js";import"./LoadingSpinner-CBvMx9JI.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DTyr71oU.js";import"./ProgressBar-BUsdfXWy.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CZzcdL0j.js";import"./useFocus-BfnX2cH5.js";import"./useFocusRing-KQNrYpLi.js";import"./useFocusable-gE9kDuNJ.js";import"./ContextMenuSection-Qzqr7kFk.js";import"./Dialog-qQprQaf0.js";import"./RSPContexts-nV9TqCtk.js";import"./OverlayArrow-BoyqVqhR.js";import"./useControlledState-DvHwfOTB.js";import"./Collection-DVhSH9ed.js";import"./CollectionBuilder-CIEMJSOs.js";import"./context-DaR2uroz.js";import"./Separator-BVTEwXXm.js";import"./SelectionManager-D3KJzfXx.js";import"./useEvent-2yiTmDJR.js";import"./useCollator-DXIp2FB0.js";import"./FocusScope-DeadHndu.js";import"./VisuallyHidden-7GIVT4u3.js";import"./getActionGroupSlot-kiQExVjr.js";import"./useStatic-B9aD_BAc.js";import"./context-s2Psh2SW.js";import"./Form-zMs38ZCV.js";import"./Group-DymWerm5.js";import"./Input-B7hM4ezT.js";import"./useFormValidation-Dv3hg-yA.js";import"./useFormReset-ltvOIr7i.js";import"./useSpinButton-gfmY2saY.js";import"./useFilter-Ch9Kt92e.js";import"./FormField.module-CqWyJNQI.js";import"./Popover-BWO2bA7O.js";import"./useOverlayController-DNghvfr6.js";import"./OverlayContextProvider-B7mj50o_.js";import"./ClearPropsContextView-hmq_Snis.js";import"./RangeCalendar-DL5TAxS4.js";import"./Heading-CiGgeB_H.js";import"./useUpdateEffect-kZhX48DF.js";import"./useMakeFocusable-Co-fjfKM.js";const{action:$}=__STORYBOOK_MODULE_ACTIONS__,_=$("submit"),Nr={title:"Integrations/React Hook Form/DateRangePicker",component:h,render:()=>{const t=async b=>{await g(1500),_(b)},F=x({defaultValues:{dateRangeDefaultValue:{start:a("2025-09-01"),end:a("2025-12-24")}}}),i=D();return r.jsx(j,{form:F,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(i,{name:"dateRange",children:r.jsx(o,{children:r.jsx(e,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeDefaultValue",children:r.jsx(o,{children:r.jsx(e,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:r.jsx(o,{children:r.jsx(e,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeMinValue",children:r.jsx(o,{minValue:y(B()),children:r.jsx(e,{children:"Future date range"})})}),r.jsx(R,{children:r.jsx(s,{type:"submit",children:"Submit"})})]})})}},m={},n={render:()=>{const t=x();return r.jsxs(j,{form:t,onSubmit:async()=>await g(2e3),children:[r.jsx(h,{name:"text",rules:{required:!0},children:r.jsxs(o,{children:[r.jsx(e,{children:"Future Date"}),r.jsx(P,{children:"Select a future date"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(s,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(s,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(s,{type:"submit",children:"Submit"})]})}};var p,c,u;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(c=m.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,l,f;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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

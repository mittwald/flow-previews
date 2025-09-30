import{j as r}from"./iframe-CxmXe-_O.js";import{a as h,u as x,F as j,t as D}from"./Form-BHUWEINQ.js";import{L as e}from"./Label-DeDEMxfU.js";import{B as s}from"./Button-DVo7WD-1.js";import{S}from"./Section-DzvPU-TL.js";import{A as R}from"./ActionGroup-JupVt7-E.js";import{s as g}from"./Action-CKP9QlTZ.js";import{J as a,h as y,L as B}from"./DateField-Jykny1c7.js";import{D as o}from"./DateRangePicker-NDFpcJd7.js";import{F as P}from"./FieldDescription-Dm0WW9cG.js";import"./index-Cun1SEai.js";import"./dynamic-5AyxyhbL.js";import"./PropsContextProvider-D0hpqFCU.js";import"./mergeRefs-DrFPU8wS.js";import"./index-D4JkFdbd.js";import"./clsx-B-dksMZM.js";import"./FieldError-CSErn7mI.js";import"./IconWarning-DZNLduw-.js";import"./FieldError-D8IUoOjD.js";import"./utils-Cd13syVz.js";import"./Text-DV04N56Q.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-D3SJZW6Q.js";import"./context-BaUvMDTJ.js";import"./browser-fsrkaBj_.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-2vh9UW-y.js";import"./Hidden-fABZRyqD.js";import"./Text-BT2KT2kR.js";import"./EmulatedBoldText-D2nyMxZT.js";import"./LoadingSpinner-DUEgH9Lr.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DXwv69Ey.js";import"./ProgressBar-FqWf0sr1.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BIfsm19n.js";import"./useFocus-BpzuXZ8X.js";import"./useFocusRing-D7TcncFW.js";import"./useFocusable-CZtfPtCy.js";import"./ContextMenuSection-qRzHMhAk.js";import"./Popover-Boo6uHgA.js";import"./DialogTriggerView-BttboI6J.js";import"./context-CxNyIzEe.js";import"./useStatic-8bLBY8Gb.js";import"./RSPContexts-RLIssCdn.js";import"./ClearPropsContextView-DkF-i5cN.js";import"./useControlledState-y5DploKZ.js";import"./FocusScope-DfTm09Tq.js";import"./useCollator-Crzbf2Ra.js";import"./VisuallyHidden--eIM32hM.js";import"./Collection-DWMrbndQ.js";import"./CollectionBuilder-BDxApjdE.js";import"./context-DGTiufFM.js";import"./Separator-zPxV8vEZ.js";import"./SelectionManager-wV6Nrrvy.js";import"./useEvent-CrG2vQ4Z.js";import"./Switch-BtaIK91j.js";import"./useMakeFocusable-Doucc66J.js";import"./useToggleState-CMgWQrwt.js";import"./useFormReset-CB0PL74l.js";import"./getActionGroupSlot-IO6DOTZ-.js";import"./Form-CZOHyRg1.js";import"./Group-S-iYjqxn.js";import"./Input-c2pTqiZe.js";import"./useFormValidation-D2bFAqKZ.js";import"./useSpinButton-D9HJNxKv.js";import"./useFilter-C_mXiUQD.js";import"./FormField.module-CqWyJNQI.js";import"./RangeCalendar-BPh3ylGq.js";import"./Heading-CGtduReE.js";import"./useUpdateEffect-Bgxv2WTb.js";const{action:$}=__STORYBOOK_MODULE_ACTIONS__,_=$("submit"),Kr={title:"Integrations/React Hook Form/DateRangePicker",component:h,render:()=>{const t=async b=>{await g(1500),_(b)},F=x({defaultValues:{dateRangeDefaultValue:{start:a("2025-09-01"),end:a("2025-12-24")}}}),i=D();return r.jsx(j,{form:F,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(i,{name:"dateRange",children:r.jsx(o,{children:r.jsx(e,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeDefaultValue",children:r.jsx(o,{children:r.jsx(e,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:r.jsx(o,{children:r.jsx(e,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeMinValue",children:r.jsx(o,{minValue:y(B()),children:r.jsx(e,{children:"Future date range"})})}),r.jsx(R,{children:r.jsx(s,{type:"submit",children:"Submit"})})]})})}},m={},n={render:()=>{const t=x();return r.jsxs(j,{form:t,onSubmit:async()=>await g(2e3),children:[r.jsx(h,{name:"text",rules:{required:!0},children:r.jsxs(o,{children:[r.jsx(e,{children:"Future Date"}),r.jsx(P,{children:"Select a future date"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(s,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(s,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(s,{type:"submit",children:"Submit"})]})}};var p,c,u;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(c=m.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,l,f;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(f=(l=n.parameters)==null?void 0:l.docs)==null?void 0:f.source}}};const Nr=["Default","WithFocusAndError"];export{m as Default,n as WithFocusAndError,Nr as __namedExportsOrder,Kr as default};

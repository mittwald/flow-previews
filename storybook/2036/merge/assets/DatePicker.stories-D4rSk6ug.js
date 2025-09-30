import{j as r}from"./iframe-CxmXe-_O.js";import{a as x,u as h,F as f,t as D}from"./Form-BHUWEINQ.js";import{L as o}from"./Label-DeDEMxfU.js";import{B as n}from"./Button-DVo7WD-1.js";import{S}from"./Section-DzvPU-TL.js";import{A as g}from"./ActionGroup-JupVt7-E.js";import{s as j}from"./Action-CKP9QlTZ.js";import{J as y,h as B,L as P}from"./DateField-Jykny1c7.js";import{D as e}from"./DatePicker-B-6CBDtc.js";import"./index-Cun1SEai.js";import"./dynamic-5AyxyhbL.js";import"./PropsContextProvider-D0hpqFCU.js";import"./mergeRefs-DrFPU8wS.js";import"./index-D4JkFdbd.js";import"./clsx-B-dksMZM.js";import"./FieldError-CSErn7mI.js";import"./IconWarning-DZNLduw-.js";import"./FieldError-D8IUoOjD.js";import"./utils-Cd13syVz.js";import"./Text-DV04N56Q.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-D3SJZW6Q.js";import"./context-BaUvMDTJ.js";import"./browser-fsrkaBj_.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-2vh9UW-y.js";import"./Hidden-fABZRyqD.js";import"./Text-BT2KT2kR.js";import"./EmulatedBoldText-D2nyMxZT.js";import"./LoadingSpinner-DUEgH9Lr.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DXwv69Ey.js";import"./ProgressBar-FqWf0sr1.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BIfsm19n.js";import"./useFocus-BpzuXZ8X.js";import"./useFocusRing-D7TcncFW.js";import"./useFocusable-CZtfPtCy.js";import"./ContextMenuSection-qRzHMhAk.js";import"./Popover-Boo6uHgA.js";import"./DialogTriggerView-BttboI6J.js";import"./context-CxNyIzEe.js";import"./useStatic-8bLBY8Gb.js";import"./RSPContexts-RLIssCdn.js";import"./ClearPropsContextView-DkF-i5cN.js";import"./useControlledState-y5DploKZ.js";import"./FocusScope-DfTm09Tq.js";import"./useCollator-Crzbf2Ra.js";import"./VisuallyHidden--eIM32hM.js";import"./Collection-DWMrbndQ.js";import"./CollectionBuilder-BDxApjdE.js";import"./context-DGTiufFM.js";import"./Separator-zPxV8vEZ.js";import"./SelectionManager-wV6Nrrvy.js";import"./useEvent-CrG2vQ4Z.js";import"./Switch-BtaIK91j.js";import"./useMakeFocusable-Doucc66J.js";import"./useToggleState-CMgWQrwt.js";import"./useFormReset-CB0PL74l.js";import"./getActionGroupSlot-IO6DOTZ-.js";import"./Form-CZOHyRg1.js";import"./Group-S-iYjqxn.js";import"./Input-c2pTqiZe.js";import"./useFormValidation-D2bFAqKZ.js";import"./useSpinButton-D9HJNxKv.js";import"./useFilter-C_mXiUQD.js";import"./FormField.module-CqWyJNQI.js";import"./RangeCalendar-BPh3ylGq.js";import"./Heading-CGtduReE.js";import"./useUpdateEffect-Bgxv2WTb.js";const{action:$}=__STORYBOOK_MODULE_ACTIONS__,_=$("submit"),Hr={title:"Integrations/React Hook Form/DatePicker",component:x,render:()=>{const t=async F=>{await j(1500),_(F)},b=h({defaultValues:{dateDefaultValue:y("2025-09-01")}}),i=D();return r.jsx(f,{form:b,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(i,{name:"date",children:r.jsx(e,{children:r.jsx(o,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(e,{children:r.jsx(o,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(e,{children:r.jsx(o,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(e,{minValue:B(P()),children:r.jsx(o,{children:"Future date"})})}),r.jsx(g,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},m={},s={render:()=>{const t=h();return r.jsxs(f,{form:t,onSubmit:async()=>await j(2e3),children:[r.jsx(x,{name:"text",children:r.jsx(e,{children:r.jsx(o,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};var a,p,c;m.parameters={...m.parameters,docs:{...(a=m.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(c=(p=m.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,d,l;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"}>
          <DatePicker>
            <Label>Text</Label>
          </DatePicker>
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
}`,...(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const Jr=["Default","WithFocusAndError"];export{m as Default,s as WithFocusAndError,Jr as __namedExportsOrder,Hr as default};

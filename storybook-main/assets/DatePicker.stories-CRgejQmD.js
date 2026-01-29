import{j as r,r as j}from"./iframe-Ci26vI3B.js";import{a,u as p,F as d,t as b,R as f,S as h}from"./ResetButton-CpQCWtXZ.js";import{L as t}from"./Label-RXEJnYkv.js";import{B as u}from"./Button-Bgg1raPB.js";import{S as E}from"./Section-B3-aJ9Rn.js";import{A as S}from"./ActionGroup-Wo5_oqtF.js";import{s as c}from"./Action-BUuW9nUE.js";import{I as l,f as D,K as B}from"./DateInput-Btmn1rbH.js";import{D as o}from"./DatePicker-DzG9sRdG.js";import{F as g}from"./FieldError-CpZGKwRg.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CWUTf5k8.js";import"./flowComponent-BCoZzahf.js";import"./index-3wEtqLOq.js";import"./clsx-B-dksMZM.js";import"./index-BgjIHz1Y.js";import"./useLocalizedStringFormatter-D463xrfM.js";import"./context-21njfTP5.js";import"./useRef-KFnBoEQ2.js";import"./utils-Prtw8tAI.js";import"./ButtonView-CpgiMrkS.js";import"./browser-CkG7QNAh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CzTNGA-w.js";import"./Hidden-Bh4pa2b3.js";import"./IconWarning-CM9E6h9H.js";import"./remote-BeH756Ak.js";import"./Text-BThwDV_-.js";import"./EmulatedBoldText-TNvCnD2A.js";import"./Text-BBkEKRDK.js";import"./LoadingSpinner-CiE2xtQ-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B-v9WAC7.js";import"./ProgressBar-Cd-gbxhy.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D7Kjovyf.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BIn545i6.js";import"./useFocus-BemMoN-v.js";import"./useFocusRing-IT4cpc8M.js";import"./useFocusable-C470YARL.js";import"./ContextMenuSection-B4FW6kIZ.js";import"./Dialog-DpyFyuBj.js";import"./RSPContexts-wYlI8WBg.js";import"./OverlayArrow-G0bNf6l9.js";import"./useControlledState-B4ASThyn.js";import"./Collection-B2Ssnxvf.js";import"./CollectionBuilder-BZqHFZmJ.js";import"./SelectionIndicator-DzwumZRP.js";import"./Separator-D2dDCvgZ.js";import"./SelectionManager-3iDEc--o.js";import"./useEvent-DLiSbdt5.js";import"./useCollator-BE-Xf4hi.js";import"./FocusScope-ByCQWjTm.js";import"./VisuallyHidden-BSnmZ3mx.js";import"./getActionGroupSlot--c77iWbK.js";import"./useStatic-wckFiMZJ.js";import"./context-BCzJciSx.js";import"./FieldError-C8ji9kGw.js";import"./Form-DDqIZ7ds.js";import"./Group-CueZt5qh.js";import"./Input-D6UBTZXc.js";import"./useFormValidation-DbMZQ9P7.js";import"./useFormReset-CoDGZCB3.js";import"./useSpinButton-BfIa7M7U.js";import"./useFilter-BMSgE2UI.js";import"./useFieldComponent-DlKim18O.js";import"./Popover-DZyVF07N.js";import"./useOverlayController-BSQ_oo1O.js";import"./OverlayContextProvider-Df7HHBCA.js";import"./RangeCalendar-DlZSDDLB.js";import"./Heading-CXYj_MKW.js";import"./useUpdateEffect-vgBHcVbJ.js";import"./AlertText-CW-S-5R1.js";import"./AlertIcon-CQS_iHVq.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Yr={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await c(1500),y(F)},x=p({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(d,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: parseDate("2025-09-01")
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <DatePicker>
            <Label>Text</Label>
          </DatePicker>
        </Field>
        <DatePicker isInvalid>
          <Label>Text</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </DatePicker>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: parseDate("2025-09-01")
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <DatePicker>
            <Label>Text</Label>
          </DatePicker>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("field", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("field")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};const zr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,zr as __namedExportsOrder,Yr as default};

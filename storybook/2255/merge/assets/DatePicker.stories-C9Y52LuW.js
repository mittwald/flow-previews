import{j as r,r as j}from"./iframe-DRxscI9O.js";import{a,u as p,F as d,t as b,R as f,S as h}from"./ResetButton--HKd1vJe.js";import{L as t}from"./Label-QYcCSLyK.js";import{B as u}from"./Button-Cn0kN-cE.js";import{S as E}from"./Section-D_wy0yj2.js";import{A as S}from"./ActionGroup-DaLtREB8.js";import{s as c}from"./Action-BUOqPppc.js";import{I as l,f as D,K as B}from"./DateInput-CzOyWQGd.js";import{D as o}from"./DatePicker-C3bPZ6Zh.js";import{F as g}from"./FieldError-DD28rleL.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CC7KPApC.js";import"./flowComponent-cRsKi5gV.js";import"./index-tYubnSWL.js";import"./clsx-B-dksMZM.js";import"./index-1XGI-8ge.js";import"./useLocalizedStringFormatter-BVeqf5XE.js";import"./context-B7-PA0L6.js";import"./useRef-D3vWQ6fL.js";import"./utils-CR6NBPUA.js";import"./ButtonView-3kbETHdX.js";import"./browser-D6b-4R0j.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CmD6OfqR.js";import"./Hidden-B1W2VzXU.js";import"./IconWarning-B0GCVytt.js";import"./remote-5HtQVd9k.js";import"./Text-8YV9_ufN.js";import"./EmulatedBoldText-BJ7pd3K2.js";import"./Text-C61ezR9Z.js";import"./LoadingSpinner--1cga6s1.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Cf4nBLFb.js";import"./ProgressBar-KolsJC9x.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-D6Iwc6BC.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-87CEVAU1.js";import"./useFocus-CSD6pEXF.js";import"./useFocusRing-Dd30mTT2.js";import"./useFocusable-_DeXT1Pt.js";import"./ContextMenuSection-4Pmx83k8.js";import"./Dialog-Ds8Y2vRW.js";import"./RSPContexts-O0Lvzjxz.js";import"./OverlayArrow-CnZ26m-G.js";import"./useControlledState-CvH2MSRC.js";import"./Collection-Tvviv49U.js";import"./CollectionBuilder-BZH3zSXW.js";import"./SelectionIndicator-BPr02Xgn.js";import"./Separator-BIe6_98T.js";import"./SelectionManager-CY_OS_Gu.js";import"./useEvent-Dkz3YFeV.js";import"./useCollator-2RpDHACH.js";import"./FocusScope-CRHoWMnL.js";import"./VisuallyHidden-hMszIaj5.js";import"./getActionGroupSlot-BLOtZzsx.js";import"./useStatic-DhnGFhXh.js";import"./context-CkpccYw3.js";import"./FieldError-qzmmAdqz.js";import"./Form-Ct55O5fT.js";import"./Group-CHdsrmB5.js";import"./Input-CIOy3WO5.js";import"./useFormValidation-BZc6xO6n.js";import"./useFormReset-Ewuleuhs.js";import"./useSpinButton-CMRhgQE9.js";import"./useFilter-CdhlcD0f.js";import"./useFieldComponent-B2FoAAf9.js";import"./Popover-BKzwq5Pz.js";import"./useOverlayController-CJT4z6k_.js";import"./OverlayContextProvider-CoboHbSN.js";import"./RangeCalendar-D_GP8zxc.js";import"./Heading-IJ9Uopg1.js";import"./useUpdateEffect-C1FBv6Xs.js";import"./AlertText-BjP2ge3Y.js";import"./AlertIcon-CLPvczjb.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Yr={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await c(1500),y(F)},x=p({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(d,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

import{j as r,r as j}from"./iframe-CgbY6Bes.js";import{u as a,F as d}from"./Form-DZ9uk1zZ.js";import{L as t}from"./Label-4ok8fPIv.js";import{B as u}from"./Button-AhSsxt5Y.js";import{S as b}from"./Section-BDBFnTnO.js";import{A as E}from"./ActionGroup-CWjy7TJK.js";import{s as c}from"./Action-fZniNiQj.js";import{a as p,$ as S,b as D}from"./DateInput-B702B6k2.js";import{F as B}from"./FieldError-CfVeuV3t.js";import{D as o}from"./DatePicker-TzpE787X.js";import{F as l,t as g}from"./Field-RwAXq-yO.js";import{R as f}from"./ResetButton-BgADhceO.js";import{S as h}from"./SubmitButton-CG5PeIMV.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-C7soFJnH.js";import"./utils-C1D540aj.js";import"./mergeRefs-CxSmTZ1y.js";import"./index-COB0h6yR.js";import"./clsx-B-dksMZM.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-lamhxTiw.js";import"./PropsContextProvider-CTdpdvjF.js";import"./useLocalizedStringFormatter-BxyHFIOH.js";import"./context-B7mjZSuw.js";import"./ProgressBar-DU_WxInK.js";import"./Hidden-DQEm4CFa.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconChevronDown-BgfzzCeX.js";import"./remote-VFFVCOtz.js";import"./IconX-Bt51Q_dW.js";import"./IconCheck-Bkr0Vsq-.js";import"./Text-VVW0omSC.js";import"./EmulatedBoldText-C19QTVcg.js";import"./LoadingSpinner-BWpI0HIx.js";import"./ariaLive-BHE3J_Iw.js";import"./Button-B5ZFMN0X.js";import"./useFocusRing-d9Vd45dy.js";import"./useFocusable-C07dHpTX.js";import"./ContextMenuSection-ChZ4OnoY.js";import"./lib-90ocxLs-.js";import"./context-dInkHyA4.js";import"./RSPContexts-nmNOlAeI.js";import"./Collection-CkSsBrfI.js";import"./CollectionBuilder-bx8YHx7t.js";import"./SelectionIndicator-Cyz4sgG-.js";import"./Separator-B-G5UFsQ.js";import"./useStatic-YWRRTJxv.js";import"./dynamic-eD-KrC4d.js";import"./getActionGroupSlot-DScHYJoT.js";import"./FieldError-ZCijCAEA.js";import"./Form-D-gyidno.js";import"./Group-CFakG5ME.js";import"./Input-DHQ0YPR8.js";import"./useFormValidation-B0VcAod8.js";import"./useFormReset-DHRVeg6P.js";import"./useSpinButton-DfRWms62.js";import"./useFilter-BflZqrbZ.js";import"./IconDanger-D9oAFjYl.js";import"./useFieldComponent-DU5_3SMj.js";import"./Activity-CqdR7Ddt.js";import"./TranslationProvider-BcRRsHoV.js";import"./OverlayContextProvider-BX16aSJY.js";import"./useOverlayController-BuHPrhsh.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./Popover-BypcnTMO.js";import"./CalendarHeader-Bg2Ry7f4.js";import"./useUpdateEffect-BtUH0n0G.js";import"./IconChevronRight-DabiMwbQ.js";import"./Heading-C-qIe53v.js";import"./useRef-CBqwYRkb.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Hr={title:"Integrations/React Hook Form/DatePicker",component:l,render:()=>{const e=async F=>{await c(1500),y(F)},x=a({defaultValues:{dateDefaultValue:p("2025-09-01")}}),i=g();return r.jsx(d,{form:x,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:S(D()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(E,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=a({defaultValues:{field:p("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(l,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=a({defaultValues:{field:p("2025-09-01")}});return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(l,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Kr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,Kr as __namedExportsOrder,Hr as default};

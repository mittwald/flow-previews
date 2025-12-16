import{j as r,r as j}from"./iframe-pNOm8Wja.js";import{u as a,F as d}from"./Form-BwFy67B3.js";import{L as t}from"./Label-DHID5D-l.js";import{F as c,t as b}from"./Field-DyTfiPNt.js";import{B as u}from"./Button-CgV_q1F1.js";import{S as E}from"./Section-C6kZyOP7.js";import{A as S}from"./ActionGroup-CDv4nney.js";import{s as p}from"./Action-DvGTA_vq.js";import{a as l,$ as D,b as B}from"./DateInput-BCbVWcFU.js";import{F as g}from"./FieldError-DA4-4QkZ.js";import{D as o}from"./DatePicker-CANOUk_c.js";import{R as f}from"./ResetButton-BjQcSv0U.js";import{S as h}from"./SubmitButton--JqDEml_.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-CBsMsG9c.js";import"./utils-BknOSkFt.js";import"./mergeRefs-v_WstrVO.js";import"./index-CfSUEUFJ.js";import"./clsx-B-dksMZM.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-lamhxTiw.js";import"./PropsContextProvider-BWF9EjWJ.js";import"./useLocalizedStringFormatter-CRfFxVeP.js";import"./context-CMdVhRJ1.js";import"./ProgressBar-D3icCtAB.js";import"./Hidden-BfleQL3O.js";import"./filterDOMProps-i7L6S0l1.js";import"./dynamic-CkcNveyu.js";import"./IconApp-BiE0s1PO.js";import"./remote-DYOOxdg2.js";import"./IconX-CwELzZYK.js";import"./IconCheck-DoYeu8FX.js";import"./Text-_46BQ-Z5.js";import"./EmulatedBoldText-C8Hc8u3o.js";import"./LoadingSpinner-Db8dHYJY.js";import"./ariaLive-C7DipXM8.js";import"./Button-D9P8PHTw.js";import"./useFocusRing-Cca4ZdHO.js";import"./useFocusable-DOa46CdT.js";import"./ContextMenuSection-LjM8joNZ.js";import"./lib-90ocxLs-.js";import"./context-Chylvkq0.js";import"./RSPContexts-CPamdU7s.js";import"./Collection-DsfTdLuW.js";import"./CollectionBuilder-CKordMi2.js";import"./SelectionIndicator-DYQzBrWb.js";import"./Separator-ti_7fu_1.js";import"./useStatic-GeHsFKqm.js";import"./getActionGroupSlot-C-2PJFSw.js";import"./FieldError-B2TX3Fta.js";import"./Form-BbF0Gc6X.js";import"./Group-D0q_Cf1F.js";import"./Input-CsUDr6Sk.js";import"./useFormValidation-DtQ3XmyE.js";import"./useFormReset-Dc67hovh.js";import"./useSpinButton-lqsfYQSr.js";import"./useFilter-CaOrSx75.js";import"./IconDanger-DCkcPuhV.js";import"./useFieldComponent-XMIDEUQz.js";import"./Activity-Br43_cfx.js";import"./TranslationProvider-vME1iId0.js";import"./OverlayContextProvider-DAyQWAs8.js";import"./useOverlayController-DGsr_y1V.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./Popover-CQ-IHLDW.js";import"./CalendarHeader-DNQ4oBez.js";import"./useUpdateEffect-Bo6Vk4nF.js";import"./IconChevronRight-QhMMGSis.js";import"./Heading-YerowFDN.js";import"./useRef-C6XgHi6W.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Hr={title:"Integrations/React Hook Form/DatePicker",component:c,render:()=>{const e=async F=>{await p(1500),y(F)},x=a({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(d,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=a({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=a({defaultValues:{field:l("2025-09-01")}});return r.jsxs(d,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

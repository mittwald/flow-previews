import{j as r,r as F}from"./iframe-pNOm8Wja.js";import{u as n,F as p}from"./Form-BwFy67B3.js";import{F as a,t as S}from"./Field-DyTfiPNt.js";import{B as d}from"./Button-CgV_q1F1.js";import{S as x}from"./Section-C6kZyOP7.js";import{A as E}from"./ActionGroup-CDv4nney.js";import{s as c}from"./Action-DvGTA_vq.js";import{S as m}from"./Switch-C0C6cs1i.js";import{F as j}from"./FieldError-DA4-4QkZ.js";import{R as u}from"./ResetButton-BjQcSv0U.js";import{S as l}from"./SubmitButton--JqDEml_.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-CBsMsG9c.js";import"./utils-BknOSkFt.js";import"./mergeRefs-v_WstrVO.js";import"./index-CfSUEUFJ.js";import"./clsx-B-dksMZM.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./dynamic-CkcNveyu.js";import"./PropsContextProvider-BWF9EjWJ.js";import"./useLocalizedStringFormatter-CRfFxVeP.js";import"./context-CMdVhRJ1.js";import"./IconApp-BiE0s1PO.js";import"./remote-DYOOxdg2.js";import"./IconX-CwELzZYK.js";import"./IconCheck-DoYeu8FX.js";import"./Text-_46BQ-Z5.js";import"./EmulatedBoldText-C8Hc8u3o.js";import"./LoadingSpinner-Db8dHYJY.js";import"./ariaLive-C7DipXM8.js";import"./Button-D9P8PHTw.js";import"./ProgressBar-D3icCtAB.js";import"./Hidden-BfleQL3O.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-Cca4ZdHO.js";import"./useFocusable-DOa46CdT.js";import"./ContextMenuSection-LjM8joNZ.js";import"./lib-90ocxLs-.js";import"./context-Chylvkq0.js";import"./RSPContexts-CPamdU7s.js";import"./Collection-DsfTdLuW.js";import"./CollectionBuilder-CKordMi2.js";import"./SelectionIndicator-DYQzBrWb.js";import"./Separator-ti_7fu_1.js";import"./useStatic-GeHsFKqm.js";import"./getActionGroupSlot-C-2PJFSw.js";import"./IconCheck-D0-lbTwy.js";import"./IconClose-2-gSc2c5.js";import"./useFieldComponent-XMIDEUQz.js";import"./Activity-Br43_cfx.js";import"./TranslationProvider-vME1iId0.js";import"./OverlayContextProvider-DAyQWAs8.js";import"./useOverlayController-DGsr_y1V.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./Label.module-lamhxTiw.js";import"./useToggleState-BBMmoGIn.js";import"./useFormReset-Dc67hovh.js";import"./FieldError-B2TX3Fta.js";import"./IconDanger-DCkcPuhV.js";import"./useRef-C6XgHi6W.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Ar={title:"Integrations/React Hook Form/Switch",component:a,render:()=>{const t=async h=>{await c(5e3),B(h)},o=n({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(p,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(m,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=n();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(m,{...t,children:"Field1"})}),r.jsxs(m,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=n();return r.jsxs(p,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(m,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Switch {...props}>Field1</Switch>
        </Field>
        <Switch>
          Field2
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Switch>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Switch {...props}>Field</Switch>
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
}`,...s.parameters?.docs?.source}}};const Pr=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,s as WithFocus,Pr as __namedExportsOrder,Ar as default};

import{j as r,r as x}from"./iframe-pNOm8Wja.js";import{u as a,F as l}from"./Form-BwFy67B3.js";import{L as o}from"./Label-DHID5D-l.js";import{F as d,t as j}from"./Field-DyTfiPNt.js";import{B as p}from"./Button-CgV_q1F1.js";import{S as g}from"./Section-C6kZyOP7.js";import{A as b}from"./ActionGroup-CDv4nney.js";import{s as u}from"./Action-DvGTA_vq.js";import{N as t}from"./NumberField-D0ivZo84.js";import{F as E}from"./TranslationProvider-vME1iId0.js";import{F as S}from"./FieldError-DA4-4QkZ.js";import{R as c}from"./ResetButton-BjQcSv0U.js";import{S as f}from"./SubmitButton--JqDEml_.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-CBsMsG9c.js";import"./utils-BknOSkFt.js";import"./mergeRefs-v_WstrVO.js";import"./index-CfSUEUFJ.js";import"./clsx-B-dksMZM.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-lamhxTiw.js";import"./PropsContextProvider-BWF9EjWJ.js";import"./useLocalizedStringFormatter-CRfFxVeP.js";import"./context-CMdVhRJ1.js";import"./ProgressBar-D3icCtAB.js";import"./Hidden-BfleQL3O.js";import"./filterDOMProps-i7L6S0l1.js";import"./dynamic-CkcNveyu.js";import"./IconApp-BiE0s1PO.js";import"./remote-DYOOxdg2.js";import"./IconX-CwELzZYK.js";import"./IconCheck-DoYeu8FX.js";import"./Text-_46BQ-Z5.js";import"./EmulatedBoldText-C8Hc8u3o.js";import"./LoadingSpinner-Db8dHYJY.js";import"./ariaLive-C7DipXM8.js";import"./Button-D9P8PHTw.js";import"./useFocusRing-Cca4ZdHO.js";import"./useFocusable-DOa46CdT.js";import"./ContextMenuSection-LjM8joNZ.js";import"./lib-90ocxLs-.js";import"./context-Chylvkq0.js";import"./RSPContexts-CPamdU7s.js";import"./Collection-DsfTdLuW.js";import"./CollectionBuilder-CKordMi2.js";import"./SelectionIndicator-DYQzBrWb.js";import"./Separator-ti_7fu_1.js";import"./useStatic-GeHsFKqm.js";import"./getActionGroupSlot-C-2PJFSw.js";import"./useFieldComponent-XMIDEUQz.js";import"./Activity-Br43_cfx.js";import"./IconChevronDown-BflQnbhd.js";import"./IconChevronUp-CQZplnLs.js";import"./IconMinus-52Ifhsja.js";import"./IconPlus-CYBVW-jq.js";import"./useControlledHostValueProps-PtKQ8r5D.js";import"./FieldError-B2TX3Fta.js";import"./Form-BbF0Gc6X.js";import"./Group-D0q_Cf1F.js";import"./Input-CsUDr6Sk.js";import"./useFormValidation-DtQ3XmyE.js";import"./useSpinButton-lqsfYQSr.js";import"./useFormReset-Dc67hovh.js";import"./useTextField-ByF_LOE7.js";import"./OverlayContextProvider-DAyQWAs8.js";import"./useOverlayController-DGsr_y1V.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./IconDanger-DCkcPuhV.js";import"./useRef-C6XgHi6W.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Yr={title:"Integrations/React Hook Form/NumberField",component:d,render:()=>{const e=async F=>{await u(1500),B(F)},h=a({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(l,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
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
          <NumberField>
            <Label>Age</Label>
          </NumberField>
        </Field>
        <NumberField isInvalid>
          <Label>Age</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </NumberField>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <NumberField>
            <Label>Age</Label>
          </NumberField>
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
}`,...m.parameters?.docs?.source}}};const kr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,kr as __namedExportsOrder,Yr as default};

import{r as x,j as r}from"./iframe-BzN-GDSV.js";import{a,u as l,F as d,R as c,S as f,t as j}from"./ResetButton-HvWvEm8D.js";import{L as o}from"./Label-aAQCtXm8.js";import{B as p}from"./Button-CqLQCx50.js";import{S as g}from"./Section-DEFyhRPR.js";import{A as b}from"./ActionGroup-RxX1lyJu.js";import{s as u}from"./Action-DMSKmOJg.js";import{N as t}from"./NumberField-BLc-QdZn.js";import{F as E}from"./FieldDescription-CPA3vpEK.js";import{F as S}from"./FieldError-C55-OsIs.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CBHHoCBf.js";import"./flowComponent-D-AbKxQ-.js";import"./index-B3p9ddxp.js";import"./clsx-B-dksMZM.js";import"./index-jqMu6fsr.js";import"./useLocalizedStringFormatter-yVJP6Ie4.js";import"./context-CV01TaOS.js";import"./useRef-ClXlOumO.js";import"./utils-DZiSZNRH.js";import"./ButtonView-GH3X29hF.js";import"./browser-BZan5p2Q.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CAj1yFiM.js";import"./Hidden-D9QDiB2Q.js";import"./IconWarning-Dq5gBH8b.js";import"./remote-DmyBa_Y3.js";import"./Text-w8Xk5tzh.js";import"./EmulatedBoldText-Bg-XhDZU.js";import"./Text-9Slz249r.js";import"./LoadingSpinner-DwhPZLF8.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CTrxkMff.js";import"./ProgressBar-BhNLuOhb.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D4-tvGJV.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CKBw2syN.js";import"./useFocus-CD9nXzJ_.js";import"./useFocusRing-DeK7XLS9.js";import"./useFocusable-CZxxukff.js";import"./ContextMenuSection-Fnzuskm8.js";import"./Dialog-D-_l-Dz2.js";import"./RSPContexts-836Xa0kI.js";import"./OverlayArrow-45O3XaxD.js";import"./useControlledState-VicJRSad.js";import"./Collection-Ckv3RK5p.js";import"./CollectionBuilder-P-tNz_Gd.js";import"./SelectionIndicator-Clnr_8iz.js";import"./Separator-grnmoeTC.js";import"./SelectionManager-TX1M696V.js";import"./useEvent-D8LZAcV8.js";import"./useCollator-6LAjsKx4.js";import"./FocusScope-BMhRfsbp.js";import"./VisuallyHidden-DwmcGrU0.js";import"./getActionGroupSlot-CEsFjkmd.js";import"./useStatic-BCK3u9CD.js";import"./context-CO_pcEBI.js";import"./useFieldComponent-DWIvkE7m.js";import"./useControlledHostValueProps-SG0om-EY.js";import"./FieldError-DErqUxVb.js";import"./Form-BzSZff5w.js";import"./Group-C5-ujBH7.js";import"./Input-C4dwqHoB.js";import"./useFormValidation-Bm80HquG.js";import"./useSpinButton-DutNC7Ea.js";import"./useFormReset-C_nKv_ku.js";import"./useTextField-Czkfh9lB.js";import"./AlertText-_Zms_FAC.js";import"./AlertIcon-CN2JBdj6.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Yr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await u(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

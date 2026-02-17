import{r as C,j as r}from"./iframe-BwxXT37i.js";import{a as d,u as a,F as c,R as h,S as x,t as j}from"./ResetButton-BT6tMKqG.js";import{B as l}from"./Button-BPaKVUIt.js";import{S as B}from"./Section-DkCPmDIf.js";import{A as b}from"./ActionGroup-BeR34umf.js";import{s as u}from"./ActionBatch-BYAp_qkn.js";import{T as i}from"./Text-COIxE5M6.js";import{C as m}from"./CheckboxButton-DM1BUczh.js";import{C as p}from"./Content-DSJl7gyc.js";import{F as E}from"./FieldError-D9vbHNcD.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-dswMj1gt.js";import"./flowComponent-CuECaAUk.js";import"./index-DlX0XTQj.js";import"./clsx-B-dksMZM.js";import"./index-DuE4n7_M.js";import"./Overlay-AD1OWyvg.js";import"./useOverlayController-Clvgh-dL.js";import"./useStatic-DbyoNtmr.js";import"./OverlayContextProvider-BTOkgjHO.js";import"./LoadingSpinner-C1b88oeC.js";import"./IconWarning-Dl-kSkvo.js";import"./remote-DESTNxfj.js";import"./utils-CJgL2cA6.js";import"./Dialog-B0vuTUBy.js";import"./Button-Cy0UoRmV.js";import"./ProgressBar-DCv0JTr3.js";import"./Label-tTpXQ0Np.js";import"./Hidden-DDJevZSF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ClAEan5N.js";import"./context-CQJLc664.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bm2JbU_T.js";import"./useFocus-Czv-Zofa.js";import"./useFocusRing-m35H4vh1.js";import"./useFocusable-FNm71Fx1.js";import"./RSPContexts-CqVOzJuC.js";import"./OverlayArrow-D6upTp02.js";import"./useControlledState-NXAAE7WV.js";import"./Collection-CBsMtROt.js";import"./CollectionBuilder-C9gwXR-G.js";import"./SelectionIndicator-D823LuT6.js";import"./Separator-D3qEwsya.js";import"./Text-CMM9EMAj.js";import"./SelectionManager-DyNtsV4B.js";import"./useEvent-CJ8tZWHo.js";import"./useCollator-jEna2J2E.js";import"./FocusScope-DUfe_G21.js";import"./useLocalizedStringFormatter-CKZF_s44.js";import"./VisuallyHidden-BP4pgppw.js";import"./ActionGroupView-lK7iQLI6.js";import"./Heading-3o8VfDUm.js";import"./Heading-DQrX8nPA.js";import"./Modal-Ba2srwlL.js";import"./ButtonView-BxZPu1tu.js";import"./Flex-DzEskxqa.js";import"./useRef-CHinTfwY.js";import"./browser-DWx5NGhf.js";import"./ContextMenuSection-DLmcvkG_.js";import"./getActionGroupSlot-BlMz2vZa.js";import"./EmulatedBoldText-Cp5bM2Cx.js";import"./Checkbox-BzhRb6KF.js";import"./useFieldComponent-CUBWvnpR.js";import"./FieldError-BR2H8wuy.js";import"./Form-BRwB9VIC.js";import"./useFormValidation-CcuhNi7t.js";import"./useToggleState-CU0nZqEv.js";import"./useFormReset-BZECQBSr.js";import"./AlertText-CHWpHdzt.js";import"./AlertIcon-DLpjaGh3.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Mr={title:"Integrations/React Hook Form/CheckboxButton",component:d,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
          <CheckboxButton {...props}>
            <Text>Terms and Conditions</Text>
            <Content>Consent to terms and conditions</Content>
          </CheckboxButton>
        </Field>
        <CheckboxButton {...props} isInvalid>
          <Text>Terms and Conditions</Text>
          <Content>Consent to terms and conditions</Content>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </CheckboxButton>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <CheckboxButton {...props}>
            <Text>Terms and Conditions</Text>
            <Content>Consent to terms and conditions</Content>
          </CheckboxButton>
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
}`,...s.parameters?.docs?.source}}};const Nr=["Default","WithFieldError","WithFocus"];export{e as Default,n as WithFieldError,s as WithFocus,Nr as __namedExportsOrder,Mr as default};

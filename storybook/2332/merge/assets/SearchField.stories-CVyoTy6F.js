import{r as S,j as r}from"./iframe-Bas3a7fO.js";import{a as n,u as p,F as a,R as u,S as l,t as x}from"./ResetButton-Cd-wp-Vd.js";import{L as m}from"./Label-QWyaEZ02.js";import{B as d}from"./Button-CCev3q47.js";import{S as j}from"./Section-CuO1V7U6.js";import{A as b}from"./ActionGroup-D7GnjScM.js";import{s as c}from"./ActionBatch-Ctg3LC0z.js";import{S as s}from"./SearchField-DgtlXDS2.js";import{F as E}from"./FieldError-B_qklWB_.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CtBYvx23.js";import"./flowComponent-DM0zlvyg.js";import"./index-BsE7CccI.js";import"./clsx-B-dksMZM.js";import"./index-CuTcGtc9.js";import"./useLocalizedStringFormatter-DWSvb_Dh.js";import"./context-C6ovHfpS.js";import"./ActionGroupView-BoEMuKNt.js";import"./Content-jsO27phX.js";import"./Heading-BvcJIgQi.js";import"./Heading-CIj0isr2.js";import"./RSPContexts-BxdWTHUz.js";import"./utils-eswKxOcw.js";import"./Text-D06q46lu.js";import"./browser-CI0OqVn7.js";import"./EmulatedBoldText-DWlWNctj.js";import"./Text-Di9JAG-3.js";import"./Modal-CZas3fxE.js";import"./useOverlayController-Bne___mw.js";import"./useStatic-LTDZm_8J.js";import"./Overlay-CKC1BDXC.js";import"./OverlayContextProvider-DoMgXFZI.js";import"./LoadingSpinner-CaJGFcVk.js";import"./IconWarning-9FMOeqa7.js";import"./remote-CQRN9i7s.js";import"./Dialog-BsJqG9mx.js";import"./Button-cgxxNusA.js";import"./ProgressBar-C3VsHXts.js";import"./Label-CAS-GA4h.js";import"./Hidden-JsWJU2dF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-AX-jpDlX.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BXALpkIT.js";import"./useFocus-BpOhXbga.js";import"./useFocusRing--4ecJhRH.js";import"./useFocusable-Dz64TW3s.js";import"./OverlayArrow-B1y4rBya.js";import"./useControlledState-DnKF_srQ.js";import"./Collection-C8pnnMLO.js";import"./CollectionBuilder-0TvFeMg9.js";import"./SelectionIndicator-C1UYqe1w.js";import"./Separator-BhW3WF_H.js";import"./SelectionManager-jyyo19U7.js";import"./useEvent-CDJhLR4c.js";import"./useCollator-CKG6FCAG.js";import"./FocusScope-yn2ZelXu.js";import"./VisuallyHidden-DwReVjRm.js";import"./ButtonView-fFevQyKz.js";import"./Flex-BYJmVhKw.js";import"./useRef-TqOxF1Gm.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-BzeJokDv.js";import"./getActionGroupSlot-DxyevWSt.js";import"./useFieldComponent-CHbV_zSr.js";import"./useControlledHostValueProps-BxfqBB9J.js";import"./FieldError-CYd-7Lc_.js";import"./Form-C6AVvH4S.js";import"./Group-CjauqOEv.js";import"./Input-CDjrJnAd.js";import"./useTextField-DKwOo1j6.js";import"./useFormReset-C6M9OYlp.js";import"./useFormValidation-nso2YHkv.js";import"./AlertText-5S7f5h6L.js";import"./AlertIcon-CfXFBmoz.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Vr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const o=async F=>{await c(5e3),g(F)},h=p({defaultValues:{user:""}}),f=x();return r.jsx(a,{form:h,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=p();return S.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
        </Field>
        <SearchField isInvalid>
          <Label>Suche</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </SearchField>
      </Form>;
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
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
}`,...i.parameters?.docs?.source}}};const Yr=["Default","WithFieldError","WithFocus"];export{e as Default,t as WithFieldError,i as WithFocus,Yr as __namedExportsOrder,Vr as default};

import{r as S,j as r}from"./iframe-H3UGI_HB.js";import{a as n,u as p,F as a,R as u,S as l,t as x}from"./ResetButton-CWmPV2A5.js";import{L as m}from"./Label-BgH6R3x8.js";import{B as d}from"./Button-fzixWt9q.js";import{S as j}from"./Section-BwDtX3u0.js";import{A as b}from"./ActionGroup-DUi3fLFY.js";import{s as c}from"./ActionBatch-TsHiTfcO.js";import{S as s}from"./SearchField-CvZZAkkc.js";import{F as E}from"./FieldError-wcTb1U2C.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DBkJoO-a.js";import"./flowComponent-RxwhG80E.js";import"./index-D6GAEjHP.js";import"./clsx-B-dksMZM.js";import"./index-BJWFQYe5.js";import"./useLocalizedStringFormatter-w61_e3zI.js";import"./context-BGVDv2KD.js";import"./ActionGroupView-BZm8MaS_.js";import"./Content-DCXa1KEI.js";import"./Heading-F7Cj8meE.js";import"./Heading-CBpf9z-K.js";import"./RSPContexts-BrswSFX-.js";import"./utils-DSogMYdc.js";import"./Text-B0lwY8q7.js";import"./browser-xqq3Xy_w.js";import"./EmulatedBoldText-DRHBUbf1.js";import"./Text-UIHj6j-v.js";import"./Modal-CfSIm2YK.js";import"./Overlay-B-ohzPPh.js";import"./useOverlayController-3aktaPy5.js";import"./useStatic-CxHSWaOd.js";import"./OverlayContextProvider-BiL0j1tu.js";import"./LoadingSpinner-r6z_bU0O.js";import"./IconWarning-D9BgjB6B.js";import"./remote-uffOWPGy.js";import"./Dialog-DKMSACkI.js";import"./Button-5W_fyVDJ.js";import"./ProgressBar-Diyn8Lqp.js";import"./Label-CZuC8vWV.js";import"./Hidden-DoBcQ2Eg.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CtoVShGG.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CSCW4wCL.js";import"./useFocus-DQ3i5Klp.js";import"./useFocusRing-DrWQa_14.js";import"./useFocusable-BYwgOLI_.js";import"./OverlayArrow-C-E8ydRe.js";import"./useControlledState-DkMic-Ic.js";import"./Collection-WGKH_Dnj.js";import"./CollectionBuilder-Ba2_Q0LP.js";import"./SelectionIndicator-BgUtvt2H.js";import"./Separator-Q9pbsAsV.js";import"./SelectionManager-Bqz8XsWW.js";import"./useEvent-ChUOYfSF.js";import"./useCollator--V7CwpxI.js";import"./FocusScope-DjcW1lzL.js";import"./VisuallyHidden-BGP1Ifbj.js";import"./ButtonView-DND7dytH.js";import"./Flex-BcmdNa7O.js";import"./useRef-Cvv3Klvq.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-DZ6NPIaP.js";import"./getActionGroupSlot-B9ZNFQ5y.js";import"./useFieldComponent-Bj80Ne3v.js";import"./useControlledHostValueProps-bka0t134.js";import"./FieldError-Be1mQ-cQ.js";import"./Form-BGaHvL5t.js";import"./Group-DdJ_b0gx.js";import"./Input-CefV5Kvm.js";import"./useTextField-BGov_n0p.js";import"./useFormReset-CtKq0dbr.js";import"./useFormValidation-DekRXblw.js";import"./AlertText-CQfakUvk.js";import"./AlertIcon-Cb5scZh6.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Vr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const o=async F=>{await c(5e3),g(F)},h=p({defaultValues:{user:""}}),f=x();return r.jsx(a,{form:h,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=p();return S.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

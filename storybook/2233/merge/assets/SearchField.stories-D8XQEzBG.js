import{j as r,r as S}from"./iframe-DqAMh1gn.js";import{b as n,u as a,F as p,t as x}from"./Form-roJCToDo.js";import{L as m}from"./Label-CvBjm4aX.js";import{R as u,S as l}from"./ResetButton-BVQp8rEx.js";import{B as d}from"./Button-BzL2mXU9.js";import{S as j}from"./Section-DqN2VLIl.js";import{A as b}from"./ActionGroup-DpF-aUms.js";import{s as c}from"./Action-B_T5lnyR.js";import{S as s}from"./SearchField-B16oLOkQ.js";import{F as E}from"./FieldError-DFC5bA5N.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CAN3WNRI.js";import"./flowComponent-BNeqdfjc.js";import"./index-BXU2S61h.js";import"./clsx-B-dksMZM.js";import"./index-By9mRA0t.js";import"./useLocalizedStringFormatter-CZ172l8h.js";import"./context-DRhwbml9.js";import"./browser-CSMWWW9k.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-iT_mUFNC.js";import"./utils-WhkxUCK6.js";import"./Hidden-BzHkL3wJ.js";import"./useRef-B2o974i1.js";import"./IconWarning-BV3xGinn.js";import"./remote-BXLOBgAx.js";import"./Text-1p9r91sB.js";import"./EmulatedBoldText-CnA8uKsC.js";import"./Text-DmUxfOW-.js";import"./LoadingSpinner-BWCnwVbS.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DRXTkefG.js";import"./ProgressBar-CxeXPRaQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BKYm2rJO.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-ClkvTl3z.js";import"./useFocus-Cr8fiyXD.js";import"./useFocusRing-BN14JWVs.js";import"./useFocusable-DO1mJmot.js";import"./ContextMenuSection-CNlzjKiC.js";import"./Dialog-AIPHRx2P.js";import"./RSPContexts-A1MHH_Cz.js";import"./OverlayArrow-DNiZVgAH.js";import"./useControlledState-ChPR7hzM.js";import"./Collection-CQjuLfpr.js";import"./CollectionBuilder-Dk_6EAPH.js";import"./SelectionIndicator-Qt-acHPk.js";import"./Separator-CEkzsxq5.js";import"./SelectionManager-CsReWWw0.js";import"./useEvent-DRkjAlB5.js";import"./useCollator-DvzaADfo.js";import"./FocusScope-azgg1m0B.js";import"./VisuallyHidden-B3gyx1tV.js";import"./getActionGroupSlot-BJX70W99.js";import"./useStatic-BuuX2mtG.js";import"./context-ChmspXAM.js";import"./useFieldComponent-CgfE5MLg.js";import"./useControlledHostValueProps-BDFbuI2N.js";import"./FieldError-Cat2GNj4.js";import"./Form-y2x5EeW4.js";import"./Group-BvOirkga.js";import"./Input-OeHygm-T.js";import"./useTextField-CD8wMq8W.js";import"./useFormReset-CllrYVFd.js";import"./useFormValidation-Bmx8yPSj.js";import"./InlineAlert-DL5f4hl1.js";import"./AlertIcon-C7t-BIgM.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Cr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const e=async F=>{await c(5e3),g(F)},h=a({defaultValues:{user:""}}),f=x();return r.jsx(p,{form:h,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},o={},t={render:()=>{const e=a();return S.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const e=a();return r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Gr=["Default","WithFieldError","WithFocus"];export{o as Default,t as WithFieldError,i as WithFocus,Gr as __namedExportsOrder,Cr as default};

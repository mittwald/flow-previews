import{r as S,j as r}from"./iframe-EfPcFfHz.js";import{a as n,u as p,F as a,R as u,S as l,t as x}from"./FormRootError-Chgvna3W.js";import{L as m}from"./Label-DkribH7U.js";import{B as d}from"./Button-wFzIQtGi.js";import{S as j}from"./Section-CV61pRu2.js";import{A as b}from"./ActionGroup-Lxqbjb-D.js";import{s as c}from"./ActionBatch-DG-IZD13.js";import{S as s}from"./SearchField-abhI4sVi.js";import{F as E}from"./FieldError-Bm6xTrGY.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BKd_XzPu.js";import"./flowComponent-CIh5pHt4.js";import"./index-BiW-O58f.js";import"./clsx-B-dksMZM.js";import"./index-BhGEUnhH.js";import"./Overlay-BiUskXOC.js";import"./useOverlayController-xYgjz7Dg.js";import"./useStatic-V9jmy_2G.js";import"./OverlayContextProvider-rUMdRUMd.js";import"./LoadingSpinner-5WRu_N9f.js";import"./IconWarning-73LpV07E.js";import"./remote-D3-8ROh8.js";import"./utils-Cnkpfm_P.js";import"./Dialog-DJ1EGGEI.js";import"./Button-BlxZZJFh.js";import"./ProgressBar-vuTPs7Pi.js";import"./Label-BDpZ1WTb.js";import"./Hidden-B6ugZRtA.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DunHH7R3.js";import"./context-kn7lEdrW.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CzmE2CoS.js";import"./useFocus-7edk4FfO.js";import"./useFocusRing-8P8y2KFJ.js";import"./useFocusable-CT_qKlvn.js";import"./RSPContexts-CIVPcPB5.js";import"./OverlayArrow-MDNnCdLA.js";import"./useControlledState-WqoJm4pI.js";import"./Collection-BHjKpR2C.js";import"./CollectionBuilder-BX09WhcJ.js";import"./SelectionIndicator-CeAI6QPx.js";import"./Separator-DgmB0SGY.js";import"./Text-B4oHPq8R.js";import"./SelectionManager-laCcBYMs.js";import"./useEvent-vACQ5A8t.js";import"./useCollator-D3lxHqNW.js";import"./FocusScope-CSvsVBha.js";import"./useLocalizedStringFormatter-CSMkY09C.js";import"./VisuallyHidden-CH2GsO1v.js";import"./ActionGroupView-HLt9OMBJ.js";import"./Content-CoxcjBGV.js";import"./Heading-D-lxgqSK.js";import"./Heading-fpS9fclC.js";import"./Text-CRFCcT-P.js";import"./browser-hyQhTs1N.js";import"./EmulatedBoldText-DO_ezaQd.js";import"./Modal-Lm05iuR_.js";import"./ButtonView-BN2-gVKk.js";import"./Flex-DI6XMfKS.js";import"./useRef-ClwNZ3BN.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-CgcrgsP7.js";import"./getActionGroupSlot-CHTwX_6D.js";import"./useFieldComponent-BpgXbjM-.js";import"./useControlledHostValueProps-BEWm02p_.js";import"./FieldError-DGjeovc7.js";import"./Form-DLgE0tCZ.js";import"./Group-CvPJMXy4.js";import"./Input-DZTbr2NP.js";import"./useTextField-jB8aFAKf.js";import"./useFormReset-CDR6jl2x.js";import"./useFormValidation-DvOB0MQU.js";import"./AlertText-BC8DinUo.js";import"./AlertIcon-CtDfui7q.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Vr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const o=async F=>{await c(5e3),g(F)},h=p({defaultValues:{user:""}}),f=x();return r.jsx(a,{form:h,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=p();return S.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

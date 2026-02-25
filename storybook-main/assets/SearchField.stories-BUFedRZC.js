import{r as S,j as r}from"./iframe-Bh3xJiHl.js";import{a as n,u as p,F as a,R as u,S as l,t as x}from"./ResetButton-DyvGYpOi.js";import{L as m}from"./Label-SNmrw9Fy.js";import{B as d}from"./Button-C1GDS2T5.js";import{S as j}from"./Section-CfFeFwol.js";import{A as b}from"./ActionGroup-B4cK5020.js";import{s as c}from"./ActionBatch-i2QcTjWd.js";import{S as s}from"./SearchField-1IG5xuJb.js";import{F as E}from"./FieldError-BT5CTe02.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Cx5ap73z.js";import"./flowComponent-C3sfiT_Y.js";import"./index-BFDJcR6G.js";import"./clsx-B-dksMZM.js";import"./index-CTdhbmBU.js";import"./useLocalizedStringFormatter-C9w1tvwK.js";import"./context-BR0BeWgQ.js";import"./ActionGroupView-DfrbEJ0p.js";import"./Content-DW0SliHj.js";import"./Heading-OKG0Iw9H.js";import"./Heading-DtIx3EFz.js";import"./RSPContexts-CiTjd_Cl.js";import"./utils-Dfx959rT.js";import"./Text-yap4nkEx.js";import"./browser-8DYgdl68.js";import"./EmulatedBoldText-jamwOsD6.js";import"./Text-CYmLgYN4.js";import"./Modal-BCLm9hzN.js";import"./useOverlayController-DT1eg7nU.js";import"./useStatic-BN6jI5KS.js";import"./Overlay-2lTiqzcd.js";import"./OverlayContextProvider-nbeISQDl.js";import"./LoadingSpinner-DCCe8ZqR.js";import"./IconWarning-BO5-ThfV.js";import"./remote-Bp1RK0aJ.js";import"./Dialog-CdFvlhxh.js";import"./Button-BNrfYXOb.js";import"./ProgressBar-f9Z69uXY.js";import"./Label-Dluta3ia.js";import"./Hidden-DdbuHEan.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CXwac_uq.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-B8ZJpDXl.js";import"./useFocus-BHtMPlKM.js";import"./useFocusRing-BHUB4uMx.js";import"./useFocusable-BqTTqTxS.js";import"./OverlayArrow-D44cF5Xm.js";import"./useControlledState-cRERDsL1.js";import"./Collection-DIBLnAHN.js";import"./CollectionBuilder-CXW-gYlJ.js";import"./SelectionIndicator-CiZnwtLL.js";import"./Separator-C-kXScb9.js";import"./SelectionManager-DY1RX6tv.js";import"./useEvent-Ck38Sl35.js";import"./useCollator-DwLdnUiO.js";import"./FocusScope-DSBEK_-_.js";import"./VisuallyHidden-CnocgGJn.js";import"./ButtonView-DDvKz1ey.js";import"./Flex-BBxjU3qG.js";import"./useRef-B9SaQVKF.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-rHl1P7lx.js";import"./getActionGroupSlot-1kHLqAyx.js";import"./useFieldComponent-DixKAqTB.js";import"./useControlledHostValueProps-D11NzOUo.js";import"./FieldError-DSfA25Iv.js";import"./Form-BYhBcXhc.js";import"./Group-DF5FwY7U.js";import"./Input-DfQ8ZFmJ.js";import"./useTextField-CocvbY9q.js";import"./useFormReset-CbcSutFk.js";import"./useFormValidation-DFhVz88J.js";import"./AlertText-29lF4HJO.js";import"./AlertIcon-BebRztpd.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Vr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const o=async F=>{await c(5e3),g(F)},h=p({defaultValues:{user:""}}),f=x();return r.jsx(a,{form:h,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=p();return S.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

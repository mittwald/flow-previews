import{r as S,j as r}from"./iframe-n3VOiEf5.js";import{a as n,u as p,F as a,R as u,S as l,t as x}from"./ResetButton-fxisxfEG.js";import{L as m}from"./Label-B5oQkcZ-.js";import{B as d}from"./Button-gwePC8r8.js";import{S as j}from"./Section-BlfcbXvq.js";import{A as b}from"./ActionGroup-DCg0s9cx.js";import{s as c}from"./ActionBatch-B7NWJImq.js";import{S as s}from"./SearchField-DLEZX-_w.js";import{F as E}from"./FieldError-DRCS1Gz9.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DgHDUJEW.js";import"./flowComponent-xlJ5dlMA.js";import"./index-Bqd_wUB4.js";import"./clsx-B-dksMZM.js";import"./index-CHzAo02W.js";import"./useLocalizedStringFormatter-BFx8pFGn.js";import"./context-DhQskmxc.js";import"./ActionGroupView-CZAOrVnR.js";import"./Content-D1DgylIT.js";import"./Heading-C6n9bJf2.js";import"./Heading-Dk8PIdV3.js";import"./RSPContexts-DzW0xATd.js";import"./utils-BTX3Dk-t.js";import"./Text-CwVjZxCT.js";import"./browser-DXFXi5M2.js";import"./EmulatedBoldText-eIBSog0P.js";import"./Text-BWj5dCJ1.js";import"./Modal-B-xEtS1E.js";import"./useOverlayController-BNiAcUvH.js";import"./useStatic-CMDkRNZz.js";import"./Overlay-DXNeIFBA.js";import"./OverlayContextProvider-BOvHDlNa.js";import"./LoadingSpinner-BZywMYAM.js";import"./IconWarning-BKHoIgIa.js";import"./remote-CWx46e_E.js";import"./Dialog-Be8vTliz.js";import"./Button-Dt8pRNpU.js";import"./ProgressBar-C4tpbq9V.js";import"./Label-CZ6Ig0wh.js";import"./Hidden-8NzXPPVn.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DpN8AhZi.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CVHN3NRW.js";import"./useFocus-Di5Kz97s.js";import"./useFocusRing-50iWl84k.js";import"./useFocusable-ZTBPsPh1.js";import"./OverlayArrow-Tc6q1y2y.js";import"./useControlledState-17a16_5D.js";import"./Collection-2dWh1OBC.js";import"./CollectionBuilder-pL0vDcKt.js";import"./SelectionIndicator-QXVr0AO7.js";import"./Separator-XftYj5HO.js";import"./SelectionManager-Bh8KZa3d.js";import"./useEvent-D6V5lpJs.js";import"./useCollator-BWOk8TKb.js";import"./FocusScope-BBR4OeS8.js";import"./VisuallyHidden-DCK-vxP3.js";import"./ButtonView-CrXGo-AL.js";import"./Flex-i6CO50OO.js";import"./useRef-D3Fh0Wul.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-MotZbouy.js";import"./getActionGroupSlot-CP2KeStW.js";import"./useFieldComponent-6hUMLoYk.js";import"./useControlledHostValueProps-DYpQw2Tg.js";import"./FieldError-IZ2wmqkG.js";import"./Form-BfOiuDw8.js";import"./Group-DIIOLL_5.js";import"./Input-IuhSVj8_.js";import"./useTextField-CM82iaRH.js";import"./useFormReset-C-KjP2af.js";import"./useFormValidation-0mLIssn1.js";import"./AlertText-BJDrahB4.js";import"./AlertIcon-DtfTxuVy.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Vr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const o=async F=>{await c(5e3),g(F)},h=p({defaultValues:{user:""}}),f=x();return r.jsx(a,{form:h,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=p();return S.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

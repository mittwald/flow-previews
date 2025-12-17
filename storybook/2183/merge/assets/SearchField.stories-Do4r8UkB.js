import{j as r,r as S}from"./iframe-XAYsosb6.js";import{u as n,F as p}from"./Form-DqPzFL2x.js";import{L as m}from"./Label-CXTzqQ-l.js";import{F as a,t as x}from"./Field-VXW9JPpJ.js";import{B as d}from"./Button-BxhqNEtZ.js";import{S as j}from"./Section-j_rAfVvf.js";import{A as b}from"./ActionGroup-cuM3yDJU.js";import{s as c}from"./Action-Sm7peXAz.js";import{S as s}from"./SearchField--JSjFaFg.js";import{F as E}from"./FieldError-BTxqYaQG.js";import{R as u}from"./ResetButton-B62cOFiN.js";import{S as l}from"./SubmitButton-Dh3QD1LP.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-CF4AtnhZ.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BgSAAcwE.js";import"./index-DT-o6Yom.js";import"./index-CuyBkc62.js";import"./useLocalizedStringFormatter-CIJR_8KJ.js";import"./context-B1g6MDkd.js";import"./Label-jhCIdmWo.js";import"./utils-mpNKu3Qr.js";import"./Hidden-BXwhawaS.js";import"./dynamic-CAhkKb1T.js";import"./IconChevronDown-CLHuWDBx.js";import"./remote-DUrH5qha.js";import"./IconX-BuTdVgor.js";import"./IconCheck-CATZaWGa.js";import"./Text-D0dxXYDJ.js";import"./EmulatedBoldText-CnKUILfp.js";import"./Text-DoECDV-v.js";import"./LoadingSpinner-BRBaERdC.js";import"./ariaLive-Z7x17Sr2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Bqhr8ozs.js";import"./ProgressBar-BRENX_vG.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-vx5-dYQf.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DqzrclQw.js";import"./useFocus-6tpgkBNV.js";import"./useFocusRing-Dezl-MaY.js";import"./useFocusable-NtGVjwhY.js";import"./ContextMenuSection-PBWMY4Bl.js";import"./lib-90ocxLs-.js";import"./Dialog-B6Y78fzh.js";import"./RSPContexts-DZiMI1g6.js";import"./OverlayArrow-TFGGeUC5.js";import"./useControlledState-DFlLGPV3.js";import"./Collection-DT0XSz1p.js";import"./CollectionBuilder-7sWRFWqn.js";import"./SelectionIndicator-CzOKaojY.js";import"./Separator-CYgNn2Xy.js";import"./SelectionManager-moo-j50V.js";import"./useEvent-BPTus2_l.js";import"./useCollator-Bwevici6.js";import"./FocusScope-utk7FKt0.js";import"./VisuallyHidden-BgleADuq.js";import"./getActionGroupSlot-DqFoxLUz.js";import"./useStatic-CmdDHpQe.js";import"./context-CKFjVc7D.js";import"./useFieldComponent-D6Qiol7C.js";import"./IconClose-ty3WbZmM.js";import"./IconSearch-DvwrW9-e.js";import"./useControlledHostValueProps-DQzvB4PR.js";import"./FieldError-DKscD9VY.js";import"./Form-CdD0eZj8.js";import"./Group-70bt3PCe.js";import"./Input-Wj2hF-sT.js";import"./useTextField-CEUS6wUT.js";import"./useFormReset-B8jo6HhA.js";import"./useFormValidation-L0cY-070.js";import"./IconDanger-Bj-mV1cE.js";import"./useRef-dY3yzYQ4.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Vr={title:"Integrations/React Hook Form/SearchField",component:a,render:()=>{const o=async F=>{await c(5e3),g(F)},h=n({defaultValues:{user:""}}),f=x();return r.jsx(p,{form:h,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=n();return S.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=n();return r.jsxs(p,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r,r as S}from"./iframe-m11uA8ph.js";import{u as n,F as p}from"./Form-CTx7Oukp.js";import{L as m}from"./Label-C80bgPDj.js";import{B as d}from"./Button-Dypt8iw9.js";import{S as x}from"./Section-CbIXCBOB.js";import{A as j}from"./ActionGroup-BiGw5udN.js";import{s as a}from"./Action-DQyOyJ_Y.js";import{S as s}from"./SearchField-BjcwvsI6.js";import{F as b}from"./FieldError-DSWXJfK8.js";import{F as c,t as E}from"./Field-C0bn00yJ.js";import{R as u}from"./ResetButton-okQ69z3w.js";import{S as l}from"./SubmitButton-W85QaJ0-.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-BsJUI2_B.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BWpYHXve.js";import"./index-bz12lFZh.js";import"./index-Cy6hiSze.js";import"./useLocalizedStringFormatter-D5x5gorP.js";import"./context-CT-J1WHN.js";import"./Label-BUyu-zI1.js";import"./utils-B2Atf1IZ.js";import"./Hidden-BdAfB0qw.js";import"./IconApp-DUFlag-8.js";import"./remote-D5wxRFjH.js";import"./IconX-1BBDmAKp.js";import"./IconCheck-DjytHR08.js";import"./Text-C8eG2T-4.js";import"./EmulatedBoldText-Dm9yhtB7.js";import"./Text-CHaozABk.js";import"./LoadingSpinner-DVUozLgf.js";import"./ariaLive-CqaAz1_k.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Hg1-qkLa.js";import"./ProgressBar-C1zZy1Lx.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BIKmTmt-.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D0Bh9t0W.js";import"./useFocus-DtmXh1uW.js";import"./useFocusRing-faXrGzgs.js";import"./useFocusable-BsiT1idP.js";import"./ContextMenuSection-DB4vcpk0.js";import"./lib-90ocxLs-.js";import"./Dialog-Dzvm1uhq.js";import"./RSPContexts-CBB4rOO8.js";import"./OverlayArrow-DhFl9stJ.js";import"./useControlledState-CQIt1v1r.js";import"./Collection-DuF4MxNY.js";import"./CollectionBuilder-SD0NxqFv.js";import"./SelectionIndicator-DxPJbj4p.js";import"./Separator-IY7J1-ik.js";import"./SelectionManager-mPOWfQXK.js";import"./useEvent-DarMwBx2.js";import"./useCollator-DrH01YYh.js";import"./FocusScope-DjZtu4PZ.js";import"./VisuallyHidden-BQh9j932.js";import"./dynamic-x9dWH5I2.js";import"./getActionGroupSlot-C8INwjTD.js";import"./useStatic-BIf93y4q.js";import"./context-BDVCp3x_.js";import"./useFieldComponent-BhKi7qXb.js";import"./IconClose-CZ6WFvAF.js";import"./IconSearch-Du2PWdlT.js";import"./useControlledHostValueProps-BPdzbdZO.js";import"./FieldError-BiQycVeh.js";import"./Form-CFmmdLEh.js";import"./Group-CiFhizhu.js";import"./Input-ChfHUhhf.js";import"./useTextField-BUjD2wuQ.js";import"./useFormReset-CdvwVVbr.js";import"./useFormValidation-dI-EyrI5.js";import"./IconDanger-BFD4weFl.js";import"./useRef-ByFa2Cde.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Vr={title:"Integrations/React Hook Form/SearchField",component:c,render:()=>{const o=async F=>{await a(5e3),g(F)},h=n({defaultValues:{user:""}}),f=E();return r.jsx(p,{form:h,onSubmit:o,children:r.jsxs(x,{children:[r.jsx(f,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(j,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=n();return S.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await a(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(b,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=n();return r.jsxs(p,{form:o,onSubmit:async()=>await a(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

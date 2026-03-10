import{r as S,j as r}from"./iframe-DAdEF_a9.js";import{a as n,u as p,F as a,R as u,S as l,t as x}from"./FormRootError-DFCTJN0D.js";import{L as m}from"./Label-D1h8c298.js";import{B as d}from"./Button-BL7hv3yg.js";import{S as j}from"./Section-CLn2WL9U.js";import{A as b}from"./ActionGroup-BlNNsUJ6.js";import{s as c}from"./ActionBatch-BtBHZwy0.js";import{S as s}from"./SearchField-C9-VANGT.js";import{F as E}from"./FieldError-DAuD7Eqr.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-pIUCZeo6.js";import"./flowComponent-CSaST_uw.js";import"./index-UhVc0W_W.js";import"./clsx-B-dksMZM.js";import"./index-DqNUQeP9.js";import"./useLocalizedStringFormatter-DuO1Wowh.js";import"./context-DrtV74MG.js";import"./ActionGroupView-oVftnOVm.js";import"./Content-CJNhBNrl.js";import"./Heading-CRr1Ukpo.js";import"./Heading-B0L1HgOG.js";import"./RSPContexts-BAZVNF9B.js";import"./utils-B1o5BDIk.js";import"./Text-BlXexclX.js";import"./browser-DTw6e149.js";import"./EmulatedBoldText-DRN0x44S.js";import"./Text-ConA-l-E.js";import"./Modal-Bw_NLwNU.js";import"./useOverlayController-BdzCJ-ub.js";import"./useStatic-CKtHP4uD.js";import"./Overlay-BvmU2R8J.js";import"./OverlayContextProvider-DG82vmF2.js";import"./LoadingSpinner-BzYwrllt.js";import"./IconWarning-B_QPuDoh.js";import"./remote-BQ_isGLI.js";import"./Dialog-CWk-zVbe.js";import"./Button-DZLmAbDI.js";import"./ProgressBar-Cv5-QMXF.js";import"./Label-DvwKTMzw.js";import"./Hidden-CcrF8gwt.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CcpSY4Um.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-AnOXMqB9.js";import"./useFocus-BHQGBA4R.js";import"./useFocusRing-5n4vvaIx.js";import"./useFocusable-vdr5CzJ0.js";import"./OverlayArrow-DM34mO9f.js";import"./useControlledState-D1JeUT3E.js";import"./Collection-kYozbpbp.js";import"./CollectionBuilder-T5ZwCV3b.js";import"./SelectionIndicator-BbyFO4Ic.js";import"./Separator-DdtELOBz.js";import"./SelectionManager-CNmnVwle.js";import"./useEvent-DyHBlkna.js";import"./useCollator-BUCuy1eS.js";import"./FocusScope-Cya-_QqL.js";import"./VisuallyHidden-DtDztoAI.js";import"./ButtonView-B0xnqfb2.js";import"./Flex-BMWRjUwl.js";import"./useRef-DEVjfIov.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-C3uZY6Us.js";import"./getActionGroupSlot-2bD_hcYD.js";import"./useFieldComponent-CLfspKSt.js";import"./useControlledHostValueProps-J23MCm-A.js";import"./FieldError-Be27Lv36.js";import"./Form-B4U7K7S8.js";import"./Group-D1kJtVaR.js";import"./Input-Cd2NpESg.js";import"./useTextField-BhMqFMtB.js";import"./useFormReset-BoqlzNfE.js";import"./useFormValidation-CWgfw6QX.js";import"./AlertText-kiIxGYqF.js";import"./AlertIcon-DxXhtuAo.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Vr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const o=async F=>{await c(5e3),g(F)},h=p({defaultValues:{user:""}}),f=x();return r.jsx(a,{form:h,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=p();return S.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

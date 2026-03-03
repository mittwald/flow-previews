import{r as S,j as r}from"./iframe-Dx38AIDT.js";import{a as n,u as p,F as a,R as u,S as l,t as x}from"./ResetButton-D7LUbAoI.js";import{L as m}from"./Label-lvpVoRBR.js";import{B as d}from"./Button-Bhwtl7lS.js";import{S as j}from"./Section-CzQEEFga.js";import{A as b}from"./ActionGroup-CluBBM4L.js";import{s as c}from"./ActionBatch-B-iA-QhY.js";import{S as s}from"./SearchField-BnVS9QC6.js";import{F as E}from"./FieldError-DY7Z21GR.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Cw331Sxy.js";import"./flowComponent-BwBSRBJY.js";import"./index-B3w7UL3m.js";import"./clsx-B-dksMZM.js";import"./index-C4zw0wF6.js";import"./useLocalizedStringFormatter-D4oP4MPs.js";import"./context-CRsgLXVa.js";import"./ActionGroupView-RMB2K6y-.js";import"./Content-DSBqSoeM.js";import"./Heading-z0nw7kl0.js";import"./Heading-BiABk9m9.js";import"./RSPContexts-DnJfGcBy.js";import"./utils-uxa8p5vl.js";import"./Text-stRMORLN.js";import"./browser-Bgj4nWuI.js";import"./EmulatedBoldText-DkfYMVU4.js";import"./Text-CN5O_J5f.js";import"./Modal-0SZ3rvM2.js";import"./useOverlayController-Cqh70DsD.js";import"./useStatic-CD9yQ0OW.js";import"./Overlay-Dc_wkWXh.js";import"./OverlayContextProvider-tTA2mi55.js";import"./LoadingSpinner-CAXp-11u.js";import"./IconWarning-tem5fYZU.js";import"./remote-C7_Ru_dB.js";import"./Dialog-BIvPa65M.js";import"./Button-DXXdMML6.js";import"./ProgressBar-BzTC4ZoK.js";import"./Label-CRhDhtUr.js";import"./Hidden-fCjHF3ey.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel--5Xg4_7C.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BU6JmZbW.js";import"./useFocus-C3KeEXKn.js";import"./useFocusRing-XbCssGNL.js";import"./useFocusable-CIjhaoEP.js";import"./OverlayArrow-DXkjfcol.js";import"./useControlledState-BekZOXin.js";import"./Collection-DFwYI0R_.js";import"./CollectionBuilder-d7mW72oL.js";import"./SelectionIndicator-D_Yc_rq7.js";import"./Separator-BVmogCl8.js";import"./SelectionManager-BSVgVRml.js";import"./useEvent-D7Cb0aSH.js";import"./useCollator-DTKHLM3i.js";import"./FocusScope-eq4FNALu.js";import"./VisuallyHidden-ma9EryWn.js";import"./ButtonView-CU_3hWkX.js";import"./Flex-CUcKFbzJ.js";import"./useRef-BQ2mDf6F.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-Bnn5st86.js";import"./getActionGroupSlot-CnwwqW5a.js";import"./useFieldComponent-CxTx8kf3.js";import"./useControlledHostValueProps-BgZhJfoJ.js";import"./FieldError-Cjk2dDkd.js";import"./Form-CwkZdzbX.js";import"./Group-BjH18wko.js";import"./Input-BQCGNTF8.js";import"./useTextField-DxOU6feS.js";import"./useFormReset-DiledHxM.js";import"./useFormValidation-Dn8WL8kF.js";import"./AlertText-BEiS7w5p.js";import"./AlertIcon-BbY5ij-p.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Vr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const o=async F=>{await c(5e3),g(F)},h=p({defaultValues:{user:""}}),f=x();return r.jsx(a,{form:h,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=p();return S.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

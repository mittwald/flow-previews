import{r as S,j as r}from"./iframe-DYxqCFL4.js";import{a as n,u as p,F as a,R as u,S as l,t as x}from"./ResetButton-DZYHoig3.js";import{L as m}from"./Label-DuKZtpj_.js";import{B as d}from"./Button-DGbEpLIN.js";import{S as j}from"./Section-BBD9utnH.js";import{A as b}from"./ActionGroup-BmI-EAdu.js";import{s as c}from"./ActionBatch-BfjBVLTQ.js";import{S as s}from"./SearchField-BBo26rvl.js";import{F as E}from"./FieldError-sWm_iZNp.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-C8CcPw_G.js";import"./flowComponent-SnxdO0ip.js";import"./index-CMV8c4GV.js";import"./clsx-B-dksMZM.js";import"./index-DJ6wSCwd.js";import"./useLocalizedStringFormatter-B6u7Awnk.js";import"./context-CfMfa2C9.js";import"./ActionGroupView-DEw0JaMM.js";import"./Content-DzIiqqqA.js";import"./Heading-HOIK8yqY.js";import"./Heading-DbYjHDJK.js";import"./RSPContexts-DXUT3Wo8.js";import"./utils-C1fpOvwY.js";import"./Text-BnII0mKt.js";import"./browser-CmbZy-PD.js";import"./EmulatedBoldText-D6xSemQT.js";import"./Text-B3xsuc84.js";import"./Modal-DUoogNsU.js";import"./Overlay-CnLralOh.js";import"./useOverlayController-BZwKG1Aj.js";import"./useStatic-BMoi980u.js";import"./OverlayContextProvider-tFRc17qj.js";import"./LoadingSpinner-BY4JXLJQ.js";import"./IconWarning-BGRYHRhg.js";import"./remote-WwxW7fyl.js";import"./Dialog-CiGSJFZ7.js";import"./Button-BPYpcxnx.js";import"./ProgressBar-Cu5usRFF.js";import"./Label-DwTYNUmc.js";import"./Hidden-B_geUQU0.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-mobDYg92.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DMR80VPZ.js";import"./useFocus-C6GqelOx.js";import"./useFocusRing-Byzp35A7.js";import"./useFocusable-8bvqGkWP.js";import"./OverlayArrow-R2NHUYtB.js";import"./useControlledState-Co5SihOL.js";import"./Collection-CpIPCaxL.js";import"./CollectionBuilder-B3eaJP6J.js";import"./SelectionIndicator-D_wBgdeg.js";import"./Separator-3N5Q9dE4.js";import"./SelectionManager-BMzSjOT-.js";import"./useEvent-CIxnPnFa.js";import"./useCollator-sfCu5teu.js";import"./FocusScope-BC21MQ9n.js";import"./VisuallyHidden-CZrO0U0i.js";import"./ButtonView-CL1jDIH8.js";import"./Flex-BH_NinKX.js";import"./useRef-BD_w6wL8.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-BPGq4V6i.js";import"./getActionGroupSlot-ChAJy8AN.js";import"./useFieldComponent-DjSvrfgm.js";import"./useControlledHostValueProps-D7TiKCSb.js";import"./FieldError-B9AV5Ok7.js";import"./Form-C4EYd143.js";import"./Group-BZLlrAEU.js";import"./Input-DB_F_n6I.js";import"./useTextField-BwDQcndi.js";import"./useFormReset-VwcIZGsw.js";import"./useFormValidation-FkHTzTfc.js";import"./AlertText-D5ZV5CrS.js";import"./AlertIcon-B9fJ359s.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Vr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const o=async F=>{await c(5e3),g(F)},h=p({defaultValues:{user:""}}),f=x();return r.jsx(a,{form:h,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=p();return S.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

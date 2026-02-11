import{r as S,j as r}from"./iframe-l3dQPg2D.js";import{a as n,u as a,F as p,R as u,S as l,t as x}from"./ResetButton-DLfZ0hQG.js";import{L as s}from"./Label-DxyvMbSs.js";import{B as d}from"./Button-CVhESpos.js";import{S as j}from"./Section-CVphuZOP.js";import{A as b}from"./ActionGroup-vmrUH0ag.js";import{s as c}from"./Action-BglyJGiG.js";import{S as m}from"./SearchField-BP1Yij6e.js";import{F as E}from"./FieldError-Q6bz3Uf7.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CCyGrJK3.js";import"./flowComponent-BopG63Mr.js";import"./index-C4NaKCSa.js";import"./clsx-B-dksMZM.js";import"./index-BnwDl3XO.js";import"./useLocalizedStringFormatter-DUXcPKxv.js";import"./context-bJyTUMD1.js";import"./useRef-FIk_DJsE.js";import"./utils-BpR6PJXM.js";import"./ButtonView-DNKUy4ei.js";import"./browser-vgtThTGE.js";import"./Label.module-CUYTf9Jc.js";import"./Label-zTT8xDTv.js";import"./Hidden-D7QtMOwf.js";import"./IconWarning-C2C4Ye1P.js";import"./remote-VRbYHHBV.js";import"./Text-Cd9ftiQT.js";import"./EmulatedBoldText-CAbtCiS8.js";import"./Text-CND2PMao.js";import"./LoadingSpinner-p4NafINf.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dfp0w4eo.js";import"./ProgressBar-DjNwNSer.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Bgm61Ocu.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CLrRc3iw.js";import"./useFocus-BoIaqFAK.js";import"./useFocusRing-Sg4LsORI.js";import"./useFocusable-CewhyE_c.js";import"./ContextMenuSection-C_ZfDCN7.js";import"./Dialog-ByCdR2Sm.js";import"./RSPContexts-D9dFuQ_b.js";import"./OverlayArrow-BBo0Td8e.js";import"./useControlledState-DV6ufSFw.js";import"./Collection-3pd5EYPv.js";import"./CollectionBuilder-BWIBmgEn.js";import"./SelectionIndicator-DJKLLJ3b.js";import"./Separator-70ZL6L0X.js";import"./SelectionManager-D6KTmYmL.js";import"./useEvent-D7GEvC9q.js";import"./useCollator-BSc7Uwep.js";import"./FocusScope-Cs1Wy-O3.js";import"./VisuallyHidden-D5CUP-QC.js";import"./getActionGroupSlot-Dy_Fxu9H.js";import"./useStatic-BdWyaTNp.js";import"./context-BBlsigfO.js";import"./useFieldComponent-CTh-2D00.js";import"./useControlledHostValueProps-Di36nhEL.js";import"./FieldError-DNTSOotb.js";import"./Form-bbOcDT_r.js";import"./Group-D4YQYKb-.js";import"./Input-AZztYHyS.js";import"./useTextField-4COopty-.js";import"./useFormReset-mKOiKuYb.js";import"./useFormValidation-D7taYq4g.js";import"./AlertText-D9cFuXo0.js";import"./AlertIcon-C6xXCfYQ.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),kr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const e=async F=>{await c(5e3),g(F)},h=a({defaultValues:{user:""}}),f=x();return r.jsx(p,{form:h,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},o={},t={render:()=>{const e=a();return S.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const e=a();return r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Cr=["Default","WithFieldError","WithFocus"];export{o as Default,t as WithFieldError,i as WithFocus,Cr as __namedExportsOrder,kr as default};

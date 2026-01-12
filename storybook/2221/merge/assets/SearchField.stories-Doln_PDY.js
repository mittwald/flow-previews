import{j as r,r as S}from"./iframe-Ca6Y6Qbd.js";import{b as n,u as a,F as p,t as x}from"./Form-BzkK98Z8.js";import{L as m}from"./Label-BiOSulbp.js";import{R as u,S as l}from"./ResetButton-C16fmyxf.js";import{B as d}from"./Button-Cmpvhu71.js";import{S as j}from"./Section-DDmZgP0d.js";import{A as b}from"./ActionGroup-DteDdq98.js";import{s as c}from"./Action-BHbL3yoQ.js";import{S as s}from"./SearchField-SgkHH7pb.js";import{F as E}from"./FieldError-Btuc_7Om.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CaH7ifbO.js";import"./flowComponent-D9fMwVbm.js";import"./index-Dtyg9OU-.js";import"./clsx-B-dksMZM.js";import"./index-dqS1_mS3.js";import"./useLocalizedStringFormatter-DPFID8Bg.js";import"./context-BSVjMcq9.js";import"./browser-CbMIui3y.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-oMJsQOKa.js";import"./utils-CgPiupY7.js";import"./Hidden-B5n9q6va.js";import"./useRef-Cv9XEJ0w.js";import"./IconWarning-DE1Emhrq.js";import"./remote-B__m5VQE.js";import"./Text-BEUemzSa.js";import"./EmulatedBoldText-B497YwdM.js";import"./Text-XI5tIYL5.js";import"./LoadingSpinner-iW8gx6_Q.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BwNAbkAI.js";import"./ProgressBar-CbWR67C5.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DSKkVaVQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-7njUzVdk.js";import"./useFocus-YlOppDM-.js";import"./useFocusRing-DB26dgIQ.js";import"./useFocusable-DsA9Nlin.js";import"./ContextMenuSection-Dxs1x_rP.js";import"./Dialog-B1e_uHMT.js";import"./RSPContexts-CuMU_eQB.js";import"./OverlayArrow-BonLfIYe.js";import"./useControlledState-CsFJYMR6.js";import"./Collection-C7E6DkxT.js";import"./CollectionBuilder-CQicpO9a.js";import"./SelectionIndicator-Cqdhise0.js";import"./Separator-BkDE-Ve8.js";import"./SelectionManager-08rbWnYj.js";import"./useEvent-CONOGrCj.js";import"./useCollator-BHsGRBEt.js";import"./FocusScope-g3u6sbgU.js";import"./VisuallyHidden-DA0DNDbd.js";import"./getActionGroupSlot-DZQMPipw.js";import"./useStatic-CLFM6Rz8.js";import"./context-BIxaIE9W.js";import"./useFieldComponent-Drxg4ucu.js";import"./useControlledHostValueProps-DPBYxvo9.js";import"./FieldError-DTh-affr.js";import"./Form-DvyEl8-X.js";import"./Group-DMrJjXdW.js";import"./Input-zU6xkduX.js";import"./useTextField-DJ9r6KnP.js";import"./useFormReset-QXLzcWbc.js";import"./useFormValidation-CFRjiWi1.js";import"./AlertText-PH5mi2hk.js";import"./AlertIcon-CE0IjQiw.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Cr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const e=async F=>{await c(5e3),g(F)},h=a({defaultValues:{user:""}}),f=x();return r.jsx(p,{form:h,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},o={},t={render:()=>{const e=a();return S.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const e=a();return r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

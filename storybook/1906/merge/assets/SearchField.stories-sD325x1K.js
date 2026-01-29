import{j as r,r as S}from"./iframe-DzPnzOIh.js";import{a as n,u as a,F as p,t as x,R as u,S as l}from"./ResetButton-DLA2D0J0.js";import{L as s}from"./Label-Caopyz4i.js";import{B as d}from"./Button-B0xxYjKh.js";import{S as j}from"./Section-DjVn5x2V.js";import{A as b}from"./ActionGroup-BW-DIp4M.js";import{s as c}from"./Action-D4qqw_zO.js";import{S as m}from"./SearchField-5UhoAkcR.js";import{F as E}from"./FieldError-CliUFFQL.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CR1FGrpS.js";import"./flowComponent-DtgvO3oD.js";import"./index-DmmYMLHe.js";import"./clsx-B-dksMZM.js";import"./index-nNa6hI3H.js";import"./useLocalizedStringFormatter-BZ1QP-fV.js";import"./context-D5QDMciq.js";import"./useRef-DTc68hRI.js";import"./utils-DdPADezN.js";import"./ButtonView-DAqv122X.js";import"./browser-DO1on-Lg.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BA4yL5_I.js";import"./Hidden-D_8gXEej.js";import"./IconWarning-Dnclh3SV.js";import"./remote-Df33k4AK.js";import"./Text-CgXXsRbz.js";import"./EmulatedBoldText-Dcz9uFEQ.js";import"./Text-CKGruhzq.js";import"./LoadingSpinner-3EdJH7-V.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CCOKLUK2.js";import"./ProgressBar-BDc0eUXF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DAdMc5BC.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-COgw0Owx.js";import"./useFocus-lCD3lNhC.js";import"./useFocusRing-h77ik7V4.js";import"./useFocusable-DMy60j_I.js";import"./ContextMenuSection-DfF2Gqpp.js";import"./Dialog-BkygjXx5.js";import"./RSPContexts-0XiJN6Nh.js";import"./OverlayArrow--imbHB5-.js";import"./useControlledState-C5NVaprX.js";import"./Collection-CALheanL.js";import"./CollectionBuilder-Bu5TLfEc.js";import"./SelectionIndicator-CD0MdUzw.js";import"./Separator-Bg_k8EGm.js";import"./SelectionManager-CchLMxAP.js";import"./useEvent-C5n8Jw-a.js";import"./useCollator-BX-7yLTW.js";import"./FocusScope-Cit_E5zj.js";import"./VisuallyHidden-C2tKF7nl.js";import"./getActionGroupSlot-BseyWuGA.js";import"./useStatic-B5sjyhg8.js";import"./context-CvuQDK5p.js";import"./useFieldComponent-DttoHSbm.js";import"./useControlledHostValueProps-HyXthDFl.js";import"./FieldError-BLx5YP6h.js";import"./Form-iisH2EsU.js";import"./Group-BGA5trRo.js";import"./Input-CP7U2NGu.js";import"./useTextField-DtXvs3Hz.js";import"./useFormReset-D5TocNhH.js";import"./useFormValidation-DrH-jwNK.js";import"./AlertText-DawifhT6.js";import"./AlertIcon-BAMux0CS.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),kr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const e=async F=>{await c(5e3),g(F)},h=a({defaultValues:{user:""}}),f=x();return r.jsx(p,{form:h,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},o={},t={render:()=>{const e=a();return S.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const e=a();return r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

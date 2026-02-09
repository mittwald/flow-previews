import{r as S,j as r}from"./iframe-DQCyQvTg.js";import{a as n,u as a,F as p,R as u,S as l,t as x}from"./ResetButton-Db-hkPs1.js";import{L as s}from"./Label-Bpn5fam4.js";import{B as d}from"./Button-BuvZu5FH.js";import{S as j}from"./Section-1ggmv6HF.js";import{A as b}from"./ActionGroup-BrDI4M3_.js";import{s as c}from"./Action-BFqm9nZf.js";import{S as m}from"./SearchField-C2vcbd9F.js";import{F as E}from"./FieldError-Db3KB_ND.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CLdLSboA.js";import"./flowComponent-DZtWzeOa.js";import"./index-D_Y20Bq5.js";import"./clsx-B-dksMZM.js";import"./index-vqo-_XTj.js";import"./useLocalizedStringFormatter-DAmk2Bcz.js";import"./context-BVR1xsiE.js";import"./useRef-DxaR4mJH.js";import"./utils-B-47qEzM.js";import"./ButtonView-DfoPfFoM.js";import"./browser-NLzega1a.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CVwZ8mvh.js";import"./Hidden-B1onkdes.js";import"./IconWarning-BsBEN2i7.js";import"./remote-DwYKdEj8.js";import"./Text-Dy3rf6Sf.js";import"./EmulatedBoldText-BkRIKdgp.js";import"./Text-dCr4PfuU.js";import"./LoadingSpinner-C2L8sUPo.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BqVXXUXM.js";import"./ProgressBar-CvxDZlN2.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CgNKGrTG.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BDNCZxcv.js";import"./useFocus-MHK9Bgmz.js";import"./useFocusRing-H28TAT4s.js";import"./useFocusable-Bi17AcBv.js";import"./ContextMenuSection-CRl2t-Sj.js";import"./Dialog-l1ZI7Q43.js";import"./RSPContexts-CbSXEXlJ.js";import"./OverlayArrow-BRUQmdEx.js";import"./useControlledState-CSGe32xq.js";import"./Collection-Dvx0GJ5C.js";import"./CollectionBuilder-G7sQB9cg.js";import"./SelectionIndicator-BqvLdNe9.js";import"./Separator-CkdPEWsl.js";import"./SelectionManager-C7NRhxAL.js";import"./useEvent-BSjlxpLx.js";import"./useCollator-Dr7oYRVM.js";import"./FocusScope-DgjO-P_8.js";import"./VisuallyHidden-DTZCmZoD.js";import"./getActionGroupSlot--rri3fdD.js";import"./useStatic-XhnoWRRg.js";import"./context-CMTFLv9Z.js";import"./useFieldComponent-BQB8jFXR.js";import"./useControlledHostValueProps-CVxN_pM4.js";import"./FieldError-BsUvM9FZ.js";import"./Form-Ca14id66.js";import"./Group-_bvz-aPU.js";import"./Input-kTwoopyR.js";import"./useTextField-D5bi8loT.js";import"./useFormReset-3qpl4kR-.js";import"./useFormValidation-DWTcfSBl.js";import"./AlertText-D-ZVlg04.js";import"./AlertIcon-BB94ofCu.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),kr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const e=async F=>{await c(5e3),g(F)},h=a({defaultValues:{user:""}}),f=x();return r.jsx(p,{form:h,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},o={},t={render:()=>{const e=a();return S.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const e=a();return r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r,r as S}from"./iframe-D3NxpU8u.js";import{b as n,u as a,F as p,t as x}from"./Form-BS1fmLWP.js";import{L as s}from"./Label-DxphAsDG.js";import{R as u,S as l}from"./ResetButton-BwZ7v_gB.js";import{B as d}from"./Button-edx4tjlA.js";import{S as j}from"./Section-DtUAatzw.js";import{A as b}from"./ActionGroup-BiPDUCFA.js";import{s as c}from"./Action-CgjRBsSL.js";import{S as m}from"./SearchField-D-zFNU-l.js";import{F as E}from"./FieldError-CpaS6eds.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Cp5s9Mjb.js";import"./flowComponent-CiUf0vQo.js";import"./index-OgwKEPCl.js";import"./clsx-B-dksMZM.js";import"./index-A0HM7_1k.js";import"./useLocalizedStringFormatter-Dr59zSqF.js";import"./context-CgVi_M53.js";import"./browser-_fqBbauj.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Dn1Y_s7S.js";import"./utils-C5WN15Gt.js";import"./Hidden-CJU5gFpe.js";import"./useRef-DzPq8Aca.js";import"./IconWarning-CbcK8G8M.js";import"./remote-Cz3kT78_.js";import"./Text-D1hVvtRE.js";import"./EmulatedBoldText-BTtwXUtX.js";import"./Text-ChwArYoy.js";import"./LoadingSpinner-D_HEbJEf.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BOXTMksI.js";import"./ProgressBar-COGAiyei.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DrWOXoHd.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Byc6DAfn.js";import"./useFocus-C0SaCLF4.js";import"./useFocusRing-EPMGJgfm.js";import"./useFocusable-C5GnurYQ.js";import"./ContextMenuSection-BZ_yBJ42.js";import"./Dialog-CvwxtaFW.js";import"./RSPContexts-ClgHsKPZ.js";import"./OverlayArrow-B3oUpodu.js";import"./useControlledState-CQ4qwdX_.js";import"./Collection-PnM2Ucj1.js";import"./CollectionBuilder-Dx8JAACx.js";import"./SelectionIndicator-CMZ6aZr9.js";import"./Separator-Br82JzEe.js";import"./SelectionManager-x8dLLgK6.js";import"./useEvent-C375hDTh.js";import"./useCollator-CIF19XO1.js";import"./FocusScope-0a8lKbDZ.js";import"./VisuallyHidden-CbY3TGrn.js";import"./getActionGroupSlot-BO1T8GeY.js";import"./useStatic-Cxgn0lDK.js";import"./context-BviD8e-k.js";import"./useFieldComponent-BWjf97vE.js";import"./useControlledHostValueProps-BKvGiPad.js";import"./FieldError-C5ECIufL.js";import"./Form-CjVHpqWM.js";import"./Group-Bt94AlX-.js";import"./Input-DsjyUW1i.js";import"./useTextField-DqUndp1N.js";import"./useFormReset-LpCZRAmu.js";import"./useFormValidation-sS7ClLRw.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Tr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const e=async F=>{await c(5e3),g(F)},h=a({defaultValues:{user:""}}),f=x();return r.jsx(p,{form:h,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},o={},t={render:()=>{const e=a();return S.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const e=a();return r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const kr=["Default","WithFieldError","WithFocus"];export{o as Default,t as WithFieldError,i as WithFocus,kr as __namedExportsOrder,Tr as default};

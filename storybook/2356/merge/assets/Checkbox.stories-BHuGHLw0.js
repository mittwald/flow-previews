import{r as x,j as r}from"./iframe-1Z6hWL0q.js";import{a as p,u as c,F as a,R as l,S as f,t as F}from"./ResetButton-DGt7cfbK.js";import{B as d}from"./Button-Up8_TRdV.js";import{S as j}from"./Section-DeLmOfWa.js";import{A as b}from"./ActionGroup-D0Uu4uF5.js";import{s as u}from"./ActionBatch-B4cDzNNZ.js";import{C as t}from"./Checkbox-BTM794-3.js";import{F as E}from"./FieldError-CSszVQO8.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CeVErRgL.js";import"./flowComponent-CQSqsFz-.js";import"./index-CPV4-njg.js";import"./clsx-B-dksMZM.js";import"./index-OoNE8c9e.js";import"./useLocalizedStringFormatter-FfFR6yJN.js";import"./context-DCww6zBl.js";import"./ActionGroupView-BsDKFWxT.js";import"./Content-BI990Rgh.js";import"./Heading-Dc2YOm8x.js";import"./Heading-BTDLHxEZ.js";import"./RSPContexts-BZtvqclp.js";import"./utils-B0Ub4KXD.js";import"./Text-NSg919ow.js";import"./browser-OyZXUgp8.js";import"./EmulatedBoldText-CsGTmPK_.js";import"./Text-DPhytgE2.js";import"./Modal-DHg5t4ae.js";import"./useOverlayController-zDyCyx1O.js";import"./useStatic-BMrg-KZz.js";import"./Overlay-DFEnDYi7.js";import"./OverlayContextProvider-BlmnF6zY.js";import"./LoadingSpinner-B9ElqUFv.js";import"./IconWarning-CstRa6-6.js";import"./remote-BXzLQ_GS.js";import"./Dialog-BOSurAfE.js";import"./Button-DpyZuV_i.js";import"./ProgressBar-BV7ioShA.js";import"./Label-Berd7YBY.js";import"./Hidden-CX4T_I8z.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B8l-Wr5R.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bgz5j4W3.js";import"./useFocus-MFE9JzzM.js";import"./useFocusRing-EnMEiTgA.js";import"./useFocusable-BrwqamRV.js";import"./OverlayArrow-0_UUlvtG.js";import"./useControlledState-DfFBi8JJ.js";import"./Collection-5lvTrIT4.js";import"./CollectionBuilder-zke4D84b.js";import"./SelectionIndicator-CEn-3elL.js";import"./Separator-CYJUtDva.js";import"./SelectionManager-CPzu3hBL.js";import"./useEvent-B2NydoIp.js";import"./useCollator-wpyuYlTN.js";import"./FocusScope-Dlwlk6_J.js";import"./VisuallyHidden-CCJLIB7u.js";import"./ButtonView-CzNSGQ0T.js";import"./Flex-Vk66B6a6.js";import"./useRef-B1h6Z-hA.js";import"./ContextMenuSection-DH07SvAX.js";import"./getActionGroupSlot-jkvbnKjz.js";import"./useFieldComponent-DdzfuZRi.js";import"./FieldError-CZQJbtEC.js";import"./Form-DiZWQd7A.js";import"./useFormValidation-B95RxpRV.js";import"./useToggleState-Bf8yXfZi.js";import"./useFormReset-BI-pxd56.js";import"./AlertText-BJ3sSdkZ.js";import"./AlertIcon-Blha7MMy.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),Gr={title:"Integrations/React Hook Form/Checkbox",component:p,render:()=>{const o=async h=>{await u(1500),B(h)},e=c({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},m={render:o=>{const e=c();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:o=>{const e=c();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Checkbox {...props}>Accept terms</Checkbox>
        </Field>
        <Checkbox isInvalid>
          Accept terms
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Checkbox>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Checkbox {...props}>Accept terms</Checkbox>
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
}`,...i.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{s as Default,m as WithFieldError,i as WithFocus,Hr as __namedExportsOrder,Gr as default};

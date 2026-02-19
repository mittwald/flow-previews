import{r as x,j as r}from"./iframe-ByHSJ7Zj.js";import{a as p,u as c,F as a,R as l,S as f,t as F}from"./ResetButton-BIryrxd9.js";import{B as d}from"./Button-DRqw54Mf.js";import{S as j}from"./Section-MBeJOyG5.js";import{A as b}from"./ActionGroup-gRZ2yxB4.js";import{s as u}from"./ActionBatch-DAYGGFfY.js";import{C as t}from"./Checkbox-BMTZR8B6.js";import{F as E}from"./FieldError-C1ELgHYl.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-C8-Mz4LM.js";import"./flowComponent-DJOvxh70.js";import"./index-Df7GZGOr.js";import"./clsx-B-dksMZM.js";import"./index-Bsvsb8kg.js";import"./useLocalizedStringFormatter-C3tZMmo1.js";import"./context-ER57Z7kb.js";import"./ActionGroupView-WZNbE7iy.js";import"./Content-CmPZ5biX.js";import"./Heading-BzErtb-B.js";import"./Heading-DSIgXPzr.js";import"./RSPContexts-DvjI-Cwg.js";import"./utils-AuVRPQNE.js";import"./Text-CE06l-7_.js";import"./browser-CsRLC16Z.js";import"./EmulatedBoldText-Cuj2T5Fx.js";import"./Text-CMdjYF8F.js";import"./Modal-CSnqDHAV.js";import"./useOverlayController-ClfDXpmr.js";import"./useStatic-DqDfuSHj.js";import"./Overlay-BXECwhfH.js";import"./OverlayContextProvider-D8q7I9aq.js";import"./LoadingSpinner-CaNN1xQ8.js";import"./IconWarning-D57HRYjk.js";import"./remote-NqjFlPNq.js";import"./Dialog-Bv6y7U-F.js";import"./Button-D0UJ2jXG.js";import"./ProgressBar-wJF_229J.js";import"./Label-BGNexww0.js";import"./Hidden-BFoBdwRQ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DwarV1Dq.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-53w3WrUq.js";import"./useFocus-DXK20Yfh.js";import"./useFocusRing-lrSptqjQ.js";import"./useFocusable-CTHcGGNa.js";import"./OverlayArrow-y5FFWgxm.js";import"./useControlledState-CZXI0X0f.js";import"./Collection-yoadDvk3.js";import"./CollectionBuilder-wcjbsfoD.js";import"./SelectionIndicator-B6Jii7Kf.js";import"./Separator-xmb_Jck1.js";import"./SelectionManager-DuKq6lse.js";import"./useEvent-CUm4NXev.js";import"./useCollator-uet9RA9C.js";import"./FocusScope-CdPzSUjP.js";import"./VisuallyHidden-DjUeNVhy.js";import"./ButtonView-B6fmM-tn.js";import"./Flex-CcCOHM-k.js";import"./useRef-C1sK2iwB.js";import"./ContextMenuSection-DKVD58cw.js";import"./getActionGroupSlot-V0cqrh5S.js";import"./useFieldComponent-CBB8cMnJ.js";import"./FieldError-N78nigrI.js";import"./Form-B6nfDOYR.js";import"./useFormValidation-BGcU6QC0.js";import"./useToggleState-2wDBawKA.js";import"./useFormReset-BeZmi33v.js";import"./AlertText-sxDaercD.js";import"./AlertIcon-CPipsjCC.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),Gr={title:"Integrations/React Hook Form/Checkbox",component:p,render:()=>{const o=async h=>{await u(1500),B(h)},e=c({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},m={render:o=>{const e=c();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:o=>{const e=c();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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

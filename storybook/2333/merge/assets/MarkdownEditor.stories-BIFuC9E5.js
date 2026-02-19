import{r as x,j as r}from"./iframe-ByHSJ7Zj.js";import{a as n,u as p,F as a,R as u,S as c,t as E}from"./ResetButton-BIryrxd9.js";import{L as m}from"./Label-tcy2V_mA.js";import{B as l}from"./Button-DRqw54Mf.js";import{S as j}from"./Section-MBeJOyG5.js";import{A as b}from"./ActionGroup-gRZ2yxB4.js";import{s as d}from"./ActionBatch-DAYGGFfY.js";import{M as s}from"./MarkdownEditor-gNXqBtkh.js";import{F as g}from"./FieldError-C1ELgHYl.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-C8-Mz4LM.js";import"./flowComponent-DJOvxh70.js";import"./index-Df7GZGOr.js";import"./clsx-B-dksMZM.js";import"./index-Bsvsb8kg.js";import"./useLocalizedStringFormatter-C3tZMmo1.js";import"./context-ER57Z7kb.js";import"./ActionGroupView-WZNbE7iy.js";import"./Content-CmPZ5biX.js";import"./Heading-BzErtb-B.js";import"./Heading-DSIgXPzr.js";import"./RSPContexts-DvjI-Cwg.js";import"./utils-AuVRPQNE.js";import"./Text-CE06l-7_.js";import"./browser-CsRLC16Z.js";import"./EmulatedBoldText-Cuj2T5Fx.js";import"./Text-CMdjYF8F.js";import"./Modal-CSnqDHAV.js";import"./useOverlayController-ClfDXpmr.js";import"./useStatic-DqDfuSHj.js";import"./Overlay-BXECwhfH.js";import"./OverlayContextProvider-D8q7I9aq.js";import"./LoadingSpinner-CaNN1xQ8.js";import"./IconWarning-D57HRYjk.js";import"./remote-NqjFlPNq.js";import"./Dialog-Bv6y7U-F.js";import"./Button-D0UJ2jXG.js";import"./ProgressBar-wJF_229J.js";import"./Label-BGNexww0.js";import"./Hidden-BFoBdwRQ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DwarV1Dq.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-53w3WrUq.js";import"./useFocus-DXK20Yfh.js";import"./useFocusRing-lrSptqjQ.js";import"./useFocusable-CTHcGGNa.js";import"./OverlayArrow-y5FFWgxm.js";import"./useControlledState-CZXI0X0f.js";import"./Collection-yoadDvk3.js";import"./CollectionBuilder-wcjbsfoD.js";import"./SelectionIndicator-B6Jii7Kf.js";import"./Separator-xmb_Jck1.js";import"./SelectionManager-DuKq6lse.js";import"./useEvent-CUm4NXev.js";import"./useCollator-uet9RA9C.js";import"./FocusScope-CdPzSUjP.js";import"./VisuallyHidden-DjUeNVhy.js";import"./ButtonView-B6fmM-tn.js";import"./Flex-CcCOHM-k.js";import"./useRef-C1sK2iwB.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-DKVD58cw.js";import"./getActionGroupSlot-V0cqrh5S.js";import"./Markdown-B3_Ujiiq.js";import"./CodeBlock-B4c0VKFX.js";import"./CopyButton-Dceu3lBK.js";import"./Tooltip-stz1zpwa.js";import"./react-children-utilities-B_uH5TcN.js";import"./InlineCode-BgDfO3r5.js";import"./Link-zFRuISWB.js";import"./Separator-DdYptHsH.js";import"./TextArea-nOay8X8S.js";import"./useFieldComponent-CBB8cMnJ.js";import"./useControlledHostValueProps-BcSvQjHa.js";import"./FieldDescription-BGXfCMai.js";import"./TextField-B3HDf383.js";import"./FieldError-N78nigrI.js";import"./Form-B6nfDOYR.js";import"./Group-D2DTtkcC.js";import"./Input-Cjg2Ef7t.js";import"./useTextField-1pYdfEhT.js";import"./useFormReset-BeZmi33v.js";import"./useFormValidation-BGcU6QC0.js";import"./AlertText-sxDaercD.js";import"./AlertIcon-CPipsjCC.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),eo={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=p({defaultValues:{user:""}}),h=E();return r.jsx(a,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=p({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p({defaultValues:{field:""}});return r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <MarkdownEditor>
            <Label>Message</Label>
          </MarkdownEditor>
        </Field>
        <MarkdownEditor isInvalid>
          <Label>Message</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </MarkdownEditor>
      </Form>;
  }
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <MarkdownEditor>
            <Label>Message</Label>
          </MarkdownEditor>
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
}`,...i.parameters?.docs?.source}}};const io=["Default","WithFieldError","WithFocus"];export{t as Default,e as WithFieldError,i as WithFocus,io as __namedExportsOrder,eo as default};

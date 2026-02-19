import{r as x,j as r}from"./iframe-Cbm1tYQ5.js";import{a as n,u as p,F as a,R as u,S as c,t as E}from"./ResetButton-CR0iXgtB.js";import{L as m}from"./Label-C1u7fixG.js";import{B as l}from"./Button-Cqfz7zcL.js";import{S as j}from"./Section-B0QB89CB.js";import{A as b}from"./ActionGroup-DDbBTeyS.js";import{s as d}from"./ActionBatch-CjHdyiP4.js";import{M as s}from"./MarkdownEditor-BvLsLKGp.js";import{F as g}from"./FieldError-DdEKXl5v.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CgrPgLPo.js";import"./flowComponent-BdgFVdCI.js";import"./index-DnzctHoT.js";import"./clsx-B-dksMZM.js";import"./index-cwYx15Z_.js";import"./useLocalizedStringFormatter-DOOHcy82.js";import"./context-CpUEkiXT.js";import"./ActionGroupView-C0tm-8ht.js";import"./Content-Bz7pLqo2.js";import"./Heading-DoywAf3I.js";import"./Heading-CJu_lfUD.js";import"./RSPContexts-BN50OY8k.js";import"./utils-CwSfACxU.js";import"./Text-K6yu7K7n.js";import"./browser-BO2LE4a1.js";import"./EmulatedBoldText-DOwlcjUH.js";import"./Text-CRfwxtsq.js";import"./Modal-B7ggXlTZ.js";import"./useOverlayController-BSdz9lOP.js";import"./useStatic-CSSB8BCl.js";import"./Overlay-Cr8QYrRm.js";import"./OverlayContextProvider-DDpjWSCr.js";import"./LoadingSpinner-CziFUZ0y.js";import"./IconWarning-HRESMERf.js";import"./remote-CNywZcFz.js";import"./Dialog-DOWWi4PD.js";import"./Button-DMDpRFJa.js";import"./ProgressBar-BRc7Paog.js";import"./Label-z3gRbOqe.js";import"./Hidden-Ct3-vkmZ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BhJmZsby.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-D-cWxohr.js";import"./useFocus-DGTwh-gS.js";import"./useFocusRing-2ds-u5nI.js";import"./useFocusable-DfxkJnS0.js";import"./OverlayArrow-DLVTOKg_.js";import"./useControlledState-CcdBsJdv.js";import"./Collection-My4n8esd.js";import"./CollectionBuilder-BRfzWkKh.js";import"./SelectionIndicator-oJF9tjaE.js";import"./Separator-DziD0EOf.js";import"./SelectionManager-Xen2pH3E.js";import"./useEvent-CIGBudko.js";import"./useCollator-D1MkjfpC.js";import"./FocusScope-BGzNCZ_B.js";import"./VisuallyHidden--ZEPdGNY.js";import"./ButtonView-DnjtrRMk.js";import"./Flex-727o-fn3.js";import"./useRef-lBqR2J42.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-BbEgK5mq.js";import"./getActionGroupSlot-Bk49RJtR.js";import"./Markdown-BBV66C2s.js";import"./CodeBlock-CnsLZtYB.js";import"./CopyButton-Bk3Pou9D.js";import"./Tooltip-C2QRQqlv.js";import"./react-children-utilities-DRyeSPLu.js";import"./InlineCode-Bp8Ij51C.js";import"./Link-BAqQtX5j.js";import"./Separator-D4Phbak1.js";import"./TextArea-Bb_hkuEY.js";import"./useFieldComponent-BRiGBo1N.js";import"./useControlledHostValueProps-CPKej2US.js";import"./FieldDescription-Ct8S77_6.js";import"./TextField-qS-l0aOc.js";import"./FieldError-b__4rZn4.js";import"./Form-DE723K-l.js";import"./Group-BVQg3o8h.js";import"./Input-KBjiAAgX.js";import"./useTextField-DOevCIiu.js";import"./useFormReset-DovDq4jf.js";import"./useFormValidation-SL6QRRh_.js";import"./AlertText-JWgofNcm.js";import"./AlertIcon-CDhVv57V.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),eo={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=p({defaultValues:{user:""}}),h=E();return r.jsx(a,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=p({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p({defaultValues:{field:""}});return r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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

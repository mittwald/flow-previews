import{r as x,j as r}from"./iframe-PZSwL5UI.js";import{a as n,u as p,F as a,R as u,S as c,t as E}from"./ResetButton-DSe7vvOE.js";import{L as m}from"./Label-DHad4C3T.js";import{B as l}from"./Button-Dx8ytIXV.js";import{S as j}from"./Section-Ly32yzfQ.js";import{A as b}from"./ActionGroup-CuC620Qy.js";import{s as d}from"./ActionBatch-KmZgQ_FO.js";import{M as s}from"./MarkdownEditor-CnmYvEgo.js";import{F as g}from"./FieldError-DI2vGfZA.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DDVyub9n.js";import"./flowComponent-B2U-3AiS.js";import"./index-xzvR7-Gw.js";import"./clsx-B-dksMZM.js";import"./index-Da7vmrj1.js";import"./useLocalizedStringFormatter-DRymnkwE.js";import"./context-Ff7U_4vz.js";import"./ActionGroupView-CIbffeee.js";import"./Content-DRuiMhgn.js";import"./Heading-DkYLS7Fi.js";import"./Heading-DxHx-m9x.js";import"./RSPContexts-TcotrMre.js";import"./utils-lOj21ZD_.js";import"./Text-CkpR2hqn.js";import"./browser-Ds1bEyov.js";import"./EmulatedBoldText-CuqW50TP.js";import"./Text-BG-2dzKS.js";import"./Modal-C7FSQX3Q.js";import"./useOverlayController-BVZAJrcY.js";import"./useStatic-Bw6k9Sf5.js";import"./Overlay-DZSkN4bv.js";import"./OverlayContextProvider-DVB3ck2o.js";import"./LoadingSpinner-kHlSwNnH.js";import"./IconWarning-Brl3hUMe.js";import"./remote-mdYu2fN6.js";import"./Dialog-BxivZnjn.js";import"./Button-BQZ9yYEV.js";import"./ProgressBar-CH3LzA0o.js";import"./Label-e4m8Xdvz.js";import"./Hidden-0gux2v4t.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-N6JTHu_p.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-B1ZCcdw8.js";import"./useFocus-BI7y428A.js";import"./useFocusRing-C-2IcVPM.js";import"./useFocusable-B4WRTgkS.js";import"./OverlayArrow-Cvgp3jMH.js";import"./useControlledState-DIXXzqms.js";import"./Collection-D6QzoLja.js";import"./CollectionBuilder-o3rgBYyM.js";import"./SelectionIndicator-CKNEQhdD.js";import"./Separator-DApvHFcW.js";import"./SelectionManager-D57zfRFA.js";import"./useEvent-WDBpmbG3.js";import"./useCollator-DzxVKGp5.js";import"./FocusScope-BkNZ8LpG.js";import"./VisuallyHidden-UxX7HzEl.js";import"./ButtonView-XkIAqQ4n.js";import"./Flex-Bs1WbtgB.js";import"./useRef-BIiAMvRM.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-B4TWz5w1.js";import"./getActionGroupSlot-Dj7srP7C.js";import"./Markdown-Da7u3u5Y.js";import"./CodeBlock-BAwxBjrD.js";import"./CopyButton-B3a5eF8F.js";import"./Tooltip-BciKW2TA.js";import"./react-children-utilities-CNGDxLGo.js";import"./InlineCode-lXY4CoYg.js";import"./Link-sMsqPXw3.js";import"./Separator-BNESHi7w.js";import"./TextArea-DVPP5hpJ.js";import"./useFieldComponent-BUmkKSsK.js";import"./useControlledHostValueProps-Ddkm3ljY.js";import"./FieldDescription-D6wLWptA.js";import"./TextField-9pTBhuAO.js";import"./FieldError-mE8Rrcl-.js";import"./Form-BblXnLIP.js";import"./Group-DXdh9woI.js";import"./Input-uYjA58vR.js";import"./useTextField-CiLx_NKB.js";import"./useFormReset-DtrcblTn.js";import"./useFormValidation-BFZ87yhB.js";import"./AlertText-CY4BBxtN.js";import"./AlertIcon-BtM4zuia.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),eo={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=p({defaultValues:{user:""}}),h=E();return r.jsx(a,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=p({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p({defaultValues:{field:""}});return r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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

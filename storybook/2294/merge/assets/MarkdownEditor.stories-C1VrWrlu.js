import{j as r,r as x}from"./iframe-BAsHckrK.js";import{a as n,u as a,F as p,t as E,R as u,S as c}from"./ResetButton-DSkmlm83.js";import{L as s}from"./Label-DVOhOuhT.js";import{B as l}from"./Button-CAoYj-yB.js";import{S as j}from"./Section-NIPDFOQA.js";import{A as b}from"./ActionGroup-CumlRKzq.js";import{s as d}from"./Action-WxgR-8km.js";import{M as m}from"./MarkdownEditor-BBAlv7JF.js";import{F as g}from"./FieldError-ZX2j7DJQ.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CGZuOMtH.js";import"./flowComponent-B65nQAul.js";import"./index-CyIJxzCh.js";import"./clsx-B-dksMZM.js";import"./index-Cf_R1xcK.js";import"./useLocalizedStringFormatter-CGl9WC2_.js";import"./context-BKg0mO6Y.js";import"./useRef-CAXD_NwY.js";import"./utils-AcXTY-LA.js";import"./useOverlayController-BBLTL3Hv.js";import"./context-BHkWm8Gn.js";import"./useStatic-CHwNqk00.js";import"./ButtonView-ANSEPiju.js";import"./browser-tZCM2k1B.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Cla8ySRz.js";import"./Hidden-CitD2GXi.js";import"./IconWarning-DHq1gdF3.js";import"./remote-5f3Q71VQ.js";import"./Text-B__BY7tJ.js";import"./EmulatedBoldText-BuJbkCoS.js";import"./Text-CORhkzC6.js";import"./LoadingSpinner-fmonyGhO.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-v8rEwTVX.js";import"./ProgressBar-BYgBobO-.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Zs1yjNWV.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BtuPSsUz.js";import"./useFocus-DSg5hzPG.js";import"./useFocusRing-PAL8hD_p.js";import"./useFocusable-DEw7yEFU.js";import"./ContextMenuSection-BquW4vGk.js";import"./Dialog-BI9ufNdz.js";import"./RSPContexts-CrAnBcro.js";import"./OverlayArrow-BEZkQ9dz.js";import"./useControlledState-DIA42IR3.js";import"./Collection-B6YyQZIk.js";import"./CollectionBuilder-Ciu-gQv8.js";import"./SelectionIndicator-ClkIlDZY.js";import"./Separator-ClsU7Cqa.js";import"./SelectionManager-DTu8mNRc.js";import"./useEvent-BI0qkTtn.js";import"./useCollator-1De53UJM.js";import"./FocusScope-BSJXv8u1.js";import"./VisuallyHidden-BIPiOxSh.js";import"./getActionGroupSlot-B1R4nGn3.js";import"./Markdown-Cx3ERd3W.js";import"./CodeBlock-CLytqY68.js";import"./CopyButton-BqLPpRuC.js";import"./Tooltip-BcLjeMpf.js";import"./react-children-utilities-DSAPpFTW.js";import"./Heading-CuVtTPS-.js";import"./Heading-D3ETNjbu.js";import"./InlineCode-DEU8jUC1.js";import"./Link-BhxfUhLW.js";import"./Separator-D048xwFE.js";import"./TextArea-Cgr0TgmQ.js";import"./TextFieldBase-BqeuXRta.js";import"./FieldDescription-CD7ak6-M.js";import"./useFieldComponent-uzP_CJXZ.js";import"./TextField-cyE78KFS.js";import"./FieldError-Ch8lYR65.js";import"./Form-BEcGmyNR.js";import"./Group-D8US-dbe.js";import"./Input-DVOtN3yU.js";import"./useTextField-DFE5rIX1.js";import"./useFormReset-BBc75pQ_.js";import"./useFormValidation-l5tjlCjY.js";import"./useControlledHostValueProps-DIe9Ntlu.js";import"./AlertText-CZdsx7H2.js";import"./AlertIcon-C2q1LJ0F.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),$r={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const ro=["Default","WithFieldError","WithFocus"];export{t as Default,e as WithFieldError,i as WithFocus,ro as __namedExportsOrder,$r as default};

import{j as r,r as x}from"./iframe-BK9Ry9wr.js";import{a as n,u as a,F as p,t as E,R as u,S as c}from"./ResetButton-C0XPbUI0.js";import{L as s}from"./Label-MHPgjcAC.js";import{B as l}from"./Button-CHbQbW2n.js";import{S as j}from"./Section-Cd3PiQqp.js";import{A as b}from"./ActionGroup-B30hSGLL.js";import{s as d}from"./Action-CpYeBO1D.js";import{M as m}from"./MarkdownEditor-DCDVsIJj.js";import{F as g}from"./FieldError-Dlnwp2IY.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-QikLaQcI.js";import"./flowComponent-DHXq45QP.js";import"./index-DN2_BW85.js";import"./clsx-B-dksMZM.js";import"./index-DqsXJ4xp.js";import"./useLocalizedStringFormatter-C7EPZ_KA.js";import"./context-DsIoSqto.js";import"./useRef-DMVqSxmL.js";import"./utils-DO-BnPGQ.js";import"./ButtonView-CN2Wm_bq.js";import"./browser-DDyWafud.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BzCkyqHu.js";import"./Hidden-PKJk_aj-.js";import"./IconWarning-ClqYagFF.js";import"./remote-BKPS1KcS.js";import"./Text-kkda9Q25.js";import"./EmulatedBoldText-NOAnNUmj.js";import"./Text-Cq5Rc76r.js";import"./LoadingSpinner-FeF_CDXe.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CnSM8-vw.js";import"./ProgressBar-EpzEHd1o.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-MQsZvy4I.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DlcvFeQS.js";import"./useFocus-C5fN754a.js";import"./useFocusRing-Dknf048Z.js";import"./useFocusable-CjhkSx1Q.js";import"./ContextMenuSection-BoFqJWQI.js";import"./Dialog-CFBRHxwp.js";import"./RSPContexts--7QpwlJX.js";import"./OverlayArrow-CRZVDLqR.js";import"./useControlledState-D5gBJyZQ.js";import"./Collection-DA19Hn3z.js";import"./CollectionBuilder-D0V9DfFD.js";import"./SelectionIndicator-D3Pxw9N-.js";import"./Separator-C7FW_ZyO.js";import"./SelectionManager-BORRpVca.js";import"./useEvent-C7NWigLs.js";import"./useCollator-DyL6zZr9.js";import"./FocusScope-Lcnwzjdv.js";import"./VisuallyHidden-D79PysQv.js";import"./getActionGroupSlot-BQEdHt4G.js";import"./useStatic-D1EtWzUP.js";import"./context-BUIiTJfL.js";import"./Markdown-77Zwb6jq.js";import"./CodeBlock-DzEgg3kq.js";import"./CopyButton-Z8K21_W3.js";import"./Tooltip-SzaSakXG.js";import"./react-children-utilities-BPC2HviM.js";import"./Heading-DbP6ax1z.js";import"./Heading-AwuUEGOn.js";import"./InlineCode-JczHc7s5.js";import"./Link-DALrfrfA.js";import"./Separator-BIFvjswc.js";import"./TextArea-_5d5hLK8.js";import"./TextFieldBase-gihnozah.js";import"./FieldDescription-urh4LMIG.js";import"./useFieldComponent-DnU67IFr.js";import"./TextField-BdABkByo.js";import"./FieldError-jtZpQJaz.js";import"./Form-DgYJKMgS.js";import"./Group-DCFzKDnc.js";import"./Input-yJFna98K.js";import"./useTextField-BPhFFoYw.js";import"./useFormReset-CaS7VrAz.js";import"./useFormValidation-4onogkfY.js";import"./useControlledHostValueProps-CUu1Ad4Y.js";import"./AlertText-Q3UmWydJ.js";import"./AlertIcon-CZTB9fHB.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Zr={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const $r=["Default","WithFieldError","WithFocus"];export{t as Default,e as WithFieldError,i as WithFocus,$r as __namedExportsOrder,Zr as default};

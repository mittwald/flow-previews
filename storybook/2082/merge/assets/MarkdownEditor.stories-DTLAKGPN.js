import{j as r}from"./iframe-EtTbRQoM.js";import{a as e,u as s,F as n,t as h}from"./Form-B86kUuvW.js";import{L as p}from"./Label-BHPxSoWd.js";import{B as m}from"./Button-DxuCaQyR.js";import{S as x}from"./Section-BmVYkrqh.js";import{A as f}from"./ActionGroup-Cl4D3H2T.js";import{s as a}from"./Action-CL-CoYGw.js";import{M as u}from"./MarkdownEditor-OFInUq4I.js";import"./index-nuYtCEEu.js";import"./dynamic-Cv7GHFn6.js";import"./flowComponent-CRP3amPt.js";import"./index-DwnAt2PO.js";import"./clsx-B-dksMZM.js";import"./index-rMxpLDk9.js";import"./FieldError-Bx65Dx0T.js";import"./IconWarning-CO-lUcxm.js";import"./FieldError-Dm1dzE4u.js";import"./utils-C_hvyJpn.js";import"./Text-CANjZEUs.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLocalizedStringFormatter-FAUwXJff.js";import"./context-HEbrZrvP.js";import"./browser-Cob99Do9.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-FPs7V2cE.js";import"./Hidden-BhWY_xu3.js";import"./Text-CAO-zPwU.js";import"./EmulatedBoldText-rZpq4XPn.js";import"./LoadingSpinner-QwVO93wM.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-qX7xBgDX.js";import"./ProgressBar-C-f1QmIl.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-sAonsHdy.js";import"./useFocus-9RWBE5qv.js";import"./useFocusRing-hCmULEnE.js";import"./useFocusable-Do_2l7DI.js";import"./ContextMenuSection-CGnTeLpY.js";import"./Dialog-D4gVf8vR.js";import"./RSPContexts-Cv7znJuu.js";import"./OverlayArrow-CczkULsk.js";import"./useControlledState-DmCe06Ai.js";import"./Collection-CmlnhQJV.js";import"./CollectionBuilder-DTV-m0tl.js";import"./SelectionIndicator-BOzSayKJ.js";import"./Separator-CwOt3VIi.js";import"./SelectionManager-DfS84ysN.js";import"./useEvent-DcRgbaUL.js";import"./useCollator-CjrbHKqV.js";import"./FocusScope-Dkurg4aB.js";import"./VisuallyHidden-B8Lwuqmn.js";import"./getActionGroupSlot-CxKatSQe.js";import"./useStatic-DxnBGf3l.js";import"./context-C1SllNhn.js";import"./Markdown-BC6pCH-C.js";import"./CodeBlock-67SLLjLr.js";import"./CopyButton-DJ0FVRXt.js";import"./Tooltip-Bd-mtq7X.js";import"./ClearPropsContextView-Bx4CA8qQ.js";import"./react-children-utilities-DmQ8-YOo.js";import"./Heading-YEToWG6x.js";import"./Heading-DTQh2nx3.js";import"./InlineCode-D-DctC-x.js";import"./Link-C5iBt_w0.js";import"./Separator-B-i3IXfa.js";import"./TextArea-NAi9HkBi.js";import"./TextFieldBase-CvME3450.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-RyyHlj0A.js";import"./TextField-D5UL4yco.js";import"./Form-CyJo_kk3.js";import"./Group-DeuTwRQ_.js";import"./Input-TlPGvJ5n.js";import"./useTextField-Ec9tFhY1.js";import"./useFormReset-B1BZ1rNK.js";import"./useFormValidation-CisZkPpg.js";import"./ReactAriaControlledValueFix-CYrgQbLH.js";import"./useManagedValue-DOWOMeeY.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,j=F("submit"),Kr={title:"Integrations/React Hook Form/MarkdownEditor",component:e,render:()=>{const t=async l=>{await a(5e3),j(l)},c=s({defaultValues:{user:""}}),d=h();return r.jsx(n,{form:c,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(d,{name:"user",children:r.jsx(u,{children:r.jsx(p,{children:"Message"})})}),r.jsx(f,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},o={},i={render:()=>{const t=s();return r.jsxs(n,{form:t,onSubmit:async()=>await a(2e3),children:[r.jsx(e,{name:"text",rules:{required:!0},children:r.jsx(u,{children:r.jsx(p,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"} rules={{
        required: true
      }}>
          <MarkdownEditor>
            <Label>Message</Label>
          </MarkdownEditor>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};const Nr=["Default","WithFocusAndError"];export{o as Default,i as WithFocusAndError,Nr as __namedExportsOrder,Kr as default};

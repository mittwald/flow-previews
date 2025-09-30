import{j as r}from"./iframe-CxmXe-_O.js";import{a as c,u as d,F as l,t as g}from"./Form-BHUWEINQ.js";import{L as h}from"./Label-DeDEMxfU.js";import{B as m}from"./Button-DVo7WD-1.js";import{S}from"./Section-DzvPU-TL.js";import{A as y}from"./ActionGroup-JupVt7-E.js";import{s as x}from"./Action-CKP9QlTZ.js";import{M as f}from"./MarkdownEditor-XGUbTL9V.js";import"./index-Cun1SEai.js";import"./dynamic-5AyxyhbL.js";import"./PropsContextProvider-D0hpqFCU.js";import"./mergeRefs-DrFPU8wS.js";import"./index-D4JkFdbd.js";import"./clsx-B-dksMZM.js";import"./FieldError-CSErn7mI.js";import"./IconWarning-DZNLduw-.js";import"./FieldError-D8IUoOjD.js";import"./utils-Cd13syVz.js";import"./Text-DV04N56Q.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-D3SJZW6Q.js";import"./context-BaUvMDTJ.js";import"./browser-fsrkaBj_.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-2vh9UW-y.js";import"./Hidden-fABZRyqD.js";import"./Text-BT2KT2kR.js";import"./EmulatedBoldText-D2nyMxZT.js";import"./LoadingSpinner-DUEgH9Lr.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DXwv69Ey.js";import"./ProgressBar-FqWf0sr1.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BIfsm19n.js";import"./useFocus-BpzuXZ8X.js";import"./useFocusRing-D7TcncFW.js";import"./useFocusable-CZtfPtCy.js";import"./ContextMenuSection-qRzHMhAk.js";import"./Popover-Boo6uHgA.js";import"./DialogTriggerView-BttboI6J.js";import"./context-CxNyIzEe.js";import"./useStatic-8bLBY8Gb.js";import"./RSPContexts-RLIssCdn.js";import"./ClearPropsContextView-DkF-i5cN.js";import"./useControlledState-y5DploKZ.js";import"./FocusScope-DfTm09Tq.js";import"./useCollator-Crzbf2Ra.js";import"./VisuallyHidden--eIM32hM.js";import"./Collection-DWMrbndQ.js";import"./CollectionBuilder-BDxApjdE.js";import"./context-DGTiufFM.js";import"./Separator-zPxV8vEZ.js";import"./SelectionManager-wV6Nrrvy.js";import"./useEvent-CrG2vQ4Z.js";import"./Switch-BtaIK91j.js";import"./useMakeFocusable-Doucc66J.js";import"./useToggleState-CMgWQrwt.js";import"./useFormReset-CB0PL74l.js";import"./getActionGroupSlot-IO6DOTZ-.js";import"./Markdown-h_ZRuACo.js";import"./CodeBlock-B9OWXNcc.js";import"./CopyButton-BBoQAdqq.js";import"./Tooltip-BVIfvhPi.js";import"./react-children-utilities-BpOYc3hK.js";import"./Heading-BYEzDO2o.js";import"./Heading-CGtduReE.js";import"./InlineCode-JTrP1G6m.js";import"./Link-C9Y1w3bE.js";import"./Separator-D4O5lCJs.js";import"./TextArea-CCYTYa-0.js";import"./TextFieldBase-DLSID0TD.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-Dm0WW9cG.js";import"./TextField-C2jAMHQX.js";import"./Form-CZOHyRg1.js";import"./Group-S-iYjqxn.js";import"./Input-c2pTqiZe.js";import"./useTextField-BOucmztC.js";import"./useFormValidation-D2bFAqKZ.js";import"./ReactAriaControlledValueFix-Bia0_yWL.js";import"./useManagedValue-B4k231vh.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),Zr={title:"Integrations/React Hook Form/MarkdownEditor",component:c,render:()=>{const t=async b=>{await x(5e3),E(b)},F=d({defaultValues:{user:""}}),j=g();return r.jsx(l,{form:F,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(j,{name:"user",children:r.jsx(f,{children:r.jsx(h,{children:"Message"})})}),r.jsx(y,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},o={},i={render:()=>{const t=d();return r.jsxs(l,{form:t,onSubmit:async()=>await x(2e3),children:[r.jsx(c,{name:"text",rules:{required:!0},children:r.jsx(f,{children:r.jsx(h,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var e,s,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:"{}",...(p=(s=o.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var n,a,u;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(u=(a=i.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};const $r=["Default","WithFocusAndError"];export{o as Default,i as WithFocusAndError,$r as __namedExportsOrder,Zr as default};

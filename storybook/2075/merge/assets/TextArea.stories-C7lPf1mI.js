import{j as r}from"./iframe-D3XbVUAE.js";import{a as x,u as h,F as f,t as b}from"./Form-C5MCGQf3.js";import{L as e}from"./Label-BTIrFf4y.js";import{B as n}from"./Button-DI43yX0M.js";import{S as y}from"./Section-BUZrj2S6.js";import{A as S}from"./ActionGroup-F8VITapX.js";import{s as g}from"./Action-CZBfRLDN.js";import{d as B}from"./dummyText-CX_I_Wpl.js";import{T as o}from"./TextArea-BmEWbLk8.js";import"./index-Cun1SEai.js";import"./dynamic-GIq4BKTG.js";import"./flowComponent-EDib50S8.js";import"./index-CK8n9fzK.js";import"./clsx-B-dksMZM.js";import"./index-BE_iNncf.js";import"./FieldError-DuGPuZu9.js";import"./IconWarning-DpoKEiS2.js";import"./FieldError-NLw4NqNk.js";import"./utils-BWY6h_sn.js";import"./Text-D1dMR7Bg.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-CjS_r_W_.js";import"./context-DmwBBPOa.js";import"./browser-DZQtGRWw.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-DVxhCXlj.js";import"./Hidden-Cd6SNVLk.js";import"./Text-D8iCnd0a.js";import"./EmulatedBoldText-C38wPnte.js";import"./LoadingSpinner-LCrs4rVN.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BiJGxu5-.js";import"./ProgressBar-BpanmrTJ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DzXxx4G-.js";import"./useFocus-DS8-NOtK.js";import"./useFocusRing-C2luJKmh.js";import"./useFocusable-ZL6151jY.js";import"./ContextMenuSection-CLGzRvVY.js";import"./Dialog-D6YV7AqF.js";import"./RSPContexts-BakoLx3C.js";import"./OverlayArrow-9doXs0eI.js";import"./useControlledState-Dbx7ZwrT.js";import"./Collection-C3nUBF4h.js";import"./CollectionBuilder-B_u7Wa0Q.js";import"./SelectionIndicator-Cq3hNpeI.js";import"./Separator-BCuxzefv.js";import"./SelectionManager-CUwtbCt4.js";import"./useEvent-nRU769M-.js";import"./useCollator-zmWlXBku.js";import"./FocusScope-Bgf4u7XC.js";import"./VisuallyHidden-ChWvOP_M.js";import"./getActionGroupSlot-CXPM0c0n.js";import"./useStatic-B8Xkh7jF.js";import"./context-Do4klyfP.js";import"./TextFieldBase-D4fv0n1i.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-CCF4pGSH.js";import"./TextField-COqQTs2q.js";import"./Form-CcsDzmFP.js";import"./Group-BPkRhbu5.js";import"./Input-CNAwbAUs.js";import"./useTextField-BMKAR3PL.js";import"./useFormReset-BLKvBmEx.js";import"./useFormValidation-Co07oj9m.js";import"./ReactAriaControlledValueFix-D1VqbsXd.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,T=A("submit"),vr={title:"Integrations/React Hook Form/TextArea",component:x,render:()=>{const t=async F=>{await g(1500),T(F)},j=h({defaultValues:{message:"",messageDefaultValue:B.medium,messageRequired:"",messageMaxLength:""}}),s=b();return r.jsx(f,{form:j,onSubmit:t,children:r.jsxs(y,{children:[r.jsx(s,{name:"message",children:r.jsx(o,{children:r.jsx(e,{children:"Message"})})}),r.jsx(s,{name:"messageDefaultValue",children:r.jsx(o,{children:r.jsx(e,{children:"Message"})})}),r.jsx(s,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(o,{children:r.jsx(e,{children:"Message"})})}),r.jsx(s,{name:"messageMaxLength",children:r.jsx(o,{maxLength:100,showCharacterCount:!0,children:r.jsx(e,{children:"Message"})})}),r.jsx(S,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},m={},i={render:()=>{const t=h();return r.jsxs(f,{form:t,onSubmit:async()=>await g(2e3),children:[r.jsx(x,{name:"text",children:r.jsx(o,{type:"text",children:r.jsx(e,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};var a,p,u;m.parameters={...m.parameters,docs:{...(a=m.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(u=(p=m.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var c,d,l;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"}>
          <TextArea type="text">
            <Label>Text</Label>
          </TextArea>
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
}`,...(l=(d=i.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const Ir=["Default","WithFocusAndError"];export{m as Default,i as WithFocusAndError,Ir as __namedExportsOrder,vr as default};

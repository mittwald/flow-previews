import{j as r}from"./iframe-CwjVVvSu.js";import{a as x,u as h,F as f,t as b}from"./Form-CeAg-VEU.js";import{L as e}from"./Label-CmvTTYLZ.js";import{B as n}from"./Button-BzxBG2HJ.js";import{S as y}from"./Section-CxEg7JTo.js";import{A as S}from"./ActionGroup-CtSc6WUI.js";import{s as g}from"./Action-CQ8EezpL.js";import{d as B}from"./dummyText-CX_I_Wpl.js";import{T as o}from"./TextArea-DMj0oyvY.js";import"./index-Cun1SEai.js";import"./dynamic-BP9Yj9yh.js";import"./flowComponent-CL0EVs0o.js";import"./index-CVGQdXYt.js";import"./clsx-B-dksMZM.js";import"./index-Bxp7_DVb.js";import"./FieldError-XyqikU8N.js";import"./IconWarning-B6H6J5Pk.js";import"./FieldError-C3URs1EZ.js";import"./utils-OpG5u5ZF.js";import"./Text-lT5rhDYZ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-BEI6070A.js";import"./context-YbH8ssAd.js";import"./browser-DnOs_TEg.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-BELpmtJQ.js";import"./Hidden-BrRDJs-s.js";import"./Text-BOmlTVxc.js";import"./EmulatedBoldText-pbz3Nf-x.js";import"./LoadingSpinner-BwQDbOwS.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-ClXMkmVB.js";import"./ProgressBar-QC1O3iDd.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CTJZYj-E.js";import"./useFocus-YxLRULIL.js";import"./useFocusRing-DVoBnH5y.js";import"./useFocusable-CooOyqEQ.js";import"./ContextMenuSection-BSZPjhOz.js";import"./Dialog-D6Mx5C8w.js";import"./RSPContexts-C2pkpfxa.js";import"./OverlayArrow-n3jQFhGI.js";import"./useControlledState-3R78iQB5.js";import"./Collection-cKUjot9l.js";import"./CollectionBuilder-DmI3Nmaj.js";import"./context-Boi0W4no.js";import"./Separator-DgCYxSL8.js";import"./SelectionManager-BvVPZ4Sc.js";import"./useEvent-tgNtvJjt.js";import"./useCollator-3AvnbkJz.js";import"./FocusScope-3UfsOkyw.js";import"./VisuallyHidden-DYp4WZRH.js";import"./getActionGroupSlot-D-7WMSXI.js";import"./useStatic-DG0mSv16.js";import"./context-C4fo6dak.js";import"./TextFieldBase-BeraLkZm.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-C3q2LEa8.js";import"./TextField-CogGwaCl.js";import"./Form-BBcAxf0K.js";import"./Group-BsewxSmY.js";import"./Input-DebxReei.js";import"./useTextField-DeAEFuQI.js";import"./useFormReset-BtU7PEqW.js";import"./useFormValidation-Z5AW4dUj.js";import"./ReactAriaControlledValueFix-DOkLGVFB.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,T=A("submit"),vr={title:"Integrations/React Hook Form/TextArea",component:x,render:()=>{const t=async F=>{await g(1500),T(F)},j=h({defaultValues:{message:"",messageDefaultValue:B.medium,messageRequired:"",messageMaxLength:""}}),s=b();return r.jsx(f,{form:j,onSubmit:t,children:r.jsxs(y,{children:[r.jsx(s,{name:"message",children:r.jsx(o,{children:r.jsx(e,{children:"Message"})})}),r.jsx(s,{name:"messageDefaultValue",children:r.jsx(o,{children:r.jsx(e,{children:"Message"})})}),r.jsx(s,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(o,{children:r.jsx(e,{children:"Message"})})}),r.jsx(s,{name:"messageMaxLength",children:r.jsx(o,{maxLength:100,showCharacterCount:!0,children:r.jsx(e,{children:"Message"})})}),r.jsx(S,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},m={},i={render:()=>{const t=h();return r.jsxs(f,{form:t,onSubmit:async()=>await g(2e3),children:[r.jsx(x,{name:"text",children:r.jsx(o,{type:"text",children:r.jsx(e,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};var a,p,u;m.parameters={...m.parameters,docs:{...(a=m.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(u=(p=m.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var c,d,l;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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

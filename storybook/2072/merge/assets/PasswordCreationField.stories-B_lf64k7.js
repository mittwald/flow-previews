import{j as r}from"./iframe-tskdVQ8N.js";import{a as p,u as c,F as u,t as C}from"./Form-CcGsBZKh.js";import{L as d}from"./Label-CsJ7Xmev.js";import{B as e}from"./Button-Dsg_4rdI.js";import{S as T}from"./Section-O741B4-H.js";import{A as D}from"./ActionGroup-B0eph536.js";import{s as h}from"./Action-CeCtXdjv.js";import{S as O}from"./SearchField-BJmpvPNj.js";import{d as q,O as g,P as B,n as o,r as E}from"./PasswordCreationField-B-htZAP2.js";import{e as L}from"./isPromise-APPd_fLV-8tYzn7uh.js";import"./index-Cun1SEai.js";import"./dynamic-BrDu037J.js";import"./flowComponent-DXfmr-ai.js";import"./index-D6N0AnTm.js";import"./clsx-B-dksMZM.js";import"./index-C1m14znk.js";import"./FieldError-BdEz1ju8.js";import"./IconWarning-Bd2S-Yd8.js";import"./FieldError-BQtr77Yc.js";import"./utils-B12eWPaZ.js";import"./Text-DKYFQica.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-B-RI6mzv.js";import"./context-DiW1jRMX.js";import"./browser-C459Qnce.js";import"./Label-ZNOxXk3Q.js";import"./Hidden-D_rJ6hGg.js";import"./Text-jVUpGvvP.js";import"./EmulatedBoldText-BMIw02bL.js";import"./LoadingSpinner-DLMtzbRX.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DB-V2NKd.js";import"./ProgressBar-rxfhBUJO.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BvJ9VF5d.js";import"./useFocus-DfZ-8u74.js";import"./useFocusRing-L-u3dQN8.js";import"./useFocusable-DY9nb4Q3.js";import"./ContextMenuSection-DqvIY19i.js";import"./Dialog-D58MUJ_9.js";import"./RSPContexts-w3AEViLT.js";import"./OverlayArrow-CQI9fhos.js";import"./useControlledState-Py7g_hCX.js";import"./Collection-BQ6XNSlA.js";import"./CollectionBuilder-B0ypalQC.js";import"./SelectionIndicator-By4SQJVw.js";import"./Separator-N_51tPRN.js";import"./SelectionManager-6kMjKjHw.js";import"./useEvent-r3YrjOS6.js";import"./useCollator-BdaohURQ.js";import"./FocusScope-D_vsK9iJ.js";import"./VisuallyHidden-BVBeKb2k.js";import"./getActionGroupSlot-CxSNR9ht.js";import"./useStatic-1YPHy18H.js";import"./context-CVZR0KsW.js";import"./FormField.module-CqWyJNQI.js";import"./ReactAriaControlledValueFix-C-rmsYnN.js";import"./Form-r-7bApRf.js";import"./Group-BxNa3NfW.js";import"./Input-D8C7sCTv.js";import"./useTextField-v5hGozoz.js";import"./useFormReset-D7H6HyHT.js";import"./useFormValidation-GdVWjc_V.js";import"./TextField-qs-UTjJy.js";import"./FieldDescription-B2j6G7O5.js";import"./Tooltip-D32O0Uqd.js";import"./ClearPropsContextView-CYMEx9M6.js";import"./ContextualHelpTrigger-BRnvDBNW.js";import"./Popover-D2XSaC_F.js";import"./useOverlayController-B3CyRh3q.js";import"./OverlayContextProvider-DD0eGq15.js";import"./OverlayTrigger-CPNea7uG.js";import"./ControlledNotification-CR3joEtN.js";import"./Heading-DLxD6IRh.js";import"./Heading-DLcHG4v5.js";import"./useManagedValue-DS7RTteu.js";const V=(t=q)=>async i=>{if(!i)return!0;try{const n=await g.fromDeclaration(t).validate(i);return L(n.isValid)?await n.isValid:n.isValid}catch{return!1}},{action:_}=__STORYBOOK_MODULE_ACTIONS__,A=_("submit"),v={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[E.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},st={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const t=async n=>{await h(1e3),A(n)},i=c({defaultValues:{user:""}}),s=C();return r.jsx(u,{form:i,onSubmit:t,children:r.jsxs(T,{children:[r.jsx(s,{name:"user",children:r.jsx(O,{children:r.jsx(d,{children:"Suche"})})}),r.jsx(D,{children:r.jsx(e,{type:"submit",children:"Submit"})})]})})}},a={},m={render:()=>{const t=c();return r.jsxs(u,{form:t,onSubmit:async()=>await h(2e3),children:[r.jsx(p,{name:"text",rules:{required:!0},children:r.jsxs(B,{validationPolicy:v,children:[r.jsx(d,{children:"Password"}),r.jsx(e,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(e,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(e,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(e,{type:"submit",children:"Submit"})]})}},l={render:()=>{const t=g.fromDeclaration(v),i=c({defaultValues:{password:""}});return r.jsxs(u,{form:i,onSubmit:async s=>{await h(2e3),console.log("submitted",s)},children:[r.jsx(p,{rules:{required:!0,validate:V(t)},name:"password",children:r.jsxs(B,{validationPolicy:t,children:[r.jsx(d,{children:"Password"}),r.jsx(e,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(e,{onPress:()=>i.reset(),children:"Reset"}),r.jsx(e,{type:"submit",children:"Submit"})]})}};var f,x,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(y=(x=a.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var P,b,F;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"} rules={{
        required: true
      }}>
          <PasswordCreationField validationPolicy={policyDecl}>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
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
}`,...(F=(b=m.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};var j,w,S;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const customPolicy = Policy.fromDeclaration(policyDecl);
    const form = useForm({
      defaultValues: {
        password: ""
      }
    });
    return <Form form={form} onSubmit={async values => {
      await sleep(2000);
      console.log("submitted", values);
    }}>
        <Field rules={{
        required: true,
        validate: generatePasswordCreationFieldValidation(customPolicy)
      }} name="password">
          <PasswordCreationField validationPolicy={customPolicy}>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <br />
        <Button onPress={() => form.reset()}>Reset</Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(S=(w=l.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};const nt=["Default","WithFocusAndError","WithForm"];export{a as Default,m as WithFocusAndError,l as WithForm,nt as __namedExportsOrder,st as default};
